'use client'

import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import GlobalStyle, { Body } from "./global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Body>
        <ThemeProvider theme={{theme}}>
          <GlobalStyle/>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </ThemeProvider>
      </Body>
    </html>
  );
}
