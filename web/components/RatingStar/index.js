import styles from '../../styles/Star.module.css'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'

export default function Star(props){    
    return(
       <div>
           {[... Array(5)].map((star, i)=>{
               const ratingValue =  i + 1;
               return(
                   <label className={styles.label} key={i}>
                       <input 
                            type="radio" 
                            className={styles.starInput}
                            value= {ratingValue}
                            onClick={()=> {
                                props.updateRate(ratingValue)}} 
                       />
                       
                       <FaStar className="star" color={ratingValue <= props.rating ? "#FFE000": "#6C6C6C"}size={50}/>
                   </label>
               )
           })}
       </div>
    )
}
