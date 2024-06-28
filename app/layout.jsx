import '../styles/globals.css';
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import React from "react";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "TaskLab",
};
