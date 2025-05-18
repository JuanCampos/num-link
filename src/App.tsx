import data from "./assets/data.json"

const CATEGORY_KEY = "CATEGORY"

const MESSAGE = `Hola buenas, soy Juan estudiante de desarrollo web. Para juntar experiencia en el campo estoy ofreciendo el servicio de crear páginas web para personas que tengan locales, negocios o brinden servicios y vi que en google maps tiene un ${CATEGORY_KEY}, por eso me comunico con usted. Espero su respuesta, bonita tarde`

type Info = {
  phone: number | string;
  category: string;
  status: string;
}
function App() {

  function getLink(info: Info) {
    
    const newMessage = MESSAGE.replace(CATEGORY_KEY, info.category)

    if (typeof info.phone === "string") {
      return `https://www.instagram.com/${info.phone}`
    }

    const encodedMessage = encodeURI(newMessage)

    return `https://wa.me/${info.phone}?text=${encodedMessage}`
  }

  return (
    <div>
      <h1 className='text-2xl'>Hola fer</h1>
      {data.map(info => {
        return (
          <div key={info.phone} className='flex'>
            <span className='flex w-36 bg-amber-400'>{info.phone} </span>
            <span className='flex w-36 bg-amber-600'>{info.category} </span>
            <span className=' flex w-36 bg-green-400'>{info.status} </span>
            <a href={getLink(info)} target='_blank'>Enviar</a>
          </div>
        )
      })}
    </div>
  )
}

export default App
