import { useLayoutEffect, useEffect, useState} from 'react';
import {Entity} from 'aframe-react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import rocket from '../assets/models/rocket.glb'
import * as API from '../service'


export default ({x,y,z}) => {
  const [isFetching, setFetching] = useState(false);
  const [heroes, setHeroes] = useState(null);

  useLayoutEffect(()=>{
    const loader = new GLTFLoader()
    loader.load(rocket, (d)=> {
      const entity = document.getElementById("rocket");
      entity.addEventListener('click', ()=> alert("test"));
      entity.object3D.add(d.scene)
    });
  },[]);

  useEffect(()=>{
    if(isFetching){
        const fetchHeroes = (async () => {
            const heroesData = await API.fetchHeroes();
            debugger;
        })()
        setFetching(false)
    }
  }, [isFetching]);

  const handleRocketClick = () => {
    console.log("click me");
    debugger;
  };

  return ( <Entity id="rocket" events={{click: handleRocketClick}} position={`${x} ${y} ${z}`} scale="15 15 15"  rotation="0 0 45"></Entity>)
}

