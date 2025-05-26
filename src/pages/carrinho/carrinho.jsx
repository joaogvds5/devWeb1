import React from 'react';
import "./style.css"

export default function carrinho(carrinhoItens, setcarrinhoItens) {


  return (
    <div>
        <div className='titulo'>
          Seu carrinho possui {carrinhoItens?.length} itens
        </div>

        <div className='itens'>
          {carrinhoItens?.map((item, index) => {
            return (
              <div 
                className='item'
                key={index}>

                <img src={item.imagem} alt={item.nome} />

                <div>{item.nome}</div>
              </div>
            );
          }
        
        
        )}
        </div>

        <div className='finaliza'>

        </div>

    </div>
  )
}
