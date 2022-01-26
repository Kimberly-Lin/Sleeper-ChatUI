/**
 * Component for chat input
 */

import { View, Button, StyleSheet } from "react-native";
import ChatForm from "./ChatForm";
import {useState, useEffect} from "react";
import GifWindow from "./GifWindow";

function ChatInput({submitNewMessage}){
  const [needGIFWindow, setNeedGIFWindow] = useState(false);

  console.log({needGIFWindow})

  function handleGIFButton(){
    setNeedGIFWindow(true);
  }

  return (
    <View style={styles.container}>
      {needGIFWindow
        ? <GifWindow submitNewMessage={submitNewMessage}/>
        : null}
      <ChatForm submitNewMessage={submitNewMessage}/>
      <Button style={styles.GIFButton} title="GIF" onPress={handleGIFButton}></Button>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    // flex:1,
    // flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    marginBottom:5,
  },
  GIFButton: {
    width:10,
    alignSelf: "center",
  },
});

export default ChatInput;