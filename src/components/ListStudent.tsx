import { useState } from "react";

type Student = {
  id: string;
  studentCode: string;
  fullName: string;
  birthday: string;
  email: string;
};

type Students = {
  student: Student;
  serial: number;
  handleDelete: (id: string) => void;
};

export default function ListStudent({
  student,
  serial,
  handleDelete,
}: Students) {
  return (
    <tr key={student.id}>
      <td>{serial}</td>
      <td>{student.studentCode}</td>
      <td>{student.fullName}</td>
      <td>{student.birthday}</td>
      <td>{student.email}</td>
      <td>Đang hoạt dộng</td>
      <td
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          height: 40,
        }}
      >
        <button type="button" className="btn btn-danger">
          Chặn
        </button>
        <button type="button" className="btn btn-primary">
          Sửa
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleDelete(student.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
