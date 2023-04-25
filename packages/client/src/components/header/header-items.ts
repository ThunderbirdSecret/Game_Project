import { RoutesPath } from "../../routes";

export interface HeaderItems {
    title: string;
    link: string;
}

export const items: HeaderItems[] = [
    {
        title: "Logo",
        link: RoutesPath.Main
    },
    {
        title: "Game",
        link: RoutesPath.Game
    },
    {
        title: "Forum",
        link: RoutesPath.Forum
    },
    {
        title: "Profile",
        link: RoutesPath.Profile
    },
    {
        title: "Leader bord",
        link: RoutesPath.LeaderBoard
    },
]
