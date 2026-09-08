import SideBar from "@/app/components/sidebar";


export default function Courses() {
    return (
        <>
            <div id="toast" className="toast"></div>

            <div id="app" className="app">
                <SideBar />

                <main className="main">
                    <header className="topbar">
                        <button id="mobileMenu" className="icon-btn">☰</button>
                        <div>
                            <span className="top-label">Academic workspace</span>
                            <h2 id="pageTitle">Courses</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">Administration</span>
                                <h1>Courses</h1>
                                <p className="muted">Maintain course records used by assignments.</p>
                            </div>
                            <button className="primary-btn">+ Add new</button>
                        </div>
                        <div className="panel">
                            <div className="empty">
                                <h3>32 active courses</h3>
                                <p>Management table and CRUD operations would connect to the database in the full implementation.</p>
                            </div>
                        </div>
                    </section>
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
