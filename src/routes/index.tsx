import { motion } from "framer-motion";
import { HeroScene } from "@/components/HeroScene";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Portfolio });

const stats = [
  { k: "8+", v: "Years in DevOps" },
  { k: "3x", v: "AWS Certified" },
  { k: "3x", v: "Azure Certified" },
  { k: "60%", v: "Avg. deploy speedup" },
];

const skillGroups = [
  {
    title: "Cloud Platforms",
    color: "cyan",
    items: ["AWS (EC2, EKS, S3, RDS, VPC, Lambda, Route53)", "Azure (AKS, VMs, Monitor, Load Balancer)", "AWS Community Builder"],
  },
  {
    title: "Containers & Orchestration",
    color: "violet",
    items: ["Kubernetes", "Docker", "AKS / EKS", "Helm", "Azure Container Registry"],
  },
  {
    title: "CI/CD & GitOps",
    color: "cyan",
    items: ["Jenkins", "Azure DevOps", "GitOps workflows", "Automated release pipelines"],
  },
  {
    title: "Infrastructure as Code",
    color: "violet",
    items: ["Terraform", "AWS CloudFormation", "Bash & Python automation"],
  },
  {
    title: "Observability",
    color: "cyan",
    items: ["Prometheus", "Grafana", "ELK / Elasticsearch", "New Relic", "Jaeger"],
  },
  {
    title: "Systems & Networking",
    color: "violet",
    items: ["Linux administration", "VMware vSphere, Hyper-V", "CCNA networking", "Active Directory, Office 365"],
  },
];

const experience = [
  {
    company: "IU International University of Applied Sciences",
    role: "Senior DevOps Engineer",
    period: "Oct 2025 — Present · Munich, Germany",
    points: [
      "Leading DevOps strategy and cloud reliability for a global online university platform.",
      "Owning CI/CD, Kubernetes and IaC standards across engineering teams.",
    ],
  },
  {
    company: "IU International University of Applied Sciences",
    role: "DevOps Engineer",
    period: "Dec 2022 — Oct 2025 · Munich, Germany",
    points: [
      "Built cloud-native delivery pipelines and Kubernetes platforms for production workloads.",
      "Hardened observability and release automation across multiple product teams.",
    ],
  },
  {
    company: "EntropyX",
    role: "DevOps Engineer",
    period: "Feb 2022 — Jul 2023 · Dubai, UAE",
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
    period: "Nov 2019 — Nov 2022 · Pakistan",
    points: [
      "Owned enterprise Azure account with critical internal and customer infrastructure.",
      "Designed CI/CD across Jenkins and Azure DevOps based on team-specific use cases.",
      "Migrated Azure SQL data to Elasticsearch via Logstash for search performance gains.",
    ],
  },
  {
    company: "MasPearls Inc",
    role: "Senior DevOps Engineer",
    period: "Aug 2021 — Jul 2022 · Pakistan",
    points: [
      "Cut deployment time of the Rocket SMS app by 40% within the first year.",
      "Led the monolith → microservices migration on AWS EKS with Jenkins pipelines.",
      "Provisioned infrastructure with CloudFormation; ran S3, VPC, RDS, EKS, Lambda, API Gateway.",
    ],
  },
  {
    company: "Royal Cyber Inc.",
    role: "System & Network Administrator",
    period: "Aug 2017 — Aug 2021 · Karachi",
    points: [
      "Ran Windows Server, AD, DNS, DHCP, Exchange, SharePoint and O365 stack.",
      "Managed VMware ESXi hosts, Veeam backup & replication, Cisco networking.",
    ],
  },
];

const certifications = [
  "AWS Community Builder",
  "AWS Developer — Associate (3x AWS)",
  "Microsoft Azure (3x)",
  "MCITP — Microsoft Certified IT Professional",
  "Cisco Certified Network Associate (CCNA)",
  "VMware vSphere",
  "HDI Support Center Analyst (HDI-SCA)",
  "MS Information Security — NED University",
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24 md:pt-48 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              Available for Senior / Staff DevOps roles · Munich · Remote EU
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
              Waqas Ahmed<span className="text-cyan">.</span>
            </h1>
            <p className="mt-4 text-2xl md:text-4xl font-display font-medium">
              I engineer <span className="text-gradient">cloud platforms</span> that
              ship faster and never sleep.
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Senior DevOps Engineer with 8+ years designing, automating and running
              production systems on AWS and Azure. Kubernetes, Terraform, GitOps and
              CI/CD are my daily tools — reliability is the outcome.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group relative rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold shadow-[var(--shadow-cyan)] hover:shadow-[var(--shadow-glow)] transition-shadow"
              >
                Book an interview →
              </a>
              <a
                href="#experience"
                className="rounded-full border border-border bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                See the work
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[420px] sm:h-[500px] lg:h-[560px] hidden sm:block"
          >
            <div
              className="absolute inset-6 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: "var(--gradient-text)" }}
            />
            <HeroScene />

          </motion.div>
        </div>
      </section>


      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About"
        title={<>Cloud-native by craft.<br />Reliability by obsession.</>}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a DevOps consultant and cloud specialist based in Munich, with{" "}
              <span className="text-foreground">8+ years</span> designing and running
              production infrastructure for SaaS, education and enterprise platforms
              across Europe, the UAE and South Asia.
            </p>
            <p>
              I've moved monoliths onto Kubernetes, cut deploy times by 60%, migrated
              enterprise Azure estates, and built CI/CD pipelines that engineering
              teams actually enjoy using. I care about the boring parts — SLOs,
              rollbacks, cost, on-call sanity — because that's where great products
              are quietly held up.
            </p>
            <p>
              I hold an <span className="text-foreground">MS in Information Security</span>{" "}
              from NED University and I'm an{" "}
              <span className="text-foreground">AWS Community Builder</span>.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 space-y-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Based in
              </div>
              <div className="mt-1 font-display text-xl">Munich, Bavaria 🇩🇪</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <div className="mt-1 font-display text-xl">Senior DevOps Engineer @ IU</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Open to
              </div>
              <div className="mt-1 font-display text-xl">Senior · Staff · Lead roles</div>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        eyebrow="The Stack"
        title={<>Tools I <span className="text-gradient">reach for</span> before coffee.</>}
        intro="A pragmatic, battle-tested toolchain for building and running modern cloud platforms."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden hover:border-white/20 transition-colors"
            >
              <div
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity"
                style={{
                  background:
                    g.color === "cyan" ? "var(--cyan)" : "var(--violet)",
                }}
              />
              <div className="relative">
                <div
                  className="font-mono text-xs uppercase tracking-widest mb-3"
                  style={{
                    color: g.color === "cyan" ? "var(--cyan)" : "var(--violet)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} / {g.title}
                </div>
                <ul className="space-y-2 text-foreground/90">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm">
                      <span className="text-muted-foreground">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        eyebrow="Experience"
        title={<>A timeline of <span className="text-gradient">shipped systems</span>.</>}
        intro="From ISP data centers to global cloud platforms — a decade of hands-on infrastructure."
      >
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/60 via-violet/40 to-transparent" />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.role + e.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 ? "md:[&>*:first-child]:col-start-2" : ""
                }`}
              >
                <div
                  className={`relative pl-12 md:pl-0 ${
                    i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 md:left-auto top-2 h-3 w-3 rounded-full bg-cyan shadow-[0_0_20px_var(--cyan)] ${
                      i % 2 ? "md:-left-[7px]" : "md:-right-[7px]"
                    }`}
                  />
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {e.period}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {e.role}
                  </h3>
                  <div className="text-cyan">{e.company}</div>
                </div>
                <div className={`mt-4 md:mt-0 pl-12 md:pl-0 ${i % 2 ? "" : ""}`}>
                  <ul className="glass rounded-2xl p-5 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-violet">◆</span>
                        <span className="text-foreground/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        id="certifications"
        eyebrow="Credentials"
        title={<>Certified where it <span className="text-gradient">counts</span>.</>}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card p-5 hover:border-cyan/50 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-cyan mb-2">
                Cert {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-base font-medium leading-snug">
                {c}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
              Let's build
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              Have a platform that needs to <span className="text-gradient">scale, ship, and stay up</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm open to Senior, Staff and Lead DevOps / Platform Engineering roles in
              Munich, across the EU, and remote. Reach out — I reply fast.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:waq.ahmed01@gmail.com"
                className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold shadow-[var(--shadow-cyan)] hover:shadow-[var(--shadow-glow)] transition-shadow"
              >
                waq.ahmed01@gmail.com
              </a>
              <a
                href="tel:+491639297406"
                className="rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                +49 163 929 7406
              </a>
              <a
                href="https://www.linkedin.com/in/waqas-ahmed-tech-expert"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Waqas Ahmed · Built with obsession in Munich.</div>
          <div className="font-mono text-xs">DevOps · Cloud · Kubernetes · Terraform</div>
        </div>
      </footer>
    </div>
  );
}
