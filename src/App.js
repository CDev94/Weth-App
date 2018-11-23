import React, {Component} from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import SpinnerLoader from './components/SpinnerLoader';
import './App.css';


class App extends Component {
 constructor(props) {
    super(props); 
      this.state = { lat: null, errMessage: '' };

  
    

  }
    // Gathers Coordinates of the user location 
  componentDidMount() {
       window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ lat: position.coords.latitude}),
         err =>  this.setState({ errMessage: err.message})
      );
  }



render() {



          if (this.state.errMessage && !this.state.lat) {
              return  <div> err: {this.state.errMessage} </div>;
          }

          if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
          }

          return <SpinnerLoader message="Please accept the request..." />;



 }
}



export default App;
