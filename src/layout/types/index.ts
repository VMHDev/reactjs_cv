// Menu header
export interface IHeaderMenuItem {
  id: number;
  title: string;
  linkTo: string;
  target: string;
  subOne: IMenuItemSubOne[];
}

export interface IMenuItemSubOne {
  id: number;
  title: string;
  linkTo: string;
  target: string;
  subTwo: IMenuItemSubTwo[];
}

export interface IMenuItemSubTwo {
  id: number;
  title: string;
  linkTo: string;
  target: string;
  subThree: IMenuItemSubThree[];
}

export interface IMenuItemSubThree {
  id: number;
  title: string;
  linkTo: string;
  target: string;
}

// Menu container
export interface IContainerMenuItem {
  text: string;
  link: string;
}
