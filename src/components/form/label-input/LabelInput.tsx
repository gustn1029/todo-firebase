import React, {ChangeEvent} from "react";

interface LabelInputProps {
  label?: string;
  name: string;
  type?: "text" | "password" | "email" | "checkbox";
  labelClassName?: string;
  inputClassName?: string;
  isHidden?: boolean;
  placeholder?: string;
  inputValue: string;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
  isRequired?: boolean;
}

/** required는 기본적으로 true 입니다. */
const LabelInput = ({
  name,
  label = '',
  type = 'text',
  placeholder,
  labelClassName = '',
  inputClassName = '',
  inputValue = '',
  isHidden = false,
  isRequired = true,
  onChange,
  ...restProps
}: LabelInputProps) => {
  return (
  <>
    <label htmlFor={name}
      className={`${isHidden ? 'w-0 h-0 overflow-hidden text-[0px] leading-[0px]' : ''} ${labelClassName}`}
    >{label !== '' ? label : name}</label>
    <input type={type} id={name} value={inputValue} onChange={onChange} className={`${inputClassName} px-[15px] py-[10px] w-full bg-white rounded-xl shadow-lg border border-sky-500`} placeholder={placeholder} required={isRequired ? true : false} {...restProps} />
  </>
  );
};

export default LabelInput;
