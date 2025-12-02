import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, optimized code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Creative solutions to complex challenges",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative and adaptable",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Always exploring new technologies",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Know Me <span className="gradient-text">Better</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative z-10 glass-card p-8 rounded-3xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <span className="font-display text-5xl font-bold gradient-text">SR</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Sarthak Rasal</h3>
                  <p className="text-primary font-medium">Web Developer</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Passionate about creating <span className="gradient-text">digital experiences</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate and self-motivated aspiring Website Developer with a solid foundation 
              in HTML, CSS, and Java. Skilled in building responsive, user-friendly websites and web 
              applications with a focus on clean code and performance optimization.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Curious to explore new tools, frameworks, and creative solutions with a strong 
              problem-solving mindset. Recognized for quick learning, adaptability, and collaborative 
              teamwork. Eager to contribute technical expertise, creativity, and dedication to 
              impactful projects in a dynamic development environment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
