import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Gallery extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Arsip Gallery Kegiatan Fakultas
        </Text>
        <Image style={styles.logo} source={require("../assets/xx.jpg")}/>
        <Text>Prodi Fakultas Teknik</Text>
        
        <Image style={styles.logo} source={require("../assets/g.jpg")}/>
         <Text>Senam pagi pada kegiatan Pelantikan bem</Text>
         
        <Image style={styles.logo} source={require("../assets/fs.jpg")}/>
         <Text>Halal Fakultas Ilmu Komputer</Text>
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
