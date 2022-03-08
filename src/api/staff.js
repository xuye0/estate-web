import { api } from "boot/axios";

export function all_staff() {
  return api({
    url: "/staff",
    method: "get",
  });
}
