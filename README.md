# Sonali Kharat – Portfolio Website

A fast, responsive, static portfolio built with plain HTML, CSS and a little JavaScript. No frameworks, no build step, no paid services.

## Folder structure

Save all the files together (the photo must be in the same folder as `index.html`) in one folder (for example `portfolio`):

```
portfolio/
├── index.html    ← all the content and page structure
├── styles.css    ← colours, layout and design
├── script.js     ← mobile menu, scroll effects, footer year
├── sonali-kharat.jpg  ← your photo (About section)
└── README.md     ← these instructions (optional on the live site)
```

## 1. Preview it on your computer

Double-click `index.html` and it opens in your browser. No installation needed.

## 2. What is already set up

- **Email:** kharatsonali520@gmail.com (opens the visitor's email app)
- **LinkedIn** and **GitHub** (github.com/sonali-kharat24) links, shown in both the Contact section and the footer
- **Brew & Bloom** has a GitHub button pointing to `https://github.com/sonali-kharat24/brew-and-bloom-cafe`
- "Open to entry-level Data Analyst and Business Analyst opportunities in Bengaluru." appears in the hero and the Contact section

## 3. Things that are intentionally *not* there yet

I did not invent anything you haven't supplied. These show honest labels instead:

| Item | What the site shows | How to add it |
| --- | --- | --- |
| Resume button | Not shown | Put your resume PDF in the folder, then uncomment the `Download Resume` line in the hero section of `index.html` and match the file name |
| Professor Nova GitHub | "Demo not publicly available" | Uncomment the GitHub button in that card and paste the correct repository URL |
| Brew & Bloom live demo | GitHub button only | Uncomment the Live Demo button once you have confirmed a working URL |
| NOVA Creative Studio and NOIR ANALYTICS links | "Links not yet available" | Replace that label with the commented buttons below it, using real URLs |
| Credential verification link | Not shown | Uncomment the "Verify credential" button in the Education section if Ira Skills gives you a link |
| CSS and JavaScript skills | Not listed | Uncomment them in the Skills section only if you have really used them |

## 4. Data Analytics Practice Projects

**E-commerce Sales Analysis Dashboard (Power BI)** is shown as a completed project, with its description, key features and skills. To finish it, open `index.html`, search for `COMPLETED PROJECT`, and:

- **Add a screenshot:** save the image in the folder (for example `dashboard-screenshot.png`), then uncomment the `<figure class="project-shot">` block at the top of that card.
- **Add a link:** uncomment the `project-actions` block at the bottom of that card and keep only the buttons you have real URLs for (a published dashboard link or a GitHub repository).

Do not add numbers or findings unless they come from your own dashboard.

The remaining dashed cards (Excel, SQL, Python) are placeholders. When one of those projects is ready:

1. Edit the title, description, dataset and findings in `index.html`. Use only results you actually calculated yourself.
2. Change the badge from "Details coming soon" to "Practice Project".
3. Remove the word `placeholder` from that card's `class`, so the dashed border goes away.
4. Add buttons for real links only (a commented example is at the top of the section).

You can duplicate a card to add more projects, or delete a placeholder card you don't need.

## 5. Check the details before sharing

- **Professor Nova:** the features are shown as "described functionality". If some were fully built, split them into "Implemented" and "Proposed".
- **Brew & Bloom:** add "responsive design" only after you have checked the site on your phone.
- Search `index.html` for `YOUR_` to make sure no placeholder link is still active. They are all inside comments, so none appear on the site.

## 6. Upload to GitHub

1. Sign in to github.com and click **New repository**.
2. Name it, for example, `portfolio`. Choose **Public**. Click **Create repository**.
3. On the new repository page click **uploading an existing file**.
4. Drag in `index.html`, `styles.css`, `script.js` and `README.md`. (Drag the files, not the folder.)
5. Scroll down and click **Commit changes**.

## 7. Deploy on Vercel (free)

1. Go to vercel.com and choose **Sign Up → Continue with GitHub**.
2. Click **Add New… → Project** and pick your `portfolio` repository.
3. Leave every setting as it is (there is nothing to build) and click **Deploy**.
4. After a minute you get a link like `https://your-project.vercel.app`. Put that link on your LinkedIn, resume and GitHub profile.

Every time you edit a file on GitHub and commit, Vercel updates the live site automatically.

After deploying, you can add this inside `<head>` in `index.html` for better link previews:
`<meta property="og:url" content="https://YOUR-SITE.vercel.app" />`

## About the contact options

The site uses **email links** instead of a contact form, so everything works without a backend. If you want a real form later, free services such as **Formspree** or **Web3Forms** can add one without writing server code.

## Customising

- **Colours** are at the top of `styles.css` under `:root`.
- **Text** is in `index.html`, section by section.
- The hero chart is a decorative illustration, labelled as such, and does not represent real data.
