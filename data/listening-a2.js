/* ============================================================================
   Swedish CI — data/listening-a2.js
   Short listening passages at A2 level (~50-80 spoken words). Everyday situations:
   a phone message, a shop dialogue, a station announcement, a monologue, and a
   booking call. Audio is generated from each transcript via the shared Speech
   (sv-SE TTS) helper — no audio files required.
   Registers into window.SvCI_LISTENING.
   ========================================================================== */
(function () {
  var passages = [

    {
      id: "listen-a2-message-001",
      title: "Ett meddelande på telefonen",
      titleEn: "A phone message",
      level: "A2",
      theme: "Vardagsliv · Daily life",
      transcript:
        "Hej Lisa, det är Anna. Jag ringer för att vi skulle träffas i morgon. Tyvärr " +
        "måste jag jobba till klockan sex, så jag kan inte komma klockan fyra. Kan vi ses " +
        "klockan sju i stället? Vi kan träffas på kaféet vid torget. Ring mig gärna i " +
        "kväll, så bestämmer vi. Hej då!",
      glossary: {
        "meddelande": "message",
        "ringer": "am calling",
        "träffas": "to meet",
        "tyvärr": "unfortunately",
        "i stället": "instead",
        "torget": "the square",
        "gärna": "gladly / please",
        "bestämmer": "decide"
      },
      questions: [
        { type: "gist", q: "Varför ringer Anna?", qEn: "Why is Anna calling?",
          options: ["För att ändra tiden de ska träffas", "För att avboka helt", "För att bjuda på fest"], correct: 0,
          explain: "Anna kan inte klockan fyra och föreslår en ny tid." },
        { type: "detail", q: "Vilken tid föreslår Anna i stället?", qEn: "What time does Anna suggest instead?",
          options: ["Klockan sju", "Klockan fyra", "Klockan sex"], correct: 0,
          explain: "„Kan vi ses klockan sju i stället?“" },
        { type: "detail", q: "Var vill Anna träffas?", qEn: "Where does Anna want to meet?",
          options: ["På kaféet vid torget", "Hemma hos Lisa", "På jobbet"], correct: 0,
          explain: "„Vi kan träffas på kaféet vid torget.“" },
        { type: "detail", q: "Vad ska Lisa göra?", qEn: "What should Lisa do?",
          options: ["Ringa Anna i kväll", "Skicka ett mejl", "Vänta på torget"], correct: 0,
          explain: "„Ring mig gärna i kväll, så bestämmer vi.“" }
      ]
    },

    {
      id: "listen-a2-shop-002",
      title: "I klädaffären",
      titleEn: "At the clothes shop",
      level: "A2",
      theme: "Inköp · Shopping",
      transcript:
        "Hej, kan jag hjälpa dig? Ja tack, jag letar efter en blå tröja. Vilken storlek " +
        "har du? Jag har medium. Vi har den här i medium. Vill du prova den? Ja gärna. Var " +
        "ligger provrummet? Det ligger där borta till höger. Hur passade den? Den var lite " +
        "för liten. Har du en större? Ja, här är en i large. Perfekt, den tar jag.",
      glossary: {
        "letar efter": "looking for",
        "tröja": "sweater / jumper",
        "storlek": "size",
        "prova": "try on",
        "provrummet": "the fitting room",
        "där borta": "over there",
        "passade": "fitted",
        "större": "bigger"
      },
      questions: [
        { type: "gist", q: "Var utspelar sig samtalet?", qEn: "Where does the conversation take place?",
          options: ["I en klädaffär", "På en restaurang", "På ett bibliotek"], correct: 0,
          explain: "De pratar om en tröja, storlek och provrum — i en klädaffär." },
        { type: "detail", q: "Vad letar kunden efter?", qEn: "What is the customer looking for?",
          options: ["En blå tröja", "En röd jacka", "Ett par skor"], correct: 0,
          explain: "„…jag letar efter en blå tröja.“" },
        { type: "detail", q: "Vad var problemet med den första tröjan?", qEn: "What was the problem with the first sweater?",
          options: ["Den var för liten", "Den var för dyr", "Fel färg"], correct: 0,
          explain: "„Den var lite för liten.“" },
        { type: "detail", q: "Vilken storlek köper kunden till slut?", qEn: "Which size does the customer finally buy?",
          options: ["Large", "Medium", "Small"], correct: 0,
          explain: "„Ja, här är en i large. Perfekt, den tar jag.“" }
      ]
    },

    {
      id: "listen-a2-station-003",
      title: "Ett meddelande på stationen",
      titleEn: "An announcement at the station",
      level: "A2",
      theme: "Resor · Travel",
      transcript:
        "Hej och välkommen till Centralstationen. Tåget till Göteborg, avgång klockan tio " +
        "och trettio, är tyvärr försenat. Den nya avgångstiden är klockan elva. Tåget avgår " +
        "från spår fyra. Vi ber om ursäkt för förseningen. Resenärer som ska vidare till " +
        "Malmö byter tåg i Göteborg. Tack för att ni reser med oss.",
      glossary: {
        "avgång": "departure",
        "försenat": "delayed",
        "avgångstiden": "the departure time",
        "avgår": "departs",
        "spår": "platform / track",
        "ber om ursäkt": "apologise",
        "förseningen": "the delay",
        "resenärer": "passengers",
        "byter": "change"
      },
      questions: [
        { type: "gist", q: "Vad handlar meddelandet om?", qEn: "What is the announcement about?",
          options: ["Ett försenat tåg", "En ny biljett", "Ett borttappat bagage"], correct: 0,
          explain: "„Tåget till Göteborg … är tyvärr försenat.“" },
        { type: "detail", q: "Vilken är den nya avgångstiden?", qEn: "What is the new departure time?",
          options: ["Klockan elva", "Klockan tio och trettio", "Klockan fyra"], correct: 0,
          explain: "„Den nya avgångstiden är klockan elva.“" },
        { type: "detail", q: "Från vilket spår avgår tåget?", qEn: "From which platform does the train depart?",
          options: ["Spår fyra", "Spår tio", "Spår ett"], correct: 0,
          explain: "„Tåget avgår från spår fyra.“" },
        { type: "detail", q: "Var byter man tåg för att åka till Malmö?", qEn: "Where do you change trains to go to Malmö?",
          options: ["I Göteborg", "I Stockholm", "I Malmö"], correct: 0,
          explain: "„Resenärer som ska vidare till Malmö byter tåg i Göteborg.“" }
      ]
    },

    {
      id: "listen-a2-dayoff-004",
      title: "Min lediga dag",
      titleEn: "My day off",
      level: "A2",
      theme: "Fritid · Free time",
      transcript:
        "I dag är jag ledig från jobbet. På morgonen sov jag länge och åt en lugn frukost. " +
        "Sedan tog jag en promenad i parken med min hund. Vädret var fint, så vi var ute i " +
        "nästan en timme. På eftermiddagen ska jag handla mat och laga en god middag. I " +
        "kväll kommer min syster på besök. Vi ska titta på en film tillsammans. Jag tycker " +
        "om lediga dagar.",
      glossary: {
        "ledig": "off / free (from work)",
        "sov länge": "slept late",
        "promenad": "a walk",
        "vädret": "the weather",
        "handla": "to shop",
        "laga": "to cook",
        "på besök": "visiting",
        "tillsammans": "together"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["En ledig dag", "En arbetsdag", "En semesterresa"], correct: 0,
          explain: "„I dag är jag ledig från jobbet.“" },
        { type: "detail", q: "Vad gjorde personen på morgonen?", qEn: "What did the person do in the morning?",
          options: ["Sov länge och åt frukost", "Gick till jobbet", "Handlade mat"], correct: 0,
          explain: "„På morgonen sov jag länge och åt en lugn frukost.“" },
        { type: "detail", q: "Vem kommer på besök i kväll?", qEn: "Who is coming to visit tonight?",
          options: ["Personens syster", "En kollega", "En granne"], correct: 0,
          explain: "„I kväll kommer min syster på besök.“" },
        { type: "detail", q: "Vad ska de göra på kvällen?", qEn: "What are they going to do in the evening?",
          options: ["Titta på en film", "Gå på restaurang", "Spela fotboll"], correct: 0,
          explain: "„Vi ska titta på en film tillsammans.“" }
      ]
    },

    {
      id: "listen-a2-booking-005",
      title: "Att boka en tid",
      titleEn: "Booking an appointment",
      level: "A2",
      theme: "Hälsa · Health",
      transcript:
        "Vårdcentralen, god morgon. Hej, jag skulle vilja boka en tid. Jag har ont i " +
        "ryggen. Jaha, hur länge har du haft ont? I ungefär en vecka. Kan du komma i morgon " +
        "klockan nio? Nej, då jobbar jag. Har ni något på eftermiddagen? Vi har en tid " +
        "klockan halv tre. Det passar bra. Vad heter du? Jag heter Karim Hassan. Tack, då " +
        "ses vi i morgon.",
      glossary: {
        "vårdcentralen": "the health centre",
        "boka en tid": "book an appointment",
        "ont i ryggen": "back pain",
        "ungefär": "about / approximately",
        "passar": "suits / works",
        "halv tre": "half past two (2:30)"
      },
      questions: [
        { type: "gist", q: "Vad vill personen göra?", qEn: "What does the person want to do?",
          options: ["Boka en tid på vårdcentralen", "Beställa medicin", "Avboka en tid"], correct: 0,
          explain: "„…jag skulle vilja boka en tid.“" },
        { type: "detail", q: "Vad har Karim för problem?", qEn: "What problem does Karim have?",
          options: ["Ont i ryggen", "Ont i halsen", "Feber"], correct: 0,
          explain: "„Jag har ont i ryggen.“" },
        { type: "detail", q: "Varför kan han inte komma klockan nio?", qEn: "Why can't he come at nine?",
          options: ["Då jobbar han", "Han är sjuk", "Han är bortrest"], correct: 0,
          explain: "„Nej, då jobbar jag.“" },
        { type: "detail", q: "Vilken tid bokar han?", qEn: "What time does he book?",
          options: ["Halv tre", "Klockan nio", "Klockan ett"], correct: 0,
          explain: "„Vi har en tid klockan halv tre. Det passar bra.“" }
      ]
    }

  ];

  passages.forEach(function (p) {
    p.wordCount = (p.transcript.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_LISTENING = (window.SvCI_LISTENING || []).concat(passages);
})();
