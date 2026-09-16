import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import ThemeProvider from "@/components/ThemeProvider";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} | Senior Data Engineer - Spark, Databricks, Snowflake, AWS, Azure`,
  description: profile.tagline,
  keywords: [
    "Senior Data Engineer",
    "Cloud Data Engineer",
    "PySpark",
    "Apache Spark",
    "Databricks",
    "Snowflake",
    "Apache Airflow",
    "dbt",
    "Kafka",
    "AWS",
    "Azure",
    "Delta Lake",
    "Apache Iceberg",
    "Lakehouse",
    "Data Engineering",
    "RAG Data Pipelines",
  ],
  openGraph: {
    title: `${profile.name} | Senior Data Engineer`,
    description: profile.tagline,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${profile.name} | Senior Data Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Senior Data Engineer`,
    description: profile.tagline,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      url: SITE_URL,
      sameAs: [profile.links.linkedin, profile.links.github],
      knowsAbout: [
        "Data Engineering",
        "PySpark",
        "Apache Spark",
        "Databricks",
        "Snowflake",
        "Apache Airflow",
        "dbt",
        "Kafka",
        "AWS",
        "Azure",
        "Delta Lake",
        "Apache Iceberg",
        "Lakehouse Architecture",
        "RAG Data Pipelines",
      ],
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="noise flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
