import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-vr'


export default function WeatherCard (props){
  const {weatherObj} = props
  return (
    <View style={styles.cardView}>
      <Text style={styles.cardText}>
        City: {weatherObj.name}
      </Text>
      <Text style={styles.cardText}>
        Wind speed: {weatherObj.wind.speed}
      </Text>
      <Text style={styles.cardText}>
        Humidity: {weatherObj.main.humidity}
      </Text>
      <Text style={styles.cardText}>
        Temperature: {Math.round(weatherObj.main.temp - 273.15)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    transform: [
      {translate: [0,0,-2]}
    ]
  },
  cardText: {}
})
