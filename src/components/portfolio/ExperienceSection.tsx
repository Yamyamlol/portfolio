import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "SDE Intern",
    company: "Anya Softek",
    duration: "Feb 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Designed and developed the complete frontend for the Uttarakhand Panchayat website using Angular 16.",
      "Handled the integration via RESTful APIs, ensuring seamless data exchange and optimized performance.",
      "Developed core app modules meeting the Department of Panchayati Raj's goals and delivering within timelines.",
      "Maintained and optimized page layouts, ensuring responsive design and timely resolution of frontend issues.",
    ],
    tech: ["Angular 16", "REST APIs", "TypeScript", "Responsive Design"],
  },
  {
    id: 2,
    role: "SDE Intern",
    company: "Adcraft AI Pvt. Ltd.",
    duration: "June 2024 – Aug 2024",
    location: "Remote",
    description: [
      "Designed a QA system for AI marketing assets, cutting manual review workload improving resource efficiency.",
      "Defined output quality and ethics metrics to automatically filter the output to align with brand standards.",
      "Automated the QA process, significantly reducing turnaround times and reliance on human resources.",
      "Enhanced the existing platform with UI refinements and robust cross-device accessibility for a consistent UX.",
    ],
    tech: ["AI/ML", "Quality Assurance", "UI/UX", "Cross-platform Development"],
  },
];

const education = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Graphic Era Deemed to Be University",
    year: "2022 - 2026",
    achievements: [
      "Shortlisted for SSB through TES-48",
      "3 NPTEL certified courses",
      "3 Indian Army scholarships",
    ],
  },
  {
    degree: "AISSCE (Class XII)",
    institution: "APS Birpur",
    year: "2022",
    achievements: ["Achieved 93.6%", "Elected as Head Boy"],
  },
  {
    degree: "AISCE (Class X)",
    institution: "APS Birpur",
    year: "2020",
    achievements: ["Achieved 87%"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through professional development and academic excellence
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center text-primary">
            <Briefcase className="mr-3 h-6 w-6" />
            Work Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative flex items-start"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-20 flex-1">
                    <Card className="glass glow-card hover-lift transition-all duration-500">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle className="text-xl text-primary mb-2">
                              {exp.role}
                            </CardTitle>
                            <p className="text-lg font-semibold text-foreground">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-right mt-2 md:mt-0">
                            <div className="flex items-center text-muted-foreground mb-1">
                              <Calendar className="mr-2 h-4 w-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="mr-2 h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start"
                            >
                              <span className="text-primary mr-2 mt-1">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center text-secondary">
            <svg
              className="mr-3 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Education
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass glow-card hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-2">{edu.degree}</h4>
                  <p className="text-foreground font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground mb-2">{edu.year}</p>
                  {edu.achievements && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-secondary mb-1">
                        Achievements:
                      </p>
                      {edu.achievements.map((achievement, i) => (
                        <p key={i} className="text-xs text-muted-foreground">
                          • {achievement}
                        </p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
