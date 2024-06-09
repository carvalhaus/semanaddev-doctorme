import * as React from "react";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label ref={ref} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
