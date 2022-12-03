import { useLayoutEffect } from 'react';
import 'aframe'
import {Entity} from 'aframe-react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import mountain from '../assets/models/mountain.glb'



export default () => {
  useLayoutEffect(()=>{
    const loader = new GLTFLoader()
    loader.load(mountain, (d)=> {
      const entity = document.getElementById("mountain");
      entity.object3D.add(d.scene)
    });
  },[])
  return  <Entity  id="mountain" position="0 0 0" scale="15 15 15" ></Entity>
}


