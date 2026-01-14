import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[650px] flex items-center bg-slate-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60 z-10"></div>

      {/* Background Image Placeholder - Replace with actual image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20 pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-blue-100 text-sm font-medium tracking-wide">
              Oficina Certificada em Oliveira de Azeméis
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Serviço Multimarca com{" "}
            <span className="text-secondary">Qualidade</span> e{" "}
            <span className="text-blue-400">Honestidade</span>.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
            Revisão e reparação de todo o tipo de viaturas sem perder a garantia
            de fábrica. O seu carro em boas mãos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="#contactos"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transform hover:-translate-y-0.5"
            >
              Pedir Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="tel:+351916580788"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>Manutenção sem Perda de Garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>Peças Originais</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>Diagnóstico Avançado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
