import { Availability } from "./user-profile-interface";

export interface Company {
  id: number,
  name: string,
  about?: string,
  link?: string,
  email?: string,
  contact_number: string,
  company_skillset_id?: string,
  status: number,
  created_at?: Date,
  availability: Availability
}
