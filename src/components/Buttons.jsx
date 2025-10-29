import "react";
import '../styles/buttons.css'

const Buttons = ({ updateProjectImage, updateAutorImg }) => {

  const handleProjectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProjectImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAuthorImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateAutorImg(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <div className="">
        <label htmlFor="project-upload" className="custom-button">
          Subir imagen del proyecto
          <input
		  	id="project-upload"
            type="file"
            accept="image/*"
            onChange={handleProjectImage}
            className="hidden"
          />
        </label>

        <label htmlFor="author-upload" className="custom-button">
          Subir imagen de la autora
          <input
		  	id="author-upload"
            type="file"
            accept="image/*"
            onChange={handleAuthorImage}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default Buttons;
