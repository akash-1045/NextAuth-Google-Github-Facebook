  
  "use client";

  import { signIn, useSession } from "next-auth/react";
  import { useRouter } from "next/navigation";
  import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
  import styles from "./loginPage.module.css";

  export default function LoginPage() {
    const { data, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "authenticated") {
      router.push("/");
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.loginButton} onClick={() => signIn("google")}>
            <FaGoogle className={styles.icon} />
            Sign in with Google
          </div>
          <div className={styles.loginButton} onClick={() => signIn("facebook")}>
            <FaFacebook className={styles.icon} />
            Sign in with Facebook
          </div>
          <div className={styles.loginButton} onClick={() => signIn("github")}>
            <FaGithub className={styles.icon} />
            Sign in with Github
          </div>
        </div>
      </div>
    );
  }
