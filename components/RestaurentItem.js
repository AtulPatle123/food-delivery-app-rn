import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function RestaurentItem() {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
        <RestaurentImage />
        <RestaurentInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurentImage = () => {
  return (
    <>
      <Image
        source={require('../assests/images/restaurent-img-1.jpg')}
        style={{width: '100%', height: 180}}
      />

      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const RestaurentInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          Formhouse Kitchen Thai cuinsin
        </Text>
        <Text style={{fontSize: 13, color: 'grey'}}>30-45 - min</Text>
      </View>

      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>4.5</Text>
      </View>
    </View>
  );
};
