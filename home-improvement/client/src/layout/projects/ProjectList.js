import React from "react";
import { useHistory } from "react-router-dom";
import { deleteProject, listProjects } from "../../utils/api";

function ProjectList() {
  const history = useHistory();
  const [projects, setProjects] = React.useState([]);

  const handleDelete = (event) => {
    event.preventDefault();
    const confirmed = window.confirm(
      "Delete this project?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      console.log(event.target.value);
      deleteProject(event.target.value)
        .then(() => history.push('/projects'))
    }
  }

  function loadProjects() {
    const abortController = new AbortController();
    listProjects().then(setProjects)
    return () => abortController.abort();
  }

  React.useEffect(loadProjects, [history])

  // creating table rows (projectsList) with map 
  const projectsList = projects.map((project) => {
    return (
      <tr key={project.project_id}>
        <th scope="row">{project.project_id}</th>
        <td>{project.project_name}</td>
        <td>{project.project_priority}</td>
        <td>
          {typeof project.supplies_needed === 'object' ? project.supplies_needed.map((resource, index) => (
            <ul key={index}>
              <li>{resource}</li>
            </ul>
            ))
            : 
            <ul key={project.project_id}>
              <li>{project.supplies_needed}</li>
            </ul>
          }
        </td>
        <td>{project.time_needed}</td>
        <td>{project.room_in_house}</td>
        <td><button className="btn btn-info">Edit Project TODO</button></td>
        <td>
          <button
          className="btn btn-info"
          onClick={handleDelete}
          value={project.project_id}
          >
            Delete Project 
          </button>
        </td>
      </tr>
    )
  })

  console.log('PROJECTS LOADED --->', projects);

  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h3 className="display-4 p-3"> Projects List </h3>
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col"> ID </th>
            <th scope="col"> Name </th>
            <th scope="col"> Priority </th>
            <th scope="col"> Supplies Needed </th>
            <th scope="col"> Time Needed </th>
            <th scope="col"> Room in House </th>
            <th scope="col"> Edit Project </th>
            <th scope="col"> Delete Project </th>
          </tr>
        </thead>
        <tbody>{projectsList}</tbody>
      </table>
    </div>
  );
}

export default ProjectList;