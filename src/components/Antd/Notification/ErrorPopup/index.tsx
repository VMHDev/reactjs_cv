import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

export const ShowFailedConnectNetwork = () => {
  const { t } = useTranslation(['commons']);
  return notification.error({
    message: t('MESSAGES.TITLE.DISCONNECT_NETWORK'),
    description: t('MESSAGES.CONTENT.DISCONNECT_NETWORK'),
  });
};
