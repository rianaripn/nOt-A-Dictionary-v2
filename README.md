# nOt-A dicTionary v2

> Because reality wasn't disappointing enough already. Now with React.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel)

**Live Demo:** [n-ot-a-dictionary-v2.vercel.app](https://n-ot-a-dictionary-v2.vercel.app)

---

## What is this?

A sarcastic dictionary that gives you the _real_ definition of words — powered by AI. Type a word, get a witty, brutally honest redefinition courtesy of Llama 3.

This is **v2** of [nOt-A-Dictionary](https://github.com/rianaripn/nOt-A-Dictionary) — a complete rebuild using React and Tailwind CSS, moving away from Vanilla JS.

---

## What changed from v1?

|                  | v1 (Vanilla JS) | v2 (React)      |
| ---------------- | --------------- | --------------- |
| UI Framework     | Vanilla JS      | React 19        |
| Styling          | Plain CSS       | Tailwind CSS 4  |
| Build Tool       | None            | Vite            |
| State Management | Manual DOM      | useState hooks  |
| Architecture     | Single file     | Component-based |

---

## Tech Stack

- **React 19** — component-based UI
- **Vite** — lightning fast build tool
- **Tailwind CSS 4** — utility-first styling
- **Vercel Serverless Functions** — secure API handling
- **Dictionary API** (api-ninjas.com) — real word definitions
- **Groq API** (llama-3.1-8b-instant) — sarcastic AI redefinitions

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       — title and tagline
│   ├── SearchForm.jsx   — input and submit button
│   └── ResultCard.jsx   — result, error, loading, empty states
├── App.jsx              — main component, state management
├── main.jsx             — entry point
└── index.css            — global styles + Tailwind

api/
├── dictionary.js        — serverless: fetch Dictionary API
└── groq.js              — serverless: fetch Groq AI API
```

---

## Getting Started

```bash
# clone the repo
git clone https://github.com/rianaripn/nOt-A-Dictionary-v2.git
cd nOt-A-Dictionary-v2

# install dependencies
npm install

# create .env file
DICTIONARY_API_KEY=your_api_ninjas_key
GROQ_API_KEY=your_groq_key

# run dev server
npm run dev
```

---

## API Keys

| API            | Get yours here                               |
| -------------- | -------------------------------------------- |
| Dictionary API | [api-ninjas.com](https://api-ninjas.com)     |
| Groq API       | [console.groq.com](https://console.groq.com) |

---

## Why rebuild in React?

v1 was built with Vanilla JS — which meant manual DOM manipulation for every state change. Every update required `document.getElementById` and `innerHTML` rewrites.

v2 uses React's state management — UI updates automatically when data changes. No more manual DOM touching.

---

## Related

- [nOt-A-Dictionary v1](https://github.com/rianaripn/nOt-A-Dictionary) — the Vanilla JS original
- Built as part of a full stack learning journey from zero to job-ready

---

_YOU'RE WELCOME, I GUESS. 🥱_
