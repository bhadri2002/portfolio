import { gsap } from 'gsap-trial'
import React, { useEffect } from 'react'

function Header() {
    useEffect(() => {
        gsap.to(".home-header", {

        })
    }, [])
    
    return (
        <div className='home-header'>Header</div>
    )
}

export default Header