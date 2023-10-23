
// import Project from '../../components/Project';
// import { useState, useEffect } from 'react';

import './style.css';



export default function AboutMe() {
    // const [profilePic, setProfilePic] = useState([]);

    // const fetchData = async () => {

    //     setProfilePic(profilePic);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (

        <div className="about-me">
            <h1>About Me</h1>
            <img src='../../../public/KrisKurzawaPhoto.jpeg'></img>
            <h2 className="about-me-body">I am an a full-stack web developer with demonstrated experience across the software development life cycle with an emphasis in JavaScript as my primary object oriented language. I am a lifelong musician/music educator who has performed all over the world and is currently on faculty in the Jazz Department at Wayne State University.</h2>
        </div>
    );
}



