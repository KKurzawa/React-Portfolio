// single bootcamp project to be reused for each project in portfolio
import { AiFillGithub } from 'react-icons/ai';
export default function Project(props) {
    return (
        <>
            <div>
                <a href={props.project.siteLink}><img className='project' src={props.project.screenshot}></img></a>
                <h4 className='project-description'><a href={props.project.repositoryLink}>{props.project.description} Click to see <AiFillGithub /> repo.</a></h4>
            </div>
        </>
    )
}