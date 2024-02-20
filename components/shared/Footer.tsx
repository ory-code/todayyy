import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex wrapper flex-center flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="Logo"
            width={128}
            height={38}
          />
        </Link>
        <p>{currentYear}. Todayyy plateforme develop with 💜 by Sacha</p>
      </div>
    </footer>
  );
};

export default Footer;
