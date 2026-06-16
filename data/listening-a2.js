/* A2-level listening passages for the Listening Lab.
   Schema: {id, title, titleEn, level, theme, wordCount, transcript, glossary, questions}
   No lead/body split (unlike news articles) — listening passages are read as one
   continuous transcript, matching how they'd be heard as a single audio clip. */
const LISTENING_A2 = [
  {
    id: "listeninga2-voicemail-1",
    title: "Ett telefonmeddelande",
    titleEn: "A voicemail message",
    level: "A2",
    theme: "phone-message",
    wordCount: 69,
    transcript:
      "Hej Erik! Det är Lisa. Jag ringer för att fråga om du vill fika imorgon. " +
      "Jag tänkte att vi kan gå till det nya kaféet på Storgatan klockan elva. " +
      "Jag har hört att de har jättegott bröd där. Om du inte kan imorgon, går det " +
      "bra på lördag istället. Ring mig gärna ikväll, så vi kan bestämma. Annars " +
      "skickar jag ett sms till dig senare. Hej då, vi hörs!",
    glossary: {
      fika: "have coffee / a chat over coffee",
      jättegott: "really tasty, delicious",
      bestämma: "to decide",
      istället: "instead",
      annars: "otherwise",
      hörs: "we'll talk (soon) — common goodbye phrase",
    },
    questions: [
      {
        q: "Vad vill Lisa göra?",
        qEn: "What does Lisa want to do?",
        options: ["Gå och fika", "Åka till jobbet", "Handla mat"],
        correct: 0,
      },
      {
        q: "Var vill hon träffa Erik?",
        qEn: "Where does she want to meet Erik?",
        options: ["Hemma hos henne", "På det nya kaféet", "På tåget"],
        correct: 1,
      },
      {
        q: "Vilken tid föreslår hon?",
        qEn: "What time does she suggest?",
        options: ["Klockan nio", "Klockan tre", "Klockan elva"],
        correct: 2,
      },
      {
        q: "Vad ska Erik göra om han inte kan imorgon?",
        qEn: "What should Erik do if he can't make it tomorrow?",
        options: ["Ringa Lisa ikväll", "Skicka pengar", "Komma på lördag istället"],
        correct: 2,
      },
      {
        q: "Vad gör Lisa om Erik inte ringer ikväll?",
        qEn: "What will Lisa do if Erik doesn't call tonight?",
        options: ["Hon skickar ett sms", "Hon kommer hem till honom", "Hon väntar utanför kaféet"],
        correct: 0,
      },
    ],
  },
  {
    id: "listeninga2-train-1",
    title: "Meddelande på tågstationen",
    titleEn: "Announcement at the train station",
    level: "A2",
    theme: "transport",
    wordCount: 64,
    transcript:
      "Välkommen till Centralstationen. Tåget mot Göteborg, avgång klockan tretton " +
      "och tjugo, är försenat med femton minuter på grund av tekniska problem. " +
      "Resenärer som ska åka mot Malmö hittar sitt tåg på spår sex. Tänk på att " +
      "hålla avstånd till spårkanten när tåget kommer in. Nästa tåg mot Stockholm " +
      "avgår som planerat klockan fjorton. Vi ber om ursäkt för förseningen och " +
      "tackar för ert tålamod.",
    glossary: {
      avgång: "departure",
      försenat: "delayed",
      resenärer: "travelers, passengers",
      spårkanten: "the platform edge",
      "ber om ursäkt": "apologize",
      tålamod: "patience",
    },
    questions: [
      {
        q: "Vad handlar meddelandet om?",
        qEn: "What is the announcement about?",
        options: ["Ett försenat tåg", "En ny butik", "Ett möte"],
        correct: 0,
      },
      {
        q: "Hur mycket försenat är tåget mot Göteborg?",
        qEn: "How delayed is the train to Gothenburg?",
        options: ["Fem minuter", "En timme", "Femton minuter"],
        correct: 2,
      },
      {
        q: "Varför är tåget försenat?",
        qEn: "Why is the train delayed?",
        options: ["Dåligt väder", "Tekniska problem", "För många resenärer"],
        correct: 1,
      },
      {
        q: "Vilket spår ska resenärer till Malmö gå till?",
        qEn: "Which platform should travelers to Malmö go to?",
        options: ["Spår två", "Spår sex", "Spår tio"],
        correct: 1,
      },
      {
        q: "Vad ska resenärerna tänka på vid spårkanten?",
        qEn: "What should travelers be careful of at the platform edge?",
        options: ["Hålla avstånd", "Springa snabbt", "Ringa någon"],
        correct: 0,
      },
    ],
  },
  {
    id: "listeninga2-shopping-1",
    title: "Ett samtal i affären",
    titleEn: "A conversation in the store",
    level: "A2",
    theme: "shopping",
    wordCount: 61,
    transcript:
      "Ursäkta, jag letar efter te. Var hittar jag det? Te står på hylla fyra, " +
      "bredvid kaffet. Tack så mycket. Har ni också honung? Ja, honung finns lite " +
      "längre bort, vid frukosthyllan. Den kostar trettio kronor för en burk. " +
      "Perfekt, jag tar två burkar då. Behöver ni något annat? Nej, det var allt " +
      "för idag. Bra, kassan finns till höger vid utgången.",
    glossary: {
      "letar efter": "looking for",
      hylla: "shelf",
      honung: "honey",
      burk: "jar",
      kassan: "the checkout, the till",
      utgången: "the exit",
    },
    questions: [
      {
        q: "Var utspelar sig samtalet?",
        qEn: "Where does the conversation take place?",
        options: ["I en affär", "På ett tåg", "Hemma"],
        correct: 0,
      },
      {
        q: "Vad letar kunden efter först?",
        qEn: "What is the customer looking for first?",
        options: ["Kaffe", "Te", "Honung"],
        correct: 1,
      },
      {
        q: "Var står teet?",
        qEn: "Where is the tea located?",
        options: ["Hylla fyra", "Hylla ett", "Vid kassan"],
        correct: 0,
      },
      {
        q: "Hur mycket kostar en burk honung?",
        qEn: "How much does a jar of honey cost?",
        options: ["Tio kronor", "Tjugo kronor", "Trettio kronor"],
        correct: 2,
      },
      {
        q: "Var finns kassan?",
        qEn: "Where is the checkout located?",
        options: ["Till vänster vid ingången", "Bredvid kaffet", "Till höger vid utgången"],
        correct: 2,
      },
    ],
  },
  {
    id: "listeninga2-weather-1",
    title: "Väderrapporten",
    titleEn: "The weather report",
    level: "A2",
    theme: "weather",
    wordCount: 69,
    transcript:
      "God morgon och välkomna till väderrapporten. Idag blir det molnigt i hela " +
      "landet med tillfälligt regn på eftermiddagen. Temperaturen ligger mellan " +
      "tio och femton grader. I norra Sverige blåser det ganska kraftigt, så var " +
      "försiktig om du ska ut och cykla. Det klarnar upp imorgon, och solen kommer " +
      "fram igen. Helgen ser ut att bli varmare, med temperaturer upp mot tjugo " +
      "grader på söndag. Ha en fortsatt skön dag!",
    glossary: {
      molnigt: "cloudy",
      "tillfälligt regn": "occasional/temporary rain",
      blåser: "it's windy (lit. blows)",
      kraftigt: "strongly, heavily",
      "klarnar upp": "clears up",
      skön: "nice, pleasant",
    },
    questions: [
      {
        q: "Vad handlar rapporten om?",
        qEn: "What is the report about?",
        options: ["Vädret", "Sporten", "Nyheterna"],
        correct: 0,
      },
      {
        q: "Hur blir vädret idag?",
        qEn: "What will the weather be like today?",
        options: ["Soligt och varmt", "Molnigt med regn", "Snö hela dagen"],
        correct: 1,
      },
      {
        q: "Vilken temperatur blir det idag?",
        qEn: "What temperature will it be today?",
        options: ["Mellan tio och femton grader", "Mellan tjugo och tjugofem grader", "Under noll grader"],
        correct: 0,
      },
      {
        q: "Var blåser det kraftigt?",
        qEn: "Where is it windy?",
        options: ["I södra Sverige", "I norra Sverige", "Vid kusten i öst"],
        correct: 1,
      },
      {
        q: "Hur blir helgen?",
        qEn: "What will the weekend be like?",
        options: ["Kallare", "Likadan", "Varmare"],
        correct: 2,
      },
    ],
  },
  {
    id: "listeninga2-dentist-1",
    title: "Boka tid hos tandläkaren",
    titleEn: "Booking a dentist appointment",
    level: "A2",
    theme: "health",
    wordCount: 68,
    transcript:
      "Tandvården, det är Sara. God morgon, jag skulle vilja boka en tid hos " +
      "tandläkaren. Har du ont i tanden? Ja, jag har haft ont i två dagar nu. Då " +
      "försöker vi hitta en tid snart. Kan du komma imorgon klockan nio? Ja, det " +
      "passar bra. Perfekt, då bokar jag in dig. Glöm inte att ta med ditt " +
      "försäkringskort. Tack, jag kommer ihåg det. Välkommen imorgon, hej så länge!",
    glossary: {
      tandvården: "the dental clinic",
      "boka en tid": "to book an appointment",
      "ont i tanden": "toothache",
      "passar bra": "works well, suits well",
      försäkringskort: "insurance card",
      "hej så länge": "bye for now",
    },
    questions: [
      {
        q: "Varför ringer personen?",
        qEn: "Why is the person calling?",
        options: ["För att boka en tid hos tandläkaren", "För att fråga om öppettider", "För att avboka en tid"],
        correct: 0,
      },
      {
        q: "Vad är problemet?",
        qEn: "What is the problem?",
        options: ["Hon har ont i magen", "Hon har ont i tanden", "Hon har feber"],
        correct: 1,
      },
      {
        q: "Hur länge har hon haft ont?",
        qEn: "How long has she been in pain?",
        options: ["En dag", "Två dagar", "En vecka"],
        correct: 1,
      },
      {
        q: "Vilken tid får hon imorgon?",
        qEn: "What time does she get tomorrow?",
        options: ["Klockan åtta", "Klockan tio", "Klockan nio"],
        correct: 2,
      },
      {
        q: "Vad ska hon komma ihåg att ta med?",
        qEn: "What should she remember to bring?",
        options: ["Försäkringskortet", "Pengar", "En väska"],
        correct: 0,
      },
    ],
  },
];
