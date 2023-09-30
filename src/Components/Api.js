import { useEffect, useState } from "react";
import ApiData from "./ApiData";
import "./Api.css";

const Api = () => {

  const [apiData, setApiData] = useState([]);

  const ApiCalling = async () => {
    const responce = await fetch("https://api.pujakaitem.com/api/products");
    const data = await responce.json();
    setApiData(data);
  }

  useEffect(() => {
    ApiCalling();
  }, [])

  return (
    <>
      <h3>Api calling</h3>
      <div className="api_div">
        {
          apiData.map(Element => <ApiData key={Element.id} elements = {Element} /> )
        }
      </div>
    </>
  )
};
export default Api;