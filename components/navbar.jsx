import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 text-xl lg:text-xl sm:text-md backdrop-blur-lg bg-white/20 border border-white/20">
        <div className="flex justify-between items-center p-3 m-2">
          <div className="flex gap-x-15 items-center">
            <Link href="/">
              <Image src="next.svg" alt="" width={70} height={70} />
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
            <ul className="flex gap-x-3">
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Mode</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-30"></div>
    </>
  );
}
