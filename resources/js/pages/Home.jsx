//custom components
import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/Button";
//sections
import HomeAboutSection from "@/components/About";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center lg:pt-40 min-h-screen w-full">
      {/* network background */}
      <NetworkBackground/>

      {/* Hero */}
      <div className="relative z-20 flex flex-col items-center h-full">
        <h1 className="lg:text-[64px] font-bold mb-4 text-slate-200 text-center leading-[1.3]">Building software applications <br/> for modern businesses.</h1>
        <p className="text-xl text-slate-400 max-w-2xl text-center">Custom-built software designed around your processes, modernized and made to scale alongside your business.</p>
        <Button variant="secondary" className="mt-6">Get Started</Button>
      </div>

      <div className="min-h-[80vh]">
        <p>placeholder for this lil explanation section</p>
      </div>

      {/* About */}
      <HomeAboutSection/>
    </div>
  );
}