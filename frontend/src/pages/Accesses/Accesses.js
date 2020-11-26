import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MainMenu, ContentSection } from "~/components/sections";
import { PageHeader, CardAccesses } from "~/components/blocks";
import { Margin } from "~/components/elements";
import { Background, PadGrid } from "./styles";
import { Creators as AccessesActions } from "~/store/modules/accesses/actions";
import { scrollTop, formatDateStringToSend } from "~/utils/tools";

export default function Accesses() {
  const dispatch = useDispatch();

  const filteredAccesses = (values) => {
    const payload = {
      initialDate: formatDateStringToSend(values.initialDate),
      finalDate: formatDateStringToSend(values.finalDate),
    };
    dispatch(AccessesActions.getFilteredAccesses(payload));
  };

  const reloadAllAccesses = () => {
    dispatch(AccessesActions.getAccesses());
  };

  useEffect(() => {
    scrollTop();
    dispatch(AccessesActions.getAccesses());
  }, [dispatch]);

  return (
    <>
      <MainMenu />
      <ContentSection>
        <Background>
          <Margin mb={3}>
            <PageHeader title="Acessos" />
          </Margin>
          <PadGrid container spacing={2} justify="space-evenly">
            <CardAccesses
              filteredAccesses={filteredAccesses}
              reloadAllAccesses={reloadAllAccesses}
            />
          </PadGrid>
        </Background>
      </ContentSection>
    </>
  );
}