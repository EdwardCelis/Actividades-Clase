import Developers from '../Developers';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App/App.css"


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    autoplaySpeed: 200,
    autoplay: true,
    slideToShow: 3,
    slideToScroll: 1
  }

  return (
    <>

   <Developers/>

    <div className='w-3/4 mx-auto my-auto'>
      <div className='mt-1.25'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=''>
            <div className='h-[270px] text-black rounded-xl'>
              <img src={d.img} alt='' className='h-55 w-44 rounded-full my-auto mx-auto' />
            </div><div className='flex flex-col items-center justify-center gap-5 p-5'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-center'>{d.name}</p>
              <button className='bg-blue-400 text-white text-lg px-12 py-6'>TRAILER</button>
              </div>
              </div>
          )          
          )}
          </Slider>
      </div>
    </div>
    
    </>
  )
}

const data = [
  {
    name: `Bee`,
    img: `../src/assets/Fotos/perfil-bee.png`,
    review: `Pelicula Beekeper`
  },
  {
    name: `Poor Things`,
    img: `../src/assets/Fotos/perfil-poor.png`,
    review: `Pelicula Poor Things`
  },
  {
    name: `Red`,
    img: `../src/assets/Fotos/perfil-red.png`,
    review: `Pelicula Red`
  },
];

export default App