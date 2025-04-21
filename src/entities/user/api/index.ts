
export const mapUserResponse = (user: any): any => ({
  name: user.name,
  email: user.email,
  phonenumber: user.phonenumber,
  // Etc.
});