import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return ( 
        <div className='nav-container' >
         {
            data.map((link, id)=>{
                return <Link key={id} to={link.route}>
                {link.name}
                </Link>
            })
         }
        </div>
     );
}
 const styles = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
 }
export {Nav};