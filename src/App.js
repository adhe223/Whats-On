import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import MovieTile from './components/MovieTile';
import ProvidersContainer from './components/ProvidersContainer';

import './App.css';

class App extends Component {
    componentWillMount() {
        this.props.fetchOmdb('Pulp Fiction');
        this.props.fetchNetflix('Pulp Fiction');
    }

    render() {
        return (
            <div className="App">
                <MovieTile omdb={this.props.omdb} />
                <ProvidersContainer netflix={this.props.netflix} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        omdb: state.omdb,
        netflix: state.netflix
    };
};

export default connect(mapStateToProps, actions)(App);
