import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Login from "@/pages/Auth/LoginModal";

import { logOut, useCurrentToken } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CircleUser, LogOut, Menu, NotebookPen } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    toast.success("Logged Out Successfully");
  };

  return (
    <div className="bg-gradient shadow-sm sticky z-50 top-0 text-white">
      <nav className="lg:max-w-7xl mx-auto  py-3  flex items-center justify-between  ">
        {/* LOGO */}
        <div className="font-semibold text-xl">
          <NavLink to={"/"}> BookMyPlay </NavLink>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:block ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink
                  to={"/about"}
                  className="px-3 font-medium hover:font-semibold hover:text-[#aaf40c] duration-150"
                >
                  <NavigationMenuLink>About Us</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to={"/facilities"}
                  className="px-3 font-medium hover:font-semibold hover:text-[#aaf40c] duration-150"
                >
                  <NavigationMenuLink>Facilities</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to={"/contact"}
                  className="px-3 font-medium hover:font-semibold hover:text-[#aaf40c] duration-150"
                >
                  <NavigationMenuLink>Contact Us</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* MOBILE MENU */}
        <div className="block lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger>
              <Menu className="size-8 text-right " />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* THEME TOGGLE */}

        {/* LOGIN LOGOUT PROFILE */}

        {/* login button start here */}
        <div className="flex items-center lg:gap-4">
          <ThemeSwitcher />
          {!token ? (
            <span className="bg-gray-50 text-black rounded-full font-medium px-4 py-1 hover:bg-gradient hover:text-white duration-300  ease-in-out">
              <Login />
            </span>
          ) : (
            //  {/* logged in user icon */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="size-6" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/user" className="flex">
                    <NotebookPen size={17} className="mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogOut}>
                  <LogOut size={17} className="mr-2" />
                  <button>Logout</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        {/* login button ends here */}
      </nav>
    </div>
  );
};

export default Navbar;
