"use client";

import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/appstore/store";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4D5CEE",
              colorLink: "#4D5CEE",
              colorInfo: "#4D5CEE",
              fontFamily: "Inter, Helvetica, sans-serif",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </Provider>
  );
}
