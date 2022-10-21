const submitButton = document.getElementById('submit');


submitButton.addEventListener('click', function() {
  const formData = new FormData(document.getElementById('form'));
  const data = Object.fromEntries(formData);
  const dataDiv = document.getElementById('data');
  dataDiv.style.display = 'block';
  const dataTable = document.getElementById('dataTable');
  dataTable.innerHTML = '';
  const row = document.createElement('tr');
  const keyCellHeader = document.createElement('th');
  keyCellHeader.innerHTML = 'Key';
  row.appendChild(keyCellHeader);
  const valueCellHeader = document.createElement('th');
  valueCellHeader.innerHTML = 'Value';
  row.appendChild(valueCellHeader);
  dataTable.appendChild(row);
  for (const [key, value] of Object.entries(data)) {
    const row = document.createElement('tr');
    const keyCell = document.createElement('td');
    keyCell.innerHTML = key;
    const valueCell = document.createElement('td');
    valueCell.innerHTML = value;
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    dataTable.appendChild(row);
  }
});