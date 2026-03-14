"use client";

import Formal from "@/components/Body/Formal";
import Personal from "@/components/Body/Personal";
import { useModeStore } from "@/hooks/useModeStore";

const LandingPage = () => {
  const { isFormal } = useModeStore();
  return (
    <div className="bg-background w-full">
      {isFormal ? <Formal /> : <Personal />}
    </div>
  );
};

export default LandingPage;
