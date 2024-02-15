import React, { useEffect, useState } from "react";
import "./style.css";

function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");

  useEffect(() => {
    fetchDataForCountry("all"); // Fetch data for all countries initially
  }, []);

  const fetchDataForCountry = async (countryName) => {
    try {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`);
      const data = await response.json();
      setCountry(data.country);
      setCases(data.cases);
      setRecovered(data.recovered);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedCountry = country.trim(); // Trim country name
    if (trimmedCountry) {
      await fetchDataForCountry(trimmedCountry); // Fetch data based on user input
    }
  };

  return (
    <div className="covidData">
      <h1>COVID-19 Tracker App</h1>
      <div className="covidData__input">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSearch}
            placeholder="Enter Country Name"
          />
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="covidData__country__info">
        <p>Country Name: {country}</p>
        <p>Cases: {cases}</p>
        <p>Recovered: {recovered}</p>
      </div>
    </div>
  );
}

export default CovidData;
