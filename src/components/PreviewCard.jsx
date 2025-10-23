// muestra los datos introducidos en el formulario

import 'react'
import PropTypes from 'prop-types'
import Avatar from '../images/avatar.webp'
import '../styles/preview.css'


const PreviewCard = ({formData}) =>{
    const {name, slogan, tecnologies, repo, demo, image, desc, autor,job} = formData

    return (
        <>
        <div className='preview-container'>
            <div className='preview-data'>
                <h3>{name}</h3>
                <p>{slogan}</p>
                <p>{tecnologies}</p>
                <p>{repo}</p>
                <p>{demo}</p>
                <p>{desc}</p>
            </div>
            <div className='preview-img'>
                <img 
                src={image ? image : Avatar}      
                alt={autor}   
                className="autor-image" 
                />
                <p>{autor}</p>
                <p>{job}</p>
            </div>
        </div> 
        </>
    )
}



export default PreviewCard

PreviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  tecnologies: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
  autor: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};





