import { View, StyleSheet } from "react-native";
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
const PlaceholderImage = require('@/assets/images/background-image.png');
import { useState } from 'react';


export default function IndexScreen() {


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ // 사진 고르는거, launchImageLibraryAsync 함수에 오브젝트로 옵션을 넣을수있음 / 이미지 정보 반환
      mediaTypes: ['images'], // 이미지만
      allowsEditing: true, // 사진을 고른 후 편집
      quality: 1, // 사진 화질 최고 사양으로 (0~1)
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme='primary' onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({     
  container: {   
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: '#fff'
  },
  button: {
    textDecorationLine: 'underline',
    color: '#fff',
    fontSize: 22
  },
  imageContainer: {
    flex: 1
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})