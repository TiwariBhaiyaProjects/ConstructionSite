import { APP_URLS } from "@/lib/app_urls";

// Global company info used in header, footer, etc.
export const companyInfo = {
  name: "Rajnandini Construction",
  established: "2013",
  phone: "+91 9971889395, +91 9122443841",
  whatsapp: "+91 9122443841",
  email: "info@rncgroups.com, raj.kishor@rncgroups.com",
  address: "Reg. Office: At+ P.O. Jamalpur, P.S: Athmalgola, Dist: Patna, Bihar, Pin- 803211",
  branchAddress: "411, Hem Plaza, Fraser Road, Patna-800001",
  proprietor: "Raj Kishor",
  serviceArea: "Bihar & Jharkhand",
  gstin: "10CXHPK1182P1ZC",
  msme: "Govt Contractor License: 59/2026, 170620260225",
  iso: "ISO 9001:2015 Certified",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  description: "Rajnandini Construction was formed in 2013 with the objective of establishing a sustainable and continually improving construction company for predictable and quality constructions.",
};

// Global navigation links
export const navLinks = [
  { name: "Home", path: APP_URLS.HOME },
  { name: "About & Contact", path: APP_URLS.ABOUT },
  { name: "Current Projects", path: APP_URLS.PROJECTS },
  { name: "Completed Projects", path: APP_URLS.COMPLETED_PROJECTS },
  { name: "Machinery", path: APP_URLS.MACHINERY },
];
