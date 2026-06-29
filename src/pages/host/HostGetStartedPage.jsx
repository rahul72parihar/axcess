import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaCheckCircle } from "react-icons/fa";
import Header from "../../components/Header.jsx";
import "./HostGetStartedPage.css";

const BENEFITS = [
  "Connect with your audience",
  "Host paid 1-on-1 sessions",
  "Earn on your own terms",
];

export default function HostGetStartedPage() {
  const navigate = useNavigate();

  return (
    <div className="hgs-page">
      <Header mode="create" role="host" showUserMenu={false} showLogout={false} />

      <main className="hgs-main">
        <p className="hgs-subtitle">Choose an option below to get started</p>

        <div className="hgs-card">
          <div className="hgs-icon-circle">
            <FaUserPlus size={28} />
          </div>

          <h2>Want to Become a Host?</h2>
          <p className="hgs-card-desc">
            Apply to join our platform and start hosting your own sessions.
          </p>

          <ul className="hgs-benefits">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>
                <FaCheckCircle size={16} />
                {benefit}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="hgs-apply-btn"
            onClick={() => navigate("/host/apply")}
          >
            <FaUserPlus size={18} />
            Apply to Become a Host
          </button>
        </div>
      </main>
    </div>
  );
}
