import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../paginas/home/home';
import Plantas from '../paginas/plantas/plantas';
import Receitas from '../paginas/receitas/receitas';
import Login from '../paginas/login/login';

const Main = () =>(
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/plantas" component={Plantas} />
		<Route path="/login" component={Login} />
		<Route path="/receitas" component={Receitas} />
	</Switch>
)
export default Main;
