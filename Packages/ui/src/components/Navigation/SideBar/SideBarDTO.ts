interface NavigationItem {
    name: string,
    icon: any,
    href: string,
    current: boolean
  }
  
  interface TeamItem {
    id: number,
    name: string,
    href: string,
    initial: string,
    current: boolean
  }
  
  interface SidebarProps {
    navigation: NavigationItem[],
    teams: TeamItem[],
    isOpen: boolean,
    onClose: () => void
  }
  