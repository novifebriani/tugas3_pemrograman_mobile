//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Profile from './components/Profile';
// or any pure javascript modules available in npm
import Program from './components/Program';
import Misi from './components/Misi';
import Gallery from './components/Gallery';
import { Card } from 'react-native-elements'; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#CC9900',alignItems: 'center', justifyContent: 'center' }}>
     <Text >Selamat Datang Di Fakultas Ilmu Komputer</Text> 
     <Text>Universitas Sains Alqur`an</Text>
          <AssetExample />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1,backgroundColor:'#CC9900', alignItems: 'center', justifyContent: 'center' }}>
  <Text >Universitas Sains Alqur`an merupakan</Text>
  <Text>salah satu Universitas yang ada di Wonosobo</Text>
  <Text>yang berada di jl.Kalibeber km 03</Text>
  <Text>yang memiliki beberapa Fakultas </Text>
  <Text></Text> 
  <Card title="Visi Universitas Sains Alqur`an Jawa Tengah di Wonosobo">
    <Profile/>
	   </Card>
	   <Card title="Visi Universitas Sains Alqur`an">
    <Program/>
	   </Card>
	   <Card title="Misi">
    <Misi/>
	   </Card>
  </View>
);
const AboutScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#CC9900', }}>
      <Gallery/>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
    Gallery: {
    screen: AboutScreen,
  },
});

export default RootTabs;