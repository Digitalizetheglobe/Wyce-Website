import { Raleway, Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";
import ClientLayoutShell from "./ClientLayoutShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wyce Exclucity - 4, 3 & 2 BHK Premium Residences in Bavdhan Pune",
  description: "Buy luxury flats in Bavdhan, Pune with WYCE Corp – offering 4, 3 & 2 BHK premium apartments designed for comfort, style, and modern living in prime city locations.",
  keywords: "flats in pune, luxury flats in pune, 2 bhk flat in pune, 3 bhk flats in pune, flats for sale in pune, 4 bhk flats in pune, buy flats in pune, flats in Bavdhan, luxury flats in pune",
  icons: {
    icon: "/images/icon.png",
  },
  verification: {
    google: "Pz5HyQPGT_xgsSYscV6Dx3WRIP2QGsx8BiDUslcveKc"
  },
  robots: "index, follow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/"
  }
};


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${cinzel.variable} ${greatVibes.variable} font-cinzel antialiased`}
        suppressHydrationWarning={true}
      >
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K6VG584275"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K6VG584275');
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Developer",
              "name": "WYCE Corp",
              "url": "https://www.wycecorp.com/",
              "telephone": "+91 75497 99799",
              "email": "sales@wycecorp.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "WYCE Exclucity, CEC Office, Siddharth Nagar, Bavdhan",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411021",
                "addressCountry": "IN"
              }
            })
          }}
        />
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
