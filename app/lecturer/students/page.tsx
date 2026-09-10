import { studentTable } from "@/app/components/student-table";
import { state } from "@/data/data";



export default function Students() {
    return (
        <>
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

        </>
    );
}
