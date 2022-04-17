import { api } from "boot/axios";
import qs from "qs";

export function login(type, credential, password) {
  return api({
    url: "/session/" + type,
    method: "post",
    data: qs.stringify({ credential, password }),
  });
}

export function logout() {
  return api({
    url: "/session",
    method: "delete",
  });
}

export function change_password(oldPassword, newPassword, role) {
  return api({
    url: "/session",
    method: "put",
    data: qs.stringify({ oldPassword, newPassword, role }),
  });
}

export function list() {
  return api({
    url: "/session/login/list",
    method: "get",
  });
}

export function unable_login_staff_list(type) {
  return api({
    url: "/session/unable/login/" + type,
    method: "get",
  });
}

export function save(data) {
  return api({
    url: "/session",
    method: "post",
    data,
  });
}
