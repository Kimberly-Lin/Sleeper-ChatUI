import { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const DEFAULT_AVATAR = require('./assets/default_avatar.png')

/** Section of messages from the same user 
 * 
*/

function MessageCards({avatar=DEFAULT_AVATAR, name, messages}){
  let currTime = _addZero(new Date().getHours()) + " : " + _addZero(new Date().getMinutes());

  // const [messages, setMessages] = useState(messages);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar}></Image>
        <Text style = {styles.name}>{name}</Text>
        <Text style={styles.timestamp}>{currTime}</Text>
      </View>
      {messages.map((message)=><Text style={styles.message} key={uuid.v4()}>{message}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 10,
  },
  header:{
    flex:1,
    flexDirection:'row',
  },
  avatar:{
    height: 60,
    width: 60,
  },
  name:{
    fontSize:30,
    fontWeight: "bold",
    alignSelf:'flex-end',
    marginLeft: 10,
  },
  timestamp:{
    fontSize:15,
    alignSelf:'flex-end',
    marginLeft: 10,
    paddingBottom: 5,
  },
  message:{
    fontSize:25,
  }
})

function _addZero(i) {
  if (i < 10) i = "0" + i;
  return i;
}

export default MessageCards;