const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '..');
const dataDir = path.join(baseDir, 'data');

const files = [
  'stories-a2.js',
  'stories-a2-high.js',
  'stories-b1.js',
  'news-b1.js',
  'news-b1plus.js',
  'listening-a2.js',
  'listening-b1.js',
  'exam-listening-c.js',
  'exam-listening-d.js'
];

// Context mocking
const sandbox = {
  window: {},
  console: console
};
sandbox.window.SvCI_STORIES = [];
sandbox.window.SvCI_NEWS = [];
sandbox.window.SvCI_LISTENING = [];
sandbox.window.SvCI_EXAM_LISTENING_C = [];
sandbox.window.SvCI_EXAM_LISTENING_D = [];

vm.createContext(sandbox);

files.forEach(f => {
  const code = fs.readFileSync(path.join(dataDir, f), 'utf8');
  vm.runInContext(code, sandbox);
});

// Now extract strings
const speakable = new Set();

// Sentence splitter from shared.js
function splitSentences(text) {
  if (!text) return [];
  const re = /[^.!?]*[.!?]+["'’”)]*\s*|[^.!?]+$/g;
  const out = text.match(re) || [text];
  return out.map(s => s.trim()).filter(s => s.length > 0);
}

function plainTranscript(transcript) {
  return String(transcript || "").replace(/\s*\n\s*\n\s*/g, " ").trim();
}

// 1. Stories
sandbox.window.SvCI_STORIES.forEach(s => {
  // Full text sentences
  splitSentences(s.text).forEach(sent => speakable.add(sent));
  // Glossary words/phrases
  if (s.glossary) {
    Object.keys(s.glossary).forEach(w => speakable.add(w.trim()));
  }
});

// 2. News
sandbox.window.SvCI_NEWS.forEach(a => {
  // Lead sentences
  splitSentences(a.lead).forEach(sent => speakable.add(sent));
  // Text sentences
  splitSentences(a.text).forEach(sent => speakable.add(sent));
  // Glossary words/phrases
  if (a.glossary) {
    Object.keys(a.glossary).forEach(w => speakable.add(w.trim()));
  }
});

// 3. Listening Passages
sandbox.window.SvCI_LISTENING.forEach(p => {
  // Full passage transcript
  const plain = plainTranscript(p.transcript);
  speakable.add(plain);
  // Sentence-wrapped transcript sentences
  splitSentences(plain).forEach(sent => speakable.add(sent));
  // Glossary words
  if (p.glossary) {
    Object.keys(p.glossary).forEach(w => speakable.add(w.trim()));
  }
});

// 4. Exams C and D
const exams = [
  ...sandbox.window.SvCI_EXAM_LISTENING_C,
  ...sandbox.window.SvCI_EXAM_LISTENING_D
];

exams.forEach(ex => {
  if (ex.passages) {
    ex.passages.forEach(p => {
      // Full passage transcript
      const plain = plainTranscript(p.transcript);
      speakable.add(plain);
      // Sentence-wrapped transcript sentences
      splitSentences(plain).forEach(sent => speakable.add(sent));
      // Glossary words
      if (p.glossary) {
        Object.keys(p.glossary).forEach(w => speakable.add(w.trim()));
      }
    });
  }
});

// Let's add the audio settings panel test lines just to be consistent
speakable.add("Hej! Jag är din svenska röst.");
speakable.add("Jag lär mig svenska varje dag.");

// Convert to sorted array and write to file
const result = Array.from(speakable).sort();
fs.writeFileSync(
  path.join(baseDir, 'tools', 'speakable_strings.json'),
  JSON.stringify(result, null, 2),
  'utf8'
);

console.log(`Extracted ${result.length} unique speakable strings!`);
