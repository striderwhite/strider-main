import NetworkBackground from "@/components/NetworkBackground";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      {/* network background */}
      <NetworkBackground/>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4 text-white">Home</h1>
        <p className="text-lg text-gray-200">Welcome to the Home page.</p>
        <Button variant="secondary" className="mt-6">Get Started</Button>
      </div>
    </div>
  );
}