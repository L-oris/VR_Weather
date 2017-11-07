import React, {Component} from 'react'
import {
  asset,
  StyleSheet,
  Animated,
  View,
  Model
} from 'react-vr'


export default class Clouds extends Component {

  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return (
      <View style={
        {transform: [
          {translate: [0,-25,-150]},
          {rotateX: 90},
          {rotateZ: props.weatherObj.wind.deg}
        ]}
      }>
      <Model
      source={{
        obj: asset('clouds.obj')
      }}
      scale={0.01}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  clouds: {},
  model: {}
})
