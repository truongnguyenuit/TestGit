import React, { useState } from "react";
import { Row, Col } from "antd";
import AboutComponent from "../components/AboutComponent";

const SettingPage = () => {
  return (
    <div className="m-20 mt-[60px]">
      <Row>
        <Col span={19} >
          <div className="w-11/12">
            <div className="flex justify-between items-center">
              <p className="text-[30px] text-rose-500 ">Update Your Account</p>
              <p className="text-[12px] text-rose-500 cursor-pointer">
                Delete Account
              </p>
            </div>
            <div>
              <p className="text-[20px] font-serif">Profile Picture</p>
              <div className="flex items-center">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-[20px]"
                  src={'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/243586748_1167479430413432_5752370513016794606_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=m_b3DoDwYWoAX-RDmt5&tn=KO5AI5mWvWxfK0SY&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8HsmKodlpltHdvchWwlgR2EUHqxMPPTwpW8TTKZnvs5Q&oe=62DD7B56'}
                  alt=""
                />
                <label htmlFor="inputImg">
                  <i className="fa-solid fa-circle-user text-[30px] text-rose-500 mx-4"></i>
                  <input
                    id="inputImg"
                    className="hidden"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={''}
                  />
                </label>
              </div>
              <form onSubmit={''}>
                <div className="w-full my-4">
                  <p className="text-[20px] font-serif m-0">Username</p>
                  <input
                    className="w-full h-[33px] text-gray-500"

                    placeholder="Username"
                  />
                  <p className="p-0 m-0 ml-2 text-red-500">
                    {''}
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-[20px] font-serif m-0">Email</p>
                  <input
                    className="w-full h-[33px] text-gray-500"

                    placeholder="Email"
                  />

                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-2 rounded-[10px]"
                  >
                    Update
                  </button>
                </div>
              </form>
              <form onSubmit={''}>
                <div className="">
                  <p className="text-[20px] font-serif m-0">Old Password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="password"
                    placeholder="old password"

                  />

                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">New password</p>
                  <input
                    className="w-full h-[33px] text-gray-500"
                    type="password"
                    placeholder="New password "

                  />

                </div>
                <div>
                  <p className="text-[20px] font-serif m-0">
                    Confirm new password
                  </p>
                  <input
                    className="w-full h-[33px] mt-4 text-gray-500"
                    type="password"
                    placeholder="Confirm password"

                  />

                </div>
                <div className="w-full flex justify-center mb-8">
                  <button className="px-6 py-2 rounded-[10px] bg-blue-500 text-white">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col span={5}>
          <AboutComponent />
        </Col>
      </Row>
    </div>
  )
}

export default SettingPage