import './Ingredients.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { bindActionCreators } from 'redux';
import { expandIngredients, compressIngredients } from '../../../../redux/actions/myBurger.actions';
import { getIngredients } from '../../../../redux/actions/ingredients.actions';

class Ingredients extends React.Component {

    renderIngredients() {
        const { expandIngredients, compressIngredients } = this.props;
        const { ingredients } = this.props;
        return ingredients.items.map((ingredient, index) => (
            <Draggable key={index} draggableId={'ingredient-' + index} index={index}>
                {(provided) => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <li className="ingredient"
                            key={index}
                            onMouseEnter={expandIngredients.bind(this)}
                            onMouseLeave={compressIngredients.bind(this)} >
                            <img alt={ingredient.name} src={ingredient.img} />
                        </li>
                    </div>
                )}
            </Draggable>
        ))
    }

    render() {
        return (
            <div id="ingredients">
                <h1>+ Ingredientes</h1>
                <ul>
                    <Droppable droppableId={'ingredients'} >
                        {(provided) => (
                            <div ref={provided.innerRef} >
                                {this.renderIngredients()}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ul>
            </div>
        )
    }

    componentWillMount() {
        const { getIngredients } = this.props;
        getIngredients();
    }

}

const mapStateToProps = state => ({
    ingredients: state.ingredients,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    expandIngredients,
    compressIngredients,
    getIngredients
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
