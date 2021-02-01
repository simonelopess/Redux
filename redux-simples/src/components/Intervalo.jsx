import './Intervalo.css'
import React from 'react'
import Card from './Card';
import { connect } from 'react-redux';

 const Intervalo = props => {

    const {max, min} = props;
    
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} readOnly />
                </span>
                <span>
                    <strong>Mínimo :</strong>
                    <input type="number" value={max} readOnly />
                </span>
            </div>
        </Card>
    )
}

//função que conecta o state ao componente
function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)