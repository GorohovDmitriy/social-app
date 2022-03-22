import Svg from "SVG";
import { WebsiteUrls } from "types/enums";
import { INavigate } from "types/navigate";

export const menu: INavigate[] = [
  { id: 1, link: WebsiteUrls.HOME, svg: <Svg id="home" /> },
  { id: 2, link: WebsiteUrls.USERS, svg: <Svg id="users" /> },
  { id: 3, link: WebsiteUrls.CHAT, svg: <Svg id="message" /> },
];
