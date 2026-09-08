import { state } from "@/data/data";
import SideBar from "../components/sidebar";
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

function assignmentCard(a: { id: any; title: any; course: any; lecturer?: string; deadline: any; status: any; submitted?: string; feedback?: string; grade?: string; }) {
    return (
        <div className="assignment-card" id={a.id}>
            <span className="course-tag">{a.course}</span>
            <h3>{a.title}</h3>
            <p>Complete the assigned academic task and upload your work before the submission deadline.</p>
            <div className="card-meta">
                <span>Due {a.deadline}</span>
                {Badge(a.status)}
            </div>
            <div className="card-buttons">
                <button className="small-btn alt">Details</button>
                {a.status === "Pending" ? (
                    <button className="small-btn"
                    // onClick="openSubmit(${a.id})"
                    >
                        Submit work
                    </button>
                ) : ""}
            </div>
        </div>);
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
                                <span className="top-label">Your coursework</span>
                                <h1>My Assignments</h1>
                                <p className="muted">View instructions, deadlines and submission status.</p>
                            </div>
                        </div>
                        <div className="assignment-card-grid">
                            {state.assignments.map((a) => assignmentCard(a))}
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
