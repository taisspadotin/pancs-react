import React,{Component} from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './style.scss';
import {Link} from 'react-router-dom';

export default class Cabecalho extends Component{
	render(){
		return(
		<>
		<Navbar collapseOnSelect expand="lg" style={{background: this.props.fundo}} className="cabecalho">
		  <Navbar.Brand><Link to="/">Pancs</Link></Navbar.Brand>
		  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
		  <Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
			  <Nav.Link ><Link to="/plantas">Plantas</Link></Nav.Link>
			  <Nav.Link href="#pricing" >Receitas</Nav.Link>
			  <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			  </NavDropdown>
			</Nav>
			<Nav>
			  <Nav.Link href="#deets">Login</Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
		
		</>
		)
	}
}