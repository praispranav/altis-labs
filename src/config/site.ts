export const site = {
  name: "Altis Labs",
  url: "https://altislabs.praispranav.com",
  supportEmail: "praispranav@gmail.com",
  businessEmail: "praispranav@gmail.com",
  udyam: {
    number: "UDYAM-BR-34-0066884",
    verificationUrl: "https://udyamregistration.gov.in/Udyam_Verify.aspx",
    documentUrl: "/documents/altis-labs-udyam-registration.pdf",
  },
} as const;

export const products = [
  {
    name: "ClinicQ",
    status: "live",
    url: "https://clinicq.fit",
    description:
      "Digital OPD queues for Indian clinics. QR check-in, live token tracking, and consultation records help doctors and reception teams manage the patient flow. No patient app download needed.",
  },
  {
    name: "WhereAmI",
    status: "coming-soon",
    description: "An AI-based study app. Detailed description to follow.",
  },
  {
    name: "IAmCEO",
    status: "coming-soon",
    description:
      "CEO Assistant by Altis Labs: an upcoming AI agent for business operations, with planned forecasts, cost estimates, and what-if planning through a web dashboard and Telegram.",
  },
] as const;
