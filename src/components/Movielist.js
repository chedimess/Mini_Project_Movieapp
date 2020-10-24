import React from 'react'
import Moviecard from './Moviecard'




function Movielist({tabmoviee}) {

    return (
        <div className="movie-list">
           { tabmoviee.map((val)=>
            <Moviecard val={val}/>
           )
           }
        </div>
    )
        }
export default Movielist;
