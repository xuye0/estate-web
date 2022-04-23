import { api } from "boot/axios";

export function all() {
  return api({
    url: "/customer",
    method: "get",
  });
}

export function save(data) {
  return api({
    url: "/customer",
    method: "post",
    data,
  });
}
