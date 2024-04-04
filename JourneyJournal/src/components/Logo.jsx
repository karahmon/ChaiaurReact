import React from 'react';

function Logo({width="100px"}) {
    return (
        <div>
           <img src="logo.png" alt="logo" style={{width: width}} />
        </div>
    );
}

export default Logo;