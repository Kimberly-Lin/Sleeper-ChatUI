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
  const [textBoxHeight, setTextBoxHeight] = useState()

  function handleSubmit(){
    receiveMessage('rhea',message);
    setMessage(emptyForm);
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.textInput, {height: textBoxHeight}}
      autoCapitalize='sentences' 
      multiline={true} 
      placeholder="Message Group"
      value={message}
      onBlur={Keyboard.dismiss}
      blurOnSubmit={true}
      onChangeText={m => setMessage(m)}
      onSubmitEditing={handleSubmit}
      onContentSizeChange={e=>setTextBoxHeight(e.nativeEvent.contentSize.height)}
      />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    width: 300,
    alignContent: "center",
  },
  textInput:{
    width: 100,
  }
})

export default ChatForm;