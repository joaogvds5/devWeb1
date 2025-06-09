import React from "react";
import ListaBase from "../../componentes/listaBase/listaBase";
import "./listaProd.css";

export default function ListaProdutos() {
  return (
    <div className="paginaLista-produtos">
      <div className="containerLista-produtos">
        <ListaBase mostrarEditar={false} mostrarRemover={false} />
      </div>
    </div>
  );
}
