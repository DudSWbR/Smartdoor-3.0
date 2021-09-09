import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { FormLogin, FormSignUp } from "~/components/blocks";
import * as S from "./styles";
import logo from "~/assets/img/smartdoor_logo_completa.png";
import { scrollTop } from "~/utils/tools";

export default function Login() {
  const [login, setLogin] = useState(true);
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <S.UpperDiv />
      <S.LowerDiv>
        <S.ContainerStyle>
          <Grid container justify="center">
            <Grid item xs={10} sm={7} lg={4}>
              <S.ImageHolder>
                <img src={logo} alt="SmartDoor" />
              </S.ImageHolder>
              {login ? (
                <>
                  <FormLogin />
                  <S.SwitchText>
                    Ou faça seu cadastro{" "}
                    <strong onClick={() => setLogin(false)}>aqui</strong>.
                  </S.SwitchText>
                </>
              ) : (
                <>
                  <FormSignUp />
                  <S.SwitchText>
                    <strong onClick={() => setLogin(true)}>Voltar</strong> para
                    o login.
                  </S.SwitchText>
                </>
              )}
            </Grid>
          </Grid>
        </S.ContainerStyle>
      </S.LowerDiv>
    </>
  );
}
