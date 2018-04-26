import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    CameraRoll,
    Alert
} from 'react-native';
import { RNCamera } from 'react-native-camera';



class CameraFront extends Component {
    state = {
        lastPic: ''
    }

    savePicture() {
        Alert.alert(
            'Save?',
            'Would you like to save your picture?',
            [
                { text: 'Save', onPress: () => CameraRoll.saveToCameraRoll(this.state.lastPic) },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
            ],
            { cancelable: true }
        )
    }
   
    render() {
        let frontOrBack = this.state.camera; 
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
                    {this.state.lastPic === '' ? null :
                        <Image source=
                            {{ uri: this.state.lastPic }}
                            style={{ width: 60, height: 60 }} />}
                    <TouchableOpacity onPress={_ => { this.savePicture() }} >
                        <Text style={{ backgroundColor: 'white' }}>
                            SAVE IMAGE?
                     </Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            onPress={this.takePicture.bind(this)}
                            style={styles.capture}
                        >
                            <View style={styles.captureCenter} ></View>
                            {/* <Text style={{ fontSize: 14 }}> Take the picture </Text> */}
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 1, base64: true, forceUpOrientation: true };
            const data = await this.camera.takePictureAsync(options)
            this.setState({
                lastPic: data.uri
            })
            console.log(this.state.lastPic);
        }
    };

}
export default CameraFront;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        width: 69,
        height: 69,
        backgroundColor: 'white',
        borderRadius: 69,
        //   padding: 2,
        //   paddingHorizontal: 20,
        //   alignSelf: 'center',
        margin: 20,
        justifyContent: 'center'
    },
    captureCenter: {
        flex: 0,
        width: 57,
        height: 57,
        backgroundColor: 'white',
        borderRadius: 57,
        //   paddingVertical: 15,
        //   paddingHorizontal: 20,
        alignSelf: 'center',
        //   margin: 20,
        borderColor: 'black',
        borderWidth: 2
    }
});