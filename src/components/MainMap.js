import React, { Component } from 'react';
import { withScriptjs, withGoogleMap,InfoWindow, GoogleMap, Marker } from "react-google-maps";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>

    <GoogleMap

        defaultZoom={12}
        defaultCenter={{ lat: 49.988358, lng: 36.232845 }}
    >
        {props.dataplace.map((marker,index)=> <Marker key={index} position={{ lat: marker.position.latitude, lng: marker.position.longitude }}  >{<InfoWindow><div><div>{marker.text}</div><div>{marker.adress}</div></div></InfoWindow>}</Marker>)}
    </GoogleMap>
))
class MainMap extends React.Component {
    constructor(props) {
        super(props);
         this.state = {}

    }
    render() {
        console.log("map",this.state)
        return (
            <div>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpcDrRogVixnVDdVmjSF22uPmaDWgzwZI&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    dataplace = {this.props.data}
                ></MyMapComponent>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        data:state.buys.todos
    }
}
export default connect(mapStateToProps)(MainMap);