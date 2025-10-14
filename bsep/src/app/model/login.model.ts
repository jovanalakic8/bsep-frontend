export interface Login {
  username: string;
  password: string;
}

export interface Passwordless {
  email: string;
  recaptchaToken: string;
}
