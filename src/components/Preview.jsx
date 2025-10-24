import 'react'
import PreviewImage from './PreviewImage.jsx'
import PreviewCard from './PreviewCard.jsx'




const Preview = ({formData}) =>{

    return(
        
        <div>
        <PreviewImage/>  
        <PreviewCard formData={formData}/>    
        </div>
        
    )
}

export default Preview