import { ROUTES_PATH } from "../../routes";

export interface HeaderItems {
    title: string;
    link: string;
}

export const items: HeaderItems[] = [
    {
        title: "Logo",
        link: ROUTES_PATH.MAIN
    },
    {
        title: "Game",
        link: ROUTES_PATH.GAME
    },
    {
        title: "Forum",
        link: ROUTES_PATH.FORUM
    },
    {
        title: "Profile",
        link: ROUTES_PATH.PROFILE
    },
    {
        title: "Leader bord",
        link: ROUTES_PATH.LEADER_BOARD
    },
]
