import React from 'react';

import LayoutMain from 'src/layout/components/LayoutMain';
import ContainerMain from 'src/layout/components/ContainerMain';
import Text from 'src/components/Custom/Text';

const Contact = () => {
  return (
    <LayoutMain>
      <ContainerMain isFullHeight>
        <Text>CONTACT</Text>
        <Text>vmhpublic2017@gmail.com</Text>
        <Text>Tan Binh District, Ho Chi Minh City</Text>
        <Text>(+84) 079 7978 425</Text>
      </ContainerMain>
    </LayoutMain>
  );
};

export default Contact;
