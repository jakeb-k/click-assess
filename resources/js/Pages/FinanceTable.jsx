import React from 'react';
import styled from "styled-components";

const CompanyInfo = ({ data }) => {
  //styles
  const contStyle = {
    width:'50%',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    textAlign:'center',
    margin:'50px auto'
    

  }
  const infoBox = {
    display:'flex',
    flexDirection:'row',
    border:'1px solid black',
    justifyContent:'space-evenly',
    padding:'5px',
  }
  const tableStyle = {
    margin:'15px auto',
    borderCollapse: 'collapse',
    border:' 1px solid black' 
  }
  const tableData = Object.entries(data).map(([key, value]) => (
    <tbody>
      <tr>
      <td style={{fontWeight:'bold'}}>{typeof key === 'string' ? key : JSON.stringify(key)}</td>
    </tr>
    <tr>
      <td>{typeof value === 'string' ? value : JSON.stringify(value)}</td>
    </tr>
     </tbody>
  ));

  return (
    <div style={contStyle}>
      <h2>Company Information</h2>
      
        <table style={tableStyle}>
      
          
              {tableData.map((row, index) => (
                <tbody style={infoBox} key={index}>{row}</tbody>
              ))}

        </table>
    </div>
    
  );
};

export default CompanyInfo;