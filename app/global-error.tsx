"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#ffffff",
          color: "#1f2937",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <p
            style={{
              fontSize: "72px",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1,
              backgroundImage: "linear-gradient(90deg, #9663ea, #4d5cee)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            500
          </p>
          <h1 style={{ marginTop: "20px", fontSize: "24px" }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: "8px", color: "#6b7280" }}>
            A critical error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "24px",
              padding: "10px 22px",
              borderRadius: "9999px",
              border: "none",
              color: "#ffffff",
              fontWeight: 600,
              cursor: "pointer",
              backgroundImage: "linear-gradient(90deg, #9663ea, #4d5cee)",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
