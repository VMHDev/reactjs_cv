import React, { ReactNode } from 'react';
import { Form, FormProps } from 'antd';

interface AntdFormProps extends FormProps {
  children: ReactNode;
}

const AntdForm = (props: AntdFormProps) => {
  const { children, ...rest } = props;
  return (
    <Form layout="horizontal" {...rest}>
      {children}
    </Form>
  );
};

export default AntdForm;
