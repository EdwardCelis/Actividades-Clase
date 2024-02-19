import React from 'react';
import "../estilos/Perfil.css";

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
                src={require(`../imagenes/perfil-${props.imagen}.png`)}
                alt='Foto de desarrollador' />
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>
                    <strong>{props.nombre}</strong>
                </p>
                <p className='cargo-perfil'>
                    <strong>{props.empresa}</strong>
                </p>
                <p className='texto-perfil'>"{props.perfil}" </p>
            </div>

                <button onClick={() => window.open(props.cinecolombia, '_blank')}>
                    CINE COLOMBIA
                </button>
                <button onClick={() => window.open(props.cinemark, '_blank')}>
                    CINEMARK
                </button>
                <button onClick={() => window.open(props.cinepolis, '_blank')}>
                    CINEPOLIS
                </button>

            </div>
    );
}
export default Perfil;
