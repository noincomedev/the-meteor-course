Accounts.onCreateUser((params, user) => {
  const { profile } = params;
  user.profile = profile;
  return user;
});
