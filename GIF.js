/** Individual clickable GIF component */

function GIF({submitNewMessage, imgSource}){
  return (
    <TouchableOpacity onPress={submitNewMessage}>
      <Image source={imgSource}></Image>
    </TouchableOpacity>
  )
}

export default GIF;