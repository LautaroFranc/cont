import React from "react";
import '../style/btn.css';
function Botn({texto,Bclick,manejarC}) {
    return (
        <button
            className={Bclick ?'botn-click' : 'botReiniciar'}
            onClick={manejarC}>
            {texto}
        </button>
    );
}

export default Botn;