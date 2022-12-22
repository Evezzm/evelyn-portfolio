import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo[] };

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:evelyn.zm.zeng@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}(${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row w-full sm:max-w-7xl justify-evenly mx-auto items-center px-10">
      <h3 className="absolute top-16 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col flex-wrap space-y-4 sm:space-y-8 mt-16">
        <h4 className="text-2xl sm:text-3xl font-semibold text-center text-wrap">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-1 sm:space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-xl">{pageInfo[0]?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-xl">{pageInfo[0]?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-xl">{pageInfo[0]?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full sm:w-fit mx-auto"
        >
          <div className="flex flex-col w-full sm:flex-row sm:w-fit sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput mt-2 sm:mt-0"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
