import { Github } from "lucide-react";
import Link from "next/link";
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

async function fetchProjects(): Promise<Project[]> {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ||
        "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/notionProjects`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const data = await response.json();

    return data.map((page: NotionPage) => {
        const title = page.properties.name.title[0].text.content;
        const description = page.properties.description.rich_text[0].text.content;
        const url = page.properties.url.url;
        const github = page.properties.github.url;
        const tags = page.properties.tags.multi_select
            .map((tag: { name: string }) => tag.name)
            .join(", ");
        return { title, description, url, github, tags };
    });
}
console.log("Project data fetched from Notion:", fetchProjects);
const Project = (name: string, description: string, github: string, url?: string) => {
    return (
        <div className="py-4 text-gray-600 dark:text-gray-300">
            {url ? <Link href={url} className="text-gray-800 dark:text-gray-200 cursor-pointer hover:underline">{name}</Link> : <h2 className="text-gray-800 dark:text-gray-200">{name}</h2>}
            <div className="flex flex-row space-x-4 justify-between mt-2">
                <p>{description}</p>
                <Link href={github} className="text-sm hover:underline flex"> <Github className="scale-80 mr-1 -mt-0.5" /></Link>
            </div>
        </div>
    );
}
const Projects = async () => {
    const projects = await fetchProjects();
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    {Project(project.title, project.description, project.github, project.url)}
                </div>
            ))}
        </div>
    );
}
export default Projects;