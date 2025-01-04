'use client'

import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import GlobalStyle from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={{theme}}>
          <GlobalStyle/>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
