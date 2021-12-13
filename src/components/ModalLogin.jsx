import React, { useContext, useState } from "react";
import { customStyles, setCookie } from "../utils/utils";
import Modal from "react-modal";
import axios from "axios";
import { LoginModalError } from "./LoginModalError";
import { DataContext } from "../contexts/DataContext";

export const ModalLogin = ({ modalIsOpen, setModalIsOpen }) => {
  const [loginError, setLoginError] = useState(false);

  const { setUser } = useContext(DataContext)

  const login = (resp)=>{
    setUser(resp.data.Id)
    setCookie("Token", resp.data.Token)
  }
  const handleLogin = () => {
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;
    axios
      .post("http://localhost:5000/Login", { Email, Password })
      .then((resp) => login(resp))
      .catch(()=> setLoginError(true));
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="form-group text-center" style={{ minWidth: "450px" }}>
          <button
            onClick={() => setModalIsOpen(false)}
            className="btn-close position-absolute"
            style={{ marginLeft: "40%" }}
          />
          <h2>Login</h2>
          <hr />
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                autoComplete="on"
                className="form-control"
                id="email"
                placeholder="E-mail:"
                required
              />
              <label>E-mail:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                autoComplete="on"
                className="form-control"
                id="password"
                placeholder="Senha:"
                required
              />
              <label>Senha:</label>
            </div>
          </form>
          <hr />
          {loginError ? <LoginModalError /> : null}
          <button onClick={handleLogin} className="btn btn-success">
            Entrar
          </button>
        </div>
      </Modal>
    </>
  );
};
