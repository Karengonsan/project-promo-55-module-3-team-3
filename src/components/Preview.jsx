import 'react'
import PreviewProjectImage from './PreviewProjectImage.jsx'
import PreviewCard from './PreviewCard.jsx'
import PropTypes from 'prop-types'



const Preview = ({formData, projectImage, authorImage}) =>{

    return(
        
        <div>
        <PreviewProjectImage projectImage={projectImage}/>  
        <PreviewCard formData={formData} authorImage={authorImage}/>    
        </div>
        
    )
}

export default Preview

Preview.propTypes = {
    projectImage:PropTypes.string.isRequired,
    formData: PropTypes.object.isRequired,
    authorImage: PropTypes.string.isRequired
}