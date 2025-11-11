import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Technology } from "./components/Technology";
import { Story } from "./components/Story";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Experience />
      <Technology />
      <Story />
      <CallToAction />
      <Footer />
    </main>
  );
}
