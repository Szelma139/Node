import React from "react";
import styled from "styled-components";
import history from './history';

const TableContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

const StyledTr = styled.tr`
  background-color: #009879;
  color: #ffffff;



  td,
  th {
    padding: 12px 25px;
    text-align: center;


  }
`;

const StyledButton = styled.button`
  padding: 1rem 2rem 1rem 2rem;
  border: none;
  background-color: #6c7ae0;
  color: white;
  margin: auto;
  font-size: 1.2rem;

  :hover {
    border-radius: 5px;
    background-color: green;
    border: none;
    text-decoration: underline;
  }
`;

const StyledTable = styled.table`
  margin: 25px 0;
  font-size: 1.5em;
  font-family: sans-serif;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #36304a;
    color: white;
    padding: 15px;
  }
  thead tr th:nth-child(0) {
    border-top-left-radius: 12px;
    padding: 12px;
  }
  thead tr th:last-child {
    border-top-right-radius: 12px;
    padding: 12px;
  }

  ${StyledTr} {
    background-color: white;
    color: gray;
  }

  ${StyledTr}:nth-of-type(even) {
    background-color: #f8f6ff;
    color: gray;
  }
`;

export const Fetch = () => {

  const [content, setContent] = React.useState([]);

  React.useEffect(() => {
    fetchData().then((response) => {
      response.json().then((json) => {
        //console.log(json);
        setContent(json);
      });
    });
    // setContent(data)});
  }, []);
  return (
  
    <>


      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Index</th>
              <th>System.ID</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Password</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {content.map((element, index) => (
              <StyledTr key={index}>
                <td>{index}</td>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.password}</td>
                <td>
                  {/* {console.log(`/user/${element.name}/${element.id}`)} */}
                  <StyledButton
                    onClick={() =>
                      history.push(`/user/${element.name}/${element.id}`)
                    }
                  >
                    Edytuj
                  </StyledButton>
                </td>

                 

              </StyledTr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      

      <StyledButton onClick={() => fetchData()}>Refresh</StyledButton>
    </>
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

