import React from 'react';

const VALOR_INICIAL = 0;

export default function App () {
    
    const [contador, setContador] = React.useState(VALOR_INICIAL);
    if (contador === VALOR_INICIAL) {
        console.log('1: Vou criar o contador e setContador');
    } else {
        console.log('3: Já existe um contador com valor ', contador);
    }
    function contar () {
        console.log('2: Contador é ', contador);
        setContador(contador + 1);
    }
    return(
       <div>
        <div>
            <h1>{contador}</h1>
            <button onClick={contar}>Incrementar</button>
        </div>

       </div>
   )
}