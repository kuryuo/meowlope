export enum  AppRoute {
  Register = '/',
  Login = '/login',
  Header = '/header',
  Menu = '/menu',
  Search = '/search',
  PostEditor = '/posted',
  Profile = '/profile',
};

export enum APIRoute {
  Login = 'auth/login',
  Register = 'auth/register',
  Status = 'auth/status',
};

export enum AuthorizationStatus {
  Authenticated = 'Authenticated',
  NoAuth = 'NoAuth',               
  Unknown = 'Unknown',            
};