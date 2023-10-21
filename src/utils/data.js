// import React from 'react';
// import MoviePic from 'https://github.com/KKurzawa/Movie-Project/blob/main/assets/images/HomePage.PNG'
const projects = [
    {
        'id': 1,
        'name': 'Movie Project',
        // 'screenshot': MoviePic,
        'siteLink': 'https://kkurzawa.github.io/Movie-Project/',
        'repositoryLink': 'https://github.com/KKurzawa/Movie-Project'
    },
    {
        'id': 2,
        'name': 'Grocery Store Employee Management Stystem',
        'screenshot': '/Users/kkurzawa/bootcamp/Challenges/React-Portfolio/src/assets/GroceryStoreEmployeeManagementSystem.png',
        'siteLink': 'https://secure-gorge-43395-b510f5266de9.herokuapp.com/',
        'repositoryLink': 'https://github.com/KKurzawa/Grocery-Store-Employee-Management-System'
    },
    {
        'id': 3,
        'name': 'JavaScript Fundamentals Challenge',
        'screenshot': '/Users/kkurzawa/bootcamp/Challenges/React-Portfolio/src/assets/JavascriptFundamentalschallenge.png',
        'siteLink': 'https://kkurzawa.github.io/JavaScript-Fundamentals-Challenge/',
        'repositoryLink': 'https://github.com/KKurzawa/JavaScript-Fundamentals-Challenge'
    },

];

export function getProjects() {
    return projects;
}