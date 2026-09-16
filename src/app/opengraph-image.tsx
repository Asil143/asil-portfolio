import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} - ${profile.title}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fcfcfc",
          color: "#101014",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#5b5ce8",
            fontSize: "28px",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          <span>Senior Data Engineer</span>
          <span>Cloud Data Platforms</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <h1
            style={{
              margin: 0,
              maxWidth: "860px",
              fontSize: "86px",
              lineHeight: 0.95,
              letterSpacing: "-2px",
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "920px",
              color: "#6b6b76",
              fontSize: "34px",
              lineHeight: 1.25,
            }}
          >
            Spark · Databricks · Snowflake · AWS · Azure · Kafka · Airflow · dbt
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "#101014",
            fontSize: "26px",
          }}
        >
          {["5+ years", "2+ TB/day", "50M+ events/day", "AI/RAG data foundations"].map(
            (item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(16,16,20,0.12)",
                  borderRadius: "18px",
                  padding: "14px 20px",
                  background: "rgba(16,16,20,0.03)",
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
