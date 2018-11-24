import './Cart.scss';
import React from 'react';
import { connect } from 'react-redux';
import verifyPromotions from '../../../../resources/promotions';

class Cart extends React.Component {

    renderBurgerSelectedIngredients() {
        const { ingredients } = this.props.burger;
        return ingredients.map((ingredient, index) => (
            <li key={index}>
                {ingredient.name} - R$ {ingredient.price.toFixed(2)}
            </li>
        ))
    }

    renderAppliedPromotions(promo) {
        if (!promo.applied) {
            return null;
        }
        return promo.applied.map((promotion, index) => (
            <li key={index}>
                {promotion.name} - R${promotion.discount.toFixed(2)}
            </li>
        ))
    }

    calculateTotalPrice() {
        const { ingredients } = this.props.burger;
        const price = ingredients.reduce((val, ingredient) => {
            return val + ingredient.price
        }, 0);
        return price - verifyPromotions(ingredients).discount;
    }

    render() {
        const { ingredients } = this.props.burger;
        const promo = verifyPromotions(ingredients);
        return (
            <div id="cart">
                <div id="cart-my-ingredients">
                    Meus Ingredientes
                    <ul>
                        {this.renderBurgerSelectedIngredients()}
                    </ul>
                </div>
                <div id="cart-my-promotions">
                    Promoções Aplicadas
                    <ul>
                        {this.renderAppliedPromotions(promo)}
                    </ul>
                </div>
                <div id="cart-total">
                    {promo.discount.toFixed(2) > 0 ? <span>DESCONTO: R${promo.discount.toFixed(2)}</span> : null}
                    <span id="total-price">TOTAL: R$ {this.calculateTotalPrice().toFixed(2)}</span>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    burger: state.myBurger.burger
});

export default connect(mapStateToProps)(Cart);
