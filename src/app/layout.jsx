import { Providers } from "./providers";
import { Inter, Oswald } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
    title: "Aurasafety Industrial Solutions – Bata Safety Shoes Dealer & Fire Safety Supplier in Ujjain",
    description: "Authorized Bata safety shoes dealer in Ujjain. Industrial PPE supplier for gloves, helmets, fire extinguishers, safety jackets & MSME safety kits. Bulk orders & fast delivery.",
    keywords: "Bata safety shoes, safety shoes Ujjain, PPE supplier Ujjain, industrial safety, fire safety, helmets, gloves, safety jacket, MSME safety kit, Aurasafety Industrial Solutions",
    authors: [{ name: "Aurasafety Industrial Solutions" }],
    openGraph: {
        title: "Aurasafety Industrial Solutions – Industrial Safety & PPE Solutions in Ujjain",
        description: "Authorized Bata dealer. Complete PPE solutions - safety shoes, helmets, gloves, fire extinguishers. Fast delivery across Ujjain, Indore, Dewas.",
        type: "website",
        url: "https://aurasafety.in",
        siteName: "Aurasafety Industrial Solutions",
        locale: "en_IN",
        images: [{ url: "https://aurasafety.in/og-image.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aurasafety Industrial Solutions – Industrial Safety & PPE Solutions",
        description: "Authorized Bata dealer. Complete PPE solutions in Ujjain.",
        images: ["https://aurasafety.in/og-image.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${oswald.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
