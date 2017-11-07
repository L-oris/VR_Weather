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

  async componentDidMount(){
    try {
      const apiResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${API_KEY}`,{
        method: 'GET'
      })
      const json = await apiResponse.json()

      this.setState({weather: json})

    } catch(e){
      console.log('Error happened fetching weather from API');
    }
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
