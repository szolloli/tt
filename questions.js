// Edit this file to change the quiz.
// Each answer is matched ignoring case, diacritics (š = s) and punctuation.
// Use "___" in a question to render a blank.
//
// Question fields:
//   text    - question text
//   image   - optional screenshot path, shown between text and answer
//   blur    - optional { x, y, w, h } in % of the image; blurred until answered
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

// Whole days between Oliver (13.4.1999) and Tamarka (31.10.2002) being born.
const birthGapDays = Math.round((new Date(2002, 9, 31) - new Date(1999, 3, 13)) / 86400000);

window.QUIZ = {
  // Countdown target (local time): 31.10.2026 00:00
  targetDate: new Date(2026, 9, 31, 0, 0, 0),
  finalMessage: "Hotovo",
  // Page shown after the countdown, before the first question
  intro: {
    title: "O Tamarke, pre Tamarku",
    text: "Niekoľko otázok o tebe. Na konci ťa čaká malá odmena.",
    button: "Začať",
  },
  questions: [
    {
      text: "Tamarka píše Oliverovi, Dianka píše ___",
      answers: ["Rigi", "Rigimu", "Jakub Rigoci"],
    },
    {
      text: "Po koľkých mesiacoch napísala Tamarka Oliverovi, že keby začali spolu spávať skôr, už by mohli mať dieťa?",
      answers: ["šesťnásť", "šestnastich", "16"],
    },

    {
      text: "Koľko dní je Tamarka na svete?",
      answers: () => [String(daysSinceBirth())],
    },
    {
      text: "O koľko dní neskôr sa narodila Tamarka ako Oliver?",
      answers: [String(birthGapDays)],
    },

    {
      text: "Komu už Tamarka neposlala ďalšie nudes?",
      image: "img/q04.png",
      blur: { x: 52, y: 60, w: 16, h: 27 },
      answers: ["Borisovi", "Boris", "Borisa"],
    },
    {
      text: "Čo si Tamarka priala na svoje 17. narodeniny?",
      image: "img/q06.png",
      blur: { x: 83, y: 25, w: 12, h: 40 },
      answers: ["teba", "Olivera", "Oliver", "ťa"],
    },
    {
      type: "choice",
      text: "Čo mal Oliver naučiť Tamarku?",
      image: "img/q08.png",
      blur: { x: 56.5, y: 20, w: 34, h: 60 },
      options: [
        { text: "Základy v pythone", correct: true },
        { text: "Hrať na gitaru" },
        { text: "Nadávať po maďarsky" },
      ],
    },
    {
      type: "choice",
      text: "Na čo sa spýtal Peter Šimek?",
      image: "img/q09.png",
      blur: { x: 16.3, y: 26, w: 11.7, h: 14 },
      options: [
        { text: "Či je to Rigi", correct: true },
        { text: "Či je to Peter Tomanka" },
        { text: "Či je to Boris" },
      ],
    },
    {
      text: "Bez čoho šla Tamarka za namom? ___",
      image: "img/q12.png",
      blur: { x: 48, y: 20, w: 15.5, h: 60 },
      answers: ["podprsenky", "podprsenka", "podprsenku"],
    },
    {
      type: "choice",
      text: "Čo mal Oliver doniesť Tamarke od Andreja?",
      image: "img/q14.png",
      blur: { x: 77, y: 20, w: 16, h: 60 },
      options: [
        { text: "Cigarety", correct: true },
        { text: "Novavičky" },
        { text: "Tabletky" },
      ],
    },
  ],
};
