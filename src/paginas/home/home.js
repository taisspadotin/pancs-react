import React, {Component} from 'react';
import Cabecalho from '../../components/cabecalho';
import {Row, Col, Carousel} from 'react-bootstrap';
import { Message } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
/*
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cabecalhoAcao} from '../../actions';
*/
import './style.scss';

/*teste*/

class Home extends Component{
	/*constructor(props){
		super(props);
		
		//this.refNav = React.createRef();
	}*/
	state =
	{
		cor_fundo: 'none',
		pagina: 0, 
		message: true
	}
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll =()=>{
		if(this.state.pagina === 0)
			{
				if(window.pageYOffset > 100)
				{	
					this.setState({cor_fundo: '#343a40'});
					this.setState({pagina: 1});
				}
			}
			else if(this.state.pagina === 1){
				if(window.pageYOffset === 0)
				{	
					this.setState({cor_fundo: 'none'});
					this.setState({pagina: 0});
				}
			}
	}
	handleDismiss = () => {
    this.setState({ message: false })
	}
	
	render(){
		let mensagem = '';
		if(this.state.message === true){
			mensagem = 
			<Message
          onDismiss={this.handleDismiss}
		  className="mensagem" 
          >
			<Link to='/login'><h4>Torne-se membro!</h4></Link>
			<p>Torne-se membro e nos ajude a catalogar mais plantas!<br/>
			Crie e compartilhe suas receitas com todo mundo, deixe sua opnião...
			</p>
		 </Message>;
		}
		return(
		<>
		<div className="ConteudoInicial">
		<Cabecalho fundo={this.state.cor_fundo}/>
		<br/>
		<div className="introducao">
			<h2>O que são as PANCS?</h2>
			<p>São plantas alimenticias não convencionais, que são ignoradas pela maior parte da população, seja por falta de conhecimento ou por razões sociais.</p>
		
		</div>
		</div>
		<div className="fundo">
		{/*<div className="conteudo"></div>	*/}
		<div className="meio-inicial">
				<Row align="center">
					<Col>
					<h2>Beneficios</h2>
					<p>Conheça os beneficios do consumo das plantas alimenticias não convencionais</p>
					</Col>
				</Row>
			    <Row align="center" style={{paddingTop: '30px'}}>
					<Col sm>
						<div className="Circular" style={{background: 'green'}}>
							<i className="add square icon"></i>
						</div>
						<h5>Alimentação saúdavel</h5>
						<p>Alimentos naturais livres de conservantes que você pode encontrar no próprio quintal</p>
					</Col>
					<Col sm>
						<div className="Circular" style={{background: '#1e4016'}}>
							<i className="food icon"></i>
						</div>
						<h5>Mais diversidade</h5>
						<p>Maior diversidade de alimentos disponiveis.</p>
					</Col>
					<Col sm>
						<div className="Circular" style={{background: '#00a5ff'}}>
							<i className="location arrow icon"></i>
						</div>
						<h5>Fácil acesso</h5>
						<p>As PANCs são facilmente encontradas e em diversas epocas do ano.</p>
					</Col>
					<Col sm>
						<div className="Circular" style={{background: '#8a0002'}}>
							<i className="heart icon"></i>
						</div>
						<h5>Beneficios a saúde</h5>
						<p>A maior parte das PANCs apresentam algum tipo de beneficio, alem da alimentação</p>
					</Col>
				</Row>
		</div>
		{/*<div style={{ width: '100%'}}>
			<Carousel style={{height:"400px"}}>
			  <Carousel.Item style={{height:"400px"}}>
				  
				  <img
				  className="imagem_car"
				  src={require('../../img/flor2.jpg')}
				  alt="First slide"/>
				  
				  
				  
				<Carousel.Caption >
				  <h3>First slide label</h3>
				  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item style={{height:"400px"}}>
				<div className="slides">
					
				</div>
				<Carousel.Caption>
				  <h3>Second slide label</h3>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item style={{height:"400px"}}>
				 <img
				  className="imagem_car"
				  src={require('../../img/planta.jpg')}
				  alt="First slide"
				  
				  />
				

				<Carousel.Caption>
				  <h3>Third slide label</h3>
				  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			
			</div>*/}
			{mensagem}
		</div>	
		</>
		)
	}
}

export default Home;
/*const mapStateToProps = store => ({
  pagina_ativa: store.clickMenu.pagina_ativa
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ cabecalhoAcao}, dispatch);


  
export default connect(mapStateToProps, mapDispatchToProps)(Home);*/