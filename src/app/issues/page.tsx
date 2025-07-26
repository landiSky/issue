import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issue = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">new issue</Link>
      </Button>
    </div>
  );
};

export default Issue;
