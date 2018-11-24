import './BurgerIngredients.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class BurgerIngredients extends React.Component {

    renderBugerIngredients() {
        const { myBurger } = this.props;
        return myBurger.burger.ingredients.map((ingredient, index) => (
            <Draggable key={index} draggableId={'burger-ingredient-' + index} index={index} >
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <li className="burger-ingredient" key={index}
                            style={{ zIndex: myBurger.burger.ingredients.length - (index - 1), marginBottom: myBurger.expand ? 0 : `${ingredient.bottom}%` }} >
                            <img alt={ingredient.name} src={ingredient.img} />
                        </li>
                    </div>
                )}
            </Draggable >
        ))
    }

    render() {
        return (
            <div id="burger-ingredients">
                <ul>
                    <Droppable droppableId={'burger-ingredients'} >
                        {(provided) => (
                            <div ref={provided.innerRef} >
                                {this.renderBugerIngredients()}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    myBurger: state.myBurger
});

export default connect(mapStateToProps)(BurgerIngredients);
