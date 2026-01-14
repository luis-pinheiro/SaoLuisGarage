import Link from "next/link";
import { Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                São Luis <span className="text-primary">Garagem</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              A sua oficina de confiança em Oliveira de Azeméis. Comprometidos com a
              qualidade, rapidez e transparência em todos os serviços.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#contactos"
                  className="hover:text-white transition-colors"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal/Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Informações</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Livro de Reclamações
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-xs text-slate-500">
              © {new Date().getFullYear()} São Luis Garagem. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
