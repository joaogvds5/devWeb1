import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./removeProd.css";

export default function RemoveProd() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  const API_URL = "http://localhost:3001/produtos";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProdutos(data))
      
  }, []);

  const removerProduto = async (id) => {
    const confirmacao = window.confirm("Tem certeza que deseja remover este produto?");
    if (!confirmacao) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao remover produto.");
      }

      // Atualiza lista local
      setProdutos(produtos.filter(produto => produto.id !== id));
      alert("Produto removido com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao remover o produto do banco.");
    }
  };

  return (
    <div className="paginaRemove">
      <div className="containerProdutos">
        <h1 className="tituloLista">Remover Produtos</h1>

        <div className="produtosGrid">
          {produtos.map((produto) => (
            <div key={produto.id} className="produtoCard">
              <h2>{produto.nome}</h2>
              <p>Preço: R${produto.preco}</p>
              <a href={produto.url} target="_blank" rel="noopener noreferrer">
                {produto.url}
              </a>
              <button
                className="btnRemover"
                onClick={() => removerProduto(produto.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        {produtos.length === 0 && (
          <p className="semProdutos">Nenhum produto disponível.</p>
        )}

        <button className="btnVoltar" onClick={() => navigate("/home")}>
          Voltar
        </button>
      </div>
    </div>
  );
}
