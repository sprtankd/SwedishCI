/* ============================================================================
   Swedish CI — data/exam-listening-c.js
   Timed SFI C-style listening comprehension tests.
   Level: SFI Kurs C (A2-high / B1 range).
   Time limit: 20 minutes.
   Contains 2 exams. Replays allowed: 2.
   Registers into window.SvCI_EXAM_LISTENING_C.
   ========================================================================== */
(function () {
  "use strict";

  var exams = [
    {
      id: "exam-lc-1",
      title: "Hörförståelse C — Prov 1",
      level: "C",
      timeMinutes: 20,
      passages: [
        {
          id: "lc1-p1",
          title: "Meddelande på telefonsvararen",
          transcript:
            "Hej! Det är Sara. Jag ville bara berätta att jag blir lite sen till vår middag ikväll. " +
            "Min buss är försenad på grund av en olycka på motorvägen. Jag tror att jag är framme vid " +
            "restaurangen runt klockan halv sju istället för klockan sex. Jag hoppas att det är okej " +
            "för dig. Vi ses snart!",
          replays: 2,
          questions: [
            {
              type: "gist",
              q: "Varför blir Sara sen till middagen?",
              qEn: "Why is Sara late for dinner?",
              options: [
                "Hennes buss är försenad",
                "Hon måste arbeta över",
                "Hon har glömt klockan",
                "Hon hittar inte till restaurangen"
              ],
              correct: 0,
              explain: "Sara förklarar: „Min buss är försenad på grund av en olycka på motorvägen.“"
            },
            {
              type: "detail",
              q: "När beräknar Sara att hon är framme?",
              qEn: "When does Sara estimate she will arrive?",
              options: ["Klockan 18:00", "Klockan 18:30 (halv sju)", "Klockan 19:00", "Klockan 17:30"],
              correct: 1,
              explain: "Sara säger: „Jag tror att jag är framme... runt klockan halv sju (18:30) istället för klockan sex.“"
            }
          ]
        },
        {
          id: "lc1-p2",
          title: "Tågutrop på centralstationen",
          transcript:
            "Varning för ett spårändrat tåg. Tåg nummer 42 mot Stockholm central med ordinarie avgångstid " +
            "klockan 14:15 kommer idag att avgå från spår 8 istället för spår 3. Ny beräknad avgångstid " +
            "är klockan 14:30. Vi ber alla resenärer att flytta till spår 8 och vara försiktiga vid spårkanten.",
          replays: 2,
          questions: [
            {
              type: "detail",
              q: "Från vilket spår avgår tåget idag?",
              qEn: "Which track does the train depart from today?",
              options: ["Spår 3", "Spår 8", "Spår 42", "Spår 15"],
              correct: 1,
              explain: "Utropet säger: „...kommer idag att avgå från spår 8 istället för spår 3.“"
            },
            {
              type: "detail",
              q: "Hur mycket är tåget försenat?",
              qEn: "How late is the train delayed?",
              options: ["5 minuter", "30 minuter", "15 minuter", "Tåget är inställt"],
              correct: 2,
              explain: "Ordinarie tid är 14:15 och ny tid är 14:30, vilket ger 15 minuters försening."
            },
            {
              type: "gist",
              q: "Vilken är tågets slutstation?",
              qEn: "What is the train's final destination?",
              options: ["Stockholm central", "Uppsala", "Göteborg central", "Malmö central"],
              correct: 0,
              explain: "Meddelandet anger: „Tåg nummer 42 mot Stockholm central...“"
            }
          ]
        }
      ]
    },
    {
      id: "exam-lc-2",
      title: "Hörförståelse C — Prov 2",
      level: "C",
      timeMinutes: 20,
      passages: [
        {
          id: "lc2-p1",
          title: "Samtal på vårdcentralen",
          transcript:
            "Hej, jag heter Peter och jag skulle vilja boka en tid hos en läkare. Jag har haft ont i halsen " +
            "och hög feber i tre dagar nu. Det har blivit värre idag och jag har jättesvårt att svälja. " +
            "Jag bor i närheten och kan komma när som helst under eftermiddagen. Mitt personnummer är 850312-4455.",
          replays: 2,
          questions: [
            {
              type: "gist",
              q: "Vilka symtom har Peter?",
              qEn: "What symptoms does Peter have?",
              options: [
                "Ont i halsen och hög feber",
                "Huvudvärk och hosta",
                "Ont i magen och illamående",
                "Han har brutit benet"
              ],
              correct: 0,
              explain: "Peter uppger: „Jag har haft ont i halsen och hög feber...“"
            },
            {
              type: "detail",
              q: "Hur länge har Peter varit sjuk?",
              qEn: "How long has Peter been sick?",
              options: ["En vecka", "Idag", "I tre dagar", "Sedan igår kväll"],
              correct: 2,
              explain: "Peter förklarar: „Jag har haft ont i halsen och hög feber i tre dagar nu.“"
            }
          ]
        },
        {
          id: "lc2-p2",
          title: "Intervju i radio om en ny bok",
          transcript:
            "Idag har vi författaren Maria Ekström i studion. Hon har skrivit en ny spännande historisk roman " +
            "som handlar om livet i norra Sverige under 1800-talet. Boken heter 'De kalla vintrarna' och har " +
            "redan sålt i över tiotusen exemplar under sin allra första månad. Maria berättar att hon fick idén " +
            "till berättelsen från sin mormors gamla handskrivna dagböcker.",
          replays: 2,
          questions: [
            {
              type: "gist",
              q: "Vad handlar boken 'De kalla vintrarna' om?",
              qEn: "What is the book 'The Cold Winters' about?",
              options: [
                "Livet i norra Sverige under 1800-talet",
                "En äventyrlig resa i rymden",
                "Hur man överlever vargavintrar",
                "Svensk matlagning förr i tiden"
              ],
              correct: 0,
              explain: "Boken handlar om „livet i norra Sverige under 1800-talet.“"
            },
            {
              type: "detail",
              q: "Varifrån fick författaren idén till boken?",
              qEn: "Where did the author get the idea for the book?",
              options: [
                "Från en tidningsartikel",
                "Från sin mormors gamla dagböcker",
                "Från sin egen fantasi under en promenad",
                "Från en känd svensk historisk film"
              ],
              correct: 1,
              explain: "Maria Ekström berättar att hon „fick idén till berättelsen från sin mormors gamla handskrivna dagböcker.“"
            },
            {
              type: "detail",
              q: "Hur många exemplar har boken sålt under första månaden?",
              qEn: "How many copies did the book sell in its first month?",
              options: ["Över tiotusen", "Tusen", "Femtusen", "Hundra"],
              correct: 0,
              explain: "Boken har „redan sålt i över tiotusen exemplar under sin allra första månad.“"
            }
          ]
        }
      ]
    }
  ];

  window.SvCI_EXAM_LISTENING_C = exams;
})();
