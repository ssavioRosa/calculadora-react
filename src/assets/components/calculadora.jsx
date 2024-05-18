import './calculadoraStyle.css'
import Display from "./display/display";
import Botoes from "./botoes/botoes";

import React, { useState } from 'react'

const calculadora = () => {

    const [numero, setNumero] = useState('')

    function digita(num) {
        if (num === 'apaga') {
            setNumero('');
        } else {
            if (numero.length < 20) {
                const expressao = numero + num;
                setNumero(expressao);
            }
        }
    }
    function apaga() {

        var expressao = numero

        setNumero(expressao.slice(0, -1))



    }
    function resultado() {
        let result = eval(numero);
 
        if (result.toString().length > 20) {
  
            result = parseFloat(result.toPrecision(20));
        }
        setNumero(result.toString());
    }

    return (

        <div className="flex">

            <Display numero={numero} />
            <Botoes setNumero={digita} apaga={apaga} resultado={resultado} />
        </div>


    )
}

export default calculadora