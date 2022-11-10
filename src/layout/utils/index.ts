import { IHeaderMenuItem, IMenuItemSubOne, IMenuItemSubTwo } from 'src/layout/types';
import { redirect } from 'react-router-dom';

export const navigateMenu = (item: IHeaderMenuItem | IMenuItemSubOne | IMenuItemSubTwo) => {
  if (item?.target === '_blank') {
    const newWindow = window.open(item?.linkTo, item?.target, 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  } else {
    item?.linkTo !== '#' && redirect(item?.linkTo);
  }
};
