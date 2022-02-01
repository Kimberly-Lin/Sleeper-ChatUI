import {useEffect, useState} from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import uuid from 'react-native-uuid';

import GiphyAPI from "./GiphyAPI"

/** Displays top 10 trending GIF 
 * 
 * prop:submitGif fn
 * state: gifs, needGifs
 * 
 * ChatInput -> GifWindow -> N/A
*/

function GifWindow({submitGif}){
  const [gifs, setGifs] = useState([]);
  const [needGifs, setNeedGifs] = useState(true);

  useEffect(
    function getGifs() {
      async function fetchGifs() {
        try {
          let gifUrls = await GiphyAPI.getTrending();
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

  function handleGif(gif){
    submitGif(gif);
  }

  return (
    <ScrollView style={styles.container} horizontal={true}>
      {gifs.map(gif=>
        <TouchableOpacity key={uuid.v4()} onPress={()=>handleGif(gif)}>
          <Image style={styles.image} source={{uri:gif}}></Image>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor: '#ffff',
    marginBottom: 10,
    marginTop: 10,
  }, 
  image:{
    marginLeft: 5,
    height:100,
    width:100,
  }
})

export default GifWindow;
