const fetchPaintings = fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
);
fetchPaintings
  .then((response) => response.json())
  .then((paintings) => {
    const paintingTable = document.getElementById("paintings");
    paintings.forEach((painting) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const yearCell = document.createElement("td");
      const artistCell = document.createElement("td");
      nameCell.textContent = painting.name;
      yearCell.textContent = painting.year;
      artistCell.textContent = painting.artist;
      row.appendChild(nameCell);
      row.appendChild(yearCell);
      row.appendChild(artistCell);
      paintingTable.appendChild(row);
    });
  })
  .catch((error) => {
    console.error(error);
  });
