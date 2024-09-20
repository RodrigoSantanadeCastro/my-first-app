import { Image, StyleSheet, Platform } from 'react-native';

import { Teste } from '@/components/Teste';
import { View } from 'react-native';
import { Form } from '@/components/Form/Form';



export default function HomeScreen() {
  return (
    <View>
     <Form></Form>
     
    </View>
    
    
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
