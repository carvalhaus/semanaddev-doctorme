import * as React from "react";

export default interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        className={`border border-gray-300 p-3 rounded-xl ${className}`}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
