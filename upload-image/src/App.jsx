import React, { useState } from 'react';

function App() {
  const [imagen, setImagen] = useState(null);

  const handleChangeImagen = (event) => {
    const archivo = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagen(reader.result);
    };
    reader.readAsDataURL(archivo);
  };

  return (
    <div>
      <h1>Subir Imagen y Mostrar</h1>
      <input type="file" accept="image/*" onChange={handleChangeImagen} />
      {imagen && (
        <div>
          <h2>Imagen Cargada</h2>
          <img src={imagen} alt="Imagen Cargada" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
