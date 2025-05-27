
import React from 'react';

function MenuItem({ nome, descricao, preco, imagemUrl, index }) {
  const imgWidth = 300; // Dimensão de renderização no layout
  const imgHeight = 200; // Dimensão de renderização no layout
  
  // Define a estratégia de carregamento: 'eager' para as primeiras imagens, 'lazy' para as demais.
  const loadingStrategy = index < 3 ? 'eager' : 'lazy';
  
  // Define a prioridade de busca: 'high' para a primeira imagem, 'auto' para as demais.
  const fetchPriorityStrategy = index === 0 ? 'high' : 'auto';

  // Alt text descritivo: foca em descrever a imagem para acessibilidade e SEO.
  // Como a descrição detalhada do prato já está no texto do card,
  // o alt text pode ser mais direto sobre o que a imagem mostra.
  const descriptiveAltText = `Foto apetitosa de ${nome}`;

  // Adiciona PUBLIC_URL para garantir caminhos corretos em diferentes deploys
  const finalImageUrl = process.env.PUBLIC_URL + imagemUrl;

  return (
    <div className="menu-item">
      <img
        src={finalImageUrl}
        alt={descriptiveAltText} // Alt text descritivo
        className="menu-item-imagem"
        width={imgWidth}          // Ajuda a prevenir CLS (Cumulative Layout Shift)
        height={imgHeight}         // Ajuda a prevenir CLS
        loading={loadingStrategy} // Otimização de carregamento (lazy/eager loading)
        fetchPriority={fetchPriorityStrategy} // Otimização de prioridade de busca
      />
      <div className="menu-item-info">
        <h3 className="menu-item-nome">{nome}</h3>
        <p className="menu-item-descricao">{descricao}</p>
        <p className="menu-item-preco">{preco}</p>
      </div>
    </div>
  );
}

export default MenuItem;
// --- END OF FILE src/components/MenuItem.js ---