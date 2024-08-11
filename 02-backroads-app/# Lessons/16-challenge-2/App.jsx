/*
  Challenge (cont)
  - setup:
    + component/PageLink.js 
    + component/SocialLink.js
  - in our own project, do overkill by split the components into small components too much 
    -> lead to performance issues


******************************

  Continuous Deployment
  - pic
  - fix warnings (About Section)
  - netlify account
  - github account


******************************

  - basic git commands :
    1. remove existing git repo
      - Mac : rm -rf .git
      - Windows : rmdir -Force -Recurse .git
      - Windows : rd /s /q .git
        Windows commands were shared by students and I have not personally tested them.
    2. setup new repo
      - git init
        create an empty git repository
      - git add
        adds new or changed files in your working directory
        to the Git staging area
      - git add .
        adds entire project
        apart from files/directories specified in .gitignore
      - git commit -m "first commit"
        A shortcut command that immediately creates a commit
        with a passed commit message.
      - push to github
        git remote add origin git@github.com:your-profile/repo-name.git
        git branch -M main
        git push -u origin main

////////////////////////////////

  Benefits
  - don't need to keep project locally
  - automatic builds

////////////////////////////////

  Warnings "Gotcha"
  - Netlify treats warnings as errors

*/

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  )
}

export default App
