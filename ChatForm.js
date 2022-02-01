import { View, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";
import React, { useState } from 'react';

/** Component for entering chat message
 * 
 * props: receiveMessage fn
 * state: needGIFWindow
 * 
 * ChatInput -> ChatForm -> N/A
 */

const emptyForm = '';

function ChatForm({receiveMessage}){
  const [message, setMessage] = useState(emptyForm);
  const [textBoxHeight, setTextBoxHeight] = useState()

  function handleSubmit(){
    receiveMessage('rhea',message);
    setMessage(emptyForm);
  }

  return (
    <View style={styles.container}>
      <View style={{width:270, marginBottom:5}}>
        <TextInput
        style={{height: textBoxHeight}}
        autoCapitalize='sentences' 
        multiline={true} 
        placeholder="Message Group"
        value={message}
        blurOnSubmit={false}
        onChangeText={m => setMessage(m)}
        onContentSizeChange={e=>setTextBoxHeight(e.nativeEvent.contentSize.height)}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    width: 315,
    alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  send:{
    flex: 1,
    color: "#3366FF",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: 15,
    alignContent: "center",
    alignSelf: "center",
    padding: 3,
  }
})

export default ChatForm;