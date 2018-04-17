import React, { Component } from 'react';
import { Image, View, Text, ScrollView, Button, CameraRoll, TouchableOpacity } from 'react-native';

export default class Photos extends Component{

    state = {
        photos: [],
        photoURI: ''
    }

    componentDidUpdate = (prevProps, prevState) => {
      if (this.state.photoURI !== '') {
        this.props.navigation.navigate('AccountSettings', { photoURI: this.state.photoURI })
      }
    }
    
    componentWillMount = () => {
      this._handleButtonPress();
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
    
    

    addPhoto = (photo) => {
        this.setState({ photoURI: photo })
        console.log(this.state.photoURI)
        console.log('this onpress is firing')
    }

     render() {
        // console.log(this.state.photoURI)
      return (
        <View>
          {/* <Button title="Load Images" onPress={() => this._handleButtonPress()} /> */}
          <ScrollView>
            {this.state.photos.map((p, i) => {
            return (
            <TouchableOpacity                     
                key={i}
                onPress={ () => this.addPhoto(p.node.image.uri) }>
                <Image
                    style={{
                    width: 200,
                    height: 200,
                    }}
                    source={{ uri: p.node.image.uri }}
                />
              </TouchableOpacity>
            );
          })}
          </ScrollView>
        </View>
      );
     }
}

