import { IHeaderMenuItem, IMenuItemSubOne, IMenuItemSubTwo } from 'src/layout/types';

export const navigateMenu = (
  item: IHeaderMenuItem | IMenuItemSubOne | IMenuItemSubTwo,
  history: any
) => {
  if (item?.target === '_blank') {
    const newWindow = window.open(item?.linkTo, item?.target, 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  } else {
    item?.linkTo !== '#' && history.push(item?.linkTo);
  }
};
