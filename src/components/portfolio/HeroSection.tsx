import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, Download, ExternalLink } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto parallax-element">
        <div className="mb-8 animate-fade-in">
          <h1 className="hero-title mb-4 animate-float">Sanyam Rawat</h1>
          <p className="hero-subtitle mb-6">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating scalable web applications and innovative
            solutions. Currently pursuing B.Tech in Computer Science with
            expertise in modern web technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover-scale glow-soft font-semibold"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="glass hover-glow border-border/50 hover:border-primary text-foreground hover:text-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:rawat.s.sanyam@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors hover-scale"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:+918475851772"
            className="text-muted-foreground hover:text-primary transition-colors hover-scale"
          >
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/yamyamlol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-scale"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        {/* Status Badges */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="glass p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Full Stack</p>
              <p className="font-semibold text-primary">Developer</p>
            </div>
            <div className="glass p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Open for</p>
              <p className="font-semibold text-secondary">SDE Roles</p>
            </div>
            <div className="glass p-3 rounded-lg">
              <p className="text-sm text-muted-foreground">Building</p>
              <p className="font-semibold text-accent">Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};
