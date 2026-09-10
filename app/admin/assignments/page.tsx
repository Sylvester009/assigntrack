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

            <div className="welcome">
                <div>
                    <span className="top-label">System records</span>
                    <h1>Assignments</h1>
                    <p className="muted">All assignments across the platform.</p>
                </div>
            </div>
            <div className="panel">
                <div className="table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Assignment</th>
                                <th>Course</th>
                                <th>Lecturer</th>
                                <th>Deadline</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.assignments.map((a) => (
                                <tr key={a.id}>
                                    <td>
                                        <b>{a.title}</b>
                                    </td>
                                    <td>{a.course}</td>
                                    <td>{a.lecturer}</td>
                                    <td>{a.deadline}</td>
                                    <td>{<Badge status={a.status} />}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
