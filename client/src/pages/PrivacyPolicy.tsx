import { ArrowLeft, Check, ShieldCheck, X } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/sections/Footer";

const LOGO_MARK = "/logo.png";

const EFFECTIVE_DATE = "10 August 2026";
const PRIVACY_EMAIL = "privacy@mavrik.in";

const SECTIONS = [
  { id: "who-we-are", label: "1. Who we are" },
  { id: "summary", label: "2. Summary" },
  { id: "app", label: "3. The Mavrik app" },
  { id: "website", label: "4. The Mavrik website" },
  { id: "never", label: "5. What we never do" },
  { id: "third-parties", label: "6. Third-party services" },
  { id: "cookies", label: "7. Cookies" },
  { id: "retention", label: "8. Data retention" },
  { id: "rights", label: "9. Your rights" },
  { id: "children", label: "10. Children's privacy" },
  { id: "security", label: "11. Security" },
  { id: "transfers", label: "12. International transfers" },
  { id: "changes", label: "13. Changes to this policy" },
  { id: "contact", label: "14. Contact us" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-extrabold mt-14 mb-4 scroll-mt-24">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-muted-foreground mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 mb-5">{children}</ul>;
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--mavrik-orange)" }} />
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border sticky top-0 bg-background/90 backdrop-blur-md z-40">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={LOGO_MARK} alt="Mavrik" className="w-8 h-8 object-contain" />
            <span className="text-lg text-foreground font-extrabold tracking-[0.04em]">MAVRIK</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "var(--mavrik-orange-muted)" }}
            >
              <ShieldCheck className="w-6 h-6" style={{ color: "var(--mavrik-orange)" }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-2">
              Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This policy explains what data Mavrik does and does not collect — covering both the Mavrik desktop
              application and the website at mavrik.in.
            </p>

            {/* Highlight box */}
            <div
              className="rounded-2xl border p-6 mt-10"
              style={{ background: "var(--mavrik-orange-muted)", borderColor: "rgba(232, 93, 4, 0.25)" }}
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--mavrik-orange)" }} />
                <div>
                  <p className="font-bold text-foreground mb-1">The short version</p>
                  <p className="text-[15px] leading-relaxed text-foreground/80">
                    The Mavrik desktop app collects <strong>no personal data whatsoever</strong>. It has no accounts, no
                    telemetry, and no analytics. Your conversations, files, and documents are processed entirely on your
                    own device and never transmitted to us or anyone else. The website collects limited data described
                    below, and is separate from the app.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of contents */}
            <nav className="rounded-2xl border border-border bg-card p-6 mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Contents</p>
              <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-muted-foreground hover:text-[var(--mavrik-orange)] transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── Body ── */}
            <H2 id="who-we-are">1. Who we are</H2>
            <P>
              Mavrik is an independent software project developed and published by <strong>Atharv Singh</strong>, an
              individual developer based in India. For the purposes of applicable data protection law — including
              India's Digital Personal Data Protection Act, 2023 (DPDP Act), the EU/UK General Data Protection
              Regulation (GDPR), and the California Consumer Privacy Act (CCPA/CPRA) — Atharv Singh is the data
              controller (or equivalent) for any personal data described in this policy.
            </P>
            <P>
              In this policy, "Mavrik", "we", "us" and "our" refer to Atharv Singh operating as Mavrik. "You" refers to
              anyone who uses the Mavrik application or visits the Mavrik website.
            </P>
            <P>
              You can reach us at any time at{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                {PRIVACY_EMAIL}
              </a>
              .
            </P>

            <H2 id="summary">2. Summary</H2>
            <P>
              Mavrik is a private, local-first AI application. Its entire purpose is to let you run AI models on your own
              computer so that your data never leaves it. This policy reflects that design honestly, and separates two
              distinct things:
            </P>
            <UL>
              <LI>
                <strong>The Mavrik desktop application</strong> — collects no personal data at all. See Section 3.
              </LI>
              <LI>
                <strong>The Mavrik website (mavrik.in)</strong> — a normal marketing website that uses advertising and
                optional forms, and therefore does collect some limited data. See Section 4.
              </LI>
            </UL>

            <H2 id="app">3. The Mavrik app</H2>
            <P>
              <strong>We collect no personal data through the Mavrik desktop application.</strong> There are no user
              accounts, no sign-in, no telemetry, no analytics SDKs, no crash reporting, no advertising identifiers, and
              no usage tracking of any kind.
            </P>

            <p className="font-bold text-foreground mt-8 mb-3">3.1 Data processed only on your device</p>
            <P>
              The following stays on your computer, in local application storage, and is never transmitted to us or to
              any third party:
            </P>
            <UL>
              <LI>Your prompts, conversations and chat history</LI>
              <LI>Any files, documents or PDFs you open or analyse (including Ghost Index document indexes)</LI>
              <LI>The AI models you download, and all AI inference performed with them</LI>
              <LI>Your application settings and preferences</LI>
              <LI>System performance readings shown by Auto Optimizer (CPU and memory usage)</LI>
            </UL>
            <P>
              All AI processing is performed locally by your own CPU or GPU. Because there is no server-side inference,
              we are technically incapable of reading your conversations or documents. Deleting the application, or
              clearing its local data, removes this information permanently.
            </P>

            <p className="font-bold text-foreground mt-8 mb-3">3.2 Network connections the app makes</p>
            <P>
              Mavrik is designed to work offline, but it does make a small number of outbound connections. These are the
              only ones, and none of them transmit your personal content:
            </P>
            <UL>
              <LI>
                <strong>AI model downloads.</strong> When you choose to download a model, the app downloads it directly
                from Hugging Face (huggingface.co). Like any download, this reveals your IP address and the file
                requested to that provider. No account or identifier of yours is attached. This happens only when you
                explicitly start a download.
              </LI>
              <LI>
                <strong>Update checks.</strong> The app may request a small version file from mavrik.in to tell you
                whether a newer version is available. This request necessarily reveals your IP address to our hosting
                provider, and contains no identifier, no device fingerprint, and no information about your usage.
              </LI>
            </UL>
            <P>
              Once a model is downloaded, Mavrik can be used entirely offline, including fully air-gapped. No feature of
              the app requires an internet connection to function.
            </P>

            <H2 id="website">4. The Mavrik website</H2>
            <P>
              The website at mavrik.in is a conventional marketing website and is technically separate from the
              application. Unlike the app, it does collect limited data, as follows.
            </P>

            <p className="font-bold text-foreground mt-8 mb-3">4.1 Server logs</p>
            <P>
              Our hosting provider, Vercel, automatically records standard technical request logs when you visit the
              site, including your IP address, browser type and user agent, the pages requested, and timestamps. This is
              standard practice for web hosting and is used for security, abuse prevention, and reliability. We do not
              use these logs to build profiles of individuals.
            </P>

            <p className="font-bold text-foreground mt-8 mb-3">4.2 Advertising (Google AdSense)</p>
            <P>
              The website displays advertising served by Google AdSense. Google and its partners may use cookies,
              device identifiers and similar technologies to serve and measure ads, and in some regions to personalise
              them based on your prior visits to this and other websites. This data is collected and controlled by
              Google, not by us.
            </P>
            <P>
              You can review and control how Google uses this data at{" "}
              <a
                href="https://myadcenter.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
                style={{ color: "var(--mavrik-orange)" }}
              >
                Google My Ad Center
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
                style={{ color: "var(--mavrik-orange)" }}
              >
                Google's partner-site policy
              </a>
              . Advertising is present only on the website — the desktop application contains no advertising and no ad
              tracking of any kind.
            </P>

            <p className="font-bold text-foreground mt-8 mb-3">4.3 Waitlist form</p>
            <P>
              If you choose to join the waitlist, the form is hosted by Tally and collects the information you enter,
              which may include your name, email address, city, country and age. We use this solely to notify you when
              Mavrik becomes available and to understand where early interest is coming from. We do not sell it, and we
              do not use it for unrelated marketing. Submitting the form is entirely optional.
            </P>

            <p className="font-bold text-foreground mt-8 mb-3">4.4 Feedback form</p>
            <P>
              If you submit feedback, we store the star rating and the written responses you provide, plus your name and
              email address if you choose to supply them (both are optional). This is stored in our hosting provider's
              database and used only to improve Mavrik and, where you have given an email address, to reply to you.
            </P>

            <H2 id="never">5. What we never do</H2>
            <P>Across both the application and the website, we do not and will not:</P>
            <div className="space-y-2.5 mb-5">
              {[
                "Sell, rent or trade your personal data to anyone",
                "Read, upload, or store your conversations, prompts, or documents",
                "Use your files or chats to train AI models",
                "Include telemetry, analytics or crash reporting in the desktop application",
                "Require an account, sign-in, or personal information to use the app",
                "Share your information with third parties except the service providers listed in Section 6",
              ].map((item) => (
                <div key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  <X className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <H2 id="third-parties">6. Third-party services</H2>
            <P>
              We keep third-party involvement to a minimum. The following providers may process limited data on our
              behalf or in their own right, and each maintains its own privacy policy:
            </P>
            <UL>
              <LI>
                <strong>Vercel</strong> — website hosting, server logs, and feedback storage.
              </LI>
              <LI>
                <strong>Google AdSense</strong> — advertising on the website only.
              </LI>
              <LI>
                <strong>Tally</strong> — waitlist form processing, if you choose to submit it.
              </LI>
              <LI>
                <strong>Hugging Face</strong> — hosts the AI model files you choose to download in the app.
              </LI>
            </UL>
            <P>
              If you install Mavrik through the Microsoft Store, Microsoft may separately collect installation and
              diagnostic information under its own privacy policy. We do not receive your personal data from Microsoft.
            </P>

            <H2 id="cookies">7. Cookies</H2>
            <P>
              The <strong>desktop application does not use cookies.</strong>
            </P>
            <P>
              The website uses cookies and similar technologies set by Google AdSense for advertising and measurement
              purposes, as described in Section 4.2. We do not set our own tracking or profiling cookies. You can block
              or delete cookies in your browser settings at any time; doing so will not affect your ability to use the
              Mavrik application.
            </P>

            <H2 id="retention">8. Data retention</H2>
            <UL>
              <LI>
                <strong>App data</strong> — stored only on your own device, for as long as you keep it. We hold no copy
                and therefore cannot retain, restore or delete it on your behalf.
              </LI>
              <LI>
                <strong>Waitlist entries</strong> — kept until Mavrik launches and the launch notification has been
                sent, or until you ask us to delete them, whichever comes first.
              </LI>
              <LI>
                <strong>Feedback submissions</strong> — kept for as long as needed to act on the feedback and improve
                the product, or until you ask us to delete them.
              </LI>
              <LI>
                <strong>Server logs</strong> — retained on a short rolling basis by our hosting provider for security
                and operational purposes.
              </LI>
            </UL>

            <H2 id="rights">9. Your rights</H2>
            <P>
              Depending on where you live, you may have rights over your personal data, including the right to access
              it, correct it, delete it, restrict or object to its processing, request a portable copy, and withdraw
              consent. Users in California additionally have the right to know what is collected and to opt out of
              "sale" or "sharing" of personal information — note that we do not sell or share personal information as
              those terms are defined under the CCPA/CPRA.
            </P>
            <P>
              To exercise any of these rights, email{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                {PRIVACY_EMAIL}
              </a>
              . We will respond within 30 days. Because the desktop application collects nothing, such requests can only
              ever relate to the limited website data described in Section 4. You also have the right to lodge a
              complaint with your local data protection authority.
            </P>

            <H2 id="children">10. Children's privacy</H2>
            <P>
              Mavrik is not directed at children under the age of 13 (or the equivalent minimum age in your
              jurisdiction), and we do not knowingly collect personal data from them. The desktop application collects
              no personal data from any user regardless of age. If you believe a child has provided personal data
              through our website forms, contact us at{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                {PRIVACY_EMAIL}
              </a>{" "}
              and we will delete it promptly.
            </P>

            <H2 id="security">11. Security</H2>
            <P>
              Mavrik's local-first architecture is itself the strongest security measure we can offer: data that is
              never transmitted cannot be intercepted in transit or exposed in a server breach. Your conversations and
              documents remain under your own operating system's file permissions and any disk encryption you have
              enabled.
            </P>
            <P>
              For the limited website data we do hold, we rely on reputable providers that use encryption in transit
              (HTTPS/TLS) and access controls. No method of transmission or storage is completely secure, and we cannot
              guarantee absolute security, but we work to protect the small amount of data involved.
            </P>

            <H2 id="transfers">12. International transfers</H2>
            <P>
              We operate from India, and the third-party providers listed in Section 6 may process data on servers
              located in other countries, including the United States and the European Union. Where data is transferred
              internationally, those providers rely on recognised safeguards such as the EU Standard Contractual
              Clauses. Data handled solely within the Mavrik application never leaves your device and is never
              transferred anywhere.
            </P>

            <H2 id="changes">13. Changes to this policy</H2>
            <P>
              We may update this policy to reflect changes in the product, our providers, or the law. When we do, we
              will revise the "Last updated" date at the top of this page. If we ever make a material change — for
              example, if the application were to begin collecting data it does not collect today — we will announce it
              clearly on this website and in the application before it takes effect, and where the law requires it, we
              will ask for your consent first.
            </P>

            <H2 id="contact">14. Contact us</H2>
            <P>
              For any question, concern, or request relating to privacy or this policy, contact us and we will respond
              within 30 days:
            </P>
            <div className="rounded-2xl border border-border bg-card p-6 mb-6">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Atharv Singh</strong> — Mavrik
                <br />
                Email:{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                  {PRIVACY_EMAIL}
                </a>
                <br />
                Website:{" "}
                <a href="https://mavrik.in" className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                  mavrik.in
                </a>
                <br />
                Location: India
              </p>
            </div>
            <P>
              This policy is governed by the laws of India, including the Digital Personal Data Protection Act, 2023,
              without prejudice to any rights you hold under the data protection laws of your own country.
            </P>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
