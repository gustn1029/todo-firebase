import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  className?: string;
  text: string;
  isSubmit?: boolean;
  [x: string]: any;
}
const Button = ({
  type = "button",
  className='',
  text,
  isSubmit = false,
  ...restProps
}: ButtonProps) => {
  return (
    <>
      <button
        type={isSubmit ? "submit" : type}
        className={
        `${className}
          block py-[10px] border border-sky-500 text-sky-700 hover:text-white hover:bg-sky-500 rounded-xl`
        }
        {...restProps}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
