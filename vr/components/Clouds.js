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
    this.state={
      xValue: new Animated.Value(100)
    }

    //repeat clouds animation over&over
    setInterval(()=>this.moveClouds(), 3000)
  }

  componentDidMount(){
    this.moveClouds()
  }

  moveClouds(){
    if(this.state.xValue._value < 0){
      return this.setState({
        xValue: new Animated.Value(100)
      })
    }
    Animated.timing(this.state.xValue,{
      toValue: -100,
      duration: 5000
    }).start()
  }

  render(){
    return (
      <Animated.View style={
        {transform: [
          {translate: [0,-25,-150]},
          {rotateX: 90},
          {rotateZ: props.weatherObj.wind.deg},
          {translateX: this.state.xValue}
        ]}
      }>
      <Model
      source={{
        obj: asset('clouds.obj')
      }}
      scale={0.01}
      />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  clouds: {},
  model: {}
})
