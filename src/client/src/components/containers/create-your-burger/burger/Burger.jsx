import './Burger.scss';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { expandIngredients, compressIngredients } from '../../../../redux/actions/myBurger.actions';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';

class Burger extends React.Component {

    render() {
        const { expandIngredients, compressIngredients } = this.props;
        return (
            <div id="burger">
                <div id="my-burger"
                    onMouseEnter={expandIngredients.bind(this)}
                    onMouseLeave={compressIngredients.bind(this)}>
                    <BurgerIngredients />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    expandIngredients,
    compressIngredients
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
