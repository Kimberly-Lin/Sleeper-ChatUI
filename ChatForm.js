import { View, TextInput, StyleSheet, Keyboard } from "react-native";
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

  function handleSubmit(){
    receiveMessage('rhea',message);
    setMessage(emptyForm);
  }

  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='sentences' style={StyleSheet.textInput}
      placeholder="Message Group"
      value={message}
      maxLength={50}
      onBlur={Keyboard.dismiss}
      onChangeText={m => setMessage(m)}
      onSubmitEditing={handleSubmit}
      />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    width: 300,
    alignContent: "center",
    borderColor: 'black',
    borderWidth: 1,
  },
  textInput:{
    width: 80,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  }
})

export default ChatForm;