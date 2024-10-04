import React,{useState,useEffect} from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions,Text,ScrollView } from "react-native";
import Colors from "../../assets/constants/colors";
import { ConversionInput } from "../ConversionInput";
import { Button } from "../Button";
import { format } from "date-fns";

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader:{
    textAlign:"center",
    color:Colors.white,
    fontWeight:"bold",
    fontSize:30,
    marginBottom:20
  },
  inputContainer:{
    marginBottom:10
  },
  text:{
    textAlign:"center",
    color:Colors.white,
    fontSize: 14
  }
});

export default () => {
  const baseCurrency = "USD"
  const mmCurrency = "MMK"
  const conversionRate = 1800

  const [scrollEnabled,setScrollEnabled]=useState(false)

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.blue}
      ></StatusBar>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        ></Image>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        /></View>

        <Text style={styles.textHeader}>Currency Converter</Text>
        <View style={styles.inputContainer}>
        <ConversionInput 
        text={baseCurrency}
        value="1"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={text => console.log("text", text)}
        />
         <ConversionInput 
        text={mmCurrency}
        value="1800"
        onButtonPress={() => alert("todo!")}
        editable={false}
        />
        </View>
        <Text style={styles.text}> 
        {`1 ${baseCurrency} = ${conversionRate} ${mmCurrency} as of ${format(
          new Date(),"MMM dd,yyyy")}
        `}
        </Text>
        <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
        <View style={{ height: screen.height }} />
        </View>
        </ScrollView>
    </View>
  );
};
