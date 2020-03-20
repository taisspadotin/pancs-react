import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../paginas/home/home';
import Plantas from '../paginas/plantas/plantas';

const Main = () =>(
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/plantas" component={Plantas} />
	</Switch>
)
export default Main;
