import React from 'react'
import { connect } from 'react-redux';
import Card from './Card';

const Sorteio =  props => {
   const {max, min} = props;
   const aleatorio = (parseInt(Math.random() * (max - min) + min))

   return (
           <Card title="Sorte de um número" purple>
               <div>
                   <span>
                       <span>Resultado: </span>
                       <strong>{aleatorio}</strong>
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
export default connect(mapStateToProps)(Sorteio)