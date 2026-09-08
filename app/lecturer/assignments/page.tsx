import SideBar from "@/app/components/sidebar";
import { state } from "@/data/data";

type BadgeProps = {
    status: string;
};

function Badge({ status }: BadgeProps) {
    const cls =
        status === "Submitted" || status === "Reviewed"
            ? "success"
            : status === "Late"
                ? "danger"
                : status === "Pending" || status === "Awaiting review"
                    ? "warning"
                    : "neutral";

    return <span className={`badge ${cls}`}>{status}</span>;
}


export default function Assignments() {
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
                            <h2 id="pageTitle">Assignments</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">Coursework management</span>
                                <h1>Assignments</h1>
                                <p className="muted">Create and manage assignments and deadlines.</p>
                            </div>
                            <button className="primary-btn">+ Create assignment</button>
                        </div>
                        <div className="assignment-card-grid">
                            {state.assignments.map((a) => (
                                <div className="assignment-card" key={a.id}>
                                    <span className="course-tag">{a.course}</span>
                                    <h3>{a.title}</h3>
                                    <p>Submission deadline: {a.deadline}</p>
                                    <div className="card-meta">
                                        <span>{a.lecturer}</span>
                                        {<Badge status={a.status} />}
                                    </div>
                                    <div className="card-buttons">
                                        <button className="small-btn">View submissions</button>
                                        <button className="small-btn alt">Details</button>
                                    </div>
                                </div>
                            ))}
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
