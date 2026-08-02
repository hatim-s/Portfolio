import {
  FiArrowDown,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import MemoryGarden from "./components/MemoryGarden";
import resume from "./assets/docs/Resume_Hatim Shakir.pdf";
import trunkPlate from "./assets/memory-garden/mycelial-trunk.jpg";
import { archive, contributionMonths, projects, unifyAreas } from "./data/portfolio";
import "./App.css";

const contributionMax = Math.max(...contributionMonths.map(([, value]) => value));

const SeedMark = ({ open = false }: { open?: boolean }) => (
  <svg className={open ? "seed-mark seed-mark-open" : "seed-mark"} viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 56C16 47 12 34 17 22 21 12 31 7 32 7c1 0 11 5 15 15 5 12 1 25-15 34Z" />
    <path d="M32 50V19M32 34c-6-1-10-4-13-9M32 40c7-1 11-5 14-10" />
  </svg>
);

const SeasonalCanopy = () => {
  const center = 210;
  const inner = 72;

  return (
    <div className="canopy-study">
      <svg viewBox="0 0 420 420" role="img" aria-labelledby="canopy-title canopy-desc">
        <title id="canopy-title">A seasonal canopy of GitHub contributions</title>
        <desc id="canopy-desc">Thirteen monthly contribution slices from August 2025 through August 2026, square-root scaled.</desc>
        <g className="canopy-rings" aria-hidden="true">
          {[52, 88, 126, 166].map((radius) => <circle key={radius} cx={center} cy={center} r={radius} />)}
        </g>
        <g className="canopy-branches" aria-hidden="true">
          {contributionMonths.map(([month, value], index) => {
            const angle = -Math.PI / 2 + (index / contributionMonths.length) * Math.PI * 2;
            const reach = 94 + Math.sqrt(value / contributionMax) * 100;
            const x1 = center + Math.cos(angle) * inner;
            const y1 = center + Math.sin(angle) * inner;
            const x2 = center + Math.cos(angle) * reach;
            const y2 = center + Math.sin(angle) * reach;
            return (
              <g key={month}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} />
                <circle className={value > 1000 ? "canopy-node canopy-node-ember" : "canopy-node"} cx={x2} cy={y2} r={value > 1000 ? 7 : 4} />
              </g>
            );
          })}
        </g>
        <g className="canopy-core" aria-hidden="true">
          <circle cx={center} cy={center} r="45" />
          <path d="M210 238V183m0 15-19-13m19 27 22-16m-22 31-14 10" />
        </g>
      </svg>
      <ol className="canopy-legend" aria-label="Monthly calendar-day contributions">
        {contributionMonths.map(([month, value]) => (
          <li key={month}><span>{month}</span><strong>{value.toLocaleString()}</strong></li>
        ))}
      </ol>
    </div>
  );
};

const App = () => {
  return (
    <div className="garden-shell">
      <a className="skip-link" href="#main-content">Skip to the garden</a>

      <header className="garden-header">
        <a className="garden-brand" href="#top" aria-label="Hatim Shakir, home">
          <SeedMark />
          <span>Hatim Shakir</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#roots">Roots</a>
          <a href="#projects">Seed archive</a>
          <a href="#seasons">Seasons</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="mailto:hatimcodes@gmail.com">
          Start a conversation <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="garden-hero" id="top" aria-labelledby="hero-title">
          <img className="garden-trunk-plate" src={trunkPlate} alt="" aria-hidden="true" />
          <MemoryGarden />
          <div className="hero-membrane" aria-hidden="true" />
          <div className="hero-copy">
            <h1 id="hero-title"><span>Hatim</span><span>Shakir</span></h1>
            <p className="hero-role">I grow intelligent products from the roots up.</p>
            <p className="hero-intro">
              Software engineer across AI-native products, enterprise workflow platforms,
              developer tools, and the state, schema, runtime, and release contracts that keep them alive.
            </p>
            <a className="seed-action" href="#projects">
              <SeedMark open />
              <span>Enter the seed archive</span>
              <FiArrowDown aria-hidden="true" />
            </a>
          </div>

          <dl className="signal-roots" aria-label="Authenticated GitHub activity from August 2025 to August 2026">
            <div><dt>Contributions</dt><dd>4,176</dd></div>
            <div><dt>Active days</dt><dd>345</dd></div>
            <div><dt>Longest streak</dt><dd>97 days</dd></div>
            <div><dt>Private / restricted</dt><dd>3,954</dd></div>
          </dl>

          <p className="hero-method">Authenticated snapshot · 02 Aug 2025—02 Aug 2026</p>
        </section>

        <section className="roots-section" id="roots" aria-labelledby="roots-title">
          <header className="chapter-heading">
            <h2 id="roots-title">The visible product is only the canopy.</h2>
            <p>
              At UnifyApps, my contribution pattern runs through the entire living system—from how an agent
              shapes a workflow to how that workflow validates, renders, and reaches UAT and live.
            </p>
          </header>

          <article className="unify-root-system">
            <div className="root-heart">
              <h3>UnifyApps</h3>
              <span>2025—Now</span>
              <p>Software Engineer · Enterprise AI platform</p>
              <strong>At least 1,000 authored PRs surfaced in accessible history</strong>
            </div>
            <div className="root-branches">
              {unifyAreas.map((area) => (
                <article className="root-branch" key={area.title}>
                  <h4>{area.title}</h4>
                  <span className="root-signal">{area.signal}</span>
                  <p>{area.description}</p>
                  <p className="root-evidence">{area.evidence}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="salesforce-tissue">
            <div>
              <h3>Salesforce</h3>
              <span>May—July 2023 · Hyderabad</span>
            </div>
            <div>
              <h4>Software Engineering Intern · Lightning Web Security</h4>
              <p>Built LWS Copilot, a VS Code refactoring tool that used generative AI to help developers move code toward Lightning Web Security compliance.</p>
            </div>
          </article>
        </section>

        <section className="seed-archive" id="projects" aria-labelledby="projects-title">
          <header className="archive-heading">
            <h2 id="projects-title">Every project begins as a compact memory of a larger system.</h2>
            <p>
              Specimens are ordered by creation date, newest first. Public repositories open outward;
              private builds reveal the product and architecture without pretending the source is public.
            </p>
          </header>

          <div className="specimen-list">
            {projects.map((project, index) => (
              <article className="seed-specimen" key={project.name}>
                <div className="specimen-seed" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <SeedMark />
                </div>
                <div className="specimen-date">
                  <time dateTime={project.date}>{project.date}</time>
                  <span>{project.access}</span>
                </div>
                <div className="specimen-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="specimen-links">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      Source <FiGithub aria-hidden="true" /><span className="sr-only"> for {project.name}</span>
                    </a>
                  ) : (
                    <span>Private <FiLock aria-hidden="true" /></span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> site for {project.name}</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="archive-rhizome">
            <h3>Earlier rootstock</h3>
            <ul>
              {archive.map(([date, name, description, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <time dateTime={date}>{date.slice(0, 4)}</time>
                    <strong>{name}</strong>
                    <span>{description}</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="seasons-section" id="seasons" aria-labelledby="seasons-title">
          <div className="season-copy">
            <h2 id="seasons-title">A year leaves rings, not just a streak.</h2>
            <p>
              The authenticated snapshot records 4,176 contributions across 345 active days, with a 97-day
              longest streak. Most activity is private enterprise work and private product building, so the public profile shows only the outer bark.
            </p>
            <p className="methodology">
              Thirteen slices include two partial boundary months. Ring reach uses square-root scaling.
              GraphQL total: 4,176; calendar-day sum: 4,174. Private / restricted signal: 3,954.
            </p>
          </div>
          <SeasonalCanopy />
        </section>

        <section className="practice-section" aria-labelledby="practice-title">
          <h2 id="practice-title">The same tissues recur at every scale.</h2>
          <div className="practice-tissues">
            <p><strong>State</strong><span>Fine-grained stores, operation logs, collaboration, and resilient transitions.</span></p>
            <p><strong>Agents</strong><span>Planning, knowledge, tools, evaluation, and the boundaries that make action trustworthy.</span></p>
            <p><strong>Surfaces</strong><span>Product interfaces, design-system primitives, spatial flows, and accessible interaction.</span></p>
            <p><strong>Delivery</strong><span>Schemas, validation, release contracts, observability, and environments that hold.</span></p>
          </div>
        </section>

        <section className="contact-clearing" id="contact" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Bring a hard system. We’ll find where it wants to grow.</h2>
            <p>Especially one where product, data, agents, and interface refuse to stay in separate boxes.</p>
          </div>
          <nav className="contact-vines" aria-label="Contact and profile links">
            <a href="mailto:hatimcodes@gmail.com"><FiMail aria-hidden="true" /> Email Hatim</a>
            <a href={resume} target="_blank" rel="noreferrer"><FiFileText aria-hidden="true" /> Read résumé</a>
            <a href="https://github.com/hatim-s" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/hatim-s/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href="https://leetcode.com/hatimcodes/" target="_blank" rel="noreferrer"><SiLeetcode aria-hidden="true" /> LeetCode</a>
          </nav>
        </section>
      </main>

      <footer className="garden-footer">
        <SeedMark />
        <p>Hatim Shakir · Software engineer</p>
        <p>Built with React, TypeScript, and a living canvas organism.</p>
      </footer>
    </div>
  );
};

export default App;
