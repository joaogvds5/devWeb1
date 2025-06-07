import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./criaProd.css";

export default function CriarProd() {
  const navigate = useNavigate();
  const API_URL = "http://localhost:3001/produtos";


  const [form, setForm] = useState({
    nome: '',
    url: '',
    preco: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const salvarProduto = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: form.nome,
          imagem: form.url,           // nome correto do campo esperado
          valor: parseFloat(form.preco)  // nome correto do campo esperado
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar produto.");
      }

      alert("Produto cadastrado com sucesso!");
      navigate("/home"); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='cadastroProduto'>
      <div className='formContainer'>
        <h1 className='tituloCadastro'>Cadastro de Produto</h1>

        <form onSubmit={salvarProduto} className='formulario'>

          <div className='formGroup'>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              step="0.01"
              name="preco"
              value={form.preco}
              onChange={handleChange}
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="url">URL da Imagem:</label>
            <input
              type="text"
              name="url"
              value={form.url}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="mensagemErro">Erro: {error}</p>}
          {loading && <p className="mensagemCarregando">Salvando produto...</p>}

          <div className='botoesCadastro'>
            <button id="cadastro" type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Cadastrar"}
            </button>

            <button id='cancela' type="button" onClick={() => navigate("/home")}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
