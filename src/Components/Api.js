import { useEffect, useState } from "react";
import ApiData from "./ApiData";
import "./Api.css";

const Api = () => {

  const [apiData, setApiData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  const ApiCalling = async () => {
    const responce = await fetch("https://api.pujakaitem.com/api/products");
    const data = await responce.json();
    setApiData(data);
  }

  useEffect(() => {
    ApiCalling();
  }, [])

  useEffect(() => {
    let timeoutId = setTimeout(() => { 
      setValue(inputValue);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [inputValue])

  const filteredItems = apiData.filter((elements) => elements.company.includes(value))

  return (
    <>
      <h3>Api calling</h3>
      <input type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <div className="api_div">
        {
          filteredItems.map(Element => <ApiData key={Element.id} elements = {Element} /> )
        }
      </div>
    </>
  )
};
export default Api;