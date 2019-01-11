import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Misi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          
    Misi dari UNSIQ, Universitas yang dulu bernama IIQ atau Institut Ilmu Al-Qur'an adalah :
1.        Menstransformasikan nilai-nilai Al-Qur’an dalam kehidupan.
2.        Memadukan mutiara pesantren dengan pendidikan modern dalam dinamika budaya, sosial dan politik kebangsaan.
3.        Membudayakan proses pembelajaaran yang integrative, dinamis, inovatif dan kondusif dalam suasana ilmiah, ukhuwah dan diniyah.
4.        Responsif, konstruktif dalm emnyikapi berbagai perubahan, kemajuan, sains dan teknologi.
5.        Mengaktualisasikan mutiara luhur pesantren dengan keunggulan univesitas moder dalam mengimplementaskan konsep rahmatan lil ‘alamin.
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
