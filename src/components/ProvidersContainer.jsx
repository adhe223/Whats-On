import React from 'react';
import Providers from '../js/Providers';
import ProviderTile from './ProviderTile';

class ProvidersContainer extends React.Component {
    render() {
        let netflixJSX, amazonJSX, huluJSX;

        const show_title = this.props.netflix ? this.props.netflix.show_title : "Nope!";

        netflixJSX = this.props.netflix ? <ProviderTile provider={Providers.NETFLIX} /> : null;
        amazonJSX = this.props.amazon ? <ProviderTile provider={Providers.AMAZON} /> : null;
        huluJSX = this.props.hulu ? <ProviderTile provider={Providers.HULU} /> : null;


        return(
            <div>
                {netflixJSX}
                {amazonJSX}
                {huluJSX}
            </div>
        );
    }
}

export default ProvidersContainer;