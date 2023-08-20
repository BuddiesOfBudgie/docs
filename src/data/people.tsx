import React from "react";
import { Person, WebsiteType } from "../types";
import { Box } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Mastodon from "@site/static/img/icons/mastodon.svg";

export const People: Record<string, Person> = {
  CampbellJones: {
    description: () => (
      <Box>
        Known miscreant, suspected film and animation enthusiast, alleged software engineer, and documented Arch Linux
        package maintainer.
      </Box>
    ),
    matrix: "@serebit:matrix.org",
    names: {
      first: "Campbell",
      last: "Jones",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/serebit",
        type: WebsiteType.GITHUB,
      },
      {
        icon: Mastodon,
        to: "https://fosstodon.org/@serebit",
        type: WebsiteType.MASTODON,
      },
      {
        icon: LanguageIcon,
        to: "https://serebit.dev/",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  DavidMohammed: {
    description: () => <Box>Ubuntu Budgie project founder/lead & Debian 'all-things-budgie' maintainer</Box>,
    matrix: "@fossfreedom:matrix.org",
    names: {
      first: "David",
      last: "Mohammed",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/fossfreedom",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  EvanMaddock: {
    description: () => (
      <Box>
        Sci-fi and tech nerd who enjoys programming, woodworking, cooking, and other miscellaneous stuff. Not
        necessarily in that order.
      </Box>
    ),
    matrix: "@ebonjaeger:matrix.org",
    names: {
      first: "Evan",
      last: "Maddock",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/EbonJaeger",
        type: WebsiteType.GITHUB,
      },
      {
        icon: Mastodon,
        to: "https://fosstodon.org/@EbonJaeger",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  JoshuaStrobl: {
    description: () => (
      <Box>🛠️ Founder / Lead of Buddies of Budgie. 🐧 Fedora Budgie Spin maintainer. Enjoyer of MMOs and whiskey.</Box>
    ),
    matrix: "@joshuastrobl:matrix.org",
    names: {
      first: "Joshua",
      last: "Strobl",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/JoshStrobl",
        type: WebsiteType.GITHUB,
      },
      {
        icon: Mastodon,
        to: "https://fosstodon.org/@JoshStrobl",
        type: WebsiteType.MASTODON,
      },
      {
        icon: LanguageIcon,
        to: "https://joshuastrobl.com/",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  ThomasStaudinger: {
    description: () => <Box>Solus team member</Box>,
    matrix: "@staudey@fosstodon.org",
    names: {
      first: "Thomas",
      last: "Staudinger",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/Staudey",
        type: WebsiteType.GITHUB,
      },
      {
        icon: Mastodon,
        to: "https://fosstodon.org/@staudey",
        type: WebsiteType.MASTODON,
      },
    ],
  },
};
