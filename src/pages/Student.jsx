import React from 'react'
import StudentCard from '../components/StudentCard'
import StudentForm from "../components/StudentForm"
import UseLocalStorage from '../hooks/UseLocalStorage'
import { useStudents } from '../Context/StudentContext'




const Student = () => {
  const {students, addStudent, deleteStudent} = useStudents()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Students</h1>

        {/* form component handles all input logic */}
        <StudentForm onAdd={addStudent} />

        {/* student list */}
        <div className="grid grid-cols-1 gap-4">
          {students.length === 0 && (
            <p className="text-gray-400 text-center py-8">No students yet</p>
          )}
          {students.map((s, index) => (
            <div key={s.id} className="flex items-center gap-3">
              <div className="flex-1">
                <StudentCard id={s.id} name={s.name} grade={s.grade} />
              </div>
              <button
                onClick={() => deleteStudent(index)}
                className="text-red-400 hover:text-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Student
