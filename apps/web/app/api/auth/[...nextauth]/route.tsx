import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Username",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials: any) {
                // Fake authentication, replace with actual logic
                if (credentials.username === "tatsat" && credentials.password === "password") {
                    return { id: "1", name: "tatsat", username: "tatsat" };
                }
                return null;
            }
        })
    ],
    secret: "HELLO",
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id; // ✅ Correctly store the user ID
                token.username = user.username; // ✅ Store username
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user.id = token.id; // ✅ Use token.id instead of token.sub
            session.user.username = token.username; // ✅ Retrieve username correctly
            return session;
        }
    }
});

export const GET = handler;
export const POST = handler;
