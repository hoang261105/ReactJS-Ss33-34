import Sort from "./Sort";
import Form from "./Form";
import { useState } from "react";

type Student = {
  id: string;
  studentCode: string;
  fullName: string;
  birthday: string;
  email: string;
};

export default function Add() {
  const [getStuLocal, setStuLocal] = useState<Student[]>(() => {
    const students = localStorage.getItem("studentList");

    // Kiểm tra xem trong local có dữ liệu chưa
    const listStudent = students ? JSON.parse(students) : [];
    return listStudent;
  });

  // Hàm thêm mới
  const addStudent = (newStudent: Student) => {
    const updatedStudents = [...getStuLocal, newStudent];
    setStuLocal(updatedStudents);
    localStorage.setItem("studentList", JSON.stringify(updatedStudents));
  };
  return (
    <div className="body">
      <div className="container">
        <div className="left">
          <b style={{ fontSize: 25 }}>Quản lý sinh viên</b>
        </div>
        <div className="right">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Thêm mới sinh viên
          </button>
          <Form addStudent={addStudent} students={getStuLocal} />
        </div>
      </div>
      <br />
      <Sort />
      <br />
    </div>
  );
}
