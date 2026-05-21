import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicePages } from '../services';

const service = servicePages['ai-consulting'];

export const metadata: Metadata = {
  title: `${service.title} | Heck Holdings`,
  description: service.description,
  alternates: { canonical: '/ai-consulting' },
  openGraph: { title: `${service.title} | Heck Holdings`, description: service.description, url: 'https://heckholdings.com/ai-consulting' }
};

export default function AIConsultingPage() {
  return <ServicePage service={service} />;
}

function ServicePage({ service }: { service: typeof servicePages['ai-consulting'] }) {
  return (
    <main className="noise min-h-screen overflow-x-hidden bg-ink text-bone">
      <section className="relative overflow-hidden px-5 py-10 md:py-16">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-signal/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-fog transition hover:text-bone"><ArrowLeft className="h-4 w-4" /> Back to Heck Holdings</a>
          <div className="grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-signal">{service.eyebrow}</p>
              <h1 className="max-w-5xl text-[clamp(3rem,6.2vw,7rem)] font-semibold leading-[0.92] tracking-[-0.07em]">{service.hero}</h1>
            </div>
            <p className="text-lg leading-8 text-fog md:text-xl">{service.body}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6">
                <CheckCircle2 className="mb-6 h-5 w-5 text-signal" />
                <p className="font-semibold text-bone">{outcome}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 rounded-[2.5rem] border border-white/10 bg-bone p-8 text-ink md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
              <h2 className="text-[clamp(2.2rem,4.5vw,5rem)] font-semibold leading-none tracking-[-0.06em]">Ready to build a useful AI system?</h2>
              <a href="/#contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-bone transition hover:scale-[1.03]">Book an AI automation audit <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
