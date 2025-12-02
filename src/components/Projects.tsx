import { ExternalLink, Github, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "SHOPSPHERE",
    subtitle: "E-Commerce Website",
    description:
      "Developed a comprehensive e-commerce platform with a responsive design, providing customers with a seamless online shopping experience. Features include product browsing, cart functionality, and a user-friendly checkout process.",
    tech: ["HTML", "CSS", "JavaScript"],
    period: "Jan 2025 – Mar 2025",
    icon: ShoppingCart,
    gradient: "from-primary/20 to-cyan-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 group"
            >
              {/* Project Header/Visual */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(hsl(222_47%_15%_/_0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(222_47%_15%_/_0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <project.icon size={40} className="text-primary" />
                    </div>
                    <h3 className="font-display text-3xl font-bold">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 rounded-lg bg-background/10 backdrop-blur-sm text-foreground hover:bg-background/20 transition-colors">
                    <Github size={20} />
                  </button>
                  <button className="p-2 rounded-lg bg-background/10 backdrop-blur-sm text-foreground hover:bg-background/20 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {project.period}
                  </span>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More projects coming soon...</p>
          <div className="flex justify-center gap-4">
            <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-primary/50 animate-pulse delay-100" />
            <div className="w-3 h-3 rounded-full bg-primary/30 animate-pulse delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
