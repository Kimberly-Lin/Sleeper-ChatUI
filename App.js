import { ScrollView, 
  SafeAreaView,
  StyleSheet, 
  View, 
  KeyboardAvoidingView } from 'react-native';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import MessageArea from './MessageArea';
import { useState, useEffect} from 'react';

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

  //Mocking other user messages
  useEffect(() => {
    const timer = setTimeout(() => 
      receiveMessage('mockUser1','randomwords')
    , Math.floor(Math.random()*5000));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ChatTitle title='Sleeper Chat'/>
        <ScrollView style={styles.messageBox}>
          <MessageArea messageBlocks={messageBlocks}/>
        </ScrollView>
        <View style={styles.chatInput}>
          <ChatInput receiveMessage={receiveMessage}/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  chatTitle: {
    backgroundColor: 'pink',
    height: 50,
  },
  messageBox:{
    backgroundColor: '#ffff',
    height: 300,
  },
  chatInput:{
    backgroundColor: '#ffff',
    borderColor: 'black',
    height:50,
  }
});

export default App;