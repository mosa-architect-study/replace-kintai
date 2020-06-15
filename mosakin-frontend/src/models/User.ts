export type UserRole = "ADMIN" | "COMMON";

export interface User {
  name: string;
  photoURL: string;
  role: UserRole;
}

export type LoginStatusOnLogin = {
  readonly login: true;
  readonly user: User;
  readonly logout: () => void;
};

export type LoginStatusOnLogout = {
  readonly login: false;
};

export type LoginStatus =
  | LoginStatusOnLogin
  | {
      readonly login: false;
    };
