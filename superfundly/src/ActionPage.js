import React from "react";
import CommunityCard from './CommunityAdvocacyCard';
import PetitionCard from "./PetitionCard";
import PoliticianCard from "./PoliticianCard";

function ActionPage() {
  return (
    <div>
      <CommunityAdvocacyCard/>
      <PetitionCard/>
      <PoliticianCard/>
    </div>
  );
}
export default ActionPage;