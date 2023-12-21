"use client";
import LoginPage from "@/app/login/page";
import { useSession } from "next-auth/react";
import styles from "./mainContent.module.css";

export default function MainContent() {
  const { data, status } = useSession();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  console.log("Data", data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        One click login with Google, Github, Facebook
      </h1>

      {status === "unauthenticated" ? (
        <LoginPage />
      ) : (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <img
              src={
                data?.user?.image ? `${data?.user?.image}` : `/background.png`
              }
              alt="background"
              // fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>
              <span style={{fontWeight: 300}}>Welcome </span> {data?.user?.name}
            </h1>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontFamily: "monospace",
                fontSize: "16px",
              }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
