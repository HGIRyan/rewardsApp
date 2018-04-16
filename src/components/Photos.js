import React, { Component } from 'react';
import { Image, View, Text, ScrollView, Button, CameraRoll } from 'react-native';

export default class Photos extends Component{

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
          <Button title="Load Images" onPress={() => this._handleButtonPress()} />
          <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
          </ScrollView>
        </View>
      );
     }
}

