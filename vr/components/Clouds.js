import React from 'react'
import {
  asset,
  StyleSheet,
  View,
  Model
} from 'react-vr'


export default function Clouds (props){
  const {weatherObj} = props
  return (
    <View style={
      {transform: [
        {translate: [0,-25,-150]},
        {rotateX: 90},
        {rotateZ: weatherObj.wind.deg}
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

const styles = StyleSheet.create({
  clouds: {},
  model: {}
})
