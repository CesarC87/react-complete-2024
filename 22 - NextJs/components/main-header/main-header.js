import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from './main-header.module.css'
import Image from "next/image";
import NavLink from "../nav-link/nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt='asd' priority/>
        Next level food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink  href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
