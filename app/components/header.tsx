"use client";

import { Bell, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    let isAssignment = pathname.includes("assignments");
    let isSubmission = pathname.includes("submissions");
    let isFeedback = pathname.includes("feedback");
    let isStudent = pathname.includes("students");

    return (
        <header className="topbar">
            <button id="mobileMenu" className="icon-btn flex items-center justify-center">
                <Menu className="mx-auto" />
            </button>
            <div>
                <span className="top-label">Academic workspace</span>
                <h2 id="pageTitle">
                    {isAssignment ? "Assignments" : isSubmission ? "Submissions" : isFeedback ? "Feedback" : isStudent ? "Students" : "Dashboard"}
                </h2>
            </div>
            <div className="top-actions">
                <button className="icon-btn flex items-center justify-center" id="notificationBtn">
                    <Bell className="w-4 h-4" />
                </button>
                <div className="avatar avatar-top" id="topAvatar">SO</div>
            </div>
        </header>
    )
}