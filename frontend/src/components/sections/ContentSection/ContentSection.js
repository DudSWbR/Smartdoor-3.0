import React from "react";
import { MenuSpacer, Content } from "./styles";

export default function ContentSection({ children }) {
  return (
    <div>
      <MenuSpacer />
      <Content>{children}</Content>
    </div>
  );
}
