import React, {Component} from 'react'
import {
  AppRegistry,
  asset,
  View,
  Pano,
} from 'react-vr'

const {API_KEY} = require('./secret.json')

class VRWeather extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${API_KEY}`,{
      method: 'GET'
    })
    .then(apiResponse => apiResponse.json())
    .then(json => {
      this.setState({weather: json})
    })
  }

  render(){
    return (
      <View>
        <Pano source={asset('sf.jpg')}/>
      </View>
    )
  }

}


AppRegistry.registerComponent(
  'VRWeather',
  ()=>VRWeather
)
