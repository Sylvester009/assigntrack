import { state } from "@/data/data";
import StudentLayout from "../studentLayout";
import Badge from "../components/badge";



export default function Feedback() {
    return (
        <StudentLayout>
            <div className="welcome">
                <div>
                    <span className="top-label">Lecturer comments</span>
                    <h1>Feedback</h1>
                    <p className="muted">Review feedback attached to your submissions.</p>
                </div>
            </div>{state.assignments
                .filter((a) => a.feedback)
                .map(
                    (a) => (
                        <div className="panel mb-3" key={a.id}>
                            <div className="panel-head">
                                <div>
                                    <h3>{a.title}</h3>
                                    <span className="muted">{a.course} • Grade {a.grade}</span>
                                </div><Badge status="Reviewed" /></div>
                            <div className="feedback-box"><b>Lecturer feedback</b>
                                <p>{a.feedback}</p>
                            </div>
                        </div>
                    ))
            }
        </StudentLayout>
    );
}
