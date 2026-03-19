"use client";

import { useEffect, useState } from "react";
import Formal from "@/components/Body/FormalPage/Formal";
import Personal from "@/components/Body/PersonalPage/Personal";
import { useModeStore } from "@/hooks/useModeStore";

const LandingPage = () => {
  const { isFormal } = useModeStore();
  const [isHydrated, setIsHydrated] = useState(false);

  // useEffect ONLY runs on the client.
  // By the time this runs, Zustand has finished reading from localStorage.
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // STOP: Do not show Formal or Personal yet.
  // We show a blank white div that matches your FlipLoader.
  if (!isHydrated) {
    return <div className="fixed inset-0 bg-[#FFFFFF] z-9999" />;
  }

  // GO: Now that we are hydrated, isFormal is correct.
  return (
    <div className="bg-background w-full flex flex-col">
      {isFormal ? <Formal /> : <Personal />}
    </div>
  );
};

export default LandingPage;
