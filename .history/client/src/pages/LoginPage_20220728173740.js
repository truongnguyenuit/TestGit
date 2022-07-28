import React from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/authContext';

import { Formik } from 'formik';
import Yup
const LoginPage = () => {
  //Context
  const { loginUser } = useContext(AuthContext)

  //Local State
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const { username, password } = loginForm

  const onChangeLoginForm = event =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    })
  const login = async event => {
    event.preventDefault()
    try {

      const loginData = await loginUser(loginForm)
      console.log(loginData)
      alert(loginData.message)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='  mt-[120px] flex justify-center'>
      <div className="bg-white w-[450px] flex flex-col items-center gap-0.5 drop-shadow-lg p-8">

        <span className="text-[50px] font-semibold">
          BLOG
        </span>

        <span className="text-[20px] font-semibold">
          Login To Post New Story
        </span>

        <div className="w-full h-[15px]" />

        <form onSubmit={login} className="flex flex-col gap-3 w-full">

          <Row>
            <div className="w-full h-full flex rounded-[8px] overflow-hidden">
              <Col span={4}>
                <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                  <i className="fa-solid fa-user-large text-[20px] text-stone-500"></i>
                </div>
              </Col>
              <Col span={20}>
                <Input
                  type="text"
                  placeholder="Username"
                  name='username'
                  value={username}
                  onChange={onChangeLoginForm}
                  style={{
                    height: 45,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                />
              </Col>
            </div>
          </Row>

          <Row>
            <div className="w-full h-full flex rounded-[8px] overflow-hidden">
              <Col span={4}>
                <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                  <i className="fa-solid fa-lock text-[20px] text-stone-500"></i>
                </div>
              </Col>
              <Col span={20}>
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  name="password"
                  value={password}
                  onChange={onChangeLoginForm}
                  style={{
                    height: 45,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                />
              </Col>
            </div>
          </Row>

          <Row>
            <Col span={24}>
              <button
                type="submit"
                className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
              >
                Login
              </button>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full flex justify-between">
                <Link to={''}>Forgot Password?</Link>
                <Link to={pathName.register}>Create Account</Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full h-[1px] p-0 bg-gray-200 relative">
                <p className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] px-2 bg-white">
                  Login by
                </p>
              </div>
            </Col>
          </Row>
          <div className="w-full h-[5px]" />
          <Row>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-facebook-f text-blue-500"></i>
                <span className="px-2">Facebook</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-google text-red-500"></i>
                <span className="px-2">Google</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-github"></i>
                <span className="px-2">Github</span>
              </Button>
            </Col>
          </Row>

        </form>
      </div>

    </div>
  )
}

export default LoginPage