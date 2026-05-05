import React from "react";
import { ReactTableDefaults } from "@teselagen/react-table";
const { LoadingComponent } = ReactTableDefaults;

function DisabledLoadingComponent({ disabled, loading, loadingText }) {
  if (!loading) return null;
  return (
    <LoadingComponent
      className={disabled ? "disabled" : ""}
      loading={loading}
      loadingText={disabled ? "" : loadingText}
    />
  );
}

export default DisabledLoadingComponent;
