"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navConfig = {
    student: [
        ["dashboard", "⌂", "Dashboard", "/"],
        ["assignments", "▤", "My Assignments", "/assignments"],
        ["submissions", "↑", "Submissions", "/submissions"],
        ["feedback", "◌", "Feedback", "/feedback"],
    ],
    lecturer: [
        ["dashboard", "⌂", "Dashboard", "/lecturer/dashboard"],
        ["assignments", "▤", "Assignments", "/lecturer/assignments"],
        ["submissions", "↑", "Submissions", "/lecturer/submissions"],
        ["students", "♙", "Students", "/lecturer/students"],
    ],
    admin: [
        ["dashboard", "⌂", "Dashboard", "/admin/dashboard"],
        ["users", "♙", "Users", "/admin/users"],
        ["courses", "▦", "Courses", "/admin/courses"],
        ["assignments", "▤", "Assignments", "/admin/assignments"],
        ["reports", "▥", "Reports", "/admin/reports"],
    ],
};

export default function SideBar() {
    const pathname = usePathname();
    const lecturer = pathname.includes("lecturer");
    const admin = pathname.includes("admin");

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-mark">A</div>
                <div><strong>AssignTrack</strong><small>Submission hub</small></div>
            </div>

            <nav id="nav">
                {lecturer ? navConfig["lecturer"].map(([id, icon, label, link]) => {
                    const isActive = pathname === link;
                    console.log({
                        pathname,
                        link,
                        isActive,
                    });

                    return (

                        <Link href={link} key={id} className={`nav-item flex gap-4 ${isActive ? "bg-[#1b3b32] text-white" : "bg-transparent text-[#9db1aa]"}`}>

                            <span className="nav-icon">{icon}</span>
                            {label}

                        </Link>
                    )
                }) : admin ? navConfig["admin"].map(([id, icon, label, link]) => {
                    const isActive = pathname === link;
                    console.log({
                        pathname,
                        link,
                        isActive,
                    });

                    return (

                        <Link href={link} key={id} className={`nav-item flex gap-4 ${isActive ? "bg-[#1b3b32] text-white" : "bg-transparent text-[#9db1aa]"}`}>

                            <span className="nav-icon">{icon}</span>
                            {label}

                        </Link>
                    )
                }) : navConfig["student"].map(([id, icon, label, link]) => {
                    const isActive = pathname === link;
                    console.log({
                        pathname,
                        link,
                        isActive,
                    });

                    return (

                        <Link href={link} key={id} className={`nav-item flex gap-4 ${isActive ? "bg-[#1b3b32] text-white" : "bg-transparent text-[#9db1aa]"}`}>

                            <span className="nav-icon">{icon}</span>
                            {label}

                        </Link>
                    )
                })}

            </nav>

            <div className="sidebar-bottom">
                <div className="mini-user">
                    <div id="userAvatar" className="avatar">SO</div>
                    <div><b id="userName">Solomon Ola</b><small id="userRole">Student</small></div>
                </div>
                <Link href="./auth/login" id="logoutBtn" className="logout">Sign out</Link>
            </div>
        </aside>
    )
}