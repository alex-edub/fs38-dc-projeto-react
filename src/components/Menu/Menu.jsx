import style from "./Menu.module.css";
import {useState} from 'react';

function Menu(){
    const [itemIndex, setItemIndex] = useState(null);
    const menuItens = ["Home", "Produtos", "Categorias", "Meus pedidos"];

    function handleclick(index){
        setItemIndex(index);
    }
        
    return(
        <>
            <ul className={style.menu}>
                {menuItens.map((item, index) => (
                    <li 
                        key={index}
                        onClick={()=>handleclick(index)}
                        className={index === itemIndex ? '${style.active}' : style.item}
                    >
                        {item}
                </li>
                ))}
            </ul>    
        </>
    );
}
export default Menu;
