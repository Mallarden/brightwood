import React from 'react'
import {Link} from 'react-router-dom'

function Logo(){

    return(
        <div className="logo">
            <Link to='/'><span>Brightwood Design</span></Link>
        </div>
    )
    
}

export default Logo