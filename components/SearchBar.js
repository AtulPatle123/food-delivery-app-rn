import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SearchBar() {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons
              name="location-sharp"
              size={25}
              style={{color: 'black'}}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={{marginRight: 6, color: 'black'}}
            />
            <Text style={{color: 'black'}}>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
