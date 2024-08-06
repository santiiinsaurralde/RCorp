
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







/*function App() {


function MyComponent({ info }) {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
   
    fetch('/info.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

 
 
   
      return (
        <div>
          <h1>buscar</h1>
          <p>Role: {info.Role}</p>
          <p>CNAE: {info.CNAE}</p>
          <p>Location: {info.location}</p>
          <p>Industry: {info.industry}</p>
        </div>
      );

   
 
  }
}
  export default App;




  // Renderiza los datos en tu componente
 


 /* Reemplaza con tu API Key y Spreadsheet ID
const apiKey = 'TU_API_KEY';
const spreadsheetId = '1RPlnDGG2SrxAU7WH52QhQonvqgGeaAA7rzvFKIUrF74';


/ URL de la hoja de cálculo
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`;

 Realiza una solicitud GET para obtener los datos
.then((response) => response.json())
.then((data) => {
     Aquí puedes procesar los datos obtenidos (por ejemplo, mostrarlos en la consola)
   console.log(data);
  })
  .catch((error) => {
    console.error('Error al obtener datos:', error);
  });
  const [selectedCriteria, setSelectedCriteria] = useState({
   role: '',
    industry: '',
    country: '',
    cnae: '',
  });

 const handleCriteriaChange = (criteria, value) => {
    setSelectedCriteria((prevCriteria) => ({
      ...prevCriteria,
      [criteria]: value,
    }));
  };

  const handleDownload = () => {
    // Implement logic to filter leads based on selectedCriteria
    // Generate and download the .csv file
    // Update the DownloadCount for each lead
  };*/