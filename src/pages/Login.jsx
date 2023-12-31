import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
import { SignIn } from '@phosphor-icons/react';
import userContext from '../context/Contexts/userContext';
import headerContext from '../context/Contexts/headerContext';
import imageLoginHeader from '../images/login-header.jpg';
import logo from '../images/logo.svg';
import styles from './styles/Login.module.css';

function Login() {
  const history = useHistory();
  const { user, setUser, isValidEmail, isValidPassword } = useContext(userContext);
  const { email, password } = user;

  const { setPageUrl } = useContext(headerContext);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
    setPageUrl('/meals');
  };

  const handleClickShowMadeBy = () => {
    Swal.fire({
      title: '<strong>Group 3</strong>',
      icon: 'info',
      html:
      '<p><a href="https://github.com/brunoferreira89" target="_blank">'
      + 'Bruno Ferreira</a></p>'
      + '<p><a href="https://github.com/Diego-Cordeiro0406" target="_blank">'
      + 'Diego Cordeiro</a></p>'
      + '<p><a href="https://github.com/felipe-lima-coelho" target="_blank">'
      + 'Felipe Lima Coelho</a></p>'
      + '<p><a href="https://github.com/Louisph08" target="_blank">'
      + 'Louis Phillipi</a></p>'
      + '<p><a href="https://github.com/luizheilig" target="_blank">'
      + 'Luiz Fernando Heilig</a></p>',
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  };

  return (
    <div className={ styles.wrapContainerLogin }>
      <section className={ styles.resolutionNotice }>
        <h1>Redimensione o tamanho da página para melhor usufruir da aplicação</h1>
        <h1>Recomendamos a resolução de tela de 360 x 640</h1>
        <h1>(360 pixels de largura por 640 pixels de altura)</h1>
      </section>

      <header>
        <img
          className={ styles.imageLoginHeader }
          src={ imageLoginHeader }
          alt="Fotos de várias comidas e bebidas"
        />
      </header>

      <form className={ styles.formLogin }>
        <header className={ styles.logoContainer }>
          <img
            className={ styles.logo }
            src={ logo }
            alt="Desenho de campainha alaranjada com um coração vermelho"
          />
        </header>

        <main className={ styles.mainLogin }>
          <label htmlFor="email" className={ styles.emailLabel }>
            Email
          </label>
          <input
            data-testid="email-input"
            className={ styles.emailInput }
            type="email"
            autoComplete="off"
            name="email"
            value={ email }
            id="email"
            onChange={ handleOnChange }
          />
          <label htmlFor="password" className={ styles.passwordLabel }>
            Password
          </label>
          <input
            data-testid="password-input"
            className={ styles.passwordInput }
            type="password"
            name="password"
            value={ password }
            id="password"
            onChange={ handleOnChange }
          />
        </main>

        <footer className={ styles.footerLogin }>
          <button
            data-testid="login-submit-btn"
            type="button"
            className={ styles.btnEnterLogin }
            disabled={ !(isValidEmail(email) && isValidPassword(password)) }
            onClick={ handleOnClick }
          >
            Enter
            <SignIn size={ 18 } />
          </button>

          <p className={ styles.infoMadeLogin }>
            Made by
            {' '}
            <button
              type="button"
              onClick={ handleClickShowMadeBy }
            >
              Group 3
            </button>
          </p>
        </footer>
      </form>
    </div>
  );
}

export default Login;
