const api_url = 'http://localhost:3001';

const headers = new Headers();
headers.append("Content-type", "application/json");

// fetchJson function used for all api fetches
async function fetchJson(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
  }
}

// Projects api functions
export async function listProjects(signal) {
  const url = `${api_url}/projects`;
  return await fetchJson(url, {signal})
}

export async function createProject(currentProject, signal) {
  const url = `${api_url}/projects`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: currentProject}),
    signal,
  }
  return await fetchJson(url, options);
}

export async function deleteProject(project_id, signal) {
  const url = `${api_url}/projects/${project_id}`;
  const options = {
    method: "DELETE",
    headers,
    body: JSON.stringify({ data: {project_id} }),
    signal,
  };
  return await fetchJson(url, options);
}

// Bills api functions
export async function listBills(signal) {
  const url = `${api_url}/bills`;
  return await fetchJson(url, {signal});
}

export async function createBill(currentBill, signal) {
  const url = `${api_url}/bills`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: currentBill }),
    signal,
  }
  return await fetchJson(url, options);
}

export async function deleteBill(bill_id, signal) {
  const url = `${api_url}/bills/${bill_id}`;
  const options = {
    method: "DELETE",
    headers,
    body: JSON.stringify({ data: {bill_id} }),
    signal,
  }
  return await fetchJson(url, options);
}