import { ROUTES_PATH } from "../../routes";

export interface HeaderItems {
    title: string;
    link: string;
}

export const items: HeaderItems[] = [
    {
        title: "Logo",
        link: ROUTES_PATH.Main
    },
    {
        title: "Game",
        link: ROUTES_PATH.Game
    },
    {
        title: "Forum",
        link: ROUTES_PATH.Forum
    },
    {
        title: "Profile",
        link: ROUTES_PATH.Profile
    },
    {
        title: "Leader bord",
        link: ROUTES_PATH.LeaderBoard
    },
]
