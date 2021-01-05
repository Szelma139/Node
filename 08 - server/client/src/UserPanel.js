import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { AiOutlineFileImage as AvatarImage } from "react-icons/ai";
import { IoMdRemoveCircle as RemoveImage } from "react-icons/io";
import {
  RiAccountBoxFill as AccountIcon,
  RiShoppingBag2Fill as WorkIcon,
  RiContactsFill as ContactsIcons,
} from "react-icons/ri";
import { AiFillProject as ResumeIcon } from "react-icons/ai";
import { SiBloglovin as BlogIcon } from "react-icons/si";
import { ImDownload2 as DownloadIcon } from "react-icons/im";
import { BiArrowToRight as ArrowRightIcon } from "react-icons/bi";
import {
  RiLinkedinFill as LinkedinIcon,
  RiFacebookFill as FacebookIcon,
  RiTwitterFill as TwitterIcon,
} from "react-icons/ri";

//about
//resume
//works
//blog
//contact

const StyledButton = styled.button`
  padding: 1rem 2rem 1rem 2rem;
  background: skyblue;
  border: none;
  border-radius: 10px;
  margin-right: 5px;

  i {
    padding: 5px;
    text-align: center;

    > * {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  background: #aaffa9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #aaffa9,
    #11ffbd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #aaffa9,
    #11ffbd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const LeftNavbar = styled.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 100px;
  z-index: 5;
  border: 1px solid white;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  i {
    width: 100%;
  }
  li {
    padding: 10px 5px 10px 5px;
    text-align: center;
    list-style-type: none;
    margin: 5px 10px;
  }

  li > * {
    width: 100%;
  }

  li:hover {
    color: green;
    background-color: lightgray;
    border-radius: 5px;
  }
`;

const MainContainer = styled.div`
  width: 600px;
  position: absolute;
  left: 13%;
  top: 10%;
  border: 1px solid white;
  background-color: white;
  border-radius: 15px;
  z-index: 5;

  img {
    border-radius: 50%;
    width: 35%;
    position: absolute;
    top: 41%;
    left: 31%;
    border: 5px solid white;
  }
`;

const TopContainer = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2020/12/09/00/08/human-5815851_960_720.jpg");
  background-repeat: no-repeat;
  background-position: 0 -40px;
  border-radius: 15px;

  background-size: auto;
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 66%,
    81% 74%,
    50% 83%,
    22% 76%,
    0% 70%,
    0% 35%,
    0 0
  );
  max-width: 100%;
  height: 40vh;
`;

const ImageCenter = styled.div``;

const BottomContainer = styled.div`
  h2 {
    margin-top: 10%;
  }

  a {
    color: black;
  }

  p {
    color: green;
  }

  button {
    width: 50%;
    height: 60px;
    border: none;
    font-weight: 900px;
  }

  button > * {
    margin-left: 5px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 1.5rem;

  > * {
    flex-basis: 100%;
  }
`;

const AboutContainer = styled.div`
  width: 600px;
  position: absolute;
  left: 46%;
  top: 15%;
  border: 2px solid white;
  background-color: white;
  border-radius: 3px;


`;


const ServicesContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around; 

`;

const Service = styled.div`

`;

const UserPanel = () => {
  const [userData, setuserData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  const { name } = useParams();

  React.useEffect(() => {
    fetchMyData(`/api/selectUsers/id/${id}`).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setuserData(json);
      });
    });
    return function cleanup() {
      setLoading(false);
    };
  }, [id]);

  return (
    <Container>
      <LeftNavbar>
        <li>
          <AccountIcon />
          ACCOUNT
        </li>
        <li>
          <ResumeIcon />
          RESUME
        </li>
        <li>
          <WorkIcon />
          WORKS
        </li>
        <li>
          <BlogIcon />
          BLOG
        </li>
        <li>
          <ContactsIcons />
          CONTACT
        </li>
      </LeftNavbar>
      <MainContainer>
        <TopContainer></TopContainer>
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <BottomContainer>
          <h2>Ryan Adlard</h2>
          <p>Web Developer</p>
          <IconsContainer>
            {" "}
            <a href="http://linkedin.com">
              <LinkedinIcon />
            </a>
            <a href="http://facebook.com">
              <FacebookIcon />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon />
            </a>
          </IconsContainer>
          <button>
            DOWNLOAD CV <DownloadIcon />
          </button>
          <button>
            CONTACT ME <ArrowRightIcon />
          </button>
        </BottomContainer>
      </MainContainer>
      <AboutContainer>
        <h2>About me</h2>
        <p>
          I am John Doe of today's technology, designer from USA, California. I
          have rich experience in a web site design, building and customizing
          rich user experience. Also quite good at wordpress. Love to be unique,
          love to live unique.
        </p>

        <h2>My Services</h2>
        <ServicesContainer>
        <Service>
          <i>
            <DownloadIcon />
          </i>
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Modern and mobile-reay website that help you reach all of your
            marketing.
          </p>
          </Service>
          <Service>
          <i>
            <DownloadIcon />
          </i>{" "}
          <h2>WEB DEVELOPMENT</h2>
          <p>
            Modern and mobile-reay website that help you reach all of your
            marketing.
          </p>
           </Service>
          </ServicesContainer>
      </AboutContainer>
      {/* User <b>{name} </b> panel
      <p>Id param : {id}</p>
      {
        <>
          {" "}
          <p>{userData?.[0]?.username}</p>
          <p>{userData?.[0]?.password}</p>
        </>
      }
      <StyledButton>
        <i>
          <RemoveImage />
        </i>
        Usuń
      </StyledButton>
      <StyledButton>
        <i>
          <AvatarImage />
        </i>
        Wgraj avatar
      </StyledButton> */}
    </Container>
  );
};

export default UserPanel;

async function fetchMyData(str) {
  const data = await fetch(str, {
    method: "GET",
    headers: new Headers({ "content-type": "application/json" }),
    mode: "cors",
  }).catch((error) => console.log(error));
  return data;
}
