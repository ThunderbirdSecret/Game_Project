import { ReactNode } from "react";

export type APIError = ReactNode & {
  reason: string;
}

export const AVATAR_URL = `https://ya-praktikum.tech/api/v2/resources/`
