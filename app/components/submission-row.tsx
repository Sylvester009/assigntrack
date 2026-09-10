import { state } from "@/data/data";
import Badge from "./badge";

function initials(name: string) {
    return name
        .split(" ")
        .map((x) => x[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
}

export function submissionRows(filter = "all") {
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
