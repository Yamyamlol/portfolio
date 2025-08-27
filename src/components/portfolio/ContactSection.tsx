import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, exciting projects,
            or just having a tech chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="glass glow-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:rawat.s.sanyam@gmail.com"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      rawat.s.sanyam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+918475851772"
                      className="text-foreground font-medium hover:text-secondary transition-colors"
                    >
                      +91 8475851772
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Uttarakhand, India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass glow-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Quick Actions
              </h3>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-soft hover-scale"
                  onClick={() =>
                    window.open("mailto:rawat.s.sanyam@gmail.com", "_blank")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full glass border-border/50 hover:border-primary hover-scale"
                  onClick={() =>
                    window.open("https://github.com/yamyamlol", "_blank")
                  }
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full glass border-border/50 hover:border-secondary hover-scale"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/yamyamlol/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full glass border-border/50 hover:border-accent hover-scale"
                  onClick={() =>
                    window.open(
                      "/resume.pdf",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border/20">
          <p className="text-muted-foreground mb-4">
            Currently pursuing B.Tech in Computer Science Engineering at Graphic
            Era Deemed to Be University
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • © 2025 Sanyam Rawat
          </p>
        </div>
      </div>
    </section>
  );
};
