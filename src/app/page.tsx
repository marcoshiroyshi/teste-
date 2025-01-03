import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:bg-[url('/imgs/yellow.jpg')] bg-no-repeat bg-right-top">
      <Hero/>
    </div>
  );
}
