"use client";

import Formal from "@/components/Body/FormalPage/Formal";
import Personal from "@/components/Body/PersonalPage/Personal";
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
