import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(222_47%_15%_/_0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(222_47%_15%_/_0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10 text-center px-4">
        <div className="animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-8">
            👋 Welcome to my Portfolio
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up delay-100">
          Hi, I'm{" "}
          <span className="gradient-text">Sarthak Rasal</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
          Aspiring <span className="text-primary font-medium">Web Developer</span> passionate about 
          building responsive, user-friendly websites with clean code
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-300">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full glass-card text-foreground font-semibold text-lg hover:border-primary/50 transition-all duration-300 gradient-border"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-slide-up delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sarthak-rasal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sarthakrasal998@gmail.com"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
