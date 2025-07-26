import Hero from "./components/hero";
export default function Home() {
  return (
    <div className="font-primary text-lg min-h-screen flex justify-center">
      <div className="w-full border-x border-white/15 border-dashed max-w-5xl py-10 px-10">
        <Hero />
      </div>
    </div>
  );
}
