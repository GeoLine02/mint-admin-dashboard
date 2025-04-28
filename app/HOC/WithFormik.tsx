"use client";

import React from "react";
import { useField } from "formik";

interface WithFormikProps {
  name: string;
}

const withFormik = <P extends object>(Component: React.ComponentType<P>) => {
  const Wrapped: React.FC<P & WithFormikProps> = ({ name, ...props }) => {
    const [field] = useField(name);

    return (
      <Component
        {...(props as P)}
        {...field}
        value={field.value}
        onChange={field.onChange}
        name={name}
      />
    );
  };

  return Wrapped;
};

export default withFormik;
