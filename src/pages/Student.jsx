import React from 'react'
import { useEffect, useState } from 'react'
import StudentCard from '../components/StudentCard'

const getStudents = () => {
    try{
        return JSON.parse(localStorage.getItem("students")) || []
    } catch {
        return []
    }
}


const Student = () => {
    const [students, setStudents] = useState(getStudents())
  const [name, setName] = useState("")
  const [grade, setGrade] = useState("")

  useEffect(() => {
    localStorage.setItem("students",JSON.stringify(students));
  },[students])


    const addStudent = () => {
    if(!name || !grade) return;
    setStudents([...students, {id: Date.now(), name, grade: parseFloat(grade)}]);
    setName("");
    setGrade("");
  }


  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  }

  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 py-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Students</h1>

            {/* add student from */}
            <div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
                <h2 className='text-lg font-medium text-gray-900 mb-4'>Students</h2>
                <div className='flex gap-3'>
                    <input 
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />


                    <input 
                    className="w-28 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number" value={grade} onChange={(e) => setGrade(e.target.value)} placeholder='grade' />

                    <button  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200" onClick={addStudent}>Add Student</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
          {students.length === 0 && (
            <p className="text-gray-400 text-center py-8">No students yet — add one above</p>
          )}
          {students.map((s, index) => (
            <div key={s.id} className="flex items-center gap-3">
              <div className="flex-1">
                <StudentCard id={s.id} name={s.name} grade={s.grade} />
              </div>
              <button
                onClick={() => deleteStudent(index)}
                className="text-red-400 hover:text-red-600 transition duration-200 px-3 py-1"
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
