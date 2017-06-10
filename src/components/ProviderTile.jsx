import React from 'react';
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
                        <a href={props.sourceUrl}>
                            <img src={props.provider.posterUrl} alt="Presentation" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderTile;