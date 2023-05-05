import React from "react";
import { StyleSheet,View, Text } from "react-native";

export default function Title(){

    return(
        <View style = {styles.container}>
            <Text style = {styles.tittle}>
                    App Health
                                    </Text>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e6e6fa",
      height: 100
    },
    tittle: {
      color: "#4b0082",
      fontSize: 30,
      fontWeight: "bold",
      
      
    }
  });