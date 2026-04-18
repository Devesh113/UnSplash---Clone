# 📸 Unsplash Clone — React Frontend Project

A **frontend clone of the Unsplash website** built using **React**.
This project replicates the core UI and functionality of the Unsplash platform including image browsing, search, authentication UI, and responsive layouts.

The primary objective of this project is to demonstrate **component-based architecture, API integration, and scalable frontend design**.

---

# 🚀 Project Demo

Planned Features:

* Image browsing like Unsplash
* Search photos
* Image detail page
* Login / Signup UI
* Infinite scrolling
* Responsive layout

Deployment platforms:

* Vercel
* Netlify

---

# 🧰 Tech Stack

## Frontend

* React (Vite)
* JavaScript (ES6+)
* CSS / Tailwind CSS

## Libraries

* react-router-dom → routing
* axios → API requests
* react-icons → icons
* react-infinite-scroll-component → infinite scroll
* react-masonry-css → masonry layout

## API

Unsplash Developers API

```
https://api.unsplash.com
```

---

# 📁 Project Structure

```
unsplash-clone
│
├── public
│   └── favicon.svg
│
├── src
│
│   ├── assets
│   │   ├── images
│   │   └── icons
│
│   ├── components
│   │
│   │   ├── Navbar
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── SearchBar
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   │
│   │   ├── HeroSection
│   │   │   ├── HeroSection.jsx
│   │   │   └── HeroSection.css
│   │   │
│   │   ├── CategoryBar
│   │   │   ├── CategoryBar.jsx
│   │   │   └── CategoryBar.css
│   │   │
│   │   ├── ImageGrid
│   │   │   ├── ImageGrid.jsx
│   │   │   └── ImageGrid.css
│   │   │
│   │   ├── ImageCard
│   │   │   ├── ImageCard.jsx
│   │   │   └── ImageCard.css
│   │   │
│   │   ├── PhotoModal
│   │   │   ├── PhotoModal.jsx
│   │   │   └── PhotoModal.css
│   │   │
│   │   ├── AuthForms
│   │   │   ├── LoginForm.jsx
│   │   │   └── SignupForm.jsx
│   │   │
│   │   └── Footer
│   │       ├── Footer.jsx
│   │       └── Footer.css
│
│   ├── pages
│   │
│   │   ├── Home
│   │   │   └── Home.jsx
│   │   │
│   │   ├── Search
│   │   │   └── Search.jsx
│   │   │
│   │   ├── PhotoDetail
│   │   │   └── PhotoDetail.jsx
│   │   │
│   │   ├── Login
│   │   │   └── Login.jsx
│   │   │
│   │   └── Signup
│   │       └── Signup.jsx
│
│   ├── api
│   │   └── unsplashApi.js
│
│   ├── context
│   │   └── AuthContext.jsx
│
│   ├── hooks
│   │   └── useFetchPhotos.js
│
│   ├── styles
│   │   └── global.css
│
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# 🧠 Application Architecture

```
App
│
├── Navbar
│   └── SearchBar
│
├── Pages
│
│   ├── HomePage
│   │   ├── HeroSection
│   │   ├── CategoryBar
│   │   └── ImageGrid
│   │        └── ImageCard
│
│   ├── SearchPage
│   │   └── ImageGrid
│
│   ├── PhotoDetailPage
│   │   ├── PhotoPreview
│   │   └── PhotoInfo
│
│   ├── LoginPage
│   │   └── LoginForm
│
│   └── SignupPage
│       └── SignupForm
│
└── Footer
```

---

# 🧩 Component Documentation

## Navbar

Location:

```
components/Navbar/Navbar.jsx
```

Responsibilities:

* Display website logo
* Provide navigation links
* Display login/signup buttons
* Include SearchBar component

Features:

* Fixed top navigation
* Responsive layout
* Authentication state display

---

## SearchBar

Location:

```
components/SearchBar/SearchBar.jsx
```

Responsibilities:

* Accept user search input
* Redirect user to search results page

Example route:

```
/search/nature
```

---

## HeroSection

Location:

```
components/HeroSection/HeroSection.jsx
```

Responsibilities:

* Display homepage banner
* Title and description
* Large search input
* Trending topics

Displayed only on the **home page**.

---

## CategoryBar

Location:

```
components/CategoryBar/CategoryBar.jsx
```

Responsibilities:

Display category filters such as:

* Nature
* Wallpapers
* Travel
* Architecture
* Technology

---

## ImageGrid

Location:

```
components/ImageGrid/ImageGrid.jsx
```

Responsibilities:

* Render image gallery
* Arrange images in masonry layout
* Load more images during scrolling

Libraries used:

```
react-masonry-css
react-infinite-scroll-component
```

---

## ImageCard

Location:

```
components/ImageCard/ImageCard.jsx
```

Responsibilities:

Display a single image card including:

* Image
* Photographer name
* Like icon
* Download icon

Click action:

```
navigate('/photo/:id')
```

---

## PhotoModal (Optional)

Location:

```
components/PhotoModal/PhotoModal.jsx
```

Responsibilities:

* Display fullscreen preview
* Overlay modal UI

---

## LoginForm

Location:

```
components/AuthForms/LoginForm.jsx
```

Responsibilities:

* Email input
* Password input
* Login button
* Authentication logic

Stores user data in:

```
localStorage
```

---

## SignupForm

Location:

```
components/AuthForms/SignupForm.jsx
```

Responsibilities:

* Register new user
* Form validation
* Save user credentials locally

---

## Footer

Location:

```
components/Footer/Footer.jsx
```

Responsibilities:

* Footer navigation
* Social links
* Copyright

---

# 📄 Pages

## Home Page

File:

```
pages/Home/Home.jsx
```

Components used:

* Navbar
* HeroSection
* CategoryBar
* ImageGrid
* Footer

Displays:

Trending images and main photo feed.

---

## Search Page

File:

```
pages/Search/Search.jsx
```

Responsibilities:

Fetch images based on search query.

API endpoint:

```
/search/photos
```

Display results using:

```
ImageGrid
```

---

## Photo Detail Page

File:

```
pages/PhotoDetail/PhotoDetail.jsx
```

Responsibilities:

Display:

* Full resolution image
* Photographer information
* Download button
* Related images

Route:

```
/photo/:id
```

---

## Login Page

File:

```
pages/Login/Login.jsx
```

Displays:

```
LoginForm
```

Route:

```
/login
```

---

## Signup Page

File:

```
pages/Signup/Signup.jsx
```

Displays:

```
SignupForm
```

Route:

```
/signup
```

---

# 🌐 Unsplash API Integration

File:

```
src/api/unsplashApi.js
```

Example functions:

```
fetchPhotos()
searchPhotos(query)
getPhotoById(id)
```

Authentication header:

```
Authorization: Client-ID YOUR_ACCESS_KEY
```

Get API key:

```
https://unsplash.com/developers
```

---

# 🔐 Authentication System

Backend authentication is **not implemented**.

User session is simulated using:

```
localStorage
```

Stored data example:

```
{
 name: "User",
 email: "user@email.com"
}
```

Managed using:

```
AuthContext
```

---

# ⚙️ Installation & Setup

Clone repository:

```
git clone https://github.com/your-repo/unsplash-clone.git
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

---

# 🌍 Deployment

Recommended hosting platforms:

* Vercel
* Netlify

Deployment steps:

```
npm run build
```

Upload the build folder.

---

# 👥 Team Development Guide

Each contributor should:

1. Select a component or page
2. Implement inside the designated folder
3. Follow naming conventions
4. Maintain reusable code

Example commit message:

```
feat: implemented ImageGrid component
```

---

# ⭐ Minimum Required Features

* Navbar
* Search functionality
* Image grid layout
* Photo detail page
* Login UI
* Signup UI
* Infinite scrolling
* Responsive design

---

# ✨ Bonus Features (Optional)

* Dark mode
* Image modal preview
* Skeleton loaders
* Collections page
* Trending searches

---

# 📚 Learning Outcomes

This project demonstrates:

* React component architecture
* API integration
* scalable frontend design
* responsive UI engineering

---

# 📜 License

This project is built for educational purposes and is not affiliated with Unsplash.
