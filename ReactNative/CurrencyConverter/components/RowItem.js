import React from 'react'
import {TouchableOpacity,Text,StyleSheet,View} from 'react-native';
import Colors from '../assets/constants/colors';

const styles=StyleSheet.create({
    row:{
        marginTop:10,
        paddingHorizontal:20,
        paddingVertical:16,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        fontSize:16,
        color:Colors.text
    },
    separator:{
        backgroundColor:Colors.border,
        height:StyleSheet.hairlineWidth,
        marginLeft:20
    }
})

export const RowItem=({leftIcon,text,rightIcon,onPress})=>{
    return(
        <TouchableOpacity style={styles.row} onPress={onPress}>
        {leftIcon}
            <Text style={styles.text}>{text}</Text>
            {rightIcon}
        </TouchableOpacity>
    )
}

export const Separator=()=>{
    return(
        <View style={styles.separator}></View>
    )
}