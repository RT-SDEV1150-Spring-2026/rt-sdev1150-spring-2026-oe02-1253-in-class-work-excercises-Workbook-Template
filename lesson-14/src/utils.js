console.log('utils loaded');

export function greetUser(userName) {
  console.log('Welcome to the app, User');
  return `Welcome to the App, ${userName}`;
}
export default { defaultName: 'User' };
