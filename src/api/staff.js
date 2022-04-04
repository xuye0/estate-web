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

export function add_staff(data) {
  return api({
    url: "/staff",
    method: "post",
    data,
  });
}

export function remove_staff(id) {
  return api({
    url: `/staff/${id}`,
    method: "delete",
  });
}

export function edit_staff(data) {
  return api({
    url: "/staff/",
    method: "put",
    data,
  });
}
