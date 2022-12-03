import 'aframe'
import 'aframe-particle-system-component';
import {Scene} from 'aframe-react';
// css modules imports 
import './App.css'
// assets modules imports 
import skyImage from './assets/images/stars.jpg';

// other components imports
import {Mountain, Rocket} from './components'


function App() {

  return(
    <Scene cursor="rayOrigin: mouse"  update-html>
    <a-camera>
        <a-cursor></a-cursor>
    </a-camera>
    <a-assets>
      <img id="skyStars" src={skyImage} alt="sky stars" />
    </a-assets>

    <a-sky
      color = "#ffffff"
      material = "src: #skyStars"
      rotation = "0 0 0"
    >
    </a-sky>
      <Mountain/>
      <Rocket x={0} y={50} z={-80}/>
    </Scene>
  )
}

export default App
