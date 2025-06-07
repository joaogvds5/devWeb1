import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function atualizar() {
  const navigate = useNavigate();


  
  const API_URL = "http://localhost:3000/produtos";
  const { id } = useParams(); // Caso queira acessar o ID do produto da URL, por exemplo
  const [form, setForm] = useState({
    nome: '',
    url: '',
    preco: '',
  });

  // Função para simular o carregamento dos dados do produto com base no id (Exemplo de API fictícia)
  useEffect(() => {
    // Simulando que os dados já foram carregados (exemplo de uma chamada à API)
    const produto = {
      nome: '',
      url: '',
      preco: '',
    };
    
    setForm(produto); // Preenche os dados no formulário
  }, [id]);

  const userDados = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
  async function buscarProduto() {
    const res = await fetch(`http://localhost:3000/produtos/${id}`);
    const data = await res.json();
    setForm({
      nome: data.nome,
      url: data.imagem, // usar o nome correto do campo
      preco: data.valor,
    });
  }

  buscarProduto();
}, [id]);

const realizaEdicao = async (e) => {
  e.preventDefault();

  await fetch(`http://localhost:3001/produtos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: form.nome,
      imagem: form.url,
      valor: parseFloat(form.preco)
    })
  });

  alert("Produto editado com sucesso!");
  navigate("/home");
};


  return (
    <div className='cadastroProduto'>
      <div className='formContainer'>
        <h1 className='tituloCadastro'>Edição de Produto</h1>
        <form onSubmit={realizaEdicao} className='formulario'>
          <div className='formGroup'>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={userDados}
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              name="preco"
              value={form.preco}
              onChange={userDados}
              required
            />
          </div>

          <div className='formGroup'>
            <label htmlFor="url">Url:</label>
            <input
              type="text"
              name="url"
              value={form.url}
              onChange={userDados}
              required
            />
          </div>

          <div className='botoesCadastro'>
            <button id='cadastro' type="submit">Salvar</button>
            <button
              id='cancela'
              type="button"
              onClick={() => navigate("/home")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
