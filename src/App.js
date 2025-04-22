import './App.css';
import React from 'react';
import dados from './dados.json'; // Importa os dados do arquivo JSON
import MenuItem from './components/MenuItem'; // Componente para exibir os itens do cardápio

function App() {
  return (
    <div className="app-container">
      <h1>Cardápio</h1>
      
      {/* Renderizando as categorias do cardápio */}
      <h2>Massas</h2>
      <section className="cardapio-lista">
        {dados.massas.map((item) => (
          <MenuItem
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagemUrl={`/images/${item.imagem}`} // Caminho para a imagem
          />
        ))}
      </section>
      
      <h2>Sobremesas</h2>
      <section className="cardapio-lista">
        {dados.sobremesas.map((item) => (
          <MenuItem
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagemUrl={`/images/${item.imagem}`} // Caminho para a imagem
          />
        ))}
      </section>
      
      <h2>Pratos Típicos</h2>
      <section className="cardapio-lista">
        {dados.tipicos.map((item) => (
          <MenuItem
            key={item.nome}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagemUrl={`/images/${item.imagem}`} // Caminho para a imagem
          />
        ))}
      </section>
    </div>
  );
}

export default App;
