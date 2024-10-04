import React from 'react';
import {View,TouchableOpacity,Text,TextInput,StyleSheet} from 'react-native'
import Colors from '../assets/constants/colors'

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      marginVertical: 10,
      marginHorizontal: 20,
      flexDirection: "row",
      borderRadius: 5,
    },
    button: {
      padding: 15,
      borderRightColor: Colors.border,
      borderRightWidth: 1,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      color: Colors.blue,
      fontWeight: "bold",
    },
    input: {
      flex: 1,
      padding: 10,
      fontSize: 16,
      color: Colors.textLight,
    },
  })

export const ConversionInput=({text,onButtonPress,...props})=>{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props}/>
        </View>
    )
}