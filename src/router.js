import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// React Router DOM v4

import PageWelcome from './containers/page-welcome';
import PageStart from './containers/page-start';
import PageSkills from './containers/page-skills';
import PageContact from './containers/page-contact';

/**
 * Router
 * Routes and views to render
 */
const Router = (
	<HashRouter>
		<Switch>
			<Route exact path='/' component={PageWelcome}/>
			<Route path='/start' component={PageStart}/>
			<Route path='/skills' component={PageSkills}/>
			<Route path='/contact' component={PageContact}/>
		</Switch>
	</HashRouter>

)

export default Router;
