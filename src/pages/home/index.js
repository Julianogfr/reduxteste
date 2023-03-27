import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { combineReducers } from "redux";
import "./index.css";

const Home = () => {

  const { authRegister, setError, formState: { errors } } = useForm();

  const [register, setRegister] = useState(false);
  const handleRegister = () => {
    setRegister(!register);
  };

  const handleLogin = () => {
    setRegister(!register);
  };

  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };

  const handleOpen = () => {
    setClose(!close);
  };

  const Sigin = () => {
    const { Sigin } = combineReducers();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      if (!email | !password) {
        setError("Usuário e senha errados!")
        return;
      }

      const resIn = Sigin (email, password);

      if (resIn) {
        return;
      }
    }
  }

  const Signup = () => {
    const [ username, setUsername ] = useState(' ');
    const [ email, setEmail ] = useState(' ');
    const [ password, setPassword ] = useState(' ');

    const { Signup } = combineReducers();

    const handleSignup = () => {
      if (!username | !email | !password)
      setError('preencha todos os campos!');
      return;
    }

    const resUp = Signup (username, email, password);

    if(resUp) {
      setError(resUp);
      return;
    }

    alert('usuário cadastrado')
  }

  return (
    <html>
      <body>
        <header className="home-header-menu">
          <h2 className="title-home-menu">ForLeven</h2>
          <nav className="navigation-home-menu">
            <a href="/">Home</a>
            <a href="/noticias">Notícias</a>
            <a href="/planoseservicos">Planos e serviços</a>
            <a href="/contato">Contato</a>
            <button className="bttn-home-menu" onClick={handleOpen}>
              Entrar
            </button>
          </nav>
        </header>

        <div
          className="wrapper-login"
          style={{
            height: !register ? "440px" : "600px",
            display: !close ? "none" : "",
          }}
        >
          <span className="icon-close-login-home" onClick={handleClose}>
            <ion-icon name="close"></ion-icon>
          </span>

          <div
            className="form-box login"
            style={{ display: !register ? "block" : "none" }}
          >
            <h2>Bem-vindo</h2>

            <form >
              <div className="input-box-form-login">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input
                  type="email"
                  name="usermail"
                  required
                />
                <label>E-mail</label>
              </div>
              <div className="input-box-form-login">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input
                  type="password"
                  name="password"
                  required
                  />
                <label>Senha</label>
              </div>
              <div className="remember-forgot-login">
                <label>
                  <input type="checkbox" />
                  Lembre-me
                </label>
                <a href="#">Esqueci a senha</a>
              </div>

              <button type="submit" className="bttn-submit-login" onClick={handleLogin}>
                Entrar
              </button>

              <div className="login-register">
                <p>
                  Não tem uma conta?
                  <a
                    href="#"
                    className="register-login-form-link"
                    onClick={handleRegister}
                  >
                    Registre-se
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div
            className="form-box register"
            style={{ display: register ? "block" : "none" }}
          >
            <h2>Registro</h2>

            <form action="#">
              <div className="input-box-form-login">
                <span className="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input type="text" required />
                <label>Usuário</label>
              </div>
              <div className="input-box-form-login">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>E-mail</label>
              </div>
              <div className="input-box-form-login">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Senha</label>
              </div>
              <div className="remember-forgot-login">
                <label>
                  <input type="checkbox" />
                  Eu concordo com os termos e condições
                </label>
              </div>

              <button type="submit" className="bttn-submit-login" onClick={Signup}>
                Registrar
              </button>

              <div className="login-register">
                <p>
                  Já tem uma conta?
                  <a
                    href="#"
                    className="login-register-form-link"
                    onClick={handleLogin}
                  >
                    Entrar
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Home;
