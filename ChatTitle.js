import { Text, View, StyleSheet } from "react-native";

/** Component for the chat title 
 * 
 * props: title
 * state: none
 * 
 * App -> Chat Title
*/

function ChatTitle({title}){
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:10,
  },
  titleText: {
    fontSize: 30,
    includeFontPadding: true,
  },
})

export default ChatTitle;