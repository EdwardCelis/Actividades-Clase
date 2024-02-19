//import logo from '../src/logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Peliculas En Cartelera</h1>
      <Perfil 
        nombre='Sentencia De Muerte'    
        imagen='bee'
        empresa='BEEKEEPER'
        perfil='Los “Beekeepers” son un programa especial fuera de toda cadena de mando. Un “Beekeeper” trabaja sin piedad durante las circunstancias más extremas de emergencia nacional.'
        cinecolombia='https://www.cinecolombia.com/bogota/peliculas/the-beekeeper'
        cinemark='https://www.cinemark.com.co/garra-de-hierro'
        cinepolis='https://cinepolis.com.co/pelicula/aquaman-y-el-reino-perdido'
      />

      <Perfil 
        nombre='Pobres Criaturas'
        imagen='poor'
        empresa='POOR THINGS'
        perfil='La increíble historia sobre la fantástica evolución de Bella Baxter, una joven devuelta a la vida por el brillante y poco ortodoxo científico el doctor Godwin Baxter.'
        cinecolombia='https://www.cinecolombia.com/bogota/peliculas/poor-things'
        cinemark='https://www.cinemark.com.co/cartelera/bogota/pobres-criaturas'
        cinepolis='https://cinepolis.com.co/pelicula/madame-web'
      />

      <Perfil 
        nombre='Crecer Es Bestial'
        imagen='red'
        empresa='RED'
        perfil='Mei Lee, una niña de 13 años un poco rara pero segura de sí misma, que se debate entre seguir siendo la hija obediente que su madre quiere que sea y el caos de la adolescencia.'
        cinecolombia='https://www.cinecolombia.com/bogota/peliculas/turning-red'
        cinemark='https://www.cinemark.com.co/cartelera/bogota/patos'
        cinepolis='https://cinepolis.com.co/pelicula/patos'
      />

     </div>
    </div>
  );
}

export default App;
