/* ============================================================================
   Swedish CI — data/exam-reading-d.js
   Timed SFI D-style reading comprehension tests.
   Level: SFI Kurs D (B1 / B1+ vocabulary range).
   Time limit: 45 minutes.
   Contains 2 exams. Registers into window.SvCI_EXAM_READING_D.
   ========================================================================== */
(function () {
  "use strict";

  var exams = [
    {
      id: "exam-rd-1",
      title: "Läsförståelse D — Prov 1",
      level: "D",
      timeMinutes: 45,
      texts: [
        {
          id: "rd1-t1",
          title: "Ska läxor finnas i skolan?",
          type: "argumenterande",
          text:
            "Debatten om läxornas roll i den svensk skola är ständigt aktuell. Å ena sidan menar förespråkare att läxor " +
            "ger eleverna möjlighet att repetera och fördjupa sina kunskaper i lugn och ro hemma. Det hjälper dem också " +
            "att ta ansvar för sina studier och utveckla goda studievanor inför framtiden. Dessutom får föräldrarna en " +
            "inblick i vad barnen arbetar med i skolan.\n\n" +
            "Å andra sidan pekar motståndare på att läxor kan öka klyftorna mellan elever. Alla barn har inte samma " +
            "förutsättningar att få hjälp hemma. Vissa föräldrar har inte tid eller kunskap att stödja sina barn, vilket " +
            "gör att läxor gynnar barn från mer välutbildade familjer. Forskning visar också att för mycket läxor kan leda " +
            "till stress och minskad studielust.\n\n" +
            "Många experter föreslår istället en läxhjälp i skolans regi, där alla elever får samma chans att göra sina " +
            "uppgifter med stöd av lärare. Det skulle kunna jämna ut skillnaderna och ge en mer likvärdig skola för alla.",
          questions: [
            {
              q: "Vad är ett av förespråkarnas argument för läxor?",
              qEn: "What is one argument in favour of homework?",
              options: [
                "De gör att lärare kan arbeta mindre",
                "De ger eleverna möjlighet att repetera och fördjupa kunskaper hemma",
                "De minskar stressen hos barnen",
                "De garanterar godkända betyg för alla"
              ],
              correct: 1,
              explain: "Förespråkare hävdar att läxor ger eleverna chans att „repetera och fördjupa sina kunskaper i lugn och ro hemma.“"
            },
            {
              q: "Varför anser motståndarna att läxor ökar klyftorna?",
              qEn: "Why do opponents think homework increases divisions?",
              options: [
                "Eftersom vissa skolor inte ger läxor alls",
                "Eftersom alla elever inte har samma stöd eller hjälp i hemmet",
                "Eftersom läxor är för svåra för de flesta föräldrar",
                "Eftersom rika elever kan köpa färdiga läxor"
              ],
              correct: 1,
              explain: "Texten förklarar: „Alla barn har inte samma förutsättningar att få hjälp hemma. Vissa föräldrar har inte tid eller kunskap...“"
            },
            {
              q: "Vilken lösning föreslår många experter enligt texten?",
              qEn: "What solution do many experts propose according to the text?",
              options: [
                "Att helt avskaffa alla former av skolarbete",
                "Att flytta all undervisning till hemmet",
                "Att skolan anordnar läxhjälp med stöd av lärare",
                "Att låta eleverna rätta sina egna prov"
              ],
              correct: 2,
              explain: "Texten säger: „Många experter föreslår istället en läxhjälp i skolans regi, där alla elever får samma chans...“"
            }
          ]
        },
        {
          id: "rd1-t2",
          title: "Allemansrätten — en unik svensk frihet",
          type: "informerande",
          text:
            "Allemansrätten är en unik del av den svenska kulturen som ger alla människor rätt att röra sig fritt i naturen. " +
            "Vi får gå i skogen, tälta något dygn och plocka bär och svamp, även på privat mark. Denna rättighet bygger dock " +
            "på ett stort ansvar. Huvudregeln är enkel: 'inte störa, inte förstöra'.\n\n" +
            "Det betyder att vi måste visa hänsyn till markägare, djurliv och naturmiljön. Man får till exempel inte gå över " +
            "tomter nära bostadshus, plocka fridlysta blommor eller bryta grenar från levande träd. Om man vill göra upp eld " +
            "måste man vara extremt försiktig så att det inte uppstår skogsbrand, och man får aldrig elda direkt på klipphällar " +
            "eftersom de spricker av värmen.\n\n" +
            "Under de senaste åren har det blivit allt mer populärt att turista i den svenska naturen, vilket tyvärr har lett till " +
            "en del problem med nedskräpning och slitage. Naturvårdsverket arbetar därför aktivt med att informera både svenskar " +
            "och utländska besökare om reglerna.",
          questions: [
            {
              q: "Vad innebär den gyllene regeln för allemansrätten?",
              qEn: "What does the golden rule of the right of public access mean?",
              options: [
                "Att naturen tillhör regeringen",
                "Att man måste be om lov före varje skogspromenad",
                "'Inte störa, inte förstöra'",
                "Att man får plocka allt man ser"
              ],
              correct: 2,
              explain: "Texten anger tydligt: „Huvudregeln är enkel: 'inte störa, inte förstöra'.“"
            },
            {
              q: "Varför får man inte göra upp eld direkt på klipphällar?",
              qEn: "Why are you not allowed to build a fire directly on flat rock surfaces?",
              options: [
                "Det förstör klippans färg",
                "Elden slocknar snabbt",
                "Stenen spricker av värmen",
                "Röken skadar fåglarna"
              ],
              correct: 2,
              explain: "Texten varnar: „...man får aldrig elda direkt på klipphällar eftersom de spricker av värmen.“"
            }
          ]
        }
      ]
    },
    {
      id: "exam-rd-2",
      title: "Läsförståelse D — Prov 2",
      level: "D",
      timeMinutes: 45,
      texts: [
        {
          id: "rd2-t1",
          title: "Det kontantlösa samhället",
          type: "argumenterande",
          text:
            "Utvecklingen mot ett helt kontantlöst samhälle har gått extremt snabbt i Sverige under det senaste decenniet. " +
            "Idag föredrar en stor majoritet av befolkningen digitala betalningar via betalkort eller Swish. Många butiker och " +
            "restauranger har helt slutat ta emot sedlar och mynt, vilket har bidragit till ökad säkerhet för personalen eftersom " +
            "risken för rån minskar. Dessutom minskar hanteringen av kontanter bankernas administrationskostnader.\n\n" +
            "Men den snabba digitaliseringen har också väckt skarp kritik. Flera organisationer varnar för att äldre personer " +
            "och personer med funktionsvariationer riskerar att hamna i ett digitalt utanförskap. De har inte alltid tillgång till " +
            "smarta telefoner eller upplever att de digitala tjänsterna är för komplicerade. Dessutom pekar säkerhetsexperter " +
            "på en stor sårbarhet: om betalsystemen drabbas av tekniska fel eller cyberattacker kan hela samhällets ekonomi stanna av.\n\n" +
            "För att möta kritiken har riksdagen beslutat om en ny lag som kräver att större banker måste erbjuda en viss service " +
            "kring kontanter. Det handlar om att garantera att det går att ta ut och sätta in kontanter i hela landet, särskilt på landsbygden.",
          questions: [
            {
              q: "Vilken fördel nämns för butikspersonal med det kontantlösa samhället?",
              qEn: "What advantage is mentioned for retail staff with the cashless society?",
              options: [
                "De får högre dricks",
                "Ökad säkerhet tack vare minskad rånrisk",
                "De slipper räkna pengar efter stängning",
                "Kunderna blir trevligare"
              ],
              correct: 1,
              explain: "Texten anger: „...vilket har bidragit till ökad säkerhet för personalen eftersom risken för rån minskar.“"
            },
            {
              q: "Vilket problem lyfter kritiker fram angående digitaliseringen?",
              qEn: "What problem do critics highlight regarding digitisation?",
              options: [
                "Att det blir dyrare att handla mat",
                "Att vissa grupper riskerar ett digitalt utanförskap",
                "Att telefonerna drar för mycket ström",
                "Att folk slutar använda banker helt"
              ],
              correct: 1,
              explain: "Texten varnar: „...äldre personer och personer med funktionsvariationer riskerar att hamna i ett digitalt utanförskap.“"
            },
            {
              q: "Varför beslutade riksdagen om en ny kontantlag?",
              qEn: "Why did parliament decide on a new cash law?",
              options: [
                "För att tvinga alla att betala med kontanter",
                "För att garantera tillgång till kontantservice i hela landet via storbankerna",
                "För att stänga alla uttagsautomater",
                "För att avskaffa Swish-appen"
              ],
              correct: 1,
              explain: "Lagen kräver att: „...större banker måste erbjuda en viss service kring kontanter. Det handlar om att garantera att det går att ta ut och sätta in kontanter...“"
            }
          ]
        },
        {
          id: "rd2-t2",
          title: "Att byta karriär mitt i livet",
          type: "informerande",
          text:
            "Att byta yrkesbana i vuxen ålder har blivit allt vanligare i Sverige. Tidigare var det normen att stanna kvar på " +
            "samma arbetsplats under hela sitt yrkesliv, men idag värdesätts flexibilitet och livslångt lärande högt. Många väljer " +
            "att skola om sig eftersom de vill hitta en djupare mening i arbetet eller upplever stress i sitt nuvarande yrke.\n\n" +
            "Det nya omställningsstudiestödet, som infördes nyligen, har gjort det ekonomiskt möjligt för fler vuxna att studera. " +
            "Stödet ger personer som har arbetat under en längre tid rätt till ett generöst studiebidrag för att vidareutbilda " +
            "sig eller byta yrke. Trots detta är steget inte helt riskfritt. Att lämna en trygg fast anställning innebär alltid " +
            "en ekonomisk osäkerhet under studietiden. Dessutom kan det vara en utmaning att sätta sig i skolbänken igen efter " +
            "många år på arbetsmarknaden.\n\n" +
            "Rådgivare rekommenderar att man gör en noggrann kartläggning av sina intressen och arbetsmarknadens behov innan " +
            "man tar beslutet. Att prata med en studievägledare är ett bra första steg.",
          questions: [
            {
              q: "Vilken reform har gjort det ekonomiskt lättare att skola om sig?",
              qEn: "Which reform has made it economically easier to retrain?",
              options: [
                "Höjda löner inom vården",
                "Ett nytt omställningsstudiestöd",
                "Fler gratis kvällskurser",
                "Sänkt skatt för studenter"
              ],
              correct: 1,
              explain: "Texten konstaterar: „Det nya omställningsstudiestödet ... har gjort det ekonomiskt möjligt för fler vuxna att studera.“"
            },
            {
              q: "Vilken svårighet nämns i samband med att studera som vuxen?",
              qEn: "What difficulty is mentioned in connection with studying as an adult?",
              options: [
                "Universiteten tar inte emot vuxna",
                "Det är svårt att hitta studiematerial",
                "Det kan vara en utmaning att sitta i skolbänken igen efter många år i arbete",
                "Det finns inga lediga jobb efteråt"
              ],
              correct: 2,
              explain: "Texten belyser: „Dessutom kan det vara en utmaning att sätta sig i skolbänken igen efter många år på arbetsmarknaden.“"
            }
          ]
        }
      ]
    }
  ];

  window.SvCI_EXAM_READING_D = exams;
})();
