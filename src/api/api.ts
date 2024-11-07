const config = {
  baseUrl: "https://jsonplaceholder.typicode.com",
};

export function getInformationTodos() {
  return fetch(`${config.baseUrl}/todos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occurred!");
      }
      return response.json();
    }).then((data) => {return data})
    .catch((err) => console.log(err));
}

export function getInformationUsers() {
  return fetch(`${config.baseUrl}/users`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occurred!");
      }
      return response.json();
    }).then((data) => {return data})
    .catch((err) => console.log(err));
}

