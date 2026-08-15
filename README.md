# Underreacted — Personal Blog Site

A static personal blog built with React to practice creating components, writing JSX, and passing data down as props.

## Overview

This project renders a personal blog homepage with:
- A **Header** displaying the blog's name
- An **About** section with a profile image and bio
- An **Article List** displaying a list of blog posts, each rendered as an individual **Article**

All blog content lives in `src/data/blog.js` and is passed down through `App.jsx` into each component via props.

## Component Tree

```
App
├── Header
├── About
└── ArticleList
    └── Article (one per post)
```
- **Header** — renders the blog's title (`name` prop from `App.jsx`)
- **About** — renders a profile image and bio (`image`, `about` props from `App.jsx`)
- **ArticleList** — renders the full list of posts (`posts` prop from `App.jsx`), maps each post to an `Article`
- **Article** — renders a single post's title, date, and preview (`title`, `date`, `preview` props from `ArticleList.jsx`)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

### Installation

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd react-components-props-vite-lab
npm install
```

### Running the app

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`) in your browser.

### Running tests

This project includes Jest/Vitest tests for each component, verifying that props render correctly.

```bash
npm test
```

## Screenshot

(https://file%2B.vscode-resource.vscode-cdn.net/var/folders/zd/cc_ld5ds57z8tx_cnmjtz31m0000gn/T/TemporaryItems/NSIRD_screencaptureui_xl7DqJ/Screenshot%202026-08-15%20at%2019.59.31.png?version%3D1786813189428)


![Blog site preview](https://file%2B.vscode-resource.vscode-cdn.net/var/folders/zd/cc_ld5ds57z8tx_cnmjtz31m0000gn/T/TemporaryItems/NSIRD_screencaptureui_xl7DqJ/Screenshot%202026-08-15%20at%2019.59.31.png?version%3D1786813189428)
```

## Tech Stack
- React
- Vite
- Vitest / React Testing Library (for component tests)

## Project Structure

```
src/
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── About.jsx
│   ├── ArticleList.jsx
│   └── Article.jsx
├── data/
│   └── blog.js
├── assets/
│   └── (images)
└── __tests__/
    ├── App.test.jsx
    ├── Header.test.jsx
    ├── About.test.jsx
    ├── ArticleList.test.jsx
    └── Article.test.jsx
```
