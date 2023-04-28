import {
  HomeIcon,
  CalendarIcon,
  ClockIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

interface NavigationItem {
  name: string;
  icon: any;
  href: string;
  current: boolean;
}

export const navigation: NavigationItem[] = [
  
  { name: "Home", icon: HomeIcon, href: "#" ,current: true },
  { name: "Profile", icon: UserCircleIcon, href: "#" , current: false},
  { name: "Weather", icon: SunIcon, href: "#" , current: false},
  { name: "Calendar", icon: CalendarIcon, href: "#" , current: false},
  { name: "Farm", icon: GlobeAltIcon, href: "#" , current: false},
  { name: "IoT", icon: CpuChipIcon, href: "#", current: false },
  { name: "Recent", icon: ClockIcon, href: "#",current: false },
  { name: "Marketplace", icon: ShoppingBagIcon, href: "#", current: false },
];
