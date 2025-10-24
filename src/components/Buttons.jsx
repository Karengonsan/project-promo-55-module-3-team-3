import 'react'
import React, { useState } from "react";

const Buttons = () => {
  const [projectImage, setProjectImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);

  const handleProjectImage = (e) => {
    const file = e.target.files[0];
    if (file) setProjectImage(URL.createObjectURL(file));
  };

  const handleAuthorImage = (e) => {
    const file = e.target.files[0];
    if (file) setAuthorImage(URL.createObjectURL(file));
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

      <div className="flex gap-6">
        {projectImage && (
          <div>
            <p>Imagen del proyecto:</p>
            <img src={projectImage} alt="Proyecto" className="" />
          </div>
        )}
        {authorImage && (
          <div>
            <p>Imagen de la autora:</p>
            <img src={authorImage} alt="Autora" className="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Buttons






