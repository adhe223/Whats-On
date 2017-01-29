import React from 'react';
import axios from 'axios';
import '../stylesheets/ProviderTile.css';

const ProviderTile = (props) => {
    return(
        <div>
            <div className="col-xs-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        {/*<h3 className="panel-title">{props.provider.title}</h3>*/}
                        <h3 className="panel-title">{props.provider.title}</h3>
                    </div>
                    <div className="panel-body">
                        <img src={props.provider.posterUrl} alt="Presentation" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderTile;