import { Globe, Github } from "lucide-react";

const Project = (name: string, description: string) => {
    return (
        <div className="py-4 text-gray-600 dark:text-gray-300">
            <h2 className="text-gray-800 dark:text-gray-200">{name}</h2>
            <p>{description}</p>
            <div className="flex flex-row space-x-4 mt-2">
                <a href="#" className="text-sm hover:underline flex "><Globe className="scale-80 mr-1 -mt-0.5"/>View Project</a>
                <a href="#" className="text-sm hover:underline flex"> <Github className="scale-80 mr-1 -mt-0.5"/> View Repo</a>
            </div>
        </div>
    );
}
const Projects = () => {
    return (
        <div>
            <ul>
                <li>
                    {Project("Project 1", "Description of project 1")}
                </li>
                <li>
                    {Project("Project 2", "Description of project 2")}
                </li>
                <li>
                    {Project("Project 3", "Description of project 3")}
                </li>
                <li>
                    {Project("Project 4", "Description of project 4")}
                </li>
            </ul>
        </div>
    );
}
export default Projects;