//  contiene los inputs
import "react";
import "../styles/form.css"
const Form = () => {
  return (
    <>
      <h2>Información</h2>
      <h3>Cuéntanos sobre el proyecto</h3>
      <form
        className="form"
        // onSubmit={handleSubmit}
      >
        <fieldset className="group-project">
          <legend className="sr-only">Detalles del proyecto</legend>
          <label htmlFor="projectName">
            <input
              type="text"
              name="projectName"
              id="projectName"
              // value={projectName}
              // onChange={handleChangeName}
              placeholder="Nombre del proyecto"
            />
          </label>

          <label htmlFor="slogan">
            <input
              type="text"
              name="slogan"
              id="slogan"
              // value={slogan}
              // onChange={handleChangeSlogan}
              placeholder="Slogan"
            />
          </label>
          <label htmlFor="repository">
            <input
              type="text"
              name="repository"
              id="repository"
              // value={repository}
              // onChange={handleChangeRepository}
              placeholder="Repositorio"
            />
          </label>

          <label htmlFor="demo">
            <input
              type="text"
              name="demo"
              id="demo"
              // value={demo}
              // onChange={handleChangeDemo}
              placeholder="Demo"
            />
          </label>
          <label htmlFor="technologies">
            <input
              type="text"
              name="technologies"
              id="technologies"
              // value={technologies}
              // onChange={handleChangeTechnologies}
              placeholder="Tecnologías"
            />
          </label>
          <label htmlFor="description">
            <textarea
              name="description"
              id="description"
              // value={description}
              // onChange={handleChangeDescription}
              placeholder="Descripción"
            />
          </label>
        </fieldset>

        <h3>Cuéntanos sobre la autora</h3>

        <fieldset className="group-author">
          <legend className="sr-only">Datos de la autora</legend>
          <label htmlFor="authorName">
            <input
              type="text"
              name="authorName"
              id="authorName"
              // value={authorName}
              // onChange={handleChangeAuthorName}
              placeholder="Nombre"
            />
          </label>
          <label htmlFor="workName">
            <input
              type="text"
              name="workName"
              id="workName"
              // value={workName}
              // onChange={handleChangeWork}
              placeholder="Trabajo"
            />
          </label>
        </fieldset>
      </form>
    </>
  );
};
export default Form;
