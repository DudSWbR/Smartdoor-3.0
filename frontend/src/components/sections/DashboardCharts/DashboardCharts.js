import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { CardDashGraph, CardDashList } from "~/components/blocks";
import { Margin } from "~/components/elements";
import { ChartsHolder } from "./styles";
import isMobile from "~/hooks/isMobile";

export default function DashboardCharts() {
  const mobile = isMobile();
  const usersInfos = useSelector((state) => state.dashboard.users.usersInfos);
  const loadingUsers = useSelector(
    (state) => state.dashboard.users.loadingUsers
  );
  const accessesInfos = useSelector(
    (state) => state.dashboard.accesses.accessesInfos
  );
  const loadingAccesses = useSelector(
    (state) => state.dashboard.accesses.loadingAccesses
  );

  return (
    <ChartsHolder>
      <Margin mb={3}>
        <CardDashGraph />
      </Margin>
      <Grid container spacing={2} justify={mobile ? "center" : "space-between"}>
        <Grid item xs={12} md={6}>
          <CardDashList
            title="Credenciados"
            heads={["Nome Completo", "CPF", "Data de criação"]}
            data={usersInfos}
            link="/users"
            loading={loadingUsers}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardDashList
            title="Acessos"
            heads={["Nome", "Acesso", "Porta"]}
            data={accessesInfos}
            link="/accesses"
            loading={loadingAccesses}
          />
        </Grid>
      </Grid>
    </ChartsHolder>
  );
}
