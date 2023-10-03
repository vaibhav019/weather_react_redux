import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './navBtn.module.css';

export const NavBtn = ({name , path,clickedItemName,setClickedItem}) => {
  console.log(path)
  return (
    <NavLink to={path} onClick={()=>setClickedItem(path)} >
        <div className={clickedItemName===path?styles.nav_btn_active_cls:
           styles.nav_btn_in_active_cls}>
             {name}
        </div>
    </NavLink>
  )
}
