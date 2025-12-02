import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    title: "Industrial Training in IT Sector",
    company: "Corizo Pvt. Ltd",
    location: "Bangalore, India",
    period: "Feb 2025 – Apr 2025",
    description: [
      "Trained in HTML, CSS, JavaScript",
      "Gained hands-on exposure to real-time industrial workflows and best practices",
      "Completed certifications to ensure quality and efficiency",
    ],
  },
];

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech - Information Technology",
    institution: "KDK College of Engineering, Nagpur",
    period: "2022 – 2025",
    grade: "CGPA: 5.92/10",
  },
  {
    icon: GraduationCap,
    degree: "Diploma - Computer Engineering",
    institution: "Maharashtra Institute of Technology, Aurangabad",
    period: "2021 – 2022",
    grade: "Percentage: 76.57%",
  },
];

const certifications = [
  "Industrial Training in IT - Sumago Infotech Pvt. Ltd.",
  "Web Development Basics (HTML, CSS, JS)",
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl mb-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <exp.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-xl font-semibold mb-1">{exp.title}</h4>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.location} • {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <h3 className="font-display text-2xl font-bold mb-8 mt-12 flex items-center gap-3">
              <Award className="text-primary" />
              Certifications
            </h3>
            <div className="glass-card p-6 rounded-2xl">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary to-primary/20" />

              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 pb-8 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <edu.icon size={18} className="text-primary" />
                  </div>

                  <div className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300">
                    <h4 className="font-display text-xl font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
