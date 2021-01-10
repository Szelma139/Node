import React from 'react'
import { RiIncreaseDecreaseFill } from 'react-icons/ri';

import styled from 'styled-components';
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

const PaginationSelector = styled.a`

border: 5px solid blue;
font-size: 22px;
padding: 5px;
margin-left: 5px;


`;

export const Pagination = () => {

    const increase=()=> {
setPostsPerPage(postsPerPage+1)
setMaxPages( Math.floor(content.length/postsPerPage));

setCurrentPosts(content.slice(indexOfFirstPost,indexOfLastPost))

    }

    const decrease=()=> {
setPostsPerPage(postsPerPage-1)
setMaxPages( Math.floor(content.length/postsPerPage));

setCurrentPosts(content.slice(indexOfFirstPost,indexOfLastPost))

    }



    const [content, setContent] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [postsPerPage, setPostsPerPage] = React.useState(5);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [maxPages, setMaxPages ] = React.useState(0);
    var indexOfLastPost = currentPage * postsPerPage;
    var indexOfFirstPost = indexOfLastPost - postsPerPage;
    const [currentPosts, setCurrentPosts] = React.useState([]);

    React.useEffect(() => {
      fetchData().then((response) => {
        response.json().then((json) => {
          //console.log(json);
          setContent(json);
          setCurrentPosts(content.slice(indexOfFirstPost,indexOfLastPost))
        setMaxPages( Math.floor(content.length/postsPerPage));
        });
      });
    

      setLoading(false);
    }, []);
    


    if (loading) { return <h2>Loading</h2>}
    return (

<>   
        <StyledButton onClick={()=>increase()}>Increase {postsPerPage}</StyledButton>
        <StyledButton onClick={()=>decrease()}>Decrease {postsPerPage}</StyledButton>

        {
        Array.from(Array(maxPages), (e,i)=> {
            return  <PaginationSelector>{i}</PaginationSelector>
        })
            
    
    }
    
    {console.log(`Loading ${loading}`) }
    {console.log(`content ${content.length}`) }

        {console.log(`Posts per page ${postsPerPage}`) }
        {console.log(`CurrentPage per page ${currentPage}`) }
        {console.log(`first ${indexOfFirstPost}`) }
        {console.log(`last ${indexOfLastPost}`) }

        {console.log(`Max pages ${maxPages}`) }
  
        {console.log(`Posts per page ${postsPerPage}`) }
        {console.log(`Current posts ${currentPosts}`) }
        {console.log(`Loading ${loading}`) }
            {console.log(`posts ${content}`)}
  
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
              { currentPosts.map((element, index) => (
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
  



