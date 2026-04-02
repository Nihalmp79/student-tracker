import { useNavigate } from "react-router-dom";

const StudentCard = ({id ,name, grade}) => {
  const isPassing = grade >= 50;
  const navigate = useNavigate();
  return(
    <div onClick={() => navigate(`/students/${id}`)} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md cursor-pointer transition duration-200">
      <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      <p className="text-gray-500 text-sm">Grade: {grade}</p>
      <span className={`text-sm font-medium ${isPassing ? "text-green-600" : "text-red-500"}`}>
        {isPassing ? "Pass" : "Fail"}
      </span>
    </div>
  )
}

export default StudentCard