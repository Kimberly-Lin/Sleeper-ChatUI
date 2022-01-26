import { Image, View, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const DEFAULT_AVATAR = require('./assets/default_avatar.png')

/** Section of messages from the same user
 * 
 * props: avatar, name, messages
 * state: N/A
 * 
 * MessageArea -> MessageCards -> N/A
 */

function MessageCards({avatar=DEFAULT_AVATAR, name, messages}){
  let currTime = _addZero(new Date().getHours()) + " : " + _addZero(new Date().getMinutes());

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar}></Image>
        <Text style = {styles.name}>{name}</Text>
        <Text style={styles.timestamp}>{currTime}</Text>
      </View>
      {messages.map((message)=>
        (message.slice(0,3)==="gif" 
          ? <Image style={styles.gif} source={{uri:message.slice(3)}} key={uuid.v4()}/> 
          : <Text style={styles.message} key={uuid.v4()}>{message}</Text>
        ))}
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
    margin: 5,
  },
  avatar:{
    height: 60,
    width: 60,
    borderRadius: 50,
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
  },
  gif:{
    height:100,
    width:100,
  }
})

/** Add zero in front of single digit numbers */
function _addZero(i) {
  if (i < 10) i = "0" + i;
  return i;
}

export default MessageCards;