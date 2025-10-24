"use client"

import React, { useState, type FC } from "react";
import type { HTMLAttributes } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Link as LinkIcon, Moon, Sun, Download, MapPin, Calendar, ArrowUpRight, Briefcase, GraduationCap, Code2, ExternalLink } from "lucide-react";
import { motion, type MotionProps } from "framer-motion";

// ----------------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------------
interface LinkRef { label: string; href: string }
interface Project {
  name: string;
  description: string;
  highlights?: string[];
  year: string;
  role: string;
  links?: LinkRef[];
  tags?: string[];
}
interface Experience { company: string; role: string; start: string; end: string; bullets: string[] }
interface SkillGroup { group: string; items: string[] }
interface EducationItem { school: string; degree: string; end: string; details: string[] }
interface DataShape {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  links: { github: string; linkedin: string; resume: string };
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: EducationItem[];
}

// ----------------------------------------------------------------------------------
// Safe Motion wrapper for TS/SSR environments
// ----------------------------------------------------------------------------------
type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv: FC<MotionDivProps> = (props) => <motion.div {...props} />;

// ----------------------------------------------------------------------------------
// Data (edit here to add more projects/experience)
// ----------------------------------------------------------------------------------
const DATA: DataShape = {
  name: "Trevor Antle",
  title: "Software Engineer II @ Humana · Computer Engineering @ Purdue",
  tagline: "I build reliable backends, ML tooling, and embedded systems",
  location: "West Lafayette, IN",
  email: "antletrevor5@gmail.com",
  links: {
    github: "https://github.com/tantle27",
    linkedin: "https://www.linkedin.com/in/trevor-antle",
    resume: "/resume"
  },
  skills: [
    { group: "Programming Languages", items: ["Python", "C", "C++", "SQL", "JavaScript", "HTML", "CSS", "MATLAB"] },
    { group: "Frameworks & Libraries", items: ["Django", "Flask", "pandas", "NumPy", "PyTorch", "Matplotlib"] },
    { group: "Tools & Technologies", items: ["Git", "Azure DevOps", "SQLite", "Bash", "SystemVerilog", "VPython"] },
    { group: "Embedded Systems", items: ["STM32F0x", "GPIO", "DMA", "SPI", "Ultrasonic Sensors", "OLED Display", "ESP32"] }
  ],
  projects: [
    {
      name: "Approximate Nearest Neighbor Search with Orthogonal Residuals",
      description: "Built PyTorch pipeline for orthogonal vector encoding, integrated with FAISS for scalable ANN retrieval.",
      highlights: ["PyTorch training pipeline", "FAISS integration", "Recall@10 = 0.9581", "Sub-10s query time"],
      year: "2025",
      role: "ML Research",
      links: [
        { label: "GitHub", href: "https://github.com/tantle27/Soar-ANN" }
      ],
      tags: ["PyTorch", "FAISS", "Python", "ANN"]
    },
    {
      name: "STM32 Pong Matrix",
      description: "Real-time pong game using embedded C, GPIO, and ultrasonic sensors for position tracking.",
      highlights: ["DMA and SPI for OLED updates", "Live score display", "Countdown logic", "Ultrasonic position tracking"],
      year: "2024",
      role: "Embedded Developer",
      links: [],
      tags: ["C", "STM32", "GPIO", "DMA", "SPI"]
    },
    {
      name: "Embedded Systems @ Purdue Website",
      description: "Official club website showcasing projects, resources, and events for 500+ members.",
      highlights: ["Project showcase", "Resource library", "Event calendar", "Member portal"],
      year: "2025",
      role: "Co-Founder & Web Developer",
      links: [
        { label: "Website", href: "https://embedded-purdue.github.io" }
      ],
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      name: "Gest - Gesture Control Interface",
      description: "ESP32 gesture-controlled interface using IMU and flex sensors, 2nd place at Purdue's SPARK Challenge.",
      highlights: ["ESP32 programming", "IMU integration", "Flex sensor calibration", "Real-time gesture recognition"],
      year: "2025",
      role: "Embedded Developer",
      links: [],
      tags: ["C++", "ESP32", "IoT"]
    },
    // {
    //   name: "Django Compliance Engine",
    //   description: "Optimized file validation system with multithreading, achieving 70% performance improvement.",
    //   highlights: ["70% performance boost", "Multithreading for large files", "Rule-based validation", "15% accuracy improvement"],
    //   year: "2024-2025",
    //   role: "Backend Engineer",
    //   links: [],
    //   tags: ["Django", "Python", "Performance"]
    // },
    // {
    //   name: "PDF-to-CSV Pipeline",
    //   description: "High-performance data extraction pipeline using Pandas, OCR (PDFPlumber), and Regex.",
    //   highlights: ["Automated OCR processing", "Record normalization", "Reduced validation runtime", "Regex pattern matching"],
    //   year: "2024",
    //   role: "Data Engineer",
    //   links: [],
    //   tags: ["Python", "Pandas", "OCR", "Regex"]
    // }
  ],
  experience: [
    {
      company: "Humana",
      role: "Software Engineering Intern",
      start: "May 2023",
      end: "Aug 2025",
      bullets: [
        "At Humana, I engineered backend systems in Python and Django for compliance automation and data reliability. I optimized a rule-based file-validation engine with Python multithreading to parallelize I/O-bound checks, delivering ~70% throughput improvement on large batches. I built secure cryptography workflows by orchestrating GPG via Python subprocess for encryption/decryption and detached signature verification with integrity checks. I delivered a Python + SQL integration pipeline to synchronize state-level datasets using idempotent upserts and index-aware queries. I developed a Django-based secure file system with automated uploads, content indexing, and role-based access control (RBAC). For document ingestion, I implemented a high-performance PDF-to-CSV pipeline using Pandas, PDFPlumber (OCR), and Regex normalization to standardize records and reduce runtime. On the front end, I shipped a responsive chat UI integrated with internal APIs to improve agent context and reduce handle time by ~25%. I also automated support workflows by composing AI services with internal APIs and optimized SQL, contributing to an estimated $500K annual savings."
      ]
    },
    {
      company: "Embedded Systems @ Purdue",
      role: "Co-Founder & Vice President",
      start: "Jan 2025",
      end: "Dec 2025",
      bullets: [
        "Co-founded and structured the club, growing membership to 500+ students",
        "Led admin team to strengthen internal operations, logistics, and sustainable club growth",
        "Organized workshops on microcontroller programming, embedded C++, and Git for 50+ members",
        "Served as developer on 'Gest' ESP32 project, achieving 2nd place in Purdue's SPARK Challenge"
      ]
    },
    {
      company: "Purdue University",
      role: "Lead Undergraduate Teaching Assistant",
      start: "Aug 2024",
      end: "Dec 2025",
      bullets: [
        "Promoted to Lead UTA (Aug 2025), managing peer UTAs and coordinating course logistics for 100+ students",
        "Guided students in Python best practices, debugging techniques, and data science workflows",
      ]
    }
  ],
  education: [
    {
      school: "Purdue University",
      degree: "B.S. Computer Engineering",
      end: "Dec 2025",
      details: ["GPA 3.45/4.0", "Data Structures, OOP, AI, Software Engineering, Microprocessor Systems"]
    }
  ]
};

// ----------------------------------------------------------------------------------
// UI helpers
// ----------------------------------------------------------------------------------
function useTheme() {
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasClass = document.documentElement.classList.contains('dark');
    const initial = hasClass || prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle('dark', initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', dark);
  }, [dark, mounted]);

  return { dark, setDark, mounted };
}

const SectionTitle: FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      {icon && <div className="text-primary">{icon}</div>}
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
  </div>
);

const ProjectCard: FC<{ p: Project; index: number }> = ({ p, index }) => (
  <MotionDiv 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="group h-full hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{p.name}</CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{p.year}</span>
              <span>•</span>
              <span className="font-medium">{p.role}</span>
            </div>
          </div>
        </div>
        {p.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          {p.highlights?.length ? (
            <ul className="space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {p.links?.length ? (
          <div className="flex flex-wrap gap-2 pt-2">
            {p.links.map((l) => (
              <Button key={l.href} size="sm" variant="outline" asChild className="group/btn">
                <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">
                  <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  {l.label}
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  </MotionDiv>
);

const ExperienceItem: FC<{ e: Experience; index: number }> = ({ e, index }) => (
  <MotionDiv
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">{e.role}</h3>
                <p className="text-muted-foreground">{e.company}</p>
              </div>
              <Badge variant="outline" className="whitespace-nowrap">
                {e.start} – {e.end}
              </Badge>
            </div>
            {e.bullets.length === 1 ? (
              <p className="text-sm text-muted-foreground leading-relaxed">{e.bullets[0]}</p>
            ) : (
              <ul className="space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </MotionDiv>
);

const SkillCategory: FC<{ g: SkillGroup; index: number }> = ({ g, index }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
  >
    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg group-hover:text-primary transition-colors">{g.group}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {g.items.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + i * 0.02 }}
            >
              <Badge variant="secondary" className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {s}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </MotionDiv>
);

// ----------------------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------------------
export default function PortfolioSite() {
  const { dark, setDark, mounted } = useTheme();
  const [tab, setTab] = useState("projects");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                TA
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">{DATA.name}</div>
                <div className="text-xs text-muted-foreground leading-none mt-0.5">{DATA.title}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme" className="hidden sm:flex">
                {mounted ? (dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : (
                  <Sun className="h-5 w-5 opacity-60" aria-hidden />
                )}
              </Button>
              <Button asChild size="sm" variant="outline" className="hidden sm:flex">
                <a href={DATA.links.resume} className="inline-flex items-center gap-1.5">
                  <Download className="h-4 w-4" /> View Resume
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost">
                <a href={DATA.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost">
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="ghost" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">{DATA.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{DATA.location}</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-3 gap-8 items-start">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {DATA.tagline}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                I focus on clean APIs, measurable performance, and systems that survive real constraints. 
                Currently building backend platforms and ML tooling with modern cloud infrastructure.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {DATA.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    {DATA.email}
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Connect</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild size="sm" variant="secondary" className="w-full">
                      <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="secondary" className="w-full">
                      <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                    </Button>
                  </div>
                  <Button asChild size="sm" variant="default" className="w-full">
                    <a href={DATA.links.resume} className="inline-flex items-center gap-1.5">
                      <Download className="h-4 w-4" /> View Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </section>

        {/* Tabbed Content */}
        <section>
          <Tabs value={tab} onValueChange={setTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="projects" className="text-sm">Projects</TabsTrigger>
              <TabsTrigger value="experience" className="text-sm">Experience</TabsTrigger>
              <TabsTrigger value="skills" className="text-sm">Skills</TabsTrigger>
              <TabsTrigger value="education" className="text-sm">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              <SectionTitle 
                title="Featured Projects" 
                // subtitle="Selection of recent work across backend systems, ML infrastructure, and embedded development"
                icon={<Code2 className="h-8 w-8" />}
              />
              <div className="grid md:grid-cols-2 gap-6">
                {DATA.projects.map((p, i) => (
                  <ProjectCard key={p.name} p={p} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-8">
              <SectionTitle 
                title="Work Experience" 
                subtitle="Professional journey and key contributions"
                icon={<Briefcase className="h-8 w-8" />}
              />
              <div className="space-y-4">
                {DATA.experience.map((e, i) => (
                  <ExperienceItem key={e.company + e.role} e={e} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="space-y-8">
              <SectionTitle 
                title="Technical Skills" 
                subtitle="Languages, frameworks, and tools I work with regularly"
                icon={<Code2 className="h-8 w-8" />}
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {DATA.skills.map((g, i) => (
                  <SkillCategory key={g.group} g={g} index={i} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-8">
              <SectionTitle 
                title="Education" 
                subtitle="Academic background and achievements"
                icon={<GraduationCap className="h-8 w-8" />}
              />
              <div className="space-y-4">
                {DATA.education.map((ed, i) => (
                  <MotionDiv
                    key={ed.school}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                            <GraduationCap className="h-5 w-5" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-semibold text-lg">{ed.degree}</h3>
                                <p className="text-muted-foreground">{ed.school}</p>
                              </div>
                              <Badge variant="outline">{ed.end}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {ed.details.map((d) => (
                                <Badge key={d} variant="secondary">{d}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {DATA.name}. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a 
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors" 
                href={DATA.links.github} 
                target="_blank" 
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a 
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors" 
                href={DATA.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a 
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors" 
                href={DATA.links.resume}
              >
                <LinkIcon className="h-4 w-4" /> View Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
