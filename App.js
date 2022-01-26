import { ScrollView, SafeAreaView,StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import MessageCards from './MessageCards';
import { useState } from 'react';

const initialMessages=[];

function App() {
  const [messages, setMessages] = useState(initialMessages);

  function submitNewMessage(msg){
    setMessages(messages=>([...messages,msg]))
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ChatTitle title='Sleeper Chat'/>
        <ScrollView style={styles.messageBox}>
          <MessageCards
            avatar={require('./assets/rhea.jpg')} 
            name='Rhea' 
            messages={messages}/>
        </ScrollView>
        <View style={styles.chatInput}>
          <ChatInput submitNewMessage={submitNewMessage}/>
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
    backgroundColor: '#ffff'
  },
  chatInput:{
    backgroundColor: '#ffff',
    borderColor: 'black',
    height:50,
  }
});

export default App;