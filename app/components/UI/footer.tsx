import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/static/images/Berry-Studio-Logo-fin.png";

interface NavigationItem {
  name: string;
  href: string;
}

interface FooterProps {
  navigation: NavigationItem[];
}

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-2  lg:px-8">
        <hr className="my-6 mx-12 h-1 lg:mx-44 rounded  border-none bg-mainPurp relative" />

        <nav
          aria-label="Footer"
          className="-mb-6 columns-2  flex  justify-center space-x-10 lg:space-x-12"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <Image src={logo} alt="BlueberryStudio Logo" height="300" width="300"  className="mx-auto my-10"/>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Berry Studio, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
