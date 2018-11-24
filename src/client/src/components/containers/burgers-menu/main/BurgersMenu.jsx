import './BurgersMenu.scss';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MountBurger from '../mount-burger/MountBurger';
import { getBurgersMenu } from '../../../../redux/actions/burgers.actions';

class BurgersMenu extends React.Component {

    renderBurgers() {
        const { menu } = this.props.burgers;
        return menu.map((burger, index) => {
            return <MountBurger key={index} burger={burger} />
        });
    }

    render() {
        return (
            <div id="burgers-menu">
                {this.renderBurgers()}
            </div>
        )
    }

    componentWillMount() {
        const { getBurgersMenu } = this.props;
        getBurgersMenu();
    }

}

const mapStateToProps = state => ({
    burgers: state.burgers
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getBurgersMenu
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BurgersMenu)
