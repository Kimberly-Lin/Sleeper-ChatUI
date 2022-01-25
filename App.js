import { ScrollView, SafeAreaView,StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import ChatInput from './ChatInput';
import ChatTitle from './ChatTitle';
import MessageCards from './MessageCards';

export default function App() {
  let currTime = new Date().getHours() + " : " + new Date().getMinutes();

  return (
    <SafeAreaView style={styles.container}>
      <ChatTitle title='Sleeper Chat'/>
      <ScrollView style={styles.messageBox}>
        <MessageCards avatar={require('./assets/rhea.jpg')} name='Rhea' messages={['hello', 'this is', 'Rhea']} timestamp={currTime}/>
      </ScrollView>
      <View style={styles.chatInput}>
        <ChatInput/>
      </View>
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
