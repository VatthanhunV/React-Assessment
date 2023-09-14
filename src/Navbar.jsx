import React from 'react';




const Navbar = () => {
    return (
        <div className='navbar'>
            <button ><a href={'/'}>Home</a></button>
            {/* <button><a href={'/user'}>User</a></button>
            <button><a href={'/admin'}>Admin</a></button> */}
            <button><a href={'/owner'}>Owner</a></button>
        </div>
    )
}

export default Navbar;