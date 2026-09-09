import { state } from "@/data/data";
import Badge from "../components/badge";
import StudentLayout from "../studentLayout";


export default function Submissions() {
    return (
        <StudentLayout>
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
        </StudentLayout>
    );
}
