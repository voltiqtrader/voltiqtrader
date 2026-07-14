export const CLIENT_ID = "33KRh8nBgBrZWFObtMHKE";

export const REDIRECT_URI =
  typeof window !== "undefined"
    ? `${window.location.origin}/auth/callback`
    : "";

export const SCOPES = "trade account_manage";