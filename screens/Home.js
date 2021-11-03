import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from './SearchBar';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 14}}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
