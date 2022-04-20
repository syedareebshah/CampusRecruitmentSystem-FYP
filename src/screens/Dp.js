

// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';

import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const Dp = () => {
  const [filePath, setFilePath] = useState();
  console.log(filePath);

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log(response.assets[0].uri);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets[0].uri);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        {!filePath &&
          <Image
            source={require('../assets/profile.jpg')}
            style={styles.imageStyle}
          />
        }
        {
          filePath &&
          <Image
            source={{ uri: `${filePath}` }}
            style={styles.imageStyle}
          />
        }
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Upload/Change Picture</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Dp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // backgroundColor: '#fff',
    alignItems: 'center',
  },

  textStyle: {
    padding: 10,
    color: 'blue',
    textAlign: 'center',
  },
  buttonStyle: {
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    // padding: 5,
    // marginVertical: 10,
    // width: 250,
  },
  imageStyle: {
    marginBottom: 40,
    alignSelf: 'center',
    resizeMode: 'cover',
    height: 150,
    width: 150,
    borderRadius: 500
  },
});