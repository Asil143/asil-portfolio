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
          background: "#08080b",
          color: "#f3f3f6",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8b8cff",
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
              color: "#c7c7d4",
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
            color: "#f3f3f6",
            fontSize: "26px",
          }}
        >
          {["5+ years", "2+ TB/day", "50M+ events/day", "AI/RAG data foundations"].map(
            (item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "18px",
                  padding: "14px 20px",
                  background: "rgba(255,255,255,0.05)",
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
