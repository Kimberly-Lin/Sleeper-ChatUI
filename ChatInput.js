/**
 * Component for chat input
 */

import { View, Button, StyleSheet } from "react-native";
import ChatForm from "./ChatForm";
import {useState, useEffect} from "react";

function ChatInput({submitNewMessage}){
  const [GIFWindow, setGIFWindow] = useState(false);

  function handleGIFButton(){
    setGIFWindow(true);
  }

  return (
    <View style={styles.container}>
      <ChatForm submitNewMessage={submitNewMessage}/>
      <Button style={styles.GIFButton} title="GIF" onPress={handleGIFButton}></Button>
      {(GIFWindow) ? <GIFWindow submitNewMessage={submitNewMessage}/> : null}
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
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