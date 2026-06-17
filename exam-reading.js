/* ============================================================================
   Swedish CI — exam-reading.js
   Controller for the SFI Reading Exam Simulator.
   Handles exam lists, timer logic, grading, review, and attempt logging.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SvCI;
  if (!S) {
    console.error("SvCI shared infrastructure not loaded.");
    return;
  }

  // Active state
  var state = {
    level: "C",             // "C" or "D"
    exams: [],              // exams for the active level
    selectedExam: null,
    answers: {},            // keyed by "passageIndex-questionIndex" -> optionIndex
    timeLeft: 0,            // seconds remaining
    timerInterval: null
  };

  // Initialize
  function init() {
    S.boot();
    S.gameHeader("#header", "exam-reading");

    bindEvents();
    loadExamsList();
    renderHistoryTable();
  }

  function bindEvents() {
    // Level selection tabs
    S.$$(".level-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        S.$$(".level-tab").forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        state.level = tab.getAttribute("data-level");
        loadExamsList();
      });
    });

    // Instructions back button
    S.$("#instructions-back-btn").addEventListener("click", function () {
      switchView("setup");
    });

    // Start exam button
    S.$("#instructions-start-btn").addEventListener("click", startExam);

    // Submit exam button
    S.$("#exam-submit-btn").addEventListener("click", function () {
      var skipConfirm = window.location.search.indexOf("test=true") !== -1;
      if (skipConfirm || confirm("Är du säker på att du vill lämna in provet? / Are you sure you want to submit?")) {
        submitExam(false);
      }
    });

    // Results back button
    S.$("#results-done-btn").addEventListener("click", function () {
      switchView("setup");
      loadExamsList();
      renderHistoryTable();
    });
  }

  function switchView(viewId) {
    S.$("#view-setup").classList.add("hidden");
    S.$("#view-instructions").classList.add("hidden");
    S.$("#view-exam").classList.add("hidden");
    S.$("#view-results").classList.add("hidden");

    S.$("#view-" + viewId).classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Load and display exams list based on selected level
  function loadExamsList() {
    var examSource = state.level === "C" ? window.SvCI_EXAM_READING_C : window.SvCI_EXAM_READING_D;
    state.exams = examSource || [];

    var listDiv = S.$("#exam-list");
    listDiv.innerHTML = "";

    if (state.exams.length === 0) {
      listDiv.appendChild(S.el("div", {
        class: "muted center",
        style: "grid-column: 1 / -1; padding: 40px 0;",
        text: "Inga prov tillgängliga för denna nivå ännu."
      }));
      return;
    }

    var history = S.Store.get("progress.exams", []);

    state.exams.forEach(function (exam) {
      // Find latest score for this exam
      var attempts = history.filter(function (h) { return h.id === exam.id && h.kind === "reading"; });
      var latestScoreText = "";
      if (attempts.length > 0) {
        // sort by date desc
        attempts.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
        var latest = attempts[0];
        var pct = Math.round((latest.score / latest.total) * 100);
        latestScoreText = "Senaste: " + pct + "% (" + latest.score + "/" + latest.total + ")";
      }

      var card = S.el("div", { class: "mode-card" }, [
        S.el("span", { class: "icon", text: "📝" }),
        S.el("div", { class: "row between", style: "align-items: center; width: 100%; margin: 4px 0 0;" }, [
          S.el("h3", { text: exam.title, style: "margin:0;" }),
          latestScoreText ? S.el("span", { class: "pill", style: "font-size:.7rem;padding:2px 8px;", text: latestScoreText }) : null
        ].filter(Boolean)),
        S.el("p", { text: "Tid: " + exam.timeMinutes + " minuter. Innehåller " + exam.texts.length + " texter och frågor.", style: "margin-top:6px; color: var(--ink-dim);" }),
        S.el("button", {
          class: "btn btn-primary btn-sm mt-16",
          text: "Starta prov · Start",
          onClick: function () { showInstructions(exam); }
        })
      ]);

      listDiv.appendChild(card);
    });
  }

  // Show pre-exam instruction screen
  function showInstructions(exam) {
    state.selectedExam = exam;
    S.$("#instructions-title").textContent = exam.title;
    S.$("#instructions-level-pill").textContent = "KURS " + exam.level;
    S.$("#instructions-time-pill").textContent = exam.timeMinutes + " MINUTER";
    S.$("#instructions-time-text").textContent = exam.timeMinutes + " minuter";
    switchView("instructions");
  }

  // Initialize and run the timed exam view
  function startExam() {
    var exam = state.selectedExam;
    if (!exam) return;

    state.answers = {};
    state.timeLeft = exam.timeMinutes * 60;

    S.$("#exam-title").textContent = exam.title;
    S.$("#exam-level-pill").textContent = "Kurs " + exam.level;

    // Render passages and question cards
    var contentDiv = S.$("#exam-content");
    contentDiv.innerHTML = "";

    exam.texts.forEach(function (passage, pIdx) {
      var passageCard = S.el("div", { class: "exam-passage-card" }, [
        S.el("div", { class: "row between" }, [
          S.el("h3", { class: "exam-passage-title", text: passage.title }),
          S.el("span", { class: "pill faint", style: "text-transform: capitalize;", text: passage.type })
        ]),
        S.el("p", { class: "exam-passage-text", text: passage.text })
      ]);

      passage.questions.forEach(function (q, qIdx) {
        var qId = pIdx + "-" + qIdx;
        
        var optionsDiv = S.el("div", { class: "exam-options-grid" });
        q.options.forEach(function (opt, oIdx) {
          var optPill = S.el("button", {
            class: "exam-option-pill",
            onClick: function () { selectOption(qId, oIdx); }
          }, [
            S.el("span", { class: "exam-option-indicator" }),
            S.el("span", { text: opt })
          ]);
          optionsDiv.appendChild(optPill);
        });

        var questionBlock = S.el("div", { class: "exam-question-block" }, [
          S.el("div", { class: "exam-question-title" }, [
            S.el("strong", { text: "Fråga " + (qIdx + 1) + ": " }),
            S.el("span", { text: q.q }),
            S.el("div", { class: "faint", style: "font-size:0.85rem;margin-top:2px;", text: q.qEn })
          ]),
          optionsDiv
        ]);

        passageCard.appendChild(questionBlock);
      });

      contentDiv.appendChild(passageCard);
    });

    // Start timer countdown loop
    updateTimerDisplay();
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(handleTimerTick, 1000);

    switchView("exam");
  }

  function selectOption(qId, oIdx) {
    state.answers[qId] = oIdx;

    // Refresh option select visual pills
    var contentDiv = S.$("#exam-content");
    // Find options grid containing this question selection
    var questionBlocks = S.$$(".exam-question-block", contentDiv);
    
    // We map qId (passageIdx-questionIdx) to locate the correct question index across children
    var parts = qId.split("-");
    var pIdx = parseInt(parts[0], 10);
    var qIdx = parseInt(parts[1], 10);
    
    var exam = state.selectedExam;
    // Calculate global index offset or traverse DOM
    var targetCard = contentDiv.children[pIdx];
    var targetBlock = S.$$(".exam-question-block", targetCard)[qIdx];
    var pills = S.$$(".exam-option-pill", targetBlock);

    pills.forEach(function (pill, idx) {
      if (idx === oIdx) {
        pill.classList.add("selected");
      } else {
        pill.classList.remove("selected");
      }
    });
  }

  function handleTimerTick() {
    state.timeLeft -= 1;
    updateTimerDisplay();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      S.toast("Tiden är slut! Provet lämnas in.", "err");
      submitExam(true); // auto submit
    } else if (state.timeLeft < 60) {
      // tick audibly
      S.Sfx.tick();
    }
  }

  function updateTimerDisplay() {
    var min = Math.floor(state.timeLeft / 60);
    var sec = state.timeLeft % 60;
    var display = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0");

    var widget = S.$("#timer-widget");
    var displaySpan = S.$("#timer-display");
    displaySpan.textContent = display;

    // Style alerts
    widget.className = "timer-widget";
    if (state.timeLeft < 120) {
      widget.classList.add("danger"); // pulse
    } else if (state.timeLeft < 300) {
      widget.classList.add("warning");
    }
  }

  // Grade the responses and show results view
  function submitExam(isAutoSubmit) {
    clearInterval(state.timerInterval);

    var exam = state.selectedExam;
    if (!exam) return;

    var totalQuestions = 0;
    var correctAnswers = 0;

    exam.texts.forEach(function (passage) {
      totalQuestions += passage.questions.length;
    });

    // Score calculations
    exam.texts.forEach(function (passage, pIdx) {
      passage.questions.forEach(function (q, qIdx) {
        var qId = pIdx + "-" + qIdx;
        var selected = state.answers[qId];
        if (selected === q.correct) {
          correctAnswers++;
        }
      });
    });

    var scorePct = Math.round((correctAnswers / totalQuestions) * 100);
    var passed = scorePct >= 80;

    // Save to local storage
    var attempt = {
      id: exam.id,
      title: exam.title,
      kind: "reading",
      level: exam.level,
      score: correctAnswers,
      total: totalQuestions,
      date: S.todayStr()
    };
    
    var history = S.Store.get("progress.exams", []);
    history.push(attempt);
    S.Store.get("progress.exams"); // reload
    // set completed flag
    var completedMap = S.Store.get("progress.reader.completed", {});
    completedMap[exam.id] = true;
    S.Store.save();

    // Audio cue
    if (passed) {
      S.Sfx.correct();
    } else {
      S.Sfx.wrong();
    }

    // Set results view contents
    S.$("#results-score-text").textContent = "Du fick " + correctAnswers + " av " + totalQuestions + " rätt (" + scorePct + "%).";
    
    var statusPill = S.$("#results-status-pill");
    statusPill.className = "pill " + (passed ? "green" : "red");
    statusPill.textContent = passed ? "GODKÄND (G) · PASSED" : "ICKE GODKÄND (IG) · FAILED";

    var resultsIcon = S.$("#results-icon");
    resultsIcon.textContent = passed ? "🏆" : "❌";

    var noteText = "";
    if (passed) {
      noteText = "Grymt jobbat! Du klarade provet och uppnådde betygskravet på 80% eller mer. Ditt resultat har registrerats under historiken.";
    } else {
      noteText = "Du nådde tyvärr inte godkänt gräns (80%). Men ge inte upp! Gå igenom dina felaktiga svar nedan, träna mer på Graderad Läsning och försök igen.";
    }
    S.$("#results-note").textContent = noteText;

    // Missed text types analysis for focus areas suggestions
    var missedTypes = {};
    var totalMissed = 0;
    exam.texts.forEach(function (passage, pIdx) {
      passage.questions.forEach(function (q, qIdx) {
        var qId = pIdx + "-" + qIdx;
        var selected = state.answers[qId];
        if (selected !== q.correct) {
          missedTypes[passage.type] = (missedTypes[passage.type] || 0) + 1;
          totalMissed++;
        }
      });
    });

    var suggestionsDiv = S.$("#results-suggestions");
    suggestionsDiv.innerHTML = "";

    if (totalMissed > 0) {
      var suggList = [];
      if (missedTypes["argumenterande"]) {
        suggList.push(S.el("div", { class: "card-tight", style: "border: 1px solid var(--stroke); border-radius: var(--radius-sm); margin-bottom: 10px; padding: 12px; font-size: 0.88rem;" }, [
          S.el("span", { style: "display: block; font-weight: 700; color: var(--pink); margin-bottom: 4px;", text: "💡 Fokusområde: Argumenterande texter" }),
          S.el("span", { text: "Du missade frågor på argumenterande texter. Tips: Läs mer komplexa opinionsartiklar i " }),
          S.el("a", { href: "news.html", text: "Nyhetsläsaren" }),
          S.el("span", { text: " och öva på bindeord i " }),
          S.el("a", { href: "connectors.html", text: "Connectors" }),
          S.el("span", { text: "." })
        ]));
      }
      if (missedTypes["instruerande"]) {
        suggList.push(S.el("div", { class: "card-tight", style: "border: 1px solid var(--stroke); border-radius: var(--radius-sm); margin-bottom: 10px; padding: 12px; font-size: 0.88rem;" }, [
          S.el("span", { style: "display: block; font-weight: 700; color: var(--gold); margin-bottom: 4px;", text: "💡 Fokusområde: Instruerande texter" }),
          S.el("span", { text: "Du missade frågor som handlar om instruktioner, regler eller scheman. Tips: Läs liknande instruerande texter i " }),
          S.el("a", { href: "reader.html", text: "Graderad Läsning" }),
          S.el("span", { text: " eller " }),
          S.el("a", { href: "news.html", text: "Nyhetsläsaren" }),
          S.el("span", { text: "." })
        ]));
      }
      if (missedTypes["informerande"]) {
        suggList.push(S.el("div", { class: "card-tight", style: "border: 1px solid var(--stroke); border-radius: var(--radius-sm); margin-bottom: 10px; padding: 12px; font-size: 0.88rem;" }, [
          S.el("span", { style: "display: block; font-weight: 700; color: var(--blue); margin-bottom: 4px;", text: "💡 Fokusområde: Informerande texter" }),
          S.el("span", { text: "Du missade frågor på beskrivande eller informerande texter. Tips: Utöka din läsvolym i " }),
          S.el("a", { href: "reader.html", text: "Graderad Läsning" }),
          S.el("span", { text: " för att möta fler vardagliga ord, och se dina framsteg i " }),
          S.el("a", { href: "tracker.html", text: "Vocab Tracker" }),
          S.el("span", { text: "." })
        ]));
      }

      if (suggList.length > 0) {
        suggestionsDiv.appendChild(S.el("h3", { style: "font-size: 0.95rem; margin: 16px 0 8px; font-weight: 700; color: var(--ink);", text: "Rekommenderade fokusområden · Recommended Focus Areas:" }));
        suggList.forEach(function (sugg) {
          suggestionsDiv.appendChild(sugg);
        });
      }
    }

    // Render detailed corrections
    var reviewDiv = S.$("#results-review-content");
    reviewDiv.innerHTML = "";

    exam.texts.forEach(function (passage, pIdx) {
      var passageCard = S.el("div", { class: "exam-passage-card" }, [
        S.el("h3", { class: "exam-passage-title", text: passage.title }),
        S.el("p", { class: "exam-passage-text", text: passage.text })
      ]);

      passage.questions.forEach(function (q, qIdx) {
        var qId = pIdx + "-" + qIdx;
        var selectedIdx = state.answers[qId];

        var optionsDiv = S.el("div", { class: "exam-options-grid" });
        q.options.forEach(function (opt, oIdx) {
          var pillClass = "exam-option-pill disabled";
          
          if (oIdx === q.correct) {
            pillClass += " correct-ans"; // show correct in green
          } else if (oIdx === selectedIdx) {
            pillClass += " wrong-ans"; // show wrong selection in red
          }

          optionsDiv.appendChild(S.el("div", { class: pillClass }, [
            S.el("span", { class: "exam-option-indicator" }),
            S.el("span", { text: opt })
          ]));
        });

        var explanationBox = S.el("div", { class: "exam-explanation-box" }, [
          S.el("strong", { text: "Rätt svar förklarat: " }),
          S.el("span", { text: q.explain })
        ]);

        var questionBlock = S.el("div", { class: "exam-question-block" }, [
          S.el("div", { class: "exam-question-title" }, [
            S.el("strong", { text: "Fråga " + (qIdx + 1) + ": " }),
            S.el("span", { text: q.q }),
            S.el("div", { class: "faint", style: "font-size:0.85rem;margin-top:2px;", text: q.qEn })
          ]),
          optionsDiv,
          explanationBox
        ]);

        passageCard.appendChild(questionBlock);
      });

      reviewDiv.appendChild(passageCard);
    });

    switchView("results");
  }

  // Render previous attempts table
  function renderHistoryTable() {
    var history = S.Store.get("progress.exams", []);
    var filtered = history.filter(function (h) { return h.kind === "reading"; });

    var tbody = S.$("#history-rows");
    tbody.innerHTML = "";

    if (filtered.length === 0) {
      tbody.appendChild(S.el("tr", {}, [
        S.el("td", { colspan: 6, class: "muted center", style: "padding:20px;", text: "Inga prov genomförda än." })
      ]));
      return;
    }

    // Sort attempts by date (newest first)
    filtered.sort(function (a, b) {
      return new Date(b.date + "T00:00:00") - new Date(a.date + "T00:00:00");
    });

    filtered.forEach(function (h, idx) {
      var pct = Math.round((h.score / h.total) * 100);
      var passed = pct >= 80;
      var statusBadgeClass = passed ? "pill green" : "pill red";
      var statusText = passed ? "G" : "IG";

      // Find preceding attempt of the same exam chronologically
      var prevAttempt = null;
      for (var i = idx + 1; i < filtered.length; i++) {
        if (filtered[i].id === h.id) {
          prevAttempt = filtered[i];
          break;
        }
      }

      var trendEl = null;
      if (prevAttempt) {
        var prevPct = Math.round((prevAttempt.score / prevAttempt.total) * 100);
        var diff = pct - prevPct;
        if (diff > 0) {
          trendEl = S.el("span", { style: "color: var(--green); margin-left: 6px; font-weight: bold; font-size: 0.82rem;", text: "▲ +" + diff + "%" });
        } else if (diff < 0) {
          trendEl = S.el("span", { style: "color: var(--pink); margin-left: 6px; font-weight: bold; font-size: 0.82rem;", text: "▼ " + diff + "%" });
        } else {
          trendEl = S.el("span", { style: "color: var(--ink-dim); margin-left: 6px; font-size: 0.82rem;", text: "■ 0%" });
        }
      }

      tbody.appendChild(S.el("tr", {}, [
        S.el("td", { text: h.date }),
        S.el("td", { text: h.title || "Läsförståelseprov" }),
        S.el("td", { text: "Kurs " + h.level }),
        S.el("td", { text: h.score + " / " + h.total }),
        S.el("td", {}, [
          S.el("span", { text: pct + "%" }),
          trendEl
        ].filter(Boolean)),
        S.el("td", {}, [
          S.el("span", { class: statusBadgeClass, style: "font-size: 0.72rem; padding: 2px 6px;", text: statusText })
        ])
      ]));
    });
  }

  // Run on DOM load
  document.addEventListener("DOMContentLoaded", init);

})();
