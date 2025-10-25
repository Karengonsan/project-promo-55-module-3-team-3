import 'react'


const Buttons = ({
  updateProjectImage,
  updateAutorImg,
 }) => {

  //  Handlers locales que llaman a las funciones del padre
  const handleProjectImage = (e) => {
    const file = e.target.files[0];
     if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      updateProjectImage(reader.result); // string base64
    };
    reader.readAsDataURL(file);
  }
  };

  const handleAuthorImage = (e) => {
    const file = e.target.files[0];
     if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      updateAutorImg(reader.result); // string base64
    };
    reader.readAsDataURL(file);
  }
  };
   

  
  return (
    <div className="">
      <div className="">
        <label className="">
          Subir imagen del proyecto
          <input type="file" accept="image/*" onChange={handleProjectImage} className="hidden" />
        </label>

        <label className="">
          Subir imagen de la autora
          <input type="file" accept="image/*" onChange={handleAuthorImage} className="hidden" />
        </label>
      </div>

    
    </div>
  );
};

export default Buttons






