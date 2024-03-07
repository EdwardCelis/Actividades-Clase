import React, { useState } from 'react';
//import './components/styles.css';
import "./App.css";

function CargarImagen({ onImagenCargada }) {
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);

  const handleCargarImagen = (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const extension = archivo.name.split('.').pop();
    if (!['jpg', 'jpeg', 'png', 'gif'].includes(extension.toLowerCase())) {
      setError('El archivo debe tener una extensión de imagen válida (jpg, jpeg, png o gif)');
      return;
    }

    setError(null);
    const reader = new FileReader();

    reader.onload = () => {
      setImagen(reader.result);
      onImagenCargada(reader.result);
    };

    reader.readAsDataURL(archivo);
  };

  return (
    <div>
      <h2>Cargar Imagen</h2>
      <input type="file" accept="image/*" onChange={handleCargarImagen} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imagen && <img src={imagen} alt="Imagen Cargada" style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px',  }} />}
    </div>
  );
}

function CargarArchivoTxt({ onArchivoCargado }) {
  const [error, setError] = useState(null);

  const handleCargarArchivo = (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const extension = archivo.name.split('.').pop();
    if (extension.toLowerCase() !== 'txt') {
      setError('El archivo debe tener extensión .txt');
      return;
    }

    setError(null);
    const reader = new FileReader();

    reader.onload = () => {
      onArchivoCargado(reader.result);
    };

    reader.readAsText(archivo);
  };

  return (
    <div>
      <h2>Cargar Archivo .txt</h2>
      <input type="file" accept=".txt" onChange={handleCargarArchivo} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

function CargarArchivos({ onArchivosCargados }) {
  const [archivos, setArchivos] = useState([]);

  const handleCargarArchivos = (event) => {
    const nuevosArchivos = Array.from(event.target.files);
    setArchivos(nuevosArchivos);
    onArchivosCargados(nuevosArchivos);
  };

  return (
    <div>
      <h2>Cargar Archivos</h2>
      <input type="file" multiple onChange={handleCargarArchivos} />
      {archivos.length > 0 && (
        <div>
          <h3>Archivos Cargados</h3>
          <ul>
            {archivos.map((archivo, index) => (
              <li key={index}>{archivo.name} ({archivo.type})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  const [imagen, setImagen] = useState(null);
  const [contenidoArchivoTxt, setContenidoArchivoTxt] = useState(null);
  const [archivosCargados, setArchivosCargados] = useState([]);

  const handleImagenCargada = (urlImagen) => {
    setImagen(urlImagen);
  };

  const handleArchivoTxtCargado = (contenidoTxt) => {
    setContenidoArchivoTxt(contenidoTxt);
  };

  const handleArchivosCargados = (nuevosArchivos) => {
    setArchivosCargados(nuevosArchivos);
  };

  return (
    <div className="container">
      <h1>Subir Archivos</h1>
      <CargarImagen onImagenCargada={handleImagenCargada} />
      <CargarArchivoTxt onArchivoCargado={handleArchivoTxtCargado} />
      <CargarArchivos onArchivosCargados={handleArchivosCargados} />
      {imagen && (
        <div className="imagen-contenedor">
          <h2>Imagen Cargada</h2>
          <img src={imagen} alt="Imagen Cargada" className="imagen" />
        </div>
      )}
      {contenidoArchivoTxt && (
        <div>
          <h2>Contenido del Archivo .txt</h2>
          <pre>{contenidoArchivoTxt}</pre>
        </div>
      )}
      {archivosCargados.length > 0 && (
        <div>
          <h2>Archivos Cargados</h2>
          <ul>
            {archivosCargados.map((archivo, index) => (
              <li key={index}>{archivo.name} ({archivo.type})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
