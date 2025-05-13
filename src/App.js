import './App.css';
import React, { Suspense, lazy } from 'react'; // Adicionado Suspense e lazy
import dados from './dados.json'; // Importa os dados do JSON
import MenuItem from './components/MenuItem'; // Importa o componente MenuItem

// Importa o componente ExtraInfo dinamicamente
const ExtraInfo = lazy(() => import('./components/ExtraInfo'));

function App() {
  let itemIndex = 0; // Contador para o índice global

  return (
    <div className="app-container">
      <h1>Cardápio </h1>

      {/* Seção Massas */}
      <h2 id="categoria-massas-titulo">Massas</h2>
      <section className="cardapio-lista" aria-labelledby="categoria-massas-titulo">
        {dados.massas.map((item) => (
          <MenuItem
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            // Usa o caminho DIRETAMENTE do dados.json
            imagemUrl={item.imagem}
            index={itemIndex++} // Passa o índice para MenuItem
          />
        ))}
      </section>

      {/* Seção Sobremesas */}
      <h2 id="categoria-sobremesas-titulo">Sobremesas</h2>
      <section className="cardapio-lista" aria-labelledby="categoria-sobremesas-titulo">
        {dados.sobremesas.map((item) => (
          <MenuItem
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            // Usa o caminho DIRETAMENTE do dados.json
            imagemUrl={item.imagem}
            index={itemIndex++} // Passa o índice
          />
        ))}
      </section>

      {/* Seção Pratos Típicos */}
      <h2 id="categoria-tipicos-titulo">Pratos Típicos</h2>
      <section className="cardapio-lista" aria-labelledby="categoria-tipicos-titulo">
        {dados.tipicos.map((item) => (
          <MenuItem
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            // Usa o caminho DIRETAMENTE do dados.json
            imagemUrl={item.imagem}
            index={itemIndex++} // Passa o índice
          />
        ))}
      </section>

      {/* Seção de Informações Adicionais com Code Splitting */}
      <Suspense fallback={<div>Carregando informações extras...</div>}>
        <ExtraInfo />
      </Suspense>
    </div>
  );
}

export default App;
