import 'react'
import ImageProjectDefault from '../images/PreviewImage.jpg'
import '../styles/previewProjectImage.css'


const PreviewProjectImage = ({projectImage}) =>{

    return(
        <div className='project-image-container'>
            <img className='project-image'
            src={projectImage ? projectImage : ImageProjectDefault }
            alt='Vista previa del proyecto' />
        </div>
        )
}

export default PreviewProjectImage

