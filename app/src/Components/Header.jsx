import React from 'react'

const Header = () => {
    return (
        <div className='header d-flex justify-content-center p-1 '>
            <div >
                Overpaying for your shipments, not anymore.
            </div>

            <a href="/"className='mx-2' style={{all:"unset"}}>
              <u>Know how!</u>  
            </a>
        </div>
    )
}

export default Header
