"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import StudentBasicInfo from "@/components/StudentForm/StudentBasicInfo";
import GuardianInfo from "@/components/StudentForm/StudentGuardian";
import StudentInfo from "@/components/StudentForm/StudentInfo";
import LocalGuardianInfo from "@/components/StudentForm/StudentLocalGuardianInfo";
import React from "react";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
