import { api } from "boot/axios";

export function news() {
  return api({
    url: "/news",
    method: "get",
  });
}
