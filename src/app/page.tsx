import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="xl:bg-[url('/imgs/yellow.jpg')] bg-no-repeat bg-right-top">
      <Hero/>
    </div>
  );
}
