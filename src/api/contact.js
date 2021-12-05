import { api } from "boot/axios";

export function all() {
  return api({
    url: "/contact",
    method: "get",
  });
}
