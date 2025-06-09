import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListaBase({ mostrarEditar, mostrarRemover }) {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  async function carregarProdutos() {
    try {
      const resposta = await fetch("http://localhost:3001/produtos");
      if (!resposta.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const dados = await resposta.json();
      setProdutos(dados);
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function handleRemover(id) {
    const confirmar = window.confirm("Tem certeza que deseja remover este produto?");
    if (!confirmar) return;

    try {
      const resposta = await fetch(`http://localhost:3001/produtos/${id}`, {
        method: "DELETE",
      });
      if (!resposta.ok) {
        throw new Error("Erro ao remover produto");
      }
      setProdutos((produtosAntigos) => produtosAntigos.filter((p) => p.id !== id));
    } catch (erro) {
      console.error("Erro ao remover produto:", erro);
      alert("Não foi possível remover o produto.");
    }
  }

  return (
    <div className="paginaLista" style={styles.paginaLista}>
      <div className="containerLista" style={styles.containerLista}>
        <h1 style={styles.titulo}>Lista de Produtos</h1>
        {produtos.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <ul style={styles.lista}>
            {produtos.map((produto) => (
              <li key={produto.id} style={styles.itemProduto}>
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  {produto.imagem && (
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      style={styles.imagemProduto}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/80?text=Sem+Imagem";
                      }}
                    />
                  )}

                  <div style={styles.infoProduto}>
                    <span style={styles.nomeProduto}>{produto.nome}</span>
                    <span style={styles.valorProduto}>
                      R$ {parseFloat(produto.valor).toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>

                <div>
                  {mostrarEditar && (
                    <button
                      style={{ ...styles.botao, ...styles.botaoEditar }}
                      onClick={() => navigate(`/editaProduto/${produto.id}`)}
                    >
                      Editar
                    </button>
                  )}
                  {mostrarRemover && (
                    <button
                      style={{ ...styles.botao, ...styles.botaoRemover }}
                      onClick={() => handleRemover(produto.id)}
                    >
                      Remover
                    </button>
                  )}
                </div>
              </li>

            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {

  infoProduto: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  },

  valorProduto: {
    marginTop: "4px",
    fontSize: "14px",
    color: "#555",
  },

  paginaLista: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  containerLista: {
    width: "700px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  itemProduto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  imagemProduto: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "6px",
    marginRight: "15px",
    flexShrink: 0,
  },
  nomeProduto: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  botao: {
    marginLeft: "10px",
    padding: "6px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  botaoEditar: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
  botaoRemover: {
    backgroundColor: "#f44336",
    color: "white",
  },
};
