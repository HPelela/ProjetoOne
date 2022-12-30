import { useState, useEffect, useRef } from 'react';
import './DefinirCss.css';
import imagem from './../imagens/buu.png'
import { useNavigate } from "react-router-dom";

import {motion} from 'framer-motion'

const images = [imagem]

function Pagina1() {

  const carosel = useRef();
  const [largura, setLargura ] = useState()

  useEffect(() => {

    setLargura(carosel.current?.scrollWidth - carosel.current?.offsetWidth)
  },[])
  return (
    <div className="App">
      <motion.div ref={carosel}  whileTap={{ cursor: "grabbing"}}>
      <motion.div className='inner' drag="x" dragConstraints={{ right:0, left: -largura}}>
        {images.map(imagem => (
          <motion.div className='item' key={imagem}>
            <img src={imagem} alt=""></img>
            </motion.div>
        ))}
      </motion.div>
      </motion.div>
    </div>
  );
}

export default Pagina1;
