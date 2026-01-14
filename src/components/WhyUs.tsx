import { ShieldCheck, Clock, Award } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Garantia de Fábrica",
      description:
        "Realizamos revisões oficiais sem perda da garantia de fábrica da sua viatura. Qualidade certificada em todos os serviços.",
    },
    {
      icon: Award,
      title: "Profissionais Certificados",
      description:
        "Equipa técnica altamente qualificada e em constante formação para lidar com as mais recentes tecnologias automóveis.",
    },
    {
      icon: Clock,
      title: "Rapidez e Transparência",
      description:
        "Cumprimos os prazos estipulados e apresentamos orçamentos claros, sem surpresas na fatura final.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <div className="bg-secondary p-3 rounded-xl shadow-lg shadow-secondary/20">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
