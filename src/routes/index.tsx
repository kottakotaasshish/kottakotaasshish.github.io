import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ServerCog,
  ShieldCheck,
  Zap,
} from "lucide-react";

import profilePhoto from "@/assets/ashish-kottakota-photo-optimized.webp";
import { Button } from "@/components/ui/button";

const email = "kottakotashish99@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/kottakota-ashish";
const githubUrl = "https://github.com/kottakotaasshish";
const resumeUrl = "/ashish-kottakota-resume.docx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Kottakota | Python Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ashish Kottakota, Python full stack developer skilled in React, FastAPI, cloud, microservices, Kafka, and scalable systems.",
      },
      { property: "og:title", content: "Ashish Kottakota | Full Stack Portfolio" },
      {
        property: "og:description",
        content:
          "Senior software developer building reliable React, Python, FastAPI, cloud, and distributed systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PortfolioPage,
});

const metrics = [
  { value: "8+", label: "years experience" },
  { value: "35%", label: "faster page loads" },
  { value: "40%", label: "throughput gain" },
];

const skills = [
  { label: "Frontend", icon: Code2, tools: "React, TypeScript, Redux Toolkit, Tailwind CSS, Chart.js" },
  { label: "Backend", icon: ServerCog, tools: "Python, FastAPI, Django, Flask, GraphQL, WebSockets" },
  { label: "Data", icon: Database, tools: "PostgreSQL, MySQL, MongoDB, Cassandra, Redis" },
  { label: "Cloud", icon: Cloud, tools: "AWS, GCP, Docker, Kubernetes, Jenkins, GitHub Actions" },
];

const experience = [
  {
    company: "The Home Depot",
    role: "Senior Software Developer",
    place: "Atlanta, GA",
    period: "Apr 2024 — Present",
    wins: ["Improved page-load performance by 35%", "Increased system throughput by 40%", "Reduced release cycles by 50%"],
    stack: "React, TypeScript, Tailwind CSS, FastAPI, Flask, Kafka, PostgreSQL, Docker, Kubernetes, AWS EKS",
  },
  {
    company: "NextGen Health Care",
    role: "Software Developer",
    place: "Atlanta, GA",
    period: "Feb 2022 — Mar 2024",
    wins: ["Built real-time dashboards", "Implemented WebSocket updates", "Automated deployments with GitLab CI"],
    stack: "React, Chart.js, Django, FastAPI, Celery, RabbitMQ, Redis, PostgreSQL, GCP, Kubernetes",
  },
  {
    company: "American Eagle Outfitters",
    role: "Software Developer",
    place: "New York, NY",
    period: "Jan 2020 — Jan 2022",
    wins: ["Built retail e-commerce workflows", "Optimized MySQL queries", "Improved release automation"],
    stack: "React, Flask, SQLAlchemy, MySQL, Docker, AWS EC2, RDS, Jenkins, PyTest",
  },
  {
    company: "HashTag Technologies",
    role: "Software Developer",
    place: "Coimbatore",
    period: "Jul 2018 — Dec 2019",
    wins: ["Developed responsive interfaces", "Supported Flask APIs", "Validated APIs with Postman and Swagger"],
    stack: "HTML5, CSS3, JavaScript, Bootstrap, React, Python, Flask, Docker, Git",
  },
];

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-hero text-hero-foreground">
        <div className="mx-auto grid min-h-[88vh] max-w-6xl gap-10 px-5 py-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div className="flex flex-col justify-between gap-12 py-4">
            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-hero-foreground/80" aria-label="Primary navigation">
              <a href={`mailto:${email}`} className="hover:text-hero-foreground">Email</a>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-hero-foreground">GitHub</a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="hover:text-hero-foreground">LinkedIn</a>
              <a href={resumeUrl} download className="hover:text-hero-foreground">Resume</a>
            </nav>

            <div className="max-w-3xl space-y-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-hero-foreground/10 px-4 py-2 text-sm font-semibold text-hero-foreground/88 ring-1 ring-hero-foreground/14">
                <Zap className="size-4" aria-hidden="true" /> Senior Python Full Stack Developer
              </p>
              <div className="space-y-5">
                <h1 className="text-balance text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                  Ashish Kottakota
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-hero-foreground/80 sm:text-xl">
                  I build scalable product systems with React, TypeScript, Python, FastAPI,
                  cloud platforms, microservices, and event-driven architecture.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href={resumeUrl} download><Download className="size-4" aria-hidden="true" /> Download resume</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href={`mailto:${email}`}><Mail className="size-4" aria-hidden="true" /> Contact me</a>
                </Button>
              </div>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-hero-foreground/14 bg-hero-foreground/8 p-4">
                  <p className="text-2xl font-black">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold text-hero-foreground/70">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex items-center justify-center lg:justify-end" aria-label="Profile summary">
            <div className="w-full max-w-[360px] rounded-2xl border border-hero-foreground/14 bg-hero-foreground/8 p-4 shadow-lift">
              <img
                src={profilePhoto}
                alt="Ashish Kottakota professional headshot"
                width="480"
                height="480"
                fetchPriority="high"
                className="mx-auto aspect-square w-full max-w-[260px] rounded-xl object-cover shadow-soft sm:max-w-[300px]"
              />
              <div className="mt-5 space-y-4 rounded-xl bg-card p-5 text-card-foreground">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 size-6 text-primary" aria-hidden="true" />
                  <div>
                    <h2 className="text-xl font-black">Reliable full stack delivery</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Production experience across retail, healthcare, cloud, and distributed platforms.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <MapPin className="size-4 text-primary" aria-hidden="true" /> USA
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10" aria-labelledby="skills-heading">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase text-primary">Technical toolkit</p>
          <h2 id="skills-heading" className="mt-3 text-3xl font-black sm:text-4xl">Modern engineering stack for dependable products.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.label} className="rounded-xl border bg-card p-5 shadow-soft">
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black">{skill.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{skill.tools}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-16" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-primary">Experience</p>
              <h2 id="experience-heading" className="mt-3 text-3xl font-black sm:text-4xl">Impact across enterprise software teams.</h2>
            </div>
            <ShieldCheck className="size-9 text-primary" aria-hidden="true" />
          </div>
          <div className="space-y-4">
            {experience.map((job) => (
              <article key={job.company} className="rounded-xl border bg-card p-5 shadow-soft">
                <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary">
                      <BriefcaseBusiness className="size-4" aria-hidden="true" /> {job.period}
                    </div>
                    <h3 className="mt-3 text-2xl font-black">{job.company}</h3>
                    <p className="mt-1 font-semibold text-muted-foreground">{job.role} · {job.place}</p>
                  </div>
                  <div>
                    <ul className="grid gap-2 sm:grid-cols-3">
                      {job.wins.map((win) => (
                        <li key={win} className="rounded-lg bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground">{win}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{job.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10" aria-labelledby="contact-heading">
        <article className="rounded-xl border bg-card p-6 shadow-soft">
          <h2 className="text-2xl font-black">Education</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">M.S. Computer Science</strong><br />California State University Fullerton, California</p>
            <p><strong className="text-foreground">B.S. Computer Science</strong><br />BML Munjal University, Gurgaon, India</p>
          </div>
        </article>
        <article className="rounded-xl bg-hero p-6 text-hero-foreground shadow-lift">
          <h2 id="contact-heading" className="text-2xl font-black">Let’s build reliable software.</h2>
          <p className="mt-3 max-w-xl text-hero-foreground/76">Open to senior full stack, backend, and cloud-focused engineering roles.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="hero" asChild><a href={`mailto:${email}`}>Email <ArrowUpRight className="size-4" aria-hidden="true" /></a></Button>
            <Button variant="glass" asChild><a href={linkedInUrl} target="_blank" rel="noreferrer"><Linkedin className="size-4" aria-hidden="true" /> LinkedIn</a></Button>
            <Button variant="glass" asChild><a href={githubUrl} target="_blank" rel="noreferrer"><Github className="size-4" aria-hidden="true" /> GitHub</a></Button>
          </div>
        </article>
      </section>
    </main>
  );
}