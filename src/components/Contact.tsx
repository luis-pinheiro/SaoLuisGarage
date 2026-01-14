"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contactos"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Agende a sua <span className="text-primary">Visita</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário e entraremos em contacto para confirmar o
              agendamento. Ou ligue diretamente para{" "}
              <span className="font-semibold text-primary">916 580 788</span>.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telemóvel
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="9xxxxxxxx"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Serviço Pretendido
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                >
                  <option>Diagnóstico / Check-up</option>
                  <option>Revisão Geral</option>
                  <option>Mudança de Óleo</option>
                  <option>Travões</option>
                  <option>Pneus</option>
                  <option>Outro (Descrever abaixo)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Ex: Preciso de orçamento para..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Solicitar Agendamento
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Onde Estamos
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Visite-nos na nossa oficina em Figueiredo, Oliveira de Azeméis para
                um serviço de excelência. Garantimos transparência e qualidade
                em cada intervenção.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Localização
                    </h3>
                    <p className="text-muted-foreground">
                      Rua do Rei 452, 3720-474 Figueiredo, Oliveira de Azeméis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Telefone
                    </h3>
                    <a
                      href="tel:+351916580788"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +351 916 580 788
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chamada para rede móvel nacional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      geral@saoluisgaragem.pt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Horário
                    </h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 09:00 - 18:30
                    </p>
                    <p className="text-muted-foreground">
                      Sábado: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                Google Maps Location Embed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
