const api_url = 'http://localhost:3001';

const headers = new Headers();
headers.append("Content-type", "application/json");

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