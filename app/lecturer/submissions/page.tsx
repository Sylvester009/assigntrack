import { submissionRows } from "@/app/components/submission-row";

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
