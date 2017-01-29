import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import MovieTile from './components/MovieTile';
import Providers from './js/Providers';
import ProvidersContainer from './components/ProvidersContainer';

import './App.css';

class App extends Component {
    componentWillMount() {
        this.props.fetchOmdb('Pulp Fiction');
        this.props.fetchNetflix('Pulp Fiction');
        this.props.fetchGuidebox('Pulp Fiction');
    }

    render() {
        let hasSources = false;
        let netflix, amazon, hulu;

        if (this.props.guidebox.constructor === Array) {
            hasSources = this.props.guidebox.some(function(source) {
                if (source.source === Providers.NETFLIX.guideboxKey) {
                    netflix = source;
                    return true;
                }

                if (source.source === Providers.AMAZON.guideboxKey) {
                    amazon = source;
                    return true;
                }

                if (source.source === Providers.HULU.guideboxKey) {
                    hulu = source;
                    return true;
                }

                return false;
            });
        }

        return (
            <div className="App">
                <MovieTile omdb={this.props.omdb} />
                <ProvidersContainer netflix={netflix} hulu={hulu} amazon={amazon}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        omdb: state.omdb,
        netflix: state.netflix,
        guidebox: state.guidebox
    };
};

export default connect(mapStateToProps, actions)(App);
