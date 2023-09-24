import { useState } from "react"

import styles from './Formulario.module.css'

const Formulario = (props) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    function imc() {
        const resultado = peso / (altura * altura);
        return resultado.toFixed(2);
    }

    function mostraResultado() {
        const inputArray = Array.from(document.querySelectorAll("input"));

        if (inputArray[0].value == 0 && inputArray[1].value == 0) {
            alert('Insira um número maior do que 0 nos dois campos');
        } else if ((inputArray[0].value > 3 || inputArray[0].value == 0) &&
            (inputArray[1].value > 400 || inputArray[1].value == 0)) {
            alert('Insira uma ALTURA válida e um PESO válido');
        } else if (inputArray[0].value > 3 || inputArray[0].value == 0) {
            alert('Insira uma ALTURA válida');
        } else if (inputArray[1].value > 500 || inputArray[1].value == 0) {
            alert('Insira um PESO válido');
        } else {
            props.pegaResultado(imc);
        }

        inputArray.forEach(
            input => (input.value = "")
        );
    }

    return (
        <>
            <div className="container">
                <h1>Calculadora de IMC</h1>
                <form>
                    <input type="number" placeholder="Altura (m). Ex: 1,70" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                    <input type="number" placeholder="Peso (kg). Ex: 70,5" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                    <button type="button" onClick={mostraResultado}>Calcular</button>
                </form>
            </div>
        </>
    )
}

export default Formulario;