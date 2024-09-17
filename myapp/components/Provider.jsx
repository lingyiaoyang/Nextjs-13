"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children} provider provider
  </SessionProvider>
);

export default Provider;
