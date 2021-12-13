/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AddFilmeModal } from "./AddFilmeModal";
import { ModalLogin } from "./ModalLogin";

export const Navbar = ({
  user,
  setUser,
  getCardData,
  cardData,
  setCardData,
}) => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [filmeModalIsOpen, setFilmeModalIsOpen] = useState(false);

  const search = () => {
    const word = document.getElementById("word").value;
    const newCardData = cardData?.filter((data) => {
      return data?.Title?.toLowerCase().startsWith(word.toLowerCase());
    });
    setCardData(newCardData);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <img
            className="position-absolute m-2"
            style={{ width: "75px", borderRadius: "20px" }}
            src="https://pa1.narvii.com/6889/c019193a7b6eafc916f2eba70d0e87ad7d88cd60r1-411-454_hq.gif"
            alt="Logo"
          />
          <a className="navbar-brand" style={{ marginLeft: "105px" }}>
            Filmes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              {user ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer", color: "IndianRed" }}
                    onClick={() => setUser(false)}
                  >
                    Sair
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer", color: "IndianRed" }}
                    onClick={() => setLoginModalIsOpen(true)}
                  >
                    Entrar
                  </a>
                </li>
              )}
              {user ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => setFilmeModalIsOpen(true)}
                    style={{ cursor: "pointer", color: "MediumSpringGreen" }}
                  >
                    Cadastrar Filme
                  </a>
                </li>
              ) : null}
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                id="word"
                placeholder="Pesquisar"
              />
              <button
                onClick={() => search()}
                className="btn btn-secondary my-2 my-sm-0"
                type="submit"
              >
                Pesquisar
              </button>
              <button
                onClick={() => getCardData()}
                style={{ marginRight: "25px", marginLeft: "25px" }}
                className="btn btn-warning my-2 my-sm-0"
                type="submit"
              >
                Limpar
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ModalLogin
        modalIsOpen={loginModalIsOpen}
        setModalIsOpen={setLoginModalIsOpen}
      />
      <AddFilmeModal
        modalIsOpen={filmeModalIsOpen}
        setModalIsOpen={setFilmeModalIsOpen}
      />
    </>
  );
};
