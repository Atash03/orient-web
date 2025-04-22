import { UserResponseType, UserType } from '../model/types';

export const mapUserResponse = (user: UserResponseType): UserType => ({
  name: user.name,
  email: user.email,
});
