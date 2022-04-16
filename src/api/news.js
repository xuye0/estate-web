import { api } from "boot/axios";

export function news() {
  return api({
    url: "/news",
    method: "get",
  });
}

export function save(data) {
  return api({
    url: "/news",
    method: "post",
    data,
  });
}
