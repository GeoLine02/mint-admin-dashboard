"use client";

import React from "react";
import { useField } from "formik";

interface WithFormikProps {
  name: string;
}

const withFormik = <P extends object>(Component: React.ComponentType<P>) => {
  const Wrapped: React.FC<P & WithFormikProps> = ({ name, ...props }) => {
    const [field, meta] = useField(name);

    return (
      <div className="flex flex-col gap-1">
        <Component
          {...(props as P)}
          {...field}
          value={field.value}
          onChange={field.onChange}
          name={name}
        />
        {meta.touched && meta.error && (
          <span className="text-sm text-red-500">{meta.error}</span>
        )}
      </div>
    );
  };

  return Wrapped;
};

export default withFormik;
