import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
      Register
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:flex">
        <form className="card-body">
        <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" className="input input-bordered" required />
      </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
            <label className="label">
          </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
     
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Register
