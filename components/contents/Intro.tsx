import React from "react";

export const Intro = () => {
  const preInfo = {
    civiliansAffected: 7500,
    heritageSitesAffected: 1,
    daySinceConflict: Math.floor(
      (Date.now() - new Date("2025-07-24T08:30:00+07:00").getTime()) /
        (1000 * 60 * 60 * 24)
    ),
  };

  return (
    <>
      <div className="text-center px-4 mt-4">
        <h1 className="text-5xl font-bold text-red-600">WAR HAS BROKEN OUT</h1>
        <p className="mt-2 text-gray-800 max-w-2xl mx-auto">
          On July 24, 2025, Thailand launched an unprovoked attack that marked
          the beginning of a devastating conflict. We will not stay silent.
        </p>
      </div>
      <div className="bg-black text-white p-3 text-center text-sm font-mono">
        Civilians affected & Displaced:{" "}
        <DataWrapper text={`+${preInfo.civiliansAffected} Families`} />{" "}|
        Heritage Sites Destroyed:{" "}
        <DataWrapper text={preInfo.heritageSitesAffected} /> | Days since
        conflict began: <DataWrapper text={preInfo.daySinceConflict} />
      </div>
    </>
  );
};

const DataWrapper = ({ text }: { text: string | number }) => {
  return <span className="font-bold underline underline-offset-4">{text}</span>;
};
