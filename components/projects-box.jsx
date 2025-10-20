import Image from "next/image";

export default function Box({name, description, icon, github, url, gradient}) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-w-sm sm:max-w--md md:max-w-lg lg:max-w-xl w-full p-4 text-center rounded-2xl bg-gradient-to-r ${gradient}`}
      >
        {/* <Image src={image} alt={title} width={400} height={300} /> */}
        <div className="w-full mt-3 text-left">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-semibold">{name}</h1>
            <div className="flex gap-x-2">
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
