import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | KBUSYOGR",
    default: "KBUSYOGR",
  },
};

export default async function RootLayout({ children }: any) {
  return children;
}
