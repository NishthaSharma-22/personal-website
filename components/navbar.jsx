import Image from "next/image";
import Link from "next/link";
import {FaGithub, FaRegMoon} from "react-icons/fa"
export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 text-xl lg:text-xl sm:text-md backdrop-blur-lg bg-white/20 border border-white/20">
        <div className="flex justify-between items-center p-3 m-2">
          <div className="flex gap-x-15 items-center">
            <Link href="/">
              <Image src="/nishtha.jpg" alt="" width={70} height={70} />
            </Link>
            <ul className="flex gap-x-10">
              <li>
                <a href="/projects" class="primary">
                  ~/projects
                </a>
              </li>
              <li>
                <a href="/posts" class="primary">
                  ~/posts
                </a>
              </li>
              <li>
                <a href="/photos" class="primary">
                  ~/photos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-x-5">
              <li>
                <a href="">
                  <FaGithub size={35} className="text-sky-500 hover:text-violet-400"/>
                </a>
              </li>
              <li>
                <a href="">
                  <FaRegMoon size={35} className="text-sky-500 hover:text-violet-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-30"></div>
    </>
  );
}
