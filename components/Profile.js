import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Pada tahun 2005, Fakultas Ilmu Komputer menjadi institusi pendidikan dibidang komputer yang terkemuka di Tingkat Jawa Tengah dan berperan aktif dalam pengembangan dan penerapan ilmu Komputer yang dipadu dengan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa.
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
