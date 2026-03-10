// ============================================================
// CPF Knowledge Hub — Question & Scenario Data
// ============================================================
// To add more questions, append a new object to QUESTIONS.
// Each question needs:
//   q           : string  — the question text
//   choices     : array of 4 objects { text, correct }
//                 (exactly ONE choice should have correct: true)
//   explanation : string  — shown after answering
//   category    : one of:
//                 "Accounts Management" | "Member Particulars" |
//                 "Account Closure" | "Digital Services" | "SSS"
//   difficulty  : "easy" | "medium" | "hard"
//   persona     : { name, age, bg, emoji, salutation, lastname }
//
// To add email scenarios, append to EMAIL_SCENARIOS:
//   persona     : same as above
//   subject     : string — email subject line
//   enquiry     : string — the member's email body
//   date        : string — e.g. "10 March 2026"
//   correct     : string — the correct reply paragraph
//   wrong1/2/3  : string — three plausible but incorrect paragraphs
//   added       : string — closing line in the reply template
//   explain     : string — explanation shown after submitting
//   categories  : array  — e.g. ["Accounts Management"]
// ============================================================

const QUESTIONS = [
  {
    "q": "How does a member prove they have no CPF account?",
    "choices": [
      {
        "text": "Visit a CPF Service Centre and request a physical certificate.",
        "correct": false
      },
      {
        "text": "Call the CPF hotline to request a written confirmation letter.",
        "correct": false
      },
      {
        "text": "Submit a written request to CPF Board by email.",
        "correct": false
      },
      {
        "text": "Log in to my cpf digital services via Singpass. A message confirms no account exists, which can be saved or printed.",
        "correct": true
      }
    ],
    "explanation": "The only official method is via my cpf digital services login using Singpass — the portal shows a no-account message which can be saved or printed.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Ah Kow",
      "age": 67,
      "bg": "retired bus driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member needs proof they have no CPF account. What is the correct step?",
    "choices": [
      {
        "text": "Download an official PDF from the CPF Mobile App.",
        "correct": false
      },
      {
        "text": "Write to CPF Board and they will post a letter within 7 business days.",
        "correct": false
      },
      {
        "text": "Log in to my cpf digital services with Singpass — the portal displays a confirmation message that can be saved or printed.",
        "correct": true
      },
      {
        "text": "Request a statutory declaration from a notary public.",
        "correct": false
      }
    ],
    "explanation": "The only official method is via my cpf digital services login using Singpass — the portal shows a no-account message which can be saved or printed.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Siti Rahimah",
      "age": 45,
      "bg": "primary school teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Rahimah"
    }
  },
  {
    "q": "A non-Singaporean asks for documentation proving they have no CPF account. What is the correct guidance?",
    "choices": [
      {
        "text": "Non-citizens cannot access CPF digital services and are ineligible for such documentation.",
        "correct": false
      },
      {
        "text": "Visit the CPF Building with their passport to obtain a stamped letter.",
        "correct": false
      },
      {
        "text": "Contact their employer's HR for a CPF non-contribution letter.",
        "correct": false
      },
      {
        "text": "Log in to my cpf digital services via Singpass — a message confirming no account exists will appear and can be saved or printed.",
        "correct": true
      }
    ],
    "explanation": "The only official method is via my cpf digital services login using Singpass — the portal shows a no-account message which can be saved or printed.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Rajesh Kumar",
      "age": 38,
      "bg": "IT engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Kumar"
    }
  },
  {
    "q": "What is a Singapore Citizen's CPF account number?",
    "choices": [
      {
        "text": "A unique 8-digit number assigned by CPF Board.",
        "correct": false
      },
      {
        "text": "Their SingPass username.",
        "correct": false
      },
      {
        "text": "The Unique Identification Number (UIN) on their NRIC (e.g. S1234567F).",
        "correct": true
      },
      {
        "text": "Their NRIC number prefixed with 'CPF'.",
        "correct": false
      }
    ],
    "explanation": "CPF account numbers for SC/PR members are the UIN on the NRIC. Non-SC/PR accounts may begin with S or T followed by A/B/C/D/F.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Lim Mei Ling",
      "age": 29,
      "bg": "marketing executive",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Lim"
    }
  },
  {
    "q": "A new PR asks what their CPF account number is. What do you tell them?",
    "choices": [
      {
        "text": "A separate number CPF Board will mail within 2 weeks.",
        "correct": false
      },
      {
        "text": "Their FIN number prefixed with the letter P.",
        "correct": false
      },
      {
        "text": "They must register online before a number is assigned.",
        "correct": false
      },
      {
        "text": "Their CPF account number is the UIN on their NRIC, Citizenship Certificate, or entry permit.",
        "correct": true
      }
    ],
    "explanation": "CPF account numbers for SC/PR members are the UIN on the NRIC. Non-SC/PR accounts may begin with S or T followed by A/B/C/D/F.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ahmad Fadzillah",
      "age": 52,
      "bg": "hawker stall owner",
      "emoji": "👨‍🍳",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "A member's CPF number starts with 'SA'. Is this correct?",
    "choices": [
      {
        "text": "No — CPF numbers always match the NRIC format exactly.",
        "correct": false
      },
      {
        "text": "The A suffix indicates a closed account — they should call the helpline.",
        "correct": false
      },
      {
        "text": "This indicates a temporary account — they should update their NRIC.",
        "correct": false
      },
      {
        "text": "Yes — CPF account numbers can begin with S or T followed by a letter such as A, B, C, D, or F (e.g. SA123456D).",
        "correct": true
      }
    ],
    "explanation": "CPF account numbers for SC/PR members are the UIN on the NRIC. Non-SC/PR accounts may begin with S or T followed by A/B/C/D/F.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Chen Wei Ming",
      "age": 61,
      "bg": "recently retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chen"
    }
  },
  {
    "q": "When is a CPF account created for a member?",
    "choices": [
      {
        "text": "When the member registers their NRIC.",
        "correct": false
      },
      {
        "text": "When the member turns 21 years old.",
        "correct": false
      },
      {
        "text": "When the first CPF top-up or contribution is received.",
        "correct": true
      },
      {
        "text": "When the member applies online via Singpass.",
        "correct": false
      }
    ],
    "explanation": "A CPF account is automatically created when the first contribution or top-up is received — no manual registration is required.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Priya Devi",
      "age": 34,
      "bg": "hospital nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Priya"
    }
  },
  {
    "q": "A 22-year-old fresh graduate has never received a CPF contribution. Do they have a CPF account?",
    "choices": [
      {
        "text": "Yes — all Singapore Citizens get a CPF account at birth.",
        "correct": false
      },
      {
        "text": "No — they need to register manually on the CPF website.",
        "correct": false
      },
      {
        "text": "No — a CPF account is only created automatically when the first contribution or top-up is received.",
        "correct": true
      },
      {
        "text": "Yes — accounts are created when the member turns 21.",
        "correct": false
      }
    ],
    "explanation": "A CPF account is automatically created when the first contribution or top-up is received — no manual registration is required.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ng Boon Kiat",
      "age": 55,
      "bg": "construction project manager",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "A member's first employer contributed to CPF 2 months ago but the member claims no account exists. What is the most likely explanation?",
    "choices": [
      {
        "text": "The account should have been created when the first contribution was received — the member may be checking the wrong portal or the contribution may still be pending.",
        "correct": true
      },
      {
        "text": "The employer must register the employee with CPF before contributions are processed.",
        "correct": false
      },
      {
        "text": "CPF accounts take 6 months to activate after the first contribution.",
        "correct": false
      },
      {
        "text": "A CPF account is only created after 3 consecutive months of contributions.",
        "correct": false
      }
    ],
    "explanation": "A CPF account is automatically created when the first contribution or top-up is received — no manual registration is required.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Fatimah Zahra",
      "age": 72,
      "bg": "widowed homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zahra"
    }
  },
  {
    "q": "How can a member view their CPF Yearly Statement of Account?",
    "choices": [
      {
        "text": "Call the CPF hotline to request a mailed statement.",
        "correct": false
      },
      {
        "text": "Email CPF Board with their NRIC for a PDF.",
        "correct": false
      },
      {
        "text": "Via Singpass login at my cpf digital services — they can view, print, and download it.",
        "correct": true
      },
      {
        "text": "Visit a CPF Service Centre to collect a printed copy.",
        "correct": false
      }
    ],
    "explanation": "The YSOA is available via my cpf digital services (Singpass). Statements are available for the past 10 years only.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Kevin Ong",
      "age": 24,
      "bg": "fresh graduate starting first job",
      "emoji": "👦",
      "salutation": "Mr",
      "lastname": "Ong"
    }
  },
  {
    "q": "How far back can a member retrieve their CPF Yearly Statement of Account?",
    "choices": [
      {
        "text": "All historical statements are available online with no limit.",
        "correct": false
      },
      {
        "text": "CPF keeps statements for up to 20 years.",
        "correct": false
      },
      {
        "text": "Statements are only available for the last 3 years.",
        "correct": false
      },
      {
        "text": "CPF does not provide statements beyond the past 10 years — members should download statements promptly.",
        "correct": true
      }
    ],
    "explanation": "The YSOA is available via my cpf digital services (Singpass). Statements are available for the past 10 years only.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Mary Pereira",
      "age": 48,
      "bg": "self-employed accountant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Pereira"
    }
  },
  {
    "q": "A non-Singapore Citizen member wants to view their CPF Yearly Statement. What caveat applies?",
    "choices": [
      {
        "text": "Non-citizen members do not receive yearly statements.",
        "correct": false
      },
      {
        "text": "Statements are automatically mailed to their registered overseas address.",
        "correct": false
      },
      {
        "text": "Non-citizens cannot view CPF statements online — they must visit a Service Centre.",
        "correct": false
      },
      {
        "text": "They can log in via Singpass to view the statement, but should refer to the specific FAQ for non-SC/non-PR members.",
        "correct": true
      }
    ],
    "explanation": "The YSOA is available via my cpf digital services (Singpass). Statements are available for the past 10 years only.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Lee Chong Wei",
      "age": 43,
      "bg": "logistics director",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "Does CPF Board still provide hardcopy Yearly Statements of Account?",
    "choices": [
      {
        "text": "Yes — members above 60 receive automatic hardcopies.",
        "correct": false
      },
      {
        "text": "Yes — members can request a hardcopy by calling the hotline for a $5 fee.",
        "correct": false
      },
      {
        "text": "No — CPF Board has moved to digital statements only as part of going green.",
        "correct": true
      },
      {
        "text": "Yes — hardcopies are automatically mailed to all members each January.",
        "correct": false
      }
    ],
    "explanation": "CPF Board has fully transitioned to digital YSOA. No hardcopies are issued. Members must access, download, and print from my cpf digital services.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Noor Hidayah",
      "age": 31,
      "bg": "social worker",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Noor"
    }
  },
  {
    "q": "An elderly member insists on a printed YSOA. What is the correct response?",
    "choices": [
      {
        "text": "They can request a mailed hardcopy online but it takes 14 working days.",
        "correct": false
      },
      {
        "text": "Hardcopies are available for members aged 60 and above upon request.",
        "correct": false
      },
      {
        "text": "They can request a free hardcopy at any CPF Service Centre once per year.",
        "correct": false
      },
      {
        "text": "CPF no longer provides hardcopy YSOAs. The member should log in to my cpf digital services to view, download, and print the digital statement themselves.",
        "correct": true
      }
    ],
    "explanation": "CPF Board has fully transitioned to digital YSOA. No hardcopies are issued. Members must access, download, and print from my cpf digital services.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ho Swee Lian",
      "age": 58,
      "bg": "shopping mall cleaner",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Ho"
    }
  },
  {
    "q": "A member claims they never received their printed YSOA this year. How should you respond?",
    "choices": [
      {
        "text": "CPF Board no longer issues hardcopy YSOAs — the process is fully digital. The member should access their statement via my cpf digital services.",
        "correct": true
      },
      {
        "text": "Apologise and arrange for a replacement to be reprinted and mailed.",
        "correct": false
      },
      {
        "text": "Confirm the member's Singpass status, as only verified accounts receive paper statements.",
        "correct": false
      },
      {
        "text": "Check the address on record and update it before reissuing the statement.",
        "correct": false
      }
    ],
    "explanation": "CPF Board has fully transitioned to digital YSOA. No hardcopies are issued. Members must access, download, and print from my cpf digital services.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Suresh Nair",
      "age": 40,
      "bg": "taxi driver who became PR",
      "emoji": "🚕",
      "salutation": "Mr",
      "lastname": "Nair"
    }
  },
  {
    "q": "What are the three CPF accounts that working Singaporeans contribute to?",
    "choices": [
      {
        "text": "Primary Account, Secondary Account, and Supplementary Account.",
        "correct": false
      },
      {
        "text": "Ordinary Account, Special Account, and MediSave Account.",
        "correct": true
      },
      {
        "text": "Basic Account, Retirement Account, and Medical Account.",
        "correct": false
      },
      {
        "text": "Savings Account, Investment Account, and Healthcare Account.",
        "correct": false
      }
    ],
    "explanation": "The three CPF accounts are: Ordinary Account (housing, insurance, investment, education), Special Account (retirement-related), and MediSave Account (hospitalisation and medical insurance).",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Chua Beng Huat",
      "age": 66,
      "bg": "retired factory supervisor",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chua"
    }
  },
  {
    "q": "Which CPF account can be used for home purchase, CPF insurance, investment, and education?",
    "choices": [
      {
        "text": "The Special Account — it is the most flexible CPF account.",
        "correct": false
      },
      {
        "text": "The Retirement Account, created at age 55.",
        "correct": false
      },
      {
        "text": "The MediSave Account, for large approved expenses.",
        "correct": false
      },
      {
        "text": "The Ordinary Account (OA).",
        "correct": true
      }
    ],
    "explanation": "The three CPF accounts are: Ordinary Account (housing, insurance, investment, education), Special Account (retirement-related), and MediSave Account (hospitalisation and medical insurance).",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Jessica Tan",
      "age": 27,
      "bg": "freelance graphic designer",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "A 30-year-old member wants to use CPF savings for an overseas education programme. Which account and what limitation applies?",
    "choices": [
      {
        "text": "The Special Account covers education expenses as it supports long-term planning.",
        "correct": false
      },
      {
        "text": "The Retirement Account is the only account that allows education withdrawals after age 30.",
        "correct": false
      },
      {
        "text": "The Ordinary Account can be used for education, but only for approved courses — not all overseas programmes are eligible.",
        "correct": true
      },
      {
        "text": "The MediSave Account can be used for education-related medical fees only.",
        "correct": false
      }
    ],
    "explanation": "The three CPF accounts are: Ordinary Account (housing, insurance, investment, education), Special Account (retirement-related), and MediSave Account (hospitalisation and medical insurance).",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mohamed Shariff",
      "age": 50,
      "bg": "secondary school principal",
      "emoji": "👨‍🏫",
      "salutation": "Mr",
      "lastname": "Shariff"
    }
  },
  {
    "q": "What is the official CPF website address?",
    "choices": [
      {
        "text": "singpass.gov.sg/cpf",
        "correct": false
      },
      {
        "text": "cpfonline.sg",
        "correct": false
      },
      {
        "text": "mycpf.gov.sg",
        "correct": false
      },
      {
        "text": "cpf.gov.sg",
        "correct": true
      }
    ],
    "explanation": "The official CPF website is cpf.gov.sg where members can access information and my cpf digital services for transactions.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Grace Loh",
      "age": 36,
      "bg": "physiotherapist",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Loh"
    }
  },
  {
    "q": "A member wants to check CPF schemes and perform transactions online. Where should they go?",
    "choices": [
      {
        "text": "The CPF website at cpf.gov.sg — from there they can access my cpf digital services for transactions.",
        "correct": true
      },
      {
        "text": "The Singpass portal at singpass.gov.sg handles all CPF transactions directly.",
        "correct": false
      },
      {
        "text": "Members must download the CPF app — the website does not support transactions.",
        "correct": false
      },
      {
        "text": "transactions.cpf.gov.sg is the dedicated transaction portal.",
        "correct": false
      }
    ],
    "explanation": "The official CPF website is cpf.gov.sg where members can access information and my cpf digital services for transactions.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "David Koh",
      "age": 53,
      "bg": "property agent",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "A member accessed 'myCPF.sg' and could not find their account. What is the issue?",
    "choices": [
      {
        "text": "The correct website is cpf.gov.sg — myCPF.sg is not an official CPF portal and the member may have been on an incorrect or fraudulent site.",
        "correct": true
      },
      {
        "text": "They need to enable Singpass 2FA before myCPF.sg allows account access.",
        "correct": false
      },
      {
        "text": "myCPF.sg is only for employers; members should use employee.cpf.gov.sg.",
        "correct": false
      },
      {
        "text": "myCPF.sg is correct but is undergoing maintenance; advise them to try again later.",
        "correct": false
      }
    ],
    "explanation": "The official CPF website is cpf.gov.sg where members can access information and my cpf digital services for transactions.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Ah Kow",
      "age": 67,
      "bg": "retired bus driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "How should a Singapore Citizen inform CPF Board of an address change?",
    "choices": [
      {
        "text": "They do not need to inform CPF separately — updating via ICA's e-Services automatically updates CPF through OSCARS within one day.",
        "correct": true
      },
      {
        "text": "Call the CPF hotline to update the address.",
        "correct": false
      },
      {
        "text": "Email CPF Board with a copy of their new address proof.",
        "correct": false
      },
      {
        "text": "Fill in a change-of-address form at any CPF Service Centre.",
        "correct": false
      }
    ],
    "explanation": "CPF Board is part of OSCARS — when members update via ICA's e-Services, CPF is automatically notified within one day. No separate CPF notification is needed.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Siti Rahimah",
      "age": 45,
      "bg": "primary school teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Rahimah"
    }
  },
  {
    "q": "A PR updated their address with ICA but CPF still shows the old address. What do you tell them?",
    "choices": [
      {
        "text": "They need to also update CPF separately by visiting a Service Centre.",
        "correct": false
      },
      {
        "text": "CPF address updates take up to 14 working days after the ICA update.",
        "correct": false
      },
      {
        "text": "OSCARS does not apply to PRs — they must notify CPF directly in writing.",
        "correct": false
      },
      {
        "text": "The OSCARS update should propagate to CPF within one day — they should check again the next working day.",
        "correct": true
      }
    ],
    "explanation": "CPF Board is part of OSCARS — when members update via ICA's e-Services, CPF is automatically notified within one day. No separate CPF notification is needed.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Rajesh Kumar",
      "age": 38,
      "bg": "IT engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Kumar"
    }
  },
  {
    "q": "A member living overseas asks how to update their overseas address with CPF. What is correct?",
    "choices": [
      {
        "text": "They must email a scanned proof of address to CPF Board.",
        "correct": false
      },
      {
        "text": "CPF does not store overseas addresses — only Singapore addresses are recorded.",
        "correct": false
      },
      {
        "text": "They can apply via ICA's e-Services using Singpass to change their overseas address — CPF will be updated through OSCARS.",
        "correct": true
      },
      {
        "text": "Overseas address changes must be done in person at a Singapore CPF Service Centre.",
        "correct": false
      }
    ],
    "explanation": "CPF Board is part of OSCARS — when members update via ICA's e-Services, CPF is automatically notified within one day. No separate CPF notification is needed.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Lim Mei Ling",
      "age": 29,
      "bg": "marketing executive",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Lim"
    }
  },
  {
    "q": "When should a Singapore Citizen inform CPF Board of changes to their particulars?",
    "choices": [
      {
        "text": "Only for name changes — other changes are automatic.",
        "correct": false
      },
      {
        "text": "They do not need to — CPF automatically updates from official records.",
        "correct": true
      },
      {
        "text": "Within 14 days of any change.",
        "correct": false
      },
      {
        "text": "Annually during the YSOA review period.",
        "correct": false
      }
    ],
    "explanation": "CPF uses the principal name on the NRIC. Variants like Hanyu Pinyin, married names, or aliases are not used unless the member first updates the principal name on their NRIC through ICA.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Ahmad Fadzillah",
      "age": 52,
      "bg": "hawker stall owner",
      "emoji": "👨‍🍳",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "A member recently changed their legal name on their NRIC. Do they need to notify CPF?",
    "choices": [
      {
        "text": "Yes — they must submit a name change form with a copy of their new NRIC.",
        "correct": false
      },
      {
        "text": "Only if the name change affects their CPF nomination.",
        "correct": false
      },
      {
        "text": "No — for SC/PR members, CPF automatically updates the name from official records. No separate notification is needed.",
        "correct": true
      },
      {
        "text": "Yes — name changes are not covered by OSCARS and must be done separately.",
        "correct": false
      }
    ],
    "explanation": "CPF uses the principal name on the NRIC. Variants like Hanyu Pinyin, married names, or aliases are not used unless the member first updates the principal name on their NRIC through ICA.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Chen Wei Ming",
      "age": 61,
      "bg": "recently retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chen"
    }
  },
  {
    "q": "A member uses a Hanyu Pinyin name on some documents and wants CPF records to reflect this. What should they do?",
    "choices": [
      {
        "text": "Hanyu Pinyin names are automatically included if listed on the NRIC as an alias.",
        "correct": false
      },
      {
        "text": "CPF can update alternative names upon request — no NRIC change needed.",
        "correct": false
      },
      {
        "text": "They can submit a written request to CPF Board to add an alias alongside their principal name.",
        "correct": false
      },
      {
        "text": "CPF uses the principal name on the NRIC. To use a Hanyu Pinyin name, they must first update the NRIC principal name with ICA.",
        "correct": true
      }
    ],
    "explanation": "CPF uses the principal name on the NRIC. Variants like Hanyu Pinyin, married names, or aliases are not used unless the member first updates the principal name on their NRIC through ICA.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Priya Devi",
      "age": 34,
      "bg": "hospital nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Priya"
    }
  },
  {
    "q": "A member received CPF mail addressed to a previous occupant. What should they do?",
    "choices": [
      {
        "text": "Open the mail and call CPF to correct the address.",
        "correct": false
      },
      {
        "text": "Bring it to a CPF Service Centre for redirection.",
        "correct": false
      },
      {
        "text": "State the reason (e.g. 'no such person') and drop it in a SingPost 'Return Mail Here' mailbox.",
        "correct": true
      },
      {
        "text": "Throw it away as it is not their mail.",
        "correct": false
      }
    ],
    "explanation": "The correct action is to write the reason for return and use SingPost's Return Mail Here service — CPF processes returned mail and updates records accordingly.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Ng Boon Kiat",
      "age": 55,
      "bg": "construction project manager",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "Undelivered CPF mail returned via SingPost goes back to whom?",
    "choices": [
      {
        "text": "It is held at the post office for 14 days for collection.",
        "correct": false
      },
      {
        "text": "It is destroyed by SingPost after 30 days.",
        "correct": false
      },
      {
        "text": "CPF Board.",
        "correct": true
      },
      {
        "text": "It is forwarded to the address in the previous occupant's Singpass.",
        "correct": false
      }
    ],
    "explanation": "The correct action is to write the reason for return and use SingPost's Return Mail Here service — CPF processes returned mail and updates records accordingly.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Fatimah Zahra",
      "age": 72,
      "bg": "widowed homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zahra"
    }
  },
  {
    "q": "A new homeowner has returned misdirected CPF letters three times but new ones keep arriving. What is the best advice?",
    "choices": [
      {
        "text": "Continue marking the reason (e.g. 'change of owner') on each envelope and returning via SingPost's Return Mail Here mailbox — CPF will update records when the returned mail is processed.",
        "correct": true
      },
      {
        "text": "Call CPF Board with the previous owner's NRIC to have the address corrected immediately.",
        "correct": false
      },
      {
        "text": "File a complaint with SingPost to block future delivery of that name.",
        "correct": false
      },
      {
        "text": "Contact the previous owner directly and ask them to update their address.",
        "correct": false
      }
    ],
    "explanation": "The correct action is to write the reason for return and use SingPost's Return Mail Here service — CPF processes returned mail and updates records accordingly.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Kevin Ong",
      "age": 24,
      "bg": "fresh graduate starting first job",
      "emoji": "👦",
      "salutation": "Mr",
      "lastname": "Ong"
    }
  },
  {
    "q": "When was a non-SC/PR account automatically closed if the member lost status before 1 April 2024?",
    "choices": [
      {
        "text": "6 months after renunciation.",
        "correct": false
      },
      {
        "text": "Their account was automatically closed in April 2024.",
        "correct": true
      },
      {
        "text": "At the end of the financial year.",
        "correct": false
      },
      {
        "text": "Immediately upon renunciation.",
        "correct": false
      }
    ],
    "explanation": "From 1 April 2024 onwards, accounts are closed the month after renunciation. Before that date, all non-SC/PR accounts were closed in April 2024.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Mary Pereira",
      "age": 48,
      "bg": "self-employed accountant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Pereira"
    }
  },
  {
    "q": "A member who renounced PR in March 2024 asks when their CPF account was closed. What do you tell them?",
    "choices": [
      {
        "text": "Since they renounced before 1 April 2024, their account was automatically closed in April 2024.",
        "correct": true
      },
      {
        "text": "Their account will be closed in September 2024, 6 months after renunciation.",
        "correct": false
      },
      {
        "text": "Their account remains open until they withdraw all savings.",
        "correct": false
      },
      {
        "text": "Their account was closed in March 2024, the month they renounced.",
        "correct": false
      }
    ],
    "explanation": "From 1 April 2024 onwards, accounts are closed the month after renunciation. Before that date, all non-SC/PR accounts were closed in April 2024.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Lee Chong Wei",
      "age": 43,
      "bg": "logistics director",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "A member who lost PR status in June 2024 asks when their account will be closed. What is correct?",
    "choices": [
      {
        "text": "For renunciations from 1 April 2024 onwards, the account is closed the month following renunciation — so in July 2024.",
        "correct": true
      },
      {
        "text": "Their account was closed in June 2024 — the same month as renunciation.",
        "correct": false
      },
      {
        "text": "Their account will be closed in April 2025 — 12 months after the new rule took effect.",
        "correct": false
      },
      {
        "text": "Their account stays open indefinitely as they can withdraw at any time.",
        "correct": false
      }
    ],
    "explanation": "From 1 April 2024 onwards, accounts are closed the month after renunciation. Before that date, all non-SC/PR accounts were closed in April 2024.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Noor Hidayah",
      "age": 31,
      "bg": "social worker",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Noor"
    }
  },
  {
    "q": "What interest do closed non-SC/PR CPF accounts earn?",
    "choices": [
      {
        "text": "The prevailing CPF Ordinary Account rate continues until withdrawal.",
        "correct": false
      },
      {
        "text": "The Fixed Deposit rate, reviewed quarterly.",
        "correct": false
      },
      {
        "text": "A concession interest rate of approximately 0.05% p.a. until 31 March 2027, then no interest.",
        "correct": true
      },
      {
        "text": "No interest at all from the date of closure.",
        "correct": false
      }
    ],
    "explanation": "After account closure, savings earn a concession rate (0.05% p.a.) until 31 March 2027 only. After that, no interest accrues.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Ho Swee Lian",
      "age": 58,
      "bg": "shopping mall cleaner",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Ho"
    }
  },
  {
    "q": "A member's account was closed after renunciation and they have not yet transferred their savings. What interest do they earn?",
    "choices": [
      {
        "text": "They continue earning the prevailing CPF OA rate as a goodwill gesture.",
        "correct": false
      },
      {
        "text": "No interest from the date of closure.",
        "correct": false
      },
      {
        "text": "A concession rate based on the 3-month average of local banks' savings rates (0.05% p.a.) applies until 31 March 2027, after which no interest is paid.",
        "correct": true
      },
      {
        "text": "They earn 1% p.a. — the minimum guaranteed rate for all CPF accounts.",
        "correct": false
      }
    ],
    "explanation": "After account closure, savings earn a concession rate (0.05% p.a.) until 31 March 2027 only. After that, no interest accrues.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Suresh Nair",
      "age": 40,
      "bg": "taxi driver who became PR",
      "emoji": "🚕",
      "salutation": "Mr",
      "lastname": "Nair"
    }
  },
  {
    "q": "A former PR's account was closed in May 2024. It is now after 1 April 2027 and they have still not withdrawn. Do they earn interest?",
    "choices": [
      {
        "text": "Yes — 0.05% p.a. continues indefinitely until withdrawal.",
        "correct": false
      },
      {
        "text": "Yes — CPF must pay at least 0.01% p.a. on all savings by law.",
        "correct": false
      },
      {
        "text": "The savings are forfeited to the government if not withdrawn by 2027.",
        "correct": false
      },
      {
        "text": "No — the concession interest of 0.05% p.a. only applied until 31 March 2027. From 1 April 2027, no interest is paid.",
        "correct": true
      }
    ],
    "explanation": "After account closure, savings earn a concession rate (0.05% p.a.) until 31 March 2027 only. After that, no interest accrues.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Chua Beng Huat",
      "age": 66,
      "bg": "retired factory supervisor",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chua"
    }
  },
  {
    "q": "When should a member download their CPF information before renouncing citizenship?",
    "choices": [
      {
        "text": "Within 30 days after renunciation.",
        "correct": false
      },
      {
        "text": "While they still have access to their Singpass account.",
        "correct": true
      },
      {
        "text": "CPF will automatically send all documents by post.",
        "correct": false
      },
      {
        "text": "They can request documents anytime via email after renunciation.",
        "correct": false
      }
    ],
    "explanation": "CPF cannot disclose account info via phone or email without authentication. Members should download everything while Singpass is still active. After renunciation, a Service Centre visit with valid ID is the option.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Jessica Tan",
      "age": 27,
      "bg": "freelance graphic designer",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "A former SC who has just renounced wants to get their account balance by phone. Can CPF assist?",
    "choices": [
      {
        "text": "No — CPF cannot disclose account-specific information over the phone due to authentication difficulties. The member should have downloaded this while Singpass was active.",
        "correct": true
      },
      {
        "text": "Yes — phone verification using a foreign passport number is accepted.",
        "correct": false
      },
      {
        "text": "Yes — CPF can verify identity using their old NRIC and date of birth.",
        "correct": false
      },
      {
        "text": "CPF can mail a summary statement to their overseas address upon request.",
        "correct": false
      }
    ],
    "explanation": "CPF cannot disclose account info via phone or email without authentication. Members should download everything while Singpass is still active. After renunciation, a Service Centre visit with valid ID is the option.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Mohamed Shariff",
      "age": 50,
      "bg": "secondary school principal",
      "emoji": "👨‍🏫",
      "salutation": "Mr",
      "lastname": "Shariff"
    }
  },
  {
    "q": "A recently renounced member needs CPF transaction history for tax filing and no longer has Singpass. What are their options?",
    "choices": [
      {
        "text": "CPF can send documents via registered post if the member submits a written request with a certified foreign passport copy.",
        "correct": false
      },
      {
        "text": "CPF cannot disclose information via phone or email without authentication. The member should visit a CPF Service Centre in person with valid ID — their full balance can be transferred to their bank account upon request.",
        "correct": true
      },
      {
        "text": "There are no options — once Singpass is deactivated, all CPF records are inaccessible.",
        "correct": false
      },
      {
        "text": "The member can authorise a family member with Singpass to access their CPF records.",
        "correct": false
      }
    ],
    "explanation": "CPF cannot disclose account info via phone or email without authentication. Members should download everything while Singpass is still active. After renunciation, a Service Centre visit with valid ID is the option.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Grace Loh",
      "age": 36,
      "bg": "physiotherapist",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Loh"
    }
  },
  {
    "q": "What happens to CPF scheme participation when a CPF account is closed?",
    "choices": [
      {
        "text": "Members can opt to keep specific schemes running for up to 2 years.",
        "correct": false
      },
      {
        "text": "Most schemes continue for 12 months as a grace period.",
        "correct": false
      },
      {
        "text": "Only the Silver Support Scheme is discontinued; others continue.",
        "correct": false
      },
      {
        "text": "Participation in all CPF-administered schemes ceases.",
        "correct": true
      }
    ],
    "explanation": "All CPF-administered schemes cease when the account is closed. Members should refer to the Schemes participation upon account closure section for scheme-by-scheme details.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "David Koh",
      "age": 53,
      "bg": "property agent",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "A member whose account was closed asks if they still receive Silver Support payments. What do you tell them?",
    "choices": [
      {
        "text": "Silver Support payments continue until the end of the current quarter.",
        "correct": false
      },
      {
        "text": "Yes — Silver Support is a government benefit that continues regardless of CPF status.",
        "correct": false
      },
      {
        "text": "No — when a CPF account is closed, participation in all CPF Board-administered schemes including Silver Support ceases.",
        "correct": true
      },
      {
        "text": "Their eligibility is reassessed annually; they may still receive payments if they qualify.",
        "correct": false
      }
    ],
    "explanation": "All CPF-administered schemes cease when the account is closed. Members should refer to the Schemes participation upon account closure section for scheme-by-scheme details.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Tan Ah Kow",
      "age": 67,
      "bg": "retired bus driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member's account closure is scheduled for next month and they currently receive Silver Support. When exactly does it stop?",
    "choices": [
      {
        "text": "Silver Support continues for 12 months after account closure as a transitional measure.",
        "correct": false
      },
      {
        "text": "Silver Support stops at the end of the calendar year in which the account is closed.",
        "correct": false
      },
      {
        "text": "Participation in CPF schemes ceases when the account is closed — members should review the Schemes participation upon account closure FAQ for exact details.",
        "correct": true
      },
      {
        "text": "The last payment is made in the month of closure; subsequent payments are cancelled.",
        "correct": false
      }
    ],
    "explanation": "All CPF-administered schemes cease when the account is closed. Members should refer to the Schemes participation upon account closure section for scheme-by-scheme details.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Siti Rahimah",
      "age": 45,
      "bg": "primary school teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Rahimah"
    }
  },
  {
    "q": "What is the Central Provident Fund (CPF)?",
    "choices": [
      {
        "text": "An insurance program funded by employer contributions only.",
        "correct": false
      },
      {
        "text": "A government bank that provides loans for HDB flat purchases.",
        "correct": false
      },
      {
        "text": "A mandatory savings scheme exclusively for retirement withdrawals at age 65.",
        "correct": false
      },
      {
        "text": "A comprehensive social security system enabling working Singaporeans and PRs to save for retirement, healthcare, and home ownership.",
        "correct": true
      }
    ],
    "explanation": "CPF is a comprehensive social security system with OA (housing/insurance/education/investment), SA (retirement), and MA (healthcare). It covers retirement, housing, healthcare, family protection, and asset enhancement.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Rajesh Kumar",
      "age": 38,
      "bg": "IT engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Kumar"
    }
  },
  {
    "q": "A member asks what CPF is used for beyond retirement. What should you mention?",
    "choices": [
      {
        "text": "CPF is mainly for retirement; housing and healthcare are discretionary extras.",
        "correct": false
      },
      {
        "text": "CPF addresses retirement, healthcare (MediSave), home ownership (OA), family protection, and asset enhancement.",
        "correct": true
      },
      {
        "text": "CPF covers retirement and housing only — healthcare has a separate Medisave scheme.",
        "correct": false
      },
      {
        "text": "CPF is exclusively for retirement and cannot be used for other purposes before age 55.",
        "correct": false
      }
    ],
    "explanation": "CPF is a comprehensive social security system with OA (housing/insurance/education/investment), SA (retirement), and MA (healthcare). It covers retirement, housing, healthcare, family protection, and asset enhancement.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lim Mei Ling",
      "age": 29,
      "bg": "marketing executive",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Lim"
    }
  },
  {
    "q": "A member says CPF is 'just a retirement fund'. How do you best correct this?",
    "choices": [
      {
        "text": "CPF is indeed primarily a retirement fund, but allows limited withdrawals for housing.",
        "correct": false
      },
      {
        "text": "CPF is a comprehensive social security system. The OA covers housing, insurance, investment and education; MediSave covers hospitalisation; Special Account is for retirement-related financial products.",
        "correct": true
      },
      {
        "text": "CPF only covers retirement and housing — medical expenses are covered by Medishield Life, not MediSave.",
        "correct": false
      },
      {
        "text": "CPF is a pension scheme; healthcare and housing are add-on government benefits, not part of CPF itself.",
        "correct": false
      }
    ],
    "explanation": "CPF is a comprehensive social security system with OA (housing/insurance/education/investment), SA (retirement), and MA (healthcare). It covers retirement, housing, healthcare, family protection, and asset enhancement.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Ahmad Fadzillah",
      "age": 52,
      "bg": "hawker stall owner",
      "emoji": "👨‍🍳",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "What should a member do if they have Singpass login issues?",
    "choices": [
      {
        "text": "Visit a CPF Service Centre with their NRIC.",
        "correct": false
      },
      {
        "text": "Contact the Singpass Helpdesk directly — CPF Board uses Singpass but does not manage it.",
        "correct": true
      },
      {
        "text": "Submit a form on cpf.gov.sg to request a Singpass password reset.",
        "correct": false
      },
      {
        "text": "Call the CPF hotline and a CPF officer will reset the password.",
        "correct": false
      }
    ],
    "explanation": "Singpass is governed by GovTech, not CPF Board. All password reset and 2FA issues must be directed to the Singpass Helpdesk. CPF has no ability to intervene.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Chen Wei Ming",
      "age": 61,
      "bg": "recently retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chen"
    }
  },
  {
    "q": "A member cannot receive their Singpass SMS OTP. Who should they contact?",
    "choices": [
      {
        "text": "The nearest ServiceSG Centre where CPF officers can override the 2FA requirement.",
        "correct": false
      },
      {
        "text": "CPF Board's digital services team, as they manage Singpass for CPF transactions.",
        "correct": false
      },
      {
        "text": "Their telco provider first, then CPF.",
        "correct": false
      },
      {
        "text": "The Singpass Helpdesk — Singpass is administered by GovTech, not CPF Board.",
        "correct": true
      }
    ],
    "explanation": "Singpass is governed by GovTech, not CPF Board. All password reset and 2FA issues must be directed to the Singpass Helpdesk. CPF has no ability to intervene.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Priya Devi",
      "age": 34,
      "bg": "hospital nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Priya"
    }
  },
  {
    "q": "A member says a CPF officer previously helped reset their Singpass and they want the same again. What is correct?",
    "choices": [
      {
        "text": "Senior CPF officers have admin access to reset Singpass accounts — escalate the case.",
        "correct": false
      },
      {
        "text": "CPF can issue a temp PIN for urgent cases if the member provides NRIC and DOB.",
        "correct": false
      },
      {
        "text": "CPF Board cannot reset Singpass — it is governed by GovTech. The member must contact the Singpass Helpdesk.",
        "correct": true
      },
      {
        "text": "Ask the member to try again in 24 hours — Singpass resets have a cooling-off period.",
        "correct": false
      }
    ],
    "explanation": "Singpass is governed by GovTech, not CPF Board. All password reset and 2FA issues must be directed to the Singpass Helpdesk. CPF has no ability to intervene.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Ng Boon Kiat",
      "age": 55,
      "bg": "construction project manager",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "How does a member reset their Singpass password?",
    "choices": [
      {
        "text": "Reset via the CPF Mobile App under Account Settings.",
        "correct": false
      },
      {
        "text": "Visit the Singpass website, select Log in, then Reset password under the Services tab and follow the instructions.",
        "correct": true
      },
      {
        "text": "Call the CPF hotline and a CPF officer will reset it within 2 working days.",
        "correct": false
      },
      {
        "text": "Visit a CPF Service Centre with your NRIC.",
        "correct": false
      }
    ],
    "explanation": "The Singpass password reset is done via the Singpass website Services tab. For further help, contact the Singpass Helpdesk — CPF has no role in the process.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Fatimah Zahra",
      "age": 72,
      "bg": "widowed homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zahra"
    }
  },
  {
    "q": "A member forgot their Singpass password and cannot access CPF online services. What are the steps?",
    "choices": [
      {
        "text": "Contact CPF Board — they can temporarily unlock the account within 24 hours.",
        "correct": false
      },
      {
        "text": "Visit ICA with your NRIC to get a temporary Singpass PIN.",
        "correct": false
      },
      {
        "text": "Use the CPF app to generate a one-time bypass code valid for 24 hours.",
        "correct": false
      },
      {
        "text": "Go to the Singpass website > Log in > Reset password under Services tab > follow on-screen instructions. For further help, contact the Singpass Helpdesk.",
        "correct": true
      }
    ],
    "explanation": "The Singpass password reset is done via the Singpass website Services tab. For further help, contact the Singpass Helpdesk — CPF has no role in the process.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Kevin Ong",
      "age": 24,
      "bg": "fresh graduate starting first job",
      "emoji": "👦",
      "salutation": "Mr",
      "lastname": "Ong"
    }
  },
  {
    "q": "A member says the Singpass password reset is not working and asks CPF to intervene. What is the correct response?",
    "choices": [
      {
        "text": "Ask the member to try again in 24 hours — Singpass resets have a cooling-off period.",
        "correct": false
      },
      {
        "text": "CPF can escalate to GovTech on the member's behalf — this usually resolves in 3 working days.",
        "correct": false
      },
      {
        "text": "CPF can issue a temporary login bypass for urgent cases using NRIC and DOB.",
        "correct": false
      },
      {
        "text": "CPF Board has no authority over Singpass. The member must contact the Singpass Helpdesk directly for technical assistance.",
        "correct": true
      }
    ],
    "explanation": "The Singpass password reset is done via the Singpass website Services tab. For further help, contact the Singpass Helpdesk — CPF has no role in the process.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Mary Pereira",
      "age": 48,
      "bg": "self-employed accountant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Pereira"
    }
  },
  {
    "q": "What can members do with the CPF Mobile App?",
    "choices": [
      {
        "text": "It is a Singpass companion app for two-factor authentication only.",
        "correct": false
      },
      {
        "text": "A government app that consolidates all social security accounts.",
        "correct": false
      },
      {
        "text": "An app exclusively for CPF investment transactions.",
        "correct": false
      },
      {
        "text": "Access their CPF account information and perform transactions on their mobile device.",
        "correct": true
      }
    ],
    "explanation": "The CPF Mobile App supports account transactions. Downloaded files go to the device — a specific FAQ helps members find downloaded documents on mobile.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Lee Chong Wei",
      "age": 43,
      "bg": "logistics director",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "A member downloaded their YSOA on the CPF Mobile App. Where does the file go on their mobile device?",
    "choices": [
      {
        "text": "Downloaded documents are saved to the device — there is a specific FAQ explaining how to locate downloaded files on mobile devices.",
        "correct": true
      },
      {
        "text": "Documents are saved to the CPF cloud and accessible via the My Documents tab.",
        "correct": false
      },
      {
        "text": "The app does not support YSOA downloads — they must use a desktop browser.",
        "correct": false
      },
      {
        "text": "Downloaded statements are automatically sent to the member's registered email.",
        "correct": false
      }
    ],
    "explanation": "The CPF Mobile App supports account transactions. Downloaded files go to the device — a specific FAQ helps members find downloaded documents on mobile.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Noor Hidayah",
      "age": 31,
      "bg": "social worker",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Noor"
    }
  },
  {
    "q": "A member on an older Android phone cannot find their downloaded CPF YSOA. What do you tell them?",
    "choices": [
      {
        "text": "There is a specific FAQ on locating downloaded documents on mobile devices — the file location varies by device and the member should refer to that guide.",
        "correct": true
      },
      {
        "text": "Downloads on Android go to the default Downloads folder in the File Manager app.",
        "correct": false
      },
      {
        "text": "The YSOA cannot be downloaded on mobile — use a desktop browser.",
        "correct": false
      },
      {
        "text": "The CPF app saves files to iCloud or Google Drive — link the cloud account first.",
        "correct": false
      }
    ],
    "explanation": "The CPF Mobile App supports account transactions. Downloaded files go to the device — a specific FAQ helps members find downloaded documents on mobile.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Ho Swee Lian",
      "age": 58,
      "bg": "shopping mall cleaner",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Ho"
    }
  },
  {
    "q": "What does the Silver Support Scheme provide?",
    "choices": [
      {
        "text": "Annual bonuses to seniors with CPF savings below $5,000.",
        "correct": false
      },
      {
        "text": "Quarterly cash supplements to seniors who had low incomes during their working years and have less in retirement.",
        "correct": true
      },
      {
        "text": "A government grant for seniors to purchase medical devices.",
        "correct": false
      },
      {
        "text": "Monthly subsidies for seniors' MediSave top-ups.",
        "correct": false
      }
    ],
    "explanation": "Silver Support provides quarterly cash supplements to eligible seniors with low working incomes. It is part of a wider retirement assurance suite. Eligibility is reviewed annually — no application needed.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Suresh Nair",
      "age": 40,
      "bg": "taxi driver who became PR",
      "emoji": "🚕",
      "salutation": "Mr",
      "lastname": "Nair"
    }
  },
  {
    "q": "A 70-year-old member asks what the Silver Support Scheme provides. What do you tell them?",
    "choices": [
      {
        "text": "The SS Scheme provides quarterly cash supplements to eligible seniors with low working incomes. It is part of a wider retirement assurance suite alongside healthcare subsidies and GST vouchers.",
        "correct": true
      },
      {
        "text": "SS supplements CPF payouts monthly based on the Retirement Account balance.",
        "correct": false
      },
      {
        "text": "SS provides monthly top-ups directly to the MediSave Account.",
        "correct": false
      },
      {
        "text": "SS provides a one-time annual grant of up to $3,000 for low-income seniors.",
        "correct": false
      }
    ],
    "explanation": "Silver Support provides quarterly cash supplements to eligible seniors with low working incomes. It is part of a wider retirement assurance suite. Eligibility is reviewed annually — no application needed.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Chua Beng Huat",
      "age": 66,
      "bg": "retired factory supervisor",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chua"
    }
  },
  {
    "q": "A senior asks why they stopped receiving Silver Support after their CPF account was closed. Explain.",
    "choices": [
      {
        "text": "Participation in all CPF-administered schemes including Silver Support ceases when the CPF account is closed.",
        "correct": true
      },
      {
        "text": "Silver Support is a government benefit that should continue regardless of CPF account status — advise them to check with MSF.",
        "correct": false
      },
      {
        "text": "Silver Support stops when the member reaches age 80, not when the account closes.",
        "correct": false
      },
      {
        "text": "They likely exceeded the income threshold — the SS Scheme reviews eligibility every 2 years.",
        "correct": false
      }
    ],
    "explanation": "Silver Support provides quarterly cash supplements to eligible seniors with low working incomes. It is part of a wider retirement assurance suite. Eligibility is reviewed annually — no application needed.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Jessica Tan",
      "age": 27,
      "bg": "freelance graphic designer",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "Do members need to apply for the Silver Support Scheme?",
    "choices": [
      {
        "text": "Yes — members must apply online via my cpf digital services each year.",
        "correct": false
      },
      {
        "text": "Yes — a one-time application is required at a CPF Service Centre.",
        "correct": false
      },
      {
        "text": "Yes — eligible seniors must confirm acceptance within 30 days of notification.",
        "correct": false
      },
      {
        "text": "No — CPF Board automatically reviews eligibility every year and eligible seniors receive it automatically.",
        "correct": true
      }
    ],
    "explanation": "No application is needed for Silver Support. CPF Board automatically reviews eligibility annually and eligible seniors are notified in December.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Mohamed Shariff",
      "age": 50,
      "bg": "secondary school principal",
      "emoji": "👨‍🏫",
      "salutation": "Mr",
      "lastname": "Shariff"
    }
  },
  {
    "q": "An elderly member's family asks how the senior can receive Silver Support. What is the process?",
    "choices": [
      {
        "text": "The senior must submit income documents to CPF Board for assessment.",
        "correct": false
      },
      {
        "text": "Eligibility is assessed once at age 65 — no annual review is required.",
        "correct": false
      },
      {
        "text": "The family member can apply on behalf of the senior at any ServiceSG Centre.",
        "correct": false
      },
      {
        "text": "No application is needed. CPF Board automatically reviews eligibility annually and eligible seniors receive a notification in December of the preceding year.",
        "correct": true
      }
    ],
    "explanation": "No application is needed for Silver Support. CPF Board automatically reviews eligibility annually and eligible seniors are notified in December.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Grace Loh",
      "age": 36,
      "bg": "physiotherapist",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Loh"
    }
  },
  {
    "q": "A member received SS payments last year but not this year and has received no notification. What should you check?",
    "choices": [
      {
        "text": "The December notification must have been missed — ask them to apply retrospectively.",
        "correct": false
      },
      {
        "text": "CPF reviews eligibility every year — the member may no longer meet the criteria. They should log in to e-services to check eligibility status or submit an enquiry.",
        "correct": true
      },
      {
        "text": "SS payments are made every 6 months — the gap is normal.",
        "correct": false
      },
      {
        "text": "Payment gaps are caused by Singpass issues — verify their 2FA is working.",
        "correct": false
      }
    ],
    "explanation": "No application is needed for Silver Support. CPF Board automatically reviews eligibility annually and eligible seniors are notified in December.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "David Koh",
      "age": 53,
      "bg": "property agent",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "How often are Silver Support payments made?",
    "choices": [
      {
        "text": "Monthly, on the 15th of each month.",
        "correct": false
      },
      {
        "text": "Twice a year, in June and December.",
        "correct": false
      },
      {
        "text": "Once a year, in January.",
        "correct": false
      },
      {
        "text": "Quarterly.",
        "correct": true
      }
    ],
    "explanation": "Silver Support payments are made quarterly. The Government periodically reviews the scheme to ensure it targets deserving seniors.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Ah Kow",
      "age": 67,
      "bg": "retired bus driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "A Silver Support recipient wants to know when their next payment is. What do you tell them?",
    "choices": [
      {
        "text": "Payments are annual and made every January.",
        "correct": false
      },
      {
        "text": "There are two payments per year — in June and December.",
        "correct": false
      },
      {
        "text": "Silver Support payments are made quarterly — they can log in to e-services to check the specific payment schedule.",
        "correct": true
      },
      {
        "text": "Payments are made on the 1st of every month.",
        "correct": false
      }
    ],
    "explanation": "Silver Support payments are made quarterly. The Government periodically reviews the scheme to ensure it targets deserving seniors.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Siti Rahimah",
      "age": 45,
      "bg": "primary school teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Rahimah"
    }
  },
  {
    "q": "A member received their first SS payment in January. When should they expect the next one?",
    "choices": [
      {
        "text": "The next payment is in July — SS has a 6-month cycle.",
        "correct": false
      },
      {
        "text": "The second payment is in December — SS is paid twice yearly.",
        "correct": false
      },
      {
        "text": "Payments are quarterly — approximately every 3 months, so the next would be around April.",
        "correct": true
      },
      {
        "text": "The next payment is in February — SS is paid monthly.",
        "correct": false
      }
    ],
    "explanation": "Silver Support payments are made quarterly. The Government periodically reviews the scheme to ensure it targets deserving seniors.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Rajesh Kumar",
      "age": 38,
      "bg": "IT engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Kumar"
    }
  },
  {
    "q": "How can a senior check their Silver Support eligibility status?",
    "choices": [
      {
        "text": "Log in to CPF e-services via Singpass.",
        "correct": true
      },
      {
        "text": "Call the CPF hotline — eligibility cannot be checked online.",
        "correct": false
      },
      {
        "text": "Check the notification letter mailed in January each year.",
        "correct": false
      },
      {
        "text": "Visit a CPF Service Centre with their NRIC.",
        "correct": false
      }
    ],
    "explanation": "Seniors can check SS eligibility by logging in to CPF e-services. CPF cannot disclose personal account information to third parties without authorisation.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Lim Mei Ling",
      "age": 29,
      "bg": "marketing executive",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Lim"
    }
  },
  {
    "q": "A member was told they may be eligible for Silver Support but has received no payments. How should they check?",
    "choices": [
      {
        "text": "Eligibility is only confirmed at age 65 — no check is possible before then.",
        "correct": false
      },
      {
        "text": "They should log in to CPF e-services to check their eligibility status or submit an enquiry.",
        "correct": true
      },
      {
        "text": "Call CPF and provide income history for an immediate assessment.",
        "correct": false
      },
      {
        "text": "Wait for December when CPF sends eligibility notifications.",
        "correct": false
      }
    ],
    "explanation": "Seniors can check SS eligibility by logging in to CPF e-services. CPF cannot disclose personal account information to third parties without authorisation.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Ahmad Fadzillah",
      "age": 52,
      "bg": "hawker stall owner",
      "emoji": "👨‍🍳",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "A member's family contacts CPF to check SS eligibility on the member's behalf. Can they do this?",
    "choices": [
      {
        "text": "Any family member can call the CPF hotline and get eligibility info for a relative.",
        "correct": false
      },
      {
        "text": "Family members can check by providing the member's NRIC and date of birth.",
        "correct": false
      },
      {
        "text": "The member should log in to e-services themselves — CPF cannot disclose account-specific information to third parties without proper authorisation.",
        "correct": true
      },
      {
        "text": "CPF Board will mail eligibility information to the registered address — no action needed.",
        "correct": false
      }
    ],
    "explanation": "Seniors can check SS eligibility by logging in to CPF e-services. CPF cannot disclose personal account information to third parties without authorisation.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Chen Wei Ming",
      "age": 61,
      "bg": "recently retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chen"
    }
  },
  {
    "q": "When does CPF Board notify eligible seniors about Silver Support?",
    "choices": [
      {
        "text": "In January of the current year.",
        "correct": false
      },
      {
        "text": "In September, before the scheme year begins.",
        "correct": false
      },
      {
        "text": "In December of the preceding year.",
        "correct": true
      },
      {
        "text": "At the time of the first quarterly payment.",
        "correct": false
      }
    ],
    "explanation": "SS notifications go out in December for the following year. Payments are made quarterly — not necessarily starting in January. Members can check payment schedules via e-services.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Priya Devi",
      "age": 34,
      "bg": "hospital nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Priya"
    }
  },
  {
    "q": "A senior says they were not notified about Silver Support. When are notifications sent?",
    "choices": [
      {
        "text": "SS does not send notifications — members must proactively check eligibility online.",
        "correct": false
      },
      {
        "text": "Notifications are sent when the first payment is made — check the bank account.",
        "correct": false
      },
      {
        "text": "Notifications are only sent by post — if they moved, they may have missed it.",
        "correct": false
      },
      {
        "text": "Notifications are sent in December of the year preceding the payment year. If not received, they should check e-services or submit an enquiry.",
        "correct": true
      }
    ],
    "explanation": "SS notifications go out in December for the following year. Payments are made quarterly — not necessarily starting in January. Members can check payment schedules via e-services.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Ng Boon Kiat",
      "age": 55,
      "bg": "construction project manager",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "A member received an SS notification in December but no payment in January. What could explain this?",
    "choices": [
      {
        "text": "SS payments are made quarterly — January may not be the first payment month. The member should check the specific payment schedule on e-services.",
        "correct": true
      },
      {
        "text": "The December notification is provisional — a January bank verification step is required.",
        "correct": false
      },
      {
        "text": "Notification in December confirms eligibility for the following year beginning in April — no January payment is expected.",
        "correct": false
      },
      {
        "text": "There may be a Singpass authentication issue preventing the transfer — advise them to call.",
        "correct": false
      }
    ],
    "explanation": "SS notifications go out in December for the following year. Payments are made quarterly — not necessarily starting in January. Members can check payment schedules via e-services.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Fatimah Zahra",
      "age": 72,
      "bg": "widowed homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zahra"
    }
  },
  {
    "q": "Does Silver Support eligibility change once granted?",
    "choices": [
      {
        "text": "No — once granted, Silver Support continues until the member passes away.",
        "correct": false
      },
      {
        "text": "Yes — CPF Board reviews eligibility annually and criteria may change.",
        "correct": true
      },
      {
        "text": "No — eligibility is locked in for 5 years once granted.",
        "correct": false
      },
      {
        "text": "Yes — but only if the member submits an update to CPF Board.",
        "correct": false
      }
    ],
    "explanation": "SS eligibility is reviewed annually considering multiple factors. The Government periodically reviews the scheme to ensure it targets deserving seniors.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Kevin Ong",
      "age": 24,
      "bg": "fresh graduate starting first job",
      "emoji": "👦",
      "salutation": "Mr",
      "lastname": "Ong"
    }
  },
  {
    "q": "A senior started receiving rental income. Will this affect their Silver Support?",
    "choices": [
      {
        "text": "The change takes effect immediately and they will be removed from SS this quarter.",
        "correct": false
      },
      {
        "text": "Rental income is excluded from SS assessment — only employment income is considered.",
        "correct": false
      },
      {
        "text": "SS eligibility is locked in for 5 years once granted.",
        "correct": false
      },
      {
        "text": "CPF periodically reassesses SS eligibility — changes in income could affect eligibility at the next annual review.",
        "correct": true
      }
    ],
    "explanation": "SS eligibility is reviewed annually considering multiple factors. The Government periodically reviews the scheme to ensure it targets deserving seniors.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mary Pereira",
      "age": 48,
      "bg": "self-employed accountant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Pereira"
    }
  },
  {
    "q": "A senior asks if selling their second property affects their Silver Support. What is the most accurate response?",
    "choices": [
      {
        "text": "Property sales are capital gains and excluded from SS eligibility assessment.",
        "correct": false
      },
      {
        "text": "Any asset sale above $50,000 automatically disqualifies a member from SS for 2 years.",
        "correct": false
      },
      {
        "text": "The SS Scheme considers various factors including income and assets. The Government periodically reviews criteria. The senior should check their eligibility via e-services or submit an enquiry.",
        "correct": true
      },
      {
        "text": "SS is only based on CPF savings levels — property disposals have no impact.",
        "correct": false
      }
    ],
    "explanation": "SS eligibility is reviewed annually considering multiple factors. The Government periodically reviews the scheme to ensure it targets deserving seniors.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Lee Chong Wei",
      "age": 43,
      "bg": "logistics director",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  }
];

const EMAIL_SCENARIOS = [
  {
    "persona": {
      "name": "Tan Ah Kow",
      "age": 67,
      "bg": "retired bus driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    },
    "subject": "Enquiry about my CPF savings and account status",
    "enquiry": "Good morning,\n\nI am Tan Ah Kow, 67 years old and recently retired. I drive bus for SBS Transit for 35 years already.\n\nI want to check on my CPF yearly statement. I cannot find the letter in my mailbox this year — every year they send one right? My daughter say need to go online but I not so good with computer.\n\nAlso I want to know how to see my account balance. My Singpass password also I forgot. Can CPF help me reset or not?\n\nThank you very much.",
    "date": "10 March 2026",
    "correct": "Thank you for writing in. CPF Board has moved to fully digital yearly statements — these are no longer mailed. You can view, download and print your statement by logging in to my cpf digital services at cpf.gov.sg using your Singpass. For your Singpass password reset, please visit the Singpass website, select Log in, then Reset password under the Services tab. If you need further help with Singpass, please contact the Singpass Helpdesk directly as Singpass is managed by GovTech.",
    "wrong1": "We are sorry to hear you did not receive your yearly statement. We will arrange for a replacement hardcopy to be mailed to your registered address within 14 working days. For your Singpass issue, please visit your nearest CPF Service Centre and our staff will reset it for you.",
    "wrong2": "Your CPF yearly statement is sent by post every January. Please check with SingPost if it was delivered to the wrong address. For Singpass resets, please call our hotline and provide your NRIC and date of birth for verification.",
    "wrong3": "We note your enquiry. CPF yearly statements are available online. For Singpass matters, please contact the relevant government agency. We apologise for any inconvenience.",
    "added": "We hope the above clarifies your queries. Please do not hesitate to contact us if you require further assistance.",
    "explain": "The correct paragraph addresses both issues accurately: confirms the digital-only YSOA, provides the correct URL (cpf.gov.sg), and correctly directs Singpass issues to the Singpass Helpdesk (GovTech), not CPF Board.",
    "categories": [
      "Accounts Management",
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Siti Rahimah",
      "age": 45,
      "bg": "primary school teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Rahimah"
    },
    "subject": "Address update and member particulars query",
    "enquiry": "Dear CPF Board,\n\nI am writing to inform you that I have recently moved to a new HDB flat in Tampines. I have already updated my address with ICA last week.\n\nDo I need to separately inform CPF Board of my new address? My colleague told me there is some automatic system but she was not sure.\n\nAlso, I recently got married and my name has changed on my NRIC. Should I update CPF Board about my name change as well?\n\nKind regards,\nSiti Rahimah",
    "date": "10 March 2026",
    "correct": "You do not need to separately notify CPF Board for either change. Singapore Citizens and Permanent Residents who update their address via ICA e-Services are automatically updated in CPF records through the One-Stop Change of Address Reporting Service (OSCARS) within one day. Similarly, name changes reflected on your NRIC are automatically updated in our records — no separate notification to CPF is required.",
    "wrong1": "Thank you for informing us. Please visit any CPF Service Centre with your new NRIC to update both your address and name in our system. Updates typically take 3 to 5 working days.",
    "wrong2": "You will need to update your address with CPF separately. Please submit a change of address form via my cpf digital services. For your name change, please email us a copy of your new NRIC and the CPF nomination form if applicable.",
    "wrong3": "We acknowledge your update. Your address and name will be updated when we next process member records. This may take up to 30 days.",
    "added": "We thank you for your prompt action in updating your particulars with the relevant authorities.",
    "explain": "The correct response accurately explains OSCARS (automatic 1-day update for address changes) and that NRIC name changes are also automatically updated in CPF records — no separate notification needed for either.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Rajesh Kumar",
      "age": 38,
      "bg": "IT engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Kumar"
    },
    "subject": "Renunciation of PR and CPF account closure",
    "enquiry": "Hi,\n\nI renounced my Singapore Permanent Residency in August 2024 as I am relocating back to India permanently.\n\nI have a few questions:\n1. When was my CPF account automatically closed?\n2. I still have savings in my CPF. Will I earn any interest?\n3. I no longer have Singpass access. How do I manage my remaining savings?\n\nI downloaded my statements before my Singpass was deactivated.\n\nBest regards,\nRajesh Kumar",
    "date": "10 March 2026",
    "correct": "As you renounced your PR in August 2024 (after 1 April 2024), your CPF account would have been automatically closed in September 2024 — the month following renunciation. Your remaining savings earn a concession interest rate of approximately 0.05% per annum until 31 March 2027, after which no interest will be paid. We recommend transferring your savings to your bank account as soon as possible. As you no longer have Singpass access, please visit a CPF Service Centre in person with valid identification to manage your account.",
    "wrong1": "Your CPF account will be closed 6 months after your renunciation, which would be in February 2025. Your savings continue to earn the prevailing Ordinary Account interest rate until withdrawal. You can call our hotline with your old NRIC to get account information.",
    "wrong2": "Since you renounced PR in 2024, your account was closed in April 2024 together with all other non-SC/PR accounts. Your remaining savings will not earn any interest. Please write in with a certified copy of your foreign passport to request a fund transfer.",
    "wrong3": "Your account status depends on when you completed all renunciation formalities. Interest rates will be applied as per current CPF rules. Please check our website for the latest information.",
    "added": "You may transfer your remaining CPF savings to your bank account at any time by visiting us in person with valid identification.",
    "explain": "The correct response accurately states: account closed month after renunciation (September 2024); concession rate 0.05% until 31 March 2027; and Service Centre visit with valid ID for those without Singpass.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Fatimah Zahra",
      "age": 72,
      "bg": "widowed homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zahra"
    },
    "subject": "Silver Support payments and eligibility",
    "enquiry": "Assalamualaikum,\n\nI am Fatimah Zahra, 72 years old. I have been receiving Silver Support payments for the last 2 years. My late husband was a factory worker and we never had much savings.\n\nI want to know when the next payment will come. Also my son recently bought a new house and I moved in with him. Will this affect my Silver Support?\n\nAlso, do I need to apply every year or is it automatic?\n\nThank you.",
    "date": "10 March 2026",
    "correct": "Silver Support payments are made quarterly — your next payment should arrive approximately 3 months after your last. There is no need to reapply each year; CPF Board reviews eligibility automatically and eligible seniors continue to receive payments without reapplying. Regarding your move, your eligibility will be reassessed at the next annual review which considers various household factors. You may log in to CPF e-services via Singpass to check your payment schedule and eligibility status.",
    "wrong1": "Silver Support payments are made monthly on the 15th of each month. You do not need to reapply. Moving in with your son will immediately affect your eligibility as his household income will be assessed together with yours starting next quarter.",
    "wrong2": "You need to reapply for Silver Support every January by logging in to my cpf digital services. Please also update your address on our system after moving. Your eligibility may be affected by your son's household income.",
    "wrong3": "Your Silver Support payments are processed annually in January. You do not need to reapply. Address changes do not affect payment processing as funds are credited to your bank account.",
    "added": "We wish you good health and thank you for your continued trust in CPF Board.",
    "explain": "The correct response accurately states: quarterly payments, no annual reapplication (automatic review), eligibility assessed at next annual review (not immediately), and members can check via e-services.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Kevin Ong",
      "age": 24,
      "bg": "fresh graduate starting first job",
      "emoji": "👦",
      "salutation": "Mr",
      "lastname": "Ong"
    },
    "subject": "Understanding my CPF accounts as a new employee",
    "enquiry": "Hi CPF,\n\nI just started my first full-time job last month as a software developer. My employer made their first CPF contribution for me last week.\n\nI have a few basic questions:\n1. How do I know my CPF account number?\n2. How do I view my account balance and transactions?\n3. What are the different CPF accounts and what can I use them for?\n\nSorry for the basic questions — I am quite new to all this!\n\nThanks,\nKevin",
    "date": "10 March 2026",
    "correct": "Welcome to CPF! Your CPF account number is the Unique Identification Number (UIN) on your NRIC (e.g. S1234567A). Your account was automatically created when your first CPF contribution was received. You can view your balance and transactions by logging in to my cpf digital services at cpf.gov.sg using your Singpass. As a working member, contributions go into three accounts: your Ordinary Account (for housing, insurance, investment, and education), Special Account (for retirement-related investments), and MediSave Account (for hospitalisation and approved medical insurance).",
    "wrong1": "Welcome! CPF Board will send you a welcome letter with your account number within 2 weeks. You can view your balance by downloading the CPF Mobile App and registering with your NRIC. Your contributions currently only go into the Ordinary Account until you reach age 35.",
    "wrong2": "Your CPF account number is a separate 8-digit number assigned by CPF Board. You should receive it by post soon. To view your account, please visit a CPF Service Centre with your NRIC. The three accounts are Ordinary, Medisave, and Retirement Account.",
    "wrong3": "Good questions! Your CPF account is linked to your Singpass. Log in to cpf.gov.sg to see your details. You have a main savings account and a healthcare account.",
    "added": "We encourage you to visit cpf.gov.sg for more information on how to make the most of your CPF savings.",
    "explain": "The correct response covers all three questions accurately: CPF account number equals UIN on NRIC; account auto-created upon first contribution; balance via my cpf digital services; and correctly names and describes all three accounts (OA, SA, MA).",
    "categories": [
      "Accounts Management",
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Chen Wei Ming",
      "age": 61,
      "bg": "recently retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chen"
    },
    "subject": "CPF statements for past years",
    "enquiry": "Dear Sir/Madam,\n\nI retired from the civil service last month at age 61. I have been a Singpass user for many years.\n\nI would like to know how to access my CPF yearly statement for the past few years. My accountant needs records going back as far as possible for tax planning.\n\nAlso, I have heard that CPF stopped sending paper statements. Is this true? And if so, can I still get a printed copy somehow?\n\nThank you.",
    "date": "10 March 2026",
    "correct": "You are correct that CPF Board has transitioned fully to digital Yearly Statements of Account — paper statements are no longer issued. You can view, download, and print your YSOA by logging in to my cpf digital services at cpf.gov.sg via Singpass. Please note that CPF does not provide statements beyond the past 10 years, so we encourage you to download your earlier statements promptly. You may print any downloaded statements for use with your accountant.",
    "wrong1": "We can arrange for hardcopy statements to be reprinted and mailed to you for the past 5 years at a processing fee. Please submit your request via my cpf digital services or call our hotline.",
    "wrong2": "CPF yearly statements are available online for the past 20 years. You can download them via my cpf digital services. We still offer hardcopy statements for members aged 60 and above upon request at any CPF Service Centre.",
    "wrong3": "Digital statements replaced paper statements last year. You can access them online. For tax purposes, we recommend contacting IRAS directly as CPF statements may not be accepted as official tax documents.",
    "added": "We encourage members to download their statements promptly as statements beyond 10 years are not available for retrieval.",
    "explain": "The correct response accurately states: paper statements discontinued (digital only); access via cpf.gov.sg with Singpass; 10-year retrieval limit; members may download and print.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Lim Mei Ling",
      "age": 29,
      "bg": "marketing executive",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Lim"
    },
    "subject": "Silver Support query on behalf of grandmother",
    "enquiry": "Hello,\n\nI am writing on behalf of my grandmother, Mdm Ho Swee Lian, aged 78. She has been receiving Silver Support but the payments seemed to have stopped this quarter.\n\nCan you check her eligibility and tell us if there is any issue? Also, does she need to reapply? She is not very IT savvy so I am helping her.\n\nThank you.",
    "date": "10 March 2026",
    "correct": "Thank you for writing in on behalf of your grandmother. We are unable to disclose specific account information to third parties without authorisation. To check her Silver Support eligibility status, Mdm Ho should log in to CPF e-services via her own Singpass, or visit a CPF Service Centre in person with her NRIC. There is no need to reapply — CPF Board reviews Silver Support eligibility automatically each year and eligible seniors receive a notification in December.",
    "wrong1": "Thank you for helping your grandmother. We can provide you with details if you supply her NRIC number and date of birth for verification. Silver Support requires annual reapplication — please log in to my cpf digital services to reapply before the end of the month.",
    "wrong2": "We note your enquiry. Silver Support payments are processed every 6 months. If your grandmother missed the last cycle, she will receive double the amount in the next payment. No reapplication is needed.",
    "wrong3": "We are sorry to hear about the payment issue. Please have your grandmother visit any CPF Service Centre to resolve the matter. She will need to bring her NRIC and bank passbook.",
    "added": "We seek your understanding that we are unable to share specific account details with third parties without the member's proper authorisation.",
    "explain": "The correct response is accurate on three key points: CPF cannot disclose account info to third parties; no annual reapplication needed (automatic review with December notification); and Service Centre option for non-IT-savvy members.",
    "categories": [
      "SSS",
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "David Koh",
      "age": 53,
      "bg": "property agent",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Koh"
    },
    "subject": "CPF account number and property purchase",
    "enquiry": "Hi there,\n\nI am a Singaporean who has been using CPF for decades but I have a quick question. I was filling in a form that asked for my CPF account number and I was not sure — is it the same as my NRIC?\n\nAlso the form asked which CPF account to use for my property purchase. I want to confirm I should be using my Ordinary Account right? Not my Special Account or MediSave?\n\nAppreciate your help.",
    "date": "10 March 2026",
    "correct": "Yes, your CPF account number is the same as the Unique Identification Number (UIN) stated on your NRIC (e.g. S1234567A). For property purchases, you are correct — the Ordinary Account (OA) is the appropriate account to use. The Special Account is for retirement-related financial products, and the MediSave Account is for hospitalisation expenses and approved medical insurance. Neither can be used for property purchases.",
    "wrong1": "Your CPF account number is separate from your NRIC. You should have received it in your CPF welcome letter. For property purchases, you can use either your Ordinary Account or Special Account depending on your eligibility.",
    "wrong2": "Your NRIC is for identification but your CPF account has a separate 8-digit number. For housing, you should use your Retirement Account which is for major expenses. The Ordinary Account is only for insurance payments.",
    "wrong3": "Your CPF account number is indeed linked to your NRIC. For property matters, please consult our housing team as the applicable CPF account depends on the property type and purchase structure.",
    "added": "For more information on using your CPF savings for property purchases, please visit cpf.gov.sg or log in to my cpf digital services.",
    "explain": "The correct response confirms: CPF account number equals UIN on NRIC; OA is correct for property purchases; SA is for retirement products and MA for hospitalisation/medical insurance — not for property.",
    "categories": [
      "Accounts Management"
    ]
  }
];
