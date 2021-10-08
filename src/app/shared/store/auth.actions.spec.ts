import * as AuthActions from './auth.actions';

describe('*** Auth actions ***', () => {
  describe('** TryFetchCurrentAction **', () => {
    it('-> It should create a TryFetchCurrentAction action', () => {
      const action = AuthActions.tryFetchCurrentUserAction();
      expect(action).toEqual({
        type: AuthActions.tryFetchCurrentUserAction.type,
      });
    });

    // it('-> It should create a SingupError action', () => {
    //   const payload = {
    //     error: 'error',
    //   };
    //   const action = new AuthActions.SignupError(payload);
    //   expect({ ...action }).toEqual({
    //     type: AuthActions.AuthActionTypes.SignupError,
    //     payload,
    //   });
    // });
  });
});

// const payload = {
//   email: 'paul@dupond.fr',
//   name: 'Paul',
//   password: '123456',
// };
