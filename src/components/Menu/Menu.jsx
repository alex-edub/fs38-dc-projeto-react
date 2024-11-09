import style from "./Menu.module.css";
import {useState} from 'react';

function Menu(){
    const [itemIndex, setItemIndex] = useState(0);
    const menuItens = ["Home", "Produtos", "Categorias", "Meus pedidos"];

    function handleClick(index){
        setItemIndex(index);
    }
        
    return(
        <>
            <ul className={style.menu}>
                {menuItens.map((item, index) => (
                    <li 
                        key={index}
                        onClick={() => handleClick(index)}
                        className={index === itemIndex ?`${style.active}`  : style.item}
                    >
                        {item}
                    </li>
                ))}
            </ul>    
        </>
    );
}

export default Menu;
