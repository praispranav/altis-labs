import { useEffect, useState } from "react";
import { products, site } from "./config/site";
import "./App.css";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 32 18.5 7H24l11 25h-7L20.5 15 11 32H5Z" fill="currentColor" />
      <path d="M16 25h10l2.8 7H12.2L16 25Z" fill="currentColor" />
    </svg>
  );
}

function ProductIcon({ type }: { type: "clinic" | "study" | "ceo" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {type === "clinic" ? (
        <>
          <rect
            x="6"
            y="6"
            width="36"
            height="36"
            rx="10"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M24 15v18m-9-9h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : type === "study" ? (
        <>
          <path
            d="M24 14c-5-5-12-5-18-2v26c6-3 13-3 18 2 5-5 12-5 18-2V12c-6-3-13-3-18 2Zm0 0v26"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 19c2-1 5-1 7 0m-7 6c2-1 5-1 7 0m10-6c2-1 5-1 7 0m-7 6c2-1 5-1 7 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M24 5v38M5 24h38M10.6 10.6l26.8 26.8m0-26.8L10.6 37.4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="24"
            cy="24"
            r="12"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </>
      )}
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div
      className="hero-art"
      aria-label="Care, learning, and business: three ideas taking shape at Altis Labs"
      role="img"
    >
      <svg className="art-grid" viewBox="0 0 540 500" aria-hidden="true">
        <defs>
          <pattern
            id="grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0H0v30"
              fill="none"
              stroke="#897765"
              strokeOpacity=".11"
              strokeWidth=".6"
            />
          </pattern>
        </defs>
        <rect width="540" height="500" fill="url(#grid)" />
        <path
          d="M59 130C59 40 480 40 480 190S58 430 58 323 465 380 465 450"
          fill="none"
          stroke="#a08d77"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
        <circle cx="59" cy="130" r="4" fill="#9b8068" />
        <circle cx="465" cy="450" r="4" fill="#9b8068" />
      </svg>
      <span className="art-meta">THREE IDEAS. ONE SHARED PURPOSE.</span>
      <div className="idea-card idea-care">
        <div className="idea-header">
          <span>01 / CARE</span>
          <span className="tiny-dot" />
        </div>
        <ProductIcon type="clinic" />
        <div className="idea-bottom">
          <span>ClinicQ</span>
          <span>↗</span>
        </div>
      </div>
      <div className="idea-card idea-learn">
        <div className="idea-header">
          <span>02 / LEARN</span>
          <span className="tiny-dot" />
        </div>
        <ProductIcon type="study" />
        <div className="idea-bottom">
          <span>WhereAmI</span>
          <span>↗</span>
        </div>
      </div>
      <div className="idea-card idea-build">
        <div className="idea-header">
          <span>03 / BUILD</span>
          <span className="tiny-dot" />
        </div>
        <ProductIcon type="ceo" />
        <div className="idea-bottom">
          <span>IAmCEO</span>
          <span>↗</span>
        </div>
      </div>
      <div className="art-seal">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <path id="seal-path" d="M50 12a38 38 0 1 1-.1 0" />
          </defs>
          <text>
            <textPath href="#seal-path" textLength="235">
              THOUGHTFULLY BUILT · ALTIS LABS ·{" "}
            </textPath>
          </text>
        </svg>
        <Mark />
      </div>
      <span className="art-footer">IDEAS, MADE USEFUL.</span>
      <span className="art-plus plus-one">+</span>
      <span className="art-plus plus-two">+</span>
    </div>
  );
}

const emailLink = (subject: string, body = "") =>
  `mailto:${site.businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const earlyAccess = (product: string) =>
  emailLink(
    `${product} — early access interest`,
    `Hi Altis Labs,\n\nI'm interested in ${product}. Please keep me in the loop about product updates and early-access opportunities.\n\nHere's what I'd like it to help with:\n\n`,
  );

const clinicViews = [
  {
    label: "Patient",
    title: "Your place in the queue. On your phone.",
    subtitle:
      "Scan the clinic QR, get a digital token, and follow your turn in the browser.",
    steps: [
      "Scan the printed clinic QR",
      "Check in and receive a token",
      "See your live place in the queue",
    ],
  },
  {
    label: "Doctor",
    title: "Your queue. Your consultation flow.",
    subtitle:
      "Run your shift, call the next patient, and keep a consultation note or prescription photo.",
    steps: [
      "Start your shift and view the queue",
      "Call the next patient or set priority",
      "Add a note or prescription photo",
    ],
  },
  {
    label: "Reception",
    title: "A clearer view from the front desk.",
    subtitle:
      "Verify arrivals, register walk-ins, and keep track of payments at the counter.",
    steps: [
      "Find a patient by token, phone, or name",
      "Verify arrival or register a walk-in",
      "Record the consultation payment",
    ],
  },
];

const examples = [
  {
    label: "Forecasts",
    quote:
      "Based on our recent sales and expenses, what might next month’s cash flow look like?",
    title: "A forward view, grounded in your records.",
    rows: [
      ["Uses", "Recorded sales & expenses"],
      ["Looks ahead", "Next month"],
      ["Includes", "Assumptions & uncertainty"],
    ],
  },
  {
    label: "Estimates",
    quote:
      "Estimate the cost of buying 100 more boxes using our past purchase prices.",
    title: "Plan a purchase with more context.",
    rows: [
      ["Reference", "Previous purchase prices"],
      ["Quantity", "100 boxes"],
      ["Result", "Estimated cost range"],
    ],
  },
  {
    label: "What-if planning",
    quote: "What could happen to our costs if sales grow by 20% next month?",
    title: "Explore a scenario before making a decision.",
    rows: [
      ["Scenario", "20% sales growth"],
      ["Compare", "Stock, costs & cash needs"],
      ["Keep visible", "The assumptions behind it"],
    ],
  },
  {
    label: "Your money",
    quote: "Bought 50 boxes for ₹5,000. Paid ₹3,000; ₹2,000 is pending.",
    title: "A purchase, with the details together.",
    rows: [
      ["Quantity", "50 boxes"],
      ["Total purchase", "₹5,000"],
      ["Paid", "₹3,000"],
      ["Still pending", "₹2,000"],
    ],
  },
  {
    label: "Your follow-ups",
    quote: "Remind me to follow up with the customer tomorrow.",
    title: "A little less to keep in your head.",
    rows: [
      ["Task", "Customer follow-up"],
      ["When", "Tomorrow"],
      ["Purpose", "Keep work moving"],
    ],
  },
  {
    label: "Your answers",
    quote: "What did we spend this month, and what payments are outstanding?",
    title: "Useful questions. Answers from your records.",
    rows: [
      ["Look at", "This month"],
      ["Summarize", "Business expenses"],
      ["Check", "Outstanding payments"],
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [example, setExample] = useState(0);
  const [clinicView, setClinicView] = useState(0);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("will-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header container" id="home">
        <a className="brand" href="#home" aria-label="Altis Labs home">
          <Mark />
          <span>
            Altis Labs<span className="brand-period">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#about">The lab</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <Arrow diagonal />
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
          <span>{menuOpen ? "−" : "+"}</span>
        </button>
        {menuOpen && (
          <nav
            className="mobile-nav"
            id="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ["Products", "#products"],
              ["Services", "#services"],
              ["The lab", "#about"],
              ["Let’s talk", "#contact"],
            ].map(([label, link]) => (
              <a href={link} key={link} onClick={() => setMenuOpen(false)}>
                {label}
                <Arrow diagonal />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="small-dot" /> AN INDEPENDENT PRODUCT & SOFTWARE
              STUDIO
            </div>
            <h1>
              Good software.
              <br />A little more
              <br />
              <em>human.</em>
              <span className="hero-asterisk" aria-hidden="true">
                <ProductIcon type="ceo" />
              </span>
            </h1>
            <p>
              Thoughtful products. Purposeful software.
              <br />
              We turn everyday challenges into tools
              <br className="hero-break" /> that make life a little simpler.
            </p>
            <a className="button button-primary" href="#products">
              Explore our products <Arrow diagonal />
            </a>
            <div className="hero-note">
              <span className="note-line" /> Built with intention. Made for real
              life.
            </div>
          </div>
          <HeroArtwork />
          <div className="hero-baseline">
            <span>LESS FRICTION. MORE ROOM FOR WHAT MATTERS.</span>
            <a href="#products">
              A look inside the lab <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section className="products section container" id="products">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow section-index">01 / OUR PRODUCTS</span>
              <h2>
                From a small idea
                <br />
                to <em>something useful.</em>
              </h2>
            </div>
            <p>
              Our own products, built around the way
              <br className="desktop-break" /> people work, learn, and run their
              day.
            </p>
          </div>
          <div className="products-grid">
            <article className="product-card" data-reveal>
              <div className="product-art clinic-art">
                <div className="product-art-top">
                  <span>FOR THE WORLD OF CLINICS</span>
                  <span>01</span>
                </div>
                <div className="clinic-symbol">
                  <ProductIcon type="clinic" />
                </div>
                <span className="art-word">A little more care.</span>
                <svg
                  className="clinic-wave"
                  viewBox="0 0 360 120"
                  aria-hidden="true"
                >
                  <path
                    d="M-10 80h85l12-15 17 30 24-65 22 65 17-30 12 15h210"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <div className="product-meta">
                <h3>ClinicQ</h3>
                <span className="status live-status">
                  <i />
                  Live
                </span>
              </div>
              <p>{products[0].description}</p>
              <a className="product-link" href="#clinicq">
                Explore ClinicQ <Arrow diagonal />
              </a>
            </article>
            <article className="product-card" data-reveal>
              <div className="product-art study-art">
                <div className="product-art-top">
                  <span>FOR THE CURIOUS MIND</span>
                  <span>02</span>
                </div>
                <div className="book-composition">
                  <span className="book-spine" />
                  <div className="book-cover">
                    <span>
                      A NEW
                      <br />
                      CHAPTER
                      <br />
                      IN LEARNING.
                    </span>
                    <ProductIcon type="study" />
                    <span className="book-byline">WHEREAMI / ALTIS LABS</span>
                  </div>
                </div>
                <span className="study-orbit" aria-hidden="true" />
              </div>
              <div className="product-meta">
                <h3>WhereAmI</h3>
                <span className="status">Coming soon</span>
              </div>
              <p>
                An AI-based study app.
                <br />A new idea for the way you learn.
              </p>
              <a className="product-link" href={earlyAccess("WhereAmI")}>
                Stay in the loop <Arrow diagonal />
              </a>
            </article>
            <article className="product-card" data-reveal>
              <div className="product-art ceo-art">
                <div className="product-art-top">
                  <span>FOR OWNERS WHO WEAR EVERY HAT</span>
                  <span>03</span>
                </div>
                <div className="ceo-art-symbol">
                  <ProductIcon type="ceo" />
                </div>
                <div className="ceo-art-message">
                  One conversation.
                  <br />
                  <em>A clearer picture.</em>
                </div>
              </div>
              <div className="product-meta">
                <h3>IAmCEO</h3>
                <span className="status">Coming soon</span>
              </div>
              <p>
                An AI agent for your business. Organize today’s operations and
                plan ahead with forecasts, estimates, and what-if scenarios.
              </p>
              <a className="product-link" href="#ceo-assistant">
                Meet CEO Assistant <Arrow diagonal />
              </a>
            </article>
          </div>
        </section>
        <section className="services section container" id="services">
          <div className="services-intro" data-reveal>
            <span className="eyebrow section-index">02 / BUILT TOGETHER</span>
            <h2>
              Your idea.
              <br />
              Our next <em>conversation.</em>
            </h2>
            <p>
              Alongside our own products, we work with people and businesses to
              bring software ideas to life.
            </p>
            <a
              className="underlined-link"
              href={emailLink("Let’s build something together")}
            >
              Discuss your project <Arrow diagonal />
            </a>
          </div>
          <div className="service-list" data-reveal>
            {[
              [
                "01",
                "Web & software development",
                "Purposeful websites and applications, shaped around your business and the people using them.",
              ],
              [
                "02",
                "AI-powered tools",
                "Practical ways to bring AI into everyday work, with a clear problem to solve.",
              ],
              [
                "03",
                "Product design & development",
                "From an early idea to a usable product. Thoughtful decisions about what to build and how it should feel.",
              ],
            ].map(([number, title, description]) => (
              <article className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Arrow diagonal />
              </article>
            ))}
          </div>
        </section>
        <section className="clinic-feature" id="clinicq">
          <div className="container clinic-feature-inner">
            <div className="clinic-feature-copy" data-reveal>
              <div className="eyebrow">
                <span className="small-dot" /> LIVE NOW / CLINICQ
              </div>
              <h2>
                A calmer queue.
                <br />
                <em>A clearer clinic day.</em>
              </h2>
              <p>
                Digital OPD queues built for Indian clinics. Let patients check
                in with a QR code and follow their token on their own phone,
                while your team keeps the day moving.
              </p>
              <p>
                ClinicQ brings patient arrival, queue management, consultation
                records, and payments into a shared workflow for doctors,
                reception teams, and multi-doctor clinics.
              </p>
              <div className="feature-topics">
                <span>QR check-in</span>
                <span>Live token tracking</span>
                <span>Consultation records</span>
                <span>No patient app needed</span>
              </div>
              <div className="clinic-actions">
                <a
                  className="button button-primary"
                  href={products[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit clinicq.fit <Arrow diagonal />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  className="underlined-link"
                  href="https://clinicq.fit/patient/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the patient demo <Arrow diagonal />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
            <div className="clinic-demo" data-reveal>
              <div className="clinic-demo-heading">
                <div>
                  <ProductIcon type="clinic" />
                  <span>One clinic. A connected flow.</span>
                </div>
                <span>ILLUSTRATIVE WORKFLOW</span>
              </div>
              <div
                className="clinic-role-tabs"
                role="group"
                aria-label="Explore ClinicQ workflows"
              >
                {clinicViews.map((view, index) => (
                  <button
                    key={view.label}
                    aria-pressed={clinicView === index}
                    className={clinicView === index ? "selected" : ""}
                    onClick={() => setClinicView(index)}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
              <div
                className="clinic-role-content"
                aria-live="polite"
                aria-atomic="true"
                key={clinicView}
              >
                <span className="eyebrow">
                  THE {clinicViews[clinicView].label.toUpperCase()} VIEW
                </span>
                <h3>{clinicViews[clinicView].title}</h3>
                <p>{clinicViews[clinicView].subtitle}</p>
                <ol>
                  {clinicViews[clinicView].steps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="clinic-demo-footnote">
                Explore the live product at clinicq.fit.
              </div>
            </div>
            <div className="clinic-capabilities" data-reveal>
              <article>
                <span className="eyebrow">01 / CHECK-IN</span>
                <h3>A QR instead of a crowd.</h3>
                <p>
                  Patients can join from home, on the way, or at the counter.
                  Returning patients check in with one tap.
                </p>
              </article>
              <article>
                <span className="eyebrow">02 / CONSULTATION</span>
                <h3>Keep your usual pace.</h3>
                <p>
                  Use free-text notes and attach photos of prescriptions or
                  reports, with visit history ready for the next consultation.
                </p>
              </article>
              <article>
                <span className="eyebrow">03 / CLINIC OPERATIONS</span>
                <h3>Built around your team.</h3>
                <p>
                  Run solo, with reception, or across multiple doctors. Manage
                  shifts, arrivals, and consultation payments.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="ceo-feature" id="ceo-assistant">
          <div className="container ceo-feature-inner">
            <div className="ceo-feature-copy" data-reveal>
              <div className="eyebrow">
                <span className="small-dot" /> IN THE MAKING / IAMCEO
              </div>
              <h2>
                An AI agent for today.
                <br />
                <em>A clearer view of tomorrow.</em>
              </h2>
              <p>
                Money, stock, people, follow-ups. Running a business means
                keeping a lot in your head.
              </p>
              <p>
                IAmCEO — CEO Assistant is being designed as an AI agent that
                works with your business context through a web dashboard and
                Telegram. Record activity, ask questions, and keep follow-ups
                moving in one conversational workspace.
              </p>
              <p>
                We’re also building toward forecasts, cost estimates, and
                what-if planning, so you can explore possible outcomes using
                your own records and make more informed plans.
              </p>
              <div className="feature-topics">
                <span>Money & payments</span>
                <span>Stock & operations</span>
                <span>Team & attendance</span>
                <span>Reminders & summaries</span>
                <span>Forecasts & estimates</span>
                <span>What-if planning</span>
              </div>
              <a
                className="button button-primary"
                href={earlyAccess("IAmCEO — CEO Assistant")}
              >
                Join the waitlist <Arrow diagonal />
              </a>
              <span className="email-note">
                Send us your interest by email.
              </span>
            </div>
            <div className="conversation" data-reveal>
              <div className="conversation-heading">
                <div>
                  <ProductIcon type="ceo" />
                  <span>CEO Assistant</span>
                </div>
                <span>PRODUCT CONCEPT</span>
              </div>
              <div
                className="conversation-tabs"
                role="group"
                aria-label="Explore conversation examples"
              >
                {examples.map((item, i) => (
                  <button
                    key={item.label}
                    onClick={() => setExample(i)}
                    aria-pressed={example === i}
                    className={example === i ? "selected" : ""}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div
                className="conversation-content"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="conversation-label">
                  SIMPLY TELL YOUR ASSISTANT
                </span>
                <blockquote key={`quote-${example}`}>
                  “{examples[example].quote}”
                </blockquote>
                <div className="assistant-response" key={`answer-${example}`}>
                  <span className="response-icon">
                    <Mark />
                  </span>
                  <h4>{examples[example].title}</h4>
                  <dl>
                    {examples[example].rows.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="conversation-footnote">
                Planned experience, illustrated. Forecasts and estimates will
                depend on your records and assumptions; outcomes may differ.
              </div>
            </div>
            <div className="ceo-roadmap" data-reveal>
              <span className="eyebrow">GROWING WITH YOUR WORK</span>
              <p>
                Our AI-agent roadmap includes personal and business memory,
                configurable rules, connected email, research, calendar
                planning, and proactive check-ins. We’re planning cash-flow
                forecasts, spending and stock estimates, and scenario
                comparisons, with assumptions and uncertainty made visible.
              </p>
              <span className="rollout-note">
                For farms, shops, service businesses, and growing teams.
                Features will roll out in stages during early access.
              </span>
            </div>
          </div>
        </section>
        <section className="about section container" id="about">
          <div className="about-heading" data-reveal>
            <span className="eyebrow section-index">
              03 / A NOTE FROM THE LAB
            </span>
            <h2>
              Thoughtful by nature.
              <br />
              <em>Practical by choice.</em>
            </h2>
          </div>
          <div className="about-body" data-reveal>
            <p className="about-statement">
              We’re Altis Labs. We build software that helps people organize
              their work, understand their operations, and turn ideas into
              action.
            </p>
            <p>
              Some ideas become our own products. Others start with a
              conversation with you. The starting point is always the same: a
              real problem, and a thoughtful way forward.
            </p>
          </div>
          <div className="principles" data-reveal>
            <article>
              <span>01 / WHAT WE DO</span>
              <h3>Build for everyday life.</h3>
              <p>
                Clear tools for real tasks. Software should earn its place in
                your day.
              </p>
            </article>
            <article>
              <span>02 / HOW WE WORK</span>
              <h3>Start focused. Keep learning.</h3>
              <p>
                Build around a clear need, listen to feedback, and improve with
                purpose.
              </p>
            </article>
            <article>
              <span>03 / WHAT WE DON’T DO</span>
              <h3>Promise everything.</h3>
              <p>
                We’re clear about what’s available and what’s still taking
                shape. No claims ahead of the work.
              </p>
            </article>
          </div>
        </section>
        <section className="contact container" id="contact" data-reveal>
          <div className="contact-top">
            <span className="eyebrow">
              GOOD WORK STARTS WITH A CONVERSATION.
            </span>
            <Mark />
          </div>
          <div className="contact-main">
            <h2>
              Something
              <br />
              <em>on your mind?</em>
            </h2>
            <div>
              <p>
                A product question, a project idea,
                <br />
                or a problem worth solving.
              </p>
              <a
                className="contact-address"
                href={`mailto:${site.businessEmail}`}
              >
                {site.businessEmail}
                <Arrow diagonal />
              </a>
              <span className="contact-caption">
                BUSINESS ENQUIRIES & PRODUCT SUPPORT
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <a className="brand" href="#home">
          <Mark />
          <span>
            Altis Labs<span className="brand-period">.</span>
          </span>
        </a>
        <span>Small lab. Thoughtful things.</span>
        <span>© {new Date().getFullYear()} Altis Labs</span>
        <a className="back-top" href="#home">
          Back to top ↑
        </a>
        <div className="registration-line">
          <span>
            Udyam Registration <span className="registration-separator">/</span>{" "}
            <span className="registration-number">{site.udyam.number}</span>
          </span>
          <div className="registration-links">
            <a
              href={site.udyam.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Udyam registration (PDF) <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={site.udyam.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Verify ${site.udyam.number} on the official Udyam portal`}
            >
              Verify on Udyam <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
