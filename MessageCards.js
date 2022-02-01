import { Image, View, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

const DEFAULT_AVATAR = require('./assets/default_avatar.jpeg')

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
      <Image source={avatar} style={styles.avatar}></Image>
      <View>
        <View style={styles.header}>
          <Text style = {styles.name}>{name}</Text>
          <Text style={styles.timestamp}>{currTime}</Text>
        </View>
        <View style={styles.messages}>
        {messages.map((message)=>
          (message.slice(0,3)==="gif" 
          ? <Image style={styles.gif} source={{uri:message.slice(3)}} key={uuid.v4()}/> 
          : <Text style={styles.message} key={uuid.v4()}>{message}</Text>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    // marginBottom: 5,
    marginTop: 10,
    marginRight: 40,
    flexDirection:'row',
  },
  header:{
    flex:1,
    flexDirection:'row',
    padding: 3,
  },
  avatar:{
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  name:{
    fontSize:15,
    fontWeight: "bold",
    alignSelf:'flex-start',
    marginLeft: 2,
  },
  timestamp:{
    fontSize:10,
    alignSelf:'flex-end',
    color: 'grey',
    marginLeft: 5,
    marginBottom: 2,
  },
  messages:{
    marginLeft: 5,
    marginRight: 5,
    paddingRight: 10,
  },
  message:{
    fontSize:15,
    marginBottom: 8,
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