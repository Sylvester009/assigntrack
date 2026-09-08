"use client";
import { navConfig } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="brand-mark">A</div>
                <div><strong>AssignTrack</strong><small>Submission hub</small></div>
            </div>

            <nav id="nav">

                {navConfig["student"].map(([id, icon, label, link]) => {
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