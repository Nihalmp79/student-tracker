import React, { useState } from 'react'

const StudentForm = ({onAdd}) => {

    const [form, setForm] = useState({
        name:"",
        grade: ""
    })
    const [errors , setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value} = e.target;
        setForm({...form, [name] : value}) 
    }

    const validate = () => {
        const newError = {};
        if(!form.name) newError.name = "Name is requied"
        if(!form.grade) newError.grade = "Grade is required"
        if(form.grade < 0 || form.grade > 100) newError.grade = "Must be between 0 and 100"
        return newError;
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        }
        onAdd({id : Date.now(), name: form.name, grade: parseFloat(form.grade)});
        setForm({name:"", grade: ""});
        setErrors({})
     }
  return (
    <form onSubmit={handleSubmit} className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
        <h2 className='text-lg font-medium text-gray-900 mb-4'>Add Student</h2>
        <div className='flex gap-3'>
            <div className='flex-1'>
                <input name='name' value={form.name} onChange={handleChange} placeholder='Student Name' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
            </div>
            <div className='w-28'>
                <input type="number" name='grade' value={form.grade} onChange={handleChange} placeholder='Grade' className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                {errors.grade && <p className='text-red-500 text-sm mt-1'>{errors.grade}</p>}
            </div>
            <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200'>Add</button>
        </div>
       

    </form>
  )
}

export default StudentForm
