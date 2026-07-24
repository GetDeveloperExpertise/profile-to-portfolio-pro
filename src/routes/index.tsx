import { motion } from "framer-motion";
import { HeroScene } from "@/components/HeroScene";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Portfolio });

const impactStats = [
  { k: "8+", v: "Years shipping cloud", d: "Production infra across EU, UAE & APAC" },
  { k: "60%", v: "Deploy time cut", d: "CI/CD redesign at EntropyX" },
  { k: "40%", v: "Faster releases", d: "Rocket SMS monolith → microservices" },
  { k: "6x", v: "AWS + Azure certs", d: "Plus AWS Community Builder" },
];

const marqueeTech = [
  "AWS", "Azure", "Kubernetes", "Terraform", "Docker", "Jenkins",
  "GitOps", "Prometheus", "Grafana", "Helm", "ELK", "Jaeger",
  "CloudFormation", "Linux", "Python", "Bash", "Cisco", "VMware",
];

const skillGroups = [
  {
    title: "Cloud Platforms",
    tag: "Primary domain",
    items: [
      "AWS — EC2, EKS, S3, RDS, VPC, Lambda, Route53",
      "Azure — AKS, VMs, Monitor, Load Balancer",
      "AWS Community Builder",
    ],
    accent: "mint",
    span: "md:col-span-2",
  },
  {
    title: "Containers",
    tag: "Runtime",
    items: ["Kubernetes", "Docker", "AKS / EKS", "Helm", "ACR"],
    accent: "violet",
    span: "md:col-span-1",
  },
  {
    title: "CI/CD & GitOps",
    tag: "Delivery",
    items: ["Jenkins", "Azure DevOps", "GitOps workflows", "Release automation"],
    accent: "violet",
    span: "md:col-span-1",
  },
  {
    title: "Infrastructure as Code",
    tag: "Foundation",
    items: ["Terraform", "AWS CloudFormation", "Bash & Python automation"],
    accent: "mint",
    span: "md:col-span-2",
  },
  {
    title: "Observability",
    tag: "Runtime insight",
    items: ["Prometheus", "Grafana", "ELK / Elasticsearch", "New Relic", "Jaeger"],
    accent: "mint",
    span: "md:col-span-2",
  },
  {
    title: "Systems & Networking",
    tag: "Roots",
    items: ["Linux administration", "VMware, Hyper-V", "CCNA networking", "AD, O365"],
    accent: "violet",
    span: "md:col-span-1",
  },
];

const experience = [
  {
    company: "IU International University of Applied Sciences",
    role: "Senior DevOps Engineer",
    period: "Oct 2025 — Present",
    location: "Munich, Germany",
    points: [
      "Leading DevOps strategy and cloud reliability for a global online university platform.",
      "Owning CI/CD, Kubernetes and IaC standards across engineering teams.",
    ],
  },
  {
    company: "IU International University of Applied Sciences",
    role: "DevOps Engineer",
    period: "Dec 2022 — Oct 2025",
    location: "Munich, Germany",
    points: [
      "Built cloud-native delivery pipelines and Kubernetes platforms for production workloads.",
      "Hardened observability and release automation across multiple product teams.",
    ],
  },
  {
    company: "EntropyX",
    role: "DevOps Engineer",
    period: "Feb 2022 — Jul 2023",
    location: "Dubai, UAE",
    points: [
      "Designed Azure DevOps CI/CD for Docker, lifting deployment efficiency by ~60%.",
      "Migrated Dev & QA workloads from Docker to Azure Kubernetes Service (AKS).",
      "Integrated Elasticsearch, Kibana and Jaeger into microservices for deep observability.",
      "Managed infrastructure end-to-end with Terraform.",
    ],
  },
  {
    company: "Contour Software",
    role: "Cloud Infrastructure Specialist",
    period: "Nov 2019 — Nov 2022",
    location: "Pakistan",
    points: [
      "Owned enterprise Azure account with critical internal and customer infrastructure.",
      "Designed CI/CD across Jenkins and Azure DevOps based on team-specific use cases.",
      "Migrated Azure SQL data to Elasticsearch via Logstash for search performance gains.",
    ],
  },
  {
    company: "MasPearls Inc",
    role: "Senior DevOps Engineer",
    period: "Aug 2021 — Jul 2022",
    location: "Pakistan",
    points: [
      "Cut deployment time of the Rocket SMS app by 40% within the first year.",
      "Led the monolith → microservices migration on AWS EKS with Jenkins pipelines.",
      "Provisioned infrastructure with CloudFormation; ran S3, VPC, RDS, EKS, Lambda, API Gateway.",
    ],
  },
  {
    company: "Royal Cyber Inc.",
    role: "System & Network Administrator",
    period: "Aug 2017 — Aug 2021",
    location: "Karachi",
    points: [
      "Ran Windows Server, AD, DNS, DHCP, Exchange, SharePoint and O365 stack.",
      "Managed VMware ESXi hosts, Veeam backup & replication, Cisco networking.",
    ],
  },
];

const certifications = [
  { name: "AWS Community Builder", org: "Amazon Web Services", year: "Active" },
  { name: "AWS Developer — Associate", org: "3× AWS certifications", year: "AWS" },
  { name: "Microsoft Azure", org: "3× Azure certifications", year: "Microsoft" },
  { name: "MCITP", org: "Microsoft Certified IT Professional", year: "Microsoft" },
  { name: "CCNA", org: "Cisco Certified Network Associate", year: "Cisco" },
  { name: "VMware vSphere", org: "Virtualization", year: "VMware" },
  { name: "HDI-SCA", org: "HDI Support Center Analyst", year: "HDI" },
  { name: "MS Information Security", org: "NED University", year: "Masters" },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO — cinematic full-bleed 3D showreel */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* 3D scene as background */}
        <div className="absolute inset-0">
          <HeroScene />
        </div>
        {/* Aurora + grid overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-background/70 to-background pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent pointer-events-none z-10" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-52">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              Available · Senior / Staff DevOps · Munich · Remote EU
            </div>

            <h1 className="font-display font-normal leading-[0.9] tracking-tight text-[clamp(3.5rem,11vw,10rem)]">
              Waqas
              <br />
              <span className="italic text-gradient">Ahmed.</span>
            </h1>

            <p className="mt-10 max-w-3xl font-display text-3xl md:text-5xl leading-[1.1] text-foreground/95">
              I engineer <span className="italic text-accent">cloud platforms</span> that ship
              faster, scale sideways, and <span className="italic text-primary">never sleep</span>.
            </p>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-sans font-light">
              Senior DevOps Engineer with 8+ years designing, automating and running production
              systems on AWS and Azure. Kubernetes, Terraform, GitOps and CI/CD are my daily tools —
              reliability is the outcome.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold font-sans shadow-[var(--shadow-mint)] hover:shadow-[var(--shadow-glow)] transition-all"
              >
                <span className="relative z-10">Book an interview →</span>
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full glass-strong px-8 py-4 text-sm font-semibold font-sans hover:bg-white/10 transition-colors"
              >
                See the work
              </button>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground font-mono text-[10px] uppercase tracking-[0.3em]"
          >
            <span>Scroll to explore</span>
            <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE — tech stack ribbon */}
      <section className="relative border-y border-border py-8 overflow-hidden glass">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span
              key={i}
              className="mx-8 font-display italic text-3xl md:text-5xl text-foreground/40 hover:text-accent transition-colors"
            >
              {t} <span className="text-primary not-italic mx-4">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT — editorial */}
      <Section
        id="about"
        eyebrow="01 · About"
        title={
          <>
            Cloud-native by <span className="italic text-gradient">craft</span>.
            <br />
            Reliability by <span className="italic text-accent">obsession</span>.
          </>
        }
      >
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-6 text-xl text-muted-foreground leading-relaxed font-light">
            <p>
              I'm a DevOps consultant and cloud specialist based in Munich, with{" "}
              <span className="text-foreground italic font-display text-2xl">8+ years</span>{" "}
              designing and running production infrastructure for SaaS, education and enterprise
              platforms across Europe, the UAE and South Asia.
            </p>
            <p>
              I've moved monoliths onto Kubernetes, cut deploy times by 60%, migrated enterprise
              Azure estates, and built CI/CD pipelines engineering teams actually enjoy using. I
              care about the boring parts —{" "}
              <span className="text-foreground">SLOs, rollbacks, cost, on-call sanity</span> —
              because that's where great products are quietly held up.
            </p>
            <p>
              MS in Information Security from NED University.{" "}
              <span className="text-accent italic font-display text-2xl">AWS Community Builder</span>.
            </p>
          </div>
          <aside className="md:col-span-2 glass-strong rounded-3xl p-8 space-y-6">
            {[
              { l: "Based in", v: "Munich, Bavaria" },
              { l: "Currently", v: "Senior DevOps @ IU" },
              { l: "Open to", v: "Senior · Staff · Lead" },
              { l: "Response time", v: "Within 24 hours" },
            ].map((row) => (
              <div key={row.l} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {row.l}
                </div>
                <div className="mt-1.5 font-display text-2xl">{row.v}</div>
              </div>
            ))}
          </aside>
        </div>
      </Section>

      {/* IMPACT — full-width dark band with huge numbers */}
      <section id="impact" className="relative py-32 px-6 border-y border-border">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "var(--gradient-mesh)" }}
        />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
              02 · Impact
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Numbers that <span className="italic text-gradient">move</span> the roadmap.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden glass">
            {impactStats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background/60 p-8 md:p-10 group hover:bg-card/60 transition-colors"
              >
                <div className="font-display text-6xl md:text-8xl leading-none text-gradient">
                  {s.k}
                </div>
                <div className="mt-4 font-display text-xl italic text-foreground/90">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS — bento */}
      <Section
        id="skills"
        eyebrow="03 · The Stack"
        title={
          <>
            Tools I <span className="italic text-gradient">reach for</span> before coffee.
          </>
        }
        intro="A pragmatic, battle-tested toolchain for building and running modern cloud platforms."
      >
        <div className="grid md:grid-cols-3 gap-5 auto-rows-fr">
          {skillGroups.map((g, i) => {
            const accentColor = g.accent === "mint" ? "var(--primary)" : "var(--accent)";
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative rounded-3xl border border-border glass-strong p-8 overflow-hidden hover:border-white/25 transition-all ${g.span}`}
              >
                <div
                  className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700"
                  style={{ background: accentColor }}
                />
                <div className="relative flex flex-col h-full">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.28em] mb-4"
                    style={{ color: accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")} · {g.tag}
                  </div>
                  <h3 className="font-display text-4xl mb-6 leading-tight">{g.title}</h3>
                  <ul className="space-y-2.5 text-foreground/85 mt-auto">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-3 text-[15px] font-sans">
                        <span style={{ color: accentColor }}>—</span>
                        <span className="font-light">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* EXPERIENCE — journey */}
      <Section
        id="experience"
        eyebrow="04 · Journey"
        title={
          <>
            A timeline of <span className="italic text-gradient">shipped systems</span>.
          </>
        }
        intro="From ISP data centers to global cloud platforms — a decade of hands-on infrastructure."
      >
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-16">
            {experience.map((e, i) => (
              <motion.article
                key={e.role + e.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-16 md:pl-24"
              >
                <span className="absolute left-2 md:left-6 top-3 h-4 w-4 rounded-full bg-primary shadow-[0_0_24px_var(--primary)]">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                </span>
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  <header className="md:col-span-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {e.period}
                    </div>
                    <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                      {e.role}
                    </h3>
                    <div className="mt-2 text-accent italic font-display text-xl">
                      {e.company}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground font-mono">
                      {e.location}
                    </div>
                  </header>
                  <ul className="md:col-span-3 glass-strong rounded-2xl p-6 space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] text-foreground/85 font-light">
                        <span className="text-primary mt-1.5 h-1 w-3 shrink-0 bg-primary rounded-full" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        id="certifications"
        eyebrow="05 · Credentials"
        title={
          <>
            Certified where it <span className="italic text-gradient">counts</span>.
          </>
        }
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border glass p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.year}
                </span>
              </div>
              <div className="font-display text-2xl leading-tight mb-2 group-hover:text-gradient transition-all">
                {c.name}
              </div>
              <div className="text-sm text-muted-foreground font-light">{c.org}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-40 px-6 overflow-hidden border-t border-border"
      >
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.9 }}
        />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
              Let's build
            </div>
            <h2 className="font-display text-5xl md:text-8xl leading-[1.02] tracking-tight">
              Have a platform that needs to{" "}
              <span className="italic text-gradient">scale, ship, and stay up</span>?
            </h2>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              I'm open to Senior, Staff and Lead DevOps / Platform Engineering roles in Munich,
              across the EU, and remote. Reach out — I reply within a day.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:waq.ahmed01@gmail.com"
                className="rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold font-sans shadow-[var(--shadow-mint)] hover:shadow-[var(--shadow-glow)] transition-shadow"
              >
                waq.ahmed01@gmail.com
              </a>
              <a
                href="tel:+491639297406"
                className="rounded-full glass-strong px-8 py-4 text-sm font-semibold font-sans hover:bg-white/10 transition-colors"
              >
                +49 163 929 7406
              </a>
              <a
                href="https://www.linkedin.com/in/waqas-ahmed-tech-expert"
                target="_blank"
                rel="noreferrer"
                className="rounded-full glass-strong px-8 py-4 text-sm font-semibold font-sans hover:bg-white/10 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <div>
            © {new Date().getFullYear()} Waqas Ahmed · Built with obsession in Munich.
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em]">
            DevOps · Cloud · Kubernetes · Terraform
          </div>
        </div>
      </footer>
    </div>
  );
}
