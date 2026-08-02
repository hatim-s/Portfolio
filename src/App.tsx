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
import resume from "./assets/docs/Resume_Hatim Shakir.pdf";
import {
  archive,
  contributionMonths,
  projects,
  unifyAreas,
} from "./data/portfolio";
import "./App.css";

const contributionMax = Math.max(...contributionMonths.map(([, value]) => value));

const RegistrationMark = ({ className = "" }: { className?: string }) => (
  <span className={`registration-mark ${className}`} aria-hidden="true">
    <i />
  </span>
);

const App = () => {
  return (
    <div className="press-shell">
      <a className="skip-link" href="#main-content">
        Skip to the dossier
      </a>

      <header className="press-header">
        <a className="press-brand" href="#top" aria-label="Hatim Shakir, home">
          <span>Signal</span> Press
        </a>
        <p className="press-edition">Independent engineering dossier · Vol. 26</p>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#signal">Activity</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="cover" id="top" aria-labelledby="cover-title">
          <div className="crop crop-nw" aria-hidden="true" />
          <div className="crop crop-ne" aria-hidden="true" />
          <div className="crop crop-sw" aria-hidden="true" />
          <div className="crop crop-se" aria-hidden="true" />
          <RegistrationMark className="cover-register" />

          <div className="cover-folio" aria-hidden="true">
            <span>01</span>
            <span>PRINT / 08.02.26</span>
          </div>

          <div className="cover-lead">
            <p className="issue-ticket">Issue 001 · Systems with consequence</p>
            <h1 id="cover-title" aria-label="Hatim Shakir">
              <span className="press-line press-line-hatim" data-word="HATIM">
                HATIM
              </span>
              <span className="press-line press-line-shakir" data-word="SHAKIR">
                SHAKIR
              </span>
            </h1>

            <div className="cover-deck">
              <p className="cover-role">
                Software engineer for systems that reason, react, and ship.
              </p>
              <p className="cover-intro">
                I work across AI-native products, enterprise workflow platforms,
                developer tools, and the contracts beneath them—state, schemas,
                runtimes, and release paths included.
              </p>
              <a className="ink-action" href="#projects">
                Read the work <FiArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="proof-column" aria-label="Verified GitHub activity from August 2025 to August 2026">
            <p className="proof-slug">Authenticated edition / one year</p>
            <dl>
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
                <dd>97 <small>days</small></dd>
              </div>
              <div>
                <dt>Private signal</dt>
                <dd>3,954</dd>
              </div>
            </dl>
            <p className="proof-note">
              Public profile activity reveals only the edge. Restricted work is
              included in the authenticated total, never fabricated into public links.
            </p>
          </aside>

          <div className="cover-strip" aria-hidden="true">
            <span>AI systems</span>
            <span>Workflow intelligence</span>
            <span>Platform architecture</span>
            <span>Developer tools</span>
          </div>
        </section>

        <section className="centerfold" id="experience" aria-labelledby="experience-title">
          <header className="section-masthead">
            <span className="folio-number" aria-hidden="true">02</span>
            <h2 id="experience-title">The work behind the interface.</h2>
            <p>
              The contribution history is unusually concentrated: the core web
              platform, AI runtime and workflow tooling, then the schema and release
              contracts that make the experience real.
            </p>
            <p className="vertical-caption" aria-hidden="true">Investigative centerfold · ownership in evidence</p>
          </header>

          <article className="unify-centerfold">
            <header className="unify-headline">
              <div>
                <p className="company-line">UnifyApps · 2025—Now</p>
                <h3>Software engineer across the whole product loop.</h3>
              </div>
              <p className="unify-summary">
                At least a thousand authored pull requests surfaced in the latest
                accessible history. The pattern points to ownership from how an AI
                agent shapes a workflow to how that workflow validates, renders, and
                reaches UAT and live.
              </p>
            </header>

            <div className="ownership-features">
              {unifyAreas.map((area, index) => (
                <article className={`ownership-feature ownership-feature-${index + 1}`} key={area.title}>
                  <p className="feature-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="feature-copy">
                    <p className="feature-signal">{area.signal}</p>
                    <h4>{area.title}</h4>
                    <p>{area.description}</p>
                  </div>
                  <p className="proof-pull">{area.evidence}</p>
                </article>
              ))}
            </div>

            <div className="centerfold-proof" aria-label="UnifyApps ownership summary">
              <p><strong>01</strong> Workflow module + llm-tools</p>
              <p><strong>02</strong> AI workers + Copilot blocks</p>
              <p><strong>03</strong> Carbon + Blocks systems</p>
              <p><strong>04</strong> WWW + UACode + builder knowledge</p>
              <RegistrationMark />
            </div>
          </article>

          <article className="salesforce-insert">
            <div className="insert-label">Earlier edition / Internship</div>
            <div>
              <p className="company-line">Salesforce · May—July 2023 · Hyderabad</p>
              <h3>Software Engineering Intern · Lightning Web Security</h3>
            </div>
            <p>
              Built LWS Copilot, a VS Code refactoring tool that used generative AI
              to help developers move code toward Lightning Web Security compliance.
            </p>
            <span className="insert-tab" aria-hidden="true">LWS</span>
          </article>
        </section>

        <section className="features" id="projects" aria-labelledby="projects-title">
          <header className="features-head">
            <div>
              <span className="folio-number" aria-hidden="true">03</span>
              <h2 id="projects-title">Collectible systems, newest issue first.</h2>
            </div>
            <p>
              Public repositories open outward. Private builds disclose the product
              and architecture without pretending their source is public.
            </p>
          </header>

          <div className="feature-run">
            {projects.map((project, index) => (
              <article className={`project-feature project-feature-${(index % 4) + 1}`} key={project.name}>
                <div className="feature-folio" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-title-block">
                  <p className="project-date">
                    <time dateTime={project.date}>{project.date}</time>
                    <span>{project.access}</span>
                  </p>
                  <h3>{project.name}</h3>
                </div>
                <div className="project-story">
                  <p>{project.description}</p>
                  <ul aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="project-actions">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      <FiGithub aria-hidden="true" /> Source
                      <span className="sr-only"> for {project.name}</span>
                    </a>
                  ) : (
                    <span><FiLock aria-hidden="true" /> Private build</span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <FiArrowUpRight aria-hidden="true" />
                      <span className="sr-only"> {project.name}</span>
                    </a>
                  )}
                </div>
                <p className="side-caption" aria-hidden="true">Feature / {String(index + 1).padStart(2, "0")}</p>
              </article>
            ))}
          </div>

          <section className="archive-contents" aria-labelledby="archive-title">
            <div>
              <p>Back issues / 2022—2024</p>
              <h3 id="archive-title">Earlier systems, still in print.</h3>
            </div>
            <ol>
              {archive.map(([date, name, description, url], index) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <time dateTime={date}>{date.slice(0, 4)}</time>
                    <strong>{name}</strong>
                    <em>{description}</em>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>

        <section className="signal-poster" id="signal" aria-labelledby="signal-title">
          <RegistrationMark className="signal-register" />
          <header>
            <span className="folio-number" aria-hidden="true">04</span>
            <div>
              <h2 id="signal-title">The graph is a working rhythm.</h2>
              <p>
                A one-year authenticated snapshot shows 4,176 contributions across
                345 active days. Most activity is private—enterprise work and private
                product builds—so the public profile only shows the edge of the field.
              </p>
            </div>
          </header>

          <div className="poster-total" aria-hidden="true">
            <span data-number="4,176">4,176</span>
            <small>Authenticated contributions</small>
          </div>

          <ol className="poster-chart" aria-label="Calendar-day contributions by month, square-root scale">
            {contributionMonths.map(([month, value], index) => (
              <li key={month} style={{ "--bar": `${Math.max(4, Math.sqrt(value / contributionMax) * 100)}%`, "--i": index } as React.CSSProperties}>
                <span className="bar-value">{value}</span>
                <div className="bar-track"><span aria-hidden="true" /></div>
                <span className="bar-month">{month}</span>
              </li>
            ))}
          </ol>

          <footer className="poster-method">
            <p>Snapshot: 02 Aug 2025—02 Aug 2026</p>
            <p>
              Thirteen slices include two partial boundary months. Bar height uses
              square-root scaling. GraphQL total: 4,176; calendar-day bars: 4,174.
            </p>
          </footer>
        </section>

        <section className="press-close" id="contact" aria-labelledby="contact-title">
          <div className="close-copy">
            <span className="folio-number" aria-hidden="true">05</span>
            <h2 id="contact-title">Bring a hard system.</h2>
            <p>
              Especially one where product, data, agents, and interface refuse to
              stay in separate boxes.
            </p>
          </div>
          <div className="contact-plates">
            <a className="contact-primary" href="mailto:hatimcodes@gmail.com">
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
          <p className="close-word" aria-hidden="true">PRESS</p>
        </section>
      </main>

      <footer className="press-footer">
        <p>Hatim Shakir · Software engineer</p>
        <p>React + TypeScript · Printed fresh in the browser</p>
        <a href="#top">Back to cover</a>
      </footer>
    </div>
  );
};

export default App;
