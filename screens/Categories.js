import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const items = [
  {
    key: 1,
    image: require('../assests/images/food-1.png'),
    text: 'Pick-up',
  },
  {
    key: 2,
    image: require('../assests/images/food-1.png'),
    text: 'Fast Food',
  },
  {
    key: 3,
    image: require('../assests/images/food-1.png'),
    text: 'Bakery Item',
  },
  {
    key: 4,
    image: require('../assests/images/food-1.png'),
    text: 'Deals',
  },
  {
    key: 5,
    image: require('../assests/images/food-1.png'),
    text: 'Coffee & Tea',
  },
  {
    key: 6,
    image: require('../assests/images/food-1.png'),
    text: 'Drinks',
  },
  {
    key: 7,
    image: require('../assests/images/food-1.png'),
    text: 'Dry food',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingBottom: 10,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <View style={{alignItems: 'center', marginRight: 30}} key={item.id}>
            <Image
              source={item.image}
              style={{width: 60, height: 60, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 13, fontWeight: '900', color: 'black'}}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
