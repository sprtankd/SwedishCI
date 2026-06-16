/* B1-level listening passages for the Listening Lab.
   Schema: {id, title, titleEn, level, theme, wordCount, transcript, glossary, questions}
   Longer and grammatically denser than the A2 set (3.2): subordinate clauses
   (eftersom, trots att, om, medan), conditional/modal phrasing, and topics
   closer to SFI D listening material (workplace, civic life, health, society)
   rather than the A2 set's everyday-errand scenarios. */
const LISTENING_B1 = [
  {
    id: "listeningb1-community-1",
    title: "Ett radioprogram om en eldsjäl i stadsdelen",
    titleEn: "A radio program about a passionate volunteer in the neighborhood",
    level: "B1",
    theme: "community",
    wordCount: 132,
    transcript:
      "Välkomna till dagens program. Idag ska vi prata om Lina Berg, som har bott i " +
      "stadsdelen i tio år. Grannarna brukar kalla henne en riktig eldsjäl. Hon " +
      "arbetar som lärare, men på sin fritid driver hon en " +
      "frivilligorganisation som hjälper nyanlända familjer. Allt började för fem år " +
      "sedan, när Lina märkte att många grannar kände sig ensamma och inte visste var " +
      "de kunde få hjälp med svenska språket. Sedan dess har organisationen vuxit, och " +
      "numera deltar över femtio personer varje vecka i olika aktiviteter, till exempel " +
      "språkcaféer och läxhjälp för barn. Lina säger att det viktigaste är att alla " +
      "känner sig välkomna, oavsett varifrån de kommer. Hon hoppas att fler ska " +
      "engagera sig, eftersom behovet bara ökar. Nästa vecka firar organisationen sitt " +
      "femårsjubileum med en fest i parken, och alla är inbjudna.",
    glossary: {
      eldsjäl: "a passionate driving force, devoted volunteer",
      nyanlända: "newly arrived (immigrants)",
      frivilligorganisation: "volunteer organization",
      "engagera sig": "to get involved",
      jubileum: "anniversary",
      oavsett: "regardless of",
    },
    questions: [
      {
        q: "Vad handlar radioprogrammet om?",
        qEn: "What is the radio program about?",
        options: ["En eldsjäl i stadsdelen", "Ett brott i centrum", "En fotbollsmatch"],
        correct: 0,
      },
      {
        q: "Vad arbetar Lina med?",
        qEn: "What does Lina work as?",
        options: ["Sjuksköterska", "Lärare", "Brevbärare"],
        correct: 1,
      },
      {
        q: "Vad gör organisationen Lina driver?",
        qEn: "What does the organization Lina runs do?",
        options: ["Säljer secondhand-kläder", "Hjälper nyanlända familjer", "Ordnar fotbollsträning"],
        correct: 1,
      },
      {
        q: "Hur länge har organisationen funnits?",
        qEn: "How long has the organization existed?",
        options: ["Ett år", "Tio år", "Fem år"],
        correct: 2,
      },
      {
        q: "Vad ska organisationen fira nästa vecka?",
        qEn: "What will the organization celebrate next week?",
        options: ["Sitt femårsjubileum", "Linas pension", "En ny lokal"],
        correct: 0,
      },
    ],
  },
  {
    id: "listeningb1-workplace-1",
    title: "Information om nya rutiner på jobbet",
    titleEn: "Information about new routines at work",
    level: "B1",
    theme: "workplace",
    wordCount: 130,
    transcript:
      "God morgon, allihopa. Innan vi börjar dagens möte vill jag informera om några " +
      "förändringar som börjar gälla från och med nästa månad. För det första kommer " +
      "vi att byta system för tidrapportering, eftersom det gamla systemet ofta " +
      "krånglade och flera av er har klagat på det. Den nya appen är enklare att " +
      "använda, och ni kommer att få en kort utbildning nästa vecka. För det andra " +
      "inför vi flexibel arbetstid på försök under tre månader, vilket betyder att ni " +
      "kan börja mellan sju och nio på morgonen, så länge ni arbetar åtta timmar per " +
      "dag. Om försöket går bra fortsätter vi med det permanent. Till sist vill jag " +
      "påminna om att rapportera eventuella problem till mig direkt, istället för att " +
      "vänta till nästa möte. Har någon frågor innan vi fortsätter?",
    glossary: {
      tidrapportering: "time reporting",
      krånglade: "malfunctioned, was buggy",
      "på försök": "on a trial basis",
      permanent: "permanent, permanently",
      "påminna om": "to remind about",
      eventuella: "any, potential",
    },
    questions: [
      {
        q: "Vad handlar mötet om?",
        qEn: "What is the meeting about?",
        options: ["Nya rutiner på jobbet", "En personalfest", "Ett nytt kontor"],
        correct: 0,
      },
      {
        q: "Varför byter de system för tidrapportering?",
        qEn: "Why are they switching time-reporting systems?",
        options: ["Det nya är billigare", "Det gamla krånglade ofta", "Chefen ville testa något nytt"],
        correct: 1,
      },
      {
        q: "Hur länge pågår försöket med flexibel arbetstid?",
        qEn: "How long does the flexible-hours trial last?",
        options: ["En månad", "Ett år", "Tre månader"],
        correct: 2,
      },
      {
        q: "Mellan vilka klockslag kan man börja jobbet under försöket?",
        qEn: "Between which times can you start work during the trial?",
        options: ["Sju och nio", "Sex och åtta", "Åtta och tio"],
        correct: 0,
      },
      {
        q: "Vad ska man göra om man har problem?",
        qEn: "What should you do if you have a problem?",
        options: ["Vänta till nästa möte", "Rapportera direkt", "Skicka ett mejl till alla"],
        correct: 1,
      },
    ],
  },
  {
    id: "listeningb1-health-1",
    title: "Sjukvårdsrådgivningen",
    titleEn: "The healthcare advice line",
    level: "B1",
    theme: "health",
    wordCount: 131,
    transcript:
      "Sjukvårdsrådgivningen, du pratar med sjuksköterska Malin. Hej, jag har haft " +
      "feber och ont i halsen i tre dagar nu, och jag undrar om jag borde söka vård. " +
      "Har du också hosta eller huvudvärk? Ja, lite hosta, men ingen huvudvärk. Det " +
      "låter som en vanlig förkylning eller influensa, och i de flesta fall behöver " +
      "man inte uppsöka vårdcentralen för det. Du bör vila ordentligt, dricka mycket " +
      "vätska och ta receptfria febernedsättande tabletter om febern känns jobbig. " +
      "Om febern stiger över trettionio grader, eller om du får svårt att andas, ska " +
      "du kontakta oss igen eller söka akut vård. Hur länge brukar det ta innan man " +
      "känner sig bättre? Vanligtvis blir man bättre inom en vecka, men om symtomen " +
      "inte har förbättrats efter sju dagar är det bra att höra av sig igen.",
    glossary: {
      sjuksköterska: "nurse",
      "söka vård": "to seek medical care",
      förkylning: "a cold (illness)",
      vårdcentralen: "the health center",
      febernedsättande: "fever-reducing",
      "höra av sig": "to get in touch, follow up",
    },
    questions: [
      {
        q: "Varför ringer personen till sjukvårdsrådgivningen?",
        qEn: "Why is the person calling the healthcare advice line?",
        options: ["Hon har feber och ont i halsen", "Hon har brutit foten", "Hon vill boka en tid hos tandläkaren"],
        correct: 0,
      },
      {
        q: "Vad tror sjuksköterskan att det är?",
        qEn: "What does the nurse think it is?",
        options: ["Matförgiftning", "En vanlig förkylning eller influensa", "Allergi"],
        correct: 1,
      },
      {
        q: "Vad rekommenderar sjuksköterskan?",
        qEn: "What does the nurse recommend?",
        options: ["Vila och dricka mycket vätska", "Träna hårt för att svettas ut febern", "Äta mycket choklad"],
        correct: 0,
      },
      {
        q: "Vid vilken feber ska man söka akut vård?",
        qEn: "At what fever should you seek emergency care?",
        options: ["Över trettiosju grader", "Över trettioåtta grader", "Över trettionio grader"],
        correct: 2,
      },
      {
        q: "Hur lång tid tar det vanligtvis innan man känner sig bättre?",
        qEn: "How long does it usually take to feel better?",
        options: ["En dag", "En vecka", "En månad"],
        correct: 1,
      },
    ],
  },
  {
    id: "listeningb1-civic-1",
    title: "Nya regler för återvinning",
    titleEn: "New rules for recycling",
    level: "B1",
    theme: "civic",
    wordCount: 125,
    transcript:
      "Välkommen till kommunens informationslinje om återvinning. Från och med första " +
      "september ändras reglerna för hur vi sorterar vårt avfall. Tidigare kunde " +
      "matavfall slängas tillsammans med restavfall, men nu måste alla hushåll " +
      "sortera matavfallet separat i bruna papperspåsar, som delas ut gratis på " +
      "återvinningscentralen. Anledningen är att kommunen vill minska mängden avfall " +
      "som går till förbränning, och istället göra biogas av matresterna. Plast, " +
      "papper, glas och metall ska fortfarande sorteras som vanligt i de befintliga " +
      "behållarna. Om du bor i lägenhet och inte har tillgång till separat insamling " +
      "av matavfall ännu, kommer din fastighetsägare att informera om när det börjar " +
      "gälla för just din byggnad. Har du frågor om sorteringen kan du besöka " +
      "kommunens hemsida, där det finns en tydlig guide med bilder för varje avfallstyp.",
    glossary: {
      återvinning: "recycling",
      avfall: "waste",
      förbränning: "incineration",
      biogas: "biogas",
      fastighetsägare: "property owner, landlord",
      "tillgång till": "access to",
    },
    questions: [
      {
        q: "Vad handlar meddelandet om?",
        qEn: "What is the message about?",
        options: ["Höjda hyror", "Stängda bibliotek", "Nya regler för återvinning"],
        correct: 2,
      },
      {
        q: "Vad måste hushållen göra med matavfall från första september?",
        qEn: "What must households do with food waste from September 1st?",
        options: ["Sortera det separat i bruna papperspåsar", "Slänga det med restavfallet som vanligt", "Lämna det till grannen"],
        correct: 0,
      },
      {
        q: "Varför inför kommunen den nya regeln?",
        qEn: "Why is the municipality introducing the new rule?",
        options: ["För att spara pengar på sopbilar", "För att minska avfall till förbränning och göra biogas", "För att alla grannar klagat"],
        correct: 1,
      },
      {
        q: "Var kan man hämta de bruna papperspåsarna?",
        qEn: "Where can you pick up the brown paper bags?",
        options: ["I mataffären, mot betalning", "De skickas hem per post", "På återvinningscentralen, gratis"],
        correct: 2,
      },
      {
        q: "Vad ska man göra om man har frågor om sorteringen?",
        qEn: "What should you do if you have questions about sorting?",
        options: ["Besöka kommunens hemsida", "Ringa kommunens växel", "Fråga grannen"],
        correct: 0,
      },
    ],
  },
  {
    id: "listeningb1-society-1",
    title: "Information om föräldraledighet",
    titleEn: "Information about parental leave",
    level: "B1",
    theme: "society",
    wordCount: 129,
    transcript:
      "Hej och välkomna till dagens avsnitt, där vi förklarar hur föräldraledighet " +
      "fungerar i Sverige. Som förälder har du rätt till totalt fyra hundra åttio " +
      "dagar ledighet per barn, och dagarna kan delas mellan föräldrarna på det sätt " +
      "som passar familjen bäst. Under de första tre hundra nittio dagarna får man " +
      "ungefär åttio procent av sin vanliga lön, medan de återstående dagarna ger en " +
      "lägre, fast ersättning. Många väljer att vara hemma de första månaderna " +
      "tillsammans, innan en av föräldrarna går tillbaka till jobbet. Det är också " +
      "möjligt att ta ut ledigheten i flera år, eftersom barnet får använda dagarna " +
      "tills det fyller tolv år. Om man är ensam vårdnadshavare har man rätt till " +
      "alla dagarna själv. Glöm inte att ansöka om ledigheten hos Försäkringskassan " +
      "minst en månad i förväg.",
    glossary: {
      föräldraledighet: "parental leave",
      ersättning: "compensation, benefit payment",
      vårdnadshavare: "legal guardian",
      Försäkringskassan: "the Swedish Social Insurance Agency",
      "i förväg": "in advance",
      återstående: "remaining",
    },
    questions: [
      {
        q: "Vad handlar avsnittet om?",
        qEn: "What is the episode about?",
        options: ["Hur man skriver ett CV", "Hur föräldraledighet fungerar i Sverige", "Hur man söker svenskt medborgarskap"],
        correct: 1,
      },
      {
        q: "Hur många dagars föräldraledighet har man rätt till per barn?",
        qEn: "How many days of parental leave are you entitled to per child?",
        options: ["Hundra åttio dagar", "Tre hundra dagar", "Fyra hundra åttio dagar"],
        correct: 2,
      },
      {
        q: "Hur stor del av lönen får man under de första tre hundra nittio dagarna?",
        qEn: "What share of your salary do you get during the first 390 days?",
        options: ["Ungefär åttio procent", "Hela lönen", "Ungefär femtio procent"],
        correct: 0,
      },
      {
        q: "Tills vilken ålder kan barnet använda föräldradagarna?",
        qEn: "Until what age can the child's parental-leave days be used?",
        options: ["Tills barnet fyller arton år", "Tills barnet fyller tolv år", "Tills barnet fyller sex år"],
        correct: 1,
      },
      {
        q: "Var ska man ansöka om föräldraledighet?",
        qEn: "Where do you apply for parental leave?",
        options: ["Hos Skatteverket", "Hos kommunen", "Hos Försäkringskassan"],
        correct: 2,
      },
    ],
  },
];
