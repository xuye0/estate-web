import { api } from "boot/axios";

export function all_staff() {
  return api({
    url: "/staff",
    method: "get",
  });
}

export function me() {
  return api({
    url: "/staff/me",
    method: "get",
  });
}

export function update_me(data) {
  return api({
    url: "/staff/me",
    method: "put",
    data,
  });
}
