/* ============================================================
   Swedish CI — Graded Reader data: A2-high stories
   ~100-150 words each. V2, questions, and an early introduction
   of subordinate clauses (att, eftersom, när, om). Mix of present
   and past tense. Loaded by reader.html.
   ============================================================ */
const STORIES_A2_HIGH = [
  {
    id: "a2h-work-1",
    title: "En anställningsintervju",
    titleEn: "A job interview",
    level: "A2-high",
    theme: "work",
    wordCount: 134,
    text:
      "Idag har Sofia en anställningsintervju. Hon känner sig nervös men också glad. Företaget söker en " +
      "ny säljare, och Sofia har sökt jobbet sedan två veckor. Hon klär sig i en fin blus och svarta " +
      "byxor. Klockan tio kommer Sofia till kontoret. En man heter Peter tar emot henne. Han är chef för " +
      "avdelningen. De sätter sig i ett litet rum. Peter frågar varför Sofia vill jobba där. Hon svarar " +
      "att hon gillar att prata med kunder och att hon har erfarenhet från en annan butik. Peter frågar " +
      "också vad hon vet om företaget. Sofia har läst på deras hemsida innan intervjun. Efter trettio " +
      "minuter är intervjun klar. Peter säger att han ska ringa nästa vecka. Sofia känner sig nöjd när hon " +
      "går därifrån. Hon hoppas verkligen att hon får jobbet.",
    glossary: {
      anställningsintervju: "job interview",
      nervös: "nervous",
      säljare: "salesperson",
      erfarenhet: "experience",
      butik: "shop, store",
      hemsida: "website",
      avdelningen: "the department",
      nöjd: "satisfied, pleased",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En anställningsintervju", "Ett möte med vänner", "En semesterresa"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad söker företaget?",
        qEn: "What is the company looking for?",
        options: ["En ny säljare", "En ny chef", "En ny doktor"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vem tar emot Sofia på kontoret?",
        qEn: "Who receives Sofia at the office?",
        options: ["Peter", "Tobias", "Daniel"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad frågar Peter om?",
        qEn: "What does Peter ask about?",
        options: ["Varför Sofia vill jobba där", "Var Sofia bor", "Hur gammal Sofia är"],
        correct: 0,
      },
      {
        type: "detail",
        q: "När ska Peter ringa Sofia?",
        qEn: "When will Peter call Sofia?",
        options: ["Nästa vecka", "Imorgon", "Om en månad"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2h-health-1",
    title: "Ett besök hos doktorn",
    titleEn: "A visit to the doctor",
    level: "A2-high",
    theme: "health",
    wordCount: 145,
    text:
      "Mehmet har haft ont i halsen i tre dagar. Han bestämmer sig för att ringa vårdcentralen. En " +
      "sjuksköterska svarar i telefonen och frågar vad som är fel. Mehmet berättar att han har feber och " +
      "att han hostar mycket. Sjuksköterskan säger att han ska komma in samma dag. Klockan två kommer " +
      "Mehmet till vårdcentralen. Han sätter sig i väntrummet tillsammans med andra patienter. Efter tio " +
      "minuter kallar en doktor på hans namn. Doktorn heter Eva och hon undersöker hans hals och lyssnar " +
      "på hans lungor. Hon frågar hur länge han har varit sjuk. Eva säger att han troligen har en vanlig " +
      "förkylning, men hon vill också testa om det är något annat. Hon skriver ut medicin mot febern och " +
      "ber Mehmet vila mycket. Om han inte blir bättre inom en vecka ska han ringa igen. Mehmet tackar " +
      "doktorn och går hem för att vila.",
    glossary: {
      vårdcentralen: "the health center",
      sjuksköterska: "nurse",
      feber: "fever",
      hostar: "coughs",
      väntrummet: "the waiting room",
      undersöker: "examines",
      förkylning: "a cold (illness)",
      vila: "to rest",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Mehmet besöker doktorn", "Mehmet är på jobbet", "Mehmet reser utomlands"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad har Mehmet haft ont i?",
        qEn: "What has Mehmet had pain in?",
        options: ["Halsen", "Magen", "Foten"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vem undersöker Mehmet?",
        qEn: "Who examines Mehmet?",
        options: ["Doktor Eva", "Sjuksköterskan", "Hyresvärden"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad tror Eva att Mehmet har?",
        qEn: "What does Eva think Mehmet has?",
        options: ["En vanlig förkylning", "Något allvarligt", "Ingenting"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad ska Mehmet göra om han inte blir bättre?",
        qEn: "What should Mehmet do if he doesn't get better?",
        options: ["Ringa igen", "Åka till sjukhuset direkt", "Vänta en månad"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2h-housing-1",
    title: "Att leta lägenhet",
    titleEn: "Apartment hunting",
    level: "A2-high",
    theme: "housing",
    wordCount: 142,
    text:
      "Familjen Nilsson behöver en ny lägenhet eftersom de väntar barn. Deras nuvarande lägenhet har bara " +
      "ett sovrum, och det räcker inte längre. Anna och hennes man Tobias letar på internet varje kväll. " +
      "De hittar en lägenhet med två sovrum nära en grön park. Hyran är ganska hög, men lägenheten ligger " +
      "nära Tobias jobb. De ringer hyresvärden och frågar om de kan titta på lägenheten. Hyresvärden säger " +
      "att de kan komma på lördag. När de kommer dit tycker de att köket är fint och att balkongen är " +
      "stor. Anna gillar att det finns en tvättstuga i huset. Tobias är orolig för att hyran är för dyr " +
      "för dem. De pratar länge om för- och nackdelar. Till slut bestämmer de sig för att skicka in en " +
      "ansökan. De hoppas att hyresvärden väljer dem framför andra sökande.",
    glossary: {
      nuvarande: "current",
      hyresvärden: "the landlord",
      balkongen: "the balcony",
      tvättstuga: "laundry room",
      orolig: "worried",
      ansökan: "application",
      sökande: "applicants",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Familjen Nilsson letar lägenhet", "Familjen Nilsson säljer sin lägenhet", "Familjen Nilsson flyttar utomlands"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Varför behöver de en ny lägenhet?",
        qEn: "Why do they need a new apartment?",
        options: ["De väntar barn", "De vill bo närmare havet", "Hyran är för låg"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad gillar Anna med lägenheten?",
        qEn: "What does Anna like about the apartment?",
        options: ["Tvättstugan i huset", "Det stora köket", "Den låga hyran"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad är Tobias orolig för?",
        qEn: "What is Tobias worried about?",
        options: ["Att hyran är för dyr", "Att lägenheten är för liten", "Att grannarna är högljudda"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad bestämmer de sig för till slut?",
        qEn: "What do they decide in the end?",
        options: ["Att skicka in en ansökan", "Att leta vidare", "Att stanna i sin gamla lägenhet"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2h-transport-1",
    title: "Att åka buss",
    titleEn: "Taking the bus",
    level: "A2-high",
    theme: "daily-life",
    wordCount: 138,
    text:
      "Varje morgon åker Daniel buss till skolan. Bussen går från en hållplats nära hans hus. Han måste " +
      "vakna tidigt eftersom bussen kommer klockan sju och tio. En dag är Daniel trött och vaknar för " +
      "sent. Han springer till hållplatsen men ser bussen köra iväg utan honom. Daniel blir besviken och " +
      "ringer sin lärare för att berätta att han kommer sent. Han väntar femton minuter på nästa buss. När " +
      "bussen äntligen kommer är den full av människor. Daniel måste stå hela vägen till skolan. Han " +
      "tänker att han borde sätta flera larm imorgon. På bussen ser han också sin granne Fatima, som också " +
      "är på väg till skolan. De pratar om helgen medan bussen kör genom stan. Efter tjugo minuter kommer " +
      "de fram till skolan, fast lektionen redan har börjat.",
    glossary: {
      hållplats: "bus stop",
      besviken: "disappointed",
      larm: "alarm",
      granne: "neighbor",
      lektionen: "the lesson, the class",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Daniel missar bussen", "Daniel köper en bil", "Daniel slutar skolan"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Varför vaknar Daniel för sent?",
        qEn: "Why does Daniel wake up too late?",
        options: ["Han är trött", "Hans väckarklocka är trasig", "Han glömmer skolan"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad gör Daniel när han missar bussen?",
        qEn: "What does Daniel do when he misses the bus?",
        options: ["Ringer sin lärare", "Går hem igen", "Tar en taxi"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vem ser Daniel på bussen?",
        qEn: "Who does Daniel see on the bus?",
        options: ["Sin granne Fatima", "Sin lärare", "Sin syster"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad har redan börjat när de kommer fram?",
        qEn: "What has already started when they arrive?",
        options: ["Lektionen", "Rasten", "Frukosten"],
        correct: 0,
      },
    ],
  },

  {
    id: "a2h-culture-1",
    title: "Svenska högtider",
    titleEn: "Swedish holidays",
    level: "A2-high",
    theme: "society",
    wordCount: 140,
    text:
      "Sverige har många högtider under året. På vintern firar svenskar jul tillsammans med familjen. De " +
      "äter julbord med skinka, köttbullar och lutfisk. I februari äter många semlor, en söt bulle med " +
      "mandelmassa och grädde. På våren firar svenskar påsk, och barnen klär sig som påskkärringar. Den " +
      "sjätte juni är Sveriges nationaldag, och många hänger ut den blågula flaggan. Midsommar firas i " +
      "juni och är en av de mest älskade högtiderna. Då dansar människor runt en majstång och äter " +
      "jordgubbar och nypotatis. I december firar man också Lucia, då en flicka bär ljus i håret och " +
      "sjunger tillsammans med sina vänner. Många svenskar tycker att högtiderna ger en känsla av " +
      "gemenskap. Trots att Sverige är ett modernt land håller man fast vid gamla traditioner.",
    glossary: {
      högtider: "holidays, festivities",
      julbord: "Christmas buffet",
      semlor: "cream buns (Lent bun)",
      mandelmassa: "almond paste",
      påskkärringar: "Easter witches (children dressed up at Easter)",
      majstång: "maypole",
      gemenskap: "community, togetherness",
      traditioner: "traditions",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Svenska högtider", "Svensk mat", "Svensk historia"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad äter man på julbordet?",
        qEn: "What do people eat at the Christmas buffet?",
        options: ["Skinka, köttbullar och lutfisk", "Pizza och pasta", "Sushi"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad firas i februari?",
        qEn: "What is celebrated in February?",
        options: ["Semlor", "Påsk", "Midsommar"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad dansar man runt på midsommar?",
        qEn: "What do people dance around at midsummer?",
        options: ["En majstång", "Ett julträd", "En lägereld"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vem bär ljus i håret på Lucia?",
        qEn: "Who wears candles in their hair on Lucia?",
        options: ["En flicka", "En pojke", "En äldre kvinna"],
        correct: 0,
      },
    ],
  },
];
