import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { get } from "http";
import { useRouter } from "next/navigation";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () => {
      //   const data = await createLinkToken(user);
      //   setToken(data?.linkToken);
    };

    getLinkToken();
  }, []);
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      //   await exchangePublicToken({ publicToken: public_token, user });
      //   router.push("/dashboard");
    },
    [user]
  );
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };
  return (
    <>
      {variant === "primary" ? (
        <Button className="plaidlink-primary">Connect Button</Button>
      ) : variant === "ghost" ? (
        <Button>Connect Button</Button>
      ) : (
        <Button>Connect Button</Button>
      )}
    </>
  );
};

export default PlaidLink;
