import React from 'react'

export default function RepositoryBranch(props) {
return (
        <div>
           <div>  
               <li>                
                 <a href={props.quote.clone_url} >{props.quote.name}</a> : {props.quote.description}   
               </li>                 
           </div>           
        </div>
    )
}