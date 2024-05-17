import { StoreProvider } from "@/lib/StoreProvider";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Todo App",
  description: "Manage and tracking for your task",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${poppins.variable} bg-[#F7F7F7]`}>
          <div className="max-w-md mx-auto bg-red-400 mt-6">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
