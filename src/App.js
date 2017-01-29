import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Providers from './js/Providers';
import MovieTile from './components/MovieTile';
import ProviderTile from './components/ProviderTile';

import './App.css';

class App extends Component {
    componentWillMount() {
        this.props.fetchTitle('Pulp Fiction');
    }

    render() {
        return (
            <div className="App">
                <MovieTile title={this.props.title} />
                <ProviderTile provider={Providers.NETFLIX} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {title: state.title};
};

export default connect(mapStateToProps, actions)(App);
