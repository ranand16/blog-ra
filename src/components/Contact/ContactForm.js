"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in "
        >
            Hello my name is{" "}
            <input
                type="text"
                placeholder="your name"
                {...register}
                className="outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-gray bg-transparent  placeholder:text-center placeholder:text-lg border-b border-gray"
            />
            and I want to discuss a potential project you can email me at
            <input
                type="email"
                placeholder="you@email"
                className="outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-gray bg-transparent  placeholder:text-center placeholder:text-lg border-b border-gray"
                {...register("email", {})}
            />{" "}
            or reach out to me at
            <input
                type="tel"
                className="outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-gray bg-transparent  placeholder:text-center placeholder:text-lg border-b border-gray"
                placeholder="your phone"
                {...register("phone number", {})}
            />
            Here are some detials about the project: <br />
            <textarea
                placeholder="My project is about ..."
                {...register("Project details", {})}
                className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 focus:border-gray bg-transparent  placeholder:text-center placeholder:text-lg border-b border-gray"
            />
            <input
                className="mt-8 inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer font-medium"
                type="submit"
                value="Send request"
            />
        </form>
    );
};

export default ContactForm;
