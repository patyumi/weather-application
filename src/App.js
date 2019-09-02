import React, { useState, useEffect } from "react";

import GlobalStyle from "./styles/global";

import useGet from "./utils/rest";

import {
  Container,
  SideMenu,
  Menu,
  Card,
  Content,
  Main,
  Table,
  Background
} from "./styles";

import filtro from "./assets/filter.svg";
import cardImg from "./assets/card-img.svg";
import search from "./assets/search.svg";
import logo from "./assets/logo.svg";
import background from "./assets/nature_fun.svg";
import rightArrow from "./assets/rightAr.svg";
import leftArrow from "./assets/leftAr.svg";
import downArrow from "./assets/downAr.svg";
import loadingGif from "./assets/loading.svg";

const App = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const [filter, setFilter] = useState(false);

  const [cidade, setCidade] = useState("");

  const [data, getWeather] = useGet();

  useEffect(() => {
    if (Object.keys(data.erro).length > 0) {
      setOpenSideMenu(false);
    }
  }, [data]);

  const onClick = async () => {
    if (!cidade) {
      alert("Digite uma cidade para pesquisar.");
    } else {
      await getWeather(cidade);
      setOpenSideMenu(true);
    }
  };

  const onClickReset = () => {
    setOpenSideMenu(false);
    setCidade("");
  };

  const focoTela = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <>
      <Container>
        <Content>
          {openSideMenu && (
            <section className="responsiveButton" onClick={focoTela}>
              <img src={downArrow} alt="Abrir aba" />
            </section>
          )}
          <Main>
            <nav>
              <header>
                <img
                  src={filtro}
                  alt="filtro"
                  title={
                    filter
                      ? "Fechar detalhes do clima"
                      : "Visualizar detalhes do clima"
                  }
                  onClick={() => setFilter(!filter)}
                ></img>

                {!data.loading && <p>{data.data.name}</p>}
              </header>
              <span>
                {data.time.status === "OK" &&
                  data.time["formatted"].substring(11)}
              </span>
            </nav>

            {!filter && !data.loading && Object.keys(data.data).length > 0 && (
              <h1>{Math.round(data.data["main"].temp)}º</h1>
            )}

            {filter && !data.loading && Object.keys(data.data).length > 0 && (
              <section filter={filter}>
                <Table>
                  <thead>
                    <tr>
                      <th colSpan="2">Temperatura</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>agora</td>
                      <td>{data.data["main"].temp}º</td>
                    </tr>
                    <tr>
                      <td>mínima</td>
                      <td>{data.data["main"].temp_min}º</td>
                    </tr>
                    <tr>
                      <td>máxima</td>
                      <td>{data.data["main"].temp_max}º</td>
                    </tr>
                  </tbody>
                </Table>
                <Table>
                  <thead>
                    <tr>
                      <th colSpan="2">Clima</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>vento</td>
                      <td>{data.data["wind"].speed}km/hr</td>
                    </tr>
                    <tr>
                      <td>umidade</td>
                      <td>{data.data["main"].humidity}</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
            )}
          </Main>
          <Background background={background} />
        </Content>

        <SideMenu estado={openSideMenu}>
          <Menu>
            <section>
              <header>
                <img src={logo} alt="logo" />
                <h2>Weather Application</h2>
              </header>

              {!openSideMenu && (
                <>
                  <span>
                    PESQUISE O CLIMA DE QUALQUER
                    <br />
                    LUGAR EM TEMPO REAL!
                  </span>

                  <form>
                    <input
                      type="text"
                      placeholder="Digite a cidade"
                      value={cidade}
                      onChange={evt => setCidade(evt.target.value)}
                    />
                    <button type="button" onClick={() => onClick()}>
                      <img src={search} alt="search" />
                    </button>
                  </form>

                  {Object.keys(data.erro).length > 0 && (
                    <span>Um erro ocorreu: {data.erro.message}.</span>
                  )}

                  {data.loading && (
                    <span>
                      <img
                        className="loading"
                        src={loadingGif}
                        alt="loading gif"
                      />
                    </span>
                  )}
                </>
              )}
            </section>
            <section onClick={focoTela}>
              <img
                src={openSideMenu ? rightArrow : leftArrow}
                alt="Abrir aba"
              />
            </section>
          </Menu>

          <Card estado={openSideMenu}>
            {!openSideMenu ? (
              <>
                <img src={cardImg} alt="" />

                <table>
                  <tbody>
                    <tr>
                      <td>DESIGN &amp; CODE</td>
                      <td>
                        <a
                          href="https://www.linkedin.com/in/patricia-yumi/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Patrícia Yumi
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ILLUSTRATION</td>
                      <td>
                        <a
                          href="undraw.co"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          UnDraw
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ICONS</td>
                      <td>
                        <a
                          href="http://freeicons.io"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          FreeIcons
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DOWNLOAD</td>
                      <td>
                        <a
                          href="https://github.com/PatriciYumi/weather-application"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <button onClick={() => onClickReset()}>
                <img src={search} alt="search" />
                Clique para pesquisar outra cidade
              </button>
            )}
          </Card>
        </SideMenu>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
