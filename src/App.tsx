import { useState } from "react";
import Add from "./components/Add";
import ListStudent from "./components/ListStudent";
import "./index.css";

type Student = {
  id: string;
  studentCode: string;
  fullName: string;
  birthday: string;
  email: string;
};

export default function App() {
  const [getStuLocal, setStuLocal] = useState<Student[]>(() => {
    const students = localStorage.getItem("studentList");

    // Kiểm tra xem trong local có dữ liệu chưa
    const listStudent = students ? JSON.parse(students) : [];
    return listStudent;
  });

  const saveToLocal = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStuLocal(value);
  };

  // Hàm xóa
  const handleDelete = (id: string) => {
    const findStudent = getStuLocal.findIndex((item) => item.id === id);
    if (findStudent !== -1) {
      const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không?");
      if (confirmDelete) {
        const updatedStudents = getStuLocal.filter((item) => item.id !== id);
        setStuLocal(updatedStudents);
        localStorage.setItem("studentList", JSON.stringify(updatedStudents));
      }
    }
  };
  return (
    <div>
      <Add />
      <br />
      <table
        border={1}
        style={{
          width: "100%",
        }}
      >
        <thead style={{ height: 50, textAlign: "center" }}>
          <tr>
            <th>STT</th>
            <th>Mã Sinh Viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center", height: 40 }}>
          {getStuLocal.map((student: Student, item: number) => (
            <ListStudent
              key={student.id}
              student={student}
              serial={item + 1}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
