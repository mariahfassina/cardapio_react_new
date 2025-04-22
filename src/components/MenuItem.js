import React from 'react';

function MenuItem({ nome, descricao, preco, imagemUrl }) {
  return (
    <div className="menu-item">
      <img src={imagemUrl} alt={nome} className="menu-item-imagem" />
      <div className="menu-item-info">
        <h3 className="menu-item-nome">{nome}</h3>
        <p className="menu-item-descricao">{descricao}</p>
        <p className="menu-item-preco">{preco}</p>
      </div>
    </div>
  );
}

export default MenuItem;
