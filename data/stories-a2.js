/* ============================================================================
   Swedish CI — data/stories-a2.js
   Graded reader stories at A2-low level (~80-100 words each).
   Topics: daily routine, shopping, at the café, the weather, my family.

   Each story registers itself into the shared window.SvCI_STORIES array so any
   number of story data files can be loaded together. Reader groups by `level`.
   ========================================================================== */
(function () {
  var stories = [

    {
      id: "a2low-daily-001",
      title: "En vanlig dag",
      titleEn: "An ordinary day",
      level: "A2-low",
      theme: "Vardagsliv · Daily life",
      text:
        "Maria vaknar klockan sju på morgonen. Hon stiger upp och går till köket. " +
        "Där dricker hon en kopp kaffe och äter en smörgås. Sedan tar hon en dusch " +
        "och borstar tänderna. Klockan åtta cyklar hon till jobbet. Maria arbetar på " +
        "ett sjukhus. Hon tycker om sitt arbete. På lunchen äter hon med sina kollegor. " +
        "När klockan är fem åker hon hem igen. På kvällen lagar hon middag och läser en " +
        "bok. Klockan elva går Maria och lägger sig. Hon sover gott hela natten.",
      glossary: {
        "vaknar": "wakes up",
        "stiger upp": "gets up",
        "köket": "the kitchen",
        "dricker": "drinks",
        "smörgås": "sandwich",
        "dusch": "shower",
        "borstar tänderna": "brushes teeth",
        "cyklar": "cycles",
        "sjukhus": "hospital",
        "kollegor": "colleagues",
        "lagar": "cooks / makes",
        "lägger sig": "goes to bed",
        "sover gott": "sleeps well"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Marias vanliga dag", "En lång resa", "En stor fest"], correct: 0,
          explain: "Texten beskriver vad Maria gör en vanlig dag, från morgon till kväll." },
        { type: "detail", q: "Var arbetar Maria?", qEn: "Where does Maria work?",
          options: ["På ett sjukhus", "På en skola", "På ett kafé"], correct: 0,
          explain: "I texten står det: „Maria arbetar på ett sjukhus.“" },
        { type: "detail", q: "Hur tar Maria sig till jobbet?", qEn: "How does Maria get to work?",
          options: ["Hon cyklar", "Hon kör bil", "Hon går"], correct: 0,
          explain: "„Klockan åtta cyklar hon till jobbet.“" },
        { type: "detail", q: "Vad gör Maria på kvällen?", qEn: "What does Maria do in the evening?",
          options: ["Lagar middag och läser", "Arbetar på sjukhuset", "Handlar mat"], correct: 0,
          explain: "„På kvällen lagar hon middag och läser en bok.“" }
      ]
    },

    {
      id: "a2low-shopping-002",
      title: "Att handla mat",
      titleEn: "Shopping for food",
      level: "A2-low",
      theme: "Inköp · Shopping",
      text:
        "På lördag går Daniel till affären för att handla mat. Han tar med sig en lista. " +
        "Först köper han bröd, mjölk och ägg. Sedan går han till frukt och grönsaker. " +
        "Han väljer äpplen, tomater och en gurka. Daniel vill också laga fisk till middag, " +
        "så han köper lax. Vid kassan betalar han med kort. Maten kostar tvåhundra kronor. " +
        "Daniel lägger allt i sina kassar och går hem. Hemma ställer han in maten i " +
        "kylskåpet. Nu har han mat för hela veckan.",
      glossary: {
        "affären": "the shop / store",
        "handla": "to shop",
        "lista": "list",
        "bröd": "bread",
        "mjölk": "milk",
        "ägg": "eggs",
        "grönsaker": "vegetables",
        "väljer": "chooses",
        "äpplen": "apples",
        "gurka": "cucumber",
        "lax": "salmon",
        "kassan": "the checkout",
        "betalar": "pays",
        "kostar": "costs",
        "kassar": "bags",
        "ställer in": "puts away",
        "kylskåpet": "the fridge"
      },
      questions: [
        { type: "gist", q: "Vad gör Daniel i texten?", qEn: "What does Daniel do in the text?",
          options: ["Han handlar mat", "Han lagar en fest", "Han reser bort"], correct: 0,
          explain: "Hela texten handlar om när Daniel går till affären och handlar mat." },
        { type: "detail", q: "Vilken dag handlar Daniel?", qEn: "Which day does Daniel shop?",
          options: ["På lördag", "På söndag", "På måndag"], correct: 0,
          explain: "„På lördag går Daniel till affären.“" },
        { type: "detail", q: "Hur betalar Daniel?", qEn: "How does Daniel pay?",
          options: ["Med kort", "Med kontanter", "Med telefon"], correct: 0,
          explain: "„Vid kassan betalar han med kort.“" },
        { type: "detail", q: "Vad vill Daniel laga till middag?", qEn: "What does Daniel want to cook for dinner?",
          options: ["Fisk", "Kött", "Soppa"], correct: 0,
          explain: "Han vill laga fisk, så han köper lax." }
      ]
    },

    {
      id: "a2low-cafe-003",
      title: "På kaféet",
      titleEn: "At the café",
      level: "A2-low",
      theme: "Fritid · Free time",
      text:
        "Anna och hennes vän Sara sitter på ett kafé i centrum. Det är en kall dag, så " +
        "de vill ha något varmt. Anna beställer en kopp te och en kanelbulle. Sara tar en " +
        "varm choklad. De pratar om sitt arbete och sina familjer. Kaféet är mysigt och " +
        "det spelar lugn musik. Efter en stund kommer en servitör med deras beställning. " +
        "Kanelbullen är god och färsk. Anna och Sara stannar i en timme. Sedan betalar de " +
        "och säger hej då. De lovar att ses igen snart.",
      glossary: {
        "vän": "friend",
        "centrum": "the centre",
        "kall": "cold",
        "beställer": "orders",
        "kanelbulle": "cinnamon bun",
        "varm choklad": "hot chocolate",
        "pratar": "talk",
        "mysigt": "cosy",
        "lugn": "calm",
        "servitör": "waiter",
        "beställning": "order",
        "färsk": "fresh",
        "stannar": "stay",
        "lovar": "promise",
        "ses": "to meet / see each other"
      },
      questions: [
        { type: "gist", q: "Var är Anna och Sara?", qEn: "Where are Anna and Sara?",
          options: ["På ett kafé", "På ett sjukhus", "På jobbet"], correct: 0,
          explain: "„Anna och hennes vän Sara sitter på ett kafé i centrum.“" },
        { type: "detail", q: "Vad beställer Anna?", qEn: "What does Anna order?",
          options: ["Te och en kanelbulle", "Kaffe och en smörgås", "Varm choklad"], correct: 0,
          explain: "„Anna beställer en kopp te och en kanelbulle.“" },
        { type: "detail", q: "Hur länge stannar de?", qEn: "How long do they stay?",
          options: ["En timme", "En hel dag", "Tio minuter"], correct: 0,
          explain: "„Anna och Sara stannar i en timme.“" },
        { type: "detail", q: "Varför vill de ha något varmt?", qEn: "Why do they want something warm?",
          options: ["Det är en kall dag", "De är trötta", "De är hungriga"], correct: 0,
          explain: "„Det är en kall dag, så de vill ha något varmt.“" }
      ]
    },

    {
      id: "a2low-weather-004",
      title: "Vädret idag",
      titleEn: "The weather today",
      level: "A2-low",
      theme: "Väder · Weather",
      text:
        "Idag är vädret i Stockholm grått och regnigt. På morgonen regnar det mycket, och " +
        "det blåser kallt. Många människor tar med sig paraply när de går ut. På " +
        "eftermiddagen slutar regnet, och solen kommer fram. Då blir det lite varmare. " +
        "Erik tittar på vädret på sin telefon. I morgon ska det bli soligt och fint. Han " +
        "planerar att ta en promenad i parken. På vintern snöar det ofta i Sverige, men nu " +
        "är det vår. Erik tycker bäst om våren, för då blir dagarna längre och ljusare.",
      glossary: {
        "vädret": "the weather",
        "grått": "grey",
        "regnigt": "rainy",
        "regnar": "rains",
        "blåser": "is windy / blows",
        "paraply": "umbrella",
        "slutar": "stops / ends",
        "solen kommer fram": "the sun comes out",
        "varmare": "warmer",
        "planerar": "plans",
        "promenad": "a walk",
        "snöar": "snows",
        "vår": "spring",
        "dagarna": "the days",
        "ljusare": "brighter"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten mest om?", qEn: "What is the text mostly about?",
          options: ["Vädret", "En lång resa", "Mat och dryck"], correct: 0,
          explain: "Texten beskriver vädret idag och i morgon, och vilken årstid Erik gillar." },
        { type: "detail", q: "Hur är vädret på morgonen?", qEn: "What is the weather like in the morning?",
          options: ["Regnigt och blåsigt", "Soligt och varmt", "Snöigt"], correct: 0,
          explain: "„På morgonen regnar det mycket, och det blåser kallt.“" },
        { type: "detail", q: "Vad ska Erik göra i morgon?", qEn: "What is Erik going to do tomorrow?",
          options: ["Ta en promenad i parken", "Arbeta hela dagen", "Handla mat"], correct: 0,
          explain: "„Han planerar att ta en promenad i parken.“" },
        { type: "detail", q: "Vilken årstid tycker Erik bäst om?", qEn: "Which season does Erik like best?",
          options: ["Våren", "Vintern", "Hösten"], correct: 0,
          explain: "„Erik tycker bäst om våren, för då blir dagarna längre och ljusare.“" }
      ]
    },

    {
      id: "a2low-family-005",
      title: "Min familj",
      titleEn: "My family",
      level: "A2-low",
      theme: "Familj · Family",
      text:
        "Jag heter Johan och jag bor i Göteborg. Min familj är inte så stor. Jag har en " +
        "fru som heter Lena och två barn. Vår son är åtta år och vår dotter är fem år. Vi " +
        "bor i en lägenhet nära en park. Min fru arbetar som lärare på en skola. Jag jobbar " +
        "på ett kontor i stan. På helgerna gör vi saker tillsammans. Vi går till parken " +
        "eller besöker mina föräldrar. Mina föräldrar bor på landet med en hund. Barnen " +
        "tycker mycket om hunden. Vi är en glad familj.",
      glossary: {
        "bor": "live(s)",
        "fru": "wife",
        "barn": "child / children",
        "son": "son",
        "dotter": "daughter",
        "lägenhet": "apartment",
        "nära": "near",
        "lärare": "teacher",
        "kontor": "office",
        "stan": "the city / town",
        "helgerna": "the weekends",
        "tillsammans": "together",
        "besöker": "visit",
        "föräldrar": "parents",
        "landet": "the countryside",
        "hund": "dog",
        "glad": "happy"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Johans familj", "Johans arbete", "En resa till Göteborg"], correct: 0,
          explain: "Johan berättar om sin familj: sin fru, sina barn och sina föräldrar." },
        { type: "detail", q: "Hur många barn har Johan?", qEn: "How many children does Johan have?",
          options: ["Två", "Ett", "Tre"], correct: 0,
          explain: "„Jag har en fru som heter Lena och två barn.“" },
        { type: "detail", q: "Vad arbetar Lena som?", qEn: "What does Lena work as?",
          options: ["Lärare", "Läkare", "Servitör"], correct: 0,
          explain: "„Min fru arbetar som lärare på en skola.“" },
        { type: "detail", q: "Var bor Johans föräldrar?", qEn: "Where do Johan's parents live?",
          options: ["På landet", "I Göteborg", "I Stockholm"], correct: 0,
          explain: "„Mina föräldrar bor på landet med en hund.“" }
      ]
    }

  ];

  // Compute word counts and register into the shared global story list.
  stories.forEach(function (s) {
    s.wordCount = (s.text.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_STORIES = (window.SvCI_STORIES || []).concat(stories);
})();
