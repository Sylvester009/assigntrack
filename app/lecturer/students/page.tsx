import SideBar from "@/app/components/sidebar";
import { state } from "@/data/data";


type BadgeProps = {
    status: string;
};

type assignmentProps = {
    assignment: any;
    action: boolean;
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

    return <span className={`badge {cls}`}>{status}</span>;
}

function initials(name: string) {
    return name
        .split(" ")
        .map((x) => x[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
}

function studentTable() {
    return (
        <div className="table-wrap">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Current assignment</th>
                        <th>Status</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {state.students.map((s) => (
                        <tr key={s.name}>
                            <td>
                                <div className="student-cell">
                                    <div className="avatar">{initials(s.name)}</div>
                                    <b>{s.name}</b>
                                </div>
                            </td>
                            <td>{s.assignment}</td>
                            <td>{<Badge status={s.status} />}</td>
                            <td>{s.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default function Students() {
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
                            <h2 id="pageTitle">Students</h2>
                        </div>
                        <div className="top-actions">
                            <button className="icon-btn" id="notificationBtn">♢</button>
                            <div className="avatar avatar-top" id="topAvatar">SO</div>
                        </div>
                    </header>
                    <section id="content" className="content">
                        <div className="welcome">
                            <div>
                                <span className="top-label">Class records</span>
                                <h1>Students</h1>
                                <p className="muted">Monitor student participation and submission records.</p>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="page-actions">
                                <input className="search" placeholder="Search students..." />
                            </div>
                            <div id="studentTable">{studentTable()}
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
