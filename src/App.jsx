import React, { useState } from 'react';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import MainLayout from './components/MainLayout';
import ArticleHeader from './components/ArticleHeader';
import ArticleNav from './components/ArticleNav';
import ArticleBody from './components/ArticleBody';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'article'

  const renderHomePage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <MainLayout />
      
      {/* Navigation to Article */}
      <section className="container mx-auto px-4 py-8 text-center">
        <button
          onClick={() => setCurrentView('article')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
        >
          Ver Exemplo de Artigo: AVC Isquêmico
        </button>
      </section>
    </div>
  );

  const renderArticlePage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ArticleHeader 
        title="AVC Isquêmico" 
        lastUpdated="Jul 11, 2023" 
      />
      <ArticleNav />
      <ArticleBody />
      
      {/* Back to Home */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setCurrentView('home')}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          ← Voltar para Home
        </button>
      </div>
    </div>
  );

  return currentView === 'home' ? renderHomePage() : renderArticlePage();
}

export default App;
