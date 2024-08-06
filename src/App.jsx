
import "./App.css"
import React, { useState, useEffect } from 'react';
import CsvDownload from "react-json-to-csv";
import infoData from "./info.json";


const InfoTable = () => {
  const [contador, setContador] = useState(0);
  const [selectedRows, setSelectedRows] = useState({});


  const renderHeaderCells = () => {
    return Object.keys(infoData).map((key, index) => (
      <th key={index}>{key}</th>
    ));
  };

  const renderRows = () => {
    return infoData.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {Object.values(item).map((value, cellIndex) => (
          <td key={cellIndex}>{value}</td>
        ))}
      </tr>
    ));
  };


  const handleCheckboxChange = (event, row) => {
    setSelectedRows({
      ...selectedRows,
      [row.id]: event.target.checked,
    });
  }
  

  const aumentarContador = () => {
    setContador(contador + 1);
  };
  

  return (
  <>
   <body>
  <h1 className="centro">Menú</h1>
    <h1 className="centro">estos son tus valores</h1>
  <div className="table-container">
    <table className="table">
      <thead>
        <tr>
          
          <th>Role</th>
          <th>Industry</th>
          <th>CNAE</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {infoData.map((item, index) => (
          <tr key={index}>
           
            <td>{item.Role}</td>
            <td>{item.industry}</td>
            <td>{item.CNAE}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="centro">
    <CsvDownload data={infoData} filename="datos.csv">
      <button onClick={aumentarContador}>Descargar CSV</button>
      <p>veces que se descargado: {contador}</p>
    </CsvDownload>
  </div>
</body>


    
  </>
  );
};

export default InfoTable;
