import React, {Component} from 'react';
import Cabecalho from '../../components/cabecalho';

export default class Plantas extends Component{
	render(){
		return(
			<>
			<Cabecalho/>
			<div className="fundo">
				<div className="conteudo">
					<br/><br/>plantas
				</div>
			</div>
			</>
		)
	}
}