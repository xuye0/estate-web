import { api } from "boot/axios";

export function news_list() {
  return api({
    url: "/news",
    method: "get",
  });
}

export function insert(data) {
  return api({
    url: "/news",
    method: "post",
    data,
  });
}

export function update(data) {
  return api({
    url: "/news",
    method: "put",
    data,
  });
}

export function delete_by_id(id) {
  return api({
    url: "/news/" + id,
    method: "delete",
  });
}
