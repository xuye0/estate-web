import { api } from "boot/axios";

export function citys() {
  return api({
    url: "/city",
    method: "get",
  });
}
