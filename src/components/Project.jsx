// single bootcamp project to be reused for each project in portfolio
export default function Project(props) {
    return (
        <>


            <div>
                <a href={props.project.siteLink}>{props.project.name}</a>
            </div>

            <div>
                <a href={props.project.repositoryLink}>{props.project.screenshot}</a>
            </div>
        </>

    )
}