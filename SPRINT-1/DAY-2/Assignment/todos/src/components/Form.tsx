import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

const Table = styled.table`

border: 1px solid #ddd;
text-align: center;
border-collapse: collapse;
  width: 100%;

  &th,
  td {
    border: 1px solid #ddd;
    text-align: center;
    padding:15px
  }
`;

type Laptoptype = {
  id: number;
  model: string;
  year: string;
  os: string;
  height: number;
  width: number;
  price: number;
};

const initState = {
  model: "",
  year: "",
  os: "",
  height: 0,
  width: 0,
  price: 0,
};

export const Form = () => {
  const [formData, setFormData] = useState(initState);
  const [ldata, setLdata] = useState<Laptoptype[]>([]);

  const handleChange = (e: any) => {
    const inputName = e.target.name;
    setFormData({ ...formData, [inputName]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:8080/data", formData).then(getData);
    setFormData(initState);
  };

  const getData = () => {
    axios
      .get("http://localhost:8080/data")
      .then((response: AxiosResponse<Laptoptype[]>) => {
        const { data } = response;
        setLdata(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function sortFun(data: Laptoptype[], by: keyof Laptoptype) {
    let newArr = data.sort((a: any, b: any) => a[by] - b[by]);
    setLdata([...newArr]);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="model"
            placeholder="Enter model name"
            onChange={handleChange}
            value={formData.model}
          />{" "}
          <br /> <br />
          <input
            type="month"
            name="year"
            placeholder="Enter make year"
            onChange={handleChange}
            value={formData.year}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            name="os"
            placeholder="Enter operating system"
            onChange={handleChange}
            value={formData.os}
          />{" "}
          <br />
          <br />
          <input
            type="number"
            name="height"
            placeholder="Enter screen height"
            onChange={handleChange}
            value={formData.height}
          />{" "}
          <br />
          <br />
          <input
            type="number"
            name="width"
            placeholder="Enter screen width"
            onChange={handleChange}
            value={formData.width}
          />{" "}
          <br />
          <br />
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            onChange={handleChange}
            value={formData.price}
          />{" "}
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>

      <br />
      <br />
      <br />
      <button onClick={() => sortFun(ldata, "price")}>sort by price</button> &nbsp;
      <button onClick={() => sortFun(ldata, "height")}>sort by height</button> &nbsp;
      <button onClick={() => sortFun(ldata, "width")}>sort by width</button> &nbsp;

      <br />
      <br />
      <br />
      <div>
        <Table>
          <thead>
            <tr>
              <th>Sl.no.</th>
              <th>Model</th>
              <th>Make Year</th>
              <th>Operating System</th>
              <th>Screen Height</th>
              <th>Screen Width</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {ldata.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.model} </td>
                  <td>{item.year}</td>
                  <td>{item.os}</td>
                  <td>{item.height} inch</td>
                  <td>{item.width} inch</td>
                  <td>Rs. {item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
