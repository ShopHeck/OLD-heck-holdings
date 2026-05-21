'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Bot, BrainCircuit, Check, Cpu, Layers3, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const capabilities = [
  {
    icon: Bot,
    title: 'AI agent infrastructure',
    body: 'Custom agent systems that can reason across tools, follow business rules, and execute repeatable work with human approval where it matters.',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    icon: Workflow,
    title: 'Agentic workflows',
    body: 'Structured automations that move work from intake to completion across sales, service, operations, marketing, and admin.',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    icon: BrainCircuit,
    title: 'Practical AI strategy',
    body: 'Clear roadmaps for where AI creates leverage now, without chasing hype or rebuilding what already works.',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    icon: Layers3,
    title: 'Systems integration',
    body: 'Connect CRMs, inboxes, spreadsheets, websites, forms, databases, and internal tools into one operating layer.',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    icon: ShieldCheck,
    title: 'Business-safe automation',
    body: 'Guardrails, audit trails, permissions, and escalation paths designed for everyday companies, not lab demos.',
    className: 'md:col-span-1 md:row-span-1'
  }
];

const workflowCards = [
  ['Map the bottleneck', 'We find the repetitive work slowing down growth: manual follow-ups, reporting, lead handling, customer support, data entry, and coordination.'],
  ['Design the agent layer', 'We define the tools, permissions, data sources, instructions, approvals, and business logic an AI agent needs to operate reliably.'],
  ['Automate with control', 'We deploy workflows that complete tasks, surface exceptions, and keep owners informed without removing human judgment.'],
  ['Improve every cycle', 'We measure time saved, handoff quality, conversion lift, response speed, and operational capacity to refine the system.']
];

const outcomes = ['Recover hours of manual work every week', 'Respond to leads and customers faster', 'Standardize operating processes', 'Scale output without scaling headcount', 'Give teams more time to grow revenue'];

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <a href="#top" className="text-sm font-semibold tracking-[0.24em] text-bone">HECK HOLDINGS</a>
        <div className="hidden items-center gap-7 text-sm text-fog md:flex">
          <a className="transition hover:text-white" href="#systems">Systems</a>
          <a className="transition hover:text-white" href="#workflow">Workflow</a>
          <a className="transition hover:text-white" href="#outcomes">Outcomes</a>
        </div>
        <a href="mailto:heck@ryseseo.com" className="rounded-full bg-bone px-4 py-2 text-sm font-semibold text-ink transition hover:scale-105">Start a build</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 py-36">
      <div className="absolute inset-0 bg-grid opacity-35" />
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-copper/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%),linear-gradient(180deg,rgba(5,6,8,0.0),#050608_92%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <h1 className="max-w-6xl text-[clamp(3.15rem,6.4vw,7.65rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-bone">
            AI systems for businesses ready to move faster.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-fog md:text-xl">
            Heck Holdings builds artificial intelligence solutions, agent infrastructure, and automated workflows that remove time-consuming work so everyday businesses can focus on growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:heck@ryseseo.com" className="group inline-flex items-center justify-center gap-3 rounded-full bg-bone px-7 py-4 font-semibold text-ink transition hover:scale-[1.03]">
              Build an AI workflow <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#systems" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-bone transition hover:border-white/40 hover:bg-white/10">
              See the operating layer
            </a>
          </div>
        </div>

        <div className="relative min-h-[34rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-glow">
          <img src="https://picsum.photos/seed/ai-infrastructure/1200/1400" alt="Abstract AI infrastructure" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 grayscale contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-6">
            <div className="rounded-[2rem] border border-white/10 bg-ink/70 p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3 text-signal"><Cpu className="h-5 w-5" /><span className="text-sm font-medium uppercase tracking-[0.22em]">Agent control plane</span></div>
              <div className="space-y-3">
                {['Lead intake routed', 'Customer response drafted', 'Report generated', 'Owner approval requested'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-bone">
                    <span>{item}</span><Check className="h-4 w-4 text-signal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Systems() {
  return (
    <section id="systems" className="px-5 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <h2 className="text-[clamp(2.4rem,5vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.06em]">A practical AI layer over the work businesses already do.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-fog">The goal is not novelty. It is operational leverage: faster responses, cleaner handoffs, fewer repetitive tasks, and systems that help teams stay focused on revenue.</p>
        </div>
        <div className="grid auto-rows-[17rem] grid-flow-dense grid-cols-1 gap-4 md:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.075] ${capability.className}`}>
                <div className="flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/12 text-signal ring-1 ring-signal/20 transition duration-700 group-hover:scale-110"><Icon className="h-6 w-6" /></div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-bone">{capability.title}</h3>
                    <p className="mt-3 leading-7 text-fog">{capability.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
    cards.forEach((card, index) => {
      gsap.fromTo(card, { y: 90, scale: 0.92, opacity: 0.35 }, {
        y: index * -18,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          end: 'top 42%',
          scrub: true
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="workflow" className="px-5 py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <h2 className="text-[clamp(2.4rem,4.8vw,5.2rem)] font-semibold leading-none tracking-[-0.06em]">From manual tasks to managed agentic workflows.</h2>
          <p className="mt-6 text-lg leading-8 text-fog">Heck Holdings turns messy recurring work into controlled AI-assisted systems that can operate across tools while keeping the business owner in command.</p>
        </div>
        <div className="space-y-6">
          {workflowCards.map(([title, body], index) => (
            <article key={title} className="stack-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.105] to-white/[0.035] p-8 shadow-2xl backdrop-blur">
              <div className="mb-10 flex items-center justify-between text-fog">
                <span className="text-sm uppercase tracking-[0.24em]">{String(index + 1).padStart(2, '0')}</span>
                <Zap className="h-5 w-5 text-signal" />
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-bone">{title}</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-fog">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const words = 'Automation should not make a business feel less human. It should give people the room to serve customers better, make sharper decisions, and spend more time on work that compounds.'.split(' ');

  useGSAP(() => {
    if (!textRef.current) return;
    const spans = textRef.current.querySelectorAll('span');
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.08,
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 78%',
        end: 'bottom 38%',
        scrub: true
      }
    });
  }, []);

  return (
    <section id="outcomes" className="relative overflow-hidden px-5 py-32 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <p ref={textRef} className="word-reveal mx-auto max-w-5xl text-center text-[clamp(2.2rem,5.8vw,6.1rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-bone">
          {words.map((word, index) => <span key={`${word}-${index}`}>{word} </span>)}
        </p>
        <div className="mt-20 grid gap-4 md:grid-cols-5">
          {outcomes.map((outcome) => (
            <div key={outcome} className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 text-sm font-medium leading-6 text-bone">
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <footer className="px-5 pb-8 pt-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-bone p-8 text-ink md:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bone"><Sparkles className="h-4 w-4" /> Heck Holdings</div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.07em]">Put AI to work where your business loses time.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-ink/70">For everyday businesses ready to automate the busywork, modernize operations, and build an AI operating layer that supports real growth.</p>
            <a href="mailto:heck@ryseseo.com" className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-bone transition hover:scale-[1.03]">Contact Heck Holdings <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-ink/55 md:flex-row">
          <span>heckholdings.com</span>
          <span>Artificial intelligence, agent infrastructure, workflow automation.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <main className="noise min-h-screen overflow-x-hidden bg-ink text-bone">
      <Nav />
      <Hero />
      <Systems />
      <WorkflowSection />
      <Outcomes />
      <FinalCta />
    </main>
  );
}
