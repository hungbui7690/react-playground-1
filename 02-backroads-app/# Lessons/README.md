


#### Alternative Approach (optional)

- in components create PageLinks.js
- import pageLinks
- return the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to be to manage
  - my personal preference, if possible just use data

#### Challenge (optional)

- create more components (essentially, split up the code more)
- find all map methods and move elements to separate components
- By the end of the video you should have four additional components
  - Tour.js
  - Service.js
  - SocialLink.js
  - PageLink.js

#### Continuous Deployment

- fix warnings (About Section)

- netlify account
- github account
- basic git commands :

  - remove existing git repo
    - Mac : rm -rf .git
    - Windows : rmdir -Force -Recurse .git
    - Windows : rd /s /q .git
      Windows commands were shared by students and I have not personally tested them.
  - setup new repo
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

#### Benefits

- don't need to keep project locally
- automatic builds

#### Warnings "Gotcha"

- Netlify treats warnings as errors

package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "local-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
