import React from "react";
import ListaBase from "../../componentes/listaBase/listaBase";
import "./atualizar.css";

export default function Atualizar() {
  return (
    <div className="paginaLista-editar">
      <div className="containerLista-editar">
        <ListaBase mostrarEditar={true} mostrarRemover={false} />
      </div>
    </div>
  );
}
