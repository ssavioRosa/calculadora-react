import './botoesStyle.css'
import React, { useState } from 'react'
import { FaBackspace } from "react-icons/fa";

    const botoes = ({setNumero, apaga, resultado} ) => {


    return (


        <table className='botoes'>
            <tbody>
                <tr>
                    <td>
                        <button className='botao' onClick= {() => setNumero('apaga')}>C</button>
                        <button className='botao' onClick={apaga} ><FaBackspace /></button>
                        <button className='botao' onClick= {() => setNumero('/')}>/</button>
                        <button className='botao' onClick= {() => setNumero('*')}>*</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='botao' onClick= {() => setNumero('7')}>7</button>
                        <button className='botao' onClick= {() => setNumero('8')}>8</button>
                        <button className='botao' onClick= {() => setNumero('9')}>9</button>
                        <button className='botao' onClick= {() => setNumero('-')} >-</button>
                    </td>

                </tr>
                <tr>
                    <td>
                        <button className='botao'  onClick= {() => setNumero('4')}>4</button>
                        <button className='botao'  onClick= {() => setNumero('5')}>5</button>
                        <button className='botao'  onClick= {() => setNumero('6')}>6</button>
                        <button className='botao'  onClick= {() => setNumero('+')}>+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='botao'  onClick= {() => setNumero('1')}>1</button>
                        <button className='botao'  onClick= {() => setNumero('2')}>2</button>
                        <button className='botao'  onClick= {() => setNumero('3')}>3</button>
                        <button className='botao' rowSpan='2' onClick={resultado}>=</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='botao2' colsPan='2' onClick= {() => setNumero('0')}>0</button>
                        <button className='botao' onClick= {() => setNumero('.')}>.</button>
                    </td>
                </tr>
   
            </tbody>
        </table>





    )
}

export default botoes