import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listaProd.css";

export default function lerProd() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      
  }, []);

  return (
    <div className="paginaLista">
      <div className="containerLista">
        <h1 className="tituloLista">Todos os Produtos</h1>

        <div className="produtosGrid">
          {produtos.map((produto) => (
            <div key={produto.id} className="produtoCard">
              <h2>{produto.nome}</h2>
              <p>Preço: R${produto.preco}</p>
              <a href={produto.url} target="_blank" rel="noopener noreferrer">
                {produto.url}
              </a>
            </div>
          ))}
        </div>

        {produtos.length === 0 && (
          <p className="semProdutos">Nenhum produto encontrado no banco de dados.</p>
        )}

        <button className="btnVoltar" onClick={() => navigate("/home")}>
          Voltar
        </button>
      </div>
    </div>
  );
}
