export function SET_LOGIN(state, obj) {
  const { user } = obj;
  state.token = obj.token;
  state.id = user.id;
  state.username = user.username;
  state.avatar_url = user.avatarUrl;
  state.is_authenticated = true;
  state.is_administrator = user.isAdministrator;
}
