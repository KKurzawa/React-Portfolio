import KrisPhoto from '../../assets/KrisKurzawaPhoto.jpeg';
import './style.css';

export default function AboutMe() {

    return (

        <div className="about-me">
            <div>{KrisPhoto}</div>
            <h1>About Me</h1>
            <h2 className="about-me-body">I am an a full-stack web developer with demonstrated experience across the software development life cycle with an emphasis in JavaScript as my primary object oriented language. I am a lifelong musician/music educator who has performed all over the world and is currently on faculty in the Jazz Department at Wayne State University.</h2>
        </div>
    );
}



