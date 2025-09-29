# 🎬 Movie Recommendation App  

A simple web app that recommends movies based on the **genre selected by the user**, using data from [TMDB (The Movie Database)](https://www.themoviedb.org/).  

The project demonstrates the use of **JavaScript (XHR requests)** for fetching data asynchronously, and dynamically updating the DOM to display movie details such as posters and descriptions.  

---

## 🚀 Features
- Fetches and displays a list of **movie genres** from the TMDB API.  
- Lets users select a genre and fetches **random movies** from that category.  
- Provides a **Next** button to load another random movie of the same genre.  
- Styled UI with separate sections for **poster** and **movie details**.  
- Uses **XMLHttpRequest (XHR)** for API calls (no fetch/axios).  

---

## 🛠️ Tech Stack
- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)** with `XMLHttpRequest`  
- **TMDB API**  

---

## 📦 Setup Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/Mrutunjaya-Panda/Movie-Recommendation.git
   cd Movie-Recommendation
2. ->Get your API key from TMDB: Create a free account on TMDB.
   ->Go to Settings → API → Request API Key.
   ->Copy the API Key.
3. Open the script.js file and replace:
   const apiKey = "YOUR_TMDB_API_KEY";
4. Open the index.html file in your browser.
   

## 🔑 API Endpoints Used

**Genres List**- https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}
**Movies by Genre**- https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}
**Movie Details (Poster, Overview, etc.)**- https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}
**Poster Base URL**- https://image.tmdb.org/t/p/w500${poster_path}

## 📸 Demo
<img width="1350" height="645" alt="image" src="https://github.com/user-attachments/assets/f2544833-3262-4231-b8ce-190048d338b4" />

## 🎯 Learning Objectives

1. Understand how to work with XHR requests in JavaScript.

2. Learn how to fetch and handle asynchronous API responses.

3. Practice DOM manipulation to dynamically display content.

4. Gain experience in integrating a real-world API (TMDB) into a web project.

## 📝 License

This project is for educational purposes and uses data provided by TMDB.
