import React from "react";
import { useHistory } from "react-router-dom";
import { createProject } from "../../utils/api";

function ProjectCreate() {
  
  const history = useHistory();
  const [currentProject, setCurrentProject] = React.useState({
    "project_name": "",
    "project_priority": "",
    "supplies_needed": [],
    "time_needed": "",
    "room_in_house": "",
  });

  const handleChange = ({ target }) => {
    setCurrentProject({
      ...currentProject,
      [target.name]: target.value,
    })
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(currentProject);
    await createProject({
      ...currentProject,
      supplies_needed: currentProject.supplies_needed.split(',')
    });
    history.push('/')
  }

  return (
    <div className="container-fluid">
      <div className="text-center mb-4">
        <h1 className="display-4 p-3"> Create a New Home Project </h1>
      </div>

      <div className="col-auto offset-3">
        <form className="form-group text-center mb-5" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="project_name"> Name of Project </label>
              <input
                type="text"
                className="form-control"
                id="project_name"
                name="project_name"
                required={true}
                onChange={handleChange}
              />
              
            </div>

            <div className="col-4 form-group">
              <label className="form-label" htmlFor="project_priority"> Priority </label>
              <input
                type="text"
                className="form-control"
                id="project_priority"
                name="project_priority"
                required={true}
                onChange={handleChange}
              />
              
            </div>
          </div>

          <div className="row">
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="supplies_needed"> Supplies Needed </label>
              <textarea
                className="form-control"
                id="supplies_needed"
                name="supplies_needed"
                required={true}
                onChange={handleChange}
              />
              
            </div>

            <div className="col-4 form-group">
              <label className="form-label" htmlFor="time_needed"> Time Needed </label>
              <input
                type="text"
                className="form-control"
                id="time_needed"
                name="time_needed"
                required={true}
                onChange={handleChange}
              />
              
            </div>
          </div>

          <div className="row">
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="room_in_house"> Room in House </label>
              <select
                className="form-control"
                id="room_in_house"
                name="room_in_house"
                required={true}
                onChange={handleChange}
                list="datalistOptions"
              >
                <option value=""> Select a Room </option>
                <option value="Master"> Master </option>
                <option value="LivingRoom"> Living Room </option>
                <option value="Kitchen"> Kitchen </option>
                <option value="Office"> Office </option>
                <option value="GuestRoom"> Guest Room </option>
                <option value="Garage"> Garage </option>
                <option value="Backyard"> Backyard </option>
                <option value="Basement"> Basement </option>
              </select>
            </div>
          </div>
        </form>
        <div className="col-auto offset-3">
          <button type="button" className="btn btn-danger mr-2" onClick={() => history.goBack()}> Cancel </button>
          <button type="submit" className="btn btn-success"> Save Project </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCreate;
