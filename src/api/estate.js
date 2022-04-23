import { api } from "boot/axios";

export function all_estate() {
  return api({
    url: "/estate",
    method: "get",
  });
}

export function info_estate() {
  return api({
    url: "/estate/info",
    method: "get",
  });
}

export function add_estate(data) {
  return api({
    url: "/estate",
    method: "post",
    data,
  });
}

export function remove_estate(id) {
  return api({
    url: `/estate/${id}`,
    method: "delete",
  });
}

export function edit_estate(data) {
  return api({
    url: "/estate/",
    method: "put",
    data,
  });
}
