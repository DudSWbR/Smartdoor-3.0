import styled from "styled-components";
import { Container } from "@material-ui/core";
import theme from "~/styles/theme";

export const UpperDiv = styled.div`
  background: ${theme.palette.background.blue};
  height: 25vh;
`;
export const LowerDiv = styled.div`
  background: ${theme.palette.background.lilac};
  height: 75vh;
`;
export const ContainerStyle = styled(Container)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
`;
export const ImageHolder = styled.div`
  width: 70%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

export const SwitchText = styled.p`
  margin-top: 16px;
  text-align: center;
  strong {
    cursor: pointer;
    color: ${theme.palette.background.blue};
  }
`;
