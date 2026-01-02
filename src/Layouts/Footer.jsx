import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail, IoMdMailUnread } from "react-icons/io";
import { IoCall, IoLocation } from "react-icons/io5";
import logo from "../assets/logo/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-3">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="logo" className="w-32 lg:w-40 rounded-xl" />

            <p className="mt-5 text-sm text-white/80 leading-relaxed">
              S.E.A.-Institute of Design is an Authorized Solidworks Training
              Center based at Bapunagar, Ahmedabad.
            </p>

            <div className="mt-5 flex items-center gap-5 text-xl">
              <FaLinkedinIn className="hover:text-(--primary) transition" />
              <CiYoutube className="hover:text-(--primary) transition" />
              <FaInstagramSquare className="hover:text-(--primary) transition" />
              <FaFacebook className="hover:text-(--primary) transition" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold uppercase relative pb-2">
              Explore
              <span className="absolute left-0 bottom-0 w-32 h-0.5 bg-(--primary)" />
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <Link
                  to="/about"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                  All Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold uppercase relative pb-2">
              Courses
              <span className="absolute left-0 bottom-0 w-32 h-0.5 bg-(--primary)" />
            </h4>

  <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <Link
                  to="/courses/autocad"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                  AutoCAD
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/solidWorks"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                  SolidWorks
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/revit"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                 Revit
                </Link>
              </li>

              <li>
                <Link
                  to="/courses/3rd-max"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                 3ds Max
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/vray"
                  className="flex gap-2 items-center hover:text-(--primary)"
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                V-Ray
                </Link>
              </li>
            </ul>


       
          </div>
          <div>
            <h4 className="text-lg font-semibold uppercase relative pb-2">
              Address
              <span className="absolute left-0 bottom-0 w-32 h-0.5 bg-(--primary)" />
            </h4>

            <div className="mt-6 space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-4">
                <IoLocation className="text-(--primary) text-3xl mt-1" />
                <span>
                  208, Devraj Mall, India Colony Road, Bapunagar, Ahmedabad –
                  380024
                </span>
              </div>

              <div className="flex items-center gap-4 ml-1">
                <IoCall className="text-(--primary)" />
                <span>(+91) 97271 61428</span>
              </div>

              <div className="flex items-center gap-4 ml-1">
                <IoMdMailUnread className="text-(--primary)" />
                <span>info@seaiod.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="w-full h-0.5 border-t"></div>
          <div className=" text-center text-sm text-white/60">
            © 2022 All Rights Reserved By SEAIOD.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
