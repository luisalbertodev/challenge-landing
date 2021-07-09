import styled, { css } from 'styled-components';

export const SectionOne = styled.div`
  padding-top: 94px;

  h4,
  p {
    color: ${(props) =>
      props.theme.colors[props.theme.mode].primary} !important;
  }

  h4 {
    padding-bottom: 1em;
    padding-left: 8px;
  }

  li {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  li::before {
    content: '• ';
    color: ${(props) => props.theme.colors[props.theme.mode].secondary};
    padding-right: 8px;
  }

  h4 {
    font-size: 30px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;

export const WrapperPaper = styled.div`
  .MuiPaper-root {
    padding: 2em;
    max-width: 544px;
    height: 480px;
  }

  form .MuiFormControl-root {
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  form .MuiFormGroup-root {
    flex-direction: initial;
  }

  form .MuiButton-containedPrimary {
    background-color: ${(props) =>
      props.theme.colors[props.theme.mode].secondary};
    min-width: 280px;
    margin: auto;
    display: flex;
  }
`;
