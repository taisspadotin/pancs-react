import React, {Component} from 'react';
import Cabecalho from '../../components/cabecalho';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import './style.scss';
import {Row, Col} from 'react-bootstrap';

export default class Login extends Component{
	render(){
		return(
		<>
		<Cabecalho/>
			<div className="fundo">
				<div className="conteudo">
					<br/><br/>
					<Row className="justify-content-md-center">
						<Col xs lg="6">
							<div className="login">
								<div className="header">Login</div>
								<Form>
								  <Form.Input
									icon='user'
									iconPosition='left'
									label='Username'
									placeholder='Username'
								  />
								  <Form.Input
									icon='lock'
									iconPosition='left'
									label='Password'
									type='password'
								  />

								  <Button content='Login' primary />
								</Form>
								
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
		)
	}
}