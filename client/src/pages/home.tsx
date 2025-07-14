import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <title>Mohammad Kaif - Portfolio</title>
      <meta name="description" content="Mohammad Kaif - Full Stack Developer & Designer. Passionate about creating digital solutions that make a difference. View my portfolio and get in touch." />
      <meta property="og:title" content="Mohammad Kaif - Portfolio" />
      <meta property="og:description" content="Full Stack Developer & Designer specializing in modern web technologies and user-centered design." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
