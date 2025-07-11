'use client';
import React, { useState } from "react";
import AdminDashboardSkeleton from "@/components/skeleton/dashboard";
import LawyerDashboard from "./Lawyer/LaywerDashboard";
import { ROLES } from "@/types/auth"; // assuming this enum is available
import { useAppSelector } from "@/hooks/redux";

import UnitHeadDashboard from "./UnitHeadDashboard";
import AdminDashboard from "./AdminDashboard";



export default function Dashboard() {
    const { data: user } = useAppSelector((state) => state.profile);
    const role = user?.role;


    // Platform Admin / Director roles
    if (role === ROLES.ADMIN || role === ROLES.PLATFORM_ADMIN || role === ROLES.DIRECTOR_GENERAL
        || role === ROLES.ZONAL_DIRECTOR || role === ROLES.STATE_COORDINATOR || role === ROLES.CENTRE_COORDINATOR) {
        return <AdminDashboard />;
    }

    if (role === ROLES.DECONGESTION_UNIT_HEAD || role === ROLES.PARALEGAL || role === ROLES.PDSS ||
        role === ROLES.CIVIL_JUSTICE_DEPT || role === ROLES.CRIMINAL_JUSTICE_DEPT ||
        role === ROLES.OSCAR_UNIT_HEAD || role === ROLES.PREROGATIVE_OF_MERCY_UNIT_HEAD) {
        return (<UnitHeadDashboard />);
    }

    // Lawyers
    if (role === ROLES.PRO_BONO_LAWYER || role === ROLES.LACON_LAWYER) {
        return <LawyerDashboard user={user?.first_name ?? "LAWYER"} />;
    }

    // Default fallback
    return <AdminDashboardSkeleton />;
}
