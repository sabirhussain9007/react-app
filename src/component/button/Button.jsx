import React, { useState, useEffect } from 'react';

const data = [{
  "name": "John",
  "age": 21,
  "zip": 94539
}, {
  "name": "David",
  "age": 31,
  "zip": 94329
}];

const Button = () => {
  const [sortState, setSortState] = useState('asc');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    updateTableView();
  }, [filteredData]);

  const constructTableBody = (data) => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.zip}</td>
      </tr>
    ));
  }

  const updateTableView = () => {
    return (
      <tbody>
        {constructTableBody(filteredData)}
      </tbody>
    );
  }

  const sort = (event) => {
    const sortCol = event.target.getAttribute("data-col");

    switch (sortCol) {
      case 'age-col':
        const sortedData = [...filteredData];
        sortedData.sort((a, b) => {
          if (sortState === 'asc') {
            setSortState('desc');
            event.target.classList.remove("up");
            event.target.classList.add("down");
            return b.age - a.age;
          } else {
            setSortState('asc');
            event.target.classList.remove("down");
            event.target.classList.add("up");
            return a.age - b.age;
          }
        });
        setFilteredData(sortedData);
        break;
      case 'zip-col':
        const sortedDataByZip = [...filteredData];
        sortedDataByZip.sort((a, b) => b.zip - a.zip);
        setFilteredData(sortedDataByZip);
        break;
      default:
        break;
    }
  }

  const searchData = (event) => {
    let val = event.target.value;
    const filteredArray = data.filter((item) => item.name.includes(val));
    setFilteredData(filteredArray);
  }

  return (
    <div>
      <input
        id="table-search-input"
        type="text"
        onChange={(e) => searchData(e)}
      />
      <table>
        <thead>
          <tr>
            <th className="sortable" data-col="name-col">Name</th>
            <th className="sortable" data-col="age-col" onClick={(e) => sort(e)}>Age</th>
            <th className="sortable" data-col="zip-col" onClick={(e) => sort(e)}>Zip</th>
          </tr>
        </thead>
        {updateTableView()}
      </table>
    </div>
  );
}

export default Button;