const API_URL = 'http://localhost:1337';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}

export async function createLogEntry(entry) {
  const apiPassword = entry.apiPassword;

  const response = await fetch(`${API_URL}/api/logs`, {
    method: 'Post',
    headers: {
      'content-type': 'application/json',
      'X-API-PASSWORD': apiPassword
    },
    body: JSON.stringify(entry)
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }

  const error = new Error(json.message);
  error.response = json;
  throw error;
}
