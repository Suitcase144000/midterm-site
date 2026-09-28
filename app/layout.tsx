import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Turnkey Kitchens",
    description: "Turnkey kitchen leasing platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body className="min-h-full flex flex-col">
                <Nav />
                <main className="flex-1">{children}</main>
                <footer
                    className="p-4 text-sm text-center border-t"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
                >
                    © 2026 Turnkey Kitchens
                </footer>
            </body>
        </html>
    );
}