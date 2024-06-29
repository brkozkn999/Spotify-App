import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import SupabaseProivder from "@/providers/SupabaseProviders";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import Player from "./components/Player";
import getLikedSongs from "@/actions/getLikedSongs";
import getPermissionByUserId from "@/actions/getPermission";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasheedify",
  description: "Listen Your Favorite Nasheed Uncensored!",
  icons: {
    icon: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userPermission = await getPermissionByUserId();
  const likedSongs = await getLikedSongs();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProivder>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={likedSongs} permission={userPermission}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProivder>
      </body>
    </html>
  );
}
