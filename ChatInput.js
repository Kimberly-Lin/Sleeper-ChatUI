/**
 * Component for chat input
 */

import { View, Button, StyleSheet } from "react-native";
import ChatForm from "./ChatForm";

function ChatInput(){
  return (
    <View style={styles.container}>
      <ChatForm/>
      <Button title="GIF" style={styles.GIFButton}></Button>
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