import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const getStudents = () => {
        try {
            return JSON.parse(localStorage.getItem('students')) || [];
        } catch{
           return []; 
        }
    }

const StudentDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const students = getStudents();


    const student = students.find((s) => s.id === parseInt(id));
    
    if(!student)
        return(
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className='text-center'>
                    <p className='text-gray-500 mb-4'>Students not found</p>
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        onClick={() => navigate("/students")}>Go Back</button>
                </div>
                
            </div>
        )
      
    const getScore = () => {
    if (student.grade >= 90) return { label: "Excellent", color: "text-green-600" }
    if (student.grade >= 70) return { label: "Good", color: "text-blue-600" }
    if (student.grade >= 50) return { label: "Average", color: "text-yellow-600" }
    return { label: "Needs improvement", color: "text-red-500" }
  }

  const score = getScore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <button
          onClick={() => navigate("/students")}
          className="text-gray-500 hover:text-gray-700 mb-6 flex items-center gap-1 transition duration-200"
        >
          Back to students
        </button>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
          <p className="text-gray-500 mb-6">Student detail</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Grade</p>
              <p className="text-2xl font-bold text-gray-900">{student.grade}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <p className={`text-2xl font-bold ${student.grade >= 50 ? "text-green-600" : "text-red-500"}`}>
                {student.grade >= 50 ? "Pass" : "Fail"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 col-span-2">
              <p className="text-sm text-gray-500 mb-1">Performance</p>
              <p className={`text-xl font-bold ${score.color}`}>{score.label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StudentDetails
