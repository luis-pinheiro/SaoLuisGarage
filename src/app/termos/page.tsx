import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Termos e Condições | São Luis Garagem',
    description: 'Termos e Condições da São Luis Garagem.',
};

export default function TermsPage() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-32 space-y-8">
            <h1 className="text-4xl font-bold text-slate-900">Termos e Condições</h1>

            <div className="prose prose-slate max-w-none text-slate-600">
                <h3>1. Termos</h3>
                <p>Ao aceder ao site São Luis Garagem, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>

                <h3>2. Uso de Licença</h3>
                <p>É concedida permissão para descarregar temporariamente uma cópia dos materiais (informações ou software) no site São Luis Garagem, apenas para visualização transitória pessoal e não comercial.</p>

                <h3>3. Isenção de responsabilidade</h3>
                <p>Os materiais no site da São Luis Garagem são fornecidos &apos;como estão&apos;. São Luis Garagem não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>

                <h3>4. Limitações</h3>
                <p>Em nenhum caso o São Luis Garagem ou os seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em São Luis Garagem.</p>

                <p className="mt-8 text-sm">Estes termos são efetivos a partir de Janeiro de {new Date().getFullYear()}.</p>
            </div>
        </div>
    );
}
