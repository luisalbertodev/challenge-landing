import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';

import * as S from './Header.sc';

const Header = () => {
  return (
    <S.Header>
      <nav className="wrapper_layout">
        <ul>
          <li>
            <a href="#">Quiénes somos</a>
          </li>
          <li>
            <a href="#">Beneficios</a>
          </li>
          <li>
            <a href="#">Cómo Funciona</a>
          </li>
          <li>
            <a href="#">Videollamadas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Comunidad</a>
          </li>
          <li>
            <a href="#">Regístrate</a>
          </li>
          <li>
            <Button variant="contained" color="primary">
              Iniciar sesión
            </Button>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
};

export default Header;
