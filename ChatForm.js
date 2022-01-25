/**
 * Component for chat input
 */

import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import React, { useState } from 'react';

function ChatForm(){
  const [message, setMessage] = useState('');
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='sentences' style={StyleSheet.textInput}
      placeholder="Message Group"
      maxLength={50}
      onBlur={Keyboard.dismiss}
      onChangeText={message => setMessage(message)}/>
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