import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { FormLogin } from "~/components/blocks";
import { UpperDiv, LowerDiv, ContainerStyle, ImageHolder } from "./styles";
import logo from "~/assets/img/smartdoor_logo_completa.png";
import { scrollTop } from "~/utils/tools";

export default function Login() {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <UpperDiv />
      <LowerDiv>
        <ContainerStyle>
          <Grid container justify="center">
            <Grid item xs={10} sm={7} lg={4}>
              <ImageHolder>
                <img src={logo} alt="SmartDoor" />
              </ImageHolder>
              <FormLogin />
            </Grid>
          </Grid>
        </ContainerStyle>
      </LowerDiv>
    </>
  );
}
