import React from 'react';
import { Link }from '@inertiajs/react';
//basic component used to handle a no data return from the API
const NoMatch = ({ message}) => {
  const boxStyle = {
    boxShadow: '0 0 5px black',
    borderRadius:'15px',
    margin:'0 auto',
    width:'60%',
    background:'white',
    padding:'100px',
  }
  const contStyle = {
    padding:'150px',
    background:'lightgray',
    height:'700px'
  }
  const linkStyle = {
    textDecoration:'underline',
    color:'blue',
  }
return (
    <div style={contStyle}> 
        <div style={boxStyle}> 
            <h1>{message}</h1>
            <Link href="/dashboard" style={linkStyle}>Back</Link>
        </div>
    </div>

    );
}

export default NoMatch;