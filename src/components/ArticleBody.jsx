import React from 'react';

const ArticleBody = ({ content }) => {
  const defaultContent = `
    O AVC isquêmico é uma condição médica grave que requer atenção imediata e conhecimento especializado para um manejo adequado. Esta condição representa uma das principais causas de morbidade e mortalidade em todo o mundo, sendo fundamental que profissionais de saúde estejam preparados para identificar, diagnosticar e tratar adequadamente os pacientes acometidos.

    A compreensão dos mecanismos fisiopatológicos, sinais clínicos e abordagens terapêuticas é essencial para otimizar os resultados e minimizar as sequelas neurológicas. O tempo é um fator crítico no tratamento do AVC isquêmico, onde cada minuto pode fazer a diferença entre a recuperação completa e deficiências permanentes.

    Este artigo aborda de forma abrangente todos os aspectos relevantes do AVC isquêmico, desde a fisiopatologia até as mais recentes diretrizes de tratamento, fornecendo aos profissionais de saúde as ferramentas necessárias para uma prática clínica baseada em evidências.
  `;

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <div className="space-y-6">
                {defaultContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            )}
          </div>
          
          {/* Tabela de destaque exemplo */}
          <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#ff7e82' }}>
                  <th className="px-6 py-3 text-left text-white font-semibold">
                    Critério
                  </th>
                  <th className="px-6 py-3 text-left text-white font-semibold">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    Tempo de início
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Menos de 4,5 horas para trombolíticos
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    Escala NIHSS
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Avaliação neurológica padronizada
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    Contraindicações
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Hemorragia ativa, cirurgia recente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
