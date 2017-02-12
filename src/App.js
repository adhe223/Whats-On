import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import MovieTile from './components/MovieTile';
import Providers from './js/Providers';
import ProvidersContainer from './components/ProvidersContainer';

import './App.css';

class App extends Component {
    componentWillMount() {
        this.props.fetchMovieData('Pulp Fiction');
    }

    render() {
        let sources = this.props.sources;
        let posterUrl = this.props.posterUrl;

        let hasSources = false;
        let netflix, amazon, hulu, providersJSX;

        if (sources.constructor === Array) {
            sources.forEach(function(source) {
                switch(source.source) {
                    case Providers.NETFLIX.guideboxKey:
                        netflix = source;
                        hasSources = true;
                        break;
                    case Providers.AMAZON.guideboxKey:
                        amazon = source;
                        hasSources = true;
                        break;
                    case Providers.HULU.guideboxKey:
                        hulu = source;
                        hasSources = true;
                        break;
                }
            });
        }

        if(hasSources) {
            providersJSX = <ProvidersContainer netflix={netflix} hulu={hulu} amazon={amazon}/>;
        }

        return (
            <div className="App">
                <MovieTile posterUrl={posterUrl} />
                {providersJSX}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        sources: state.sources,
        posterUrl: state.posterUrl,
        name: state.name
    };
};

export default connect(mapStateToProps, actions)(App);
