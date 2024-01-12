import React from "react";
import {
  faculty_advisors,
  team_core,
  team_designer,
  team_devs,
  team_social_med,
  team_treasurer,
} from "../../data";
import { Title } from "../index";
import TeamCard from "./TeamCard";

const Teams = () => {
  return (
    <div className="mx-auto mb-20 flex h-full max-w-7xl flex-col items-center justify-center md:my-10  ">
      <Title>Faculty Advisors</Title>
      <TeamCard data={faculty_advisors} isFaculty={true} />
      <Title>Our Team</Title>
      <TeamCard data={team_core} />
      <TeamCard data={team_devs} />
      <TeamCard data={team_treasurer} />
      <TeamCard data={team_social_med} />
      <TeamCard data={team_designer} />
    </div>
  );
};

export default Teams;
