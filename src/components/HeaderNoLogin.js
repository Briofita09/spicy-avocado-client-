import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logos/logo.svg";
import styles from "../assets/styles/HeaderNoLogin.module.scss";

import Modal from "../components/Modal";
import Login from "../routeComponents/auth/Login";

export default function HeaderNoLogin(props) {
  const signupButtonRender = props.signupButtonRender;
  const [showModalState, setModalState] = useState(false);
  return (
    <>
      <Modal isOpen={showModalState} setState={setModalState}>
        <Login />
      </Modal>
      <header className={styles.headerHome}>
        <img src={Logo} alt="Logo" />

        <nav>
          <button type="button" onClick={() => setModalState(true)}>
            <span>Ja é cadastrado? Faça login aqui!</span>
          </button>

          {Boolean(signupButtonRender) && (
            <Link to="/auth/signup">
              <button type="button">Cadastre-se!</button>
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
