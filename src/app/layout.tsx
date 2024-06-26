import type { Metadata } from "next";
import clsx from "clsx";

import { Theme, ThemePanel } from "@/ui_kit";
import { playfairDisplay, poppins } from "@/styles/font";
import "@/styles/reset.css";
import "@/styles/global.css";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Simple E-Commerce",
  description: "Manage products, manage users. Simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(playfairDisplay.variable, poppins.variable)}>
        <Theme>
          {children}
          {process.env.NEXT_PUBLIC_SHOW_THEME_PANEL && <ThemePanel />}
          <ToastContainer />
        </Theme>
      </body>
    </html>
  );
}
