export declare interface IHomeNavigation{
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
export declare interface IDashboardNavigation{
  bgColor: string,
  searhPrompt: string,
  searchData: ISearchData[],

  user?: {
      displayName: string,
      photoURL: string
  },

  teams: ITeams[],
  navData: INavData[]
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

export declare interface ISearchData{
  name:string, age: string,
}

declare interface ITeams{
  initial:string, href: string, name: string,
 
}

declare interface INavData{

   name: string, icon: any, href: string
 
}