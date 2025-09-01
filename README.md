# GitHub Profile Finder – Logic Documentation

![alt text](<Github profle Finder.gif>)

This document explains the **logic** used in the `Git_profile` React component.

---

## 1. State Management

The component uses three pieces of state:

- **`loading`**: (`true` by default)  
  Keeps track of whether the API request is in progress.

- **`username`**: (`"google"` by default)  
  Stores the current input value for the GitHub username. Initially set to `"google"` so that the app fetches Google’s GitHub profile on first render.

- **`userdata`**: (`null` by default)  
  Stores the GitHub user data returned from the API.

---

## 2. Fetching GitHub User Data

The function `fetchGithubUserData` is responsible for:

1. Setting `loading` to `true`.
2. Calling the GitHub API with the current `username`:  
   ```js
   fetch(`https://api.github.com/users/${username}`)
