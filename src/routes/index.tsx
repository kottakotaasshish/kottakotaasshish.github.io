import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  Braces,
  BriefcaseBusiness,
  Cloud,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Server,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Kottakota — Python Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ashish Kottakota, a Python full stack developer specializing in React, FastAPI, microservices, cloud, and distributed systems.",
      },
      { property: "og:title", content: "Ashish Kottakota — Full Stack Portfolio" },
      {
        property: "og:description",
        content:
          "Senior software developer with 8+ years across React, TypeScript, Python, FastAPI, AWS, Kubernetes, Kafka, and scalable systems.",
      },
    ],
  }),
  component: PortfolioPage,
});

const skills = [
  { title: "Frontend", icon: Braces, items: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Chart.js"] },
  { title: "Backend", icon: Server, items: ["Python", "FastAPI", "Django", "Flask", "GraphQL", "WebSockets"] },
  { title: "Data", icon: Database, items: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
];

const experiences = [
  {
    company: "The Home Depot",
    location: "Atlanta, GA",
    period: "Apr 2024 — Present",
    role: "Senior Software Developer",
    impact: ["Improved page-load performance by 35%", "Increased system throughput by 40%", "Reduced release cycles by 50%"],
    stack: "React, TypeScript, Tailwind CSS, FastAPI, Flask, Kafka, PostgreSQL, Docker, Kubernetes, AWS EKS",
  },
  {
    company: "NextGen Health Care",
    location: "Atlanta, GA",
    period: "Feb 2022 — Mar 2024",
    role: "Software Developer",
    impact: ["Built real-time dashboards", "Implemented WebSocket updates", "Automated deployments with GitLab CI"],
    stack: "React, Chart.js, Django, FastAPI, Celery, RabbitMQ, Redis, PostgreSQL, GCP, Kubernetes",
  },
  {
    company: "American Eagle Outfitters",
    location: "New York, NY",
    period: "Jan 2020 — Jan 2022",
    role: "Software Developer",
    impact: ["Built retail e-commerce workflows", "Optimized MySQL queries", "Improved release automation"],
    stack: "React, React Router, Flask, SQLAlchemy, MySQL, Docker, AWS EC2, RDS, Jenkins, PyTest",
  },
  {
    company: "HashTag Technologies",
    location: "Coimbatore",
    period: "Jul 2018 — Dec 2019",
    role: "Software Developer",
    impact: ["Developed responsive interfaces", "Supported Flask APIs", "Validated APIs with Postman and Swagger"],
    stack: "HTML5, CSS3, JavaScript, Bootstrap, React, Python, Flask, Docker, Git",
  },
];

const highlights = [
  "Microservices and distributed systems",
  "REST, GraphQL, JWT, OAuth2",
  "Kafka event-driven architecture",
  "Performance tuning and observability",
];

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-hero text-hero-foreground">
        <div className="absolute inset-0 portfolio-grid opacity-55" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="space-y-8">
            <nav className="flex flex-wrap items-center gap-3 text-sm text-hero-foreground/78">
              <span className="rounded-full border border-hero-foreground/18 px-3 py-1">Portfolio</span>
              <a className="transition hover:text-hero-foreground" href="mailto:kottakotashish99@gmail.com">Email</a>
              <a className="transition hover:text-hero-foreground" href="https://github.com/kottakotaasshish" target="_blank" rel="noreferrer">GitHub</a>
              <a className="transition hover:text-hero-foreground" href="https://www.linkedin.com/in/kottakota-ashish/" target="_blank" rel="noreferrer">LinkedIn</a>
            </nav>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-hero-foreground/10 px-4 py-2 text-sm font-medium text-hero-foreground/88 ring-1 ring-hero-foreground/15">
                <Sparkles className="size-4" /> 8+ years building scalable full stack systems
              </div>
              <h1 className="text-balance text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
                Ashish Kottakota
              </h1>
              <p className="max-w-2xl text-balance text-xl leading-8 text-hero-foreground/82">
                Senior Python Full Stack Developer specializing in React, TypeScript, FastAPI,
                microservices, cloud deployments, and high-performance distributed systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:kottakotashish99@gmail.com">
                    <Mail className="size-4" /> Contact me
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="https://github.com/kottakotaasshish" target="_blank" rel="noreferrer">
                    <Github className="size-4" /> View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="float-signal rounded-[2rem] border border-hero-foreground/14 bg-hero-foreground/10 p-5 shadow-lift backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-panel p-6 text-card-foreground">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Current role</p>
                  <h2 className="mt-2 text-2xl font-black">Senior Software Developer</h2>
                </div>
                <Award className="size-9 text-primary" />
              </div>
              <div className="mt-8 grid gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-card/70 p-3 shadow-soft">
                    <span className="size-2 rounded-full bg-success" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <Metric value="35%" label="faster UI" />
                <Metric value="45%" label="DB gains" />
                <Metric value="50%" label="release cut" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-bold uppercase text-primary">Technical toolkit</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Built for modern product engineering.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article key={skill.title} className="rounded-2xl border bg-card p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-skill p-3 text-secondary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-black">{skill.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-primary">Experience</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Delivery across retail, healthcare, and platforms.</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <MapPin className="size-4" /> Atlanta, GA
            </div>
          </div>
          <div className="grid gap-4">
            {experiences.map((job) => (
              <article key={job.company} className="rounded-2xl border bg-card p-5 shadow-soft transition hover:border-primary/35">
                <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <div className="flex items-center gap-2 text-primary">
                      <BriefcaseBusiness className="size-4" />
                      <span className="text-sm font-bold">{job.period}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black">{job.company}</h3>
                    <p className="mt-1 font-semibold text-muted-foreground">{job.role} · {job.location}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {job.impact.map((item) => (
                        <span key={item} className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="leading-7 text-muted-foreground">{job.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
        <article className="rounded-2xl border bg-card p-7 shadow-soft">
          <MessageSquareText className="size-8 text-primary" />
          <h2 className="mt-5 text-3xl font-black">Education</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">M.S. Computer Science</strong><br />California State University Fullerton, California</p>
            <p><strong className="text-foreground">B.S. Computer Science</strong><br />BML Munjal University, Gurgaon, India</p>
          </div>
        </article>
        <article className="rounded-2xl bg-hero p-7 text-hero-foreground shadow-lift">
          <h2 className="text-3xl font-black">Let’s build reliable software.</h2>
          <p className="mt-4 text-hero-foreground/76">Open to senior full stack, backend, and cloud-focused engineering roles.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="hero" asChild><a href="mailto:kottakotashish99@gmail.com">Email <ArrowUpRight className="size-4" /></a></Button>
            <Button variant="glass" asChild><a href="https://www.linkedin.com/in/kottakota-ashish/" target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a></Button>
          </div>
        </article>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-primary p-3 text-primary-foreground">
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs font-semibold opacity-80">{label}</div>
    </div>
  );
}