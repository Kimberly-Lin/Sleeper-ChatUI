import { View, Button, StyleSheet } from "react-native";
import {useState} from "react";

import ChatForm from "./ChatForm";
import GifWindow from "./GifWindow";

/** Component for chat input
 * 
 * props: receiveMessage fn
 * state: needGIFWindow
 * 
 * App -> ChatInput -> {GifWindow, ChatForm}
 */

function ChatInput({receiveMessage}){
  const [needGIFWindow, setNeedGIFWindow] = useState(false);
  
  function handleGIFButton(){
    setNeedGIFWindow(!needGIFWindow);
  }

  function submitGif(gif){
    receiveMessage('rhea',`gif${gif}`);
    setNeedGIFWindow(false);
  }

  return (
    <View style={styles.outerContainer}>
      {needGIFWindow
        ? <GifWindow submitGif={submitGif}/>
        : null}
      <View style={styles.container}>
        <ChatForm receiveMessage={receiveMessage}/>
        <Button style={styles.GIFButton} title="GIF" onPress={handleGIFButton}></Button>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  outerContainer:{
    backgroundColor: '#ffff',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    paddingTop: 10, 
  },
  container:{
    flexDirection: "row",
    marginLeft:10,
    marginBottom:5,
  },
  GIFButton: {
    width:100,
    alignSelf: "center",
  },
});

export default ChatInput;