"use client";

import React from "react";
import { useField, useFormikContext, FormikValues } from "formik";

interface WithFormikProps {
  name: string;
}

const withFormik = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithFormikProps> => {
  const WrappedComponent: React.FC<P & WithFormikProps> = ({
    name,
    ...props
  }) => {
    const [field, meta] = useField(name);
    const { setFieldValue, setFieldTouched } = useFormikContext<FormikValues>();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (value: any) => {
      if (value?.target !== undefined && value?.target?.type !== undefined) {
        setFieldValue(name, value.target.value);
      } else {
        setFieldValue(name, value);
      }
      setFieldTouched(name, true, false);
    };

    return (
      <div className="space-y-1">
        <Component
          {...(props as P)}
          name={name}
          value={field.value}
          onChange={handleChange}
        />
        {meta.touched && meta.error && (
          <span className="text-sm text-red-500">{meta.error}</span>
        )}
      </div>
    );
  };

  WrappedComponent.displayName = `withFormik(${getDisplayName(Component)})`;

  return WrappedComponent;
};

function getDisplayName<W>(WrappedComponent: React.ComponentType<W>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withFormik;
