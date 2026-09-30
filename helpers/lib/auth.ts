import jwt from "jsonwebtoken";

interface JwtPayload {
  exp?: number;
  iat?: number;
  sub?: string;
  [key: string]: unknown;
}

export function isAuthenticated(token?: string | null): boolean {
  if (!token) {
    return false;
  }

  try {
    const decoded = jwt.decode(token) as JwtPayload | null;

    if (!decoded) {
      return false;
    }

    if (typeof decoded.exp === "number" && decoded.exp * 1000 <= Date.now()) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}
