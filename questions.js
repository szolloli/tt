// Edit this file to change the quiz.
// Each answer is matched ignoring case, diacritics (š = s) and punctuation.
// Use "___" in a question to render a blank.
//
// Question fields:
//   text    - question text
//   image   - optional screenshot path, shown between text and answer
//   blur    - optional { x, y, w, h } in % of the image; blurred until answered
//   draft   - true = unfinished; "DRAFT" badge shows when debug is on
//   draftNote - optional hint what needs work (shown in the badge)
//
// Two types:
//   text (default): answers: ["...", ...]  any one of them is accepted
//                   answers may also be a function returning the array (dynamic)
//   choice:         type: "choice", options: [{ text, correct? }, ...]
//                   any number of options, any number of correct ones;
//                   the visitor must tick exactly the correct set
// Whole days from 31.10.2002 to today (local midnights; round absorbs DST).
const daysSinceBirth = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((today - new Date(2002, 9, 31)) / 86400000);
};

window.QUIZ = {
  // Countdown target (local time): 31.10.2026 00:00
  targetDate: new Date(2026, 9, 31, 0, 0, 0),
  finalMessage: "Hotovo ♥",
  questions: [
    {
      text: "Tamarka píše Oliverovi, Dianka píše ___",
      answers: ["Rigi", "Rigimu", "Jakub Rigoci"],
    },
    {
      text: "Po kolkatich mesiacoch napisala Tamarka Oliverovi, že keby začali spolu skoršie spávať už by mohli mať dieťa.",
      answers: ["šesťnásť", "šestnastich", "16"],
    },

    {
      text: "Koľko dní je Tamarka na svete?",
      answers: () => [String(daysSinceBirth())],
    },

    // ---- DRAFTS from screenshots of 26.10.2026 (img/q01..q15), all need work ----
    {
      draft: true,
      draftNote: "choice, 4 options, 1 correct",
      type: "choice",
      text: "Čo by Tamarka radšej?",
      image: "img/q02.png",
      options: [
        { text: "Počuť ma a nevidieť" , correct: true },
        { text: "Vidieť ma a nepočuť" },
        { text: "Ani vidieť, ani počuť" },
        { text: "Počuť aj vidieť zároveň" },
      ],
    },
    {
      draft: true,
      draftNote: "choice, 5 options, 3 correct. Unclear what 'fono' means - reword",
      type: "choice",
      text: "Čo platí o Oliverovom fone?",
      image: "img/q03.png",
      options: [
        { text: "Robil ho asi raz v živote", correct: true },
        { text: "Šetril pri ňom na gandži", correct: true },
        { text: "Robí dosť zlé fono", correct: true },
        { text: "Robí ho každý deň" },
        { text: "Tamarka ho robila celkom" },
      ],
    },
    {
      draft: true,
      text: "Komu už Tamarka neposlala ďalšie nudes?",
      image: "img/q04.png",
      blur: { x: 52, y: 60, w: 16, h: 27 },
      answers: ["Borisovi", "Boris", "Borisa"],
    },
    {
      draft: true,
      text: "Koho si Tamarka priala na svoje 17. narodeniny?",
      image: "img/q06.png",
      blur: { x: 83, y: 25, w: 12, h: 40 },
      answers: ["teba", "Olivera", "Oliver", "ťa"],
    },
    {
      draft: true,
      text: "Aký programovací jazyk mal Oliver Tamarku naučiť?",
      image: "img/q08.png",
      blur: { x: 75.5, y: 28, w: 17, h: 46 },
      answers: ["python", "pythone", "pythonu"],
    },
    {
      draft: true,
      text: "Na koho sa Petr spýtal, či je to Tamarkin priateľ?",
      image: "img/q09.png",
      answers: ["rigi", "Rigimu"],
    },
    {
      draft: true,
      draftNote: "same screenshot as q09/q10",
      text: "Čo odpísala Tamarka po „Nejdem za tenou“?",
      image: "img/q11.png",
      answers: ["B"],
    },
    {
      draft: true,
      text: "Sťažuješ sa že nechodím bez ___ tak za namom som tak šla",
      image: "img/q12.png",
      answers: ["podprsenky", "podprsenka", "podprsenku"],
    },
    {
      draft: true,
      text: "S kým zakývala Tamarka Oliverovi prvá?",
      image: "img/q13.png",
      answers: ["d.nagyova", "D. Nagyová", "Nagyova"],
    },
    {
      draft: true,
      draftNote: "same message as q15",
      text: "Od koho mal Oliver doniesť Tamarkine cigarety?",
      image: "img/q14.png",
      answers: ["Andreja", "Andrej"],
    },
    {
      draft: true,
      draftNote: "same message as q14, shows date",
      text: "Kedy napísala Tamarka o cigaretách? (dd.mm.rrrr)",
      image: "img/q15.png",
      answers: ["16.04.2019", "16. 4. 2019", "16/04/2019"],
    },
  ],
};
