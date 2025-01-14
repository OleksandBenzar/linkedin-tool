export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI = encodeURIComponent(
  process.env.REACT_APP_REDIRECT_URI || "",
);
export const SCOPE = encodeURIComponent(process.env.REACT_APP_SCOPE || "");
