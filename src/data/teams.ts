import { Team } from "../types";

export const Teams: Team[] = [
  {
    description:
      "This team is responsible for general day-to-day maintenance of our software, whether that be issue triaging and code reviews or releasing a new version of various parts of our macrocosm of applications.",
    members: [
      ["JoshuaStrobl", null],
      ["CampbellJones", null],
      ["DavidMohammed", null],
      ["EvanMaddock", null],
    ],
    name: "Best Buds",
  },
  {
    description:
      "This team is responsible for the distribution / packaging of Budgie and its microcosm of supplemental software on various operating systems.",
    members: [
      ["JoshuaStrobl", "Fedora"],
      ["CampbellJones", "Arch Linux"],
      ["DavidMohammed", "Debian / Ubuntu"],
      ["EvanMaddock", "Solus"],
    ],
    name: "Distribution / Packaging Team",
  },
  {
    description: "This team is responsible for improving documentation of the organization and our software.",
    members: [
      ["JoshuaStrobl", null],
      ["CampbellJones", null],
      ["DavidMohammed", null],
      ["EvanMaddock", null],
    ],
    name: "Documentation Team",
  },
  {
    description:
      "This team is responsible for the development and management of our web properties and infrastructure.",
    members: [["JoshuaStrobl", null]],
    name: "Infrastructure and Web Ops Team",
  },
];
