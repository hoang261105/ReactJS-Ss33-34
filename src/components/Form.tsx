import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Student = {
  id: string;
  studentCode: string;
  fullName: string;
  birthday: string;
  email: string;
};

type FormProps = {
  students: Student[];
  addStudent: (student: Student) => void;
};

export default function Form({ addStudent, students }: FormProps) {
  const [student, setStudent] = useState<Student>({
    id: uuidv4(),
    studentCode: "",
    fullName: "",
    birthday: "",
    email: "",
  });
  const [error, setError] = useState<any>({
    studentCodeError: false,
    fullNameError: false,
    birthdayError: false,
    emailError: false,
  });

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    setError((prevError: any) => ({
      ...prevError,
      [`${name}Error`]: value === "",
    }));

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const hasError = Object.values(student).some((value) => value === "");
    if (hasError) {
      setError({
        studentCodeError: student.studentCode === "",
        fullNameError: student.fullName === "",
        birthdayError: student.birthday === "",
        emailError: student.email === "",
      });
      return;
    }

    addStudent(student);
    setStudent({
      id: uuidv4(),
      studentCode: "",
      fullName: "",
      birthday: "",
      email: "",
    });
    window.location.reload();
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Thêm mới sinh viên
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="studentCode" className="col-form-label">
                  Mã sinh viên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentCode"
                  onChange={handleChange}
                  name="studentCode"
                  value={student.studentCode}
                />
                {error.studentCodeError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    Mã sinh viên không được để trống
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="fullName" className="col-form-label">
                  Họ và tên
                </label>
                <input
                  className="form-control"
                  id="fullName"
                  onChange={handleChange}
                  name="fullName"
                  value={student.fullName}
                />
                {error.fullNameError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    Tên không được để trống
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="birthday" className="col-form-label">
                  Ngày sinh
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  onChange={handleChange}
                  name="birthday"
                  value={student.birthday}
                />
                {error.birthdayError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    Ngày sinh không được để trống
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  value={student.email}
                />
                {error.emailError && (
                  <span style={{ color: "red", fontSize: 12 }}>
                    Email không được để trống
                  </span>
                )}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
