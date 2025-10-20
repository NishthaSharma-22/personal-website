import About from "../../components/about";

export default function Home() {
  return (
    <div
      className={`mx-auto flex max-w-3xl flex-col px-4 py-12 pt-16 lg:max-w-4xl`}
    >
      <About />
    </div>
  );
}
