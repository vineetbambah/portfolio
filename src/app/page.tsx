import Image from "next/image";
import Photo from "@/app/photo.jpg";
import Projects from "./projects";
import ResumeButton from "@/components/resume-button";
import ThemeToggle from "@/components/theme-toggle";
export default function Home() {
  return (
    <div className="flex flex-col md:w-1/2 mx-auto">
      <div className="m-8 flex flex-row text-sm items-center justify-between ">
        <div className="flex flex-row space-x-4 items-center justify-center">
          <Image src={Photo} alt="vineet" className="rounded-full font-thin w-20 h-20" />
          <div className="flex flex-col items-start h-fit space-y-2">
            <h1 className="text-lg">vineet bambah</h1>
            <div className="md:hidden">
            <ResumeButton />
            </div>
          </div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <nav className="w-full flex flex-row justify-center items-center underline space-x-16">
        <div className="hidden md:flex flex-row space-x-16">
          <a href="https://dev.to/vineetbambah">Blog</a>
          <a href="/resume.pdf">Resume</a>
        </div>
        <div className="md:hidden flex flex-row space-x-16">
          <a href="https://dev.to/vineetbambah">Blog</a>
        </div>
      </nav>
      <div className="m-8">
        <h1 className="font-thin text-lg mb-2">About</h1>
        <p className="text-gray-600 dark:text-gray-300">I am a software engineer and a tinkerer. <br /> I have a passion for open source and technology. I am currently studying at NITJ and actively looking for full-time roles. <br />You can see my projects and thoughts through this website. </p>
      </div>
      <div className="m-8">
        <h1 className="font-thin text-lg mb-2">Projects</h1>
        <Projects />
      </div>
      <div className="m-8">
        <p>You can reach me out to me at <a className="underline md:no-underline" href="mailto:neozvbambah@gmail.com">neozvbambah@gmail.com</a></p>
        <ul className="flex flex-row space-x-4 mt-2">
          <li><a href="https://x.com/vineetbambah" className="underline cursor-pointer">X</a></li>
          <li><a href="https://www.linkedin.com/in/vineetbambah/" className="underline cursor-pointer">LinkedIn</a></li>
          <li><a href="https://www.github.com/vineetbambah/" className="underline cursor-pointer">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}
