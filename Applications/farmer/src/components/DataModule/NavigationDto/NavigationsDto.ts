export declare interface INavigation{
    isOpen: boolean,
    setOpen: any,
    authOptions: IAuthOptions[],
    message: string,
  categories: ICategory[],
  pages:IAuthOptions[],
  brand: {
    name: string,
    logo: string
  }
}

export declare interface IAuthOptions {
    name: string, href: string,
}

export declare interface ICategory{
    name: string, href: string,
    featured:IAuthOptions[],
    collection:IAuthOptions[],
    categories:IAuthOptions[],
    farms:IAuthOptions[],
}