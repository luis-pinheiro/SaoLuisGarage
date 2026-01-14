import {
  Laptop,
  Car,
  Disc,
  CircleDot,
  Wind,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    title: "Mecânica e Diagnóstico",
    description:
      "Reparações mecânicas completas e diagnóstico eletrónico avançado para todas as marcas.",
    icon: Laptop,
  },
  {
    title: "Revisão Oficial",
    description:
      "Manutenção preventiva conforme o plano da marca, sem perder a garantia de fábrica.",
    icon: Car,
  },
  {
    title: "Eletricidade e Eletrónica",
    description:
      "Reparação de sistemas elétricos, centralinas, sensores e substituição de baterias.",
    icon: Laptop,
  },
  {
    title: "Pneus e Alinhamento",
    description:
      "Venda, montagem e calibração de pneus. Garantimos a segurança e longevidade dos seus pneus.",
    icon: CircleDot,
  },
  {
    title: "Ar Condicionado",
    description:
      "Carregamento, higienização e reparação de sistemas de climatização para o seu conforto.",
    icon: Wind,
  },
  {
    title: "Travões e Segurança",
    description:
      "Verificação e substituição de pastilhas, discos e componentes críticos de segurança.",
    icon: Disc,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços de <span className="text-primary">Excelência</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para manter o seu automóvel
            seguro e com o melhor desempenho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
