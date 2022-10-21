const data = {
  name: "Matteo",
  countries: [
    {
      name: "Belgium",
      year: 2001,
    },
    {
      name: "France",
      year: 2002,
    },
    {
      name: "Italy",
      year: 2003,
    },
  ],
};

const postData = fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
