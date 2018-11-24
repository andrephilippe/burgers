import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageHeader.scss';
import logo from '../../../assets/imgs/logo.png';
import ROUTER from '../../../resources/router';

export class PageHeader extends React.Component {

    createNavLinks() {
        return ROUTER.map((route, index) => {
            const { path, nav } = route;
            if(!nav){
                return null;
            }
            return (
                <li key={index}><NavLink to={path} activeClassName="active">{nav}</NavLink></li>
            )
        })
    }

    render() {
        return (
            <header className='app-header'>
                <img id="navbar-logo" src={logo} alt="Logo" />
                <nav>
                    <ul>
                        {this.createNavLinks()}
                    </ul>
                </nav>
            </header >
        )
    }

}

export default PageHeader;