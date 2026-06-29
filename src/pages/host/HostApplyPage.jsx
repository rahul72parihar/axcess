import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Header from "../../components/Header.jsx";
import "./HostApplyPage.css";

export default function HostApplyPage() {
  const [name, setName] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [applied, setApplied] = useState(false);

  const canApply = name.trim() && instagramId.trim() && instagramLink.trim();

  function handleApply(e) {
    e.preventDefault();
    if (!canApply) return;

    // TODO(api): POST /api/host/applications with { name, instagramId, instagramLink }
    setApplied(true);
  }

  return (
    <div className="hap-page">
      <Header mode="create" role="host" showUserMenu={false} showLogout={false} />

      <main className="hap-main">
        <form className="hap-card" onSubmit={handleApply}>
          <h1>Apply to become a Host</h1>
          <p className="hap-subtitle">Fill in your details below to apply.</p>

          <div className="hap-field">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              disabled={applied}
            />
          </div>

          <div className="hap-field">
            <label>Instagram ID</label>
            <input
              value={instagramId}
              onChange={(e) => setInstagramId(e.target.value)}
              placeholder="Enter your Instagram ID"
              disabled={applied}
            />
          </div>

          <div className="hap-field">
            <label>Instagram Link</label>
            <input
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              placeholder="Enter your Instagram profile link"
              disabled={applied}
            />
          </div>

          <button
            type="submit"
            className="hap-apply-btn"
            disabled={!canApply || applied}
          >
            Apply
          </button>

          {applied && (
            <div className="hap-applied">
              <FaCheckCircle size={20} />
              <div>
                <strong>Applied!</strong>
                <p>Please wait for approval. It usually takes 12–24 hrs.</p>
              </div>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}
