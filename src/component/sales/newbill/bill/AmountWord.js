import React from 'react'
import {ToWords} from 'to-words'


function AmountWord({total}) {    
    const toWords = new ToWords();
    const amount = total.toFixed(0)

    return (
        <div className="famountword">
            <p>Amount Chargeable (in word)</p>            
            <p>{toWords.convert(amount)} Rupees Only</p>
        </div>
    )
}
 
export default AmountWord
