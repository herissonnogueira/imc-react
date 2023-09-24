import styles from './Resultado.module.css'

const Resultado = (props) => {

    function classificacao() {
        if (props.resposta < 18.5) {
            return "Magreza"
        } else if (props.resposta >= 18.5 && props.resposta < 25) {
            return "Normal"
        } else if (props.resposta >= 25 && props.resposta < 30) {
            return "Sobrepeso"
        } else if (props.resposta >= 30 && props.resposta < 35) {
            return "Obesidade grau I"
        } else if (props.resposta >= 35 && props.resposta < 40) {
            return "Obesidade grau II"
        } else if (props.resposta >= 40) {
            return "Obesidade grau III"
        }
    }

    return (
        <>
            <div className="container">
                {props.resposta > 0 ?
                    (<p>O <b>IMC</b> é: <br /><br /><span>{props.resposta}</span><br /><br />
                        A classificação deste <b>IMC</b> é: <br /><br /><span>{classificacao()}</span><br /><br /></p>) :
                    (<p></p>)
                }
            </div>
        </>
    )
}

export default Resultado;