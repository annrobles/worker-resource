export interface UserBasicInformation {
  first_name: string,
  last_name: string,
  email: string,
  contact_number: string,
  title: string,
  availability: Availability,
  about: string
}

export interface Availability {
  morning: boolean,
  afternoon: boolean,
  evening: boolean
}

export interface UserLocation {
  address1: string,
  address2: string,
  city: string,
  state: string,
  postal_code: string,
  country: string
}

export interface UserExperience {
  title: string,
  company_name: string,
  start_date: string,
  end_date: string,
  location: string,
  description: string
}

export interface UserEducation {
  name: string,
  degree: string,
  field_study: string,
  start_date: string,
  end_date: string,
  grade: string,
  description: string
}

export interface UserLanguage {
  language: Language,
  other_specify: string
}

export interface Language {
  english: boolean,
  french: boolean,
  other_specify: boolean
}


export interface Skill {
  id: number,
  name: string
}

export interface UserSkill {
  id?: number,
  skillset_id?: number,
  name: string,
  total_years_experience: number
}

export interface UserProfileNavItem {
  name: string,
  link: string,
  active: boolean
}