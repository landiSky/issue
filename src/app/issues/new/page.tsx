import React from "react";
import { TextArea, TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";

export default function NewIssuePage() {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Enter issue title" />
      <TextArea placeholder="Describe the issue" />
      <Button>submit new issue</Button>
    </div>
  );
}
