import React from 'react';
import '../stylesheets/MovieTile.css';
import Providers from '../js/Providers';

// TODO: After proof of concept I need a new action to fetch the poster for the movie/show. Then
// we fetch the movie from each provider and show their tiles below.
const MovieTile = (props) => {
    const posterUrl = props.omdb ? props.omdb.Poster : "";

    return(
        <div>
            <div className="col-xs-12">
                <img src={posterUrl} alt="Presentation" />
            </div>
        </div>
    );
};

export default MovieTile;