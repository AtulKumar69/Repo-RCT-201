import React from "react";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import styled from "styled-components";

const Overflow=styled.div`

height: 220px;
width:400px;
overflow: auto ;
margin: auto;

`
const H3=styled.h3`
&:hover{ background-color: rgb(207, 200, 200);

}

`

const URL = "http://localhost:8080/data";

export const Country = () => {
  const [text, setText] = useState("");

  const { data, err, loading } = useFetch(URL, {
    per_page: 10,
    q: text || "masai-codes",
  });

  console.log(text);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  console.log(data);

  return (
    <>
      <input type="text" onChange={handleChange} />

      <Overflow >
        {loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : err ? (
          <div>Something went wrong</div>
        ) : (
          data.map((el: any) => {
            return (
              <div>
                <H3>{el.country}</H3>
              </div>
            );
          })
        )}
      </Overflow>
    </>
  );
};
