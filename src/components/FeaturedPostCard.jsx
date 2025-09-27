import React from 'react';
import { Clock, TrendingUp, Play } from 'lucide-react';

const FeaturedPostCard = ({ title, image, readTime }) => {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300">
      <div className="relative">
        {image ? (
          <div className="aspect-[16/9] bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-gradient-to-br from-red-100 via-red-200 to-red-300 flex items-center justify-center relative overflow-hidden">
            {/* Padrão de fundo sutil */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent"></div>
            </div>
            
            {/* Ícone central */}
            <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6">
              <TrendingUp className="w-12 h-12 text-red-600" />
            </div>
            
            {/* Botão play sobreposto */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-red-500 hover:bg-red-600 rounded-full p-4 cursor-pointer transform hover:scale-110 transition-transform duration-200">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        )}
        
        {/* Time badge - posição fixa no canto superior direito */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-sm">
          <Clock className="w-3 h-3 text-red-500" />
          <span className="text-xs font-semibold text-red-600">{readTime || "Em 1 minuto"}</span>
        </div>
        
        {/* Badge de categoria */}
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          DESTAQUE
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-200 cursor-pointer leading-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          Conteúdo essencial para sua prática clínica diária. Aprenda as técnicas mais atualizadas e baseadas em evidências.
        </p>
        
        {/* Botão de ação */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
            Ler artigo completo
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
