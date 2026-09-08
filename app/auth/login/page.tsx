import Link from "next/link";

export default function Login() {
  return (
    <>
      <div id="toast" className="toast"></div>

      <div id="loginScreen" className="login-screen">
        <div className="login-brand">
          <div className="brand-mark">A</div>
          <div>
            <strong>AssignTrack</strong>
            <span>Academic submission hub</span>
          </div>
        </div>

        <div className="login-card">
          <div className="eyebrow">Student Assignment Submission & Tracking System</div>
          <h1>Keep every assignment<br /><span>on track.</span></h1>
          <p>Submit work, monitor deadlines, and receive lecturer feedback from one simple platform.</p>

          <div className="demo-login">
            <label>Choose a demo role</label>
            <div className="role-grid">
              <button className="role-option active" data-role="student">
                <span className="role-icon">S</span>
                <span><b>Student</b><small>Submit & track work</small></span>
              </button>
              <button className="role-option" data-role="lecturer">
                <span className="role-icon">L</span>
                <span><b>Lecturer</b><small>Create & review</small></span>
              </button>
              <button className="role-option" data-role="admin">
                <span className="role-icon">A</span>
                <span><b>Administrator</b><small>Manage records</small></span>
              </button>
            </div>
            <Link href="/">
              <button id="loginBtn" className="primary-btn full">Enter demo dashboard →</button>
            </Link>
            <small className="demo-note"></small>
          </div>
        </div>
      </div>

      <div id="app" className="app hidden">
        <aside className="sidebar">
          <div className="sidebar-brand">
            <div className="brand-mark">A</div>
            <div><strong>AssignTrack</strong><small>Submission hub</small></div>
          </div>

          <nav id="nav"></nav>

          <div className="sidebar-bottom">
            <div className="mini-user">
              <div id="userAvatar" className="avatar">SO</div>
              <div><b id="userName">Solomon Ola</b><small id="userRole">Student</small></div>
            </div>
            <button id="logoutBtn" className="logout">Sign out</button>
          </div>
        </aside>

        <main className="main">
          <header className="topbar">
            <button id="mobileMenu" className="icon-btn">☰</button>
            <div>
              <span className="top-label">Academic workspace</span>
              <h2 id="pageTitle">Dashboard</h2>
            </div>
            <div className="top-actions">
              <button className="icon-btn" id="notificationBtn">♢</button>
              <div className="avatar avatar-top" id="topAvatar">SO</div>
            </div>
          </header>
          <section id="content" className="content"></section>
        </main>
      </div>

      <div id="modal" className="modal hidden">
        <div className="modal-backdrop"></div>
        <div className="modal-card">
          <button className="modal-close" id="modalClose">×</button>
          <div id="modalContent"></div>
        </div>
      </div>
    </>
  );
}
