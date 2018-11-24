import './MountBurger.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { openBurger } from '../../../../redux/actions/myBurger.actions';

class MountBurger extends React.Component {

    renderIngredients() {
        const { burger } = this.props;
        if (!burger) {
            return null;
        }
        const { ingredients } = burger;
        if (!ingredients) {
            return null;
        }
        return ingredients.map((ingredient, index) => {
            return (
                <li className="burger-in-menu-ingredient" key={index}
                    style={{ zIndex: ingredients.length - (index - 1), marginBottom: `${ingredient.bottom}%` }} >
                    <img alt={ingredient.name} src={ingredient.img} />
                </li>
            )
        })
    }

    render() {
        const { burger, openBurger } = this.props;
        return (
            <div className="burger-in-menu">
                <div className="burger-in-menu-monted">
                    <ul>
                        {this.renderIngredients()}
                    </ul>
                </div>
                <div className="burger-in-menu-name">
                    {burger ? burger.name : ''}
                </div>
                <div className="burger-in-menu-actions">
                    <Button className="full-width" type="button" onClick={openBurger.bind(this, burger)}>CONTINUAR</Button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    openBurger
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MountBurger)
