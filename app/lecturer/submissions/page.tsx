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

function submissionRows(filter = "all") {
    return state.students
        .filter((s) => filter === "all" || s.status === filter)
        .map(
            (s, i) =>
            (
                <tr key={s.name}>
                    <td>
                        <div className="student-cell">
                            <div className="avatar">{initials(s.name)}</div>
                            <div>
                                <b>{s.name}</b><br /><span className="muted">{s.matric}</span>
                            </div>
                        </div>
                    </td>
                    <td>{s.assignment}</td>
                    <td>{s.status === "Pending" ? "—" : "Sep " + (i + 1) + ", 2026"}</td>
                    <td>{<Badge status={s.status} />}</td>
                    <td><b>{s.grade}</b></td>
                    <td>
                        <button className="text-btn">Review</button>
                    </td>
                </tr>
            )
        )
}


export default function Submissions() {
    return (
        <>

            <div className="welcome">
                <div>
                    <span className="top-label">Assignment monitoring</span>
                    <h1>Submissions</h1>
                    <p className="muted">Track submitted, pending and late student work.</p>
                </div>
            </div>
            <div className="panel">
                <div className="page-actions">
                    <select className="search">
                        <option value="all">All statuses</option>
                        <option>Submitted</option>
                        <option>Pending</option>
                        <option>Late</option>
                    </select>
                    <button className="secondary-btn">Export report</button>
                </div>
                <div className="table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Assignment</th>
                                <th>Submitted</th>
                                <th>Status</th>
                                <th>Grade</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="submissionBody">{submissionRows()}</tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
