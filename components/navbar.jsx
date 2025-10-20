import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-3 m-2">
        <div className="flex gap-x-15 items-center">
          <Image src="next.svg" alt="" width={70} height={70} />
          <ul className="flex gap-x-3">
            <li>
              <a href="">~/projects</a>
            </li>
            <li>
              <a href="">~/posts</a>
            </li>
            <li>
              <a href="">~/photos</a>
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
    </>
  );
}
