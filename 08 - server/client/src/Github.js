import React from "react";

export const Github = () => {
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("Accept", "application/json");
  header.append("Origin", "http://localhost:3000");

  React.useEffect(() => {
    fetch("https://github.com/login/oauth/authorize", {
      mode: "cors",
      method: "GET",
      header,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log("Error is " + error));
  }, [header]);

  return <div>github</div>;
};
