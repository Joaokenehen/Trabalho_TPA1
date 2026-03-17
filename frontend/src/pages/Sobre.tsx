export function Sobre() {
  return (
    <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow mt-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre a Aplicação</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Projeto desenvolvido para a atividade avaliativa 1 de Técnicas de Programação Avançada. 
          A aplicação consiste em um sistema de gerenciamento de produtos (CRUD) operando em memória, 
          construído com React, TypeScript e estilizado com Tailwind CSS.
        </p>
      </section>

      <hr className="border-gray-200 mb-8" />

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sobre o Desenvolvedor</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <strong className="text-gray-700 w-24">Nome:</strong>
            <span className="text-gray-600">João Gustavo Quennehen</span>
          </div>

          <div className="flex items-center gap-3">
            <strong className="text-gray-700 w-24">E-mail:</strong>
            <a href="mailto:joao_quennehen@outlook.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              joao_quennehen@outlook.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <strong className="text-gray-700 w-24">Contato:</strong>
            <span className="text-gray-600">(44) 99702-5387</span>
          </div>

          <div className="flex items-center gap-3">
            <strong className="text-gray-700 w-24">Portfólio:</strong>
            <a 
              href="https://www.jgtechbrasil.com.br/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              Meu Portfólio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}