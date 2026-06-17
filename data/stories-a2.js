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
    },

    {
      id: "a2low-library-006",
      title: "Ett besök på biblioteket",
      titleEn: "A visit to the library",
      level: "A2-low",
      theme: "Utbildning · Education",
      text:
        "Idag går Lukas till biblioteket i stan. Han vill låna en spännande bok på svenska. " +
        "Biblioteket är tyst och har många hyllor med böcker. Lukas letar efter en bok på " +
        "hyllan för lättlästa böcker. Han hittar en intressant bok om djur. Han går till " +
        "lånedisken och visar sitt bibliotekskort. Servicen är gratis och han får ha boken " +
        "i fyra veckor. Lukas går hem med sin bok och börjar läsa direkt.",
      glossary: {
        "biblioteket": "the library",
        "stan": "the city / town",
        "låna": "borrow",
        "spännande": "exciting",
        "tyst": "quiet",
        "hyllor": "shelves",
        "letar efter": "is looking for",
        "lättlästa": "easy-to-read",
        "hittar": "finds",
        "intressant": "interesting",
        "djur": "animals",
        "lånedisken": "the lending desk",
        "bibliotekskort": "library card",
        "gratis": "free",
        "veckor": "weeks",
        "direkt": "immediately"
      },
      questions: [
        { type: "gist", q: "Vad vill Lukas göra på biblioteket?", qEn: "What does Lukas want to do at the library?",
          options: ["Låna en bok på svenska", "Arbeta som bibliotekarie", "Köpa en tidning"], correct: 0,
          explain: "Lukas letar efter en bok att låna och ta hem." },
        { type: "detail", q: "Hur är det på biblioteket enligt texten?", qEn: "What is it like at the library according to the text?",
          options: ["Det är tyst", "Det är mycket folk och hög musik", "Det är kallt och mörkt"], correct: 0,
          explain: "„Biblioteket är tyst och har många hyllor med böcker.“" },
        { type: "detail", q: "Vilket ämne handlar boken om som Lukas hittar?", qEn: "What subject is the book that Lukas finds about?",
          options: ["Djur", "Historia", "Svenska språket"], correct: 0,
          explain: "„Han hittar en intressant bok om djur.“" },
        { type: "detail", q: "Hur länge får han ha boken hemma?", qEn: "How long is he allowed to keep the book at home?",
          options: ["Fyra veckor", "En vecka", "Två månader"], correct: 0,
          explain: "„...Servicen är gratis och han får ha boken i fyra veckor.“" }
      ]
    },

    {
      id: "a2low-cooking-007",
      title: "Matlagning hemma",
      titleEn: "Cooking at home",
      level: "A2-low",
      theme: "Vardagsliv · Daily life",
      text:
        "I kväll vill Julia laga en god soppa. Hon går in i köket och tvättar händerna. " +
        "Sedan tar hon fram morötter, potatis och en lök. Julia skär grönsakerna i små " +
        "bitar. Hon lägger dem i en kastrull med vatten och lite salt. Soppan ska koka i " +
        "tjugo minuter. Under tiden dukar Julia bordet med tallrikar, skedar och glas. När " +
        "soppan är klar äter hon tillsammans med sin familj. Alla tycker att soppan " +
        "smakar fantastiskt.",
      glossary: {
        "laga": "cook",
        "soppa": "soup",
        "köket": "the kitchen",
        "tvättar händerna": "washes hands",
        "morötter": "carrots",
        "potatis": "potatoes",
        "lök": "onion",
        "skär": "cuts",
        "kastrull": "saucepan / pot",
        "koka": "boil",
        "dukar": "sets (the table)",
        "skedar": "spoons",
        "smakar": "tastes",
        "fantastiskt": "fantastic"
      },
      questions: [
        { type: "gist", q: "Vad vill Julia laga för mat?", qEn: "What kind of food does Julia want to cook?",
          options: ["En god soppa", "En stor pizza", "Fisk och potatis"], correct: 0,
          explain: "„I kväll vill Julia laga en god soppa.“" },
        { type: "detail", q: "Vad gör Julia först i köket?", qEn: "What does Julia do first in the kitchen?",
          options: ["Tvättar händerna", "Dukar bordet", "Skär morötter"], correct: 0,
          explain: "„Hon går in i köket och tvättar händerna.“" },
        { type: "detail", q: "Hur länge ska soppan koka?", qEn: "How long should the soup boil?",
          options: ["Tjugo minuter", "En timme", "Tio minuter"], correct: 0,
          explain: "„Soppan ska koka i tjugo minuter.“" },
        { type: "detail", q: "Vem äter Julia tillsammans med?", qEn: "Who does Julia eat together with?",
          options: ["Sin familj", "Sina kollegor", "Sin granne"], correct: 0,
          explain: "„...äter hon tillsammans med sin familj.“" }
      ]
    },

    {
      id: "a2low-park-008",
      title: "En promenad i parken",
      titleEn: "A walk in the park",
      level: "A2-low",
      theme: "Fritid · Free time",
      text:
        "Efter jobbet tar Sara en promenad i en stor park nära sitt hem. Vädret är varmt och " +
        "skönt, och solen skiner. Träden är gröna och det finns vackra blommor överallt. I " +
        "parken leker barn på lekplatsen, och några personer läser böcker på bänkarna. Sara " +
        "går långsamt och lyssnar på fåglarna som sjunger. Hon möter en kvinna med en " +
        "liten hund. Hunden viftar på svansen och vill leka. Promenaden gör Sara lugn och " +
        "glad efter en lång arbetsdag.",
      glossary: {
        "promenad": "a walk",
        "skönt": "pleasant / nice",
        "solen skiner": "the sun shines",
        "träden": "the trees",
        "blommor": "flowers",
        "leker": "play",
        "lekplatsen": "the playground",
        "bänkarna": "the benches",
        "långsamt": "slowly",
        "fåglarna": "the birds",
        "sjunger": "sing",
        "möter": "meets",
        "viftar på svansen": "wags its tail",
        "lugn": "calm"
      },
      questions: [
        { type: "gist", q: "När tar Sara sin promenad?", qEn: "When does Sara take her walk?",
          options: ["Efter jobbet", "Tidigt på morgonen", "På lunchen"], correct: 0,
          explain: "„Efter jobbet tar Sara en promenad...“" },
        { type: "detail", q: "Var leker barnen i parken?", qEn: "Where do the children play in the park?",
          options: ["På lekplatsen", "I träden", "Bredvid bänkarna"], correct: 0,
          explain: "„I parken leker barn på lekplatsen...“" },
        { type: "detail", q: "Vad gör hunden som Sara möter?", qEn: "What does the dog that Sara meets do?",
          options: ["Viftar på svansen och vill leka", "Skäller mycket högt", "Sover på en bänk"], correct: 0,
          explain: "„Hunden viftar på svansen och vill leka.“" },
        { type: "detail", q: "Hur känner sig Sara efter promenaden?", qEn: "How does Sara feel after the walk?",
          options: ["Lugn och glad", "Trött och arg", "Nervös"], correct: 0,
          explain: "„Promenaden gör Sara lugn och glad...“" }
      ]
    },

    {
      id: "a2low-neighbor-009",
      title: "Ett samtal med grannen",
      titleEn: "A conversation with the neighbor",
      level: "A2-low",
      theme: "Vardagsliv · Daily life",
      text:
        "Mikael möter sin granne Karin i trapphuset. Karin är en trevlig äldre kvinna som " +
        "har bott i huset länge. De stannar och pratar en stund. Karin frågar hur Mikael " +
        "mår och om han trivs i lägenheten. Mikael svarar att allt är bra och att han " +
        "gillar området eftersom det är lugnt. Karin berättar att hon ska bjuda på kaffe " +
        "nästa helg. Mikael tackar ja och lovar att komma. Det är viktigt att ha en god " +
        "relation med sina grannar.",
      glossary: {
        "möter": "meets",
        "granne": "neighbor",
        "trapphuset": "the stairwell",
        "trevlig": "friendly / nice",
        "bott": "lived",
        "stannar": "stop",
        "pratar": "talk",
        "mår": "feels",
        "trivs": "enjoys it / is comfortable",
        "området": "the area",
        "eftersom": "because",
        "bjuda på": "invite for / treat to",
        "lovar": "promises",
        "relation": "relationship"
      },
      questions: [
        { type: "gist", q: "Var möter Mikael sin granne Karin?", qEn: "Where does Mikael meet his neighbor Karin?",
          options: ["I trapphuset", "I parken", "I affären"], correct: 0,
          explain: "„Mikael möter sin granne Karin i trapphuset.“" },
        { type: "detail", q: "Vad tycker Mikael om området där de bor?", qEn: "What does Mikael think of the area where they live?",
          options: ["Han gillar det eftersom det är lugnt", "Det är för mycket ljud", "Det är för dyrt"], correct: 0,
          explain: "„Mikael svarar att allt är bra och att han gillar området eftersom det är lugnt.“" },
        { type: "detail", q: "Vad bjuder Karin Mikael på till nästa helg?", qEn: "What does Karin invite Mikael for next weekend?",
          options: ["Kaffe", "Middag", "En resa"], correct: 0,
          explain: "„Karin berättar att hon ska bjuda på kaffe nästa helg.“" },
        { type: "detail", q: "Vad lovar Mikael att göra?", qEn: "What does Mikael promise to do?",
          options: ["Att komma på fika", "Att flytta från huset", "Att hjälpa till att städa"], correct: 0,
          explain: "Mikael tackar ja till fikat och lovar att komma." }
      ]
    },

    {
      id: "a2low-birthday-010",
      title: "En födelsedag",
      titleEn: "A birthday",
      level: "A2-low",
      theme: "Fritid · Free time",
      text:
        "Idag fyller Linus trettio år. Han vaknar tidigt och känner sig glad. Klockan tio " +
        "kommer hans vänner hem till honom för att fira hans födelsedag. De har med sig " +
        "presenter och en stor tårta med ljus. Linus blåser ut ljusen och öppnar sina " +
        "presenter. He får en fin tröja och en bok. Sedan dricker de kaffe och äter tårta " +
        "tillsammans. Linus tackar sina vänner för en trevlig födelsedag. Han har haft en " +
        "fantastisk dag med mycket skratt.",
      glossary: {
        "fyller ... år": "turns ... years old",
        "vaknar": "wakes up",
        "vänner": "friends",
        "fira": "celebrate",
        "födelsedag": "birthday",
        "presenter": "presents",
        "tårta": "cake",
        "blåser ut": "blows out",
        "tröja": "sweater",
        "tillsammans": "together",
        "tackar": "thanks",
        "skratt": "laughter"
      },
      questions: [
        { type: "gist", q: "Hur många år fyller Linus idag?", qEn: "How many years old is Linus turning today?",
          options: ["Trettio år", "Tjugo år", "Fyrtio år"], correct: 0,
          explain: "„Idag fyller Linus trettio år.“" },
        { type: "detail", q: "Vad har vännerna med sig?", qEn: "What do the friends bring with them?",
          options: ["Presenter och en stor tårta", "Bara kaffe", "Ingenting"], correct: 0,
          explain: "„De har med sig presenter och en stor tårta med ljus.“" },
        { type: "detail", q: "Vilka presenter får Linus?", qEn: "What presents does Linus receive?",
          options: ["En fin tröja och en bok", "En ny telefon och skor", "Pengar och blommor"], correct: 0,
          explain: "„Han får en fin tröja och en bok.“" },
        { type: "detail", q: "Vad gör Linus efter att ha öppnat presenterna?", qEn: "What does Linus do after opening the presents?",
          options: ["Dricker kaffe och äter tårta med sina vänner", "Går och lägger sig direkt", "Går till jobbet"], correct: 0,
          explain: "„Sedan dricker de kaffe och äter tårta tillsammans.“" }
      ]
    }

  ];

  // Compute word counts and register into the shared global story list.
  stories.forEach(function (s) {
    s.wordCount = (s.text.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_STORIES = (window.SvCI_STORIES || []).concat(stories);
})();
