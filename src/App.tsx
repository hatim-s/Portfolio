import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import EventChamber from "./components/EventChamber";
import resume from "./assets/docs/Resume_Hatim Shakir.pdf";
import detectorAsset from "./assets/event-chamber-detector.jpg";
import {
  archive,
  contributionMonths,
  projects,
  unifyAreas,
} from "./data/portfolio";
import "./App.css";

const contributionMax = Math.max(...contributionMonths.map(([, value]) => value));

const App = () => {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to work
      </a>

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Hatim Shakir, home">
          HS<span>/26</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience"><span>02</span> Experience</a>
          <a href="#projects"><span>03</span> Projects</a>
          <a href="#signal"><span>04</span> Signal</a>
          <a href="#contact"><span>05</span> Contact</a>
        </nav>
        <a className="header-mail" href="mailto:hatimcodes@gmail.com">
          Available for a good problem <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <nav className="hero-ruler" aria-label="Event recorder index">
            <a href="#top" aria-current="page"><span>01</span><i aria-hidden="true" /> Home</a>
            <a href="#experience"><span>02</span><i aria-hidden="true" /> About</a>
            <a href="#projects"><span>03</span><i aria-hidden="true" /> Work</a>
            <a href="#signal"><span>04</span><i aria-hidden="true" /> Signal</a>
            <a href="#contact"><span>05</span><i aria-hidden="true" /> Info</a>
          </nav>

          <div className="hero-copy">
            <h1 id="hero-title">
              <span>Hatim</span>
              <span>Shakir</span>
            </h1>
            <p className="hero-role">Software engineer for systems that reason, react, and ship.</p>
            <p className="hero-intro">
              I work across AI-native products, enterprise workflow platforms,
              developer tools, and the contracts beneath them—state, schemas,
              runtimes, and release paths included.
            </p>
            <a className="primary-action" href="#projects">
              Enter the work <FiArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className="chamber-wrap">
            <img
              className="chamber-plate"
              src={detectorAsset}
              alt=""
              aria-hidden="true"
              decoding="async"
            />
            <EventChamber className="event-chamber" />
            <div className="chamber-frame" aria-hidden="true" />
            <div className="chamber-label chamber-label-a" aria-hidden="true">
              PRIVATE SIGNAL / 3954
            </div>
            <div className="chamber-label chamber-label-b" aria-hidden="true">
              JUL PEAK / 1988
            </div>
            <div className="chamber-telemetry" aria-hidden="true">
              <strong>Subsystems</strong>
              <span>TRK&nbsp;&nbsp;OK</span>
              <span>CAL&nbsp;&nbsp;OK</span>
              <span>FLOW&nbsp;OK</span>
              <span>REL&nbsp;&nbsp;OK</span>
            </div>
            <div className="event-count" aria-hidden="true">
              EVC REC <strong>0004176</strong>
            </div>
          </div>

          <dl className="hero-readouts" aria-label="GitHub activity from August 2025 to August 2026">
            <div>
              <dt>Contributions</dt>
              <dd>4,176</dd>
            </div>
            <div>
              <dt>Active days</dt>
              <dd>345</dd>
            </div>
            <div>
              <dt>Longest streak</dt>
              <dd>97 days</dd>
            </div>
            <div>
              <dt>Private signal</dt>
              <dd>3,954</dd>
            </div>
          </dl>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title" data-run="RUN / 02">
          <div className="detector-spine" aria-hidden="true"><span data-marker="02A" /><span data-marker="02B" /><span data-marker="02C" /></div>
          <div className="section-heading">
            <h2 id="experience-title">Where the signal compounds.</h2>
            <p>
              The contribution history is unusually concentrated: the core web
              platform, AI runtime and workflow tooling, then the schema and
              release contracts that make the experience real.
            </p>
          </div>

          <article className="unify-record">
            <header className="experience-header">
              <div>
                <h3><span>UnifyApps /</span> Software Engineer</h3>
              </div>
              <p className="experience-meta">2025—Now / Enterprise AI platform</p>
            </header>
            <p className="experience-summary">
              At least a thousand authored pull requests surfaced in the latest
              accessible history. The pattern points to ownership across the
              product loop—from how an AI agent shapes a workflow to how that
              workflow validates, renders, and reaches UAT and live.
            </p>

            <div className="ownership-map">
              {unifyAreas.map((area, index) => (
                <article className="ownership-band" key={area.title}>
                  <div className="ownership-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4>
                      {area.title}
                      <span>{area.signal}</span>
                    </h4>
                  </div>
                  <p>{area.description}</p>
                  <p className="evidence">{area.evidence}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="salesforce-record">
            <div>
              <h3><span>Salesforce /</span> Software Engineering Intern · Lightning Web Security</h3>
            </div>
            <p>
              Built LWS Copilot, a VS Code refactoring tool that used generative AI
              to help developers move code toward Lightning Web Security compliance.
            </p>
            <p className="experience-meta">May—July 2023 / Hyderabad</p>
          </article>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title" data-run="RUN / 03">
          <div className="detector-spine" aria-hidden="true"><span data-marker="03A" /><span data-marker="03B" /><span data-marker="03C" /></div>
          <div className="section-heading projects-heading">
            <h2 id="projects-title">Built in reverse chronological order.</h2>
            <p>
              Public repositories open outward. Private builds disclose the product
              and architecture without pretending their source is public.
            </p>
          </div>

          <div className="project-ledger">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <div className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="project-date">
                  <time dateTime={project.date}>{project.date}</time>
                  <span>{project.access}</span>
                </div>
                <div className="project-main">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      <span className="sr-only">View {project.name} </span>
                      Source <FiGithub aria-hidden="true" />
                    </a>
                  ) : (
                    <span>
                      Private <FiLock aria-hidden="true" />
                    </span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <span className="sr-only">Open {project.name} </span>
                      Live <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="archive-block">
            <h3>Earlier systems</h3>
            <div className="archive-list">
              {archive.map(([date, name, description, url]) => (
                <a href={url} target="_blank" rel="noreferrer" key={name}>
                  <time dateTime={date}>{date.slice(0, 4)}</time>
                  <strong>{name}</strong>
                  <span>{description}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="signal-section" id="signal" aria-labelledby="signal-title" data-run="RUN / 04">
          <div className="detector-spine" aria-hidden="true"><span data-marker="04A" /><span data-marker="04B" /><span data-marker="04C" /></div>
          <div className="signal-copy">
            <h2 id="signal-title">The graph is not a streak. It is a working rhythm.</h2>
            <p>
              A one-year authenticated snapshot shows 4,176 contributions across
              345 active days. Most activity is private—enterprise work and private
              product builds—so the public profile only shows the edge of the field.
            </p>
            <p className="signal-period">Snapshot: 02 Aug 2025—02 Aug 2026</p>
            <p className="signal-method">
              Thirteen slices include two partial boundary months. Bar height uses
              square-root scaling. GraphQL total: 4,176; calendar-day bars: 4,174.
            </p>
          </div>

          <ol className="signal-chart" aria-label="Calendar-day contributions by month, square-root scale">
            {contributionMonths.map(([month, value]) => (
              <li className="signal-month" key={month}>
                <span className="signal-value">{value}</span>
                <div className="signal-track">
                  <span
                    style={{ height: `${Math.max(4, Math.sqrt(value / contributionMax) * 100)}%` }}
                    aria-hidden="true"
                  />
                </div>
                <span className="signal-name">{month}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title" data-run="RUN / 05">
          <div className="detector-spine" aria-hidden="true"><span data-marker="05A" /><span data-marker="05B" /><span data-marker="05C" /></div>
          <div>
            <h2 id="contact-title">Bring a hard system.</h2>
            <p>
              Especially one where product, data, agents, and interface refuse to
              stay in separate boxes.
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:hatimcodes@gmail.com">
              <FiMail aria-hidden="true" /> Email Hatim
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden="true" /> Read résumé
            </a>
            <a href="https://github.com/hatim-s" target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hatim-s/" target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://leetcode.com/hatimcodes/" target="_blank" rel="noreferrer">
              <SiLeetcode aria-hidden="true" /> LeetCode
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Hatim Shakir · Software engineer</p>
        <p>Built with React, TypeScript, and a suspicious amount of plotted signal.</p>
      </footer>
    </div>
  );
};

export default App;
