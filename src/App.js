import logo from './logo.svg';
import './App.css';
import Btn from'./componentes/Boton.jsx'
import C from './componentes/contador.js';
import {useState} from 'react';
function App() {
  const [nClic,setClic]=useState(0)
  const eveC=()=>{
    setClic( nClic+1);
  };
  const eveR=()=>{
    setClic(0);
  };





  return (
    <div className="App">
    
      <div className="Contener-contador">
        <C 
        nClic={nClic} 
        />

        <Btn
        texto={'Clic'}
        Bclick={true}
        manejarC={eveC}
        />
        <Btn
        texto={'Reiniciar'}
        Bclick={false}
        manejarC={eveR}
        />
      </div>
    </div>
  );
}

export default App;
