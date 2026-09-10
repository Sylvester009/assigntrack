"use client";
import { ArrowUp, BarChart, Circle, Clipboard, Grid, HomeIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IconName =
    | "home"
    | "clipboard"
    | "arrowUp"
    | "circle"
    | "user"
    | "grid"
    | "barChart";

type NavItem = [
    id: string,
    icon: IconName,
    label: string,
    link: string
];

const navConfig: Record<string, NavItem[]> = {
    student: [
        ["dashboard", "home", "Dashboard", "/"],
        ["assignments", "clipboard", "My Assignments", "/assignments"],
        ["submissions", "arrowUp", "Submissions", "/submissions"],
        ["feedback", "circle", "Feedback", "/feedback"],
    ],
    lecturer: [
        ["dashboard", "home", "Dashboard", "/lecturer/dashboard"],
        ["assignments", "clipboard", "Assignments", "/lecturer/assignments"],
        ["submissions", "arrowUp", "Submissions", "/lecturer/submissions"],
        ["students", "user", "Students", "/lecturer/students"],
    ],
    admin: [
        ["dashboard", "home", "Dashboard", "/admin/dashboard"],
        ["users", "user", "Users", "/admin/users"],
        ["courses", "grid", "Courses", "/admin/courses"],
        ["assignments", "clipboard", "Assignments", "/admin/assignments"],
        ["reports", "barChart", "Reports", "/admin/reports"],
    ],
};

export default function SideBar() {
    const pathname = usePathname();
    const lecturer = pathname.includes("lecturer");
    const admin = pathname.includes("admin");

    const icons = {
        home: <HomeIcon />,
        clipboard: <Clipboard />,
        arrowUp: <ArrowUp />,
        circle: <Circle />,
        user: <User />,
        grid: <Grid />,
        barChart: <BarChart />,
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-mark">A</div>
                <div><strong>AssignTrack</strong><small>Submission hub</small></div>
            </div>

            <nav id="nav">
                {lecturer ? navConfig["lecturer"].map(([id, icon, label, link]) => {
                    const isActive = pathname === link;

                    return (

                        <Link href={link} key={id} className={`nav-item flex gap-4 ${isActive ? "bg-[#1b3b32] text-white" : "bg-transparent text-[#9db1aa]"}`}>

                            <span className="nav-icon flex items-center w-px h-px">{icons[icon]}</span>
                            {label}

                        </Link>
                    )
                }) : admin ? navConfig["admin"].map(([id, icon, label, link]) => {
                    const isActive = pathname === link;

                    return (

                        <Link href={link} key={id} className={`nav-item flex gap-4 ${isActive ? "bg-[#1b3b32] text-white" : "bg-transparent text-[#9db1aa]"}`}>

                            <span className="nav-icon flex items-center w-px h-px">{icons[icon]}</span>
                            {label}

                        </Link>
                    )
                }) : navConfig["student"].map(([id, icon, label, link]) => {
                    const isActive = pathname === link;
                    return (

                        <Link href={link} key={id} className={`nav-item flex gap-4 ${isActive ? "bg-[#1b3b32] text-white" : "bg-transparent text-[#9db1aa]"}`}>

                            <span className="nav-icon flex items-center w-px h-px">{icons[icon]}</span>
                            {label}

                        </Link>
                    )
                })}

            </nav>

            <div className="sidebar-bottom">
                <div className="mini-user">
                    <div id="userAvatar" className="avatar">SO</div>
                    <div><b id="userName">Solomon Ola</b>
                        <small id="userRole">{lecturer ? "Lecturer" : admin ? "Admin" : "Student"}</small>
                    </div>
                </div>
                <Link href="./auth/login" id="logoutBtn" className="logout">Sign out</Link>
            </div>
        </aside>
    )
}