// muestra los datos introducidos en el formulario

import 'react'
import PropTypes from 'prop-types'
import Avatar from '../images/avatar.webp'
import GitHubIcon from '../images/github.svg'
import DemoIcon from '../images/globe-solid.svg'
import '../styles/previewCard.css'


const PreviewCard = ({formData, authorImage}) =>{
    const {name, slogan, tecnologies, repo, demo, desc, autor, job} = formData || {};

    return (
        <>
        <div className='preview-container'>
            <div className='preview-img'>
                <div className='image'>
                    <img 
                        src={authorImage? authorImage : Avatar} 
                        alt={autor ||"Nombre del autora"}   
                        className="autor-image" 
                    />
                </div>
                <div className='autor-contact'>
                    <p>{job || "Developer"}</p>
                    <h4>{autor || "Cármen Sánchez"}</h4>
                        <div className='contact'>
                            <p>{tecnologies || "HTML |CSS| REACT"}</p>
                            <p className="contact-item">
                                <img src={GitHubIcon} alt="Repo" className="icon" />
                                {repo || "github.com/ejemplo"}
                            </p>
                            <p className="contact-item">
                                <img src={DemoIcon} alt="Demo" className="icon" />
                                {demo || "www.ejemplo.com"}
                            </p>
                        </div>    
                </div>
            </div>
            <div className='preview-data'>
                <h2>{name || "Proyecto Hadas"}</h2>
                <p>{slogan || "ProjectHadas"}</p>
                <p className='desc'>{desc || "Aquí puedes decribir brevemente tu proyecto."}</p>
            </div>             
        </div>
        </>
    )
}

export default PreviewCard

PreviewCard.propTypes = {
  name: PropTypes.string,
  slogan: PropTypes.string,
  tecnologies: PropTypes.string,
  repo: PropTypes.string,
  demo: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  autor: PropTypes.string,
  job: PropTypes.string
};





