"use client";

import { useActionState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { sendContactEmail, ActionState } from "@/app/actions";

const initialState: ActionState = {};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

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

            {state.success ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Enviado com Sucesso!
                  </h3>
                  <p>{state.message}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 text-sm font-semibold underline hover:no-underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form action={formAction} className="space-y-6">
                {state.message && !state.success && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <p className="text-sm font-medium">{state.message}</p>
                  </div>
                )}

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
                      name="name"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${state.errors?.name ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-primary focus:ring-primary/20"} outline-none transition-all`}
                      placeholder="Seu nome"
                      required
                      disabled={isPending}
                    />
                    {state.errors?.name && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {state.errors.name[0]}
                      </p>
                    )}
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
                      name="phone"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${state.errors?.phone ? "border-red-500 focus:ring-red-200" : "border-slate-200 focus:border-primary focus:ring-primary/20"} outline-none transition-all`}
                      placeholder="9xxxxxxxx"
                      required
                      disabled={isPending}
                    />
                    {state.errors?.phone && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {state.errors.phone[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Serviço Pretendido
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      disabled={isPending}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                    >
                      <option value="Diagnóstico / Check-up">
                        Diagnóstico / Check-up
                      </option>
                      <option value="Revisão Geral">Revisão Geral</option>
                      <option value="Mudança de Óleo">Mudança de Óleo</option>
                      <option value="Travões">Travões</option>
                      <option value="Pneus">Pneus</option>
                      <option value="Outro">Outro (Descrever abaixo)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {state.errors?.service && (
                    <p className="mt-1 text-xs text-red-500 font-medium">
                      {state.errors.service[0]}
                    </p>
                  )}
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
                    name="message"
                    rows={4}
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Ex: Preciso de orçamento para..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Solicitar Agendamento"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Onde Estamos
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Visite-nos na nossa oficina em Figueiredo, Oliveira de Azeméis
                para um serviço de excelência. Garantimos transparência e
                qualidade em cada intervenção.
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

            {/* Map Container */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4975731546606!2d-8.494649123583217!3d40.795058532526085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd239d84a258d8fb%3A0xfdb2dbb92fbe79d1!2zR2FyYWdlbSBTw6NvIEx1w61z!5e0!3m2!1sen!2spt!4v1768406934523!5m2!1sen!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Garagem São Luís"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
