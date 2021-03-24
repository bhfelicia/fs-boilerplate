import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SingleStudent = ({ student }) => {
  if (!student) {
    return null;
  }
  return (
    <div className="single-student">
      <h1>{student.fullName}</h1>
      <img src={student.image}></img>
      <h2>{student.email}</h2>
      <p>GPA: {student.gpa}</p>
      <Link to={`/campuses/${student.campus.id}`}>
        <h3>{student.campus.name}</h3>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ students }, otherProps) => {
  const student = students.find(
    (student) => student.id === Number(otherProps.match.params.id)
  );
  return { student };
};

export default connect(mapStateToProps)(SingleStudent);