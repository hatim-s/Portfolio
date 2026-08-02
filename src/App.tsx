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

const PaperPlane = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 720 420"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path className="plane-underprint plane-underprint-cyan" d="M28 168 680 27 474 376 338 246 28 168Z" />
    <path className="plane-underprint plane-underprint-magenta" d="M42 186 692 43 489 392 352 263 42 186Z" />
    <path className="plane-paper" d="M22 154 674 14 469 362 331 233 22 154Z" />
    <path className="plane-fold" d="m22 154 309 79L674 14 381 274l88 88-138-129" />
    <path className="plane-screen" d="m331 233 143 137-5-8L674 14 331 233Z" />
  </svg>
);

const FilmPerforations = () => (
  <div className="film-perforations" aria-hidden="true">
    {Array.from({ length: 24 }, (_, index) => <i key={index} />)}
  </div>
);

const App = () => {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to the work</a>

      <header className="site-header">
        <FilmPerforations />
        <a className="brand-mark" href="#top" aria-label="Hatim Shakir, home">
          HS<span>／CUT 26</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Dossier</a>
          <a href="#projects">Pictures</a>
          <a href="#signal">Contact sheet</a>
          <a href="#contact">Credits</a>
        </nav>
        <a className="header-mail" href="mailto:hatimcodes@gmail.com">
          Start a conversation <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-black">
            <div className="leader-code" aria-hidden="true">
              ROLL 26 · SCENE 001 · TAKE 07
            </div>
            <h1 id="hero-title">
              <span className="name-strip name-strip-one">Hatim</span>
              <span className="name-strip name-strip-two">Shakir</span>
            </h1>
            <p className="hero-thesis">
              I direct complex systems from first state to final frame.
            </p>
            <p className="hero-intro">
              AI-native products, enterprise workflow platforms, developer tools,
              and the contracts beneath them—designed to reason, react, and ship.
            </p>
            <a className="primary-action" href="#projects">
              Cut to the projects <FiArrowDownRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-yellow" aria-hidden="true">
            <div className="hero-note">ENGINEERING IS A MOVING PICTURE.</div>
            <div className="registration-mark registration-mark-a" />
            <div className="registration-mark registration-mark-b" />
            <PaperPlane className="hero-plane" />
            <div className="flight-line" />
          </div>

          <dl className="hero-readouts" aria-label="GitHub activity from August 2025 to August 2026">
            <div>
              <dt>Contributions</dt>
              <dd>4,176</dd>
              <span aria-hidden="true">TC 00:04:17:06</span>
            </div>
            <div>
              <dt>Active days</dt>
              <dd>345</dd>
              <span aria-hidden="true">FRAME 345</span>
            </div>
            <div>
              <dt>Longest streak</dt>
              <dd>97 days</dd>
              <span aria-hidden="true">CONTINUOUS TAKE</span>
            </div>
            <div>
              <dt>Private / restricted</dt>
              <dd>3,954</dd>
              <span aria-hidden="true">SOURCE WITHHELD</span>
            </div>
          </dl>

          <div className="hero-leader" aria-hidden="true">
            <FilmPerforations />
            <span>OPENING TITLE</span><span>DIRECTOR / ENGINEER</span><span>02 AUG 2026</span>
          </div>
        </section>

        <section className="experience-section paper-surface" id="experience" aria-labelledby="experience-title">
          <header className="section-heading dossier-heading">
            <h2 id="experience-title">The work behind the blackout.</h2>
            <p>
              Public evidence shows a wide ownership surface. Private implementation
              stays private; the recurring product and delivery patterns remain visible.
            </p>
          </header>

          <article className="unify-dossier">
            <div className="dossier-cover">
              <div className="dossier-clip" aria-hidden="true" />
              <p className="dossier-file">UA / FILE 2025—NOW</p>
              <h3>UnifyApps</h3>
              <p className="dossier-role">Software Engineer · Enterprise AI platform</p>
              <p className="dossier-summary">
                At least a thousand authored pull requests surfaced in the latest
                accessible history. The pattern points to ownership across the product
                loop—from how an AI agent shapes a workflow to how that workflow
                validates, renders, and reaches UAT and live.
              </p>
              <div className="redaction-stack" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
              <span className="dossier-stamp">EVIDENCE / NOT EXPOSURE</span>
            </div>

            <div className="ownership-scenes">
              {unifyAreas.map((area, index) => (
                <article className={`ownership-scene ownership-scene-${index + 1}`} key={area.title}>
                  <div className="scene-tab" aria-hidden="true">REEL {String(index + 1).padStart(2, "0")}</div>
                  <h4>{area.title}</h4>
                  <p className="ownership-signal">{area.signal}</p>
                  <p>{area.description}</p>
                  <p className="evidence-line"><span>Evidence</span>{area.evidence}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="salesforce-strip">
            <div className="salesforce-title">
              <span>PREVIOUS PRODUCTION</span>
              <h3>Salesforce</h3>
            </div>
            <p className="salesforce-role">
              Software Engineering Intern · Lightning Web Security<br />May—July 2023 · Hyderabad
            </p>
            <p>
              Built LWS Copilot, a VS Code refactoring tool that used generative AI
              to help developers move code toward Lightning Web Security compliance.
            </p>
          </article>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="projects-title-field">
            <h2 id="projects-title">Eleven pictures. Newest cut first.</h2>
            <p>
              Each product is treated as its own production—not another interchangeable
              tile. Public source opens outward; private builds disclose only their real
              product and architecture.
            </p>
            <span aria-hidden="true">PROGRAMME / 2026—2025</span>
          </div>

          <div className="project-programme">
            {projects.map((project, index) => (
              <article className={`project-poster poster-${(index % 5) + 1}`} key={project.name}>
                <div className="poster-frame" aria-hidden="true">
                  <span>SCENE {String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                  <span>24 FPS</span>
                </div>
                <div className="poster-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="poster-copy">
                  <time dateTime={project.date}>{project.date}</time>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="poster-architecture">
                  <span className="access-stamp">{project.access}</span>
                  <ul aria-label={`${project.name} technology sequence`}>
                    {project.stack.map((item, itemIndex) => (
                      <li key={item}>
                        <span aria-hidden="true">{String.fromCharCode(65 + itemIndex)}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="poster-actions">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      Source <FiGithub aria-hidden="true" />
                      <span className="sr-only"> for {project.name}</span>
                    </a>
                  ) : (
                    <span className="private-action">
                      Source private <FiLock aria-hidden="true" />
                    </span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Open live <FiArrowUpRight aria-hidden="true" />
                      <span className="sr-only"> {project.name}</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="archive-reel">
            <div className="archive-title">
              <h3>Earlier systems / archive reel</h3>
              <p>Operating systems, compilers, databases, networking, simulation, and the web.</p>
            </div>
            <div className="archive-timeline">
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

        <section className="signal-section" id="signal" aria-labelledby="signal-title">
          <header className="signal-heading">
            <h2 id="signal-title">A year, cut into contact frames.</h2>
            <p>
              The authenticated snapshot records 4,176 contributions across 345 active
              days. Most activity is private—enterprise work and private product builds—
              so the public profile only shows the edge of the reel.
            </p>
          </header>

          <ol className="contact-sheet" aria-label="Calendar-day contributions by month, square-root scale">
            {contributionMonths.map(([month, value], index) => (
              <li className="contact-frame" key={month}>
                <div className="contact-timecode" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>TC {String(value).padStart(4, "0")}</span>
                </div>
                <div className="contact-exposure">
                  <span
                    style={{ height: `${Math.max(7, Math.sqrt(value / contributionMax) * 100)}%` }}
                    aria-hidden="true"
                  />
                  <strong>{value}</strong>
                </div>
                <span className="contact-month">{month}</span>
              </li>
            ))}
          </ol>

          <div className="signal-method">
            <p>Snapshot: 02 Aug 2025—02 Aug 2026</p>
            <p>
              Thirteen slices include two partial boundary months. Bar height uses
              square-root scaling. GraphQL total: 4,176; calendar-day frames: 4,174.
            </p>
            <a href="https://github.com/hatim-s" target="_blank" rel="noreferrer">
              Inspect the public edge <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="contact-section paper-surface" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Bring a hard system. I’ll bring the edit.</h2>
          <p>
            Especially one where product, data, agents, and interface refuse to stay
            in separate boxes.
          </p>
          <div className="closing-mark" aria-hidden="true">THE END / BEGIN AGAIN</div>
          <div className="contact-actions">
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
        </section>
      </main>

      <footer>
        <FilmPerforations />
        <p>Hatim Shakir · Software engineer · Hyderabad, India</p>
        <p>React, TypeScript, and every frame directed by hand.</p>
      </footer>
    </div>
  );
};

export default App;
