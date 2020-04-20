import React,{Component} from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './style.scss';
import {Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cabecalhoAcao} from '../../actions';

class Cabecalho extends Component{
	componentDidMount(){
		let localizacao = (window.location.pathname).replace('/', '');
		this.props.cabecalhoAcao(localizacao);
		
	}
	render(){
		let displayLogin = 'block';
		if(this.props.pagina_ativa === 'login'){
			displayLogin = 'none';
		}
		let plantasAtiva = '';
		if(this.props.pagina_ativa === 'plantas'){
			plantasAtiva = 'MenuAtivo';
		}
		let receitasAtiva = '';
		if(this.props.pagina_ativa === 'receitas'){
			receitasAtiva = 'MenuAtivo';
		}
		let logo = 'PANCS';
		if(this.props.logo === 'false'){
			logo = '';
		}
		return(
		<>
		<Navbar collapseOnSelect expand="lg" style={{background: this.props.fundo}} className="cabecalho">
		  <Navbar.Brand>
			<Link to="/" onClick={()=>this.props.cabecalhoAcao('home')} className="home">
			{/*<img src={require("../../img/favicon.ico")} style={{width: '40px'}}/>*/}
			{logo}
			</Link>
		  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <LinkContainer to="/plantas">
				<Nav.Link onClick={()=>this.props.cabecalhoAcao('plantas')} className={plantasAtiva}>Plantas</Nav.Link>
			  </LinkContainer>
			  <LinkContainer to="/receitas">
				<Nav.Link onClick={()=>this.props.cabecalhoAcao('receitas')} className={receitasAtiva}>Receitas</Nav.Link>
			  </LinkContainer>
			  <NavDropdown title="Cadastro" id="collasible-nav-dropdown" className="drop">
				<LinkContainer to="/"><NavDropdown.Item>Action</NavDropdown.Item></LinkContainer>
				<LinkContainer to="/"><NavDropdown.Item>Another action</NavDropdown.Item></LinkContainer>
				<LinkContainer to="/"><NavDropdown.Item>Something</NavDropdown.Item></LinkContainer>
			  </NavDropdown>
			</Nav>
			<Nav>
			  <LinkContainer to="/login">
					<Nav.Link onClick={()=>this.props.cabecalhoAcao('login')} >
						Login
					</Nav.Link>
			  </LinkContainer>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
		
		</>
		)
	}
}
//export default Cabecalho;

const mapStateToProps = store => ({
  pagina_ativa: store.clickMenu.pagina_ativa
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ cabecalhoAcao}, dispatch);


  
export default connect(mapStateToProps, mapDispatchToProps)(Cabecalho);