import Link from "next/link";
export default function About(){
    return (
      <div>
        <h1 className="font-semibold text-4xl">Nishtha Sharma.</h1>
        <p className="mt-8 text-xl font-normal">
          Hello world! I am Nishtha, a sophomore studying Math and Computer
          Science. I enjoy building useful and useless but fun things and making
          art!
        </p>
        <p className="mt-3 text-xl font-normal">
          Check out <a href="/projects" class="secondary">~/projects</a> or my Github (
          <Link href="github.com/nishthasharma-22" className="bg-violet-100 text-violet-500">
            @NishthaSharma-22
          </Link>) to see more projects!
        </p>
      </div>
    );
}