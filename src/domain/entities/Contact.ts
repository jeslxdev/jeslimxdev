export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
