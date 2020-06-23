//getUserStepRegistartion()
export default () => {
  if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.stepRegistration;
  } else {
    return undefined;
  }
}
