// single bootcamp project to be reused for each project in portfolio
import { AiFillGithub } from 'react-icons/ai';
export default function Project(props) {
    return (
        <>
            <h3><a href={props.project.repositoryLink}><AiFillGithub />Repo</a></h3>
            <div>
                <a href={props.project.siteLink}><img className='project' src={props.project.screenshot}></img></a>
            </div>
        </>
    )
}