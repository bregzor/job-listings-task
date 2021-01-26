import React, { useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as s from "./Loader.styles";

const LoadContentWrapper = ({ children, loading }) => {
  return loading ? (
    <s.LoaderWrapper id="loader">
      <CircularProgress color="secondary" />
    </s.LoaderWrapper>
  ) : (
    <>{children}</>
  );
};

export default LoadContentWrapper;
