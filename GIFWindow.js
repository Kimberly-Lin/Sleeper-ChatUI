

/** Displays top 10 trending GIF */

import GIF from "./GIF";

function GIFWindow({submitNewMessage}){
  const [gifs, setGifs] = useState([]);

  return (
    gifs.map(gif=>
      <GIF key={uuid.v4()} 
        submitNewMessage={submitNewMessage} 
        imgSource={gif}/>)
  )
}