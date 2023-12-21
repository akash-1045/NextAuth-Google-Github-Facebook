"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./authLinks.module.css";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
      useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth;
    
          if (windowWidth > 640) {
            setOpen(false)
          }
        };
  
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={() => {
            setOpen(false);
          }}>Homepage</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={() => {
              setOpen(false);
            }}>Login</Link>
          ) : (
            <>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
