import React from 'react'
import Card from './Card';
import {connect} from 'react-redux'; // conecta o componente ao estado

const Media =  props => {    
    const {min, max} = props;

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min)/2}</strong>
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

export default connect(mapStateToProps)(Media);
