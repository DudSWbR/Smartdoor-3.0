import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  MainMenu,
  ContentSection,
  DashboardInfos,
  DashboardCharts,
} from "~/components/sections";
import { PageHeader } from "~/components/blocks";
import { Margin } from "~/components/elements";
import { TopBackground, BottomBackground } from "./styles";
import { Creators as DashboardActions } from "~/store/modules/dashboard/actions";
import { scrollTop } from "~/utils/tools";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTop();
    dispatch(DashboardActions.getDashboardInfos());
    dispatch(DashboardActions.getAccessesInfos());
    dispatch(DashboardActions.getUsersInfos());
    dispatch(DashboardActions.getAccessesHistory());
  }, [dispatch]);

  return (
    <>
      <MainMenu />
      <ContentSection>
        <TopBackground>
          <Margin mb={3}>
            <PageHeader title="Dashboard" />
          </Margin>
          <DashboardInfos />
        </TopBackground>
        <BottomBackground>
          <DashboardCharts />
        </BottomBackground>
      </ContentSection>
    </>
  );
}

export default Dashboard;
