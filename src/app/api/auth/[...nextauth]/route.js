  import NextAuth from "next-auth";
  import GoogleProvider from "next-auth/providers/google";
  import FacebookProvider from "next-auth/providers/facebook";
  import GithubProvider from "next-auth/providers/github";

  export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ]
  };

  const handler = NextAuth(authOptions);

  export { handler as GET, handler as POST };
