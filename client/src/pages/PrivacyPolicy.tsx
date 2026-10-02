import { ArrowLeft, Check, ShieldCheck, X } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/sections/Footer";

const LOGO_MARK = "/logo.png";

const EFFECTIVE_DATE = "2 October 2026";
const CONTACT_EMAIL = "mavrikai.studio@gmail.com";

const SECTIONS = [
  { id: "who-we-are", label: "1. Who we are" },
  { id: "short-version", label: "2. The short version" },
  { id: "on-your-device", label: "3. What stays on your device" },
  { id: "what-we-collect", label: "4. What we collect" },
  { id: "network", label: "5. What Mavrik sends over the network" },
  { id: "offline", label: "6. Using Mavrik offline" },
  { id: "third-parties", label: "7. Companies that help run Mavrik" },
  { id: "website", label: "8. This website" },
  { id: "controls", label: "9. Your controls" },
  { id: "age", label: "10. Age" },
  { id: "changes", label: "11. Changes to this policy" },
  { id: "contact", label: "12. Contact us" },
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

function Mail() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
      {CONTACT_EMAIL}
    </a>
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
              This policy explains, in plain English, what Mavrik does with your information. It covers the Mavrik app
              and the website at mavrik.in.
            </p>

            <div
              className="rounded-2xl border p-6 mt-10"
              style={{ background: "var(--mavrik-orange-muted)", borderColor: "rgba(232, 93, 4, 0.25)" }}
            >
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--mavrik-orange)" }} />
                <div>
                  <p className="font-bold text-foreground mb-1">In one paragraph</p>
                  <p className="text-[15px] leading-relaxed text-foreground/80">
                    Mavrik runs AI models on your own computer. Your chats, files and memories never leave your device.
                    Mavrik does not upload them. To use Mavrik you sign in with Google once, and we keep your Google
                    email, name and user ID so we can sign you in. After that first sign in, Mavrik works offline.
                  </p>
                </div>
              </div>
            </div>

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

            <H2 id="who-we-are">1. Who we are</H2>
            <P>
              Mavrik is built by Atharv Singh. Mavrik is a private AI assistant that runs AI models on your own
              computer. It is available now on Windows, and a Mac version is coming soon.
            </P>
            <P>
              In this policy, "Mavrik", "we" and "us" mean Atharv Singh operating as Mavrik. "You" means anyone who
              uses the Mavrik app or visits this website. You can reach us any time at <Mail />.
            </P>

            <H2 id="short-version">2. The short version</H2>
            <UL>
              <LI>Your chats, files and memories never leave your device.</LI>
              <LI>Sign in with Google once. After that, Mavrik works offline.</LI>
              <LI>We keep your Google email, name and user ID, and we use them only to sign you in.</LI>
              <LI>You can view and delete your memories inside the app.</LI>
              <LI>Everything in Mavrik is free and fully unlocked during launch.</LI>
            </UL>

            <H2 id="on-your-device">3. What stays on your device</H2>
            <P>
              Mavrik runs AI models on your own computer, so the things you do in the app are handled there. The
              following stay on your device, and Mavrik does not upload them:
            </P>
            <UL>
              <LI>Your chats and the prompts you type</LI>
              <LI>Files, documents and images you open or analyse, including anything you use with Ghost Index</LI>
              <LI>The memories Mavrik saves about you</LI>
              <LI>The AI models you download, and all the AI processing done with them</LI>
              <LI>Your settings, and the system readings shown by Auto Optimizer</LI>
            </UL>
            <P>
              Because the AI runs on your computer rather than on our servers, we cannot read your chats, your files or
              your memories.
            </P>

            <H2 id="what-we-collect">4. What we collect</H2>
            <P>
              To use Mavrik you sign in with Google. When you do, we keep the following account information, and we use
              it only to sign you in and keep you signed in:
            </P>
            <UL>
              <LI>Your Google email address</LI>
              <LI>Your name as it appears on your Google account</LI>
              <LI>Your Google user ID</LI>
            </UL>
            <P>
              That is the whole list. We do not collect your chats, your files, your images or your memories, because
              those never leave your device.
            </P>

            <H2 id="network">5. What Mavrik sends over the network</H2>
            <P>Mavrik makes three kinds of network request, and nothing in them includes your chats or files:</P>
            <UL>
              <LI>
                <strong>Signing in.</strong> Signing in is handled by Google and Firebase. This happens when you first
                sign in, and when your sign in needs to be refreshed.
              </LI>
              <LI>
                <strong>Model downloads you start.</strong> When you choose to download an AI model, Mavrik downloads
                that model file. This only happens when you ask for it.
              </LI>
              <LI>
                <strong>A version check.</strong> Mavrik checks whether a newer version is available. This check sends
                no personal data.
              </LI>
            </UL>

            <H2 id="offline">6. Using Mavrik offline</H2>
            <P>
              After you sign in with Google the first time, Mavrik works offline. You can keep using the app, your
              downloaded models and your saved chats without an internet connection.
            </P>

            <H2 id="third-parties">7. Companies that help run Mavrik</H2>
            <P>We keep this list short. These companies each have their own privacy policies.</P>
            <UL>
              <LI>
                <strong>Google and Firebase</strong> handle signing in. Your Google account details are processed by
                Google under Google's own privacy policy.
              </LI>
              <LI>
                <strong>Microsoft</strong> distributes Mavrik through the Microsoft Store, and Apple will do the same
                on Mac. When you install from a store, that company handles the install under its own privacy policy,
                and we do not receive your personal details from them.
              </LI>
            </UL>

            <H2 id="website">8. This website</H2>
            <P>
              The website at mavrik.in is separate from the app. It uses the following, and nothing else:
            </P>
            <UL>
              <LI>
                <strong>Vercel</strong> hosts the website. Like any web host, Vercel records standard request logs,
                which include visitor IP addresses, for security and reliability.
              </LI>
              <LI>
                <strong>Vercel Web Analytics</strong> measures page views and visitor counts for this website, not for
                the app. According to Vercel, it does not use cookies and does not track visitors across other
                websites.
              </LI>
              <LI>
                <strong>Vercel KV</strong> stores feedback you choose to submit through the feedback form, including
                the rating and written responses, plus your name and email if you add them. Both of those fields are
                optional.
              </LI>
              <LI>
                <strong>Google Fonts</strong> serves the typeface used on this website. Loading a font from Google
                means Google receives your IP address as part of that request.
              </LI>
            </UL>
            <P>There is no advertising on this website and no advertising cookies.</P>

            <H2 id="controls">9. Your controls</H2>
            <div className="space-y-2.5 mb-5">
              {[
                "Log out of Mavrik at any time from inside the app.",
                "View and delete your memories inside the app whenever you want.",
                "Delete your chats and files directly on your own computer, since that is where they live.",
                `To delete your account, email ${CONTACT_EMAIL}.`,
              ].map((item) => (
                <div key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "var(--mavrik-orange)" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <P>
              If you have a question about your information, or you want to know what we hold, email <Mail /> and we
              will help.
            </P>

            <H2 id="age">10. Age</H2>
            <P>Mavrik is for people aged 18 and over.</P>

            <H2 id="changes">11. Changes to this policy</H2>
            <P>
              If we change this policy, we will update the date at the top of this page. If the change is important,
              for example if Mavrik starts collecting something it does not collect today, we will say so clearly on
              this website and in the app before the change takes effect.
            </P>

            <H2 id="contact">12. Contact us</H2>
            <P>For anything to do with privacy, your account or this policy, email us and we will reply:</P>
            <div className="rounded-2xl border border-border bg-card p-6 mb-6">
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Atharv Singh</strong>, Mavrik
                <br />
                Email: <Mail />
                <br />
                Website:{" "}
                <a href="https://mavrik.in" className="font-semibold" style={{ color: "var(--mavrik-orange)" }}>
                  mavrik.in
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                <div>
                  <p className="font-bold text-foreground mb-1">What we do not do</p>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    We do not sell your personal information. We do not upload your chats, files or memories, and we do
                    not use them to train AI models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
