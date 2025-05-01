import Image from "next/image";
import Photo from "@/app/photo.jpg";
import Work from "./work";
export default function Home() {
  return (
    <div className="w-4/6 m-auto select-none">
    <nav className="flex flex-row justify-between items-center py-4">
        <h1 className="text-2xl">vineet bambah</h1>
        <div className="flex space-x-2 text-gray-700 ">
          <a href="#about" className="text-lg  hover:text-black">about <span className="font-semibold">[a]</span></a>
          <a href="#projects" className="text-lg  hover:text-black">work <span className="font-semibold">[w]</span></a>
          <a href="" className="text-lg  hover:text-black">resume <span className="font-semibold">[r]</span></a>
        </div>
    </nav>
    <main className="flex flex-col justify-center mt-24 m-auto max-w-3/4">
      <h1 className="font-thin text-3xl">About</h1>
      <div className="flex flex-row justify-between items-center space-x-4 mt-4">
        <p className="text-lg text-gray-700">
          I am a software engineer with a passion for open source and technology. I love to learn new things and share my knowledge with others. I am currently working on various projects and contributing to open source.
        </p>
      <Image src={Photo} alt="vineet" className="rounded-full w-48 h-48 hover:scale-101 duration-200" />
      </div>
    </main>
    <section className="work mt-24 m-auto max-w-3/4">
      <Work/>
    </section>
    </div>
  );
}
