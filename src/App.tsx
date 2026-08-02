import { useEffect, useMemo, useRef } from "react";
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
import resume from "./assets/docs/Resume_Hatim Shakir.pdf";
import {
  archive,
  contributionMonths,
  projects,
  unifyAreas,
} from "./data/portfolio";
import "./App.css";

const contributionMax = Math.max(...contributionMonths.map(([, value]) => value));

const ObservatoryMark = () => (
  <svg viewBox="0 0 42 42" aria-hidden="true">
    <path d="M3 21h36M21 3v36" />
    <path d="M8 8h9v9H8zM25 25h9v9h-9z" />
  </svg>
);

const App = () => {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const updateLight = () => {
      frame = 0;
      const shift = Math.min(window.scrollY * 0.055, 48);
      shell.style.setProperty("--light-shift", `${shift}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateLight);
    };

    updateLight();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const sundialRays = useMemo(
    () =>
      contributionMonths.map(([month, value], index) => {
        const angle = -72 + (144 / (contributionMonths.length - 1)) * index;
        const radians = (angle * Math.PI) / 180;
        const magnitude = 74 + Math.sqrt(value / contributionMax) * 168;
        const x2 = 320 + Math.sin(radians) * magnitude;
        const y2 = 292 - Math.cos(radians) * magnitude;
        const labelRadius = 264;
        const labelX = 320 + Math.sin(radians) * labelRadius;
        const labelY = 292 - Math.cos(radians) * labelRadius;
        return { month, value, x2, y2, labelX, labelY };
      }),
    [],
  );

  return (
    <div className="observatory" ref={shellRef}>
      <a className="skip-link" href="#main-content">
        Skip to the work
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hatim Shakir, top of page">
          <ObservatoryMark />
          <span>Hatim Shakir</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#signal">Signal</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href={resume} target="_blank" rel="noreferrer">
          Résumé <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="atrium" id="top" aria-labelledby="hero-title">
          <div className="level-index" aria-label="Page levels">
            <span>Roof <b>+04</b></span>
            <span>Experience <b>+03</b></span>
            <span>Projects <b>+02</b></span>
            <span>Signal <b>+01</b></span>
            <span className="level-active">Entry <b>00</b></span>
            <span>Contact <b>−01</b></span>
          </div>

          <div className="atrium-wall">
            <h1 id="hero-title">
              <span>Hatim</span>
              <span>Shakir</span>
            </h1>
            <p className="hero-intro">
              <strong>Software engineer / systems architect.</strong>
              I build AI-native products, enterprise workflow platforms, developer
              tools, and the contracts beneath them—state, schemas, runtimes, and
              release paths included.
            </p>
          </div>

          <div className="light-well" aria-hidden="true">
            <div className="light-aperture" />
            <div className="light-column" />
            <span>28.6139° N</span>
            <span>77.2090° E</span>
          </div>

          <a className="threshold" href="#projects">
            <span>Cross the threshold</span>
            <FiArrowDown aria-hidden="true" />
          </a>

          <dl className="brass-datum" aria-label="Authenticated GitHub activity, 2 August 2025 to 2 August 2026">
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
              <dt>Private / restricted</dt>
              <dd>3,954</dd>
            </div>
          </dl>
        </section>

        <section className="core-chamber" id="experience" aria-labelledby="experience-title" data-chamber>
          <header className="chamber-heading">
            <h2 id="experience-title">The load-bearing core.</h2>
            <p>
              At UnifyApps, ownership spans the product loop: how an agent shapes a
              workflow, how that workflow validates and renders, and how it reaches
              UAT and live without losing its contract.
            </p>
          </header>

          <article className="unify-core">
            <div className="core-identity">
              <span>2025—Now</span>
              <h3>UnifyApps</h3>
              <p>Software Engineer / Enterprise AI platform</p>
              <p className="ownership-note">
                At least a thousand authored pull requests surfaced in the latest
                accessible history. The structure below reflects repeated,
                main-reachable contribution patterns—not invented org boundaries.
              </p>
            </div>

            <div className="service-shaft" aria-label="UnifyApps ownership areas">
              <div className="shaft-line" aria-hidden="true">
                <span />
              </div>
              {unifyAreas.map((area, index) => (
                <article className="core-floor" key={area.title}>
                  <div className="floor-number" aria-hidden="true">
                    +0{4 - index}
                  </div>
                  <div className="floor-title">
                    <h4>{area.title}</h4>
                    <span>{area.signal}</span>
                  </div>
                  <p>{area.description}</p>
                  <p className="floor-evidence">{area.evidence}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="salesforce-annex">
            <div className="annex-mark" aria-hidden="true">SF</div>
            <div>
              <span>May—July 2023 / Hyderabad</span>
              <h3>Salesforce</h3>
              <p>Software Engineering Intern · Lightning Web Security</p>
            </div>
            <p>
              Built LWS Copilot, a VS Code refactoring tool that used generative AI
              to help developers move code toward Lightning Web Security compliance.
            </p>
          </article>
        </section>

        <section className="project-chamber" id="projects" aria-labelledby="projects-title" data-chamber>
          <header className="project-intro">
            <h2 id="projects-title">Eleven pavilions. One evolving practice.</h2>
            <p>
              Newest first. Public repositories open outward; private builds reveal
              product and architecture without pretending their source is public.
            </p>
          </header>

          <div className="pavilion-sequence">
            {projects.map((project, index) => (
              <article className="pavilion" key={project.name}>
                <div className="pavilion-mass" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="pavilion-date">
                  <time dateTime={project.date}>{project.date}</time>
                  <span>{project.access}</span>
                </div>
                <div className="pavilion-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="pavilion-opening">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      Source <FiGithub aria-hidden="true" />
                      <span className="sr-only"> for {project.name}</span>
                    </a>
                  ) : (
                    <span>Private <FiLock aria-hidden="true" /></span>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <FiArrowUpRight aria-hidden="true" />
                      <span className="sr-only"> version of {project.name}</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="foundation-archive">
            <div>
              <h3>Foundation archive</h3>
              <p>Operating systems, compilers, databases, data tools, and early interfaces.</p>
            </div>
            <div className="archive-register">
              {archive.map(([date, name, description, url]) => (
                <a href={url} target="_blank" rel="noreferrer" key={name}>
                  <time dateTime={date}>{date}</time>
                  <strong>{name}</strong>
                  <span>{description}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sundial-chamber" id="signal" aria-labelledby="signal-title" data-chamber>
          <div className="sundial-copy">
            <h2 id="signal-title">An engraved record of working rhythm.</h2>
            <p>
              A one-year authenticated snapshot records 4,176 contributions across
              345 active days. Most activity is private—enterprise work and private
              product builds—so the public profile reveals only the edge of the wall.
            </p>
            <dl>
              <div><dt>Window</dt><dd>02 Aug 2025—02 Aug 2026</dd></div>
              <div><dt>GraphQL total</dt><dd>4,176</dd></div>
              <div><dt>Calendar-day bars</dt><dd>4,174</dd></div>
              <div><dt>Method</dt><dd>Square-root scale; two partial boundary months</dd></div>
            </dl>
          </div>

          <figure className="sundial">
            <svg viewBox="0 0 640 340" role="img" aria-labelledby="sundial-caption">
              <path className="sundial-arc" d="M70 292 A250 250 0 0 1 570 292" />
              <path className="sundial-arc sundial-arc-inner" d="M146 292 A174 174 0 0 1 494 292" />
              <line className="sundial-horizon" x1="44" y1="292" x2="596" y2="292" />
              {sundialRays.map(({ month, value, x2, y2, labelX, labelY }) => (
                <g key={month}>
                  <line className="sundial-ray" x1="320" y1="292" x2={x2} y2={y2} />
                  <circle className="sundial-point" cx={x2} cy={y2} r="4" />
                  <text className="sundial-month" x={labelX} y={labelY}>{month}</text>
                  <title>{month}: {value} calendar-day contributions</title>
                </g>
              ))}
              <path className="sundial-gnomon" d="M320 292 L337 105 L350 292 Z" />
              <circle className="sundial-origin" cx="320" cy="292" r="8" />
            </svg>
            <figcaption id="sundial-caption">
              Monthly calendar-day contributions, August 2025 through August 2026.
            </figcaption>
            <ol className="sundial-values" aria-label="Contribution values by month">
              {contributionMonths.map(([month, value]) => (
                <li key={month}><span>{month}</span><strong>{value}</strong></li>
              ))}
            </ol>
          </figure>
        </section>

        <section className="contact-threshold" id="contact" aria-labelledby="contact-title" data-chamber>
          <div className="contact-void">
            <h2 id="contact-title">Bring a hard system.</h2>
            <p>
              Especially one where product, data, agents, and interface refuse to
              stay in separate boxes.
            </p>
          </div>
          <div className="contact-doors">
            <a href="mailto:hatimcodes@gmail.com"><FiMail aria-hidden="true" /> Email Hatim</a>
            <a href={resume} target="_blank" rel="noreferrer"><FiFileText aria-hidden="true" /> Read résumé</a>
            <a href="https://github.com/hatim-s" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/hatim-s/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
            <a href="https://leetcode.com/hatimcodes/" target="_blank" rel="noreferrer"><SiLeetcode aria-hidden="true" /> LeetCode</a>
          </div>
        </section>
      </main>

      <footer>
        <span>Hatim Shakir · Software engineer</span>
        <span>Built as a digital observatory for systems in motion.</span>
      </footer>
    </div>
  );
};

export default App;
