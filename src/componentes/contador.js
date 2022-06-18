import React from "react";
import '../style/cont.css';
function C({ nClic }){
    return (
        <div className="contador">
            {nClic}
        </div>
    );
}

export default C;
