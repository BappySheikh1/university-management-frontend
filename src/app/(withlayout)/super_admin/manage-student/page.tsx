"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/authService";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudentPage = () => {
  const { role: base } = getUserInfo() as any;
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          // { label: `student`, link: `/${base}/student` },
        ]}
      />
      <ActionBar title="Student List">
        <Link href={`/super_admin/manage-student/create`}>
          <Button>Create Student</Button>
        </Link>
      </ActionBar>
    </>
  );
};

export default ManageStudentPage;
