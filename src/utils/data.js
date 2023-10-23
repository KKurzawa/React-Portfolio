// import React from 'react';

const projects = [
    {
        'id': 1,
        'name': 'Movie Project',
        'screenshot': './MovieProject.png',
        'siteLink': 'https://kkurzawa.github.io/Movie-Project/',
        'description': 'A movie app built with HTML, CSS, JavaScript, JQuery, Bulma and the TMBD API that allows users to search for a movie.',
        'repositoryLink': 'https://github.com/KKurzawa/Movie-Project'
    },
    {
        'id': 2,
        'name': 'Grocery Store Management System',
        'screenshot': './GroceryStoreManagementSystem.png',
        'siteLink': 'https://secure-gorge-43395-b510f5266de9.herokuapp.com/',
        'description': 'An employee management website built with Handlebars, CSS, JavaScript, Bootstrap, Express, MySql, MySql2, Node, Apexcharts, Sequalize, JawsDb, Heroku, and Bcrypt',
        'repositoryLink': 'https://github.com/KKurzawa/Grocery-Store-Employee-Management-System'
    },
    {
        'id': 3,
        'name': 'JavaScript Quiz',
        'screenshot': './JavaScriptChallenge.png',
        'siteLink': 'https://kkurzawa.github.io/JavaScript-Fundamentals-Challenge/',
        'description': 'A quiz about JavaScript fundamentals for students who are learning the language built with HTML, CSS, and JavaScript.',
        'repositoryLink': 'https://github.com/KKurzawa/JavaScript-Fundamentals-Challenge'
    },
    {
        'id': 4,
        'name': 'Weather Dashboard',
        'screenshot': './WeatherDashboard.png',
        'siteLink': 'https://kkurzawa.github.io/Weather-Dashboard/',
        'description': 'A weather dashboard that displays todays weather and the forecast for the next five days of the submitted city built with HTML, CSS, JavaScript, bootstrap, and the Open Weather API.',
        'repositoryLink': 'https://github.com/KKurzawa/Weather-Dashboard'
    },
    {
        'id': 5,
        'name': 'Work Day Scheduler',
        'screenshot': './WorkDayScheduler.png',
        'siteLink': 'https://kkurzawa.github.io/Work-Day-Scheduler/',
        'description': 'A work day calander built with HTML, CSS, JavaScript, and DayJs.',
        'repositoryLink': 'https://github.com/KKurzawa/Work-Day-Scheduler'
    },
    {
        'id': 6,
        'name': 'Personal Portfolio',
        'screenshot': './Portfolio.png',
        'siteLink': 'https://kkurzawa.github.io/KrisKurzawa-Portfolio/',
        'description': 'A professional portfolio built with HTML and CSS.',
        'repositoryLink': 'https://github.com/KKurzawa/KrisKurzawa-Portfolio'
    },


];

export function getProjects() {
    return projects;
}