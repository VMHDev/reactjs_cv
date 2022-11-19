import React from 'react';
import DOMPurify from 'dompurify';
import ShowMoreText from 'react-show-more-text';
import { useTranslation } from 'react-i18next';
import { TextStyled } from './styled';

interface TextShowMoreProps {
  lines: number;
  content: string;
  textMore?: string;
  textLess?: string;
}

const TextShowMore = (props: TextShowMoreProps) => {
  const { lines, textMore, textLess, content } = props;
  const { t } = useTranslation(['commons']);
  const domPurifyContent = DOMPurify.sanitize(content || '');

  return (
    <TextStyled>
      <ShowMoreText
        lines={lines}
        more={textMore || t('BUTTONS.SHOW_MORE')}
        less={textLess || t('BUTTONS.SHOW_LESS')}
      >
        <div dangerouslySetInnerHTML={{ __html: domPurifyContent }} />
      </ShowMoreText>
    </TextStyled>
  );
};

export default TextShowMore;
