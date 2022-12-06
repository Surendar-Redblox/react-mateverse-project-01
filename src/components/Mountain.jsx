import { useLayoutEffect } from 'react';
import 'aframe';
import {Entity} from 'aframe-react';

import mountain from '../assets/models/mountain.glb';
import { GLTFLoader } from '../helpers';

export default () => {
  useLayoutEffect(()=>{
    GLTFLoader.load(mountain, (d)=> {
      const entity = document.getElementById("mountain");
      entity.object3D.add(d.scene);
    });
  },[]);
  
  return  <Entity  id="mountain" position="0 0 0" scale="15 15 15" ></Entity>
}


