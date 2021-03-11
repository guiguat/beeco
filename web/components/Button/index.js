import '../../styles/Button.module.css' 

export default function Button({text, isOutline, ...rest}){
    return(
        <button className={`button ${isOutline?"button-outline":""}`} {...rest}> {text} </button>
    );
}