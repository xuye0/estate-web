import { api } from "boot/axios";

export function announcement() {
  return api({
    url: "/announcement",
    method: "get",
  });
}
