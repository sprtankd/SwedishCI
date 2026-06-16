/* ============================================================
   Swedish CI — Graded Reader data: A2-low stories
   ~80-100 words each. Simple SVO/V2 sentences, present tense,
   high-frequency daily-life vocabulary. Loaded by reader.html.
   ============================================================ */
const STORIES_A2_LOW = [
  {
    id: "a2-daily-1",
    title: "En vanlig dag hos Anna",
    titleEn: "An ordinary day with Anna",
    level: "A2-low",
    theme: "daily-life",
    wordCount: 89,
    text:
      "Anna vaknar klockan sju. Hon äter frukost i köket. Hon dricker kaffe och äter en smörgås. " +
      "Klockan åtta går Anna till jobbet. Hon jobbar på ett kontor i stan. Anna tycker om sitt jobb. " +
      "Klockan tolv äter hon lunch med sina kollegor. De pratar och skrattar mycket. Efter jobbet handlar " +
      "Anna mat i affären. Hon lagar middag hemma klockan sex. Anna bor med sin man och sin son. De äter " +
      "middag tillsammans. Sedan tittar de på TV. Anna går och lägger sig klockan elva. Hon är trött men nöjd.",
    glossary: {
      vaknar: "wakes up",
      smörgås: "sandwich",
      kollegor: "colleagues",
      skrattar: "laughs",
      handlar: "shops, buys",
      affären: "the store",
      lagar: "cooks, makes (food)",
      nöjd: "satisfied, content",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En vanlig dag", "En semester", "En fest"],
        correct: 0,
      },
      {
        type: "detail",
        q: "När vaknar Anna?",
        qEn: "When does Anna wake up?",
        options: ["Klockan sju", "Klockan åtta", "Klockan nio"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad äter Anna till frukost?",
        qEn: "What does Anna eat for breakfast?",
        options: ["En smörgås", "Gröt", "Frukt"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Var jobbar Anna?",
        qEn: "Where does Anna work?",
        options: ["På ett kontor", "I en affär", "På ett sjukhus"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vem bor Anna med?",
        qEn: "Who does Anna live with?",
        options: ["Sin man och son", "Sina föräldrar", "Ensam"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2-shopping-1",
    title: "Lisa handlar mat",
    titleEn: "Lisa goes grocery shopping",
    level: "A2-low",
    theme: "shopping",
    wordCount: 83,
    text:
      "Lisa ska handla mat. Hon går till affären på lördag. I affären köper hon bröd, mjölk och ost. " +
      "Hon behöver också äpplen och bananer. Lisa tittar på priserna. Bröd kostar arton kronor. Mjölk " +
      "kostar tolv kronor. Lisa tycker att maten är dyr idag. Hon väljer billig fisk till middag. I kassan " +
      "betalar hon med sitt kort. Kassören säger “Tack och hej!”. Lisa går hem med två stora påsar. " +
      "Hemma packar hon upp maten i kylskåpet. Imorgon ska hon laga fisk till hela familjen.",
    glossary: {
      handla: "to shop",
      priserna: "the prices",
      dyr: "expensive",
      väljer: "chooses",
      billig: "cheap",
      kassan: "the checkout",
      kassören: "the cashier",
      kylskåpet: "the fridge",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Lisa handlar mat", "Lisa lagar mat på en restaurang", "Lisa äter på restaurang"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vilken dag går Lisa till affären?",
        qEn: "Which day does Lisa go to the store?",
        options: ["Lördag", "Söndag", "Måndag"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad tycker Lisa om priserna?",
        qEn: "What does Lisa think of the prices?",
        options: ["De är dyra", "De är billiga", "De är normala"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad ska Lisa laga till middag?",
        qEn: "What is Lisa going to cook for dinner?",
        options: ["Fisk", "Kött", "Pasta"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur betalar Lisa?",
        qEn: "How does Lisa pay?",
        options: ["Med kort", "Med kontanter", "Hon glömmer plånboken"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2-cafe-1",
    title: "På kaféet",
    titleEn: "At the café",
    level: "A2-low",
    theme: "social",
    wordCount: 99,
    text:
      "Det är lördag förmiddag. Erik går till sitt favoritkafé i centrum. Kaféet är litet och mysigt. " +
      "Erik beställer en kopp kaffe och en kanelbulle. Han sätter sig vid ett bord nära fönstret. Utanför " +
      "går människor förbi i regnet. Erik läser en bok medan han dricker sitt kaffe. Bullen är varm och " +
      "god. En vän kommer in i kaféet. Hon heter Sara och hälsar glatt på Erik. De pratar och skrattar " +
      "tillsammans i en timme. Sedan måste Sara gå hem. Erik stannar kvar och beställer en kopp till. Han " +
      "tycker att kaféer är de bästa platserna att slappna av på.",
    glossary: {
      favoritkafé: "favorite café",
      mysigt: "cozy",
      beställer: "orders",
      kanelbulle: "cinnamon bun",
      förbi: "past, by",
      regnet: "the rain",
      medan: "while",
      hälsar: "greets",
      "slappna av": "to relax",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Erik på ett kafé", "Erik på jobbet", "Erik på en resa"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad beställer Erik?",
        qEn: "What does Erik order?",
        options: ["Kaffe och en kanelbulle", "Te och en smörgås", "Choklad och en bulle"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad gör Erik medan han dricker kaffe?",
        qEn: "What does Erik do while drinking coffee?",
        options: ["Läser en bok", "Lyssnar på musik", "Skriver ett brev"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vem kommer in i kaféet?",
        qEn: "Who comes into the café?",
        options: ["Sara", "Anna", "Lisa"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur länge pratar Erik och Sara?",
        qEn: "How long do Erik and Sara talk?",
        options: ["En timme", "En halvtimme", "Två timmar"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2-weather-1",
    title: "Vädret i Sverige",
    titleEn: "The weather in Sweden",
    level: "A2-low",
    theme: "weather",
    wordCount: 96,
    text:
      "I Sverige ändras vädret ofta. På vintern är det kallt och mörkt. Det snöar mycket i norra Sverige. " +
      "Många människor åker skidor på vintern. På sommaren blir det varmt och ljust. Solen skiner till " +
      "sent på kvällen. Svenskar älskar att sitta utomhus när det är varmt. Våren och hösten har också " +
      "sitt eget väder. På våren regnar det ofta, men blommorna börjar växa. På hösten blir bladen gula " +
      "och röda. Det blåser mycket vid kusten. Många svenskar pratar om vädret varje dag. De checkar " +
      "väderappen innan de går ut. Rätt kläder är viktiga i alla väder.",
    glossary: {
      ändras: "changes",
      mörkt: "dark",
      snöar: "snows",
      skidor: "skis",
      ljust: "light, bright",
      skiner: "shines",
      blåser: "blows, is windy",
      kusten: "the coast",
      väderappen: "the weather app",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Vädret i Sverige", "Mat i Sverige", "Sport i Sverige"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur är vädret på vintern?",
        qEn: "What's the weather like in winter?",
        options: ["Kallt och mörkt", "Varmt och ljust", "Regnigt och blåsigt"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad gör många människor på vintern?",
        qEn: "What do many people do in winter?",
        options: ["Åker skidor", "Simmar i sjön", "Cyklar"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad händer med bladen på hösten?",
        qEn: "What happens to the leaves in autumn?",
        options: ["Blir gula och röda", "Blir gröna", "Faller aldrig av"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad checkar svenskar innan de går ut?",
        qEn: "What do Swedes check before going out?",
        options: ["Väderappen", "Tidningen", "Klockan"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2-family-1",
    title: "Min familj",
    titleEn: "My family",
    level: "A2-low",
    theme: "family",
    wordCount: 99,
    text:
      "Jag heter Karim och jag har en stor familj. Min mamma heter Yasmin och min pappa heter Ali. Jag " +
      "har två syskon, en bror och en syster. Min bror heter Omar och han är tjugo år gammal. Min syster " +
      "heter Lina och hon är femton år. Vi bor tillsammans i en lägenhet i Malmö. På helgerna lagar vi mat " +
      "tillsammans och äter middag runt bordet. Min mormor och morfar bor också i Malmö. Vi besöker dem " +
      "ofta på söndagar. Min mormor bakar alltid kanelbullar till oss. Hela familjen pratar mycket och " +
      "skrattar tillsammans. Jag älskar min familj väldigt mycket.",
    glossary: {
      syskon: "siblings",
      lägenhet: "apartment",
      helgerna: "the weekends",
      mormor: "grandmother (mother's side)",
      morfar: "grandfather (mother's side)",
      besöker: "visits",
      bakar: "bakes",
      kanelbullar: "cinnamon buns",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Karims familj", "Karims jobb", "Karims skola"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur många syskon har Karim?",
        qEn: "How many siblings does Karim have?",
        options: ["Två", "Tre", "Inga"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Var bor familjen?",
        qEn: "Where does the family live?",
        options: ["I Malmö", "I Stockholm", "I Göteborg"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad gör mormor alltid?",
        qEn: "What does grandmother always do?",
        options: ["Bakar kanelbullar", "Lagar fisk", "Spelar kort"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur gammal är Lina?",
        qEn: "How old is Lina?",
        options: ["Femton år", "Tjugo år", "Tio år"],
        correct: 0,
      },
    ],
  },
];
