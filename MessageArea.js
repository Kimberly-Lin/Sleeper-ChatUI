import { ScrollView, StyleSheet} from "react-native";
import uuid from 'react-native-uuid';

import MessageCards from "./MessageCards";

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

/** Area to display messages
 * 
 * props: nessageBlocks
 * state: N/A
 * 
 * App -> MessageArea -> MessageCards
 */

function MessageArea({messageBlocks}){

  return(
    <ScrollView style={styles.container}
      ref={ref => {this.scrollView = ref}}
      onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
      {messageBlocks.map(
        function(messageBlock){
          let user = messageBlock.user;
          let avatar = USERS[user].avatar;
          let name = USERS[user].name;
          let messages = messageBlock.messages;
          return (
            avatar 
            ? <MessageCards key={uuid.v4()}
              avatar= {avatar}
              name={name} 
              messages={messages}/>
            : <MessageCards key={uuid.v4()}
              name={name} 
              messages={messages}/>
          )})}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    height: 300,
  },
});

export default MessageArea;