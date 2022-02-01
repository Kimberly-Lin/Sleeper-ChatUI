import {
  SafeAreaView,
  StyleSheet, 
  KeyboardAvoidingView } from 'react-native';
import { useState, useEffect} from 'react';

import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import MessageArea from './MessageArea';

const USERS = {
  "rhea":{
    avatar:require('./assets/rhea.jpg'),
    name:"Rhea",
  },
  "mockUser1":{
    name:"MockingBird"
  },
  "mockUser2":{
    name:"MockingJay"
  }
}

// const UserContext = createContext(USERS);

//this could be old messages saved in the database for the chat
const initialMessages=[];

/** Renders chat application
 * 
 * props: N/A
 * state: messageBlocks, lastUser
 * 
 * App -> {ChatTitle, MessageArea, ChatInput}
 */

function App() {
  const [messageBlocks, setMessageBlocks] = useState(initialMessages);
  const [lastUser, setLastUser] = useState('');

  function receiveMessage(username,msg){
    if(lastUser!==username){
      setLastUser(username);
      setMessageBlocks(messageBlocks=>[...messageBlocks,{"user":username, "messages":[msg]}]);
    } else {
      setMessageBlocks(
        function addMessageToLastUser(prevMessageBlocks){
          const lastIdx = prevMessageBlocks.length-1;
          const lastMessageBlock = prevMessageBlocks[lastIdx];
          const modLastMessageBlock = {
            user:lastMessageBlock.user, 
            messages:[...lastMessageBlock.messages, msg]};
          return [...prevMessageBlocks.slice(0,lastIdx), modLastMessageBlock]
        }
      );
    }
  }

  //Mocking 4 other user messages interval is randomly set from 0-5secs after the previous message
  useEffect(() => {
    const timer1 = setTimeout(() => {
      receiveMessage('mockUser1','randomwords')
      const timer2 = setTimeout(() => {
        receiveMessage('mockUser2','randomwords1')
        const timer3 = setTimeout(() => {
          receiveMessage('mockUser1','randomwords2')
          const timer4 = setTimeout(() => {
            receiveMessage('mockUser2','randomwords3')
          }
    , Math.floor(Math.random()*5000));
        }
    , Math.floor(Math.random()*5000));
      }
    , Math.floor(Math.random()*5000));
    }
    , Math.floor(Math.random()*5000));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
        <ChatTitle title='Sleeper Chat'/>
        <MessageArea messageBlocks={messageBlocks}/>
        <ChatInput receiveMessage={receiveMessage}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default App;