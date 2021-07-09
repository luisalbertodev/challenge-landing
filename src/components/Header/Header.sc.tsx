import styled, { css } from 'styled-components';

export const Header = styled.header`
  background: ${(props) => props.theme.colors[props.theme.mode].primary};
  height: 80px;

  nav {
    height: 100%;
  }

  ul {
    height: 100%;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
  }

  li {
    padding-left: 8px;
    padding-right: 8px;
  }

  a {
    color: ${(props) => props.theme.colors[props.theme.mode].light};
    text-decoration: none;
  }

  .MuiButton-containedPrimary {
    color: ${(props) => props.theme.colors[props.theme.mode].primary};
    background-color: ${(props) => props.theme.colors[props.theme.mode].light};
  }
`;
