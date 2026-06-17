/* ============================================================================
   Swedish CI — data/stories-a2-high.js
   Graded reader stories at A2-high level (~100-150 words each).
   More V2 inversion, yes/no & wh-questions, and an introduction to bisatser
   (subordinate clauses with eftersom / att / som / om).
   Topics: job interview, visiting the doctor, apartment hunting, taking the bus,
   Swedish holidays.
   ========================================================================== */
(function () {
  var stories = [

    {
      id: "a2high-interview-001",
      title: "Anställningsintervjun",
      titleEn: "The job interview",
      level: "A2-high",
      theme: "Arbete · Work",
      text:
        "Sofia har sökt ett nytt jobb på ett företag i stan. Idag ska hon på en " +
        "anställningsintervju. Hon är lite nervös, men hon har förberett sig väl. På " +
        "morgonen tar hon på sig fina kläder och åker tidigt med tunnelbanan. När hon " +
        "kommer fram hälsar chefen vänligt på henne. De sätter sig i ett rum och börjar " +
        "prata. Chefen frågar varför Sofia vill ha jobbet. Sofia berättar att hon har " +
        "arbetat med liknande uppgifter förut. Hon säger också att hon gärna lär sig nya " +
        "saker. Chefen verkar nöjd med hennes svar. Efter intervjun säger han att de hör " +
        "av sig inom en vecka. Sofia känner sig glad när hon går därifrån, för hon tror " +
        "att det gick bra.",
      glossary: {
        "sökt": "applied for",
        "företag": "company",
        "anställningsintervju": "job interview",
        "nervös": "nervous",
        "förberett sig": "prepared herself",
        "tunnelbanan": "the subway / metro",
        "hälsar": "greets",
        "chefen": "the boss",
        "vänligt": "kindly",
        "liknande": "similar",
        "uppgifter": "tasks",
        "gärna": "gladly",
        "verkar": "seems",
        "nöjd": "satisfied",
        "hör av sig": "gets in touch",
        "inom": "within",
        "känner sig": "feels",
        "gick bra": "went well"
      },
      questions: [
        { type: "gist", q: "Vad ska Sofia göra idag?", qEn: "What is Sofia going to do today?",
          options: ["Gå på en anställningsintervju", "Börja sitt nya jobb", "Träffa sin chef på lunchen"], correct: 0,
          explain: "„Idag ska hon på en anställningsintervju.“" },
        { type: "detail", q: "Hur åker Sofia till intervjun?", qEn: "How does Sofia travel to the interview?",
          options: ["Med tunnelbanan", "Med buss", "Med bil"], correct: 0,
          explain: "„…åker tidigt med tunnelbanan.“" },
        { type: "detail", q: "Vad frågar chefen Sofia?", qEn: "What does the boss ask Sofia?",
          options: ["Varför hon vill ha jobbet", "Var hon bor", "Hur gammal hon är"], correct: 0,
          explain: "„Chefen frågar varför Sofia vill ha jobbet.“" },
        { type: "detail", q: "När ska företaget höra av sig?", qEn: "When will the company get in touch?",
          options: ["Inom en vecka", "Samma dag", "Inom en månad"], correct: 0,
          explain: "„…de hör av sig inom en vecka.“" },
        { type: "detail", q: "Hur känner sig Sofia efter intervjun?", qEn: "How does Sofia feel after the interview?",
          options: ["Glad — hon tror det gick bra", "Ledsen och besviken", "Trött och arg"], correct: 0,
          explain: "„Sofia känner sig glad … för hon tror att det gick bra.“" }
      ]
    },

    {
      id: "a2high-doctor-002",
      title: "Hos läkaren",
      titleEn: "At the doctor's",
      level: "A2-high",
      theme: "Hälsa · Health",
      text:
        "Anders har känt sig sjuk i flera dagar. Han har ont i halsen och hostar mycket. " +
        "Därför bestämmer han sig för att gå till vårdcentralen. Han ringer på morgonen och " +
        "får en tid samma eftermiddag. I väntrummet sitter andra patienter och väntar på " +
        "sin tur. När det blir Anders tur går han in till läkaren. Läkaren frågar hur länge " +
        "han har varit sjuk och lyssnar på hans lungor. Hon tittar också i hans hals. Sedan " +
        "säger hon att Anders har en vanlig förkylning. Han behöver inte medicin, men han " +
        "ska vila och dricka mycket vatten. Om han inte blir bättre inom en vecka ska han " +
        "komma tillbaka. Anders tackar läkaren och går hem för att vila.",
      glossary: {
        "sjuk": "ill",
        "ont i halsen": "a sore throat",
        "hostar": "coughs",
        "bestämmer sig": "decides",
        "vårdcentralen": "the health centre",
        "tid": "appointment",
        "väntrummet": "the waiting room",
        "patienter": "patients",
        "tur": "turn",
        "läkaren": "the doctor",
        "lungor": "lungs",
        "hals": "throat",
        "förkylning": "a cold",
        "medicin": "medicine",
        "vila": "rest",
        "blir bättre": "gets better",
        "tackar": "thanks"
      },
      questions: [
        { type: "gist", q: "Varför går Anders till vårdcentralen?", qEn: "Why does Anders go to the health centre?",
          options: ["Han är sjuk", "Han ska hämta medicin åt sin fru", "Han arbetar där"], correct: 0,
          explain: "„Anders har känt sig sjuk i flera dagar.“" },
        { type: "detail", q: "Vilka besvär har Anders?", qEn: "What symptoms does Anders have?",
          options: ["Ont i halsen och hosta", "Ont i magen", "Ont i ryggen"], correct: 0,
          explain: "„Han har ont i halsen och hostar mycket.“" },
        { type: "detail", q: "Vad säger läkaren att han har?", qEn: "What does the doctor say he has?",
          options: ["En vanlig förkylning", "En allvarlig sjukdom", "Inget alls"], correct: 0,
          explain: "„…Anders har en vanlig förkylning.“" },
        { type: "detail", q: "Vad ska Anders göra för att bli frisk?", qEn: "What should Anders do to recover?",
          options: ["Vila och dricka mycket vatten", "Ta stark medicin", "Träna hårt"], correct: 0,
          explain: "„…han ska vila och dricka mycket vatten.“" },
        { type: "detail", q: "Vad ska han göra om han inte blir bättre?", qEn: "What should he do if he doesn't get better?",
          options: ["Komma tillbaka inom en vecka", "Åka till sjukhuset direkt", "Vänta en månad"], correct: 0,
          explain: "„Om han inte blir bättre inom en vecka ska han komma tillbaka.“" }
      ]
    },

    {
      id: "a2high-apartment-003",
      title: "Att hitta en lägenhet",
      titleEn: "Finding an apartment",
      level: "A2-high",
      theme: "Boende · Housing",
      text:
        "Emma och hennes pojkvän letar efter en ny lägenhet i Malmö. Deras nuvarande " +
        "lägenhet är för liten, eftersom de snart ska få ett barn. På internet tittar de på " +
        "många annonser. De vill ha minst två rum och ett kök, gärna nära en park. En dag " +
        "hittar de en lägenhet som verkar perfekt. Den ligger på tredje våningen och har en " +
        "balkong. De ringer hyresvärden och bokar en visning. När de kommer dit gillar de " +
        "lägenheten direkt. Rummen är ljusa och köket är nyrenoverat. Hyran är lite hög, men " +
        "de tycker att den är värd pengarna. Efter visningen bestämmer de sig för att skriva " +
        "på kontraktet. Nu ser de fram emot att flytta in.",
      glossary: {
        "pojkvän": "boyfriend",
        "letar efter": "are looking for",
        "nuvarande": "current",
        "eftersom": "because",
        "annonser": "ads / listings",
        "minst": "at least",
        "våningen": "the floor",
        "balkong": "balcony",
        "hyresvärden": "the landlord",
        "visning": "a viewing",
        "ljusa": "bright",
        "nyrenoverat": "newly renovated",
        "hyran": "the rent",
        "värd pengarna": "worth the money",
        "kontraktet": "the contract",
        "ser fram emot": "look forward to",
        "flytta in": "move in"
      },
      questions: [
        { type: "gist", q: "Vad letar Emma och hennes pojkvän efter?", qEn: "What are Emma and her boyfriend looking for?",
          options: ["En ny lägenhet", "Ett nytt jobb", "En ny bil"], correct: 0,
          explain: "„Emma och hennes pojkvän letar efter en ny lägenhet i Malmö.“" },
        { type: "detail", q: "Varför behöver de en större lägenhet?", qEn: "Why do they need a bigger apartment?",
          options: ["De ska snart få ett barn", "De har en hund", "De vill ha ett kontor"], correct: 0,
          explain: "„…eftersom de snart ska få ett barn.“" },
        { type: "detail", q: "Vad har lägenheten som de gillar?", qEn: "What does the apartment they like have?",
          options: ["En balkong", "En trädgård", "En pool"], correct: 0,
          explain: "„Den ligger på tredje våningen och har en balkong.“" },
        { type: "detail", q: "Vad tycker de om hyran?", qEn: "What do they think of the rent?",
          options: ["Lite hög, men värd pengarna", "Alldeles för billig", "Alldeles för dyr"], correct: 0,
          explain: "„Hyran är lite hög, men de tycker att den är värd pengarna.“" },
        { type: "detail", q: "Vad gör de efter visningen?", qEn: "What do they do after the viewing?",
          options: ["Skriver på kontraktet", "Fortsätter att leta", "Säger nej till lägenheten"], correct: 0,
          explain: "„…bestämmer de sig för att skriva på kontraktet.“" }
      ]
    },

    {
      id: "a2high-bus-004",
      title: "Att åka buss",
      titleEn: "Taking the bus",
      level: "A2-high",
      theme: "Resor · Travel",
      text:
        "Varje morgon åker Omar buss till skolan där han läser svenska. Bussen går från " +
        "hållplatsen nära hans hus klockan kvart över åtta. Idag är Omar lite sen, så han " +
        "måste springa till hållplatsen. Som tur är kommer bussen några minuter senare. Omar " +
        "visar sitt busskort för chauffören och sätter sig längst bak. På bussen är det många " +
        "andra resenärer. Några läser på sina telefoner, andra tittar ut genom fönstret. " +
        "Efter tio minuter ringer Omar på stoppknappen, eftersom hans hållplats är nära. När " +
        "bussen stannar går han av och tackar chauffören. Sedan promenerar han sista biten " +
        "till skolan. Han kommer fram precis i tid till första lektionen.",
      glossary: {
        "hållplatsen": "the bus stop",
        "kvart över": "quarter past",
        "sen": "late",
        "springa": "to run",
        "som tur är": "luckily",
        "busskort": "bus pass",
        "chauffören": "the driver",
        "längst bak": "at the very back",
        "resenärer": "passengers",
        "fönstret": "the window",
        "stoppknappen": "the stop button",
        "stannar": "stops",
        "går av": "gets off",
        "promenerar": "walks",
        "sista biten": "the last stretch",
        "precis i tid": "just in time",
        "lektionen": "the lesson"
      },
      questions: [
        { type: "gist", q: "Vart åker Omar med bussen?", qEn: "Where does Omar take the bus to?",
          options: ["Till skolan", "Till jobbet", "Till affären"], correct: 0,
          explain: "„…åker Omar buss till skolan där han läser svenska.“" },
        { type: "detail", q: "Varför måste Omar springa idag?", qEn: "Why does Omar have to run today?",
          options: ["Han är lite sen", "Bussen är full", "Det regnar"], correct: 0,
          explain: "„Idag är Omar lite sen, så han måste springa till hållplatsen.“" },
        { type: "detail", q: "Var sätter sig Omar på bussen?", qEn: "Where does Omar sit on the bus?",
          options: ["Längst bak", "Längst fram", "Bredvid chauffören"], correct: 0,
          explain: "„…sätter sig längst bak.“" },
        { type: "detail", q: "Vad gör Omar när hans hållplats närmar sig?", qEn: "What does Omar do as his stop approaches?",
          options: ["Ringer på stoppknappen", "Ringer ett telefonsamtal", "Somnar"], correct: 0,
          explain: "„…ringer Omar på stoppknappen, eftersom hans hållplats är nära.“" },
        { type: "detail", q: "Kommer Omar i tid till lektionen?", qEn: "Does Omar get to the lesson on time?",
          options: ["Ja, precis i tid", "Nej, han missar den", "Han kommer en timme för sent"], correct: 0,
          explain: "„Han kommer fram precis i tid till första lektionen.“" }
      ]
    },

    {
      id: "a2high-holidays-005",
      title: "Svenska högtider",
      titleEn: "Swedish holidays",
      level: "A2-high",
      theme: "Samhälle · Society",
      text:
        "I Sverige finns det många högtider under året. En av de mest kända är midsommar, " +
        "som firas i juni. Då är dagarna långa och ljusa, och många reser ut på landet. Folk " +
        "klär en majstång med blommor och dansar runt den. På bordet finns sill, potatis och " +
        "jordgubbar. På vintern firar svenskarna jul. Då tänder man ljus och äter god mat " +
        "tillsammans med familjen. Många barn väntar på tomten, som kommer med klappar. En " +
        "annan viktig högtid är lucia i december. Tidigt på morgonen går barn i vita kläder " +
        "och sjunger vackra sånger. De bär ljus och delar ut pepparkakor och bullar. Svenska " +
        "högtider är ett fint sätt att träffa familj och vänner.",
      glossary: {
        "högtider": "holidays / celebrations",
        "kända": "well-known",
        "midsommar": "Midsummer",
        "firas": "is celebrated",
        "reser ut": "travel out",
        "majstång": "maypole",
        "blommor": "flowers",
        "dansar": "dance",
        "sill": "herring",
        "jordgubbar": "strawberries",
        "tänder ljus": "lights candles",
        "tomten": "Santa / the gnome",
        "klappar": "presents",
        "lucia": "St Lucia's Day",
        "vita": "white",
        "sjunger": "sing",
        "bär": "carry",
        "delar ut": "hand out",
        "pepparkakor": "gingerbread biscuits"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Svenska högtider", "Svensk mat", "Det svenska vädret"], correct: 0,
          explain: "Texten beskriver flera svenska högtider: midsommar, jul och lucia." },
        { type: "detail", q: "När firas midsommar?", qEn: "When is Midsummer celebrated?",
          options: ["I juni", "I december", "I mars"], correct: 0,
          explain: "„…midsommar, som firas i juni.“" },
        { type: "detail", q: "Vad gör folk runt majstången?", qEn: "What do people do around the maypole?",
          options: ["De dansar", "De sover", "De arbetar"], correct: 0,
          explain: "„Folk klär en majstång med blommor och dansar runt den.“" },
        { type: "detail", q: "Vad delar barnen ut på lucia?", qEn: "What do the children hand out on Lucia?",
          options: ["Pepparkakor och bullar", "Blommor", "Presenter"], correct: 0,
          explain: "„De bär ljus och delar ut pepparkakor och bullar.“" },
        { type: "detail", q: "Vad är högtiderna ett bra sätt att göra?", qEn: "What are the holidays a good way to do?",
          options: ["Träffa familj och vänner", "Tjäna pengar", "Resa utomlands"], correct: 0,
          explain: "„Svenska högtider är ett fint sätt att träffa familj och vänner.“" }
      ]
    }

  ];

  stories.forEach(function (s) {
    s.wordCount = (s.text.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_STORIES = (window.SvCI_STORIES || []).concat(stories);
})();
