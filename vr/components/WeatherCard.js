import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-vr'


export default function WeatherCard (props){
  const {weatherObj} = props
  console.log(weatherObj);
  return (
    <View style={styles.cardView}>
      <Text style={styles.cardCity}>
        {weatherObj.name}
      </Text>
      <Text style={styles.cardText}>
        Current Weather: {weatherObj.weather[0].main}
      </Text>
      <Text style={styles.cardText}>
        Temperature: {Math.round(weatherObj.main.temp - 273.15)}°C
      </Text>
      <Text style={styles.cardText}>
        Wind speed: {weatherObj.wind.speed}mph
      </Text>
      <Text style={styles.cardText}>
        Humidity: {weatherObj.main.humidity}%
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    padding: .2,
    borderColor: 'black',
    borderRadius: .1,
    borderWidth: .01,
    opacity: .8,
    transform: [
      {translate: [0,0,-3]}
    ]
  },
  cardCity: {
    textAlign: 'center',
    color: '#ed5631',
    fontSize: .4,
    marginBottom: .2
  },
  cardText: {
    color: 'black',
    fontSize: .2
  }
})
