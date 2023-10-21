// multiple projects being displayed
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../components/Project';
import { getProjects } from '../../utils/data';

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        const projects = await getProjects();
        setProjects(projects);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <Project key={project.id} project={project}>
                    <Link
                        to={`/project/${project.id}`}>
                    </Link>
                </Project>

            ))}
        </div>

    )
}