import React from 'react';
import FeaturedPostCard from './FeaturedPostCard';
import TopicSearch from './TopicSearch';
import TaxonomyGrid from './TaxonomyGrid';
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

            {/* Busca por tópicos */}
            <section>
              <TopicSearch />
            </section>

            {/* Grid de grandes temas */}
            <section>
              <TaxonomyGrid />
            </section>

            {/* Grid de procedimentos */}
            <section>
              <ProceduresGrid />
            </section>

            {/* Bloco promocional */}
            <section>
              <PromoBlock />
            </section>
          </div>

          {/* Coluna direita - Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Badge de newsletter */}
            <section>
              <NewsletterBadge />
            </section>

            {/* Mais clicados */}
            <section>
              <MostClicked />
            </section>

            {/* Bloco WhatsApp */}
            <section>
              <TextBlock />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
