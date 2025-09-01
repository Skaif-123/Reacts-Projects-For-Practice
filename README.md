# 🔍 GitHub Profile Finder

A React project that allows users to search for **GitHub profiles** by username and view their public information.  
It uses the **GitHub REST API** to fetch live data and display user details.

---
![alt text](<gif_images/Github profle Finder.gif>)

## 📌 Features

- Search for any GitHub user by username  
- Fetch live data using GitHub’s public API  
- Display user information (avatar, bio, followers, etc.)  
- Controlled search input with instant state updates  
- Initial load shows data for default user (`google`)  
- Smooth fade-in animation for results  

---

## 🛠️ Technologies Used

- **React.js** – UI library  
- **React Hooks** (`useState`, `useEffect`) – state and lifecycle management  
- **GitHub REST API** – data source  
- **Tailwind CSS** – UI styling  

---

## 🔑 Logic Overview

### 1. State Management
- `loading`: Tracks API fetch status (default `true`).  
- `username`: Stores the GitHub username entered by the user (default `"google"`).  
- `userdata`: Stores the API response data for the searched user.  

### 2. Fetching GitHub Data
```js
async function fetchGithubUserData() {
  setLoading(true);
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  if (data) {
    setUserData(data);
    setLoading(false);
    setUsername(""); // clear search input after fetch
  }
}

# 👤 GithubUser Component

This component is responsible for **displaying GitHub user details** fetched from the GitHub API.  
It receives the user data as a **prop** (`user`) from the parent component (`Git_profile.jsx`).

---

## 📌 Features
- Renders the user’s **profile picture (avatar)**  
- Displays **username, bio, and profile stats**  
- Provides a clickable **link to the user’s GitHub profile**  
- Clean, reusable **presentational component**  

---

## 🔑 Props

### `user` (object)
The `user` prop should be the JSON response from the GitHub API for a specific username.  
Example structure:

```json
{
  "login": "google",
  "avatar_url": "https://avatars.githubusercontent.com/u/1342004?v=4",
  "html_url": "https://github.com/google",
  "bio": "Google ❤️ Open Source",
  "followers": 30000,
  "following": 100,
  "public_repos": 500
}

