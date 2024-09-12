// src/pages/ProfileOverview.tsx
import React from "react";

const ProfileOverview: React.FC = () => {
  return (
    <div className="w-full py-4 lg:pl-0 xl:pl-0 lg:px-6 xl:px-6 px-4 justify-center">
      <section className="min-w-full flex lg:flex-row flex-col justify-between bg-white p-4 rounded-3xl self-center ">
        <div className="user-des lg:w-1/2 xl:w-1/2 w-full flex flex-col gap-5">
          <div className="user flex flex-row gap-5 items-center w-full ">
            <img
              src="/src/assets/avatar.png"
              className="w-28 h-28 rounded-full"
              alt="Logo"
            />
            <div className="name w-full lg:w-1/2 flex flex-col gap-1">
            <h1 className="user-name text-2xl font-semibold text-gray-800  ">
              Aiden Max
            </h1>
            <p className="user-title text-gray-500">Software Engineer</p>
            </div>
          </div>
          <p className="user-description text-gray-500">
            Hi, I’m Aiden Max: If you can’t decide, the answer is no. If two
            equally difficult paths, choose the one more painful in the short
            term (pain avoidance is creating an illusion of equality).
          </p>
        </div>
        <div className="border border-gray-300 lg:mx-4 xl:mx-4 lg:my-0 xl:my-0 my-4 "></div>
        <div className="user-info lg:w-1/2 xl:w-1/2 w-full">
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Email
          </h1>
          <p className="user-info-email text-gray-500">p8jQs@example.com</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Phone
          </h1>
          <p className="user-info-phone text-gray-500">+1 123 456 7890</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Location
          </h1>
          <p className="user-info-location text-gray-500">San Francisco, CA</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Social
          </h1>
          <p className="user-info-social text-gray-500">Twitter, LinkedIn</p>
        </div>
      </section>
      <section className="w-full"></section>
      <section className="w-full"></section>
    </div>
  );
};

export default ProfileOverview;
