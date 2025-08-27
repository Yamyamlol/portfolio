import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Instruction Set Decoder & Visualizer",
    description:
      "Built a complete SIC/SIC-XE assembler with visualization of the data structures for fun learning experience.",
    features: [
      "Integrated Flask backend with a React UI for syntax-highlighted input",
      "Real-time simulation and table updates",
      "Downloadable outputs and control flow visualization",
      "Speed controls and stepwise execution tracking",
      "Responsive, interactive interface for code simulation",
    ],
    tech: ["React", "Flask", "Python", "JavaScript", "Assembly Language"],
    date: "Jan 2025",
    github: "https://github.com/Yamyamlol/TUI-assembler",
    demo: "https://sic-assembler-demo.vercel.app",
    image: "/assembler.png",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "Built a scalable full-stack MERN chat platform enabling real-time communication using Socket.IO.",
    features: [
      "Secure JWT authentication and user presence tracking",
      "Private and group chat rooms with instant message broadcasting",
      "Real-time updates with typing indicators and read receipts",
      "Responsive UI with message timestamps",
      "Active status and last seen functionality",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "JWT"],
    date: "Nov 2024",
    github: "https://github.com/Yamyamlol/WSchat",
    demo: "https://chat-app-demo.vercel.app",
    image: "/chat-app.png",
  },
  {
    id: 3,
    title: "Dev Snipper",
    description:
      "Developed a full-stack MERN platform for storing, tagging, and managing multi-language code snippets.",
    features: [
      "Secure JWT authentication and session handling",
      "OTP-based password recovery system",
      "Lazy loading and memoization for optimized performance",
      "Fuzzy search with client-side sorting",
      "Copy-to-clipboard and tag-based filtering",
      "Modular React architecture",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    date: "Oct 2024",
    github: "https://github.com/Yamyamlol/snippetVault",
    demo: "https://dev-snipper-demo.vercel.app",
    image: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack
            development skills and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass glow-card hover-lift group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-muted/30 rounded-l-lg relative overflow-hidden">
                    {/* Project image placeholder - would be replaced with actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      {project.image !== "" ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className="text-primary/60 text-6xl font-mono font-bold">
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                </div>

                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-primary mb-2 group-hover:text-primary-glow transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mb-3">
                          <Calendar className="mr-2 h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="glass border-border/50 hover:border-primary hover-scale"
                        >
                          <a href={project.github} target="_blank">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="glass border-border/50 hover:border-primary hover-scale"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-accent mr-2 mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass hover-glow border-border/50 hover:border-primary hover-scale"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
