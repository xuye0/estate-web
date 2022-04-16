import { api } from "boot/axios";

export function announcement() {
  return api({
    url: "/announcement",
    method: "get",
  });
}

export function update_announcement(data) {
  return api({
    url: "/announcement",
    method: "put",
    data,
  });
}
