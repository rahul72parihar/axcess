import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import musicImg from "../assets/musicicon.png";
import { TbShieldLock, TbUser, TbLogout, TbChevronDown } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

import "./Header.css";

function AxcessLogo() {
  return (
    <div className="ax-header-logo">
      <img src={musicImg} alt="Axcess" className="ax-header-logo-icon" />
      <span className="ax-header-logo-text">Axcess</span>
    </div>
  );
}

function UserMenu({ userName, avatarUrl, onProfile, onPrivacy, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="ax-user-menu" ref={menuRef}>
      <button
        type="button"
        className="ax-header-user-box ax-user-menu-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <img src={avatarUrl} alt={userName} />
        <span>{userName}</span>
        <TbChevronDown
          size={16}
          className={`ax-user-menu-chevron ${open ? "ax-user-menu-chevron--open" : ""}`}
        />
      </button>

      {open && (
        <div className="ax-user-menu-dropdown" role="menu">
          <button
            type="button"
            role="menuitem"
            className="ax-user-menu-item"
            onClick={() => {
              setOpen(false);
              onProfile();
            }}
          >
            <TbUser size={16} />
            Profile
          </button>

          <button
            type="button"
            role="menuitem"
            className="ax-user-menu-item"
            onClick={() => {
              setOpen(false);
              onPrivacy();
            }}
          >
            <TbShieldLock size={16} />
            Privacy
          </button>

          <div className="ax-user-menu-divider" />

          <button
            type="button"
            role="menuitem"
            className="ax-user-menu-item ax-user-menu-item--danger"
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
          >
            <TbLogout size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default function Header({
  mode = "default", // 'default' | 'call' | 'queue' | 'create'
  loggedIn = false,
  userName = "Rohan",
  userAvatar = "https://i.pravatar.cc/100?img=12",
  showAuthButtons = false,
  onLogout,
  onLogin,
  onProfile,
  onPrivacy,
  setShowEndCallModal,
}) {
  const navigate = useNavigate();

  const handleLogout = () =>
    typeof onLogout === "function" ? onLogout() : navigate("/");
  const handleLogin = () =>
    typeof onLogin === "function" ? onLogin() : navigate("/session");
  const handleProfile = () =>
    typeof onProfile === "function" ? onProfile() : navigate("/profile");
  const handlePrivacy = () =>
    typeof onPrivacy === "function" ? onPrivacy() : navigate("/privacy");

  if (mode === "call") {
    return (
      <header className="ax-header ax-header--call">
        <AxcessLogo />

        <button
          className="ax-header-end-call"
          onClick={() => setShowEndCallModal(true)}
          type="button"
        >
          End Call
        </button>
      </header>
    );
  }

  if (mode === "queue") {
    return (
      <header className="ax-header ax-header--queue">
        <AxcessLogo />

        <div className="ax-header-queue-right">
          <div className="ax-header-secure">
            <MdSecurity size={16} />
            Secure Payment
          </div>

          <UserMenu
            userName={userName}
            avatarUrl={userAvatar}
            onProfile={handleProfile}
            onPrivacy={handlePrivacy}
            onLogout={handleLogout}
          />
        </div>
      </header>
    );
  }

  if (mode === "create") {
    return (
      <header className="ax-header ax-header--default">
        <div className="ax-header-left">
          <AxcessLogo />
        </div>

        <div className="ax-header-right">
          <UserMenu
            userName={userName}
            avatarUrl={userAvatar}
            onProfile={handleProfile}
            onPrivacy={handlePrivacy}
            onLogout={handleLogout}
          />
        </div>
      </header>
    );
  }

  return (
    <header className="ax-header ax-header--default">
      <div className="ax-header-left">
        <AxcessLogo />
      </div>

      <div className="ax-header-right">
        <div className="ax-header-secure">
          <TbShieldLock size={18} />
          Secure Payment
        </div>

        {showAuthButtons &&
          (loggedIn ? (
            <UserMenu
              userName={userName}
              avatarUrl={userAvatar}
              onProfile={handleProfile}
              onPrivacy={handlePrivacy}
              onLogout={handleLogout}
            />
          ) : (
            <button
              className="ax-header-auth-btn"
              onClick={handleLogin}
              type="button"
            >
              <TbUser size={18} />
              Login / Signup
            </button>
          ))}
      </div>
    </header>
  );
}