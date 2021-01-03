import React from "react";

export const Fetch = () => {
  const [content, setContent] = React.useState([]);
  React.useEffect(() => {
    fetchData().then((response) => {
      response.json().then((json) => {
        console.log(json);
        setContent(json);
      });
    });
    // setContent(data)});
  }, []);
  return (
    <div>
      {content.map((element, index) => (
        <div key={index}>
        <p>{element.name}</p>
        <p>{element.email}</p>
        <p>{element.password}</p>
        </div>
      ))}
    </div>
  );
};

async function fetchData() {
  const data = await fetch("/api/selectUsers", {
    method: "GET",
    headers: new Headers({ "content-type": "application/json" }),
    mode: "cors",
  }).catch((error) => console.log(error));
  return data;
}
