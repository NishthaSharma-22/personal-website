import Image from "next/image";

export default function Box({name, description, icon, github, url, gradient}) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full p-5 mb-15 text-center rounded-2xl bg-gradient-to-br ${gradient}`}
      >
        <Image src={icon} alt={name} width={500} height={400} className="m-2 mb-5 shadow-xl rounded-sm"/>
        <div className="w-full mt-3 text-left">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <div className="flex gap-x-2 text-lg">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  G
                </a>
              )}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  L
                </a>
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
