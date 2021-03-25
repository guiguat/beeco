import styles from '../../styles/Star.module.css'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'

export default function Star(props){
    const [rating, setRating] = useState(null);
    
    return(
       <div>
           {[... Array(5)].map((star, i)=>{
               const ratingValue =  i + 1;
               return(
                   <label className={styles.label}>
                       <input 
                            type="radio" 
                            className={styles.starInput}
                            value= {ratingValue}
                            onClick={()=> {
                                setRating(ratingValue)
                                props.updateRate(ratingValue)}} 
                       />
                       
                       <FaStar className="star" color={ratingValue <= rating ? "#FFE000": "#6C6C6C"}size={50}/>
                   </label>
               )
           })}
       </div>
    )
}
