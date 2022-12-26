import { useState, useEffect, useRef } from 'react';
import './DefinirCss.css';
import imagem1 from './../imagens/aoAshi.jpg'

import {motion} from 'framer-motion'

const images = [imagem1]

function Pagina1() {
  const carosel = useRef();
  const [largura, setLargura ] = useState()

  function onclick(e) {
    debugger;
    console.log(e);
  }

  useEffect(() => {

    setLargura(carosel.current?.scrollWidth - carosel.current?.offsetWidth)
  },[])
  return (
    <div className="App">
      <motion.div ref={carosel}className='carosel' whileTap={{ cursor: "grabbing"}}>
      <motion.div className='inner' drag="x" dragConstraints={{ right:0, left: -largura}}>
        {images.map(imagem => (
          <motion.div className='item' key={imagem}>
            <img src={imagem} alt="" onMouseDown={onclick}></img>
            </motion.div>
        ))}
      </motion.div>
      </motion.div>
    </div>
  );
}

export default Pagina1;
