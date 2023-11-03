import React from 'react';
import { Link }from '@inertiajs/react';
//custom table component used to display API data in a readable format
const CompanyInfo = ({ data, title }) => {
  //styles
  const contStyle = {
    width:'50%',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    textAlign:'center',
    margin:'50px auto'
    

  }
  const linkStyle= {
    color:'blue',
    textDecoration:'underline',
    marginRight:'auto',
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
  //map the object key value data to enable easy looping of large amounts of data
  //checks the value is a string and if not it changes it to a string
  //to ensure it will display properly
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
      <Link href="/dashboard" style={linkStyle}>Back</Link>
      <h2>{title}</h2>
      
        <table style={tableStyle}>
      
          
              {tableData.map((row, index) => (
                <tbody style={infoBox} key={index}>{row}</tbody>
              ))}

        </table>
    </div>
    
  );
};

export default CompanyInfo;
