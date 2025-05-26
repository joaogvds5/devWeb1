import "./style.css"
import { useState } from "react";

export default function MenuLateral() {

  return (
    <div className="menuLateral">
      <div className="perfil">
        <div className="fotoUsuario"></div>
        <h3>João da Silva</h3>
      </div>

      <div className="menuOpcoes">
        <button>📊 Estatísticas</button>
        <button>⚙️ Configurações</button>

        <button id="sairButton">🔒 Sair</button>

        
      

      </div>
    </div>
  );
}
