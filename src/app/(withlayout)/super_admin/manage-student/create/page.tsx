import StepperForm from "@/components/StepperForm/StepperForm";
import StudentBasicInfo from "@/components/StudentForm/StudentBasicInfo";
import StudentGuardianInfo from "@/components/StudentForm/StudentGuardian";
import StudentInfo from "@/components/StudentForm/StudentInfo";
import StudentLocalGuardianInfo from "@/components/StudentForm/StudentLocalGuardianInfo";
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
      content: <StudentGuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentLocalGuardianInfo />,
    },
  ];
  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm steps={steps} />
    </div>
  );
};

export default CreateStudentPage;
