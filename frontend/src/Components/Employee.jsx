import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStudentRequest } from '../redux/actions/studentAction';
import { useEffect } from 'react';
import { PiStudentFill } from "react-icons/pi";
import { BiSolidShow, BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";


function Wallet(props) {

    const studentsData = props && props.studentData && props.studentData.students;
    console.log("DATAS", props && props)
    console.log("VARIABLE STUDENTS", studentsData);

    function extractStudentsData(studentsData) {
        const students = [];
        for (let i = 0; i < studentsData.length; i++) {
            const student = studentsData[i]; // Retrieve each student
            students.push(student); // Add the student to the 'students' array
        }
        return students;
    }

    const studentsDetails = extractStudentsData(studentsData);

    console.log("FUNCTION SA STUDENTDATA", studentsDetails);

    useEffect(() => {
        props.fetchStudentRequest();
    }, []);

    return (
        <div>

            <dialog id="view_employee" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">View Employee</h3>
                        <div className='justify-items-end'>
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <dialog id="edit_employee" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Edit Employee</h3>
                        <div className='justify-items-end'>
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <dialog id="delete_employee" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Are you sure you want to delete this Employee?</h3>
                        <div className='justify-items-end'>
                            <button className="btn">Yes</button>
                            <button className="btn">No</button>
                        </div>
                    </form>
                </div>
            </dialog>


            <div className="flex">
                <div className="flex-none w-64 h-14">
                </div>
                <div className="flex-1 w-64">
                    <div className="flex-1 w-64">
                        <div className="card w-96 h-30 bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-xl">
                            <div className="card-body">
                                <div class="items-center">
                                    <div class="inline-block">
                                        <PiStudentFill className='text-black h-40 w-40' />
                                    </div>
                                    <div class="inline-block ">
                                        <span className="card-title text-black text-9xl pt-5 pb-15">
                                            {studentsDetails.length !== 0 ? studentsDetails.length : "0"}
                                        </span>

                                    </div>
                                </div>

                                {/**
                            
                            */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table bg-white">

                        <thead className="bg-base-200">
                            <div>STUDENTS LIST</div>
                            <tr className="hover">
                                <th>Id</th>
                                <th>FULLNAME</th>
                                <th>AGE</th>
                                <th>ADDRESS</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>

                        {studentsDetails.map((student, index) => (

                            student.length !== 0 && student ? (
                                <>
                                    <tr key={student.id} className="hover">
                                        <td className="hover">{student.id}</td>
                                        <td className="hover">{student.std_fname} {student.std_mname} {student.std_lname}</td>
                                        <td className="hover">{student.std_age}</td>
                                        <td className="hover">{student.std_address}</td>
                                        <td>
                                            <div className="join join-vertical lg:join-horizontal">
                                                <button className="btn join-item" onClick={() => document.getElementById('view_employee').showModal()}><BiSolidShow /></button>
                                                <button className="btn join-item" onClick={() => document.getElementById('edit_employee').showModal()}><BiEditAlt /></button>
                                                <button className="btn join-item" onClick={() => document.getElementById('delete_employee').showModal()} ><MdDelete /></button>
                                            </div>


                                        </td>
                                    </tr>
                                </>
                            ) : (
                                <>
                                    <div className="join">
                                        <div>
                                            <div>
                                                <input className="input input-bordered join-item" placeholder="Search" />
                                            </div>
                                        </div>
                                        <select className="select select-bordered join-item">
                                            <option disabled selected>Filter</option>
                                            <option>Sci-fi</option>
                                            <option>Drama</option>
                                            <option>Action</option>
                                        </select>
                                        <div className="indicator">
                                            <span className="indicator-item badge badge-secondary">new</span>
                                            <button className="btn join-item">Search</button>
                                        </div>
                                    </div>
                                </>

                            )
                        ))
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    console.log("DATA", state.studentReducer)
    return {
        studentData: state.studentReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudentRequest: () => dispatch(fetchStudentRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);