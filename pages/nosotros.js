import Image from 'next/image'
import Layout from '../components/Layout'
import Styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    
      <Layout pagina='Nosotros'>

        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>

            <div className={Styles.contenido}>

                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />

                <div>
                    <p>Cras eget consequat lorem. Ut pharetra feugiat risus sit amet tincidunt. Mauris quis ultricies risus. Nulla dapibus purus id interdum vulputate. Nunc consequat ultrices mi in semper. Aliquam iaculis porttitor odio, eget tincidunt purus mattis sollicitudin. Pellentesque elit ligula, hendrerit at ullamcorper tristique, interdum nec nisl. Suspendisse varius iaculis quam sit amet posuere. Donec congue leo non augue tempor, ut facilisis arcu faucibus. Morbi pellentesque dui id lorem viverra dignissim.</p>

                    <p>Sed in arcu id felis auctor tempus at eu velit. Phasellus ut ante risus. Etiam sit amet orci quis enim facilisis fermentum. Nulla facilisi. In consectetur nunc id posuere pretium. Praesent a suscipit metus, eget imperdiet elit. Donec a mi orci. Praesent pharetra felis in pellentesque scelerisque.</p>
                
                </div>
              
            </div>


        </main>

      </Layout>

        
  ) 
}

export default Nosotros;
