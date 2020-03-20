import React, {Component} from 'react';
import Cabecalho from '../../components/cabecalho';
export default class Receitas extends Component{
	render(){
		return(
		<>
			<Cabecalho/>
			<div className="fundo">
				<div className="conteudo">
					<br/><br/>Receitas
				</div>
			</div>
		</>
		)
	}
}