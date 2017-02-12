import React from 'react';
import '../stylesheets/MovieTile.css';

const MovieTile = (props) => {
    const posterUrl = props.posterUrl ? props.posterUrl : "";

    return(
        <div>
            <div className="col-xs-12">
                <img src={posterUrl} alt="Presentation" />
            </div>
        </div>
    );
};

export default MovieTile;