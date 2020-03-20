import React, {Component} from 'react';
import Cabecalho from '../../components/cabecalho';
import {Row, Col, Image } from 'react-bootstrap';
//PARA USAR REDUX:
/*import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton, showTable, GuardaDados} from '../../actions';
*/
import './style.scss';

class Home extends Component{
	render(){
		return(
		<>
		<div className="ConteudoInicial">
		<Cabecalho fundo="none"/>
		<br/>
		aaaa
		</div>
		<div className="fundo">
			<div className="conteudo">
			    <Row>
					<Col>
						teste1
					</Col>
					<Col>
						teste2
					</Col>
				</Row>	
					
			
			</div>	
		</div>	
		</>
		)
	}
}

export default Home;
/*const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  showTb:   store.TableState.showTb,
  dados:    store.TableState.dados
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, showTable, GuardaDados}, dispatch);


  
export default connect(mapStateToProps, mapDispatchToProps)(Home);*/