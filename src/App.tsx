import { useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiLock,
  FiMail,
  FiPower,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import MissionScope from "./components/MissionScope";
import resume from "./assets/docs/Resume_Hatim Shakir.pdf";
import { archive, contributionMonths, projects, unifyAreas } from "./data/portfolio";
import "./App.css";

const contributionMax = Math.max(...contributionMonths.map(([, value]) => value));

const Pad = ({ corner }: { corner: string }) => (
  <span className={`fastener fastener-${corner}`} aria-hidden="true" />
);

const MechanicalCounter = ({ value, label }: { value: string; label: string }) => (
  <div className="counter-unit">
    <span className="counter-label">{label}</span>
    <span className="counter-window" aria-label={`${value} ${label}`}>
      {value.split("").map((character, index) => (
        <i key={`${character}-${index}`} aria-hidden="true">{character}</i>
      ))}
    </span>
    <span className="verified-line"><i aria-hidden="true" /> Authenticated</span>
  </div>
);

const App = () => {
  const [deckLive, setDeckLive] = useState(true);
  const [scopeMode, setScopeMode] = useState<"signal" | "route">("signal");

  return (
    <div className={`site-shell ${deckLive ? "deck-live" : "deck-standby"}`}>
      <a className="skip-link" href="#main-content">Skip to mission record</a>

      <header className="site-header panel-frame">
        <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
        <a className="brand-plate" href="#top" aria-label="Hatim Shakir, home">
          <strong>HS–87 / AI</strong>
          <span>Engineering systems portfolio</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Systems</a>
          <a href="#projects">Missions</a>
          <a href="#signal">Telemetry</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-status" aria-label={deckLive ? "Portfolio systems online" : "Portfolio systems in standby"}>
          <span className={`status-lamp ${deckLive ? "is-on" : ""}`} aria-hidden="true" />
          <span>{deckLive ? "All systems go" : "Standby"}</span>
        </div>
      </header>

      <main id="main-content">
        <section className="hero deck-section" id="top" aria-labelledby="hero-title">
          <div className="identity-bay panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <div className="identity-index">
              <span>Mission lead</span><span>HS / 026</span>
            </div>
            <h1 id="hero-title">Hatim<br />Shakir</h1>
            <p className="hero-role">Systems that reason, react, and ship.</p>
            <p className="hero-intro">
              I work across AI-native products, enterprise workflow platforms,
              developer tools, and the contracts beneath them—state, schemas,
              runtimes, and release paths included.
            </p>
            <dl className="identity-grid">
              <div><dt>Role</dt><dd>Software Engineer</dd></div>
              <div><dt>Focus</dt><dd>AI + Systems</dd></div>
              <div><dt>Base</dt><dd>India / UTC+5:30</dd></div>
            </dl>
            <a className="guarded-action" href="#projects">
              <span className="guard-stripe" aria-hidden="true" />
              <span>Open mission archive</span>
              <FiArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className="scope-bay panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <div className="scope-bezel">
              <div className="scope-title">
                <span>System readiness / live trace</span>
                <span>CH–{scopeMode === "signal" ? "01" : "02"}</span>
              </div>
              <MissionScope mode={scopeMode} active={deckLive} />
              <div className="scope-graticule" aria-hidden="true" />
              <div className="scope-caption" aria-hidden="true">
                <span>Measure</span><span>Validate</span><span>Iterate</span><span>Ship</span>
              </div>
            </div>
            <div className="scope-controls">
              <button type="button" className={scopeMode === "signal" ? "is-selected" : ""} onClick={() => setScopeMode("signal")}>
                <span className="switch-led" aria-hidden="true" /> Signal
              </button>
              <button type="button" className={scopeMode === "route" ? "is-selected" : ""} onClick={() => setScopeMode("route")}>
                <span className="switch-led" aria-hidden="true" /> Route
              </button>
              <button type="button" className="power-switch" aria-pressed={deckLive} onClick={() => setDeckLive((value) => !value)}>
                <FiPower aria-hidden="true" /> {deckLive ? "Live" : "Standby"}
              </button>
            </div>
          </div>

          <aside className="readout-bay panel-frame" aria-label="Authenticated GitHub activity from August 2025 to August 2026">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <div className="readout-heading"><span>Verified activity</span><span>02 AUG 26</span></div>
            <MechanicalCounter value="4,176" label="Contributions" />
            <MechanicalCounter value="345" label="Active days" />
            <MechanicalCounter value="97" label="Day streak" />
            <MechanicalCounter value="3,954" label="Private signal" />
            <div className="readiness-list">
              {[
                "Agent systems ready",
                "Workflow runtime ready",
                "Interface plane ready",
                "Delivery lanes ready",
              ].map((item) => <span key={item}><i aria-hidden="true" />{item}</span>)}
            </div>
          </aside>
        </section>

        <section className="systems-section deck-section" id="experience" aria-labelledby="experience-title">
          <header className="section-console">
            <div>
              <h2 id="experience-title">One control plane.<br />Every system in view.</h2>
            </div>
            <p>
              The contribution history is unusually concentrated: core web platform,
              AI runtime and workflow tooling, then the schema and release contracts
              that make the experience real.
            </p>
            <div className="panel-code">UA / CONTROL TOPOLOGY<br />2025—PRESENT</div>
          </header>

          <article className="unify-console panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <header className="unify-title">
              <div><h3>UnifyApps</h3><p>Software Engineer · Enterprise AI platform</p></div>
              <p>
                At least a thousand authored pull requests surfaced in the latest
                accessible history—ownership across how an AI agent shapes a workflow,
                how it validates and renders, and how it reaches UAT and live.
              </p>
            </header>
            <div className="topology" role="list" aria-label="UnifyApps ownership areas">
              {unifyAreas.map((area, index) => (
                <article className="topology-module" key={area.title} role="listitem">
                  <span className="topology-port" aria-hidden="true" />
                  <div className="module-id">UA–{String(index + 1).padStart(2, "0")}</div>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                  <div className="module-signal"><span>{area.signal}</span><i aria-hidden="true" /></div>
                  <p className="module-evidence">{area.evidence}</p>
                </article>
              ))}
            </div>
            <div className="release-lane" aria-label="Ownership reaches from product idea to live release">
              <span>Prompt / intent</span><i aria-hidden="true" /><span>Agent + workflow</span><i aria-hidden="true" /><span>Schema + UI</span><i aria-hidden="true" /><span>UAT</span><i aria-hidden="true" /><span>Live</span>
            </div>
          </article>

          <article className="salesforce-strip panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <div className="company-seal">SF</div>
            <div>
              <h3>Salesforce</h3>
              <p>Software Engineering Intern · Lightning Web Security</p>
            </div>
            <p>
              Built LWS Copilot, a VS Code refactoring tool that used generative AI
              to help developers move code toward Lightning Web Security compliance.
            </p>
            <time dateTime="2023-05">May—July 2023 / Hyderabad</time>
          </article>
        </section>

        <section className="missions-section deck-section" id="projects" aria-labelledby="projects-title">
          <header className="section-console projects-console">
            <div><h2 id="projects-title">Flight tapes.<br />Newest loaded first.</h2></div>
            <p>Public repositories open outward. Private builds disclose product and architecture without pretending their source is public.</p>
            <div className="panel-code">MISSION ARCHIVE<br />11 PRIMARY / 10 LEGACY</div>
          </header>

          <div className="tape-rack">
            {projects.map((project, index) => (
              <article className="flight-tape" key={project.name}>
                <div className="tape-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="tape-label">
                  <div className="tape-title-line">
                    <h3>{project.name}</h3>
                    <time dateTime={project.date}>{project.date}</time>
                  </div>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.name} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="reel-window" aria-hidden="true"><i /><span /><i /></div>
                <div className="tape-access">
                  <span>{project.access}</span>
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Source<span className="sr-only"> for {project.name}</span></a>
                  ) : <span className="locked"><FiLock aria-hidden="true" /> Protected</span>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer"><FiArrowUpRight aria-hidden="true" /> Live<span className="sr-only"> {project.name}</span></a>}
                </div>
              </article>
            ))}
          </div>

          <div className="archive-drawer panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <h3>Earlier systems / archive drawer</h3>
            <div className="archive-ledger">
              {archive.map(([date, name, description, url], index) => (
                <a href={url} target="_blank" rel="noreferrer" key={name}>
                  <span>A{String(index + 1).padStart(2, "0")}</span><time dateTime={date}>{date}</time><strong>{name}</strong><em>{description}</em><FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="telemetry-section deck-section" id="signal" aria-labelledby="signal-title">
          <header className="section-console signal-console">
            <div><h2 id="signal-title">A working rhythm,<br />recorded on paper.</h2></div>
            <p>A one-year authenticated snapshot shows 4,176 contributions across 345 active days. Most activity is private, so the public profile shows only the edge of the field.</p>
            <div className="panel-code">02 AUG 25—02 AUG 26<br />GRAPHQL / CALENDAR</div>
          </header>
          <div className="recorder panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <div className="recorder-drive recorder-drive-left" aria-hidden="true"><span /></div>
            <figure className="chart-paper">
              <figcaption>
                <strong>GitHub activity / monthly slices</strong>
                <span>Square-root scale · partial boundary months retained</span>
              </figcaption>
              <ol aria-label="Calendar-day contributions by month, square-root scale">
                {contributionMonths.map(([month, value]) => (
                  <li key={month}>
                    <span className="chart-value">{value}</span>
                    <span className="chart-track" aria-hidden="true"><i style={{ height: `${Math.max(4, Math.sqrt(value / contributionMax) * 100)}%` }} /></span>
                    <span className="chart-month">{month}</span>
                  </li>
                ))}
              </ol>
              <p>GraphQL total: 4,176 · Calendar-day bars: 4,174 · Restricted/private: 3,954 · Longest streak: 97 days</p>
            </figure>
            <div className="recorder-drive recorder-drive-right" aria-hidden="true"><span /></div>
          </div>
        </section>

        <section className="contact-section deck-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-message panel-frame">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            <h2 id="contact-title">Bring a hard system.</h2>
            <p>Especially one where product, data, agents, and interface refuse to stay in separate boxes.</p>
          </div>
          <nav className="patch-panel panel-frame" aria-label="Contact and profile links">
            <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
            {[
              ["Email", "mailto:hatimcodes@gmail.com", <FiMail aria-hidden="true" />],
              ["Résumé", resume, <FiFileText aria-hidden="true" />],
              ["GitHub", "https://github.com/hatim-s", <FiGithub aria-hidden="true" />],
              ["LinkedIn", "https://www.linkedin.com/in/hatim-s/", <FiLinkedin aria-hidden="true" />],
              ["LeetCode", "https://leetcode.com/hatimcodes/", <SiLeetcode aria-hidden="true" />],
            ].map(([label, href, icon]) => (
              <a href={href as string} target={(href as string).startsWith("http") || label === "Résumé" ? "_blank" : undefined} rel="noreferrer" key={label as string}>
                <span className="jack" aria-hidden="true"><i /></span>{icon}<strong>{label}</strong>
              </a>
            ))}
          </nav>
          <div className="contact-status panel-frame" aria-hidden="true"><Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" /><span className="status-lamp is-on" /><strong>Signal good</strong><span>Ready to build</span></div>
        </section>
      </main>

      <footer className="panel-frame">
        <Pad corner="nw" /><Pad corner="ne" /><Pad corner="sw" /><Pad corner="se" />
        <p>Hatim Shakir · Software Engineer</p>
        <p>React / TypeScript · Operational record 2026</p>
      </footer>
    </div>
  );
};

export default App;
