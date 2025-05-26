import Image from "next/image";
import Link from "next/link";
import SocialMediaButton from "./components/SocialMediaButton";
import {
  adminLinks,
  navigationLink,
  officeAddresses,
  socialMediaLinks,
} from "./consts";

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 pb-8 md:pb-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 xl:px-0">
        <div className="pb-8">
          <Link href="/">
            <Image
              src="/svg/logo.svg"
              width={150}
              height={70}
              alt="Float UI logo"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 md:gap-10 lg:gap-12 xl:gap-32">
          <div className="grid gap-8 xl:col-span-2">
            <p>
              Discover a curated selection of premium vehicles designed to
              elevate your driving experience and transform every journey into
              an unforgettable adventure. Rent your ideal car today and
              experience the road like never before.
            </p>
            <div className="flex gap-4">
              {socialMediaLinks.map((item, index) => (
                <SocialMediaButton
                  key={index}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </div>
          </div>
          <div className="xl:col-span-2">
            <h4 className="font-bold mb-4">Find Us</h4>
            {officeAddresses.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{item.title}</p>
                <p>{item.address}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <div>
              {navigationLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="block py-1 hover:underline">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div>
              {adminLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="block py-1 hover:underline">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
