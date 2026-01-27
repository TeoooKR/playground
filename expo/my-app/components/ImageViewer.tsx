import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
   imgSource: ImageSourcePropType; 
   img?: string | undefined;
};

// ({ imgSource }: {imgSource: ImageSourcePropType}) << 그냥이거임
export default function ImageViewer({ imgSource, img }: Props) {
  
  const imageSource = img ? img : imgSource;
  return <Image source={imageSource} style={styles.image} />; // 메모: source에는 string도 들어갈수있고 이미지소스프롭타입도 들어갈수있다.
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});