import React,{Component} from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './style.scss';
import {Link} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Button } from 'semantic-ui-react'

export default class Cabecalho extends Component{
	render(){
		return(
		<>
		<Navbar collapseOnSelect expand="lg" style={{background: this.props.fundo}} className="cabecalho">
		  <Navbar.Brand>
			<Link to="/">
			{/*<img src={require("../../img/favicon.ico")} style={{width: '40px'}}/>*/}
				Pancs <i className="leaf icon"></i>
			</Link>
		  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <LinkContainer to="/plantas">
				<Nav.Link>Plantas</Nav.Link>
			  </LinkContainer>
			  <LinkContainer to="/receitas">
				<Nav.Link>Receitas</Nav.Link>
			  </LinkContainer>
			  <NavDropdown title="Cadastro" id="collasible-nav-dropdown" className="drop">
				<LinkContainer to="/"><NavDropdown.Item>Action</NavDropdown.Item></LinkContainer>
				<LinkContainer to="/"><NavDropdown.Item>Another action</NavDropdown.Item></LinkContainer>
				<LinkContainer to="/"><NavDropdown.Item>Something</NavDropdown.Item></LinkContainer>
			  </NavDropdown>
			</Nav>
			<Nav>
			  <Nav.Link href="#deets"><Button basic color='green'>Login</Button></Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
		
		</>
		)
	}
}