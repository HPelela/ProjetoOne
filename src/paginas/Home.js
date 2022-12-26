import { useState, useEffect, useRef } from 'react';
 import { useNavigate } from "react-router-dom";
import './DefinirCss.css';
import imagem1 from './../imagens/aoAshi.jpg'
import imagem2 from './../imagens/naruto.jpg';
import imagem3 from './../imagens/darkDeku.jpg';
import imagem4 from './../imagens/demonslayer.webp';
import {motion} from 'framer-motion'

const images = [imagem1, imagem2, imagem3, imagem4]

function Home() {
  let navigate = useNavigate();
  const carosel = useRef();
  const [largura, setLargura ] = useState()

  function onclick(e) {
    debugger;
  navigate("/Pagina1")

  }

  useEffect(() => {

    setLargura(carosel.current?.scrollWidth - carosel.current?.offsetWidth)
  },[])
  return (
    <div className="App">
      <motion.div ref={carosel} className='carosel' whileTap={{ cursor: "grabbing"}}>
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

export default Home;
