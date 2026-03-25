"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Kita gunakan React.ComponentProps untuk mengambil tipe prop secara otomatis
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}