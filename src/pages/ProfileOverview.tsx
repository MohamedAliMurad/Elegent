// src/pages/ProfileOverview.tsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMessage,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, AvatarGroup, Switch } from "@mui/material";

interface CardProps {
  title: string;
  content: string;
  imgUri: string;
  avatars: string[];
}

const ProfileOverview: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      title: "Modern",
      content:
        "As Uber works through a huge amount of internal management turmoil.",
      imgUri: "/src/assets/modern.png",
      avatars: [
        "/src/assets/avatar.png",
        "/src/assets/avatar-1.png",
        "/src/assets/avatar-2.png",
        "/src/assets/avatar-3.png",
      ],
    },
    {
      title: "Scandinavian",
      content:
        "Different people have different taste, and various types of music.",
      imgUri: "/src/assets/Scandinavian.png",
      avatars: [
        "/src/assets/avatar-3.png",
        "/src/assets/avatar-6.png",
        "/src/assets/avatar.png",
        "/src/assets/avatar-5.png",
      ],
    },
    {
      title: "Minimalist",
      content:
        "Music is something that everyone has their own specific opinion about.",
      imgUri: "/src/assets/Minimalist.png",
      avatars: [
        "/src/assets/avatar-3.png",
        "/src/assets/avatar.png",
        "/src/assets/avatar-2.png",
        "/src/assets/avatar-8.png",
      ],
    },
    {
      title: "Gothic",
      content:
        "Why would anyone pick blue over pink? Pink is obviously a better color.",
      imgUri: "/src/assets/Gothic.png",
      avatars: [
        "/src/assets/avatar-7.png",
        "/src/assets/avatar-1.png",
        "/src/assets/avatar-2.png",
        "/src/assets/avatar-6.png",
      ],
    },
  ];

  return (
    <div className="w-full py-4 pb-6 lg:pl-0 xl:pl-0 lg:px-6 xl:px-6 px-4 flex flex-col gap-4">
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
          <p className="user-info-email text-gray-500">aidenmax451@gmaol.com</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Phone
          </h1>
          <p className="user-info-phone text-gray-500">(44) 123 1234 123</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Location
          </h1>
          <p className="user-info-location text-gray-500">San Francisco, CA</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Age
          </h1>
          <p className="user-info-location text-gray-500">27</p>
          <h1 className="user-info-title text-2xl font-semibold text-gray-800">
            Social
          </h1>
          <p className="user-info-social text-gray-500 flex flex-row gap-4 mt-2">
            <Link to="https://www.facebook.com/">
              <FaFacebook className="text-[#FF8E29] w-7 h-7 " />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram className="text-[#FF8E29] w-7 h-7 " />
            </Link>
            <Link to="https://www.linkedin.com/">
              <FaLinkedin className="text-[#FF8E29] w-7 h-7 " />
            </Link>
          </p>
        </div>
      </section>
      <section className="min-w-full flex lg:flex-row flex-col justify-between  rounded-3xl self-center gap-4  ">
        <div className="user-des lg:w-1/3 xl:w-3/2 w-full flex flex-col gap-5 bg-white rounded-3xl p-4">
          <h3 className="text-gray-800 text-lg">Account</h3>
          <div className="flex flex-row gap-5 items-center">
            <Switch color="warning" />
            <p className="text-gray-500">Email me when someone follow me</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Switch defaultChecked color="warning" />
            <p className="text-gray-800">
              Email me when someone answer on my post
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Switch defaultChecked color="warning" />
            <p className="text-gray-800">Email me when someone mention me</p>
          </div>
        </div>
        <div className="user-des lg:w-1/3 xl:w-3/2 w-full flex flex-col gap-5 bg-white rounded-3xl p-4">
          <h3 className="text-gray-800 text-lg">Application</h3>
          <div className="flex flex-row gap-5 items-center">
            <Switch defaultChecked color="warning" />
            <p className="text-gray-800">New launches and project</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Switch color="warning" />
            <p className="text-gray-500">Monthly product update</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <Switch defaultChecked color="warning" />
            <p className="text-gray-800">Subscribe to newsletter</p>
          </div>
        </div>
        <div className="user-des lg:w-1/3 xl:w-3/2 w-full flex flex-col gap-5 bg-white rounded-3xl p-4">
          <h3 className="text-gray-800 text-lg">Conversations</h3>
          <div className="flex flex-row gap-5 items-center w-full justify-between">
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/src/assets/avatar-1.png"
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
              <div className="flex-col">
                <p className="text-gray-800">Roselle Ehrman</p>
                <p className="text-gray-500 font-light text-xs">
                  Hi! I need more info
                </p>
              </div>
            </div>
            <FaMessage className="text-[#FF8E29] w-10 h-10 bg-gray-200 p-3 rounded-full" />
          </div>
          <div className="flex flex-row gap-5 items-center w-full justify-between">
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/src/assets/avatar-2.png"
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
              <div className="flex-col">
                <p className="text-gray-800">Jone Smith</p>
                <p className="text-gray-500 font-light text-xs">
                  About files I Can
                </p>
              </div>
            </div>
            <FaMessage className="text-[#FF8E29] w-10 h-10 bg-gray-200 p-3 rounded-full" />
          </div>
        </div>
      </section>
      <section className="min-w-full flex flex-col justify-between bg-white p-4 rounded-3xl self-center gap-4">
        <h2 className="text-gray-800 text-lg font-semibold">Projects</h2>
        <p className="text-gray-500 text-sm">Architects design houses</p>
        <div className="flex flex-col md:flex-row justify-between gap-4 flex-wrap">
          {cardsData.map((card, index) => (
            <div
              className="w-full md:w-[48%] lg:w-[30%] xl:w-[23%] rounded-3xl overflow-hidden shadow-lg"
              key={index}
            >
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  sx={{ height: 150, width: "100%" }}
                  image={card.imgUri}
                  title={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", minHeight: 70 }}
                  >
                    {card.content}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <AvatarGroup style={{ minWidth: 100 }} max={4} total={4}>
                    {card.avatars.map((avatar, i) => (
                      <Avatar
                        sx={{ width: 35, height: 35 }}
                        key={i}
                        alt={`Avatar ${i}`}
                        src={avatar}
                      />
                    ))}
                  </AvatarGroup>
                  <div className="text-[#FF8E29] font-semibold cursor-pointer">
                    View project
                  </div>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileOverview;
