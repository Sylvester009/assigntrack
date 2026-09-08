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


export default function Submissions() {
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
                            <h2 id="pageTitle">Submissions</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">Submission history</span>
                                <h1>My Submissions</h1>
                                <p className="muted">A record of work you have submitted.</p>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="table-wrap">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Assignment</th>
                                            <th>Submitted</th>
                                            <th>Status</th>
                                            <th>Grade</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state.assignments
                                            .filter((a) => a.status !== "Pending")
                                            .map(
                                                (a) => (
                                                    <tr key={a.id}>
                                                        <td><b>{a.title}</b><br /><span className="muted">{a.course}</span></td>
                                                        <td>{a.submitted}</td>
                                                        <td><Badge status={a.status} /></td>
                                                        <td><b>{a.grade || "—"}</b></td>
                                                        <td>
                                                            <button className="text-btn"
                                                            // onClick={openDetails(${ a.id })}
                                                            >
                                                                View
                                                            </button>
                                                        </td>
                                                    </tr>

                                                ))}</tbody></table></div></div>
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
