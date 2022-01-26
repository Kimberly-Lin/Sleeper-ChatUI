/**
 * Component for chat input
 */

import { View, Button, StyleSheet } from "react-native";
import ChatForm from "./ChatForm";
import {useState, useEffect} from "react";
import GifWindow from "./GifWindow";

function ChatInput({submitNewMessage}){
  const [needGIFWindow, setNeedGIFWindow] = useState(false);

  function handleGIFButton(){
    setNeedGIFWindow(!needGIFWindow);
  }

  function submitGif(gif){
    submitNewMessage(`gif${gif}`);
    setNeedGIFWindow(false);
  }

  return (
    <View style={styles.outerContainer}>
      {needGIFWindow
        ? <GifWindow submitGif={submitGif}/>
        : null}
      <View style={styles.container}>
        <ChatForm submitNewMessage={submitNewMessage}/>
        <Button style={styles.GIFButton} title="GIF" onPress={handleGIFButton}></Button>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  outerContainer:{
    backgroundColor: '#ffff',
  },
  container:{
    flexDirection: "row",
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