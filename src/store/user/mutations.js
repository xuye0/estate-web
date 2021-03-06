export function SET_LOGIN(state, obj) {
  const { user } = obj;
  state.token = obj.token;
  state.id = user.id;
  state.username = user.username;
  state.is_authenticated = true;
  state.role = user.role;
}

export function RESET_LOGIN(state) {
  state.token = "";
  state.id = "";
  state.username = "";
  state.is_authenticated = false;
  state.role = "";
}
