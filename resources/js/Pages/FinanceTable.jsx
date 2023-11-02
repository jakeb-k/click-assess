import React from 'react';

const CompanyInfo = ({ data }) => {
  const tableData = Object.entries(data).map(([key, value]) => (
   
    <tr>
          <td>{key}</td>
          <td>{typeof value === 'string' ? value : JSON.stringify(value)}</td>
    </tr>
    
    
  ));

  return (
    <div>
      <h2>Company Information Maybe</h2>
      <table>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyInfo;