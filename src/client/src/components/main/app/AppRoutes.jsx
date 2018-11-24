import React from 'react';
import { Route } from 'react-router-dom';
import ROUTER from '../../../resources/router';

const AppRoutes = props => {
    return (
        <div id="app-route">
            {ROUTER.map((route, index) => {
                const { component } = route;
                return (<Route key={index} exact path={route.path} component={component} />)
            })}
        </div>
    )
}


export default AppRoutes;