import styled from "styled-components";
import { FlexColumnCenter } from "../../styles/components";

export const Form = styled.div`
  position: relative;
  height: 300px;
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({theme}) => theme.media.medium} {
    height: auto;
    padding: 50px 40px;
  }

  &>* {
    z-index: 2;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const Background = styled.div`
  position: absolute;
  background: url('./assets/img/form_bg.png');
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: .1;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: ${({theme}) => theme.colors.whiteText};
  font-weight: ${({theme}) => theme.fontWeight.light};
  margin-bottom: 15px;
  margin-top: 0;
  @media ${({theme}) => theme.media.medium} {
    margin-bottom: 30px;
  }
  
  span {
    font-size: 18px;
    color: ${({theme}) => theme.colors.whiteText}50;
    margin-top: 4px;
  }
`

export const Inputs = styled.div`
  margin-bottom: 20px;

  @media ${({theme}) => theme.media.medium} {
    ${FlexColumnCenter}

    &>* {
      margin-bottom: 20px;
    }
  }
`
