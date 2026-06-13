import "./QueuePage.css";

export default function QueuePage() {
  return (
    <div className="queue-page">
      <div className="queue-container">

        {/* HEADER */}
        <header className="queue-header">
          <div className="logo">
            Axcess <span>🎵</span>
          </div>

          <div className="header-right">
            <div className="secure">
              🛡️ Secure Payment
            </div>

            <div className="user-box">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="user"
              />
              <span>Rohan</span>
            </div>
          </div>
        </header>

        <div className="content-grid">

          {/* LEFT SIDE */}
          <div className="main-card">

            <div className="queue-title">
              <div className="icon-circle">👥</div>

              <div>
                <h1>You're in the queue</h1>
                <p>Please wait, your call will start soon.</p>
              </div>
            </div>

            <div className="queue-status">

              <div className="status-item">
                <p>Your Queue Position</p>
                <h2>#7</h2>
              </div>

              <div className="divider"></div>

              <div className="status-item">
                <p>Estimated wait time</p>
                <h2>🕒 ~18 min</h2>
              </div>

            </div>

            <div className="warning-box">
              ⚠️ Any abusive, inappropriate or offensive behaviour during a
              call may result in immediate disconnection by the host.
            </div>

            <div className="bottom-row">

              <div className="info-text">
                <span>ℹ️</span>
                <div>
                  <h3>You can leave this page.</h3>
                  <p>We will notify you when it's your turn.</p>
                </div>
              </div>

              <button className="join-btn">
                📞 Join Call
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="sidebar">

            <div className="creator-card">

              <div className="avatar-wrapper-queue">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&q=80"
                  alt="Aisha"
                />
                <span className="online"></span>
              </div>

              <h2>
                Aisha ✓
              </h2>

              <p>1-on-1 Audio Call</p>

              <div className="details">

                <div>
                  <span>Session Time</span>
                  <strong>90 min</strong>
                </div>

                <div>
                  <span>Purchased Minutes</span>
                  <strong>5 min</strong>
                </div>

                <div>
                  <span>Amount Paid</span>
                  <strong>₹229</strong>
                </div>

              </div>

            </div>

            <div className="rules-card">

              <h3>Instructions / Rules</h3>

              <div className="rule">
                <span>👥</span>
                <div>
                  <strong>You're in the queue</strong>
                  <p>We will call you in order.</p>
                </div>
              </div>

              <div className="rule">
                <span>✨</span>
                <div>
                  <strong>Enjoy your talk</strong>
                  <p>Have a great conversation.</p>
                </div>
              </div>

              <div className="rule">
                <span>⚠️</span>
                <div>
                  <strong>Be respectful</strong>
                  <p>
                    Abusive behaviour may result in
                    immediate disconnection.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="features">

          <div className="feature">
            🛡️
            <div>
              <strong>100% Secure Payments</strong>
              <p>Your payments are safe.</p>
            </div>
          </div>

          <div className="feature">
            👥
            <div>
              <strong>Fair Queue System</strong>
              <p>First come, first served.</p>
            </div>
          </div>

          <div className="feature">
            🔒
            <div>
              <strong>No Recordings</strong>
              <p>Your calls are private.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}