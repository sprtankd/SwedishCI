/* ============================================================================
   Swedish CI — data/listening-b1.js
   Listening passages at B1 level (~95-110 spoken words). Longer and more complex:
   a radio interview, a workplace conversation, an apartment voicemail, a recycling
   announcement, and a short talk about "lagom". Audio via the shared Speech helper.
   Registers into window.SvCI_LISTENING.
   ========================================================================== */
(function () {
  var passages = [

    {
      id: "listen-b1-cycling-001",
      title: "En intervju om att cykla",
      titleEn: "An interview about cycling",
      level: "B1",
      theme: "Hälsa · Health",
      transcript:
        "Hej och välkommen till programmet. I dag pratar vi om att cykla till jobbet. Med " +
        "mig har jag Johanna, som cyklar varje dag. Johanna, varför valde du cykeln? Jo, jag " +
        "bodde nära jobbet och tyckte att det var skönt att börja dagen med lite motion. " +
        "Dessutom slipper jag stå i bilköer. Är det inte jobbigt när det regnar? Jo, ibland, " +
        "men jag har bra regnkläder, och efter ett tag vänjer man sig. Vilka råd har du till " +
        "andra? Börja långsamt, kanske bara någon dag i veckan, och köp en bekväm cykel. " +
        "Tack Johanna för att du kom. Tack själv!",
      glossary: {
        "programmet": "the programme",
        "valde": "chose",
        "skönt": "nice / pleasant",
        "motion": "exercise",
        "slipper": "avoid (having to)",
        "bilköer": "traffic jams",
        "jobbigt": "tough / hard",
        "regnkläder": "rain clothes",
        "vänjer man sig": "one gets used to it",
        "råd": "advice",
        "långsamt": "slowly",
        "bekväm": "comfortable"
      },
      questions: [
        { type: "gist", q: "Vad handlar intervjun om?", qEn: "What is the interview about?",
          options: ["Att cykla till jobbet", "Att köra bil", "Att åka tåg"], correct: 0,
          explain: "„I dag pratar vi om att cykla till jobbet.“" },
        { type: "detail", q: "Varför valde Johanna cykeln?", qEn: "Why did Johanna choose the bike?",
          options: ["Hon ville ha motion och slippa bilköer", "Hon hade ingen bil", "Det var billigast"], correct: 0,
          explain: "„…skönt att börja dagen med lite motion. Dessutom slipper jag stå i bilköer.“" },
        { type: "detail", q: "Vad gör Johanna när det regnar?", qEn: "What does Johanna do when it rains?",
          options: ["Använder bra regnkläder", "Stannar hemma", "Tar bilen"], correct: 0,
          explain: "„…jag har bra regnkläder, och efter ett tag vänjer man sig.“" },
        { type: "detail", q: "Vilket råd ger Johanna?", qEn: "What advice does Johanna give?",
          options: ["Börja långsamt, någon dag i veckan", "Cykla varje dag direkt", "Köp en dyr cykel"], correct: 0,
          explain: "„Börja långsamt, kanske bara någon dag i veckan…“" },
        { type: "detail", q: "Hur känns det att cykla med tiden enligt Johanna?", qEn: "How does cycling feel over time, according to Johanna?",
          options: ["Man vänjer sig", "Det blir jobbigare", "Det blir tråkigt"], correct: 0,
          explain: "„…efter ett tag vänjer man sig.“" }
      ]
    },

    {
      id: "listen-b1-work-002",
      title: "Ett samtal på jobbet",
      titleEn: "A conversation at work",
      level: "B1",
      theme: "Arbete · Work",
      transcript:
        "Hej Erik, har du tid en stund? Ja, visst. Vad gäller det? Jo, jag undrar om jag " +
        "kan byta mina arbetstider. Just nu börjar jag klockan åtta, men det är svårt att " +
        "hinna lämna barnen på förskolan. Jag förstår. Vad föreslår du? Skulle jag kunna " +
        "börja klockan nio i stället och jobba en timme längre på eftermiddagen? Det låter " +
        "rimligt. Jag måste kolla med de andra i teamet, men jag tror att det går att lösa. " +
        "Tack så mycket, det skulle hjälpa mig mycket. Inga problem. Jag återkommer till dig " +
        "i morgon.",
      glossary: {
        "har du tid": "do you have a moment",
        "undrar": "wonder",
        "byta": "change / swap",
        "arbetstider": "working hours",
        "hinna": "have time to",
        "lämna": "drop off",
        "förskolan": "the preschool",
        "föreslår": "suggest",
        "rimligt": "reasonable",
        "kolla": "check",
        "teamet": "the team",
        "lösa": "solve",
        "återkommer": "will get back (to you)"
      },
      questions: [
        { type: "gist", q: "Vad vill personen prata om?", qEn: "What does the person want to talk about?",
          options: ["Att byta sina arbetstider", "Att säga upp sig", "Att få högre lön"], correct: 0,
          explain: "„…jag undrar om jag kan byta mina arbetstider.“" },
        { type: "detail", q: "Varför vill hon ändra tiderna?", qEn: "Why does she want to change the hours?",
          options: ["Det är svårt att hinna lämna barnen på förskolan", "Hon är trött på morgnarna", "Bussen går sent"], correct: 0,
          explain: "„…det är svårt att hinna lämna barnen på förskolan.“" },
        { type: "detail", q: "Vad föreslår hon?", qEn: "What does she suggest?",
          options: ["Börja klockan nio och jobba längre på eftermiddagen", "Jobba hemifrån", "Ta ledigt"], correct: 0,
          explain: "„Skulle jag kunna börja klockan nio i stället och jobba en timme längre på eftermiddagen?“" },
        { type: "detail", q: "Vad säger Erik?", qEn: "What does Erik say?",
          options: ["Han måste kolla med teamet men tror det går att lösa", "Att det är omöjligt", "Att hon måste sluta"], correct: 0,
          explain: "„Jag måste kolla med de andra i teamet, men jag tror att det går att lösa.“" },
        { type: "detail", q: "När återkommer Erik?", qEn: "When will Erik get back to her?",
          options: ["I morgon", "Nästa vecka", "Aldrig"], correct: 0,
          explain: "„Jag återkommer till dig i morgon.“" }
      ]
    },

    {
      id: "listen-b1-apartment-003",
      title: "Ett meddelande om en lägenhet",
      titleEn: "A message about an apartment",
      level: "B1",
      theme: "Boende · Housing",
      transcript:
        "Hej, det här är ett meddelande till Sara Lind. Jag heter Peter och ringer från " +
        "bostadsbolaget. Du har anmält intresse för en tvårumslägenhet på Storgatan. Jag " +
        "vill berätta att lägenheten nu är ledig. Den ligger på tredje våningen och har " +
        "balkong. Hyran är åttatusen kronor i månaden. Om du fortfarande är intresserad vill " +
        "vi gärna boka en visning nästa vecka. Kan du höra av dig senast på fredag? Du når " +
        "mig på samma nummer på dagtid. Det är viktigt att du svarar i tid, eftersom det " +
        "finns flera som är intresserade. Tack, och ha en bra dag.",
      glossary: {
        "bostadsbolaget": "the housing company",
        "anmält intresse": "registered interest",
        "tvårumslägenhet": "two-room apartment",
        "ledig": "available / vacant",
        "våningen": "the floor",
        "balkong": "balcony",
        "hyran": "the rent",
        "boka en visning": "book a viewing",
        "höra av dig": "get in touch",
        "senast": "at the latest",
        "når": "reach",
        "dagtid": "daytime",
        "i tid": "in time"
      },
      questions: [
        { type: "gist", q: "Vad handlar meddelandet om?", qEn: "What is the message about?",
          options: ["En ledig lägenhet", "En räkning", "En fest"], correct: 0,
          explain: "„…en tvårumslägenhet … lägenheten nu är ledig.“" },
        { type: "detail", q: "Hur mycket är hyran?", qEn: "How much is the rent?",
          options: ["Åttatusen kronor i månaden", "Tretusen kronor", "Tolvtusen kronor"], correct: 0,
          explain: "„Hyran är åttatusen kronor i månaden.“" },
        { type: "detail", q: "Vad vill Peter boka?", qEn: "What does Peter want to book?",
          options: ["En visning nästa vecka", "En flytt", "Ett möte på kontoret"], correct: 0,
          explain: "„…vill vi gärna boka en visning nästa vecka.“" },
        { type: "detail", q: "När ska Sara svara senast?", qEn: "By when should Sara reply?",
          options: ["På fredag", "På måndag", "Om en månad"], correct: 0,
          explain: "„Kan du höra av dig senast på fredag?“" },
        { type: "detail", q: "Varför är det viktigt att svara i tid?", qEn: "Why is it important to reply in time?",
          options: ["Det finns flera som är intresserade", "Lägenheten ska rivas", "Hyran höjs snart"], correct: 0,
          explain: "„…eftersom det finns flera som är intresserade.“" }
      ]
    },

    {
      id: "listen-b1-recycling-004",
      title: "Information om återvinning",
      titleEn: "Information about recycling",
      level: "B1",
      theme: "Miljö · Environment",
      transcript:
        "Hej alla boende i huset. Vi vill påminna om hur återvinningen fungerar i vårt " +
        "område. I soprummet finns olika kärl för olika sorters avfall. Glas, papper, plast " +
        "och metall ska sorteras var för sig. Matavfall lägger ni i de bruna påsarna, som ni " +
        "hämtar i tvättstugan. Det är viktigt att inte slänga vanliga sopor i fel kärl, " +
        "eftersom det gör återvinningen svårare. Om ett kärl är fullt, vänta gärna eller " +
        "använd ett annat. Tillsammans hjälper vi miljön och håller soprummet rent. Tack för " +
        "att ni sorterar rätt. Hör av er till oss om ni har frågor.",
      glossary: {
        "boende": "residents",
        "påminna": "remind",
        "återvinningen": "the recycling",
        "soprummet": "the waste room",
        "kärl": "bins / containers",
        "avfall": "waste",
        "sorteras": "be sorted",
        "var för sig": "separately",
        "matavfall": "food waste",
        "bruna påsarna": "the brown bags",
        "tvättstugan": "the laundry room",
        "slänga": "throw / dispose of",
        "fel": "wrong",
        "fullt": "full",
        "miljön": "the environment"
      },
      questions: [
        { type: "gist", q: "Vad handlar meddelandet om?", qEn: "What is the message about?",
          options: ["Hur återvinningen fungerar i huset", "En ny tvättmaskin", "En höjd hyra"], correct: 0,
          explain: "„Vi vill påminna om hur återvinningen fungerar i vårt område.“" },
        { type: "detail", q: "Var ska matavfall läggas?", qEn: "Where should food waste go?",
          options: ["I de bruna påsarna", "I glaskärlet", "I papperskorgen"], correct: 0,
          explain: "„Matavfall lägger ni i de bruna påsarna…“" },
        { type: "detail", q: "Var hämtar man de bruna påsarna?", qEn: "Where do you get the brown bags?",
          options: ["I tvättstugan", "I soprummet", "I affären"], correct: 0,
          explain: "„…de bruna påsarna, som ni hämtar i tvättstugan.“" },
        { type: "detail", q: "Varför ska man inte slänga sopor i fel kärl?", qEn: "Why shouldn't you put waste in the wrong bin?",
          options: ["Det gör återvinningen svårare", "Det är roligare", "Det går snabbare"], correct: 0,
          explain: "„…eftersom det gör återvinningen svårare.“" },
        { type: "detail", q: "Vad ska man göra om ett kärl är fullt?", qEn: "What should you do if a bin is full?",
          options: ["Vänta eller använda ett annat", "Slänga på golvet", "Ta hem soporna"], correct: 0,
          explain: "„Om ett kärl är fullt, vänta gärna eller använd ett annat.“" }
      ]
    },

    {
      id: "listen-b1-lagom-005",
      title: "Vad betyder lagom?",
      titleEn: "What does 'lagom' mean?",
      level: "B1",
      theme: "Kultur · Culture",
      transcript:
        "I dag ska jag berätta om ett typiskt svenskt ord: lagom. Lagom betyder inte för " +
        "mycket och inte för lite, utan precis lagom. Många svenskar använder ordet varje " +
        "dag. Om någon frågar hur mycket kaffe du vill ha, kan du svara lagom. Ordet säger " +
        "något om den svenska kulturen. Det handlar om balans och att inte överdriva. Vissa " +
        "tycker att lagom är något positivt, eftersom det skapar trygghet och jämlikhet. " +
        "Andra menar att det kan göra människor rädda för att sticka ut. Oavsett vad man " +
        "tycker är lagom ett ord som är svårt att översätta. Kanske är det därför svenskar " +
        "är så stolta över det.",
      glossary: {
        "typiskt": "typical",
        "precis": "exactly",
        "överdriva": "exaggerate / overdo",
        "balans": "balance",
        "trygghet": "security",
        "jämlikhet": "equality",
        "sticka ut": "stand out",
        "oavsett": "regardless of",
        "översätta": "translate",
        "stolta": "proud"
      },
      questions: [
        { type: "gist", q: "Vad handlar talet om?", qEn: "What is the talk about?",
          options: ["Det svenska ordet lagom", "Svenskt kaffe", "Svensk historia"], correct: 0,
          explain: "„…ett typiskt svenskt ord: lagom.“" },
        { type: "detail", q: "Vad betyder lagom?", qEn: "What does 'lagom' mean?",
          options: ["Inte för mycket och inte för lite", "Väldigt mycket", "Ingenting alls"], correct: 0,
          explain: "„Lagom betyder inte för mycket och inte för lite, utan precis lagom.“" },
        { type: "detail", q: "Vad säger ordet om kulturen?", qEn: "What does the word say about the culture?",
          options: ["Att det handlar om balans och att inte överdriva", "Att svenskar älskar fester", "Att svenskar är stressade"], correct: 0,
          explain: "„Det handlar om balans och att inte överdriva.“" },
        { type: "detail", q: "Varför tycker vissa att lagom är positivt?", qEn: "Why do some think 'lagom' is positive?",
          options: ["Det skapar trygghet och jämlikhet", "Det gör folk rika", "Det är roligt"], correct: 0,
          explain: "„…eftersom det skapar trygghet och jämlikhet.“" },
        { type: "detail", q: "Varför är ordet svårt?", qEn: "Why is the word difficult?",
          options: ["Det är svårt att översätta", "Det är väldigt långt", "Ingen använder det"], correct: 0,
          explain: "„…lagom ett ord som är svårt att översätta.“" }
      ]
    }

  ];

  passages.forEach(function (p) {
    p.wordCount = (p.transcript.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_LISTENING = (window.SvCI_LISTENING || []).concat(passages);
})();
