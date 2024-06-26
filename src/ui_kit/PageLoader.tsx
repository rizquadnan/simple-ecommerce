import { Box } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { Bars } from "react-loader-spinner";
import classes from "./PageLoader.module.css";
import { Root } from "@radix-ui/react-portal";

export type PageLoaderProps = {
  children?: ReactNode;
  isLoading: boolean;
};
export const PageLoader = (props: PageLoaderProps) => {
  if (!props.isLoading) {
    return props.children;
  }

  return (
    <>
      <Root>
        <Box
          className={classes.root}
          style={{ height: props.children ? undefined : "100vh" }}
        >
          <Bars
            wrapperClass={classes.loader}
            height="80"
            width="80"
            color="#41A0E4"
            ariaLabel="bars-loading"
            visible={true}
          />
          <Box className={classes.backdrop}></Box>
        </Box>
      </Root>
      {props.children}
    </>
  );
};
