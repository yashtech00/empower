// next-auth.d.ts or wherever you define your type extensions
import { type DefaultSession, type DefaultUser } from "next-auth";

type Role = "ENTREPRENEUR" | "INVESTOR";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      email: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role: Role;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string | undefined;
    email: string;
    role: Role;
  }
}
