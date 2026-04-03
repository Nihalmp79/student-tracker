import { useContext, createContext } from "react"
import UseLocalStorage from "../hooks/UseLocalStorage"

const StudentContext = createContext()

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = UseLocalStorage("students", [])

    const addStudent = (newStudent) => {
        setStudents([...students, newStudent])
    }

    const deleteStudent = (index) => {
        setStudents(students.filter((_, i) => i !== index))
    }

    return(
        <StudentContext.Provider value={{students, addStudent, deleteStudent}}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudents = () => useContext(StudentContext)