import './CreateYourBurger.scss';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Col } from 'react-bootstrap';
import Burger from '../burger/Burger';
import { reorderIngredients, addIngredient, onDrag } from '../../../../redux/actions/myBurger.actions';
import Ingredients from '../ingredients/Ingredients';
import Cart from '../cart/Cart';

class CreateYourBurger extends React.Component {

    onDragIngredient() {
        const { onDrag } = this.props;
        onDrag();
    }

    onDropIngredient(event) {
        const { source, destination } = event;
        const { reorderIngredients, addIngredient, onDrag } = this.props;
        onDrag();
        if (event.destination && event.destination.droppableId === 'ingredients') {
            return;
        }
        if (event.source.droppableId === 'ingredients' && !event.destination) {
            return;
        }
        if (event.destination && event.source.droppableId !== 'burger-ingredients' && event.destination.droppableId === 'burger-ingredients') {
            addIngredient(source, destination);
            return;
        }
        reorderIngredients(source, destination);
    }

    render() {
        return (
            <div id="create-your-burger">
                <Grid>
                    <DragDropContext
                        onDragEnd={this.onDropIngredient.bind(this)}
                        onDragStart={this.onDragIngredient.bind(this)}>
                        <Col xs={12} sm={12} md={3} lg={3} className="full-height display-flex">
                            <Ingredients />
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={5} className="full-height display-flex">
                            <Burger />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className="full-height display-flex">
                            <Cart />
                        </Col>
                    </DragDropContext>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    burger: state.myBurger.burger
});

const mapDispatchToProps = dispatch => bindActionCreators({
    reorderIngredients,
    addIngredient,
    onDrag
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateYourBurger)
