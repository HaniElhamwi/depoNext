import { Metadata } from "next";

export const metadata: Metadata = {};

export default async function RootLayout({ children }: any) {
  return children;
}
