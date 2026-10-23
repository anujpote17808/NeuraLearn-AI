# ✦ NeuraLearn AI

A responsive, front-end-only **AI Study Assistant** built with **HTML, CSS, and vanilla JavaScript** for Web Technology Continuous Assessment, Assignment 5 (Advanced / 20 marks).

## Features
- SaaS-style landing page with hero, responsive sections, mobile navigation
- Google Gemini API integration using POST, `fetch`, and `async/await`
- AI-generated **summary, 5-question scored quiz, and flip flashcards**
- Exam-focused / simple / detailed learning styles and quiz difficulty
- Copy, text download, browser text-to-speech
- Saved study history with open, search and delete (`localStorage`)
- Dark/light switch (persists in `localStorage`)
- Helpful error messages for empty input, no key, invalid reply, HTTP 401/403/429 and network failure
- Key input in Settings; never hardcoded in a project file

## Get started (Mac / VS Code)
1. Download or clone this repository.
2. Open the project folder with VS Code: `code .` (or File → Open Folder).
3. Run `python3 -m http.server 5500` in the terminal.
4. Open http://localhost:5500 in your browser.
5. Click **Settings** and paste your own Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
6. Choose **Remember key** only on a trusted personal device, then save.
7. Enter a topic (or click **Try sample notes**) and click **Generate study kit**.

## Security notice
This is a **static coursework prototype**. The user's API key is sent directly from their own browser to the Gemini API. Session storage is the default; choosing **Remember** stores the key in `localStorage`. Both storage options are accessible to scripts running in the website. Browser network tools may show the key. Do not use this approach for a production service with a shared secret; use a server-side proxy instead. Do not commit your API key, ever.

## Structure
```
index.html
css/style.css
js/app.js
.gitignore
README.md
```

## Deploy
### Netlify
Push the repository to GitHub. On [Netlify](https://app.netlify.com/), choose **Add new project → Import an existing project → GitHub**, select this repository, leave build command empty, set publish directory to `.` and deploy.

### Vercel
Import the GitHub repository on [Vercel](https://vercel.com/new), choose **Other** (static project), and deploy. No environment variables or build tools are needed.

## Testing checklist
- [ ] Run on Chrome/Safari desktop and phone-width screen
- [ ] Try sample notes; verify all three tabs with a working personal Gemini key
- [ ] Quiz: all 5 questions; end score and restart
- [ ] Flashcard flip, next, previous, mark known
- [ ] Refresh and verify saved history + dark/light setting
- [ ] Test empty notes, missing key, invalid key, no internet
- [ ] Verify live deployment, then provide GitHub and live URL

## Coursework progress / commits
Commit small stages at least once every two days. Suggested milestones: layout, responsive design, Gemini integration, quiz + flashcards, history, QA, and deployment. Do not fabricate commit history.

**Disclaimer:** An internet connection and valid Gemini API key with sufficient quota are needed for live generation. AI output should be verified for accuracy.


## UI refinement milestone (24 October)

- Elevated hero section with animated dashboard preview and platform highlights.
- Added a three-step “How it works” section.
- Refined card states, mobile navigation, sticky header, and scroll progress.
- Added active section links, a keyboard skip link, and reduced-motion support.
- Kept Gemini API, local history, quiz, and flashcards in the existing `js/app.js`; new progressive enhancements live in `js/ui.js`.

Local preview: `python3 -m http.server 5500`, then visit `http://localhost:5500`.
