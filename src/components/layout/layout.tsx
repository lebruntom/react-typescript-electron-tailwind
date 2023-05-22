import React, { Fragment } from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <div>
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
