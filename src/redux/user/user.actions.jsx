
import { UserActionType } from './user.types';

export const SetCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})