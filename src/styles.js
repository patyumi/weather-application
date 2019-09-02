import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;

    width: 100%;
    height: 100%;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  ${props =>
    props.estado ? "width: 30%; right: 65%;" : "width: 40%; right: 55%;"};

  height: 100%;

  background: transparent;

  -webkit-transition: 0.5s ease-in;
  -moz-transition: 0.5s ease-in;
  -o-transition: 0.5s ease-in;
  transition: 0.5s ease-in;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    right: 0;

    position: static;

    ${props => (props.estado ? "display: none" : "z-index: 3")};
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  align-content: center;
  justify-content: center;

  width: 100%;
  height: 55%;

  color: #fff;

  background: #000;
  box-shadow: 7px 0px 6px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }

  section:first-child {
    display: flex;
    flex-direction: column;

    position: relative;

    width: 100%;

    align-content: center;
    justify-content: center;
  }

  section:last-child {
    background: #000;
    color: #fff;
    border-radius: 0 45px 45px 0;

    position: absolute;
    left: 100%;
    top: 22%;

    width: 5%;
    height: 10%;

    cursor: pointer;

    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
      display: none;

      left: 0;
      top: 0;
    }
  }

  section:last-child img {
    width: 50%;
    height: 50%;

    margin: 50% 10% 50% 0;
  }

  section:last-child:hover {
    opacity: 0.9;
  }

  header {
    display: flex;
    flex-direction: row;

    align-items: flex-end;
    justify-content: center;

    width: 100%;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;

      align-items: center;
    }
  }

  header img {
    margin-right: 25px;

    @media only screen and (max-width: 1000px) {
      margin-right: 0;
    }
  }

  header h2 {
    font-size: 38px;
    font-weight: lighter;

    @media only screen and (max-width: 1200px) {
      width: 100%;
      text-align: center;
    }
  }

  span {
    font-size: 12px;

    width: 100%;

    margin-top: 5px;
    margin-left: 35%;

    @media only screen and (max-width: 1000px) {
      text-align: center;
      margin: 5px 0 0 0;
    }
  }

  form {
    border: transparent;
    border-radius: 60px;
    background: #fff;

    display: flex;
    flex-direction: row;

    width: 65%;
    height: 50px;

    margin-left: 17.5%;
    margin-top: 100px;
    padding: 0 5px;
  }

  form input {
    border: none;
    border-radius: 60px;

    margin: 0 20px;
    width: 80%;

    font-size: 22px;
    color: #707070;

    @media only screen and (max-width: 1000px) {
      font-size: 16px;
    }
  }

  ::-webkit-input-placeholder {
    color: #707070;
  }

  form button {
    background: none;
    border: none;
    width: 10%;
    cursor: pointer;

    margin: 8px;

    @media only screen and (max-width: 1000px) {
      margin-right: 20px;
    }
  }

  form button img {
    width: 48px;
    height: 28px;

    margin: 0;
    padding: 0;
  }

  .loading {
    width: 50px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: ${props => (props.estado ? "column" : "row")};

  justify-content: ${props => (props.estado ? "center" : "space-between")};
  align-items: center;

  width: 100%;
  height: 45%;

  margin-top: 10px;
  padding: 40px;

  background: #f25050;
  box-shadow: 7px 0px 6px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 1200px) {
    padding: 10px;
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 5px;
  }

  button {
    background: none;
    border: none;
    color: #fff;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    width: 100%;
    margin-top: -160px;

    cursor: pointer;
  }

  button img {
    width: 60px;
    height: 60px;
    color: #fff;
    margin-right: 15px;
  }

  button:hover {
    opacity: 0.8;
  }

  img {
    width: 40%;
    height: 80%;
  }

  table {
    color: #fff;

    width: 60%;

    font-size: 18px;

    @media only screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }

  td {
    padding: 3px 20px;
  }

  td a {
    color: #fff;
    text-decoration: none;
  }

  td a:visited {
    color: #fff;
  }

  tr:nth-child(3) td {
    padding-bottom: 80px;

    @media only screen and (max-width: 1000px) {
      padding-bottom: 40px;
    }
  }

  td:first-child {
    font-weight: bold;
    text-align: right;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;

  width: 60%;
  height: 100%;

  left: 35%;

  background-image: linear-gradient(#d0f7fe, #6f5f85, #668075);

  @media only screen and (max-width: 1000px) {
    width: 100%;
    left: 0;

    ${props => (props.estado ? "z-index: 2" : "z-index: 1")};
  }

  .responsiveButton {
    display: none;

    @media only screen and (max-width: 1000px) {
      background: #000;
      margin: 0;
      padding: 0;
      display: flex;

      align-items: center;

      width: 100%;
      height: 30px;

      margin-bottom: 10px;
    }
  }

  .responsiveButton img {
    @media only screen and (max-width: 1000px) {
      width: 100%;
      height: 20px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 45%;

  padding: 0 30px;

  nav {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    width: 100%;

    margin-top: 30px;

    font-size: 22px;

    @media only screen and (max-width: 1000px) {
      margin: 0;
    }
  }

  nav header {
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  nav header img {
    margin-right: 20px;
    cursor: pointer;
  }

  nav header p {
    text-transform: uppercase;
  }

  h1 {
    font-size: 110px;
    font-weight: normal;

    width: 100%;

    padding-left: 50px;
  }

  section {
    display: flex;
    flex-direction: row;

    width: 100%;

    margin-top: 5px;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  flex: 0;
  align-items: center;
  width: 30%;

  margin-left: 50px;
  padding: 0;

  thead {
    display: flex;
    justify-content: center;

    width: 100%;

    font-size: 24px;

    padding-bottom: 20px;
  }

  th {
    font-weight: normal;
  }

  tbody {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  tbody tr {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 32px;

    margin: 5px 0;

    border: transparent;
    border-radius: 28px;

    background: rgba(255, 255, 255, 0.8);
  }

  tbody tr td {
    padding: 0 25px;

    font-size: 15px;

    @media only screen and (max-width: 1000px) {
      font-size: 12px;
      padding: 0 5px;
    }
  }
`;

export const Background = styled.div`
  display: flex;

  background-image: url(${props => props.background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 55%;
`;
