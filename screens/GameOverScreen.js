import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
      <Image 
      fadeDuration={30000}
      source={{uri:'https://media.istockphoto.com/photos/rocky-mountain-peak-picture-id904856396?k=6&m=904856396&s=612x612&w=0&h=ZVZpbtWCmkHLN6cGpRtGdBIhwZZsMwXn5xSL3ThqslU='}}
    //   source={require("../assets/success.png")}
      style={styles.image} 
      resizeMode="cover" />

     </View>
      <BodyText>Number of rounds: {props.roundNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius:200,
    borderWidth:3,
    borderColor: 'black',
    overflow:'hidden',
    marginVertical:30
  }
});

export default GameOverScreen;
