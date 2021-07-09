import styled, { css } from 'styled-components';

export const ImageContent = styled.div`
  height: ${(props: any) => props?.height};
  background-image: ${(props: any) => `url(${props?.image})`};
  background-position: center;
  background-size: cover;
  padding: 1em;
` as any;
