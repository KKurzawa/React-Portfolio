// import React from 'react';
import MoviePic from '../assets/MovieProject.png'
const projects = [
    {
        'id': 1,
        'name': 'Movie Project',
        'screenshot': MoviePic,
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
    {
        'id': 4,
        'name': 'Weather Dashboard',
        'screenshot': 'src/assets/WeatherDashboardPic.png',
        'siteLink': 'https://kkurzawa.github.io/Weather-Dashboard/',
        'repositoryLink': 'https://github.com/KKurzawa/Weather-Dashboard'
    },
    {
        'id': 5,
        'name': 'Work Day Scheduler',
        'screenshot': 'src/assets/WorkDaySchedulerPic.png',
        'siteLink': 'https://kkurzawa.github.io/Work-Day-Scheduler/',
        'repositoryLink': 'https://github.com/KKurzawa/Work-Day-Scheduler'
    },
    {
        'id': 6,
        'name': 'Personal Portfolio',
        'screenshot': 'src/assets/PortfolioPic.png',
        'siteLink': 'https://kkurzawa.github.io/KrisKurzawa-Portfolio/',
        'repositoryLink': 'https://github.com/KKurzawa/KrisKurzawa-Portfolio'
    },


];

export function getProjects() {
    return projects;
}