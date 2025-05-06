// --- START OF FILE src/components/MenuItem.js ---

import React from 'react';

function MenuItem({ nome, descricao, preco, imagemUrl, index }) {
  const imgWidth = 300; // Ajuste se necessário
  const imgHeight = 200; // Ajuste se necessário
  const loadingStrategy = index < 3 ? 'eager' : 'lazy';
  const fetchPriorityStrategy = index === 0 ? 'high' : 'auto'; // camelCase

  return (
    <div className="menu-item">
      <img
        src={imagemUrl}
        alt={nome}
        className="menu-item-imagem"
        width={imgWidth}
        height={imgHeight}
        loading={loadingStrategy}
        fetchPriority={fetchPriorityStrategy} // Prop corrigida para camelCase
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