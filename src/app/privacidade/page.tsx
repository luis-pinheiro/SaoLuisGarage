import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade | São Luis Garagem',
    description: 'Política de Privacidade da São Luis Garagem - Saiba como tratamos os seus dados.',
};

export default function PrivacyPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-32 space-y-8">
            <h1 className="text-4xl font-bold text-slate-900">Política de Privacidade</h1>

            <div className="prose prose-slate max-w-none text-slate-600">
                <p>A sua privacidade é importante para nós. É política do São Luis Garagem respeitar a sua privacidade em relação a qualquer informação que possamos recolher no site São Luis Garagem, e outros sites que possuímos e operamos.</p>

                <h3>1. Informações que recolhemos</h3>
                <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos a recolher e como será usado.</p>

                <h3>2. Uso de dados</h3>
                <p>Apenas retemos as informações recolhidas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

                <h3>3. Partilha de dados</h3>
                <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

                <h3>4. Cookies</h3>
                <p>O nosso site pode usar cookies para melhorar a experiência do utilizador. Ao continuar a navegar, aceita a nossa política de cookies.</p>

                <p className="mt-8 text-sm">Esta política é efetiva a partir de Janeiro de {new Date().getFullYear()}.</p>
            </div>
        </div>
    );
}
