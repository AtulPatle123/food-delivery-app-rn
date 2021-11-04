import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurentItem from '../components/RestaurentItem';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 14}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurentItem />
      </ScrollView>
    </SafeAreaView>
  );
}
