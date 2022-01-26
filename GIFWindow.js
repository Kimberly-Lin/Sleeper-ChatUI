import axios from "axios";
import Gif from "./Gif";
import {useEffect, useState} from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import uuid from 'react-native-uuid';
// import {API_KEY} from 'react-native-dotenv'

/** Displays top 10 trending GIF */
const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/trending?"
// const API_KEY = process.env;
// console.log(API_KEY)

function GifWindow({submitNewMessage}){
  const [gifs, setGifs] = useState([]);
  const [needGifs, setNeedGifs] = useState(true);

  useEffect(
    function getGifs() {
      console.log("Gifs effect ran")
      async function fetchGifs() {
        try {
          const response = await axios.get(`${GIPHY_API_URL}api_key=Awq5410QQl0416nJogqlsinldM2s9PCA&limit=50`);
          //#TODO: GET .ENV TO WORK
          // const response = await axios.get(`${GIPHY_API_URL}api_key=${API_KEY}`);
          let gifUrls = response.data.data.map(data=>data.images.original.url);
          setGifs(gifUrls);
        } catch (err) {
          console.log(err);
        }
      }
      fetchGifs();
      setNeedGifs(false);
    },
    [needGifs]
  );
  console.log(gifs)
  return (
    <ScrollView style={styles.container}>
      {gifs.map(gif=>
        <TouchableOpacity key={uuid.v4()} onPress={submitNewMessage}>
          <Image style={styles.image} source={{uri:gif}}></Image>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    height:600,
    alignSelf: "flex-end",
    flexDirection: "row",
  }, 
  image:{
    borderColor:'black',
    borderWidth:1,
    height:100,
    width:100,
  }
})

export default GifWindow;