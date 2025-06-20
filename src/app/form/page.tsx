"use client";
import { useEffect, useRef } from "react";

export default function FormStatic() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Ajusta el alto dinámicamente para pantallas grandes
  useEffect(() => {
    const resize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = window.innerHeight + "px";
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/form-static.html"
      width="100%"
      style={{
        border: "none",
        minHeight: "100vh",
        width: "100vw",
        display: "block",
        background: "transparent",
        zIndex: 0,
        position: "fixed",
        inset: 0
      }}
      title="Encuesta Datapop"
      allow="clipboard-write"
    />
  );
}
