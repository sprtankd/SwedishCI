/* ============================================================================
   Swedish CI — data/exam-listening-d.js
   Timed SFI D-style listening comprehension tests.
   Level: SFI Kurs D (B1 / B1+ range).
   Time limit: 25 minutes.
   Contains 2 exams. Replays allowed: 1.
   Registers into window.SvCI_EXAM_LISTENING_D.
   ========================================================================== */
(function () {
  "use strict";

  var exams = [
    {
      id: "exam-ld-1",
      title: "Hörförståelse D — Prov 1",
      level: "D",
      timeMinutes: 25,
      passages: [
        {
          id: "ld1-p1",
          title: "Intervju om integration på arbetsmarknaden",
          transcript:
            "Välkomna till Dagens Samhälle. Idag pratar vi med Hamid Al-Saied, som leder ett framgångsrikt projekt " +
            "för att hjälpa nyanlända akademiker att snabbare etablera sig och få jobb i Sverige. Hamid förklarar " +
            "att den allra största utmaningen ofta inte är språket, utan bristen på yrkeskontakter. Genom projektet " +
            "matchar de deltagare med etablerade mentorer inom samma yrkesområde. Det har visat sig vara extremt " +
            "framgångsrikt. Hela sjuttio procent av deltagarna har fått en anställning inom sex månader efter " +
            "avslutat program. Vi hoppas att regeringen fortsätter stödja detta arbete även under nästa budgetår.",
          replays: 1,
          questions: [
            {
              type: "detail",
              q: "Vilken grupp riktar sig Hamids integrationsprojekt till?",
              qEn: "Which group does Hamid's integration project target?",
              options: ["Alla nyanlända utan utbildning", "Nyanlända akademiker", "Ungdomar födda i Sverige", "Utländska turister"],
              correct: 1,
              explain: "Hamid leder ett projekt för att „hjälpa nyanlända akademiker att snabbare etablera sig...“"
            },
            {
              type: "gist",
              q: "Vad är den största utmaningen för målgruppen enligt Hamid?",
              qEn: "What is the biggest challenge for the target group according to Hamid?",
              options: ["Att lära sig tala flytande svenska", "Att hitta bostad", "Bristen på yrkeskontakter", "Att förstå svensk lagstiftning"],
              correct: 2,
              explain: "Hamid betonar: „...den allra största utmaningen ofta inte är språket, utan bristen på yrkeskontakter.“"
            },
            {
              type: "detail",
              q: "Hur stor andel av deltagarna får jobb inom sex månader efter programmet?",
              qEn: "What percentage of participants get a job within six months after the program?",
              options: ["Sjuttio procent (70%)", "Hälften (50%)", "Tio procent (10%)", "Alla deltagare (100%)"],
              correct: 0,
              explain: "Enligt Hamid: „Hela sjuttio procent av deltagarna har fått en anställning inom sex månader...“"
            }
          ]
        },
        {
          id: "ld1-p2",
          title: "Personalmöte om källsortering",
          transcript:
            "Hej alla kollegor. Jag vill påminna er om de nya skärpta reglerna för sopsortering i vårt fikarum från " +
            "och med måndag. Vi har fått tre nya märkta behållare: en för plastförpackningar, en för pappersförpackningar " +
            "och en för bioavfall. Det är oerhört viktigt att alla matrester och kaffesump slängs i den bruna påsen " +
            "för bioavfall, eftersom kommunen använder det för att producera biogas till stadens bussar. Om ni är osäkra " +
            "på hur något ska sorteras kan ni läsa den utförliga affischen som sitter på väggen direkt ovanför kärlen. " +
            "Tack för ert samarbete!",
          replays: 1,
          questions: [
            {
              type: "gist",
              q: "Varför är det viktigt att matavfallet sorteras rätt?",
              qEn: "Why is it important that food waste is sorted correctly?",
              options: [
                "För att minska lukten i köket",
                "För att kommunen tillverkar biogas till stadsbussar av avfallet",
                "Det sparar pengar för företaget",
                "Plastsoporna blir lättare att hantera"
              ],
              correct: 1,
              explain: "Matavfallet ska slängas i bioavfallspåsen „eftersom kommunen använder det för att producera biogas till stadens bussar.“"
            },
            {
              type: "detail",
              q: "Var finns information om hur man sorterar de olika soporna?",
              qEn: "Where is information about how to sort the different wastes located?",
              options: [
                "I personalhandboken",
                "På en affisch på väggen ovanför sopkärlen",
                "Man måste fråga vaktmästaren",
                "Informationen skickas ut via mejl"
              ],
              correct: 1,
              explain: "Texten säger: „...läsa den utförliga affischen som sitter på väggen direkt ovanför kärlen.“"
            }
          ]
        }
      ]
    },
    {
      id: "exam-ld-2",
      title: "Hörförståelse D — Prov 2",
      level: "D",
      timeMinutes: 25,
      passages: [
        {
          id: "ld2-p1",
          title: "Nyhetsrapport om stormen Freja",
          transcript:
            "Det har varit ett mycket dramatiskt dygn med extremväder i stora delar av södra Götaland. Stormen, " +
            "som har fått namnet Freja, har dragit in över kusten med vindstyrkor på upp till 28 meter per sekund " +
            "i byarna. Närmare tiotusen hushåll saknar för närvarande elförsörjning, och flera stora trafikleder " +
            "är blockerade av omkullblåsta träd. Trafikverket utfärdar en stark varning och uppmanar alla bilister " +
            "att stanna hemma under morgonen. Tågtrafiken mellan Malmö och Göteborg är helt inställd fram till klockan " +
            "18:00 ikväll medan röjningsarbete pågår på spåren.",
          replays: 1,
          questions: [
            {
              type: "detail",
              q: "Vilket namn har getts till stormen?",
              qEn: "What name has been given to the storm?",
              options: ["Freja", "Götaland", "Trafikverket", "Stormen G"],
              correct: 0,
              explain: "Nyheterna meddelar: „Stormen, som har fått namnet Freja...“"
            },
            {
              type: "gist",
              q: "Vilken uppmaning ger Trafikverket till allmänheten?",
              qEn: "What urge does the Transport Administration give to the public?",
              options: [
                "Att ta tåget istället för bilen",
                "Att hjälpa till att röja träd på vägarna",
                "Att stanna hemma under morgonen",
                "Att köpa extra ljus och mat"
              ],
              correct: 2,
              explain: "Trafikverket „utfärdar en stark varning och uppmanar alla bilister att stanna hemma under morgonen.“"
            },
            {
              type: "detail",
              q: "Hur påverkas tågtrafiken enligt rapporten?",
              qEn: "How is the train traffic affected according to the report?",
              options: [
                "Tågen går med reducerad hastighet",
                "Tågtrafiken är helt inställd fram till 18:00 ikväll",
                "Endast godståg är tillåtna",
                "Tågen går som vanligt men är försenade"
              ],
              correct: 1,
              explain: "Rapporten säger: „Tågtrafiken mellan Malmö och Göteborg är helt inställd fram till klockan 18:00 ikväll...“"
            }
          ]
        },
        {
          id: "ld2-p2",
          title: "Kulturföreläsning om begreppet 'lagom'",
          transcript:
            "Välkomna till dagens seminarium om svensk kultur. Idag granskar vi ordet 'lagom', ett av de mest kända " +
            "och socialt betydelsefulla begreppen i Sverige. Ordet översätts oftast till 'inte för mycket, inte för " +
            "lite, utan precis tillräckligt'. En populär myt är att ordet härstammar från vikingatidens gemensamma " +
            "dryckeshorn och uttrycket 'laget om'. Språkforskare har dock bevisat att ordet historiskt kommer från " +
            "en gammal böjningsform av ordet 'lag', i betydelsen 'enligt lag' eller 'passande'. Begreppet sammanfattar " +
            "en viktig svensk värdering: att söka kompromisser och värna om gruppens balans.",
          replays: 1,
          questions: [
            {
              type: "gist",
              q: "Hur förklaras innebörden av ordet 'lagom' i föreläsningen?",
              qEn: "How is the meaning of the word 'lagom' explained in the lecture?",
              options: [
                "Att dela allt lika i grupp",
                "Inte för mycket, inte för lite, utan precis tillräckligt",
                "Att följa statens lagar slaviskt",
                "En känsla av lycka och tillfredsställelse"
              ],
              correct: 1,
              explain: "Lagom förklaras som: „'inte för mycket, inte för lite, utan precis tillräckligt'.“"
            },
            {
              type: "detail",
              q: "Vilket ursprung har ordet 'lagom' enligt språkforskare?",
              qEn: "What origin does the word 'lagom' have according to linguists?",
              options: [
                "Det kommer från vikingatidens dryckesceremonier",
                "Det är en gammal böjningsform av ordet 'lag'",
                "Det är ett modernt ord skapat av media",
                "Det lånades in från tyskan under Hansatiden"
              ],
              correct: 1,
              explain: "Språkforskare har bevisat att: „...ordet historiskt kommer från en gammal böjningsform av ordet 'lag'...“"
            }
          ]
        }
      ]
    }
  ];

  window.SvCI_EXAM_LISTENING_D = exams;
})();
