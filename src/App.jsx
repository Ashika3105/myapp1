import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app-wrap">
      <div className="scene">
        <div className="blobs">
          <div className="blob blob-1" aria-hidden />
          <div className="blob blob-2" aria-hidden />
          <div className="blob blob-3" aria-hidden />
        </div>

        <main className="card" role="main" aria-labelledby="hero-title">
          <header className="card-head">
            <h1 id="hero-title">Create beautiful things.</h1>
            <p className="subtitle">
              A minimal, responsive starter UI — glassmorphism, soft motion, and
              clear typography.
            </p>
          </header>

          <section className="features" aria-label="features">
            <div className="feature">
              <h3>Fast</h3>
              <p>Instant feedback with Vite and lean assets.</p>
            </div>
            <div className="feature">
              <h3>Accessible</h3>
              <p>High contrast and semantic structure.</p>
            </div>
            <div className="feature">
              <h3>Customizable</h3>
              <p>Easy to adapt colors, shapes, and layout.</p>
            </div>
          </section>

          <footer className="card-actions">
            <a
              className="btn primary"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Get Started
            </a>
            <a
              className="btn ghost"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Explore
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
