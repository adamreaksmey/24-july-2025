import React from "react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ShieldAlert } from "lucide-react";

export const ConflictAlert = () => {
  return (
    <Alert className="bg-red-100 dark:bg-red-900/40 border-red-400 dark:border-red-700 text-red-800 dark:text-red-100 shadow-md">
      <ShieldAlert className="h-10 w-10 text-red-600 dark:text-red-300" />
      <AlertTitle className="font-bold text-xl sm:text-2xl">
        We didn’t start this war.
      </AlertTitle>
      <AlertDescription className="text-md sm:text-lg">
        We’re a small nation — but we will not be moved.
      </AlertDescription>
    </Alert>
  );
};
