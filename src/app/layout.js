  import Navbar from "@/components/navbar/Navbar";
  import { ThemeContextProvider } from "@/context/ThemeContext";
  import NextAuthProvider from "@/providers/NextAuthProvider";
  import ThemeProvider from "@/providers/ThemeProvider";
  import { getServerSession } from "next-auth";
  import { Inter } from "next/font/google";
  import { authOptions } from "./api/auth/[...nextauth]/route";
  import "./globals.css";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata = {
    title: "Next Auth",
    description: "Next Authentication",
  };

  export default async function RootLayout({ children }) {
    
    const session = await getServerSession(authOptions);

    return (
      <html lang="en">
        <body className={inter.className}>
          <NextAuthProvider session={session}>
            <ThemeContextProvider>
              <ThemeProvider>
                <div className="container">
                  <div className="wrapper">
                    <Navbar />
                    {children}
                  </div>
                </div>
              </ThemeProvider>
            </ThemeContextProvider>
          </NextAuthProvider>
        </body>
      </html>
    );
  }
