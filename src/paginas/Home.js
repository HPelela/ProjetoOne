import { useState, useEffect, useRef } from 'react';
 import { useNavigate } from "react-router-dom";
import './DefinirCss.css';
import imagem from './../imagens/montagem_linha.jpg'

import {motion} from 'framer-motion'


function Home() {
  let navigate = useNavigate();
  const carosel = useRef();
  const [largura, setLargura ] = useState()

  function onclick(e) {
    console.log(e.clientX)
    console.log(e.clientY)
    const x = e.clientX;
    const y = e.clientY;
    debugger;
    if((x >= 100 && x <= 200) &&  (y<=265))
      navigate("/Pagina1")
    else if((x >= 400 && x <= 480) &&  (y<=840))
      navigate("/Pagina2")


    console.log(e);
    return false;
  

  }

  return (
    <div className="App">
      <motion.div >
      <motion.div className='inner'>       
          <motion.div className='item' key={imagem}>
            <img src={imagem} alt="" onMouseDown={onclick}></img>
            </motion.div>     
      </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
