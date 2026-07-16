export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies?: string[];
}