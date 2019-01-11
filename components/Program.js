import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          “Menjadi Pusat Uggulan Teknologi yang transformatif, humanis dan Qur’ani di Tingkat Regional pada Tahun 2031”
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
