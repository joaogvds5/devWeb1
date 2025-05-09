import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function SignUp() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
      nome: '',
      email: '',
      telefone: '',
      senha: ''
    });

    const userDados = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const realizaCadastro = (e) => {
      e.preventDefault();
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    };

    return (
      <div className='signUpTela'>
        <h1>Cadastro</h1>
        <div className='camposPreencher'>
          <form onSubmit={realizaCadastro}>
            <div>
              <label>Nome completo:</label><br />
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={userDados}
                required
              />
            </div>
            
            <div>
              <label>Email:</label><br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={userDados}
                required
              />
            </div>
            <div>
              <label>Telefone:</label><br />
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                pattern="[0-9]{11}"
                onChange={userDados}
                required
              />
            </div>
            <div>
              <label>Senha:</label><br />
              <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={userDados}
                required
              />
            </div>
            <br />

            <div className='finalizarCadastro'>
              <button id='cadastro' type="submit">Cadastrar</button>
              <button id='cancela' type="button" onClick={() => navigate("/")}>Cancelar</button>
            </div>

          </form>
        </div>
      </div>
  );
}
