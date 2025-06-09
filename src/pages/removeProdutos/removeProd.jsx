import React from "react";
import ListaBase from "../../componentes/listaBase/listaBase";
import "./removeProd.css";

export default function RemoveProduto() {
  return (
    <div className="paginaLista-remover">
      <div className="containerLista-remover">
        <ListaBase mostrarEditar={false} mostrarRemover={true} />
      </div>
    </div>
  );
}
