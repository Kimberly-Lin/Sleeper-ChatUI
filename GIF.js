import {TouchableOpacity, Image} from 'react-native'

/** Individual clickable GIF component */

function Gif({submitNewMessage, imgSource}){
  return (
    <TouchableOpacity onPress={submitNewMessage}>
      <Image source={{uri:imgSource}}></Image>
    </TouchableOpacity>
  )
}

export default Gif;