import React from 'react';
import FeaturedPostCard from './FeaturedPostCard';
import CombinedTopicsSection from './CombinedTopicsSection';
import ProceduresGrid from './ProceduresGrid';
import TextBlock from './TextBlock';
import NewsletterBadge from './NewsletterBadge';
import MostClicked from './MostClicked';
import PromoBlock from './PromoBlock';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Grid principal baseado no mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Coluna esquerda - Conteúdo principal */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Card de destaque principal */}
            <section>
              <FeaturedPostCard 
                title="Abordagem completa do derrame pleural"
                readTime="Em 1 minuto"
              />
            </section>
             {/* Seção horizontal compartilhada - Grandes Temas + Tópicos A-Z */}
        <CombinedTopicsSection />

            {/* Grid de procedimentos */}
            <section>
              <ProceduresGrid />
            </section>

            
          </div>

        </div>

      </main>
    </div>
  );
};

export default MainLayout;
