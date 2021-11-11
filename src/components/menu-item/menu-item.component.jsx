import React from 'react'
import './menu-item.style.scss'


const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div style= {{ backgroundImage : `URL(${imageUrl})`  }} 
        className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>{title} </h1>
                        <span className='subtitle'> Shop Now</span>
                    </div>
        </div>
    )
}

export default MenuItem;