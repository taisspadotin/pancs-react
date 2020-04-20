import React, {Component} from 'react';
import Cabecalho from '../../components/cabecalho';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import './style.scss';
import {Row, Col} from 'react-bootstrap';

export default class Login extends Component{
	render(){
		return(
		<>
		<Cabecalho />
			<div className="fundo">
				<br/><br/>
					<div className="login">
						<div className="login1">
							<img src={require("../../img/login.png")} className="imagem"/>
						</div>
						<div className="login2">
							<div className="login-content" align="center">	
								<h1>LogIn</h1>
								<br/>
								<input className="input-login" type="text"/>
								<input className="input-login" type="text"/>
								<br/>
								<button className="botao-login" type="button" onClick={()=>this.login()}>SING IN</button>
								<br/>
								<p>Forgot <a href="/">User name / password </a>?</p>
								<br/>
								<h5>SING OUT</h5>
							</div>
						</div>
					</div>
				</div>
		</>
		)
	}
}