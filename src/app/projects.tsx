'use client'
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import Router from "next/router";
type Project = {
    title: string;
    description: string;
    url: string;
    github: string;
    tags: string;
}
type NotionPage = {
    properties: {
        name: {
            title: {
                text: {
                    content: string;
                }
            }[]
        };
        description: {
            rich_text: {
                text: {
                    content: string;
                }
            }[]
        };
        url: {
            url: string;
        }
        github: {
            url: string;
        }
        tags: {
            multi_select: {
                name: string;
            }[]
        }
    }
}

const fetchProjects = async () => {
    const response = await fetch('/api/notionProjects');
    if(!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    return data.map((page: NotionPage) => {
        const title = page.properties.name.title[0].text.content;
        const description = page.properties.description.rich_text[0].text.content;
        const url = page.properties.url.url;
        const github = page.properties.github.url;
        const tags = page.properties.tags.multi_select.map((tag: { name: string }) => tag.name).join(', ');
        return { title, description, url, github, tags }
    });
}
console.log("Project data fetched from Notion:", fetchProjects);
const router = Router;
const Project = (name: string, description: string, url?: string, github?: string) => {
    return (
        <div className="py-4 text-gray-600 dark:text-gray-300">
            {url? <h2 className="text-gray-800 dark:text-gray-200 cursor-pointer hover:underline" onClick={() => router.push(url ?? '#')}>{name}</h2>:<h2 className="text-gray-800 dark:text-gray-200">{name}</h2>}
            <div className="flex flex-row space-x-4 justify-between mt-2">
                <p>{description}</p>
                <a href={github} className="text-sm hover:underline flex"> <Github className="scale-80 mr-1 -mt-0.5" /></a>
            </div>
        </div>
    );
}
const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };

        getProjects();
    }, []);
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    {Project(project.title, project.description, project.url, project.github)}
                </div>
            ))}
        </div>
    );
}
export default Projects;