import { ChildrenProps } from "@/type";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todos App",
  description: "Take care of your todos",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
