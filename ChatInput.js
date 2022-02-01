import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        <TouchableOpacity style={styles.GIFButton} title="GIF" onPress={handleGIFButton}>
          <Text>GIF</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  outerContainer:{
    backgroundColor: '#ffff',
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  container:{
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  GIFButton: {
    alignSelf: "flex-start",
    borderWidth: 1,
    padding: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 3
  },
});

export default ChatInput;