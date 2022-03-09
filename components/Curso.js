import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {
  const { titulo, contenido, imagen } = curso

  return (

    <section > 
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{contenido}</p>

                <a className={styles.enlace} href="#">Más Información</a>
            </div>
        </div>

        <style jsx>{`
            section {
                padding: 10rem 0;
                margin-top: 10rem;
                background-color: red;
                background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb(0 0 0 /.7)), url("/img/cursos_bg.jpg");              
                background-size: cover;
                background-position: 50%;
                z-index: 0;
            }        
        `}</style>   
              
        
    </section>
  )
}

export default Curso
