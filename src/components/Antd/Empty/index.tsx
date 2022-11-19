import React from 'react';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Custom/Text';
import { EmptyStyled } from './styled';

interface AntdEmptyProps extends React.ComponentProps<typeof Empty> {
  content?: string;
  classNameText?: string;
}

const AntdEmpty = (props: AntdEmptyProps) => {
  const { content, classNameText = '', ...rest } = props;
  const { t } = useTranslation(['commons']);
  return (
    <EmptyStyled>
      <Empty
        description={
          <Text className={`contentStyled ${classNameText}`}>
            {content || t('MESSAGES.TITLE.NO_DATA')}
          </Text>
        }
        {...rest}
      />
    </EmptyStyled>
  );
};

export default AntdEmpty;
