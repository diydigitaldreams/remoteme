"use client";

import { useMemo, useState } from "react";
import { scoreJob, type ScoreResult } from "@/lib/scoring";

const placeholderCareer = "Paste resume text, LinkedIn text, Indeed text, or a short career profile here.";
const placeholderJob = "Paste a remote job post here.";

export default function HomePage() {
  const [careerInput, setCareerInput] = useState("");
  const [jobPost, setJobPost] = useState("");
  const [status, setStatus] = useState("Found");
  const result: ScoreResult | null = useMemo(() => {
    if (!careerInput.trim() || !jobPost.trim()) return null;
    return scoreJob(careerInput, jobPost);
  }, [careerInput, jobPost]);

  return (
    <main>
      <section style={{ padding: "56px 0 28px" }}>
        <div className="container">
          <p className="muted" style={{ fontWeight: 700, margin: 0 }}>RemoteMe</p>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1, margin: "12px 0" }}>
            Score remote jobs before you waste time applying.
          </h1>
          <p className="muted" style={{ maxWidth: 760, fontSize: "1.15rem", lineHeight: 1.6 }}>
            Paste career material and a job post. RemoteMe estimates fit, flags remote/location risk,
            and gives you a clean application angle. No auto-apply. No fake claims. Review everything.
          </p>
        </div>
      </section>

      <section className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18, paddingBottom: 28 }}>
        <div className="card">
          <label className="label" htmlFor="career-input">Career material</label>
          <textarea
            id="career-input"
            className="textarea"
            placeholder={placeholderCareer}
            value={careerInput}
            onChange={(event) => setCareerInput(event.target.value)}
          />
          <p className="muted">Use resume text, LinkedIn text, Indeed text, or a short profile.</p>
        </div>

        <div className="card">
          <label className="label" htmlFor="job-post">Job post</label>
          <textarea
            id="job-post"
            className="textarea"
            placeholder={placeholderJob}
            value={jobPost}
            onChange={(event) => setJobPost(event.target.value)}
          />
          <p className="muted">Paste the full post when possible so location restrictions are visible.</p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 56 }}>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: "0 0 8px" }}>Fit score</h2>
              <p className="muted" style={{ margin: 0 }}>A deterministic MVP score. AI drafting can be wired in later.</p>
            </div>
            <select className="select" style={{ maxWidth: 220 }} value={status} onChange={(event) => setStatus(event.target.value)}>
              <option>Found</option>
              <option>Scored</option>
              <option>Drafted</option>
              <option>Applied</option>
              <option>Followed Up</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
              <option>Ghosted</option>
              <option>Skip</option>
            </select>
          </div>

          {!result ? (
            <p className="muted" style={{ marginTop: 24 }}>Paste both sections to see a score.</p>
          ) : (
            <div style={{ marginTop: 24, display: "grid", gap: 18 }}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <strong style={{ fontSize: "3rem" }}>{result.fitScore}/100</strong>
                <span style={{ border: "1px solid var(--border)", borderRadius: 999, padding: "8px 12px", fontWeight: 700 }}>
                  {result.recommendation}
                </span>
                <span className="muted">Status: {status}</span>
              </div>

              <ResultList title="Why this fits" items={result.whyThisFits.length ? result.whyThisFits : ["No strong overlap detected yet."]} />
              <ResultList title="Risks" items={result.risks.length ? result.risks : ["No major risk terms detected by the MVP scanner."]} />
              <ResultList title="Remote / location notes" items={result.remoteLocationNotes} />

              <div>
                <h3>Resume angle</h3>
                <p>{result.resumeAngle}</p>
              </div>
              <div>
                <h3>Cover letter angle</h3>
                <p>{result.coverLetterAngle}</p>
              </div>
              <ResultList title="Questions to verify" items={result.questionsToVerify} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul style={{ marginTop: 8 }}>
        {items.map((item) => (
          <li key={item} style={{ marginBottom: 6 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
