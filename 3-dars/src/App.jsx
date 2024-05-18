import React, { useState } from "react";
import siteLogo from "../public/assets/google.png";
import lens from "../public/assets/Google_Icons.webp";
import logo from "../public/assets/lens.png";
import play from "../public/assets/Google_Play_Arrow_logo.svg.png";
import { SiGooglenews } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaPen } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import karta from "../public/assets/Google_Maps_icon_(2020).svg.png";
import insta from "../public/assets/insta.jpg";

const App = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-5 justify-end p-5">
        <p>Почта</p>
        <p>Картинки</p>
        <div className="relative">
          {open == true ? (
            <>
              <span
                className="bg-[#D9DADB] p-1 rounded-full flex"
                onClick={() => setOpen(false)}
              >
                <TbGridDots className="w-[23px] h-[23px] rounded-full" />
              </span>
              <div
                className=" absolute right-[-50px] h-[450px] bg-[#E9EEF6] rounded-2xl mt-3 p-2 overflow-y-scroll scrollbar-width: none; pb-10
      -ms-overflow-style: none;
      scroll-behavior: smooth;"
              >
                <div className=" grid grid-cols-3 w-[350px] text-center bg-slate-300 rounded-2xl p-8 gap-y-5 rounded-b-lg ">
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35px] h-[40px] block mx-auto mt-1 mb-2"
                      src={karta}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <SiGooglenews className="block mx-auto w-[40px] h-[50px] text-red-500" />
                    Поиск
                  </div>
                  <div>
                    <SiGmail className="block mx-auto w-[40px] h-[50px] text-red-500" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                  <div>
                    <FcGoogle className="block mx-auto w-[40px] h-[50px]" />
                    Поиск
                  </div>
                </div>
                <div className="grid grid-cols-3 w-[350px] text-center bg-slate-300 rounded-2xl mb-6 p-8 gap-y-5  mt-1 rounded-t-lg">
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                  <div>
                    <img
                      className="w-[35x] block mx-auto h-[35px] mt-2 mb-2"
                      src={play}
                      alt=""
                    />
                    Поиск
                  </div>
                </div>
                <button className="border border-black rounded-full py-2 px-[50px] w-[300px] block mx-auto hover:bg-[#F0F0F0]">
                  <a
                    className="text-blue-700 font-semibold"
                    target="blank"
                    href="https://about.google/products/ "
                  >
                    Другие приложения и продукты от Google
                  </a>
                </button>
              </div>
            </>
          ) : (
            <>
              <span
                className="hover:bg-[#F0F0F0] rounded-full p-1 flex"
                onClick={() => setOpen(true)}
              >
                <TbGridDots className="w-[23px] h-[23px]" />
              </span>
            </>
          )}
        </div>
        <div>
          {modal == true ? (
            <>
              <div
                onClick={() => {
                  setModal(false);
                }}
                className="relative rounded-full border-[#D9DADB] border-[3px]"
              >
                <FaGoogle className=" w-[25px] h-[25px]" />
              </div>

              <div className="fixed  justify-between p-3 right-5 mt-3 bg-slate-300 w-[400px] rounded-3xl">
                <div className="flex items-center">
                  <p className="mx-auto">polatovasadbek077@gamil.com</p>
                  <span
                    onClick={() => {
                      setModal(false);
                    }}
                  >
                    <IoClose />
                  </span>
                </div>

                <span>
                  {" "}
                  <FaGoogle className="block mx-auto w-[25px] h-[25px] mt-9" />
                </span>
                <div>
                  <FaPen className="fixed right-[207px] top-[145px] w-[5px] h-[5px]  bg-white rounded-full" />
                </div>
                <p className="text-center mt-3 mb-3">Здравствуйте</p>
                <button className="border block mx-auto border-black rounded-full py-2 px-4 hover:bg-[#D8E2F3] mb-6">
                  <a
                    className="text-blue-600"
                    target="blank"
                    href="https://myaccount.google.com/?hl=ru&authuser=0&utm_source=OGB&utm_medium=act"
                  >
                    Управление аккаунтом Google
                  </a>
                </button>
                <div className="flex justify-between gap-[px] mb-3">
                  <button className="flex items-center w-[50%] p-3 bg-white border-grey-500 border hover:bg-[#DCE1E8] gap-2 rounded-full rounded-r-lg ">
                    <GoPlus className="rounded-full text-blue-600 bg-[#E9EEF6]" />
                    Добавить аккаунт
                  </button>
                  <button className="flex w-[50%] items-center p-3 bg-white border-grey-500 border hover:bg-[#DCE1E8] gap-2 rounded-full rounded-l-lg">
                    <FiLogOut />
                    Выйти
                  </button>
                </div>
                <button className="block mx-auto rounded-sm hover:bg-[#DCE1E8] p-1 mb-2">
                  <a href="https://policies.google.com/privacy?hl=ru&authuser=0">
                    Политика конфиденциальности
                  </a>
                </button>
                <GoDotFill className="block mx-auto mb-2" />
                <button className="block mx-auto rounded-sm hover:bg-[#DCE1E8] p-1">
                  <a href="https://policies.google.com/privacy?hl=ru&authuser=0">
                    Условия использования
                  </a>
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div
                onClick={() => setModal(true)}
                className="rounded-full hover:border-[3px] hover:border-[#F0F0F0] border-[3px] border-white"
              >
                <FaGoogle className="w-[25px] h-[25px]" />
              </div>
            </>
          )}
        </div>
      </div>

      <img
        className="w-[272px] h-[92px] block mx-auto mt-[100px]"
        src={siteLogo}
        alt=""
      />
      <div className="flex items-center rounded-full text-black w-[560px] pr-[20px] py-[12px] pl-[10px] [box-shadow:rgba(0,_0,_0,_0.24)_0px_1px_5px] mx-auto mt-10">
        <label htmlFor="search">
          <IoMdSearch className="w-[32px]" />
        </label>
        <input
          className="w-[100%] outline-none"
          type="text"
          placeholder="Введите поисковый запрос или URL"
          id="search"
        />
        <div className="flex items-center gap-3">
          <img className="w-[20px]  " src={logo} alt="" />
          <img className="w-[26px]" src={lens} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 gap-10">
        <div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
        </div>
        <div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
        </div>
        <div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
        </div>
        <div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
          <div>
            <img className="w-[70px]" src={insta} alt="insta-img" />
            <p className="pt-[10px]">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
