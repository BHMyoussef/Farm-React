import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
export interface ReportInputCheckboxProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const ReportInputCheckbox: FC<ReportInputCheckboxProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name);  

  const errorDisplayControlName = name + "ErrorDisplay";
      
  return (
    <div className="custom-form-control">
      <Form.Group controlId={name}> 
          <Form.Check
            // ref={inputRef}
            data-testid={name}
            type="checkbox"
            placeholder={placeholder}
            checked={field.value}
            name={field.name}
            value={field.value}
            onChange={(e) => {helpers.setValue(e.target.checked);}}
            onBlur={field.onBlur} 
            disabled={disabled}
            autoFocus={autoFocus}
            label={label}
          />
      </Form.Group>
      <ReportInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   