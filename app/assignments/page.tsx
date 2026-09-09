import { state } from "@/data/data";
import { assignmentCard } from "../components/assignment-card";
import StudentLayout from "../studentLayout";

export default function Assignments() {
    return (
        <StudentLayout>
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
        </StudentLayout>
    );
}
