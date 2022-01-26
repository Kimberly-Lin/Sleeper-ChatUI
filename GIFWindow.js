import axios from "axios";
import {useEffect, useState} from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import uuid from 'react-native-uuid';
// import {API_KEY} from 'react-native-dotenv'

/** Displays top 10 trending GIF */
const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/trending?"
// const API_KEY = process.env;
// console.log(API_KEY)

const TEMP_GIFS = [
  "https://media0.giphy.com/media/XfARMjFNRfNBnJuOEq/giphy.gif",
  "https://media4.giphy.com/media/x14wBIs3RXhVDkQxyO/giphy.gif",
  "https://media1.giphy.com/media/XC7Wnm8Nd3FVbqxkVY/giphy.gif",
  "https://media0.giphy.com/media/ggzLu2ytv81P7IiVPA/giphy.gif",
  "https://media3.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif",
  "https://media1.giphy.com/media/BYoRqTmcgzHcL9TCy1/giphy.gif",
  "https://media4.giphy.com/media/gj0QdZ9FgqGhOBNlFS/giphy.gif",
  "https://media2.giphy.com/media/3CCXHZWV6F6O9VQ7FL/giphy.gif",
  "https://media1.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif",
  "https://media1.giphy.com/media/iJJ6E58EttmFqgLo96/giphy.gif",
  "https://media0.giphy.com/media/tBn79gPcAHuPWuBOgl/giphy.gif",
  "https://media0.giphy.com/media/hFmIU5GQF18Aw/giphy.gif",
  "https://media3.giphy.com/media/EhoCESPRpUzGBRlwwO/giphy.gif",
  "https://media0.giphy.com/media/KdC9XVrVYOVu6zZiMH/giphy.gif",
  "https://media1.giphy.com/media/mynZXL16HFpj6Z7KMK/giphy.gif",
  "https://media2.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif",
  "https://media4.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif",
  "https://media3.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy.gif",
  "https://media1.giphy.com/media/4N1wOi78ZGzSB6H7vK/giphy.gif",
  "https://media4.giphy.com/media/M90mJvfWfd5mbUuULX/giphy.gif",
  "https://media1.giphy.com/media/sUqioYKe55recDAdmK/giphy.gif",
  "https://media2.giphy.com/media/jnQYWZ0T4mkhCmkzcn/giphy.gif",
  "https://media1.giphy.com/media/gWRJEffTPwG1ANQi4W/giphy.gif",
  "https://media0.giphy.com/media/QhjR3MG9ZFfjB6BtIZ/giphy.gif",
  "https://media2.giphy.com/media/VEc4fcyBWDbNQ1K1xu/giphy.gif",
  "https://media0.giphy.com/media/3NtY188QaxDdC/giphy.gif",
  "https://media4.giphy.com/media/5hvWaviAuSAl5BJvR2/giphy.gif",
  "https://media3.giphy.com/media/l3fQf1OEAq0iri9RC/giphy.gif",
  "https://media1.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif",
  "https://media3.giphy.com/media/pynZagVcYxVUk/giphy.gif",
  "https://media0.giphy.com/media/rBg67mCRacBmCJR6JN/giphy.gif",
  "https://media3.giphy.com/media/FoH28ucxZFJZu/giphy.gif",
  "https://media1.giphy.com/media/BXHg8NZMHhObLbwS99/giphy.gif",
  "https://media4.giphy.com/media/xThuWkj1FAYH4wmGfC/giphy.gif",
  "https://media2.giphy.com/media/UO5elnTqo4vSg/giphy.gif",
  "https://media2.giphy.com/media/xT0xeAxOpzSus9ciLC/giphy.gif",
  "https://media1.giphy.com/media/9G0AdBbVrkV3O/giphy.gif",
  "https://media0.giphy.com/media/RB46T9ysjzDEs/giphy.gif",
  "https://media4.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif",
  "https://media2.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif",
  "https://media0.giphy.com/media/YaPmdnCg2bYY8wRtEw/giphy.gif",
  "https://media2.giphy.com/media/3o6UBarplKsenNTgZ2/giphy.gif",
  "https://media2.giphy.com/media/ATlmGeXZlBr1kUnFOF/giphy.gif",
  "https://media3.giphy.com/media/QaZCMFuWSk6YvuszhX/giphy.gif",
  "https://media3.giphy.com/media/xT9IgK70y3VHfkksve/giphy.gif",
  "https://media1.giphy.com/media/26tPo9rksWnfPo4HS/giphy.gif",
  "https://media3.giphy.com/media/kRnRFFFTq3PUY/giphy.gif",
  "https://media4.giphy.com/media/soXYQV9glqQJulDQ4N/giphy.gif",
  "https://media2.giphy.com/media/ZQ6YRgFGqZ9xC/giphy.gif",
  "https://media3.giphy.com/media/J6ctgPvnDpDi0/giphy.gif",
]

function GifWindow({submitGif}){
  /**Using temporary gifs to avoid making too may API calls while working on other features */
  const [gifs, setGifs] = useState(TEMP_GIFS);
  const [needGifs, setNeedGifs] = useState(true);

  // useEffect(
  //   function getGifs() {
  //     console.log("Gifs effect ran")
  //     async function fetchGifs() {
  //       try {
  //         const response = await axios.get(`${GIPHY_API_URL}api_key=Awq5410QQl0416nJogqlsinldM2s9PCA&limit=50`);
  //         //#TODO: GET .ENV TO WORK
  //         // const response = await axios.get(`${GIPHY_API_URL}api_key=${API_KEY}`);
  //         let gifUrls = response.data.data.map(data=>data.images.original.url);
  //         setGifs(gifUrls);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     fetchGifs();
  //     setNeedGifs(false);
  //   },
  //   [needGifs]
  // );
  // console.log(gifs)
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
    height:100,
  }, 
  image:{
    borderColor:'black',
    borderWidth:1,
    height:100,
    width:100,
  }
})

export default GifWindow;