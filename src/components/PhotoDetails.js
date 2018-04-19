import React, { Component } from 'react';
import { Image, View, Text, ScrollView, Button, CameraRoll } from 'react-native';

export default class PhotoDetails extends Component{

    state = {
        photos: []
    }

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(response => {
            this.setState({ photos: response.edges });
          })
          .catch((err) => {
             //Error Loading Images
          });
        };
     render() {
        // console.log(this.state)

      return (
        <View>
         <Text>Photo Details</Text>
        </View>
      );
     }
}

