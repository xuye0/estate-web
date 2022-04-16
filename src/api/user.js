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

export function change_password(oldPassword, newPassword) {
  return api({
    url: "/session",
    method: "put",
    data: qs.stringify({ oldPassword, newPassword }),
  });
}
