import React from 'react';
import { connect } from 'react-redux';
import './Loader.scss';

const Loader = props => {
    const { show } = props.loader;
    if (!show) {
        return null;
    }
    return (
        <div className="loader">
            <div className="container container-flex">
                <div className="loading-spinner lds-heart"><div></div></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loader: state.loader
});

export default connect(mapStateToProps)(Loader)