import React from "react";
import { SafeAreaView, ScrollView,Linking } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { RowItem, Separator } from "../components/RowItem";

const OpenUrl=(url) =>{
  return Linking.openURL(url).catch(()=>{
    alert('Sorry ,something went wrong.');
  });
}


export default () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <RowItem
          leftIcon={<Entypo name="mobile" size={24} color="black" />}
          text="Mobile"
          rightIcon={<Entypo name="chevron-right" size={20} />}
          onPress={() => OpenUrl("https://www.google.com")}
        ></RowItem>

        <Separator />

        <RowItem
          leftIcon={<AntDesign name="chrome" size={24} color="black" />}
          text="Web"
          rightIcon={<Entypo name="chevron-right" size={20} />}
          onPress={() => OpenUrl("https://www.youtube.com")}
        ></RowItem>

        <Separator />

        <RowItem
          leftIcon={<AntDesign name="windows" size={24} color="black" />}
          text="Windows"
          rightIcon={<Entypo name="chevron-right" size={20} />}
          onPress={() => OpenUrl("https://www.gmail.com")}
        ></RowItem>
        </ScrollView>
    </SafeAreaView>
  );
};
