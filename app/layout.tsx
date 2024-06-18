import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import SupabaseProivder from "@/providers/SupabaseProviders";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scum AUDIOS",
  description: "Listen Scum's hottest shits!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProivder>
          <UserProvider>
            <ModalProvider/>
              <Sidebar>
                {children}
              </Sidebar>
            </UserProvider>
        </SupabaseProivder>
      </body>
    </html>
  );
}
