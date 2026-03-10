// ============================================================
// CPF Knowledge Hub — Question & Scenario Data
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
  },
  {
    "q": "What happens to your CPF accounts if you are a non-Singaporean and did not close them before 1 April 2024?",
    "choices": [
      {
        "text": "The accounts remain open and continue to earn the prevailing CPF interest rate indefinitely.",
        "correct": false
      },
      {
        "text": "The accounts were automatically closed in April 2024 and stop earning prevailing CPF interest.",
        "correct": true
      },
      {
        "text": "The savings are automatically forfeited to the Government.",
        "correct": false
      },
      {
        "text": "The accounts are transferred to a commercial bank of your choice automatically.",
        "correct": false
      }
    ],
    "explanation": "For those who were not SC or PR before 1 April 2024, CPF accounts were automatically closed in April 2024 and stopped earning prevailing interest.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "John Smith",
      "age": 45,
      "bg": "former expat teacher",
      "emoji": "👨‍🏫",
      "salutation": "Mr",
      "lastname": "Smith"
    }
  },
  {
    "q": "Until when will CPF savings of closed accounts for non-citizens earn interest similar to commercial bank rates?",
    "choices": [
      {
        "text": "31 March 2025",
        "correct": false
      },
      {
        "text": "31 December 2026",
        "correct": false
      },
      {
        "text": "31 March 2027",
        "correct": true
      },
      {
        "text": "They stop earning interest immediately upon account closure.",
        "correct": false
      }
    ],
    "explanation": "As a concession, savings in closed accounts for non-citizens earn interest similar to commercial bank rates until 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Linda Tan",
      "age": 50,
      "bg": "business consultant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "If a member renounces Singapore Citizenship in April 2024, when will their CPF account be automatically closed if they don't do it themselves?",
    "choices": [
      {
        "text": "Immediately on the day of renunciation.",
        "correct": false
      },
      {
        "text": "In the month following their renunciation (e.g., May 2024).",
        "correct": true
      },
      {
        "text": "At the end of the calendar year.",
        "correct": false
      },
      {
        "text": "The account remains open until the member reaches age 55.",
        "correct": false
      }
    ],
    "explanation": "If a member renounces SC/PR from 1 April 2024 and does not close the account, it will be automatically closed in the month following renunciation.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "David Low",
      "age": 32,
      "bg": "software engineer migrating overseas",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Low"
    }
  },
  {
    "q": "Can CPF Board disclose account balances over the phone to a member who has renounced their citizenship?",
    "choices": [
      {
        "text": "Yes, after answering security questions.",
        "correct": false
      },
      {
        "text": "Yes, if the member provides their old NRIC number.",
        "correct": false
      },
      {
        "text": "No, because of difficulties in authenticating identity over the phone.",
        "correct": true
      },
      {
        "text": "Only if the member calls from a registered overseas number.",
        "correct": false
      }
    ],
    "explanation": "Due to difficulties in authenticating identity, the Board is unable to disclose specific account information over phone or email.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Sarah Cheng",
      "age": 29,
      "bg": "marketing specialist",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Cheng"
    }
  },
  {
    "q": "What is the transitory interest rate for closed CPF accounts of non-citizens until 31 March 2027?",
    "choices": [
      {
        "text": "2.5% per annum",
        "correct": false
      },
      {
        "text": "4.0% per annum",
        "correct": false
      },
      {
        "text": "0.05% per annum",
        "correct": true
      },
      {
        "text": "1.0% per annum",
        "correct": false
      }
    ],
    "explanation": "The applicable rate for the concessionary period is 0.05% per annum, fixed until 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Michael Wong",
      "age": 42,
      "bg": "financial analyst",
      "emoji": "📊",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "What is the minimum age to be eligible for the Silver Support Scheme?",
    "choices": [
      {
        "text": "60 years old",
        "correct": false
      },
      {
        "text": "62 years old",
        "correct": false
      },
      {
        "text": "65 years old",
        "correct": true
      },
      {
        "text": "67 years old",
        "correct": false
      }
    ],
    "explanation": "Singapore citizens aged 65 and above are eligible for the Silver Support Scheme if they meet the criteria.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Bee Lian",
      "age": 64,
      "bg": "homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "Do you need to apply for the Silver Support Scheme?",
    "choices": [
      {
        "text": "Yes, via a physical form at CPF Service Centres.",
        "correct": false
      },
      {
        "text": "Yes, through the CPF website every year.",
        "correct": false
      },
      {
        "text": "No, eligibility is automatically reviewed every year by CPF Board.",
        "correct": true
      },
      {
        "text": "No, it is only for those who receive ComCare assistance.",
        "correct": false
      }
    ],
    "explanation": "There is no need to apply; CPF Board automatically reviews eligibility every year.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Abu Bakar",
      "age": 66,
      "bg": "retired security guard",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Abu"
    }
  },
  {
    "q": "What is the 'Low lifetime wages' criterion for Silver Support eligibility for those aged 55?",
    "choices": [
      {
        "text": "Total CPF contributions of not more than $100,000.",
        "correct": false
      },
      {
        "text": "Total CPF contributions of not more than $140,000.",
        "correct": true
      },
      {
        "text": "Annual income never exceeded $30,000.",
        "correct": false
      },
      {
        "text": "Total MediSave balance is less than $50,000.",
        "correct": false
      }
    ],
    "explanation": "The 'Low lifetime wages' criterion is total CPF contributions by age 55 of not more than $140,000.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "K. Subramaniam",
      "age": 58,
      "bg": "cleaner",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Subramaniam"
    }
  },
  {
    "q": "Which HDB flat types are eligible for the Silver Support Scheme?",
    "choices": [
      {
        "text": "1-room to 4-room flats only.",
        "correct": false
      },
      {
        "text": "1-room to 5-room flats, provided you don't own a larger flat or private property.",
        "correct": true
      },
      {
        "text": "Only rental flats.",
        "correct": false
      },
      {
        "text": "Any HDB flat regardless of size.",
        "correct": false
      }
    ],
    "explanation": "Eligible seniors must live in a 1- to 5-room HDB flat and not own a 5-room or larger flat or private property.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mary Lim",
      "age": 70,
      "bg": "retired seamstress",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "How much Silver Support does a senior on ComCare Long Term Assistance receive per quarter?",
    "choices": [
      {
        "text": "$360",
        "correct": false
      },
      {
        "text": "$430",
        "correct": true
      },
      {
        "text": "$540",
        "correct": false
      },
      {
        "text": "It depends on their flat type.",
        "correct": false
      }
    ],
    "explanation": "Seniors on ComCare LTA receive a flat amount of $430 per quarter regardless of flat type.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Chua Ah Hock",
      "age": 75,
      "bg": "ComCare recipient",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chua"
    }
  },
  {
    "q": "When are Silver Support payments made each quarter?",
    "choices": [
      {
        "text": "On the 1st of every month.",
        "correct": false
      },
      {
        "text": "At the end of each quarter (March, June, September, December).",
        "correct": true
      },
      {
        "text": "In one lump sum in January.",
        "correct": false
      },
      {
        "text": "Every six months.",
        "correct": false
      }
    ],
    "explanation": "Payments are made quarterly on 31 December (for Jan-Mar), 31 March, 30 June, and 30 September.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Fatimah Bte Ali",
      "age": 68,
      "bg": "retired kitchen helper",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Ali"
    }
  },
  {
    "q": "Can a Permanent Resident qualify for the Silver Support Scheme?",
    "choices": [
      {
        "text": "Yes, if they have lived in Singapore for 20 years.",
        "correct": false
      },
      {
        "text": "Yes, if they meet the income and housing criteria.",
        "correct": false
      },
      {
        "text": "No, only Singapore Citizens are eligible.",
        "correct": true
      },
      {
        "text": "Only if they are married to a Singapore Citizen.",
        "correct": false
      }
    ],
    "explanation": "Only Singapore Citizens are eligible for the Silver Support Scheme.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Robert Chen",
      "age": 66,
      "bg": "PR, retired engineer",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chen"
    }
  },
  {
    "q": "What happens to the Silver Support balance in GovCash if the beneficiary passes away?",
    "choices": [
      {
        "text": "It is returned to the Government.",
        "correct": false
      },
      {
        "text": "It is credited to their CPF Ordinary Account and distributed via nomination.",
        "correct": true
      },
      {
        "text": "It is paid out to the next-of-kin in cash.",
        "correct": false
      },
      {
        "text": "It is used to pay for funeral expenses automatically.",
        "correct": false
      }
    ],
    "explanation": "If a beneficiary passes away, the remaining GovCash balance is credited to their CPF OA and distributed according to their CPF nomination.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Jane Tan",
      "age": 40,
      "bg": "administrator handling estate matters",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "How does CPF Board notify members of their Silver Support eligibility for the following year?",
    "choices": [
      {
        "text": "Via a phone call in January.",
        "correct": false
      },
      {
        "text": "By sending a letter in December of the preceding year.",
        "correct": true
      },
      {
        "text": "Through an advertisement in the newspapers.",
        "correct": false
      },
      {
        "text": "Members must check the LifeSG app themselves; no notification is sent.",
        "correct": false
      }
    ],
    "explanation": "Seniors who qualify will receive a notification letter from CPF Board in December of the preceding year.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Lee Siew Hua",
      "age": 65,
      "bg": "retired factory worker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Lee"
    }
  },
  {
    "q": "What is the monthly household income per person threshold for the higher Silver Support tier?",
    "choices": [
      {
        "text": "$1,000 or less",
        "correct": false
      },
      {
        "text": "$1,500 or less",
        "correct": true
      },
      {
        "text": "$1,800 or less",
        "correct": false
      },
      {
        "text": "$2,300 or less",
        "correct": false
      }
    ],
    "explanation": "The higher tier of Silver Support is for those with a household monthly income per person of $1,500 or less.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Vikram Singh",
      "age": 69,
      "bg": "retired clerk",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Singh"
    }
  },
  {
    "q": "How can you check if a notification from CPF Board regarding your Yearly Statement of Account is legitimate?",
    "choices": [
      {
        "text": "Check if the email ends with '@cpf.gov.sg'.",
        "correct": false
      },
      {
        "text": "Check if the email ends with '@e.cpf.gov.sg'.",
        "correct": true
      },
      {
        "text": "Check if the SMS comes from a mobile number starting with 9.",
        "correct": false
      },
      {
        "text": "Call the number provided in the notification to verify.",
        "correct": false
      }
    ],
    "explanation": "Legitimate emails from CPF Board regarding the YSOA end with '@e.cpf.gov.sg'.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Jason Teo",
      "age": 28,
      "bg": "cybersecurity analyst",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Teo"
    }
  },
  {
    "q": "Where has the record of CPF-administered cash grants been moved to from the Yearly Statement of Account?",
    "choices": [
      {
        "text": "My CPF Mobile App",
        "correct": false
      },
      {
        "text": "YourBenefits@LifeSG",
        "correct": true
      },
      {
        "text": "The annual tax return from IRAS",
        "correct": false
      },
      {
        "text": "A separate physical statement mailed in March",
        "correct": false
      }
    ],
    "explanation": "Records of CPF-administered cash grants have moved to YourBenefits@LifeSG for a comprehensive view of Government benefits.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Hafiz Ramli",
      "age": 35,
      "bg": "delivery driver",
      "emoji": "🚚",
      "salutation": "Mr",
      "lastname": "Ramli"
    }
  },
  {
    "q": "How long does the CPF Board keep historical Yearly Statements of Account online?",
    "choices": [
      {
        "text": "5 years",
        "correct": false
      },
      {
        "text": "10 years",
        "correct": true
      },
      {
        "text": "15 years",
        "correct": false
      },
      {
        "text": "Indefinitely",
        "correct": false
      }
    ],
    "explanation": "CPF Board provides the service of retrieving CPF statements for the past 10 years only.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Alice Koh",
      "age": 44,
      "bg": "accountant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Koh"
    }
  },
  {
    "q": "What should you do if you receive CPF mail at your address that doesn't belong to you or your family?",
    "choices": [
      {
        "text": "Open it to find the contact details of the recipient.",
        "correct": false
      },
      {
        "text": "Discard it immediately.",
        "correct": false
      },
      {
        "text": "Cross out the address, write 'Recipient not living here', and drop it into a Singapore Post outgoing mailbox.",
        "correct": true
      },
      {
        "text": "Keep it until the person comes to collect it.",
        "correct": false
      }
    ],
    "explanation": "You should cross out the address, state the recipient is not living there, and drop it into an outgoing mailbox.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Wei Ling",
      "age": 30,
      "bg": "new homeowner",
      "emoji": "🏠",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "How can Singapore Citizens update their residential address with CPF Board?",
    "choices": [
      {
        "text": "Log in to the CPF website and change it in 'Account settings'.",
        "correct": false
      },
      {
        "text": "Email a copy of their utility bill to CPF Board.",
        "correct": false
      },
      {
        "text": "Update it via ICA's e-Services; CPF will be informed automatically via OSCARS.",
        "correct": true
      },
      {
        "text": "Call the CPF hotline and provide the new address.",
        "correct": false
      }
    ],
    "explanation": "Address updates should be done via ICA's e-Services. CPF Board is then informed via the One-Stop Change of Address Reporting Service (OSCARS).",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Rohan Nair",
      "age": 26,
      "bg": "engineer",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Nair"
    }
  },
  {
    "q": "What is the 'principal name' used by CPF Board for transactions?",
    "choices": [
      {
        "text": "The name given at birth.",
        "correct": false
      },
      {
        "text": "The name registered in your NRIC, excluding variants like hanyu pinyin or married names.",
        "correct": true
      },
      {
        "text": "Your nickname as registered in the Singpass app.",
        "correct": false
      },
      {
        "text": "Any name you choose to use on your bank account.",
        "correct": false
      }
    ],
    "explanation": "Principal name is the name registered in your NRIC and usually excludes variants like married names or aliases.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Michelle Wong",
      "age": 34,
      "bg": "legal secretary",
      "emoji": "👩‍⚖️",
      "salutation": "Ms",
      "lastname": "Wong"
    }
  },
  {
    "q": "Can you share the same contact details (e.g., mobile number) with another family member in CPF records?",
    "choices": [
      {
        "text": "No, every member must have a unique mobile number for 2FA.",
        "correct": false
      },
      {
        "text": "Yes, if the contact details are still valid, no further action is needed.",
        "correct": true
      },
      {
        "text": "Only if one member is above age 65.",
        "correct": false
      },
      {
        "text": "Yes, but only for members living at the same address.",
        "correct": false
      }
    ],
    "explanation": "Members can continue to share contact details if they are valid, acknowledging that some require help from family.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Ahmad Salleh",
      "age": 60,
      "bg": "technician",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Salleh"
    }
  },
  {
    "q": "Under what condition can a parent view their child's CPF statement online?",
    "choices": [
      {
        "text": "The child is below 18 years old.",
        "correct": false
      },
      {
        "text": "The child is below 21, is a SC/PR, and has received CPF contributions.",
        "correct": true
      },
      {
        "text": "The parent has made a voluntary top-up to the child's account.",
        "correct": false
      },
      {
        "text": "Parents can always view their children's statements regardless of age.",
        "correct": false
      }
    ],
    "explanation": "Parents can view statements if both are SC/PR, and the child is below 21 and has received CPF contributions.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Grace Tan",
      "age": 42,
      "bg": "mother of two",
      "emoji": "👩‍👧‍👦",
      "salutation": "Mrs",
      "lastname": "Tan"
    }
  },
  {
    "q": "What is the purpose of the Ordinary Account (OA) in the CPF system?",
    "choices": [
      {
        "text": "Primarily for hospitalisation expenses.",
        "correct": false
      },
      {
        "text": "For retirement-related financial products only.",
        "correct": false
      },
      {
        "text": "For buying a home, paying for CPF insurance, investment, and education.",
        "correct": true
      },
      {
        "text": "To receive quarterly cash supplements from the government.",
        "correct": false
      }
    ],
    "explanation": "The OA savings can be used for housing, CPF insurance, investment, and education.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Daniel Lim",
      "age": 25,
      "bg": "fresh graduate",
      "emoji": "👨‍🎓",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "Which account is specifically for old age and investment in retirement-related financial products?",
    "choices": [
      {
        "text": "Ordinary Account",
        "correct": false
      },
      {
        "text": "Special Account",
        "correct": true
      },
      {
        "text": "MediSave Account",
        "correct": false
      },
      {
        "text": "Retirement Account",
        "correct": false
      }
    ],
    "explanation": "The Special Account (SA) is for old age and investment in retirement-related financial products.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Samuel Ng",
      "age": 40,
      "bg": "manager",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "What should you do if you have issues logging into CPF digital services using Singpass?",
    "choices": [
      {
        "text": "Contact the CPF Board's technical team immediately.",
        "correct": false
      },
      {
        "text": "Contact the Singpass Helpdesk directly as it is governed by GovTech.",
        "correct": true
      },
      {
        "text": "Wait for 24 hours for the system to reset.",
        "correct": false
      },
      {
        "text": "Delete your CPF account and create a new one.",
        "correct": false
      }
    ],
    "explanation": "Singpass issues should be directed to the Singpass Helpdesk since it's a service governed by GovTech.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Fiona Seah",
      "age": 33,
      "bg": "freelancer",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Seah"
    }
  },
  {
    "q": "Which of these is a recommended troubleshooting step for login issues on 'my cpf' digital services?",
    "choices": [
      {
        "text": "Turn off your device's date-time automatic setting.",
        "correct": false
      },
      {
        "text": "Clear your browser cache.",
        "correct": true
      },
      {
        "text": "Use a browser that is at least 5 years old for stability.",
        "correct": false
      },
      {
        "text": "Disable your internet connection and try again.",
        "correct": false
      }
    ],
    "explanation": "Clearing your browser cache is a standard troubleshooting step for login issues.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Benny Tan",
      "age": 38,
      "bg": "IT support",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Where can you download the official CPF Mobile app?",
    "choices": [
      {
        "text": "Only from the CPF website directly.",
        "correct": false
      },
      {
        "text": "Apple App Store or Google Play Store.",
        "correct": true
      },
      {
        "text": "Any third-party APK website.",
        "correct": false
      },
      {
        "text": "It comes pre-installed on all Singapore-registered phones.",
        "correct": false
      }
    ],
    "explanation": "CPF Mobile can be downloaded from the Apple App Store or Google Play Store.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Chloe Lee",
      "age": 22,
      "bg": "student",
      "emoji": "👩‍🎓",
      "salutation": "Ms",
      "lastname": "Lee"
    }
  },
  {
    "q": "What happens if your MediSave Account (MA) balance exceeds the Basic Healthcare Sum (BHS)?",
    "choices": [
      {
        "text": "The excess stays in the MA but stops earning interest.",
        "correct": false
      },
      {
        "text": "The excess is automatically withdrawn to your bank account.",
        "correct": false
      },
      {
        "text": "The excess is channelled to your Special Account (if below 55) or Retirement Account (if 55 and above).",
        "correct": true
      },
      {
        "text": "The excess is used to pay for your family's insurance premiums.",
        "correct": false
      }
    ],
    "explanation": "Savings above the BHS are channelled to the SA (below 55) or RA (55 and above) if the FRS is met.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Dr. Wong",
      "age": 56,
      "bg": "general practitioner",
      "emoji": "👨‍⚕️",
      "salutation": "Dr",
      "lastname": "Wong"
    }
  },
  {
    "q": "What is the Basic Healthcare Sum (BHS) for a member turning age 65 in 2026?",
    "choices": [
      {
        "text": "$71,500",
        "correct": false
      },
      {
        "text": "$75,500",
        "correct": false
      },
      {
        "text": "$79,000",
        "correct": true
      },
      {
        "text": "$82,500",
        "correct": false
      }
    ],
    "explanation": "The BHS for the cohort turning 65 in 2026 is $79,000.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Cheng Lock",
      "age": 64,
      "bg": "logistics manager",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "If you turn 65 in 2026 and your MediSave balance is below your BHS of $79,000, are you required to top it up?",
    "choices": [
      {
        "text": "Yes, it is mandatory to reach the BHS by age 70.",
        "correct": false
      },
      {
        "text": "No, you are not required to top up your MA.",
        "correct": true
      },
      {
        "text": "Yes, your employer will be notified to make extra contributions.",
        "correct": false
      },
      {
        "text": "Only if you have an active hospitalisation claim.",
        "correct": false
      }
    ],
    "explanation": "If your balance is less than the BHS at age 65, you are not required to top up your MA.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Rosnah Ismail",
      "age": 65,
      "bg": "retired nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Mdm",
      "lastname": "Ismail"
    }
  },
  {
    "q": "Can you choose to top up your MediSave Account with cash if you haven't reached the BHS?",
    "choices": [
      {
        "text": "No, MediSave only accepts employer contributions.",
        "correct": false
      },
      {
        "text": "Yes, you can choose to build up your healthcare savings via cash top-ups.",
        "correct": true
      },
      {
        "text": "Only if you are self-employed.",
        "correct": false
      },
      {
        "text": "Only during the month of your birthday.",
        "correct": false
      }
    ],
    "explanation": "If you wish to build up healthcare savings, you can choose to top up your MA with cash.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "James Koh",
      "age": 66,
      "bg": "retired clerk",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "What happens if you obtain Singapore Citizenship again after closing your CPF account?",
    "choices": [
      {
        "text": "You start with a fresh zero-balance account.",
        "correct": false
      },
      {
        "text": "You are required to refund your previous CPF savings with accrued interest.",
        "correct": true
      },
      {
        "text": "Your previous savings are forfeited to the government.",
        "correct": false
      },
      {
        "text": "You only need to refund the principal amount without interest.",
        "correct": false
      }
    ],
    "explanation": "If you reinstate SC/PR status after closing your account, you must refund CPF savings with accrued interest.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Kumar V.",
      "age": 48,
      "bg": "returning resident",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Kumar"
    }
  },
  {
    "q": "Which of the following is NOT part of the refund required when reinstating citizenship?",
    "choices": [
      {
        "text": "Savings used for CPF Investment Scheme.",
        "correct": false
      },
      {
        "text": "Savings used for education loans.",
        "correct": false
      },
      {
        "text": "Past employment bonuses paid in cash.",
        "correct": true
      },
      {
        "text": "Savings used to clear tax arrears upon account closure.",
        "correct": false
      }
    ],
    "explanation": "The refund includes savings transferred to bank, used for investments, outstanding liabilities (SEP), and debts cleared upon closure like tax arrears or education loans.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Evelyn Tan",
      "age": 52,
      "bg": "legal officer",
      "emoji": "👩‍⚖️",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "Who should you contact for enquiries on work permit applications if you have closed your CPF account?",
    "choices": [
      {
        "text": "CPF Board",
        "correct": false
      },
      {
        "text": "Ministry of Manpower (MOM)",
        "correct": true
      },
      {
        "text": "Immigration & Checkpoints Authority (ICA)",
        "correct": false
      },
      {
        "text": "Ministry of Home Affairs (MHA)",
        "correct": false
      }
    ],
    "explanation": "For enquiries on work permit or employment pass application, contact the Ministry of Manpower.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Chen Wei",
      "age": 36,
      "bg": "HR manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Chen"
    }
  },
  {
    "q": "What system does the Government use to conduct means-tests for the Silver Support Scheme?",
    "choices": [
      {
        "text": "CPF Interest System",
        "correct": false
      },
      {
        "text": "Household Means Eligibility System (HOMES)",
        "correct": true
      },
      {
        "text": "Silver Support Eligibility Portal",
        "correct": false
      },
      {
        "text": "National Income Database",
        "correct": false
      }
    ],
    "explanation": "The Household Means Eligibility System (HOMES) supports the Silver Support Scheme in conducting means-tests.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "George Lim",
      "age": 62,
      "bg": "social worker",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "Are seniors living in nursing homes covered by the Silver Support Scheme?",
    "choices": [
      {
        "text": "No, they are provided for by the home.",
        "correct": false
      },
      {
        "text": "Yes, if they meet the eligibility criteria.",
        "correct": true
      },
      {
        "text": "Only if they have no living children.",
        "correct": false
      },
      {
        "text": "Only if the nursing home is government-run.",
        "correct": false
      }
    ],
    "explanation": "Seniors living in residential facilities like nursing homes will be covered if they meet the eligibility criteria.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Sister Theresa",
      "age": 55,
      "bg": "nursing home administrator",
      "emoji": "👩‍⚕️",
      "salutation": "Sister",
      "lastname": "Theresa"
    }
  },
  {
    "q": "What happens if the Government cannot validate your bank account details for Silver Support?",
    "choices": [
      {
        "text": "The payment is forfeited.",
        "correct": false
      },
      {
        "text": "CPF Board will inform you to update your bank account details.",
        "correct": true
      },
      {
        "text": "The payment will be sent as a cheque to your registered address.",
        "correct": false
      },
      {
        "text": "The money is put into your MediSave account instead.",
        "correct": false
      }
    ],
    "explanation": "If details are wrong or the account is closed, the Board will inform you to update your bank account details.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Jimmy",
      "age": 72,
      "bg": "retired taxi driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Jimmy"
    }
  },
  {
    "q": "At which ATMs can you withdraw Silver Support cash benefits via GovCash?",
    "choices": [
      {
        "text": "DBS/POSB ATMs",
        "correct": false
      },
      {
        "text": "OCBC ATMs",
        "correct": true
      },
      {
        "text": "UOB ATMs",
        "correct": false
      },
      {
        "text": "Any ATM in Singapore",
        "correct": false
      }
    ],
    "explanation": "You can withdraw your cash benefit at OCBC ATMs islandwide using your Payment Reference Number (PRN) and NRIC.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Mdm Zaiton",
      "age": 67,
      "bg": "homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zaiton"
    }
  },
  {
    "q": "What two items do you need to withdraw Silver Support from an OCBC ATM?",
    "choices": [
      {
        "text": "Singpass and NRIC",
        "correct": false
      },
      {
        "text": "8-digit Payment Reference Number (PRN) and NRIC number",
        "correct": true
      },
      {
        "text": "CPF Account Number and ATM card",
        "correct": false
      },
      {
        "text": "Mobile phone for OTP and NRIC",
        "correct": false
      }
    ],
    "explanation": "You need your unique 8-digit PRN and your NRIC number to withdraw cash from OCBC ATMs.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Ali Hassan",
      "age": 68,
      "bg": "retired gardener",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Hassan"
    }
  },
  {
    "q": "Can a court-appointed Deputy request CPF statements for a member?",
    "choices": [
      {
        "text": "No, statements are strictly for the member only.",
        "correct": false
      },
      {
        "text": "Yes, by submitting the Deputyship court order and other required documents.",
        "correct": true
      },
      {
        "text": "Only if the member is above 55 years old.",
        "correct": false
      },
      {
        "text": "Yes, but only via a lawyer's request.",
        "correct": false
      }
    ],
    "explanation": "A court-appointed Deputy can request statements by submitting the court order and NRICs.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Sharon Lim",
      "age": 45,
      "bg": "lawyer",
      "emoji": "👩‍⚖️",
      "salutation": "Ms",
      "lastname": "Lim"
    }
  },
  {
    "q": "Which three accounts are mandatory for working Singaporeans and PRs?",
    "choices": [
      {
        "text": "Ordinary, Special, and Retirement Accounts",
        "correct": false
      },
      {
        "text": "Ordinary, Special, and MediSave Accounts",
        "correct": true
      },
      {
        "text": "Ordinary, MediSave, and Education Accounts",
        "correct": false
      },
      {
        "text": "Special, MediSave, and Investment Accounts",
        "correct": false
      }
    ],
    "explanation": "Contributions go into the Ordinary, Special, and MediSave accounts.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Kenji Tan",
      "age": 21,
      "bg": "intern",
      "emoji": "👦",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Which website provides quick access to CPF schemes and the latest news?",
    "choices": [
      {
        "text": "life.gov.sg",
        "correct": false
      },
      {
        "text": "cpf.gov.sg",
        "correct": true
      },
      {
        "text": "singpass.gov.sg",
        "correct": false
      },
      {
        "text": "ica.gov.sg",
        "correct": false
      }
    ],
    "explanation": "The CPF website (cpf.gov.sg) provides information on schemes, services, and news.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Tina Lee",
      "age": 27,
      "bg": "journalist",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Lee"
    }
  },
  {
    "q": "What happens to your participation in CPF schemes after you renounce citizenship and close your account?",
    "choices": [
      {
        "text": "Schemes like HPS continue until the property is sold.",
        "correct": false
      },
      {
        "text": "Your participation in all schemes administered by CPF Board will cease.",
        "correct": true
      },
      {
        "text": "You can choose to remain in certain schemes by paying cash.",
        "correct": false
      },
      {
        "text": "Participation is suspended but resumes if you return to Singapore.",
        "correct": false
      }
    ],
    "explanation": "Upon account closure following renunciation, participation in all CPF-administered schemes will cease.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Peter Smith",
      "age": 39,
      "bg": "former PR leaving Singapore",
      "emoji": "👨‍✈️",
      "salutation": "Mr",
      "lastname": "Smith"
    }
  },
  {
    "q": "Can you re-apply for Home Protection Scheme (HPS) if you obtain citizenship again?",
    "choices": [
      {
        "text": "No, once HPS is cancelled, it cannot be reinstated.",
        "correct": false
      },
      {
        "text": "Yes, if you own a HDB flat with an outstanding loan, subject to health approval.",
        "correct": true
      },
      {
        "text": "Only if you are under age 40.",
        "correct": false
      },
      {
        "text": "Yes, but you must pay a double premium penalty.",
        "correct": false
      }
    ],
    "explanation": "You may re-apply for HPS online if your previous cover ceased and you are a HDB flat owner with an outstanding loan, subject to health approval.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Ming",
      "age": 44,
      "bg": "returning citizen",
      "emoji": "👨",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "How can you derive the total employment contribution received for the year from your statement?",
    "choices": [
      {
        "text": "It is the single figure at the bottom of the first page.",
        "correct": false
      },
      {
        "text": "Sum up 'Employee Contribution' under 'You' and 'Employer Contribution' under 'Employer'.",
        "correct": true
      },
      {
        "text": "Multiply your December contribution by twelve.",
        "correct": false
      },
      {
        "text": "Total all 'voluntary' and 'mandatory' contributions.",
        "correct": false
      }
    ],
    "explanation": "Total employment contributions are derived by summing 'Employee Contribution' and 'Employer Contribution'.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Kiat",
      "age": 31,
      "bg": "HR executive",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Wei"
    }
  },
  {
    "q": "What information is specifically EXCLUDED from the breakdown of employer and employee's contributions in the YSOA?",
    "choices": [
      {
        "text": "Ordinary Wage contributions.",
        "correct": false
      },
      {
        "text": "MediSave contributions as a Self-employed Person.",
        "correct": true
      },
      {
        "text": "Additional Wage contributions.",
        "correct": false
      },
      {
        "text": "Interest earned on the accounts.",
        "correct": false
      }
    ],
    "explanation": "The breakdown excludes adjustments/refunds, voluntary contributions, and MediSave contributions as a Self-employed Person.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Serene Ng",
      "age": 41,
      "bg": "tax consultant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Ng"
    }
  },
  {
    "q": "What should you check to verify if an SMS notification from CPF Board is legitimate?",
    "choices": [
      {
        "text": "The sender ID should be 'gov.sg' and begin with 'Central Provident Fund Board'.",
        "correct": true
      },
      {
        "text": "The SMS should contain a link to a website ending in '.com'.",
        "correct": false
      },
      {
        "text": "The SMS should ask for your Singpass password to view the statement.",
        "correct": false
      },
      {
        "text": "The SMS should come from a private 8-digit mobile number.",
        "correct": false
      }
    ],
    "explanation": "Legitimate SMS notifications come from 'gov.sg' and begin with 'Central Provident Fund Board'.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Gary Toh",
      "age": 35,
      "bg": "banker",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Toh"
    }
  },
  {
    "q": "How can you stop receiving hardcopy Yearly Statements of Account?",
    "choices": [
      {
        "text": "Call the hotline and request to cancel.",
        "correct": false
      },
      {
        "text": "Submit a request online using Singpass login.",
        "correct": true
      },
      {
        "text": "Simply don't collect them from the mailbox.",
        "correct": false
      },
      {
        "text": "Write a letter to the Board's headquarters.",
        "correct": false
      }
    ],
    "explanation": "To stop receiving hardcopy YSOA, members can submit a request via Singpass login.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Kelly Chan",
      "age": 29,
      "bg": "environmentalist",
      "emoji": "🌱",
      "salutation": "Ms",
      "lastname": "Chan"
    }
  },
  {
    "q": "What is the primary way for Singapore Citizens to view their Yearly Statement of Account (YSOA)?",
    "choices": [
      {
        "text": "By requesting it at any Singapore Post outlet.",
        "correct": false
      },
      {
        "text": "Logging in to 'my cpf' digital services.",
        "correct": true
      },
      {
        "text": "Checking their quarterly physical mailer.",
        "correct": false
      },
      {
        "text": "Calling the CPF automated phone system.",
        "correct": false
      }
    ],
    "explanation": "The YSOA is primarily viewed by logging in to 'my cpf' digital services via Singpass.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Jason Lim",
      "age": 32,
      "bg": "analyst",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "What is the average annual Net Trade Income (NTI) limit for self-employed persons to qualify for Silver Support?",
    "choices": [
      {
        "text": "$20,000",
        "correct": false
      },
      {
        "text": "$27,600",
        "correct": true
      },
      {
        "text": "$35,000",
        "correct": false
      },
      {
        "text": "$42,000",
        "correct": false
      }
    ],
    "explanation": "Self-employed persons and platform workers must have an average annual NTI of not more than $27,600 when they were aged 45 to 54.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Ah Kow",
      "age": 66,
      "bg": "former taxi driver",
      "emoji": "🚕",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "How much does a senior living in a 1-room HDB flat receive per quarter if their household monthly income per person is $1,500 or less?",
    "choices": [
      {
        "text": "$540",
        "correct": false
      },
      {
        "text": "$860",
        "correct": false
      },
      {
        "text": "$1,080",
        "correct": true
      },
      {
        "text": "$1,500",
        "correct": false
      }
    ],
    "explanation": "Seniors in 1- and 2-room flats with household income per person of $1,500 or less receive $1,080 per quarter.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mdm Lim",
      "age": 72,
      "bg": "retired cleaner",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "What is the quarterly Silver Support payment for a senior in a 3-room flat with a household monthly income per person of $2,000?",
    "choices": [
      {
        "text": "$430",
        "correct": true
      },
      {
        "text": "$860",
        "correct": false
      },
      {
        "text": "$325",
        "correct": false
      },
      {
        "text": "$215",
        "correct": false
      }
    ],
    "explanation": "Seniors in 3-room flats with household income per person between $1,501 and $2,300 receive $430 per quarter.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Robert Ang",
      "age": 67,
      "bg": "retired technician",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Ang"
    }
  },
  {
    "q": "When does a senior turning 65 in October start receiving Silver Support payments?",
    "choices": [
      {
        "text": "In January of the following year.",
        "correct": false
      },
      {
        "text": "In the July-September quarter.",
        "correct": false
      },
      {
        "text": "In the October-December quarter.",
        "correct": true
      },
      {
        "text": "Immediately on their 65th birthday.",
        "correct": false
      }
    ],
    "explanation": "Eligible seniors turning 65 will start receiving Silver Support in the quarter they turn 65.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Siti Aminah",
      "age": 64,
      "bg": "school canteen vendor",
      "emoji": "👩‍🍳",
      "salutation": "Mdm",
      "lastname": "Aminah"
    }
  },
  {
    "q": "Which organization's website should you visit to reset your Singpass password?",
    "choices": [
      {
        "text": "CPF Board",
        "correct": false
      },
      {
        "text": "Singpass (GovTech)",
        "correct": true
      },
      {
        "text": "IRAS",
        "correct": false
      },
      {
        "text": "Monetary Authority of Singapore",
        "correct": false
      }
    ],
    "explanation": "Singpass is an authentication service governed by GovTech; password resets are done via the Singpass website.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "John De Souza",
      "age": 55,
      "bg": "security officer",
      "emoji": "👮",
      "salutation": "Mr",
      "lastname": "De Souza"
    }
  },
  {
    "q": "Which of the following is NOT a troubleshooting step for Singpass Face Verification issues?",
    "choices": [
      {
        "text": "Ensure your face is not covered.",
        "correct": false
      },
      {
        "text": "Use a camera with a minimum resolution of two megapixels.",
        "correct": false
      },
      {
        "text": "Ensure there is strong lighting directly behind you.",
        "correct": true
      },
      {
        "text": "Keep still while scanning is in progress.",
        "correct": false
      }
    ],
    "explanation": "Strong lighting in the background can cause Face Verification to fail. You should avoid strong background lighting.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lily Tan",
      "age": 29,
      "bg": "graphic designer",
      "emoji": "🎨",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "What happens if a non-Singaporean does not close their CPF account and transfer their savings after renunciation?",
    "choices": [
      {
        "text": "The savings are transferred to the Unclaimed Monies Fund.",
        "correct": false
      },
      {
        "text": "The account is automatically closed in the month following renunciation.",
        "correct": true
      },
      {
        "text": "The account stays open until the member reaches 55.",
        "correct": false
      },
      {
        "text": "The savings continue to earn 2.5% interest indefinitely.",
        "correct": false
      }
    ],
    "explanation": "If not closed manually, the account closes automatically in the month following renunciation.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Mark Evans",
      "age": 41,
      "bg": "former PR",
      "emoji": "🛫",
      "salutation": "Mr",
      "lastname": "Evans"
    }
  },
  {
    "q": "What will happen to interest on closed CPF accounts for non-citizens from 1 April 2027 onwards?",
    "choices": [
      {
        "text": "It will be pegged to the SIBOR rate.",
        "correct": false
      },
      {
        "text": "It will return to the prevailing CPF interest rate.",
        "correct": false
      },
      {
        "text": "No interest will be paid.",
        "correct": true
      },
      {
        "text": "It will be fixed at 0.05% per annum.",
        "correct": false
      }
    ],
    "explanation": "From 1 April 2027, any remaining savings in closed accounts of non-citizens will no longer earn any interest.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Elena Rossi",
      "age": 45,
      "bg": "expat banker",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Rossi"
    }
  },
  {
    "q": "If you closed your CPF account and later reinstate your Singapore Citizenship, what must you refund to your CPF?",
    "choices": [
      {
        "text": "Only the principal amount withdrawn.",
        "correct": false
      },
      {
        "text": "The withdrawn savings plus accrued interest.",
        "correct": true
      },
      {
        "text": "The amount you would have contributed while away.",
        "correct": false
      },
      {
        "text": "A flat administrative fee of $5,000.",
        "correct": false
      }
    ],
    "explanation": "Reinstating SC/PR requires a refund of the withdrawn CPF savings with accrued interest.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Chen Wei Hong",
      "age": 50,
      "bg": "returning Singaporean",
      "emoji": "🇸🇬",
      "salutation": "Mr",
      "lastname": "Chen"
    }
  },
  {
    "q": "Which service should you use to update your residential address with the CPF Board if you are a Singapore Citizen?",
    "choices": [
      {
        "text": "CPF Board E-service",
        "correct": false
      },
      {
        "text": "ICA e-Services",
        "correct": true
      },
      {
        "text": "LifeSG app",
        "correct": false
      },
      {
        "text": "Singpost counter",
        "correct": false
      }
    ],
    "explanation": "Singapore Citizens should update their address via ICA's e-Services; CPF is informed automatically via OSCARS.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Sarah Tan",
      "age": 30,
      "bg": "administrative officer",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "Under the Child Dashboard, for how long can you view your child's CPF Transaction History online?",
    "choices": [
      {
        "text": "The last 6 months",
        "correct": false
      },
      {
        "text": "The last 12 months",
        "correct": false
      },
      {
        "text": "The last 15 months",
        "correct": true
      },
      {
        "text": "Since the child's birth",
        "correct": false
      }
    ],
    "explanation": "Parents can view their child's CPF Transaction History for the last 15 months online.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "David Lim",
      "age": 42,
      "bg": "father of a newborn",
      "emoji": "👨‍🍼",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "What document is required to remove an ex-spouse's access to a child's CPF statement?",
    "choices": [
      {
        "text": "A signed letter from the ex-spouse",
        "correct": false
      },
      {
        "text": "A statutory declaration",
        "correct": false
      },
      {
        "text": "A Court Order granting sole custody",
        "correct": true
      },
      {
        "text": "The child's birth certificate",
        "correct": false
      }
    ],
    "explanation": "A member granted sole custody can request removal of an ex-spouse's access by providing the Court Order.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Jane Doe",
      "age": 38,
      "bg": "divorcee",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Doe"
    }
  },
  {
    "q": "What is the Basic Healthcare Sum (BHS) for members turning 65 in 2025?",
    "choices": [
      {
        "text": "$71,500",
        "correct": false
      },
      {
        "text": "$75,500",
        "correct": true
      },
      {
        "text": "$79,000",
        "correct": false
      },
      {
        "text": "$82,000",
        "correct": false
      }
    ],
    "explanation": "The BHS for the cohort turning 65 in 2025 is $75,500.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Bee Lian",
      "age": 64,
      "bg": "retiring in 2025",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "Can you use your MediSave savings for your child's vaccination if they are not SC/PR?",
    "choices": [
      {
        "text": "No, MediSave can only be used for SC/PR family members.",
        "correct": false
      },
      {
        "text": "Yes, MediSave can be used for your children's medical expenses regardless of citizenship.",
        "correct": true
      },
      {
        "text": "Only if the vaccination is for COVID-19.",
        "correct": false
      },
      {
        "text": "Only if the child is below 1 year old.",
        "correct": false
      }
    ],
    "explanation": "MediSave can be used for the medical expenses of your children, regardless of their citizenship status.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Meera S.",
      "age": 35,
      "bg": "mother of non-citizen child",
      "emoji": "👩‍👦",
      "salutation": "Mrs",
      "lastname": "S."
    }
  },
  {
    "q": "How can you tell if a CPF email about your statement is a scam?",
    "choices": [
      {
        "text": "The sender's email address ends with '@gmail.com'.",
        "correct": true
      },
      {
        "text": "The email ends with '@e.cpf.gov.sg'.",
        "correct": false
      },
      {
        "text": "The email uses your principal name.",
        "correct": false
      },
      {
        "text": "The email contains no clickable links to third-party sites.",
        "correct": false
      }
    ],
    "explanation": "Legitimate CPF emails regarding statements end with '@e.cpf.gov.sg'. Personal email addresses like Gmail are common signs of scams.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "George Wong",
      "age": 52,
      "bg": "bank officer",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "What should you check to ensure your browser is compatible with 'my cpf' digital services?",
    "choices": [
      {
        "text": "Ensure it is the 2nd latest version of Chrome or Safari.",
        "correct": true
      },
      {
        "text": "Ensure it is Internet Explorer 11.",
        "correct": false
      },
      {
        "text": "Ensure you are using a VPN.",
        "correct": false
      },
      {
        "text": "Ensure you have disabled all security updates.",
        "correct": false
      }
    ],
    "explanation": "'my cpf' digital services are compatible with the two most recent versions of commonly used browsers like Chrome and Safari.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Ken Tan",
      "age": 24,
      "bg": "IT graduate",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Who is the official developer of the CPF Mobile app on the App Store?",
    "choices": [
      {
        "text": "GovTech Singapore",
        "correct": false
      },
      {
        "text": "Central Provident Fund Board",
        "correct": true
      },
      {
        "text": "Ministry of Manpower",
        "correct": false
      },
      {
        "text": "DBS Bank",
        "correct": false
      }
    ],
    "explanation": "The official developer listed for CPF Mobile is the Central Provident Fund Board.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Linda Ng",
      "age": 31,
      "bg": "marketing manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Ng"
    }
  },
  {
    "q": "If you are a non-Singaporean, where can you find information on applying for Permanent Residency?",
    "choices": [
      {
        "text": "CPF Board website",
        "correct": false
      },
      {
        "text": "MOM website",
        "correct": false
      },
      {
        "text": "ICA website",
        "correct": true
      },
      {
        "text": "HDB website",
        "correct": false
      }
    ],
    "explanation": "Enquiries on applying for Permanent Residency should be submitted to the Immigration & Checkpoints Authority (ICA).",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Rahul Kapoor",
      "age": 33,
      "bg": "employment pass holder",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Kapoor"
    }
  },
  {
    "q": "When do Silver Support payments for the July to September period typically occur?",
    "choices": [
      {
        "text": "31 March",
        "correct": false
      },
      {
        "text": "30 June",
        "correct": true
      },
      {
        "text": "30 September",
        "correct": false
      },
      {
        "text": "31 December",
        "correct": false
      }
    ],
    "explanation": "Payments for July-September are made on 30 June (the last day of the preceding quarter).",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Lim",
      "age": 70,
      "bg": "retired hawker",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "What is the maximum household monthly income per person to be eligible for Silver Support?",
    "choices": [
      {
        "text": "$1,500",
        "correct": false
      },
      {
        "text": "$1,800",
        "correct": false
      },
      {
        "text": "$2,300",
        "correct": true
      },
      {
        "text": "$2,500",
        "correct": false
      }
    ],
    "explanation": "To qualify, the monthly household income per person must not be more than $2,300.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Fatimah",
      "age": 66,
      "bg": "homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Fatimah"
    }
  },
  {
    "q": "Does a senior qualify for Silver Support if their spouse owns a private property?",
    "choices": [
      {
        "text": "Yes, only the senior's ownership matters.",
        "correct": false
      },
      {
        "text": "No, the senior and spouse must not own private property.",
        "correct": true
      },
      {
        "text": "Yes, if the property is rented out.",
        "correct": false
      },
      {
        "text": "Only if they have been married for less than 10 years.",
        "correct": false
      }
    ],
    "explanation": "One criteria is that the senior must not own, or have a spouse who owns, a 5-room or larger HDB flat or private property.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mdm Seah",
      "age": 68,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Seah"
    }
  },
  {
    "q": "If you cannot withdraw Silver Support from an ATM, what is the alternative to receive payment?",
    "choices": [
      {
        "text": "By cheque",
        "correct": false
      },
      {
        "text": "Via PayNow-NRIC",
        "correct": true
      },
      {
        "text": "In-person at CPF Service Centres",
        "correct": false
      },
      {
        "text": "Only through your employer",
        "correct": false
      }
    ],
    "explanation": "Seniors are encouraged to register for PayNow-NRIC to receive their SS payments directly into their bank accounts.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Kandasamy",
      "age": 71,
      "bg": "retired storekeeper",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Kandasamy"
    }
  },
  {
    "q": "Which CPF account is used specifically for hospitalisation expenses?",
    "choices": [
      {
        "text": "Ordinary Account",
        "correct": false
      },
      {
        "text": "Special Account",
        "correct": false
      },
      {
        "text": "MediSave Account",
        "correct": true
      },
      {
        "text": "Retirement Account",
        "correct": false
      }
    ],
    "explanation": "The MediSave Account is for hospitalisation expenses and approved medical insurance.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Nurul",
      "age": 28,
      "bg": "nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Nurul"
    }
  },
  {
    "q": "What should you do if your Singpass Face Verification keeps failing despite good lighting?",
    "choices": [
      {
        "text": "Contact CPF Board support.",
        "correct": false
      },
      {
        "text": "Contact the Singpass Helpdesk directly.",
        "correct": true
      },
      {
        "text": "Try again using a lower resolution camera.",
        "correct": false
      },
      {
        "text": "Delete your Singpass account.",
        "correct": false
      }
    ],
    "explanation": "Singpass Face Verification is a GovTech service; contact the Singpass Helpdesk for technical issues.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Ben",
      "age": 35,
      "bg": "engineer",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Ben"
    }
  },
  {
    "q": "What happens to your CPF savings if you become a citizen of another country and don't close your account?",
    "choices": [
      {
        "text": "They are automatically donated to charity.",
        "correct": false
      },
      {
        "text": "They stop earning interest after a grace period.",
        "correct": true
      },
      {
        "text": "They are transferred to ICA.",
        "correct": false
      },
      {
        "text": "The account stays active until you are 100.",
        "correct": false
      }
    ],
    "explanation": "CPF accounts of non-citizens/PRs will be automatically closed, and interest will eventually cease after 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Tom",
      "age": 42,
      "bg": "former resident",
      "emoji": "🌍",
      "salutation": "Mr",
      "lastname": "Tom"
    }
  },
  {
    "q": "Can you update your name in CPF records to include a 'married name' without updating your NRIC?",
    "choices": [
      {
        "text": "Yes, by providing a marriage certificate.",
        "correct": false
      },
      {
        "text": "No, CPF follows the principal name on your NRIC.",
        "correct": true
      },
      {
        "text": "Only if you are a Permanent Resident.",
        "correct": false
      },
      {
        "text": "Yes, by emailing the CPF Board.",
        "correct": false
      }
    ],
    "explanation": "CPF uses the principal name registered in your NRIC. If your NRIC is not updated, CPF records will not change.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mrs. Lee",
      "age": 34,
      "bg": "newlywed",
      "emoji": "👰",
      "salutation": "Mrs",
      "lastname": "Lee"
    }
  },
  {
    "q": "What is the age limit for parents to view their child's CPF statement?",
    "choices": [
      {
        "text": "Below 16",
        "correct": false
      },
      {
        "text": "Below 18",
        "correct": false
      },
      {
        "text": "Below 21",
        "correct": true
      },
      {
        "text": "There is no age limit.",
        "correct": false
      }
    ],
    "explanation": "Parents can view statements of children below age 21 who are SC/PR and have received CPF contributions.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Grace",
      "age": 45,
      "bg": "mother",
      "emoji": "👩‍👧",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "How can a member receive push notifications for CPF updates?",
    "choices": [
      {
        "text": "By subscribing to the CPF newsletter.",
        "correct": false
      },
      {
        "text": "By downloading and using the CPF Mobile app.",
        "correct": true
      },
      {
        "text": "By following CPF Board on Facebook.",
        "correct": false
      },
      {
        "text": "By visiting a CPF Service Centre.",
        "correct": false
      }
    ],
    "explanation": "CPF Mobile provides push notification alerts and updates regarding personal CPF matters.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Adam",
      "age": 27,
      "bg": "digital marketer",
      "emoji": "📱",
      "salutation": "Mr",
      "lastname": "Adam"
    }
  },
  {
    "q": "What happens to the MediSave balance if it exceeds the BHS and the member is 55+ but hasn't met the FRS?",
    "choices": [
      {
        "text": "It is transferred to the Ordinary Account.",
        "correct": false
      },
      {
        "text": "It is transferred to the Retirement Account.",
        "correct": true
      },
      {
        "text": "It stays in the MediSave Account but earns no interest.",
        "correct": false
      },
      {
        "text": "It is paid out in cash.",
        "correct": false
      }
    ],
    "explanation": "For those 55 and above, excess MA is channelled to the RA if the FRS has not been met.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Hock Bee",
      "age": 58,
      "bg": "clerk",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Why does CPF limit online statement retrieval to the last 10 years?",
    "choices": [
      {
        "text": "Due to data storage regulations.",
        "correct": true
      },
      {
        "text": "Because older records are deleted.",
        "correct": false
      },
      {
        "text": "To encourage members to save physical copies.",
        "correct": false
      },
      {
        "text": "Because interest rates were different then.",
        "correct": false
      }
    ],
    "explanation": "CPF Board provides retrieval for the past 10 years; members are encouraged to download statements for their own records.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Alice",
      "age": 48,
      "bg": "archivist",
      "emoji": "📚",
      "salutation": "Ms",
      "lastname": "Alice"
    }
  },
  {
    "q": "What is the purpose of the 8-digit Payment Reference Number (PRN) for Silver Support?",
    "choices": [
      {
        "text": "To login to the CPF website.",
        "correct": false
      },
      {
        "text": "To withdraw cash via GovCash at OCBC ATMs.",
        "correct": true
      },
      {
        "text": "To track your CPF contributions.",
        "correct": false
      },
      {
        "text": "To register for a Singpass account.",
        "correct": false
      }
    ],
    "explanation": "The PRN is required along with your NRIC to withdraw Silver Support cash benefits from OCBC ATMs.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mdm Zahara",
      "age": 69,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Zahara"
    }
  },
  {
    "q": "How can you check your Silver Support eligibility if you didn't receive a letter?",
    "choices": [
      {
        "text": "Wait for the next year's review.",
        "correct": false
      },
      {
        "text": "Log in to Silver Support e-services with Singpass.",
        "correct": true
      },
      {
        "text": "Call your local MP.",
        "correct": false
      },
      {
        "text": "Check your bank statement.",
        "correct": false
      }
    ],
    "explanation": "All Singaporeans aged 65 and above can check their SS eligibility by logging in to the SS e-services using Singpass.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Mr. Chan",
      "age": 66,
      "bg": "retired driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Chan"
    }
  },
  {
    "q": "Can a senior who lives in a 5-room HDB flat receive Silver Support?",
    "choices": [
      {
        "text": "No, 5-room flats are too large.",
        "correct": false
      },
      {
        "text": "Yes, if they live in it but do not own it (and meet other criteria).",
        "correct": true
      },
      {
        "text": "Only if they have more than 5 children.",
        "correct": false
      },
      {
        "text": "Yes, but they get the smallest amount of $215/quarter.",
        "correct": false
      }
    ],
    "explanation": "Seniors may live in, but must not own, a 5-room HDB flat to be eligible. If they qualify, they receive $430 or $215 per quarter.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Tan",
      "age": 70,
      "bg": "staying with children",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "What happens if a senior is a ComCare Long Term Assistance (LTA) recipient?",
    "choices": [
      {
        "text": "They are ineligible for Silver Support.",
        "correct": false
      },
      {
        "text": "They receive $430 per quarter regardless of flat type.",
        "correct": true
      },
      {
        "text": "They receive $1,080 per quarter regardless of flat type.",
        "correct": false
      },
      {
        "text": "They receive Silver Support once every year instead of quarterly.",
        "correct": false
      }
    ],
    "explanation": "ComCare LTA recipients receive a flat Silver Support amount of $430 per quarter.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Ahmad",
      "age": 75,
      "bg": "ComCare recipient",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "Does the housing criteria for Silver Support look at the ownership of the senior's spouse?",
    "choices": [
      {
        "text": "No, only the senior's ownership.",
        "correct": false
      },
      {
        "text": "Yes, the spouse must also not own a 5-room/private property.",
        "correct": true
      },
      {
        "text": "Only if they have been married for more than 20 years.",
        "correct": false
      },
      {
        "text": "Only if the spouse is also aged 65 and above.",
        "correct": false
      }
    ],
    "explanation": "To qualify, the senior and their spouse must not own a 5-room or larger HDB flat or private property.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Koh",
      "age": 66,
      "bg": "retired clerk",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "If a senior's bank account validation fails, how will the CPF Board contact them?",
    "choices": [
      {
        "text": "They will not be contacted; the money is held.",
        "correct": false
      },
      {
        "text": "The Board will inform them to update their bank account details.",
        "correct": true
      },
      {
        "text": "A representative will visit their home.",
        "correct": false
      },
      {
        "text": "The Board will call their children.",
        "correct": false
      }
    ],
    "explanation": "If bank details are invalid, the Board will inform the senior to update their bank account details.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Mdm Rosnah",
      "age": 68,
      "bg": "retired tailor",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Rosnah"
    }
  },
  {
    "q": "Where should a non-Singaporean send enquiries about their Work Permit after closing their CPF account?",
    "choices": [
      {
        "text": "CPF Board",
        "correct": false
      },
      {
        "text": "Ministry of Manpower (MOM)",
        "correct": true
      },
      {
        "text": "Ministry of Foreign Affairs",
        "correct": false
      },
      {
        "text": "ICA",
        "correct": false
      }
    ],
    "explanation": "Enquiries on work permit or employment pass applications should be directed to the Ministry of Manpower.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Raj",
      "age": 30,
      "bg": "work permit holder",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "Can you still transfer your CPF savings to your bank account after 1 April 2027?",
    "choices": [
      {
        "text": "No, the money will be forfeited.",
        "correct": false
      },
      {
        "text": "Yes, but it will not have earned interest since April 2027.",
        "correct": true
      },
      {
        "text": "Only if you pay a late fee.",
        "correct": false
      },
      {
        "text": "Only if you move back to Singapore.",
        "correct": false
      }
    ],
    "explanation": "Members can transfer savings at any time, but interest will stop being paid after 1 April 2027.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Sophie",
      "age": 40,
      "bg": "former resident",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Sophie"
    }
  },
  {
    "q": "What happens to the Home Protection Scheme (HPS) cover once a CPF account is closed due to renunciation?",
    "choices": [
      {
        "text": "It continues until the loan is paid.",
        "correct": false
      },
      {
        "text": "It ceases immediately upon account closure.",
        "correct": true
      },
      {
        "text": "It can be transferred to a private insurer.",
        "correct": false
      },
      {
        "text": "It stays active for 12 months.",
        "correct": false
      }
    ],
    "explanation": "Upon account closure, participation in all CPF-administered schemes, including HPS, will cease.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Wong",
      "age": 48,
      "bg": "renouncing citizen",
      "emoji": "👨‍⚖️",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "How can a parent prove their relationship to view a child's CPF dashboard if it's not listed?",
    "choices": [
      {
        "text": "Submit the child's birth certificate and your NRIC.",
        "correct": true
      },
      {
        "text": "Submit a letter from the child's school.",
        "correct": false
      },
      {
        "text": "Provide a DNA test result.",
        "correct": false
      },
      {
        "text": "Login with the child's Singpass instead.",
        "correct": false
      }
    ],
    "explanation": "If a child is not listed, parents can write in with the child's birth certificate and citizenship certificate (if applicable).",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mei Ling",
      "age": 39,
      "bg": "mother",
      "emoji": "👩‍👦",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    }
  },
  {
    "q": "Does updating your mailing address with ICA also update your 'Residential Address' for CPF purposes?",
    "choices": [
      {
        "text": "No, they are separate.",
        "correct": false
      },
      {
        "text": "Yes, CPF uses the residential address on your IC by default.",
        "correct": true
      },
      {
        "text": "Only if you are a PR.",
        "correct": false
      },
      {
        "text": "Only if you manually select 'Sync with CPF'.",
        "correct": false
      }
    ],
    "explanation": "CPF letters are sent to the residential address on your NRIC. Updating ICA updates this record for CPF.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Wei Kiat",
      "age": 25,
      "bg": "student",
      "emoji": "👨‍🎓",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "Who should a court-appointed Deputy write to for a member's CPF statement?",
    "choices": [
      {
        "text": "Ministry of Law",
        "correct": false
      },
      {
        "text": "CPF Board",
        "correct": true
      },
      {
        "text": "Singpass Helpdesk",
        "correct": false
      },
      {
        "text": "The member's bank",
        "correct": false
      }
    ],
    "explanation": "A court-appointed Deputy can write to the CPF Board with the court order to request a member's statement.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Sharon",
      "age": 50,
      "bg": "legal deputy",
      "emoji": "👩‍⚖️",
      "salutation": "Ms",
      "lastname": "Sharon"
    }
  },
  {
    "q": "What happens if you use a camera with less than 2 megapixels for Singpass Face Verification?",
    "choices": [
      {
        "text": "It will take longer to scan.",
        "correct": false
      },
      {
        "text": "It may cause the verification to fail.",
        "correct": true
      },
      {
        "text": "It will automatically switch to SMS OTP.",
        "correct": false
      },
      {
        "text": "It is not allowed by the system.",
        "correct": false
      }
    ],
    "explanation": "Singpass Face Verification recommends a minimum resolution of two megapixels for successful scanning.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Tan",
      "age": 68,
      "bg": "retired clerk",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "What information is shown on the 'Child Dashboard' in 'my cpf'?",
    "choices": [
      {
        "text": "School grades and attendance.",
        "correct": false
      },
      {
        "text": "Transaction History and Healthcare Payments.",
        "correct": true
      },
      {
        "text": "Future career projections.",
        "correct": false
      },
      {
        "text": "The child's bank account balance.",
        "correct": false
      }
    ],
    "explanation": "The Child Dashboard shows the Transaction History and Healthcare Payments/Claims for the last 15 months.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Hafiz",
      "age": 36,
      "bg": "father",
      "emoji": "👨‍👦",
      "salutation": "Mr",
      "lastname": "Hafiz"
    }
  },
  {
    "q": "Is a Singapore Citizen required to inform CPF Board when they change their name officially?",
    "choices": [
      {
        "text": "Yes, within 7 days.",
        "correct": false
      },
      {
        "text": "No, it is automatically updated once updated with ICA.",
        "correct": true
      },
      {
        "text": "Only if they are receiving CPF payouts.",
        "correct": false
      },
      {
        "text": "Only if they have a CPF education loan.",
        "correct": false
      }
    ],
    "explanation": "If you update your name on your NRIC, it will be automatically updated in CPF records.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Jasmine",
      "age": 28,
      "bg": "professional",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Jasmine"
    }
  },
  {
    "q": "What is the transitory interest rate for non-citizens' closed accounts from 2024 to 2027?",
    "choices": [
      {
        "text": "0.05% per annum",
        "correct": true
      },
      {
        "text": "1.0% per annum",
        "correct": false
      },
      {
        "text": "2.5% per annum",
        "correct": false
      },
      {
        "text": "4.0% per annum",
        "correct": false
      }
    ],
    "explanation": "The applicable rate is 0.05% per annum, which is based on the 3-month average of local banks' savings rates.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Gupta",
      "age": 44,
      "bg": "former resident",
      "emoji": "👨",
      "salutation": "Mr",
      "lastname": "Gupta"
    }
  },
  {
    "q": "What happens if your device's date and time are not set to 'Automatic' when logging into CPF?",
    "choices": [
      {
        "text": "The website will look different.",
        "correct": false
      },
      {
        "text": "It may cause login issues with digital services.",
        "correct": true
      },
      {
        "text": "You will be logged out after 5 minutes.",
        "correct": false
      },
      {
        "text": "Your interest will be calculated incorrectly.",
        "correct": false
      }
    ],
    "explanation": "Incorrect date-time settings can interfere with secure login processes for government digital services.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Chloe",
      "age": 22,
      "bg": "student",
      "emoji": "👩‍🎓",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "Can you withdraw Silver Support at a DBS ATM?",
    "choices": [
      {
        "text": "Yes, all bank ATMs work.",
        "correct": false
      },
      {
        "text": "No, only OCBC ATMs support GovCash withdrawals.",
        "correct": true
      },
      {
        "text": "Yes, but there is a $5 fee.",
        "correct": false
      },
      {
        "text": "Only at UOB and OCBC ATMs.",
        "correct": false
      }
    ],
    "explanation": "GovCash withdrawals for Silver Support are specifically supported at OCBC ATMs.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Auntie Mary",
      "age": 70,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Mary"
    }
  },
  {
    "q": "What should you do if you receive a CPF SMS with a link to a non-government website?",
    "choices": [
      {
        "text": "Click it to see what it is.",
        "correct": false
      },
      {
        "text": "Delete it and do not click any links.",
        "correct": true
      },
      {
        "text": "Forward it to your friends.",
        "correct": false
      },
      {
        "text": "Reply with your NRIC to verify.",
        "correct": false
      }
    ],
    "explanation": "Official CPF SMS will not link to non-government websites. Links to unofficial sites are typical of phishing scams.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Victor",
      "age": 35,
      "bg": "security conscious",
      "emoji": "🛡️",
      "salutation": "Mr",
      "lastname": "Victor"
    }
  },
  {
    "q": "What is the 'principal name' in the context of CPF records?",
    "choices": [
      {
        "text": "Your first name only.",
        "correct": false
      },
      {
        "text": "The name registered in your NRIC, excluding aliases.",
        "correct": true
      },
      {
        "text": "Your family name followed by your given name.",
        "correct": false
      },
      {
        "text": "The name on your birth certificate.",
        "correct": false
      }
    ],
    "explanation": "The principal name is the one registered in your NRIC and usually excludes variants like hanyu pinyin or other aliases.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Ming",
      "age": 30,
      "bg": "executive",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Wei Ming"
    }
  },
  {
    "q": "Are Permanent Residents (PRs) eligible for the Silver Support Scheme?",
    "choices": [
      {
        "text": "Yes, if they meet the income criteria.",
        "correct": false
      },
      {
        "text": "No, only Singapore Citizens are eligible.",
        "correct": true
      },
      {
        "text": "Yes, if they have lived in Singapore for 20 years.",
        "correct": false
      },
      {
        "text": "Only if they are Pioneer Generation members.",
        "correct": false
      }
    ],
    "explanation": "Only Singapore Citizens are eligible for the Silver Support Scheme.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Mr. Lee",
      "age": 66,
      "bg": "Permanent Resident",
      "emoji": "🇸🇬",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "Do Pioneer Generation (PG) or Merdeka Generation (MG) members automatically qualify for Silver Support?",
    "choices": [
      {
        "text": "Yes, all PG/MG members qualify automatically.",
        "correct": false
      },
      {
        "text": "No, they must still meet the means-test and eligibility criteria.",
        "correct": true
      },
      {
        "text": "Only PG members qualify automatically; MG members do not.",
        "correct": false
      },
      {
        "text": "Yes, but they receive a reduced amount.",
        "correct": false
      }
    ],
    "explanation": "PG and MG members are means-tested for Silver Support like all other seniors and must meet the eligibility criteria to receive it.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Raj",
      "age": 75,
      "bg": "Pioneer Generation member",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "What is the flat quarterly Silver Support amount for seniors on the ComCare Long Term Assistance (LTA) Scheme?",
    "choices": [
      {
        "text": "$360",
        "correct": false
      },
      {
        "text": "$430",
        "correct": true
      },
      {
        "text": "$540",
        "correct": false
      },
      {
        "text": "$1,080",
        "correct": false
      }
    ],
    "explanation": "Seniors on ComCare LTA automatically qualify for Silver Support and receive a flat amount of $430 per quarter.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mdm Aminah",
      "age": 70,
      "bg": "ComCare recipient",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Aminah"
    }
  },
  {
    "q": "How does the CPF Board notify you of your Silver Support payments via SMS?",
    "choices": [
      {
        "text": "By calling you directly.",
        "correct": false
      },
      {
        "text": "To the mobile number registered in your Account settings.",
        "correct": true
      },
      {
        "text": "Via a WhatsApp message.",
        "correct": false
      },
      {
        "text": "Only by physical mail.",
        "correct": false
      }
    ],
    "explanation": "SMS notifications are sent to the mobile number you have registered with the CPF Board in your Account settings.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Wei Ling",
      "age": 65,
      "bg": "smartphone user",
      "emoji": "📱",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "What happens to remaining Silver Support funds in GovCash if the beneficiary passes away?",
    "choices": [
      {
        "text": "The funds are forfeited to the government.",
        "correct": false
      },
      {
        "text": "They are credited to the beneficiary's CPF Ordinary Account.",
        "correct": true
      },
      {
        "text": "They are paid to the next of kin in cash.",
        "correct": false
      },
      {
        "text": "They are used to pay for funeral expenses automatically.",
        "correct": false
      }
    ],
    "explanation": "Remaining GovCash balances are credited to the deceased's CPF Ordinary Account and distributed according to their nomination.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Siti",
      "age": 40,
      "bg": "daughter of a beneficiary",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Siti"
    }
  },
  {
    "q": "What is the primary URL for the official CPF website?",
    "choices": [
      {
        "text": "cpf.com.sg",
        "correct": false
      },
      {
        "text": "cpf.gov.sg",
        "correct": true
      },
      {
        "text": "mycpf.sg",
        "correct": false
      },
      {
        "text": "centralprovidentfund.org",
        "correct": false
      }
    ],
    "explanation": "The official CPF website is located at cpf.gov.sg.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "John",
      "age": 25,
      "bg": "new employee",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "Which of these is a recommended troubleshooting step for login issues on the CPF website?",
    "choices": [
      {
        "text": "Wait 24 hours and try again.",
        "correct": false
      },
      {
        "text": "Clear your browser cache.",
        "correct": true
      },
      {
        "text": "Change your Singpass ID.",
        "correct": false
      },
      {
        "text": "Reinstall your operating system.",
        "correct": false
      }
    ],
    "explanation": "Clearing your browser cache is a standard troubleshooting step for resolving digital service login issues.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lily",
      "age": 30,
      "bg": "office worker",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "CPF digital services are compatible with which versions of browsers like Chrome and Safari?",
    "choices": [
      {
        "text": "Any version since 2010.",
        "correct": false
      },
      {
        "text": "The two most recent versions.",
        "correct": true
      },
      {
        "text": "Only the beta versions.",
        "correct": false
      },
      {
        "text": "Only versions approved by GovTech.",
        "correct": false
      }
    ],
    "explanation": "For security and functionality, digital services are compatible with the two most recent versions of common browsers.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Ken",
      "age": 22,
      "bg": "tech student",
      "emoji": "👨‍🎓",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "How can you ensure the CPF Mobile app you are downloading is official?",
    "choices": [
      {
        "text": "Check that the developer is 'Central Provident Fund Board'.",
        "correct": true
      },
      {
        "text": "Check that the app has at least 5 stars.",
        "correct": false
      },
      {
        "text": "Check that it is the first result in the search.",
        "correct": false
      },
      {
        "text": "Check that it is free to download.",
        "correct": false
      }
    ],
    "explanation": "Always verify that the application developer listed in the App Store or Play Store is 'Central Provident Fund Board'.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Sarah",
      "age": 35,
      "bg": "concerned mother",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "What feature of CPF Mobile allows you to get updates even when you are not using the app?",
    "choices": [
      {
        "text": "Automated Emails",
        "correct": false
      },
      {
        "text": "Push notification alerts",
        "correct": true
      },
      {
        "text": "SMS text messages",
        "correct": false
      },
      {
        "text": "Phone calls from CPF staff",
        "correct": false
      }
    ],
    "explanation": "CPF Mobile provides push notification alerts for personal CPF matters and educational updates.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Ben",
      "age": 28,
      "bg": "busy professional",
      "emoji": "📱",
      "salutation": "Mr",
      "lastname": "Ben"
    }
  },
  {
    "q": "If you are not an SC or PR, what happened to your CPF account in April 2024?",
    "choices": [
      {
        "text": "It was converted into a bank account.",
        "correct": false
      },
      {
        "text": "It was automatically closed.",
        "correct": true
      },
      {
        "text": "The interest rate was increased to 5%.",
        "correct": false
      },
      {
        "text": "It was transferred to your country of origin.",
        "correct": false
      }
    ],
    "explanation": "CPF accounts for non-SC and non-PR members were automatically closed in April 2024.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Mark",
      "age": 45,
      "bg": "former PR",
      "emoji": "🛫",
      "salutation": "Mr",
      "lastname": "Mark"
    }
  },
  {
    "q": "Until when will savings in closed non-citizen accounts earn interest similar to commercial bank rates?",
    "choices": [
      {
        "text": "31 March 2025",
        "correct": false
      },
      {
        "text": "31 March 2026",
        "correct": false
      },
      {
        "text": "31 March 2027",
        "correct": true
      },
      {
        "text": "Indefinitely",
        "correct": false
      }
    ],
    "explanation": "As a concession, these savings earn interest similar to commercial bank rates until 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Elena",
      "age": 42,
      "bg": "expat",
      "emoji": "🌍",
      "salutation": "Ms",
      "lastname": "Elena"
    }
  },
  {
    "q": "What is the fixed interest rate for savings in closed accounts from April 2024 to March 2027?",
    "choices": [
      {
        "text": "2.5% per annum",
        "correct": false
      },
      {
        "text": "0.05% per annum",
        "correct": true
      },
      {
        "text": "1.0% per annum",
        "correct": false
      },
      {
        "text": "0.5% per annum",
        "correct": false
      }
    ],
    "explanation": "The applicable transitory interest rate is 0.05% per annum.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "David",
      "age": 50,
      "bg": "retiring abroad",
      "emoji": "🚢",
      "salutation": "Mr",
      "lastname": "David"
    }
  },
  {
    "q": "If you renounced SC/PR in May 2024, when would your CPF account be automatically closed?",
    "choices": [
      {
        "text": "Immediately on the day of renunciation.",
        "correct": false
      },
      {
        "text": "In June 2024 (the following month).",
        "correct": true
      },
      {
        "text": "On 31 December 2024.",
        "correct": false
      },
      {
        "text": "After 3 years.",
        "correct": false
      }
    ],
    "explanation": "If you do not close it manually, your account is automatically closed in the month following your renunciation.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Paul",
      "age": 38,
      "bg": "former citizen",
      "emoji": "🗺️",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "Can a non-citizen still request a CPF transaction statement after renouncing their status?",
    "choices": [
      {
        "text": "No, access is cut off immediately.",
        "correct": false
      },
      {
        "text": "Yes, but they should download it while they still have Singpass access.",
        "correct": true
      },
      {
        "text": "Only by visiting a CPF Service Centre in person.",
        "correct": false
      },
      {
        "text": "Yes, but they must pay a $50 fee.",
        "correct": false
      }
    ],
    "explanation": "Members are advised to download all required CPF information while they still have Singpass access after renunciation.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "George",
      "age": 44,
      "bg": "leaving Singapore",
      "emoji": "✈️",
      "salutation": "Mr",
      "lastname": "George"
    }
  },
  {
    "q": "What happens if a Singapore Citizen changes their name at ICA?",
    "choices": [
      {
        "text": "They must mail a copy of the deed poll to CPF.",
        "correct": false
      },
      {
        "text": "CPF records will be automatically updated.",
        "correct": true
      },
      {
        "text": "The member must visit a CPF Service Centre.",
        "correct": false
      },
      {
        "text": "They must update their name via the CPF website.",
        "correct": false
      }
    ],
    "explanation": "For SC/PRs, particulars like names are automatically updated in CPF records once they are updated with ICA.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Jasmine",
      "age": 29,
      "bg": "changed name recently",
      "emoji": "📝",
      "salutation": "Ms",
      "lastname": "Jasmine"
    }
  },
  {
    "q": "Which name does the CPF Board use to transact with you by default?",
    "choices": [
      {
        "text": "Your alias.",
        "correct": false
      },
      {
        "text": "Your principal name on your NRIC.",
        "correct": true
      },
      {
        "text": "Your hanyu pinyin name.",
        "correct": false
      },
      {
        "text": "Your married name.",
        "correct": false
      }
    ],
    "explanation": "CPF Board uses the principal name registered in your NRIC, which usually excludes aliases or married names unless they are the principal name.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mrs. Tan",
      "age": 32,
      "bg": "newly married",
      "emoji": "👰",
      "salutation": "Mrs",
      "lastname": "Tan"
    }
  },
  {
    "q": "How long can a parent view their child's CPF transaction history via the Child Dashboard?",
    "choices": [
      {
        "text": "The last 6 months.",
        "correct": false
      },
      {
        "text": "The last 12 months.",
        "correct": false
      },
      {
        "text": "The last 15 months.",
        "correct": true
      },
      {
        "text": "Since the child's birth.",
        "correct": false
      }
    ],
    "explanation": "The Child Dashboard allows parents to view transaction history and healthcare claims for the last 15 months.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Wei Kiat",
      "age": 38,
      "bg": "father",
      "emoji": "👨‍👧‍👦",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "What is required for a parent to view a child's CPF statement if they are not automatically linked?",
    "choices": [
      {
        "text": "The child's birth certificate.",
        "correct": true
      },
      {
        "text": "A letter from the school.",
        "correct": false
      },
      {
        "text": "A bank statement from the child.",
        "correct": false
      },
      {
        "text": "The child's passport.",
        "correct": false
      }
    ],
    "explanation": "If a child isn't listed, parents can write to the Board with the child's birth certificate to establish the link.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mei Ling",
      "age": 34,
      "bg": "mother",
      "emoji": "👩‍👦",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    }
  },
  {
    "q": "Can a parent remove an ex-spouse's access to a child's CPF statement?",
    "choices": [
      {
        "text": "No, both parents always have access.",
        "correct": false
      },
      {
        "text": "Yes, if they have sole custody and provide the Court Order.",
        "correct": true
      },
      {
        "text": "Yes, by simply calling the CPF Board.",
        "correct": false
      },
      {
        "text": "Only if the ex-spouse agrees in writing.",
        "correct": false
      }
    ],
    "explanation": "A parent with sole custody can request removal of the ex-spouse's access by providing the relevant Court Order.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Sharon",
      "age": 40,
      "bg": "divorced parent",
      "emoji": "👩‍👧",
      "salutation": "Ms",
      "lastname": "Sharon"
    }
  },
  {
    "q": "What is the CPF account number for Singapore Citizens?",
    "choices": [
      {
        "text": "A randomly generated 10-digit number.",
        "correct": false
      },
      {
        "text": "Their NRIC number (UIN).",
        "correct": true
      },
      {
        "text": "Their phone number.",
        "correct": false
      },
      {
        "text": "Their bank account number.",
        "correct": false
      }
    ],
    "explanation": "For SCs and PRs, the CPF account number is the Unique Identification Number (UIN) on their NRIC.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Adam",
      "age": 21,
      "bg": "first-time worker",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Adam"
    }
  },
  {
    "q": "How is a CPF account officially created for a member?",
    "choices": [
      {
        "text": "By applying at a CPF Service Centre.",
        "correct": false
      },
      {
        "text": "Automatically when a first top-up or contribution is received.",
        "correct": true
      },
      {
        "text": "When you turn 18 years old.",
        "correct": false
      },
      {
        "text": "When you get your first NRIC.",
        "correct": false
      }
    ],
    "explanation": "A CPF account is automatically created once the first contribution or top-up is processed.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Chloe",
      "age": 19,
      "bg": "intern",
      "emoji": "👩‍🎓",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "How far back can you retrieve your CPF Yearly Statement of Account online?",
    "choices": [
      {
        "text": "The last 5 years.",
        "correct": false
      },
      {
        "text": "The last 10 years.",
        "correct": true
      },
      {
        "text": "Since you started working.",
        "correct": false
      },
      {
        "text": "Only the current year.",
        "correct": false
      }
    ],
    "explanation": "CPF Board provides online retrieval of statements for the past 10 years.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Robert",
      "age": 55,
      "bg": "planning retirement",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Robert"
    }
  },
  {
    "q": "What should you do to ensure you have CPF statements older than 10 years?",
    "choices": [
      {
        "text": "Nothing, CPF keeps them forever.",
        "correct": false
      },
      {
        "text": "Download and save them in a timely manner.",
        "correct": true
      },
      {
        "text": "Request them from your employer.",
        "correct": false
      },
      {
        "text": "Visit the National Archives.",
        "correct": false
      }
    ],
    "explanation": "Since the online limit is 10 years, members are encouraged to download and save their statements periodically.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Grace",
      "age": 45,
      "bg": "meticulous record-keeper",
      "emoji": "📋",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "What is the maximum amount you can hold in your MediSave Account (MA)?",
    "choices": [
      {
        "text": "The Full Retirement Sum (FRS).",
        "correct": false
      },
      {
        "text": "The Basic Healthcare Sum (BHS).",
        "correct": true
      },
      {
        "text": "There is no limit.",
        "correct": false
      },
      {
        "text": "$100,000.",
        "correct": false
      }
    ],
    "explanation": "The Basic Healthcare Sum (BHS) is the maximum amount you can hold in your MediSave Account.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Dr. Tan",
      "age": 52,
      "bg": "medical professional",
      "emoji": "👨‍⚕️",
      "salutation": "Dr",
      "lastname": "Tan"
    }
  },
  {
    "q": "If your MediSave balance is below the BHS at age 65, do you have to top it up?",
    "choices": [
      {
        "text": "Yes, it is compulsory.",
        "correct": false
      },
      {
        "text": "No, you are not required to top it up.",
        "correct": true
      },
      {
        "text": "Yes, but only if you are still working.",
        "correct": false
      },
      {
        "text": "Only if you have a chronic illness.",
        "correct": false
      }
    ],
    "explanation": "If your MA balance is less than the BHS at age 65, you are not required to top it up, though you may choose to do so.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Lim",
      "age": 64,
      "bg": "retiring soon",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "Can you use your MediSave savings for your spouse's hospital bill if they are a foreigner?",
    "choices": [
      {
        "text": "No, only for SC/PR family members.",
        "correct": false
      },
      {
        "text": "Yes, MediSave can be used for your spouse regardless of citizenship.",
        "correct": true
      },
      {
        "text": "Only if the spouse has lived in Singapore for 10 years.",
        "correct": false
      },
      {
        "text": "Only for emergency surgeries.",
        "correct": false
      }
    ],
    "explanation": "MediSave can be used for the medical expenses of your spouse, children, parents, and grandparents, regardless of their citizenship.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Meera",
      "age": 36,
      "bg": "foreigner married to SC",
      "emoji": "👩‍❤️‍👨",
      "salutation": "Mrs",
      "lastname": "Meera"
    }
  },
  {
    "q": "What happens if you have reached your BHS and you receive more MediSave contributions?",
    "choices": [
      {
        "text": "The extra money is returned to you as cash.",
        "correct": false
      },
      {
        "text": "The extra money is channelled to your OA or SA (depending on age).",
        "correct": true
      },
      {
        "text": "The extra money is donated to a healthcare fund.",
        "correct": false
      },
      {
        "text": "The contributions are stopped automatically.",
        "correct": false
      }
    ],
    "explanation": "Amounts above the BHS are channelled to other CPF accounts, such as the Special Account or Retirement Account.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Hock Bee",
      "age": 54,
      "bg": "high earner",
      "emoji": "💰",
      "salutation": "Mr",
      "lastname": "Hock Bee"
    }
  },
  {
    "q": "If you are 55 or older and have met your BHS and FRS, where does your excess MediSave go?",
    "choices": [
      {
        "text": "Special Account.",
        "correct": false
      },
      {
        "text": "Ordinary Account.",
        "correct": true
      },
      {
        "text": "Retirement Account.",
        "correct": false
      },
      {
        "text": "Paid out in cash quarterly.",
        "correct": false
      }
    ],
    "explanation": "For those 55+ who have met their BHS and FRS, excess MA is channelled to the Ordinary Account.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Wong",
      "age": 60,
      "bg": "retiree",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "Is it possible to maintain a MediSave balance higher than the BHS?",
    "choices": [
      {
        "text": "Yes, if you pay a small fee.",
        "correct": false
      },
      {
        "text": "No, the BHS is the maximum amount allowed.",
        "correct": true
      },
      {
        "text": "Only if you are a doctor.",
        "correct": false
      },
      {
        "text": "Yes, for the first year after turning 65.",
        "correct": false
      }
    ],
    "explanation": "The BHS is designed to prevent excessive accumulation of funds and is the hard limit for the MediSave account.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Auntie Tan",
      "age": 66,
      "bg": "careful saver",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "Where can you find a document to prove you do NOT have a CPF account?",
    "choices": [
      {
        "text": "By calling the CPF hotline.",
        "correct": false
      },
      {
        "text": "By logging in to 'my cpf' digital services; a message will be displayed.",
        "correct": true
      },
      {
        "text": "At any police station.",
        "correct": false
      },
      {
        "text": "From the Ministry of Manpower website.",
        "correct": false
      }
    ],
    "explanation": "Non-account holders logging into 'my cpf' will see a message stating they have no account, which can be printed.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Rahul",
      "age": 28,
      "bg": "foreign worker",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Rahul"
    }
  },
  {
    "q": "What happens to your Silver Support eligibility if your household income per person increases to $3,000?",
    "choices": [
      {
        "text": "You receive a smaller amount.",
        "correct": false
      },
      {
        "text": "You become ineligible for the next year.",
        "correct": true
      },
      {
        "text": "Nothing changes as you are already 65.",
        "correct": false
      },
      {
        "text": "You must pay back the previous payments.",
        "correct": false
      }
    ],
    "explanation": "Silver Support eligibility is reviewed annually; if your household income per person exceeds $2,300, you will not qualify for the following year.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Gopal",
      "age": 67,
      "bg": "retired clerk",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Gopal"
    }
  },
  {
    "q": "Who should you contact if you have issues receiving your Singpass SMS OTP?",
    "choices": [
      {
        "text": "Your mobile service provider.",
        "correct": false
      },
      {
        "text": "Singpass Helpdesk.",
        "correct": true
      },
      {
        "text": "CPF Board.",
        "correct": false
      },
      {
        "text": "The police.",
        "correct": false
      }
    ],
    "explanation": "Singpass is managed by GovTech; issues with OTP or login should be directed to their helpdesk.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Uncle Ahmad",
      "age": 62,
      "bg": "security guard",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "If you are living in a 4-room HDB flat and your household income per person is $1,200, how much Silver Support do you get per quarter?",
    "choices": [
      {
        "text": "$325",
        "correct": false
      },
      {
        "text": "$650",
        "correct": true
      },
      {
        "text": "$860",
        "correct": false
      },
      {
        "text": "$1,080",
        "correct": false
      }
    ],
    "explanation": "Seniors in 4-room flats with household income per person of $1,500 or less receive $650 per quarter.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Seah",
      "age": 68,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Seah"
    }
  },
  {
    "q": "What determines whether you receive the 'higher' or 'lower' tier of Silver Support?",
    "choices": [
      {
        "text": "Your age.",
        "correct": false
      },
      {
        "text": "Your household monthly income per person.",
        "correct": true
      },
      {
        "text": "The number of children you have.",
        "correct": false
      },
      {
        "text": "Your total savings in the bank.",
        "correct": false
      }
    ],
    "explanation": "The amount depends on whether your household income per person is $1,500 or less (higher tier) or between $1,501 and $2,300 (lower tier).",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Fatimah",
      "age": 66,
      "bg": "part-time worker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Fatimah"
    }
  },
  {
    "q": "If you are eligible for Silver Support but do not have a bank account, how will you receive payment?",
    "choices": [
      {
        "text": "By cheque.",
        "correct": false
      },
      {
        "text": "Via GovCash (withdrawal from OCBC ATMs).",
        "correct": true
      },
      {
        "text": "In person at the CPF Building.",
        "correct": false
      },
      {
        "text": "You cannot receive payment.",
        "correct": false
      }
    ],
    "explanation": "Those without valid bank accounts will receive their payments via GovCash, which can be withdrawn from OCBC ATMs.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Uncle Hock",
      "age": 72,
      "bg": "no bank account",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Hock"
    }
  },
  {
    "q": "Can you receive Silver Support if you turn 65 in November?",
    "choices": [
      {
        "text": "Yes, you will receive the full year's amount.",
        "correct": false
      },
      {
        "text": "Yes, you will receive the payment for the Oct-Dec quarter.",
        "correct": true
      },
      {
        "text": "No, you must wait until the next year.",
        "correct": false
      },
      {
        "text": "Only if you were born before 1960.",
        "correct": false
      }
    ],
    "explanation": "Eligible seniors start receiving SS in the quarter they turn 65.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Siti",
      "age": 64,
      "bg": "turning 65 soon",
      "emoji": "👩‍🍳",
      "salutation": "Mdm",
      "lastname": "Siti"
    }
  },
  {
    "q": "What happens to the CPF savings of a deceased member who did NOT make a nomination?",
    "choices": [
      {
        "text": "They are donated to the Community Chest.",
        "correct": false
      },
      {
        "text": "They are distributed by the Public Trustee according to intestacy laws.",
        "correct": true
      },
      {
        "text": "They are kept by the CPF Board forever.",
        "correct": false
      },
      {
        "text": "They are given to the first person who claims them.",
        "correct": false
      }
    ],
    "explanation": "In the absence of a nomination, CPF savings are handed over to the Public Trustee for distribution according to the law.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "John De Souza",
      "age": 55,
      "bg": "lawyer",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "De Souza"
    }
  },
  {
    "q": "How can you tell if a phone call from 'CPF Board' is a scam?",
    "choices": [
      {
        "text": "The caller asks for your Singpass password.",
        "correct": true
      },
      {
        "text": "The caller knows your name.",
        "correct": false
      },
      {
        "text": "The call is made during office hours.",
        "correct": false
      },
      {
        "text": "The caller provides a return phone number.",
        "correct": false
      }
    ],
    "explanation": "CPF Board will never ask for your Singpass password or bank PIN over the phone. This is a common scam tactic.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "George",
      "age": 52,
      "bg": "bank officer",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "George"
    }
  },
  {
    "q": "Where can a member check if their CPF contribution for the month has been credited?",
    "choices": [
      {
        "text": "Their bank statement.",
        "correct": false
      },
      {
        "text": "The 'Transaction History' in 'my cpf' digital services.",
        "correct": true
      },
      {
        "text": "By calling their boss.",
        "correct": false
      },
      {
        "text": "Waiting for the Yearly Statement.",
        "correct": false
      }
    ],
    "explanation": "The Transaction History shows the latest contributions and payments into your account.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Linda",
      "age": 31,
      "bg": "executive",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Linda"
    }
  },
  {
    "q": "What should you do if your 'Residential Address' on CPF records is incorrect?",
    "choices": [
      {
        "text": "Email the CPF Board.",
        "correct": false
      },
      {
        "text": "Update your address with ICA.",
        "correct": true
      },
      {
        "text": "Call the CPF hotline.",
        "correct": false
      },
      {
        "text": "Update it via your employer.",
        "correct": false
      }
    ],
    "explanation": "CPF uses the residential address registered with ICA. Updating ICA will automatically update CPF records.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Sarah",
      "age": 30,
      "bg": "moving house",
      "emoji": "🏠",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "What happens if a non-citizen member returns to Singapore to work after closing their CPF account?",
    "choices": [
      {
        "text": "They cannot work in Singapore anymore.",
        "correct": false
      },
      {
        "text": "They can work but will not have a CPF account.",
        "correct": false
      },
      {
        "text": "They can apply for a work permit or employment pass through MOM.",
        "correct": true
      },
      {
        "text": "They must pay a fine of $10,000.",
        "correct": false
      }
    ],
    "explanation": "Closing a CPF account does not prevent you from returning to work in Singapore; you must still follow MOM's application processes.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Rahul",
      "age": 33,
      "bg": "EP holder",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Rahul"
    }
  },
  {
    "q": "How can a member receive a hardcopy of their Yearly Statement of Account?",
    "choices": [
      {
        "text": "It is mailed to everyone automatically.",
        "correct": false
      },
      {
        "text": "They can print it from the CPF website or request one via the e-service.",
        "correct": true
      },
      {
        "text": "They must buy it at a bookstore.",
        "correct": false
      },
      {
        "text": "They must visit the CPF Building in person.",
        "correct": false
      }
    ],
    "explanation": "Members can print statements themselves or request hardcopies via CPF e-services.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Tan",
      "age": 68,
      "bg": "retired",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Is a CPF account automatically closed when a member reaches age 100?",
    "choices": [
      {
        "text": "Yes, automatically.",
        "correct": false
      },
      {
        "text": "No, it remains open as long as there are savings.",
        "correct": true
      },
      {
        "text": "Yes, and the money is donated to charity.",
        "correct": false
      },
      {
        "text": "Only if the member has no children.",
        "correct": false
      }
    ],
    "explanation": "CPF accounts remain open for members of any age as long as they have valid savings.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Lim",
      "age": 99,
      "bg": "centenarian soon",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "What is 'my cpf' digital services?",
    "choices": [
      {
        "text": "A social media platform for CPF members.",
        "correct": false
      },
      {
        "text": "An online portal for transactions and account info.",
        "correct": true
      },
      {
        "text": "A mobile game by the CPF Board.",
        "correct": false
      },
      {
        "text": "A news website for Singaporeans.",
        "correct": false
      }
    ],
    "explanation": "'my cpf' digital services allow members to perform transactions and view account details securely online.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Ken",
      "age": 24,
      "bg": "graduate",
      "emoji": "👨‍🎓",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "What is the primary role of the MediSave Account?",
    "choices": [
      {
        "text": "To pay for a new HDB flat.",
        "correct": false
      },
      {
        "text": "To save for old age and retirement products.",
        "correct": false
      },
      {
        "text": "To pay for hospitalisation and approved medical insurance.",
        "correct": true
      },
      {
        "text": "To fund overseas travel during retirement.",
        "correct": false
      }
    ],
    "explanation": "MediSave is specifically for healthcare expenses and medical insurance premiums like MediShield Life.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Nurul",
      "age": 28,
      "bg": "nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Nurul"
    }
  },
  {
    "q": "If you move overseas, do you need to inform the CPF Board of your new address?",
    "choices": [
      {
        "text": "No, they will find out from the post office.",
        "correct": false
      },
      {
        "text": "Yes, you should update your overseas address via ICA e-Services.",
        "correct": true
      },
      {
        "text": "Only if you are planning to renounce citizenship.",
        "correct": false
      },
      {
        "text": "Yes, you must send a letter to the Singapore Embassy.",
        "correct": false
      }
    ],
    "explanation": "Singaporeans living overseas should update their address with ICA, which then informs the CPF Board.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Tom",
      "age": 42,
      "bg": "working in London",
      "emoji": "🇬🇧",
      "salutation": "Mr",
      "lastname": "Tom"
    }
  },
  {
    "q": "What document is needed to update your name in CPF records if you have a deed poll?",
    "choices": [
      {
        "text": "The deed poll and your new NRIC.",
        "correct": true
      },
      {
        "text": "Only the deed poll.",
        "correct": false
      },
      {
        "text": "A letter from your parents.",
        "correct": false
      },
      {
        "text": "A printout from your Facebook profile.",
        "correct": false
      }
    ],
    "explanation": "You must first update your NRIC with ICA using your deed poll; CPF will then be updated automatically.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Ming",
      "age": 30,
      "bg": "changed name",
      "emoji": "👨",
      "salutation": "Mr",
      "lastname": "Wei Ming"
    }
  },
  {
    "q": "Which organization handles enquiries on applying for Singapore Permanent Residency?",
    "choices": [
      {
        "text": "CPF Board",
        "correct": false
      },
      {
        "text": "Ministry of Manpower",
        "correct": false
      },
      {
        "text": "Immigration & Checkpoints Authority (ICA)",
        "correct": true
      },
      {
        "text": "HDB",
        "correct": false
      }
    ],
    "explanation": "ICA is the authority responsible for Permanent Residency applications.",
    "category": "Account Closure",
    "difficulty": "easy",
    "persona": {
      "name": "Raj",
      "age": 30,
      "bg": "work permit holder",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "If your device's date and time are incorrect, why might you have trouble with CPF digital services?",
    "choices": [
      {
        "text": "The server will think you are from the future.",
        "correct": false
      },
      {
        "text": "Secure login protocols require accurate time settings.",
        "correct": true
      },
      {
        "text": "The website only opens during Singapore office hours.",
        "correct": false
      },
      {
        "text": "Your CPF interest will be calculated wrong.",
        "correct": false
      }
    ],
    "explanation": "For security, many government websites require your device's date and time to be correct to establish a secure connection.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Chloe",
      "age": 22,
      "bg": "student",
      "emoji": "👩‍🎓",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "If a Silver Support beneficiary is mentally incapacitated, who can receive the payment on their behalf?",
    "choices": [
      {
        "text": "Their eldest child automatically.",
        "correct": false
      },
      {
        "text": "A court-appointed Deputy or a donee under a Lasting Power of Attorney (LPA).",
        "correct": true
      },
      {
        "text": "Their neighbor or a close friend.",
        "correct": false
      },
      {
        "text": "No one; the money is held until they recover.",
        "correct": false
      }
    ],
    "explanation": "If a beneficiary is mentally incapacitated, an appointed donee under an LPA or a court-appointed Deputy can handle the transactions.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Siti",
      "age": 45,
      "bg": "caregiver for elderly mother",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Siti"
    }
  },
  {
    "q": "What document is required if an LPA donee wants to receive Silver Support for a beneficiary?",
    "choices": [
      {
        "text": "Only the donee's NRIC.",
        "correct": false
      },
      {
        "text": "The Lasting Power of Attorney and a recent medical report of the beneficiary.",
        "correct": true
      },
      {
        "text": "The beneficiary's birth certificate.",
        "correct": false
      },
      {
        "text": "A letter from the Member of Parliament.",
        "correct": false
      }
    ],
    "explanation": "The donee must provide the LPA and documentary evidence of the beneficiary's medical condition (e.g., medical report dated within the last year).",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Tan",
      "age": 50,
      "bg": "LPA donee",
      "emoji": "📋",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "What is the CPF contribution rate for a new Singapore Permanent Resident (SPR) in their first year?",
    "choices": [
      {
        "text": "Full rates immediately.",
        "correct": false
      },
      {
        "text": "A graduated (lower) rate.",
        "correct": true
      },
      {
        "text": "Zero contributions for 12 months.",
        "correct": false
      },
      {
        "text": "A flat 20% for both employer and employee.",
        "correct": false
      }
    ],
    "explanation": "New SPRs and their employers contribute at graduated rates for the first two years to help with the transition.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Carlos",
      "age": 29,
      "bg": "New SPR",
      "emoji": "🇸🇬",
      "salutation": "Mr",
      "lastname": "Carlos"
    }
  },
  {
    "q": "When does an SPR start contributing at the full 'third-year and onwards' rate?",
    "choices": [
      {
        "text": "After exactly 12 months of PR status.",
        "correct": false
      },
      {
        "text": "From the month following the second anniversary of obtaining SPR status.",
        "correct": true
      },
      {
        "text": "Immediately after getting the NRIC.",
        "correct": false
      },
      {
        "text": "Only after they turn 35.",
        "correct": false
      }
    ],
    "explanation": "The third-year rate applies from the month following your second anniversary as an SPR.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Mei",
      "age": 32,
      "bg": "SPR of two years",
      "emoji": "📅",
      "salutation": "Ms",
      "lastname": "Mei"
    }
  },
  {
    "q": "How can you make a voluntary top-up to your 3 CPF accounts or MediSave?",
    "choices": [
      {
        "text": "By mailing a personal cheque.",
        "correct": false
      },
      {
        "text": "Using PayNow QR via the CPF website or app.",
        "correct": true
      },
      {
        "text": "By handing cash to a CPF counter officer.",
        "correct": false
      },
      {
        "text": "Only via monthly salary deduction.",
        "correct": false
      }
    ],
    "explanation": "Members can make top-ups easily using the PayNow QR code generated during the application process.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Wei Ling",
      "age": 27,
      "bg": "tech-savvy worker",
      "emoji": "📱",
      "salutation": "Ms",
      "lastname": "Wei Ling"
    }
  },
  {
    "q": "Do you get tax relief for voluntary MediSave top-ups made to your children?",
    "choices": [
      {
        "text": "Yes, up to $8,000.",
        "correct": false
      },
      {
        "text": "No, there is no tax relief for top-ups to children.",
        "correct": true
      },
      {
        "text": "Yes, but only if the child is a student.",
        "correct": false
      },
      {
        "text": "Yes, but only for the first child.",
        "correct": false
      }
    ],
    "explanation": "There is no tax relief for MediSave top-ups made to children.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "David",
      "age": 40,
      "bg": "father of two",
      "emoji": "👨‍👧‍👦",
      "salutation": "Mr",
      "lastname": "David"
    }
  },
  {
    "q": "What is the deadline for CPF top-ups to be counted towards the current year's annual limit?",
    "choices": [
      {
        "text": "31 January of the next year.",
        "correct": false
      },
      {
        "text": "The last day of the calendar year (31 December).",
        "correct": true
      },
      {
        "text": "Tax filing deadline in April.",
        "correct": false
      },
      {
        "text": "Your birthday.",
        "correct": false
      }
    ],
    "explanation": "All applications and payments must reach the CPF Board by 31 December to be counted for that calendar year.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Grace",
      "age": 35,
      "bg": "tax-conscious saver",
      "emoji": "📉",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "What is the fixed Basic Healthcare Sum (BHS) for a member who turns 65 in 2026?",
    "choices": [
      {
        "text": "$71,500",
        "correct": false
      },
      {
        "text": "$75,500",
        "correct": false
      },
      {
        "text": "$79,000",
        "correct": true
      },
      {
        "text": "$82,000",
        "correct": false
      }
    ],
    "explanation": "For members turning 65 in 2026, the cohort BHS is fixed at $79,000 for life.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Lim",
      "age": 64,
      "bg": "turning 65 next year",
      "emoji": "🎂",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "For members below age 65, how often is the Basic Healthcare Sum (BHS) adjusted?",
    "choices": [
      {
        "text": "Every 5 years.",
        "correct": false
      },
      {
        "text": "Annually.",
        "correct": true
      },
      {
        "text": "It is never adjusted.",
        "correct": false
      },
      {
        "text": "Only when the GST changes.",
        "correct": false
      }
    ],
    "explanation": "For members below 65, the BHS is adjusted annually to keep pace with healthcare consumption.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Sarah",
      "age": 42,
      "bg": "HR manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Which group of government pensioners does the Basic Healthcare Sum (BHS) NOT apply to?",
    "choices": [
      {
        "text": "Co-payment on Ward Charges Scheme (CPW).",
        "correct": false
      },
      {
        "text": "Comprehensive Co-Payment Scheme (CCS).",
        "correct": false
      },
      {
        "text": "Fixed Amount on Ward Charges Scheme (FAW).",
        "correct": true
      },
      {
        "text": "MediSave-cum-Subsidised Outpatient (MSO) Scheme.",
        "correct": false
      }
    ],
    "explanation": "The BHS does not apply to pensioners under the FAW scheme; all their MediSave allocations are transferred to other accounts.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Pereira",
      "age": 72,
      "bg": "retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Pereira"
    }
  },
  {
    "q": "If a pensioner is under the Co-payment on Ward Charges Scheme (CPW), is their BHS higher or lower than the standard cohort?",
    "choices": [
      {
        "text": "Higher.",
        "correct": false
      },
      {
        "text": "Lower.",
        "correct": true
      },
      {
        "text": "Exactly the same.",
        "correct": false
      },
      {
        "text": "They do not have a BHS.",
        "correct": false
      }
    ],
    "explanation": "Pensioners under the CPW scheme have a lower BHS compared to other CPF members in their cohort.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Raj",
      "age": 70,
      "bg": "pensioner",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "Can you use your MediSave to top up your own account if you have outstanding MediSave payables as a self-employed person?",
    "choices": [
      {
        "text": "Yes, any time.",
        "correct": false
      },
      {
        "text": "No, you must first settle or be on an instalment plan for your payables.",
        "correct": true
      },
      {
        "text": "Only if you are over 55.",
        "correct": false
      },
      {
        "text": "Yes, but you only get 50% tax relief.",
        "correct": false
      }
    ],
    "explanation": "To make voluntary MediSave top-ups, self-employed persons must have settled their MediSave payables or be on an active instalment plan.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Hassan",
      "age": 38,
      "bg": "freelance designer",
      "emoji": "🎨",
      "salutation": "Mr",
      "lastname": "Hassan"
    }
  },
  {
    "q": "What happens if you accidentally scan and pay a PayNow QR code for a top-up twice?",
    "choices": [
      {
        "text": "The second payment is credited to your OA.",
        "correct": false
      },
      {
        "text": "The second payment is automatically refunded.",
        "correct": true
      },
      {
        "text": "Both payments are forfeited.",
        "correct": false
      },
      {
        "text": "The money is held for next year's top-up.",
        "correct": false
      }
    ],
    "explanation": "Subsequent or duplicate payments made using the same PayNow QR code will be refunded.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Auntie Mary",
      "age": 60,
      "bg": "confused by tech",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Mary"
    }
  },
  {
    "q": "If you turn 65 in the year 2024, what is your fixed BHS?",
    "choices": [
      {
        "text": "$68,500",
        "correct": false
      },
      {
        "text": "$71,500",
        "correct": true
      },
      {
        "text": "$75,500",
        "correct": false
      },
      {
        "text": "$79,000",
        "correct": false
      }
    ],
    "explanation": "The BHS for the 2024 cohort (aged 67 in 2026) is fixed at $71,500.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Teo",
      "age": 67,
      "bg": "retiree",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Teo"
    }
  },
  {
    "q": "For members aged 75 and above in 2026, what is their fixed BHS amount?",
    "choices": [
      {
        "text": "$49,800",
        "correct": true
      },
      {
        "text": "$52,000",
        "correct": false
      },
      {
        "text": "$60,000",
        "correct": false
      },
      {
        "text": "$79,000",
        "correct": false
      }
    ],
    "explanation": "Members who turned 65 in 2016 or earlier (aged 75+ in 2026) have a fixed BHS of $49,800.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Tan",
      "age": 80,
      "bg": "elderly senior",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "Where can you find a guide in Chinese, Malay, or Tamil for making MediSave top-ups?",
    "choices": [
      {
        "text": "Only at the CPF Service Centres.",
        "correct": false
      },
      {
        "text": "By calling the CPF hotline.",
        "correct": false
      },
      {
        "text": "Available as a PDF download on the CPF website.",
        "correct": true
      },
      {
        "text": "In the local newspaper.",
        "correct": false
      }
    ],
    "explanation": "CPF provides multilingual guides (PDF) for top-up processes on their website.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Uncle Muthu",
      "age": 65,
      "bg": "prefers Tamil",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Muthu"
    }
  },
  {
    "q": "What is the purpose of the Basic Healthcare Sum (BHS)?",
    "choices": [
      {
        "text": "To pay for your children's university fees.",
        "correct": false
      },
      {
        "text": "To cover basic subsidised healthcare expenses and insurance premiums in old age.",
        "correct": true
      },
      {
        "text": "To determine how much you can withdraw at age 55.",
        "correct": false
      },
      {
        "text": "To pay for private hospital room upgrades.",
        "correct": false
      }
    ],
    "explanation": "The BHS is the estimated amount needed for basic healthcare and insurance (like MediShield Life) during retirement.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Linda",
      "age": 45,
      "bg": "planning for healthcare",
      "emoji": "🏥",
      "salutation": "Ms",
      "lastname": "Linda"
    }
  },
  {
    "q": "If you are a self-employed person, how is tax relief for self-top-ups calculated?",
    "choices": [
      {
        "text": "Based on your total bank savings.",
        "correct": false
      },
      {
        "text": "Based on your assessable net trade income for the year.",
        "correct": true
      },
      {
        "text": "It is a flat $5,000 for everyone.",
        "correct": false
      },
      {
        "text": "You do not get tax relief as a self-employed person.",
        "correct": false
      }
    ],
    "explanation": "Tax relief for SEP self-top-ups is applicable if they have assessable net trade income for that year of assessment.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ken",
      "age": 33,
      "bg": "Grab driver",
      "emoji": "🚗",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "Can you use the same PayNow QR code for a second top-up for a different person?",
    "choices": [
      {
        "text": "Yes, it is reusable.",
        "correct": false
      },
      {
        "text": "No, you must submit a new application for each person or top-up.",
        "correct": true
      },
      {
        "text": "Yes, but only within the same hour.",
        "correct": false
      },
      {
        "text": "Only if they are your spouse.",
        "correct": false
      }
    ],
    "explanation": "A new application must be submitted for each top-up; duplicate use of a QR code will result in a refund.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Paul",
      "age": 30,
      "bg": "tech-savvy son",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "Which service should you use to update your residential address if you move house?",
    "choices": [
      {
        "text": "CPF Mobile App",
        "correct": false
      },
      {
        "text": "ICA e-Services",
        "correct": true
      },
      {
        "text": "SingPost",
        "correct": false
      },
      {
        "text": "HDB Feedback form",
        "correct": false
      }
    ],
    "explanation": "Updates to residential addresses are done via ICA e-Services; other agencies like CPF are then notified automatically.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Chloe",
      "age": 28,
      "bg": "just moved to a new flat",
      "emoji": "📦",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "What is the 'One-Stop Change of Address Reporting Service' (OSCARS)?",
    "choices": [
      {
        "text": "A service to redirect your mail.",
        "correct": false
      },
      {
        "text": "A system that informs government agencies of your new address within one day.",
        "correct": true
      },
      {
        "text": "A moving company service.",
        "correct": false
      },
      {
        "text": "A way to change your name on your NRIC.",
        "correct": false
      }
    ],
    "explanation": "OSCARS is the system used by ICA to update multiple government agencies (including CPF) when you report a change of address.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Lee",
      "age": 55,
      "bg": "homeowner",
      "emoji": "🏡",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "If you update your name with ICA, how long does it take for CPF Board to be notified?",
    "choices": [
      {
        "text": "1 month.",
        "correct": false
      },
      {
        "text": "Immediately/Automatically via system updates.",
        "correct": true
      },
      {
        "text": "You must notify them yourself; they are not notified.",
        "correct": false
      },
      {
        "text": "7 working days.",
        "correct": false
      }
    ],
    "explanation": "CPF particulars for SC/PRs are updated automatically when changes are made with ICA.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Lily",
      "age": 25,
      "bg": "changed surname",
      "emoji": "✍️",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "What happens if you have reached your BHS and you make a voluntary top-up to your MediSave?",
    "choices": [
      {
        "text": "The top-up is rejected.",
        "correct": false
      },
      {
        "text": "The amount is transferred to your other CPF accounts (e.g., SA or RA).",
        "correct": true
      },
      {
        "text": "The money is kept in a separate 'Excess MediSave' account.",
        "correct": false
      },
      {
        "text": "The amount is sent back to your bank account with a fee.",
        "correct": false
      }
    ],
    "explanation": "MediSave savings above the BHS are channelled to other accounts like the Special Account or Retirement Account.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Hock Bee",
      "age": 52,
      "bg": "maximum saver",
      "emoji": "💰",
      "salutation": "Mr",
      "lastname": "Hock Bee"
    }
  },
  {
    "q": "How can you ensure you are downloading the official CPF Mobile app?",
    "choices": [
      {
        "text": "Search for 'CPF' and pick the one with most downloads.",
        "correct": false
      },
      {
        "text": "Ensure the developer is 'Central Provident Fund Board'.",
        "correct": true
      },
      {
        "text": "Download it from a link in an SMS.",
        "correct": false
      },
      {
        "text": "Check if it has a red and white logo.",
        "correct": false
      }
    ],
    "explanation": "To avoid scams, always verify the developer is 'Central Provident Fund Board' in the App Store or Google Play.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Sarah",
      "age": 35,
      "bg": "security conscious",
      "emoji": "🛡️",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Which feature of CPF Mobile provides easy access to your personal CPF info on the go?",
    "choices": [
      {
        "text": "CPF WhatsApp Bot.",
        "correct": false
      },
      {
        "text": "CPF Mobile services.",
        "correct": true
      },
      {
        "text": "CPF TikTok account.",
        "correct": false
      },
      {
        "text": "A text-only version of the website.",
        "correct": false
      }
    ],
    "explanation": "CPF Mobile is the official app for accessing statements and services on mobile devices.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Ben",
      "age": 22,
      "bg": "student",
      "emoji": "📱",
      "salutation": "Mr",
      "lastname": "Ben"
    }
  },
  {
    "q": "Why might a login to 'my cpf' digital services fail if your device's date/time is wrong?",
    "choices": [
      {
        "text": "The app is programmed to work only during office hours.",
        "correct": false
      },
      {
        "text": "Security protocols (SSL/TLS) require synchronized time for secure connections.",
        "correct": true
      },
      {
        "text": "The server thinks you are trying to hack the system.",
        "correct": false
      },
      {
        "text": "Interest calculation requires the correct time.",
        "correct": false
      }
    ],
    "explanation": "Accurate time settings on your device are essential for establishing secure connections with government websites.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Wei Kiat",
      "age": 30,
      "bg": "IT support",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "How can you troubleshooting a recurring login issue on the CPF website?",
    "choices": [
      {
        "text": "Restart your router.",
        "correct": false
      },
      {
        "text": "Clear your browser cache.",
        "correct": true
      },
      {
        "text": "Reinstall Windows or macOS.",
        "correct": false
      },
      {
        "text": "Call your mobile provider.",
        "correct": false
      }
    ],
    "explanation": "Clearing the browser cache is a key troubleshooting step for login or display issues on digital services.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lily",
      "age": 31,
      "bg": "office worker",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "What is the official URL for the CPF website?",
    "choices": [
      {
        "text": "www.cpf.com.sg",
        "correct": false
      },
      {
        "text": "www.cpf.gov.sg",
        "correct": true
      },
      {
        "text": "www.mycpf.sg",
        "correct": false
      },
      {
        "text": "www.providentfund.org.sg",
        "correct": false
      }
    ],
    "explanation": "The official government website for CPF is www.cpf.gov.sg.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "John",
      "age": 24,
      "bg": "new employee",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "Can you still access CPF digital services if you are using an extremely old version of Internet Explorer?",
    "choices": [
      {
        "text": "Yes, but it is slow.",
        "correct": false
      },
      {
        "text": "No, it is compatible with the two most recent versions of modern browsers.",
        "correct": true
      },
      {
        "text": "Only if you have a special plugin.",
        "correct": false
      },
      {
        "text": "Yes, but you cannot see your balance.",
        "correct": false
      }
    ],
    "explanation": "For security, digital services support only the most recent browser versions like Chrome or Safari.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Ahmad",
      "age": 60,
      "bg": "using an old laptop",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "If you turn 65 in 2026, when is your BHS fixed?",
    "choices": [
      {
        "text": "On 1 January 2026.",
        "correct": true
      },
      {
        "text": "On your 65th birthday.",
        "correct": false
      },
      {
        "text": "At the end of the year 2026.",
        "correct": false
      },
      {
        "text": "It is never fixed.",
        "correct": false
      }
    ],
    "explanation": "The BHS is fixed for each cohort in the year they turn 65 and remains unchanged thereafter.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Siti",
      "age": 64,
      "bg": "approaching 65",
      "emoji": "🎂",
      "salutation": "Mdm",
      "lastname": "Siti"
    }
  },
  {
    "q": "What happens to your CPF accounts if you renounced Singapore Citizenship in May 2024?",
    "choices": [
      {
        "text": "They are closed immediately on the day of renunciation.",
        "correct": false
      },
      {
        "text": "They are automatically closed in June 2024.",
        "correct": true
      },
      {
        "text": "They remain open until you turn 55.",
        "correct": false
      },
      {
        "text": "They are transferred to a bank in your new country.",
        "correct": false
      }
    ],
    "explanation": "Non-SC/PR accounts are automatically closed in the month following renunciation if not closed manually.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Mark",
      "age": 40,
      "bg": "former citizen",
      "emoji": "🌍",
      "salutation": "Mr",
      "lastname": "Mark"
    }
  },
  {
    "q": "Is interest paid on CPF accounts that have been automatically closed for non-citizens?",
    "choices": [
      {
        "text": "No interest is paid at all.",
        "correct": false
      },
      {
        "text": "Yes, a concessionary rate (0.05%) until 31 March 2027.",
        "correct": true
      },
      {
        "text": "Yes, the full OA/SA interest rate forever.",
        "correct": false
      },
      {
        "text": "Only if the balance is above $100,000.",
        "correct": false
      }
    ],
    "explanation": "As a concession, closed accounts earn interest similar to commercial rates (0.05%) until 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Elena",
      "age": 45,
      "bg": "ex-PR",
      "emoji": "🚢",
      "salutation": "Ms",
      "lastname": "Elena"
    }
  },
  {
    "q": "Until what date will the 'commercial bank interest rate' concession be paid on closed non-citizen accounts?",
    "choices": [
      {
        "text": "31 December 2024",
        "correct": false
      },
      {
        "text": "31 March 2026",
        "correct": false
      },
      {
        "text": "31 March 2027",
        "correct": true
      },
      {
        "text": "1 April 2028",
        "correct": false
      }
    ],
    "explanation": "The interest concession for closed non-citizen accounts lasts until 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "David",
      "age": 55,
      "bg": "leaving Singapore",
      "emoji": "🛫",
      "salutation": "Mr",
      "lastname": "David"
    }
  },
  {
    "q": "What should non-citizens do with their remaining CPF savings after their account is closed?",
    "choices": [
      {
        "text": "Leave it there as a savings account.",
        "correct": false
      },
      {
        "text": "Transfer it to their bank account as soon as possible.",
        "correct": true
      },
      {
        "text": "Donate it to a charity.",
        "correct": false
      },
      {
        "text": "Wait for a physical cheque to be mailed.",
        "correct": false
      }
    ],
    "explanation": "Since interest stops after the concession period, members are encouraged to transfer funds to their bank accounts.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "George",
      "age": 44,
      "bg": "non-citizen",
      "emoji": "🏦",
      "salutation": "Mr",
      "lastname": "George"
    }
  },
  {
    "q": "If you renounced PR in April 2024, when will your account be automatically closed?",
    "choices": [
      {
        "text": "April 2024",
        "correct": false
      },
      {
        "text": "May 2024",
        "correct": true
      },
      {
        "text": "December 2024",
        "correct": false
      },
      {
        "text": "April 2025",
        "correct": false
      }
    ],
    "explanation": "The account closes in the month following renunciation (e.g., May 2024 for an April 2024 renunciation).",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Paul",
      "age": 36,
      "bg": "renounced PR",
      "emoji": "🗺️",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "Can you still request a CPF transaction statement after renouncing your citizenship?",
    "choices": [
      {
        "text": "No, access is denied.",
        "correct": false
      },
      {
        "text": "Yes, you should download it while you still have Singpass access.",
        "correct": true
      },
      {
        "text": "Only by calling the Singapore Embassy.",
        "correct": false
      },
      {
        "text": "Yes, but you must pay a $100 fee.",
        "correct": false
      }
    ],
    "explanation": "Members should download all needed info before losing Singpass access after renunciation.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "John",
      "age": 42,
      "bg": "former citizen",
      "emoji": "📄",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "What happens if a Singapore Citizen changes their name at ICA but does not tell CPF Board?",
    "choices": [
      {
        "text": "CPF will continue to use the old name.",
        "correct": false
      },
      {
        "text": "CPF records are automatically updated.",
        "correct": true
      },
      {
        "text": "The CPF account is frozen.",
        "correct": false
      },
      {
        "text": "The member must pay a fine.",
        "correct": false
      }
    ],
    "explanation": "Particulars for SC/PRs are updated automatically in CPF records via ICA updates.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Jasmine",
      "age": 29,
      "bg": "married recently",
      "emoji": "👰",
      "salutation": "Ms",
      "lastname": "Jasmine"
    }
  },
  {
    "q": "Does the CPF Board use your NRIC alias to transact with you by default?",
    "choices": [
      {
        "text": "Yes, always.",
        "correct": false
      },
      {
        "text": "No, it uses the principal name on your NRIC.",
        "correct": true
      },
      {
        "text": "Only if you ask them to.",
        "correct": false
      },
      {
        "text": "Yes, but only for emails.",
        "correct": false
      }
    ],
    "explanation": "CPF transacts using the principal name on the NRIC, which usually excludes aliases.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Tan",
      "age": 32,
      "bg": "has an alias",
      "emoji": "📝",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "How many months of a child's CPF transaction history can a parent view on the Child Dashboard?",
    "choices": [
      {
        "text": "6 months.",
        "correct": false
      },
      {
        "text": "12 months.",
        "correct": false
      },
      {
        "text": "15 months.",
        "correct": true
      },
      {
        "text": "24 months.",
        "correct": false
      }
    ],
    "explanation": "Parents can view 15 months of transaction and healthcare claim history for their children.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mei Ling",
      "age": 34,
      "bg": "mother",
      "emoji": "👩‍👧",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    }
  },
  {
    "q": "What is required for a parent to view a child's CPF statement if they aren't linked automatically?",
    "choices": [
      {
        "text": "A letter from the school.",
        "correct": false
      },
      {
        "text": "The child's birth certificate.",
        "correct": true
      },
      {
        "text": "The child's bank statement.",
        "correct": false
      },
      {
        "text": "A sworn affidavit.",
        "correct": false
      }
    ],
    "explanation": "If a child isn't listed, parents can provide the birth certificate to establish the link with the CPF Board.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Kiat",
      "age": 38,
      "bg": "father",
      "emoji": "👨‍👦",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "Can a parent with sole custody remove an ex-spouse's access to their child's CPF statement?",
    "choices": [
      {
        "text": "No, it is impossible.",
        "correct": false
      },
      {
        "text": "Yes, by providing the Court Order showing sole custody.",
        "correct": true
      },
      {
        "text": "Yes, by calling the hotline.",
        "correct": false
      },
      {
        "text": "Only if the ex-spouse agrees.",
        "correct": false
      }
    ],
    "explanation": "With a relevant Court Order, a parent with sole custody can request removal of the ex-spouse's access.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Sharon",
      "age": 40,
      "bg": "divorced parent",
      "emoji": "👩‍👦",
      "salutation": "Ms",
      "lastname": "Sharon"
    }
  },
  {
    "q": "What is the CPF account number for a Singapore Citizen?",
    "choices": [
      {
        "text": "A unique 8-digit number.",
        "correct": false
      },
      {
        "text": "The UIN (NRIC number).",
        "correct": true
      },
      {
        "text": "Their phone number.",
        "correct": false
      },
      {
        "text": "Their date of birth.",
        "correct": false
      }
    ],
    "explanation": "For SC/PRs, the CPF account number is their NRIC (UIN).",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Adam",
      "age": 21,
      "bg": "new worker",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Adam"
    }
  },
  {
    "q": "When is a CPF account officially created for a person?",
    "choices": [
      {
        "text": "At birth.",
        "correct": false
      },
      {
        "text": "When the first top-up or contribution is received.",
        "correct": true
      },
      {
        "text": "When they get their first job.",
        "correct": false
      },
      {
        "text": "When they turn 18.",
        "correct": false
      }
    ],
    "explanation": "CPF accounts are created automatically upon the first receipt of a contribution or top-up.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Chloe",
      "age": 19,
      "bg": "intern",
      "emoji": "👩‍🎓",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "How far back can you retrieve your CPF Yearly Statement of Account online?",
    "choices": [
      {
        "text": "5 years.",
        "correct": false
      },
      {
        "text": "10 years.",
        "correct": true
      },
      {
        "text": "All years since birth.",
        "correct": false
      },
      {
        "text": "Last 2 years.",
        "correct": false
      }
    ],
    "explanation": "Online retrieval of Yearly Statements is limited to the past 10 years.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Robert",
      "age": 55,
      "bg": "planning retirement",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Robert"
    }
  },
  {
    "q": "What should you do if you need a CPF statement older than 10 years?",
    "choices": [
      {
        "text": "Request it from the CPF Board for a fee.",
        "correct": false
      },
      {
        "text": "Nothing; CPF doesn't provide statements beyond 10 years.",
        "correct": true
      },
      {
        "text": "Check your bank statements.",
        "correct": false
      },
      {
        "text": "Ask your previous employer.",
        "correct": false
      }
    ],
    "explanation": "CPF Board does not provide retrieval beyond 10 years; members are advised to save their statements annually.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Grace",
      "age": 45,
      "bg": "meticulous record-keeper",
      "emoji": "📋",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "Can you use MediSave for your spouse's hospital bill if they are a foreigner?",
    "choices": [
      {
        "text": "No, only for SC/PRs.",
        "correct": false
      },
      {
        "text": "Yes, MediSave can be used for your spouse regardless of citizenship.",
        "correct": true
      },
      {
        "text": "Only if they have lived in Singapore for 5 years.",
        "correct": false
      },
      {
        "text": "Only for heart surgeries.",
        "correct": false
      }
    ],
    "explanation": "MediSave can be used for immediate family members regardless of their citizenship.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Meera",
      "age": 36,
      "bg": "foreigner married to SC",
      "emoji": "👩‍❤️‍👨",
      "salutation": "Mrs",
      "lastname": "Meera"
    }
  },
  {
    "q": "Is it possible to save more than your applicable BHS in your MediSave Account?",
    "choices": [
      {
        "text": "Yes, if you want to save more for medical.",
        "correct": false
      },
      {
        "text": "No, the BHS is the maximum limit.",
        "correct": true
      },
      {
        "text": "Only if you are a doctor.",
        "correct": false
      },
      {
        "text": "Yes, for the first year of retirement.",
        "correct": false
      }
    ],
    "explanation": "The BHS is the hard limit for the MediSave account to prevent excessive accumulation of funds.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Auntie Tan",
      "age": 66,
      "bg": "careful saver",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "How can a non-account holder prove they do NOT have a CPF account?",
    "choices": [
      {
        "text": "By calling the CPF hotline.",
        "correct": false
      },
      {
        "text": "By logging in to 'my cpf'; a 'No information' message will appear.",
        "correct": true
      },
      {
        "text": "At a police station.",
        "correct": false
      },
      {
        "text": "From the MOM website.",
        "correct": false
      }
    ],
    "explanation": "Non-account holders will see a specific message upon login that they can print as proof.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Rahul",
      "age": 28,
      "bg": "foreign worker",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Rahul"
    }
  },
  {
    "q": "What happens to remaining Silver Support funds in GovCash if the beneficiary passes away?",
    "choices": [
      {
        "text": "They are forfeited.",
        "correct": false
      },
      {
        "text": "They are credited to the beneficiary's CPF Ordinary Account.",
        "correct": true
      },
      {
        "text": "They are paid to the next of kin in cash.",
        "correct": false
      },
      {
        "text": "They are used for funeral expenses automatically.",
        "correct": false
      }
    ],
    "explanation": "GovCash balances of deceased members are credited to their CPF OA and distributed according to their nomination.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Siti",
      "age": 40,
      "bg": "daughter of a beneficiary",
      "emoji": "👩",
      "salutation": "Ms",
      "lastname": "Siti"
    }
  },
  {
    "q": "If you are a ComCare Long Term Assistance recipient, how much Silver Support do you receive per quarter?",
    "choices": [
      {
        "text": "$360",
        "correct": false
      },
      {
        "text": "$430",
        "correct": true
      },
      {
        "text": "$540",
        "correct": false
      },
      {
        "text": "$1,080",
        "correct": false
      }
    ],
    "explanation": "ComCare LTA recipients aged 65+ automatically qualify for a flat $430 per quarter in Silver Support.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mdm Aminah",
      "age": 70,
      "bg": "ComCare recipient",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Aminah"
    }
  },
  {
    "q": "What are the three criteria used to identify eligible seniors for the Silver Support Scheme?",
    "choices": [
      {
        "text": "Age, Gender, and Marital Status.",
        "correct": false
      },
      {
        "text": "Lifetime wages, housing type, and household support.",
        "correct": true
      },
      {
        "text": "Number of children, savings account balance, and employment status.",
        "correct": false
      },
      {
        "text": "Investment portfolio, current salary, and health status.",
        "correct": false
      }
    ],
    "explanation": "To target seniors who need it most, Silver Support uses lifetime wages, housing type, and household support as criteria.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Lim",
      "age": 66,
      "bg": "retired blue-collar worker",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "Do you need to apply for the Silver Support Scheme if you meet the criteria?",
    "choices": [
      {
        "text": "Yes, via a paper form.",
        "correct": false
      },
      {
        "text": "No, eligibility is automatically reviewed every year.",
        "correct": true
      },
      {
        "text": "Yes, but only if you are over 70.",
        "correct": false
      },
      {
        "text": "Only if you have no CPF savings.",
        "correct": false
      }
    ],
    "explanation": "CPF Board automatically reviews eligibility every year; no application is required.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Auntie Fatimah",
      "age": 68,
      "bg": "homemaker",
      "emoji": "🧕",
      "salutation": "Mdm",
      "lastname": "Fatimah"
    }
  },
  {
    "q": "How often is the Silver Support cash supplement paid to eligible seniors?",
    "choices": [
      {
        "text": "Monthly.",
        "correct": false
      },
      {
        "text": "Every quarter (four times a year).",
        "correct": true
      },
      {
        "text": "Once a year in December.",
        "correct": false
      },
      {
        "text": "Twice a year during festive seasons.",
        "correct": false
      }
    ],
    "explanation": "Silver Support is a quarterly cash supplement paid in March, June, September, and December.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Uncle Seng",
      "age": 72,
      "bg": "retiree",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Seng"
    }
  },
  {
    "q": "What is the maximum quarterly Silver Support payment for a senior living in a 1- or 2-room HDB flat?",
    "choices": [
      {
        "text": "$430",
        "correct": false
      },
      {
        "text": "$1,080",
        "correct": true
      },
      {
        "text": "$720",
        "correct": false
      },
      {
        "text": "$900",
        "correct": false
      }
    ],
    "explanation": "Seniors in 1-room and 2-room HDB flats receive the highest tier of $1,080 per quarter (based on updated 2025 rates).",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Tan",
      "age": 75,
      "bg": "living alone in a 2-room flat",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "If you live in a 5-room HDB flat, are you eligible for the maximum Silver Support payment?",
    "choices": [
      {
        "text": "Yes, if your income is low.",
        "correct": false
      },
      {
        "text": "No, payments are tiered by flat type; 5-room flats receive a lower amount.",
        "correct": true
      },
      {
        "text": "Yes, everyone gets the same amount.",
        "correct": false
      },
      {
        "text": "No, people in 5-room flats are excluded completely.",
        "correct": false
      }
    ],
    "explanation": "Silver Support payments are tiered; those in 5-room flats receive $430 per quarter (if they meet other criteria), while those in smaller flats receive more.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Raj",
      "age": 67,
      "bg": "living in a 5-room flat",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "What happens if a Silver Support beneficiary dies before using their GovCash balance?",
    "choices": [
      {
        "text": "The money is returned to the Government.",
        "correct": false
      },
      {
        "text": "The balance is credited to their CPF Ordinary Account and distributed via nomination.",
        "correct": true
      },
      {
        "text": "The money is given to the nearest neighbor.",
        "correct": false
      },
      {
        "text": "The account is frozen forever.",
        "correct": false
      }
    ],
    "explanation": "Remaining GovCash balances of deceased members are credited to their CPF OA and distributed according to their CPF nomination.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Grace",
      "age": 42,
      "bg": "handling late father's estate",
      "emoji": "🕯️",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "Can you receive Silver Support payments if you own more than one property?",
    "choices": [
      {
        "text": "Yes, if the second property is overseas.",
        "correct": false
      },
      {
        "text": "No, you (or your spouse) must not own more than one property to be eligible.",
        "correct": true
      },
      {
        "text": "Yes, if you are over 80.",
        "correct": false
      },
      {
        "text": "Yes, property ownership is not a criteria.",
        "correct": false
      }
    ],
    "explanation": "To qualify for Silver Support, the senior (or their spouse) must not own more than one property.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Koh",
      "age": 65,
      "bg": "owns a second small shop",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "What is the household monthly income per person threshold for Silver Support eligibility?",
    "choices": [
      {
        "text": "$1,500 or less.",
        "correct": false
      },
      {
        "text": "$2,300 or less.",
        "correct": true
      },
      {
        "text": "$3,000 or less.",
        "correct": false
      },
      {
        "text": "$500 or less.",
        "correct": false
      }
    ],
    "explanation": "From 2025, the household monthly income per person must be $2,300 or less to qualify for Silver Support.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Siti",
      "age": 35,
      "bg": "checking for her parents",
      "emoji": "👩‍👧‍👦",
      "salutation": "Ms",
      "lastname": "Siti"
    }
  },
  {
    "q": "If you are a self-employed person, how is your 'lifetime wages' checked for Silver Support?",
    "choices": [
      {
        "text": "By your bank balance.",
        "correct": false
      },
      {
        "text": "Based on your total MediSave contributions made during your working years.",
        "correct": true
      },
      {
        "text": "By your annual tax filings from the last 2 years only.",
        "correct": false
      },
      {
        "text": "Self-employed persons are not eligible.",
        "correct": false
      }
    ],
    "explanation": "For self-employed persons, the Board checks if their average annual net trade income was low during their working years.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Bob",
      "age": 69,
      "bg": "former taxi driver",
      "emoji": "🚖",
      "salutation": "Mr",
      "lastname": "Bob"
    }
  },
  {
    "q": "How can you check your Silver Support eligibility status online?",
    "choices": [
      {
        "text": "By checking your local newspaper.",
        "correct": false
      },
      {
        "text": "By logging in to the 'my cpf' digital services.",
        "correct": true
      },
      {
        "text": "By visiting a community center.",
        "correct": false
      },
      {
        "text": "You cannot check it online.",
        "correct": false
      }
    ],
    "explanation": "Members can check their eligibility status by logging in to CPF e-services with their Singpass.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Wei Kiat",
      "age": 29,
      "bg": "helping his grandfather",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "When are notifications sent to seniors who qualify for the next year's Silver Support?",
    "choices": [
      {
        "text": "In January of the payout year.",
        "correct": false
      },
      {
        "text": "In December of the preceding year.",
        "correct": true
      },
      {
        "text": "On their birthday.",
        "correct": false
      },
      {
        "text": "Every quarter before the payment.",
        "correct": false
      }
    ],
    "explanation": "Eligible seniors receive a notification from the CPF Board in December of the year before the payouts begin.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Linda",
      "age": 64,
      "bg": "awaiting notification",
      "emoji": "📬",
      "salutation": "Ms",
      "lastname": "Linda"
    }
  },
  {
    "q": "If a beneficiary has a court-appointed Deputy, how should they inform CPF Board to receive Silver Support?",
    "choices": [
      {
        "text": "Just call the hotline.",
        "correct": false
      },
      {
        "text": "Submit a scanned copy of the Court Order authorising financial transactions.",
        "correct": true
      },
      {
        "text": "Show the Deputy's NRIC at any bank.",
        "correct": false
      },
      {
        "text": "The Deputy doesn't need to do anything.",
        "correct": false
      }
    ],
    "explanation": "Deputies must provide a court order specifically authorising them to perform financial transactions for the beneficiary.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Tan",
      "age": 55,
      "bg": "appointed deputy for his brother",
      "emoji": "⚖️",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "What happens if you renounce your Singapore Citizenship in April 2024?",
    "choices": [
      {
        "text": "Your account stays open forever.",
        "correct": false
      },
      {
        "text": "Your account is automatically closed in May 2024.",
        "correct": true
      },
      {
        "text": "Your account is closed immediately on the same day.",
        "correct": false
      },
      {
        "text": "You lose all your savings.",
        "correct": false
      }
    ],
    "explanation": "If you renounce from 1 April 2024, your account is automatically closed in the following month (May 2024).",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Mark",
      "age": 38,
      "bg": "moving to Australia",
      "emoji": "🛫",
      "salutation": "Mr",
      "lastname": "Mark"
    }
  },
  {
    "q": "What interest rate do closed CPF accounts earn as a transitory measure until March 2027?",
    "choices": [
      {
        "text": "4% (SA rate).",
        "correct": false
      },
      {
        "text": "2.5% (OA rate).",
        "correct": false
      },
      {
        "text": "0.05% (commercial bank average).",
        "correct": true
      },
      {
        "text": "Zero interest immediately.",
        "correct": false
      }
    ],
    "explanation": "As a concession, closed accounts earn a rate of 0.05% per annum until 31 March 2027.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "David",
      "age": 50,
      "bg": "ex-PR",
      "emoji": "🏦",
      "salutation": "Mr",
      "lastname": "David"
    }
  },
  {
    "q": "After 31 March 2027, what interest will be paid on savings remaining in closed CPF accounts?",
    "choices": [
      {
        "text": "0.01%.",
        "correct": false
      },
      {
        "text": "No interest will be paid.",
        "correct": true
      },
      {
        "text": "It will return to 2.5%.",
        "correct": false
      },
      {
        "text": "It will be 0.05% forever.",
        "correct": false
      }
    ],
    "explanation": "From 1 April 2027, any remaining savings in closed non-citizen accounts will no longer earn any interest.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Sarah",
      "age": 45,
      "bg": "overseas former citizen",
      "emoji": "🌍",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Can a former citizen still use their CPF savings for housing after their account is closed?",
    "choices": [
      {
        "text": "Yes, until the money runs out.",
        "correct": false
      },
      {
        "text": "No, all participation in CPF schemes ceases once the account is closed.",
        "correct": true
      },
      {
        "text": "Only if they have a family in Singapore.",
        "correct": false
      },
      {
        "text": "Yes, but they must pay a fee.",
        "correct": false
      }
    ],
    "explanation": "Upon account closure, all participation in CPF schemes (housing, investment, etc.) ceases.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "John",
      "age": 52,
      "bg": "former PR",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "If you decide to obtain Singapore Citizenship again after closing your account, do you need to refund your savings?",
    "choices": [
      {
        "text": "No, you start from zero.",
        "correct": false
      },
      {
        "text": "Yes, you must refund the savings transferred to your bank plus accrued interest.",
        "correct": true
      },
      {
        "text": "Only if you are under 55.",
        "correct": false
      },
      {
        "text": "Yes, but only the principal amount.",
        "correct": false
      }
    ],
    "explanation": "To reinstate citizenship, you must refund the transferred savings with accrued interest to your CPF account.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Elena",
      "age": 40,
      "bg": "returning to Singapore",
      "emoji": "🇸🇬",
      "salutation": "Ms",
      "lastname": "Elena"
    }
  },
  {
    "q": "What happens to your Home Protection Scheme (HPS) cover when your CPF account is closed?",
    "choices": [
      {
        "text": "It continues until your loan is paid.",
        "correct": false
      },
      {
        "text": "It is terminated upon account closure.",
        "correct": true
      },
      {
        "text": "It is transferred to a private insurer.",
        "correct": false
      },
      {
        "text": "It is frozen for 3 years.",
        "correct": false
      }
    ],
    "explanation": "Participation in all CPF schemes, including HPS, ceases when the CPF account is closed.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Paul",
      "age": 44,
      "bg": "ex-citizen with HDB",
      "emoji": "📄",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "How can a non-citizen transfer their remaining CPF savings to their bank account after closure?",
    "choices": [
      {
        "text": "By calling the CPF hotline.",
        "correct": false
      },
      {
        "text": "By submitting a request online via 'my cpf' (if they have Singpass) or via a manual form.",
        "correct": true
      },
      {
        "text": "By visiting any local bank.",
        "correct": false
      },
      {
        "text": "By writing a letter to the Prime Minister.",
        "correct": false
      }
    ],
    "explanation": "Members can request the transfer online while they still have Singpass, or use manual forms if they have left the country.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "George",
      "age": 46,
      "bg": "living abroad",
      "emoji": "🏦",
      "salutation": "Mr",
      "lastname": "George"
    }
  },
  {
    "q": "Why is the interest rate for closed accounts set at 0.05%?",
    "choices": [
      {
        "text": "It is the government's tax rate.",
        "correct": false
      },
      {
        "text": "It is based on the 3-month average of local banks' savings account interest rates.",
        "correct": true
      },
      {
        "text": "It is a penalty for leaving Singapore.",
        "correct": false
      },
      {
        "text": "It is the rate for fixed deposits.",
        "correct": false
      }
    ],
    "explanation": "The 0.05% rate reflects the commercial bank savings rates for accounts that can be withdrawn at any time.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Wei Kiat",
      "age": 31,
      "bg": "finance analyst",
      "emoji": "📊",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "Where are CPF letters sent by default?",
    "choices": [
      {
        "text": "To your office address.",
        "correct": false
      },
      {
        "text": "To the residential address on your Singapore Identity Card.",
        "correct": true
      },
      {
        "text": "To your email only.",
        "correct": false
      },
      {
        "text": "To your parents' house.",
        "correct": false
      }
    ],
    "explanation": "By default, CPF Board uses the residential address registered with ICA (on your NRIC).",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Chloe",
      "age": 28,
      "bg": "first-time homebuyer",
      "emoji": "📬",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "If you move house, do you need to inform CPF Board of your new address separately?",
    "choices": [
      {
        "text": "Yes, within 7 days.",
        "correct": false
      },
      {
        "text": "No, you only need to update it with ICA; CPF will be notified automatically.",
        "correct": true
      },
      {
        "text": "Yes, via the CPF Mobile app only.",
        "correct": false
      },
      {
        "text": "No, you must tell your employer instead.",
        "correct": false
      }
    ],
    "explanation": "Updating your address with ICA automatically informs other agencies like CPF through the OSCARS system.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Ben",
      "age": 30,
      "bg": "just moved house",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Ben"
    }
  },
  {
    "q": "What is the 'Child Dashboard' in 'my cpf' digital services used for?",
    "choices": [
      {
        "text": "To book pediatric appointments.",
        "correct": false
      },
      {
        "text": "To view your child's CPF transaction and healthcare claim history.",
        "correct": true
      },
      {
        "text": "To apply for school grants.",
        "correct": false
      },
      {
        "text": "To transfer money to your child's bank account.",
        "correct": false
      }
    ],
    "explanation": "The Child Dashboard allows parents to view their children's CPF statements and healthcare claims.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mei Ling",
      "age": 34,
      "bg": "mother of a toddler",
      "emoji": "👩‍👧",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    }
  },
  {
    "q": "Up to what age can parents view their child's CPF statements on the dashboard?",
    "choices": [
      {
        "text": "12 years old.",
        "correct": false
      },
      {
        "text": "16 years old.",
        "correct": false
      },
      {
        "text": "21 years old.",
        "correct": true
      },
      {
        "text": "Until the child starts working.",
        "correct": false
      }
    ],
    "explanation": "Parents can view statements for children who are below the age of 21.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Kiat",
      "age": 45,
      "bg": "father of a teenager",
      "emoji": "👨‍👦",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "What document is needed to link a child to the dashboard if they don't appear automatically?",
    "choices": [
      {
        "text": "The child's passport.",
        "correct": false
      },
      {
        "text": "The child's birth certificate.",
        "correct": true
      },
      {
        "text": "The parent's marriage certificate.",
        "correct": false
      },
      {
        "text": "A letter from the hospital.",
        "correct": false
      }
    ],
    "explanation": "A birth certificate is required to establish the relationship and link the child to the parent's dashboard.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Sarah",
      "age": 32,
      "bg": "new mother",
      "emoji": "👶",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "How can you update your contact details (mobile or email) with CPF Board?",
    "choices": [
      {
        "text": "Visit a CPF Service Centre in person.",
        "correct": false
      },
      {
        "text": "Update via the 'Account settings' page using Singpass.",
        "correct": true
      },
      {
        "text": "Send a postcard with your new number.",
        "correct": false
      },
      {
        "text": "You must call the hotline.",
        "correct": false
      }
    ],
    "explanation": "Contact details like email and mobile numbers can be updated easily via the Account settings online.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Lily",
      "age": 25,
      "bg": "changed mobile number",
      "emoji": "📱",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "Can two family members share the same contact email for CPF notifications?",
    "choices": [
      {
        "text": "No, every account must have a unique email.",
        "correct": false
      },
      {
        "text": "Yes, if they choose to share contact details for convenience.",
        "correct": true
      },
      {
        "text": "Only if they are married.",
        "correct": false
      },
      {
        "text": "Only if one is over 65.",
        "correct": false
      }
    ],
    "explanation": "CPF allows family members to share contact details if they wish, often to help seniors manage their accounts.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Hassan",
      "age": 40,
      "bg": "helping his elderly mother",
      "emoji": "👩‍👦",
      "salutation": "Mr",
      "lastname": "Hassan"
    }
  },
  {
    "q": "What should you do if your Singpass is locked or you forgot the password?",
    "choices": [
      {
        "text": "Contact CPF Board support.",
        "correct": false
      },
      {
        "text": "Contact the Singpass Helpdesk directly.",
        "correct": true
      },
      {
        "text": "Re-register for a new CPF account.",
        "correct": false
      },
      {
        "text": "Wait 24 hours for it to unlock automatically.",
        "correct": false
      }
    ],
    "explanation": "Singpass is managed by GovTech; any login or password issues must be handled by the Singpass Helpdesk.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Uncle Ahmad",
      "age": 62,
      "bg": "forgot password",
      "emoji": "🔑",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "What is the official developer name for the CPF Mobile app in the App Store?",
    "choices": [
      {
        "text": "Singapore Government.",
        "correct": false
      },
      {
        "text": "Central Provident Fund Board.",
        "correct": true
      },
      {
        "text": "CPF SG Services.",
        "correct": false
      },
      {
        "text": "GovTech Singapore.",
        "correct": false
      }
    ],
    "explanation": "To ensure security, always check that the developer is 'Central Provident Fund Board'.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Sarah",
      "age": 35,
      "bg": "security conscious",
      "emoji": "🛡️",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Which browser versions are typically supported by 'my cpf' digital services?",
    "choices": [
      {
        "text": "Any browser from the last 10 years.",
        "correct": false
      },
      {
        "text": "The two most recent versions of major browsers like Chrome and Safari.",
        "correct": true
      },
      {
        "text": "Only Internet Explorer 11.",
        "correct": false
      },
      {
        "text": "Only Google Chrome.",
        "correct": false
      }
    ],
    "explanation": "For security and functionality, digital services are optimized for the two most recent versions of modern browsers.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Kiat",
      "age": 30,
      "bg": "tech support",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "How can you get a copy of your CPF Yearly Statement of Account?",
    "choices": [
      {
        "text": "By requesting it via mail only.",
        "correct": false
      },
      {
        "text": "By logging in to 'my cpf' with Singpass to view, print, or download.",
        "correct": true
      },
      {
        "text": "From any AXS machine.",
        "correct": false
      },
      {
        "text": "From your HR department.",
        "correct": false
      }
    ],
    "explanation": "Yearly statements are available for viewing and download through the official CPF digital services.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Paul",
      "age": 28,
      "bg": "filing taxes",
      "emoji": "📄",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "What is the Basic Healthcare Sum (BHS) for members who turn 65 in 2025?",
    "choices": [
      {
        "text": "$71,500",
        "correct": false
      },
      {
        "text": "$75,500",
        "correct": true
      },
      {
        "text": "$79,000",
        "correct": false
      },
      {
        "text": "$68,500",
        "correct": false
      }
    ],
    "explanation": "The cohort BHS for those turning 65 in 2025 is $75,500.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Teo",
      "age": 65,
      "bg": "retiring in 2025",
      "emoji": "🎂",
      "salutation": "Mr",
      "lastname": "Teo"
    }
  },
  {
    "q": "Once you reach age 65, what happens to your Basic Healthcare Sum (BHS)?",
    "choices": [
      {
        "text": "It continues to increase every year.",
        "correct": false
      },
      {
        "text": "It is fixed for the rest of your life.",
        "correct": true
      },
      {
        "text": "It decreases by 2% annually.",
        "correct": false
      },
      {
        "text": "It is reset to $0.",
        "correct": false
      }
    ],
    "explanation": "The BHS is fixed for each cohort at age 65 and remains unchanged for the rest of their lives.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Auntie Mary",
      "age": 67,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Mary"
    }
  },
  {
    "q": "If you are 70 years old in 2026, what is your fixed BHS amount?",
    "choices": [
      {
        "text": "$63,000",
        "correct": true
      },
      {
        "text": "$60,000",
        "correct": false
      },
      {
        "text": "$66,000",
        "correct": false
      },
      {
        "text": "$79,000",
        "correct": false
      }
    ],
    "explanation": "Based on the BHS table, the 2021 cohort (aged 70 in 2026) has a fixed BHS of $63,000.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Raj",
      "age": 70,
      "bg": "checking BHS",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "Can you top up your MediSave if you are already at your BHS limit?",
    "choices": [
      {
        "text": "Yes, it will just stay in MediSave.",
        "correct": false
      },
      {
        "text": "No, any amount exceeding the BHS will be channelled to other CPF accounts.",
        "correct": true
      },
      {
        "text": "Yes, but you have to pay a penalty.",
        "correct": false
      },
      {
        "text": "Only for tax relief purposes.",
        "correct": false
      }
    ],
    "explanation": "The BHS is the maximum limit for MediSave; excess funds are transferred to the Special Account (if under 55) or Retirement Account (if 55+).",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ken",
      "age": 52,
      "bg": "high earner",
      "emoji": "💰",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "What determines your CPF contribution rate as a Singapore Permanent Resident (SPR)?",
    "choices": [
      {
        "text": "Your job title.",
        "correct": false
      },
      {
        "text": "How long you have held SPR status.",
        "correct": true
      },
      {
        "text": "Your country of origin.",
        "correct": false
      },
      {
        "text": "Your home address.",
        "correct": false
      }
    ],
    "explanation": "SPR contribution rates are graduated based on the first, second, and third years of obtaining status.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Carlos",
      "age": 29,
      "bg": "new SPR",
      "emoji": "🇸🇬",
      "salutation": "Mr",
      "lastname": "Carlos"
    }
  },
  {
    "q": "How long does the 'First-year rate' apply for a new SPR?",
    "choices": [
      {
        "text": "Exactly 365 days.",
        "correct": false
      },
      {
        "text": "From the day of obtaining status until the last day of the month of the first anniversary.",
        "correct": true
      },
      {
        "text": "For the first 6 months only.",
        "correct": false
      },
      {
        "text": "Until the next calendar year.",
        "correct": false
      }
    ],
    "explanation": "The first-year rate applies until the last day of the month in which you reach your first anniversary as an SPR.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mei",
      "age": 32,
      "bg": "SPR",
      "emoji": "📅",
      "salutation": "Ms",
      "lastname": "Mei"
    }
  },
  {
    "q": "What is the start date for the 'Third-year rate' for an SPR who obtained status on 15 Jan 2024?",
    "choices": [
      {
        "text": "16 Jan 2026",
        "correct": false
      },
      {
        "text": "1 Feb 2026",
        "correct": true
      },
      {
        "text": "1 Jan 2026",
        "correct": false
      },
      {
        "text": "15 Jan 2025",
        "correct": false
      }
    ],
    "explanation": "The third-year rate begins from the month following the second anniversary (i.e., 1 February 2026).",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "John",
      "age": 35,
      "bg": "calculating rates",
      "emoji": "📊",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "If you are an employee, how is the allocation to your MediSave Account determined?",
    "choices": [
      {
        "text": "By your blood type.",
        "correct": false
      },
      {
        "text": "Based on your age group.",
        "correct": true
      },
      {
        "text": "It is a flat $100 for everyone.",
        "correct": false
      },
      {
        "text": "By your employer's choice.",
        "correct": false
      }
    ],
    "explanation": "MediSave allocation rates change based on the member's age, with higher percentages allocated as you get older.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Linda",
      "age": 45,
      "bg": "checking payroll",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Linda"
    }
  },
  {
    "q": "Are CPF contributions payable for employees who are neither Singapore Citizens nor SPRs?",
    "choices": [
      {
        "text": "Yes, but at a lower rate.",
        "correct": false
      },
      {
        "text": "No, they are not payable.",
        "correct": true
      },
      {
        "text": "Yes, if they earn more than $3,000.",
        "correct": false
      },
      {
        "text": "Only if they have a work permit.",
        "correct": false
      }
    ],
    "explanation": "CPF contributions are only mandatory for Singapore Citizens and Permanent Residents.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Paul",
      "age": 30,
      "bg": "HR executive",
      "emoji": "💼",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "What happens if a self-employed person makes a MediSave top-up but has outstanding payables?",
    "choices": [
      {
        "text": "The top-up is ignored.",
        "correct": false
      },
      {
        "text": "The amount is used to offset their MediSave payable first.",
        "correct": true
      },
      {
        "text": "The top-up is returned with a fine.",
        "correct": false
      },
      {
        "text": "The money is sent to their OA.",
        "correct": false
      }
    ],
    "explanation": "For SEPs, MediSave top-ups are used to offset outstanding MediSave payables and meet Workfare requirements.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ken",
      "age": 38,
      "bg": "freelancer",
      "emoji": "🎨",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "Is tax relief applicable for top-ups made to your own 3 CPF accounts?",
    "choices": [
      {
        "text": "Yes, but only if you are a self-employed person with assessable income.",
        "correct": true
      },
      {
        "text": "Yes, for everyone up to $16,000.",
        "correct": false
      },
      {
        "text": "No, only MediSave top-ups get relief.",
        "correct": false
      },
      {
        "text": "Yes, but only if you are over 55.",
        "correct": false
      }
    ],
    "explanation": "Tax relief for voluntary 3-account top-ups is specifically for self-employed persons with assessable net trade income.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Grace",
      "age": 34,
      "bg": "SEP business owner",
      "emoji": "📈",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "Can you backdate a CPF top-up to the previous year if you missed the Dec 31st deadline?",
    "choices": [
      {
        "text": "Yes, until Jan 15th.",
        "correct": false
      },
      {
        "text": "No, backdating of top-ups is not allowed.",
        "correct": true
      },
      {
        "text": "Yes, if you pay a late fee.",
        "correct": false
      },
      {
        "text": "Only if you were hospitalized.",
        "correct": false
      }
    ],
    "explanation": "Top-ups must reach CPF by 31 December; backdating to previous years is strictly not allowed.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Ling",
      "age": 27,
      "bg": "late saver",
      "emoji": "⏰",
      "salutation": "Ms",
      "lastname": "Wei Ling"
    }
  },
  {
    "q": "What is the purpose of the One-Stop Change of Address Reporting Service (OSCARS)?",
    "choices": [
      {
        "text": "To report a missing NRIC.",
        "correct": false
      },
      {
        "text": "To update multiple government agencies of a new address simultaneously.",
        "correct": true
      },
      {
        "text": "To apply for a new passport.",
        "correct": false
      },
      {
        "text": "To register a new business.",
        "correct": false
      }
    ],
    "explanation": "OSCARS allows you to update your address once with ICA and have it propagated to other agencies like CPF Board.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Chloe",
      "age": 28,
      "bg": "moving house",
      "emoji": "📦",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "How soon will CPF Board be informed of an address change after you report it to ICA?",
    "choices": [
      {
        "text": "Within one week.",
        "correct": false
      },
      {
        "text": "Within one day.",
        "correct": true
      },
      {
        "text": "Immediately.",
        "correct": false
      },
      {
        "text": "In the next billing cycle.",
        "correct": false
      }
    ],
    "explanation": "The OSCARS system informs participating agencies within one day of the update.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Ben",
      "age": 30,
      "bg": "homeowner",
      "emoji": "🏡",
      "salutation": "Mr",
      "lastname": "Ben"
    }
  },
  {
    "q": "If you want to use your hanyu pinyin name for CPF transactions, what must you do first?",
    "choices": [
      {
        "text": "Email the CPF Board.",
        "correct": false
      },
      {
        "text": "Update your principal name in your NRIC with ICA first.",
        "correct": true
      },
      {
        "text": "Just sign your name differently on forms.",
        "correct": false
      },
      {
        "text": "Change your Singpass display name.",
        "correct": false
      }
    ],
    "explanation": "CPF Board uses the principal name registered on the NRIC. Any changes must be made with ICA first.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Lily",
      "age": 25,
      "bg": "wants to use alias",
      "emoji": "✍️",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "What is the maximum history length for healthcare payments and claims visible on the Child Dashboard?",
    "choices": [
      {
        "text": "6 months.",
        "correct": false
      },
      {
        "text": "12 months.",
        "correct": false
      },
      {
        "text": "15 months.",
        "correct": true
      },
      {
        "text": "3 years.",
        "correct": false
      }
    ],
    "explanation": "Parents can view healthcare payments and claims for the last 15 months online.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Mei Ling",
      "age": 34,
      "bg": "mother",
      "emoji": "👩‍👧",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    }
  },
  {
    "q": "If your child was a foreigner at birth but is now a citizen, what document is needed to link them to your CPF account?",
    "choices": [
      {
        "text": "Their first passport.",
        "correct": false
      },
      {
        "text": "The citizenship certificate.",
        "correct": true
      },
      {
        "text": "The parent's employment contract.",
        "correct": false
      },
      {
        "text": "A school recommendation letter.",
        "correct": false
      }
    ],
    "explanation": "If a child was a foreigner at birth, their citizenship certificate is required for linking in the CPF system.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Sarah",
      "age": 40,
      "bg": "naturalized citizen",
      "emoji": "🇸🇬",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Can a parent remove their ex-spouse's access to a child's CPF statement if they have a court order for sole custody?",
    "choices": [
      {
        "text": "No, both parents always have access.",
        "correct": false
      },
      {
        "text": "Yes, by providing the Court Order as a supporting document.",
        "correct": true
      },
      {
        "text": "Only if the child is over 16.",
        "correct": false
      },
      {
        "text": "Yes, but they must pay a $50 fee.",
        "correct": false
      }
    ],
    "explanation": "CPF Board will remove access for an ex-spouse if a relevant Court Order for sole custody is provided.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Sharon",
      "age": 42,
      "bg": "divorced mother",
      "emoji": "👩‍👦",
      "salutation": "Ms",
      "lastname": "Sharon"
    }
  },
  {
    "q": "Is a notification sent to you if your address is updated via OSCARS?",
    "choices": [
      {
        "text": "Yes, via SMS.",
        "correct": false
      },
      {
        "text": "No, you will not receive an additional acknowledgement from CPF Board.",
        "correct": true
      },
      {
        "text": "Yes, a physical letter is sent to the new address.",
        "correct": false
      },
      {
        "text": "No, but it will show up in your next statement.",
        "correct": false
      }
    ],
    "explanation": "CPF Board does not send a separate acknowledgement for updates performed via the OSCARS system.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Lim",
      "age": 60,
      "bg": "checking his status",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "Is the Silver Support Scheme available to Singapore Permanent Residents?",
    "choices": [
      {
        "text": "Yes, if they have lived in Singapore for 20 years.",
        "correct": false
      },
      {
        "text": "No, it is only for Singapore Citizens.",
        "correct": true
      },
      {
        "text": "Yes, but they receive a lower amount.",
        "correct": false
      },
      {
        "text": "Only if they are married to a Singapore Citizen.",
        "correct": false
      }
    ],
    "explanation": "The Silver Support Scheme is specifically designed to support elderly Singapore Citizens.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Lee",
      "age": 66,
      "bg": "PR living in Singapore",
      "emoji": "🇸🇬",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "What is the quarterly Silver Support payout for a senior living in a 3-room HDB flat (from 2025)?",
    "choices": [
      {
        "text": "$430",
        "correct": false
      },
      {
        "text": "$720",
        "correct": true
      },
      {
        "text": "$1,080",
        "correct": false
      },
      {
        "text": "$500",
        "correct": false
      }
    ],
    "explanation": "From 2025, eligible seniors living in 3-room HDB flats receive $720 per quarter.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Rosnah",
      "age": 70,
      "bg": "living in a 3-room flat",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Rosnah"
    }
  },
  {
    "q": "Does the Silver Support Scheme provide the same payout for 4-room and 3-room HDB flat dwellers?",
    "choices": [
      {
        "text": "No, 4-room flat dwellers get less.",
        "correct": false
      },
      {
        "text": "Yes, both receive $720 per quarter (from 2025).",
        "correct": true
      },
      {
        "text": "No, 3-room flat dwellers get more.",
        "correct": false
      },
      {
        "text": "It depends on the location of the flat.",
        "correct": false
      }
    ],
    "explanation": "Both 3-room and 4-room HDB flat dwellers fall into the same tier, receiving $720 per quarter from 2025.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Tan",
      "age": 68,
      "bg": "living in a 4-room flat",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "What is the quarterly Silver Support payout for seniors in 5-room HDB flats?",
    "choices": [
      {
        "text": "$430",
        "correct": true
      },
      {
        "text": "$720",
        "correct": false
      },
      {
        "text": "$300",
        "correct": false
      },
      {
        "text": "They are not eligible.",
        "correct": false
      }
    ],
    "explanation": "Eligible seniors in 5-room HDB flats receive the lowest tier of $430 per quarter.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Mr. Gupta",
      "age": 71,
      "bg": "living in a 5-room flat",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Gupta"
    }
  },
  {
    "q": "If an eligible senior lives in a nursing home, can they still receive Silver Support?",
    "choices": [
      {
        "text": "No, nursing home residents are excluded.",
        "correct": false
      },
      {
        "text": "Yes, they will be assessed based on their last HDB flat type before moving.",
        "correct": true
      },
      {
        "text": "Only if they pay for the home using CPF.",
        "correct": false
      },
      {
        "text": "Yes, they automatically get the maximum amount.",
        "correct": false
      }
    ],
    "explanation": "Seniors in nursing homes remain eligible if they meet the lifetime wages and household support criteria.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Nurse Jane",
      "age": 30,
      "bg": "helping a resident",
      "emoji": "🏥",
      "salutation": "Ms",
      "lastname": "Jane"
    }
  },
  {
    "q": "How can you update your bank account details specifically for Silver Support payouts?",
    "choices": [
      {
        "text": "By calling the SSS hotline.",
        "correct": false
      },
      {
        "text": "By logging into 'my cpf' digital services and updating your bank account for 'Board's payments to you'.",
        "correct": true
      },
      {
        "text": "By visiting any OCBC ATM.",
        "correct": false
      },
      {
        "text": "You must send a physical cheque book leaf.",
        "correct": false
      }
    ],
    "explanation": "You can update your bank account for all Board payments, including SSS, via the official digital services.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Kiat",
      "age": 28,
      "bg": "helping his father",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "What is 'GovCash' in the context of Silver Support?",
    "choices": [
      {
        "text": "A new digital currency.",
        "correct": false
      },
      {
        "text": "A payment method for those without a linked bank account.",
        "correct": true
      },
      {
        "text": "A voucher for grocery stores.",
        "correct": false
      },
      {
        "text": "A loan from the government.",
        "correct": false
      }
    ],
    "explanation": "GovCash allows members to receive government payments without a bank account; they can withdraw it at OCBC ATMs using face verification.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Auntie Sim",
      "age": 73,
      "bg": "no bank account",
      "emoji": "🏧",
      "salutation": "Mdm",
      "lastname": "Sim"
    }
  },
  {
    "q": "Can a senior opt out of the Silver Support Scheme?",
    "choices": [
      {
        "text": "No, it is mandatory.",
        "correct": false
      },
      {
        "text": "Yes, by writing to the CPF Board.",
        "correct": true
      },
      {
        "text": "Only if they are leaving the country.",
        "correct": false
      },
      {
        "text": "Only if they have more than $1 million.",
        "correct": false
      }
    ],
    "explanation": "While it is an automatic benefit, seniors can choose to opt out by contacting the Board.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Wong",
      "age": 67,
      "bg": "prefers not to receive aid",
      "emoji": "✉️",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "Are Silver Support cash supplements subject to Income Tax?",
    "choices": [
      {
        "text": "Yes, they are considered income.",
        "correct": false
      },
      {
        "text": "No, they are tax-exempt.",
        "correct": true
      },
      {
        "text": "Only if your total income exceeds $20,000.",
        "correct": false
      },
      {
        "text": "Yes, but at a special 2% rate.",
        "correct": false
      }
    ],
    "explanation": "Silver Support payments are government supplements and are not taxable.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Mr. Tan",
      "age": 69,
      "bg": "calculating taxes",
      "emoji": "📝",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "What happens to your MediShield Life coverage if your CPF account is closed due to renunciation?",
    "choices": [
      {
        "text": "It continues until you turn 90.",
        "correct": false
      },
      {
        "text": "It is terminated upon account closure.",
        "correct": true
      },
      {
        "text": "You can pay for it via credit card instead.",
        "correct": false
      },
      {
        "text": "It is transferred to a private insurer automatically.",
        "correct": false
      }
    ],
    "explanation": "All CPF-administered schemes, including MediShield Life, cease once the CPF account is closed.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Elena",
      "age": 42,
      "bg": "ex-citizen",
      "emoji": "🏥",
      "salutation": "Ms",
      "lastname": "Elena"
    }
  },
  {
    "q": "Can you still use your CPF Ordinary Account to pay for your HDB mortgage after renouncing your PR status?",
    "choices": [
      {
        "text": "Yes, for a 3-year grace period.",
        "correct": false
      },
      {
        "text": "No, housing payments from CPF cease when the account is closed.",
        "correct": true
      },
      {
        "text": "Only if you have a job in Singapore.",
        "correct": false
      },
      {
        "text": "Yes, but you must pay in cash first and claim later.",
        "correct": false
      }
    ],
    "explanation": "Participation in housing schemes stops upon account closure; you must find alternative payment methods for your mortgage.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Paul",
      "age": 39,
      "bg": "former PR",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "If you renounce citizenship and have outstanding tax arrears, how does the Board handle your CPF savings?",
    "choices": [
      {
        "text": "You must pay the tax separately.",
        "correct": false
      },
      {
        "text": "The Board may use your savings to clear past debts like tax arrears before transferring the balance.",
        "correct": true
      },
      {
        "text": "The tax is waived.",
        "correct": false
      },
      {
        "text": "Your account cannot be closed until tax is paid.",
        "correct": false
      }
    ],
    "explanation": "CPF savings can be used to clear outstanding debts to the government, such as tax arrears, during the account closure process.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "John",
      "age": 50,
      "bg": "overseas move",
      "emoji": "📊",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "What happens if you have no Singpass but need to request your CPF statement after your account is closed?",
    "choices": [
      {
        "text": "You cannot get it.",
        "correct": false
      },
      {
        "text": "You must submit a manual request form to the Board.",
        "correct": true
      },
      {
        "text": "You can ask a friend with Singpass to check for you.",
        "correct": false
      },
      {
        "text": "You must fly back to Singapore.",
        "correct": false
      }
    ],
    "explanation": "If Singpass is unavailable, members can use manual forms (with identity verification) to request their statements.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "George",
      "age": 55,
      "bg": "living in Canada",
      "emoji": "🇨🇦",
      "salutation": "Mr",
      "lastname": "George"
    }
  },
  {
    "q": "When reinstating citizenship, do you need to refund CPF money used for education?",
    "choices": [
      {
        "text": "No, only the cash withdrawn.",
        "correct": false
      },
      {
        "text": "Yes, any savings used for participation in CPF schemes (like Education) must be refunded.",
        "correct": true
      },
      {
        "text": "Only if the child is still studying.",
        "correct": false
      },
      {
        "text": "No, education is a gift.",
        "correct": false
      }
    ],
    "explanation": "Reinstating status requires a full refund of all CPF savings used or withdrawn, including those used for the Education Scheme.",
    "category": "Account Closure",
    "difficulty": "hard",
    "persona": {
      "name": "Sarah",
      "age": 45,
      "bg": "returning citizen",
      "emoji": "🎓",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "How can you update your email address for CPF notifications?",
    "choices": [
      {
        "text": "Email the Board from your new address.",
        "correct": false
      },
      {
        "text": "Update it via 'Account settings' in 'my cpf' using Singpass.",
        "correct": true
      },
      {
        "text": "Update it at an AXS machine.",
        "correct": false
      },
      {
        "text": "Call the hotline and speak to an officer.",
        "correct": false
      }
    ],
    "explanation": "Email and mobile updates are managed securely through the Account settings online.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Wei Ling",
      "age": 26,
      "bg": "young professional",
      "emoji": "📧",
      "salutation": "Ms",
      "lastname": "Wei Ling"
    }
  },
  {
    "q": "What should you do if your child's name does not appear on your Child Dashboard?",
    "choices": [
      {
        "text": "Wait until they turn 21.",
        "correct": false
      },
      {
        "text": "Write to the Board with their birth certificate and citizenship certificate.",
        "correct": true
      },
      {
        "text": "The child must create their own Singpass first.",
        "correct": false
      },
      {
        "text": "Contact the school principal.",
        "correct": false
      }
    ],
    "explanation": "If a child is not automatically linked, providing their birth and citizenship certificates allows the Board to link them.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Mei Ling",
      "age": 32,
      "bg": "new mother",
      "emoji": "👶",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    }
  },
  {
    "q": "Can you see your child's healthcare claims from 2 years ago on the dashboard?",
    "choices": [
      {
        "text": "Yes, history goes back 10 years.",
        "correct": false
      },
      {
        "text": "No, only the last 15 months of claims are visible.",
        "correct": true
      },
      {
        "text": "Yes, but only if they were hospitalized.",
        "correct": false
      },
      {
        "text": "No, healthcare claims are private.",
        "correct": false
      }
    ],
    "explanation": "The online Child Dashboard specifically displays healthcare payments and claims for the most recent 15 months.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Hassan",
      "age": 38,
      "bg": "father",
      "emoji": "🏥",
      "salutation": "Mr",
      "lastname": "Hassan"
    }
  },
  {
    "q": "If you changed your name in your NRIC, how long does it take for CPF to be updated?",
    "choices": [
      {
        "text": "You must wait 30 days.",
        "correct": false
      },
      {
        "text": "It is updated automatically in our records without needing to inform us separately.",
        "correct": true
      },
      {
        "text": "You must visit a CPF Service Centre with the deed poll.",
        "correct": false
      },
      {
        "text": "It only updates when you make a contribution.",
        "correct": false
      }
    ],
    "explanation": "For SCs/PRs, name changes in NRIC are automatically synced with CPF Board records.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Lily",
      "age": 29,
      "bg": "changed name recently",
      "emoji": "📝",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "Can you use a different mailing address for CPF letters than the one on your NRIC?",
    "choices": [
      {
        "text": "Yes, you can register a separate mailing address.",
        "correct": false
      },
      {
        "text": "No, letters are sent to the residential address on your Singapore Identity Card by default.",
        "correct": true
      },
      {
        "text": "Only if you are a landlord.",
        "correct": false
      },
      {
        "text": "Yes, but you must pay for postage.",
        "correct": false
      }
    ],
    "explanation": "To ensure security and consistency, CPF Board uses the ICA-registered residential address for all official correspondence.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Ben",
      "age": 31,
      "bg": "renting a house",
      "emoji": "📬",
      "salutation": "Mr",
      "lastname": "Ben"
    }
  },
  {
    "q": "What is a recommended first step if you have trouble logging into 'my cpf'?",
    "choices": [
      {
        "text": "Buy a new laptop.",
        "correct": false
      },
      {
        "text": "Clear your browser cache.",
        "correct": true
      },
      {
        "text": "Call the police.",
        "correct": false
      },
      {
        "text": "Delete your CPF account.",
        "correct": false
      }
    ],
    "explanation": "Clearing the browser cache is a standard troubleshooting step to resolve login issues caused by outdated temporary files.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Uncle Ahmad",
      "age": 60,
      "bg": "tech beginner",
      "emoji": "🖱️",
      "salutation": "Mr",
      "lastname": "Ahmad"
    }
  },
  {
    "q": "Which device setting should be set to 'Automatic' to avoid login issues?",
    "choices": [
      {
        "text": "Brightness.",
        "correct": false
      },
      {
        "text": "Date-time setting.",
        "correct": true
      },
      {
        "text": "Volume.",
        "correct": false
      },
      {
        "text": "Airplane mode.",
        "correct": false
      }
    ],
    "explanation": "Security protocols (like 2FA) require the device's date and time to be accurate; setting it to 'Automatic' ensures synchronization.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Sarah",
      "age": 35,
      "bg": "troubleshooting",
      "emoji": "🕒",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Can you access your CPF statement through the CPF Mobile app?",
    "choices": [
      {
        "text": "Yes, it provides quick access to your statement and services.",
        "correct": true
      },
      {
        "text": "No, it is only for reading news.",
        "correct": false
      },
      {
        "text": "Only if you pay for a subscription.",
        "correct": false
      },
      {
        "text": "No, statements are only available on desktop.",
        "correct": false
      }
    ],
    "explanation": "CPF Mobile is designed to give members easy, on-the-go access to their account information and statements.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Wei Kiat",
      "age": 30,
      "bg": "using the app",
      "emoji": "📱",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "How can a member prove they do not have a CPF account?",
    "choices": [
      {
        "text": "By showing their birth certificate.",
        "correct": false
      },
      {
        "text": "By logging in to 'my cpf'; a specific message will confirm they have no account.",
        "correct": true
      },
      {
        "text": "By signing a statutory declaration.",
        "correct": false
      },
      {
        "text": "They cannot prove it.",
        "correct": false
      }
    ],
    "explanation": "Logging into 'my cpf' with Singpass will show a specific message for those with no account, which can be printed as proof.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Schmidt",
      "age": 40,
      "bg": "foreigner needing proof",
      "emoji": "📄",
      "salutation": "Mr",
      "lastname": "Schmidt"
    }
  },
  {
    "q": "What is the CPF account number for a Singapore Citizen?",
    "choices": [
      {
        "text": "A random 10-digit number.",
        "correct": false
      },
      {
        "text": "The Unique Identification Number (UIN) on their NRIC.",
        "correct": true
      },
      {
        "text": "Their mobile number.",
        "correct": false
      },
      {
        "text": "Their birth certificate number.",
        "correct": false
      }
    ],
    "explanation": "For SCs and PRs, the CPF account number is the same as their NRIC number.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Chloe",
      "age": 21,
      "bg": "new worker",
      "emoji": "🆔",
      "salutation": "Ms",
      "lastname": "Chloe"
    }
  },
  {
    "q": "For how many years back can you retrieve your CPF Yearly Statement of Account online?",
    "choices": [
      {
        "text": "All years since you started working.",
        "correct": false
      },
      {
        "text": "Up to the past 10 years.",
        "correct": true
      },
      {
        "text": "Only the past 3 years.",
        "correct": false
      },
      {
        "text": "Only the current year.",
        "correct": false
      }
    ],
    "explanation": "CPF Board provides online access to statements from the past 10 years only.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Paul",
      "age": 45,
      "bg": "checking history",
      "emoji": "📅",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "Where can you obtain a hardcopy of your CPF statement if you don't have a printer?",
    "choices": [
      {
        "text": "Any post office.",
        "correct": false
      },
      {
        "text": "At self-service kiosks located at CPF Service Centres.",
        "correct": true
      },
      {
        "text": "From your local library.",
        "correct": false
      },
      {
        "text": "By asking your employer to print it.",
        "correct": false
      }
    ],
    "explanation": "Self-service kiosks at CPF Service Centres allow members to print their statements using Singpass.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Lim",
      "age": 68,
      "bg": "retiree",
      "emoji": "🖨️",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "What is the Basic Healthcare Sum (BHS) for the 2024 cohort?",
    "choices": [
      {
        "text": "$68,500",
        "correct": false
      },
      {
        "text": "$71,500",
        "correct": true
      },
      {
        "text": "$75,500",
        "correct": false
      },
      {
        "text": "$66,000",
        "correct": false
      }
    ],
    "explanation": "For members turning 65 in 2024, the BHS is set at $71,500.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mdm Tan",
      "age": 64,
      "bg": "turning 65 next year",
      "emoji": "🎂",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "If you are 70 in 2024, is your BHS the same as someone turning 65 in 2024?",
    "choices": [
      {
        "text": "Yes, everyone has the same BHS.",
        "correct": false
      },
      {
        "text": "No, your BHS was fixed at $60,000 when you turned 65 in 2019.",
        "correct": true
      },
      {
        "text": "Yes, it increases for everyone every year.",
        "correct": false
      },
      {
        "text": "No, it is lower for older people.",
        "correct": false
      }
    ],
    "explanation": "The BHS is fixed for life once a member turns 65. The 2019 cohort rate was $60,000.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Uncle Seng",
      "age": 70,
      "bg": "retiree",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Seng"
    }
  },
  {
    "q": "Are you required to top up your MediSave if it is below the BHS when you turn 65?",
    "choices": [
      {
        "text": "Yes, it is mandatory.",
        "correct": false
      },
      {
        "text": "No, but you can choose to make voluntary top-ups.",
        "correct": true
      },
      {
        "text": "Only if you are still working.",
        "correct": false
      },
      {
        "text": "Yes, or you will be fined.",
        "correct": false
      }
    ],
    "explanation": "There is no requirement to top up to the BHS, but members can do so to build their healthcare savings.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Auntie Mary",
      "age": 65,
      "bg": "checking MA",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Mary"
    }
  },
  {
    "q": "When does the 'Second-year rate' for CPF contributions begin for a new SPR?",
    "choices": [
      {
        "text": "Exactly 12 months after status is granted.",
        "correct": false
      },
      {
        "text": "From the month following the first anniversary of obtaining SPR status.",
        "correct": true
      },
      {
        "text": "On January 1st of the next year.",
        "correct": false
      },
      {
        "text": "When they change jobs.",
        "correct": false
      }
    ],
    "explanation": "The graduated rates for SPRs are based on the anniversary month of obtaining their status.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Mei",
      "age": 30,
      "bg": "SPR anniversary",
      "emoji": "🗓️",
      "salutation": "Ms",
      "lastname": "Mei"
    }
  },
  {
    "q": "Can employees receive tax relief for voluntary top-ups to their Ordinary Account?",
    "choices": [
      {
        "text": "Yes, up to $8,000.",
        "correct": false
      },
      {
        "text": "No, tax relief for voluntary 3-account top-ups is only for self-employed persons.",
        "correct": true
      },
      {
        "text": "Yes, if they are under 35.",
        "correct": false
      },
      {
        "text": "Yes, but only for the employer portion.",
        "correct": false
      }
    ],
    "explanation": "Tax relief for voluntary 3-account top-ups is a benefit specifically for self-employed persons with assessable income.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Grace",
      "age": 32,
      "bg": "employee",
      "emoji": "💼",
      "salutation": "Ms",
      "lastname": "Grace"
    }
  },
  {
    "q": "What is the deadline for making a CPF top-up to be eligible for tax relief in the current year?",
    "choices": [
      {
        "text": "31 December.",
        "correct": true
      },
      {
        "text": "31 March of the following year.",
        "correct": false
      },
      {
        "text": "15 January.",
        "correct": false
      },
      {
        "text": "Your birthday.",
        "correct": false
      }
    ],
    "explanation": "Top-ups must be received by the Board by 31 December to qualify for tax relief for that assessment year.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Ken",
      "age": 40,
      "bg": "tax planning",
      "emoji": "📉",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "Can you withdraw your CPF Ordinary Account savings to buy a house in London?",
    "choices": [
      {
        "text": "Yes, for any residential property.",
        "correct": false
      },
      {
        "text": "No, CPF savings can only be used for properties in Singapore.",
        "correct": true
      },
      {
        "text": "Only if you are a Singapore Citizen living there.",
        "correct": false
      },
      {
        "text": "Yes, but with a 10% fee.",
        "correct": false
      }
    ],
    "explanation": "CPF housing schemes are restricted to properties located within Singapore.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "John",
      "age": 35,
      "bg": "investor",
      "emoji": "🇬🇧",
      "salutation": "Mr",
      "lastname": "John"
    }
  },
  {
    "q": "What happens if an SPR's status is revoked or expires?",
    "choices": [
      {
        "text": "Their account is closed and savings transferred.",
        "correct": true
      },
      {
        "text": "They lose all their savings.",
        "correct": false
      },
      {
        "text": "The savings are frozen until they turn 55.",
        "correct": false
      },
      {
        "text": "The money is sent to their home country's embassy.",
        "correct": false
      }
    ],
    "explanation": "If a member is no longer a Singapore Citizen or PR, their CPF account will be closed and savings transferred to their bank account.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "Carlos",
      "age": 45,
      "bg": "former SPR",
      "emoji": "🛫",
      "salutation": "Mr",
      "lastname": "Carlos"
    }
  },
  {
    "q": "Can you receive Silver Support if you live in a private property but have no income?",
    "choices": [
      {
        "text": "Yes, it is based only on income.",
        "correct": false
      },
      {
        "text": "No, living in a private property (or a spouse owning one) usually disqualifies you.",
        "correct": true
      },
      {
        "text": "Yes, if you are over 80.",
        "correct": false
      },
      {
        "text": "Only if the property is a small shop.",
        "correct": false
      }
    ],
    "explanation": "Housing type is a key criterion; owning or living in private property generally makes one ineligible for Silver Support.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Mr. Koh",
      "age": 70,
      "bg": "private property resident",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "How is 'household support' measured for Silver Support?",
    "choices": [
      {
        "text": "By the number of cars owned.",
        "correct": false
      },
      {
        "text": "By the average monthly income per person in the household.",
        "correct": true
      },
      {
        "text": "By the total square footage of the house.",
        "correct": false
      },
      {
        "text": "By the amount of utility bills paid.",
        "correct": false
      }
    ],
    "explanation": "Household support is assessed based on the household monthly income per person (must be $2,300 or less from 2025).",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Siti",
      "age": 34,
      "bg": "checking for parents",
      "emoji": "👨‍👩‍👧‍👦",
      "salutation": "Ms",
      "lastname": "Siti"
    }
  },
  {
    "q": "When is the first quarterly SSS payment made each year?",
    "choices": [
      {
        "text": "January.",
        "correct": false
      },
      {
        "text": "March.",
        "correct": true
      },
      {
        "text": "February.",
        "correct": false
      },
      {
        "text": "April.",
        "correct": false
      }
    ],
    "explanation": "Silver Support is paid every quarter, starting in March of each year.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Uncle Raj",
      "age": 72,
      "bg": "retiree",
      "emoji": "📅",
      "salutation": "Mr",
      "lastname": "Raj"
    }
  },
  {
    "q": "If you don't use your GovCash balance within the validity period, where does it go?",
    "choices": [
      {
        "text": "It is forfeited.",
        "correct": false
      },
      {
        "text": "It is credited to your CPF Ordinary Account.",
        "correct": true
      },
      {
        "text": "It is sent to your next-of-kin.",
        "correct": false
      },
      {
        "text": "It is donated to charity.",
        "correct": false
      }
    ],
    "explanation": "Unused GovCash balances are eventually credited back to the member's CPF OA to ensure the savings are preserved.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Auntie Mary",
      "age": 75,
      "bg": "forgot about GovCash",
      "emoji": "💰",
      "salutation": "Mdm",
      "lastname": "Mary"
    }
  },
  {
    "q": "Can you use the CPF Mobile app on a rooted or jailbroken phone?",
    "choices": [
      {
        "text": "Yes, it works on any phone.",
        "correct": false
      },
      {
        "text": "No, for security reasons, it may not function on compromised devices.",
        "correct": true
      },
      {
        "text": "Yes, but only for reading articles.",
        "correct": false
      },
      {
        "text": "Only if you have an antivirus app.",
        "correct": false
      }
    ],
    "explanation": "To protect sensitive financial data, the app blocks access on devices that have been modified (rooted/jailbroken).",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Wei Kiat",
      "age": 22,
      "bg": "tech enthusiast",
      "emoji": "🛠️",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    }
  },
  {
    "q": "What happens if your internet connection is unstable while using 'my cpf'?",
    "choices": [
      {
        "text": "The transaction will wait until you reconnect.",
        "correct": false
      },
      {
        "text": "You may encounter login issues or session timeouts.",
        "correct": true
      },
      {
        "text": "Your account will be locked.",
        "correct": false
      },
      {
        "text": "You will be fined for a bad connection.",
        "correct": false
      }
    ],
    "explanation": "Stable internet is required for secure transactions; instability often causes session errors.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Linda",
      "age": 45,
      "bg": "working from home",
      "emoji": "📶",
      "salutation": "Ms",
      "lastname": "Linda"
    }
  },
  {
    "q": "How can you tell if a CPF notification you received on your phone is real?",
    "choices": [
      {
        "text": "If it asks for your bank password.",
        "correct": false
      },
      {
        "text": "Check that it comes from the official CPF Mobile app push notifications.",
        "correct": true
      },
      {
        "text": "If it has a lot of emojis.",
        "correct": false
      },
      {
        "text": "If it offers you a free gift.",
        "correct": false
      }
    ],
    "explanation": "Official notifications come through the app's secure push service; the Board will never ask for bank passwords via notification.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Sarah",
      "age": 35,
      "bg": "security conscious",
      "emoji": "🛡️",
      "salutation": "Ms",
      "lastname": "Sarah"
    }
  },
  {
    "q": "Does CPF Board accept hanyu pinyin names on official documents if they are not on the NRIC?",
    "choices": [
      {
        "text": "Yes, if you sign that way.",
        "correct": false
      },
      {
        "text": "No, the Board uses the principal name registered on the NRIC.",
        "correct": true
      },
      {
        "text": "Only for members over 65.",
        "correct": false
      },
      {
        "text": "Yes, if you provide a birth certificate.",
        "correct": false
      }
    ],
    "explanation": "Transactions and records are strictly based on the principal name registered with ICA.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Lily",
      "age": 25,
      "bg": "student",
      "emoji": "🔤",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "If you are helping a senior, can you register your mobile number for their CPF alerts?",
    "choices": [
      {
        "text": "No, it must be the senior's number.",
        "correct": false
      },
      {
        "text": "Yes, family members can share contact details if they wish.",
        "correct": true
      },
      {
        "text": "Only if you are their legal guardian.",
        "correct": false
      },
      {
        "text": "Yes, but only for one month.",
        "correct": false
      }
    ],
    "explanation": "CPF allows sharing of contact details between family members to facilitate assistance for seniors.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Hassan",
      "age": 42,
      "bg": "caring son",
      "emoji": "👨‍👦",
      "salutation": "Mr",
      "lastname": "Hassan"
    }
  },
  {
    "q": "What happens if a parent with Child Dashboard access is no longer a PR or Citizen?",
    "choices": [
      {
        "text": "They lose access to the dashboard.",
        "correct": true
      },
      {
        "text": "The child loses their CPF money.",
        "correct": false
      },
      {
        "text": "The dashboard is transferred to the child's teacher.",
        "correct": false
      },
      {
        "text": "Access continues until the child is 21.",
        "correct": false
      }
    ],
    "explanation": "Dashboard access requires both the parent and child to be SCs or PRs.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Carlos",
      "age": 48,
      "bg": "leaving Singapore",
      "emoji": "✈️",
      "salutation": "Mr",
      "lastname": "Carlos"
    }
  },
  {
    "q": "If you missed the Dec 31st deadline for a top-up, can you get tax relief for the previous year?",
    "choices": [
      {
        "text": "Yes, with a late fee.",
        "correct": false
      },
      {
        "text": "No, backdating of top-ups is not allowed.",
        "correct": true
      },
      {
        "text": "Yes, if you explain the reason.",
        "correct": false
      },
      {
        "text": "Only if the bank was closed.",
        "correct": false
      }
    ],
    "explanation": "Deadlines are strictly enforced; top-ups after Dec 31st count towards the next assessment year.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Wei Ling",
      "age": 27,
      "bg": "missed deadline",
      "emoji": "⌛",
      "salutation": "Ms",
      "lastname": "Wei Ling"
    }
  },
  {
    "q": "Which account does the BHS apply to?",
    "choices": [
      {
        "text": "Ordinary Account.",
        "correct": false
      },
      {
        "text": "Special Account.",
        "correct": false
      },
      {
        "text": "MediSave Account.",
        "correct": true
      },
      {
        "text": "Retirement Account.",
        "correct": false
      }
    ],
    "explanation": "The Basic Healthcare Sum (BHS) is the maximum cap for the MediSave Account (MA).",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Paul",
      "age": 30,
      "bg": "new worker",
      "emoji": "🏥",
      "salutation": "Mr",
      "lastname": "Paul"
    }
  },
  {
    "q": "What happens to the interest on your CPF savings in April 2024 if you are a non-citizen?",
    "choices": [
      {
        "text": "It stays at 4%.",
        "correct": false
      },
      {
        "text": "The prevailing CPF interest stops and a commercial rate (0.05%) begins.",
        "correct": true
      },
      {
        "text": "It becomes 0% immediately.",
        "correct": false
      },
      {
        "text": "It is doubled as a bonus.",
        "correct": false
      }
    ],
    "explanation": "From April 2024, non-citizen accounts are closed and move from CPF interest rates to a transitory commercial bank rate.",
    "category": "Account Closure",
    "difficulty": "medium",
    "persona": {
      "name": "David",
      "age": 52,
      "bg": "ex-PR",
      "emoji": "📉",
      "salutation": "Mr",
      "lastname": "David"
    }
  },
  {
    "q": "Can you check the BHS for your specific age cohort on the CPF website?",
    "choices": [
      {
        "text": "Yes, the Board publishes the BHS for different cohorts.",
        "correct": true
      },
      {
        "text": "No, you must call to find out.",
        "correct": false
      },
      {
        "text": "It is the same for everyone regardless of age.",
        "correct": false
      },
      {
        "text": "It is secret.",
        "correct": false
      }
    ],
    "explanation": "The BHS for current and past cohorts is publicly available for reference.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Ken",
      "age": 55,
      "bg": "planning for retirement",
      "emoji": "🔍",
      "salutation": "Mr",
      "lastname": "Ken"
    }
  },
  {
    "q": "Does CPF Board send a letter when they update your name from NRIC records?",
    "choices": [
      {
        "text": "Yes, always.",
        "correct": false
      },
      {
        "text": "No, it is updated automatically without separate notification.",
        "correct": true
      },
      {
        "text": "Only if you ask for one.",
        "correct": false
      },
      {
        "text": "Only if you are a foreigner.",
        "correct": false
      }
    ],
    "explanation": "Automatic updates for core particulars like names are done seamlessly without further acknowledgement.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Lily",
      "age": 29,
      "bg": "married name change",
      "emoji": "💍",
      "salutation": "Ms",
      "lastname": "Lily"
    }
  },
  {
    "q": "What is the primary way for a member abroad to perform CPF transactions?",
    "choices": [
      {
        "text": "Using 'my cpf' digital services with Singpass.",
        "correct": true
      },
      {
        "text": "Visiting the Singapore Embassy.",
        "correct": false
      },
      {
        "text": "Sending international mail.",
        "correct": false
      },
      {
        "text": "Using a foreign bank account.",
        "correct": false
      }
    ],
    "explanation": "Digital services allow members to manage their CPF from anywhere in the world, provided they have Singpass.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "George",
      "age": 45,
      "bg": "living overseas",
      "emoji": "🌐",
      "salutation": "Mr",
      "lastname": "George"
    }
  },
  {
    "q": "What is the primary role of an appointed Trusted Contact in the CPF notification service?",
    "choices": [
      {
        "text": "To make CPF transactions and change account settings on behalf of the member.",
        "correct": false
      },
      {
        "text": "To receive a copy of important transaction notifications and alert the member of unusual activities.",
        "correct": true
      },
      {
        "text": "To act as a legal guardian and manage the member's retirement funds.",
        "correct": false
      },
      {
        "text": "To provide financial advice and approve the member's withdrawal requests.",
        "correct": false
      }
    ],
    "explanation": "A Trusted Contact's role is limited to receiving a copy of notifications for critical transactions and alerting the member to unusual activity. They cannot make transactions or change settings.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Siti Nurhaliza",
      "age": 32,
      "bg": "Marketing Executive",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Siti"
    }
  },
  {
    "q": "By which date must an employer pay CPF contributions for each month's wages to avoid late payment interest?",
    "choices": [
      {
        "text": "By the last day of the current month.",
        "correct": false
      },
      {
        "text": "By the 14th of the following month.",
        "correct": true
      },
      {
        "text": "By the 7th of the following month.",
        "correct": false
      },
      {
        "text": "By the 21st of the following month.",
        "correct": false
      }
    ],
    "explanation": "Employers must pay CPF contributions by the 14th of the following month (or the next working day if it falls on a weekend/holiday). Late payments incur 1.5% interest per month.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Jason Lim",
      "age": 45,
      "bg": "Small Business Owner",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "How far in advance can a member book an appointment at a CPF Service Centre?",
    "choices": [
      {
        "text": "Up to 1 month in advance.",
        "correct": false
      },
      {
        "text": "Up to 2 weeks in advance.",
        "correct": true
      },
      {
        "text": "Up to 3 months in advance.",
        "correct": false
      },
      {
        "text": "Appointments must be made at least 48 hours before the visit.",
        "correct": false
      }
    ],
    "explanation": "Service Centre appointment bookings are opened 2 weeks in advance to ensure customer service officers are accessible to those who need assistance promptly.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Grace Tan",
      "age": 28,
      "bg": "Bank Officer",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "Which of these updates to a member's CPF account will trigger a notification to their Trusted Contact?",
    "choices": [
      {
        "text": "Viewing the yearly statement of account.",
        "correct": false
      },
      {
        "text": "A daily withdrawal limit update.",
        "correct": true
      },
      {
        "text": "Changing the theme of the CPF Mobile app.",
        "correct": false
      },
      {
        "text": "Updating the relationship status in member particulars.",
        "correct": false
      }
    ],
    "explanation": "Notifications for critical transactions like bank account updates, contact details updates, and daily withdrawal limit updates are copied to the Trusted Contact.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Bala Krishnan",
      "age": 60,
      "bg": "Security Guard",
      "emoji": "👨‍✈️",
      "salutation": "Mr",
      "lastname": "Krishnan"
    }
  },
  {
    "q": "If an employer pays CPF contributions after the 14th of the following month, what is the interest rate charged per month for late payment?",
    "choices": [
      {
        "text": "1.0%",
        "correct": false
      },
      {
        "text": "1.5%",
        "correct": true
      },
      {
        "text": "2.0%",
        "correct": false
      },
      {
        "text": "0.5%",
        "correct": false
      }
    ],
    "explanation": "Late payment of CPF contributions by employers incurs interest charged at 1.5% per month.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Linda Teo",
      "age": 38,
      "bg": "Human Resources Manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Teo"
    }
  },
  {
    "q": "For how long can a member view their CPF Transaction History online?",
    "choices": [
      {
        "text": "For the past 6 months.",
        "correct": false
      },
      {
        "text": "For the past 12 months.",
        "correct": false
      },
      {
        "text": "For the past 15 months.",
        "correct": true
      },
      {
        "text": "For the past 24 months.",
        "correct": false
      }
    ],
    "explanation": "CPF Transaction History provides records for the latest 15 months. Records beyond that must be accessed via the Yearly Statement of Account.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Robert Ng",
      "age": 52,
      "bg": "Sales Director",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "When updating a bank account for PayNow NRIC-linked payments, how long does it usually take for the update to reflect?",
    "choices": [
      {
        "text": "Immediately.",
        "correct": false
      },
      {
        "text": "12 hours.",
        "correct": true
      },
      {
        "text": "24 hours.",
        "correct": false
      },
      {
        "text": "2 working days.",
        "correct": false
      }
    ],
    "explanation": "For PayNow NRIC-linked bank accounts, the update in the CPF system will be reflected after 12 hours.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Ahmad Ibrahim",
      "age": 24,
      "bg": "Delivery Rider",
      "emoji": "🛵",
      "salutation": "Mr",
      "lastname": "Ibrahim"
    }
  },
  {
    "q": "What happens if a Trusted Contact appointee does not respond to the appointment request within 7 days?",
    "choices": [
      {
        "text": "The request is automatically approved.",
        "correct": false
      },
      {
        "text": "The request will automatically expire, and a new request must be submitted.",
        "correct": true
      },
      {
        "text": "The request is sent to an alternative contact person.",
        "correct": false
      },
      {
        "text": "The appointer's account is temporarily locked for security.",
        "correct": false
      }
    ],
    "explanation": "A Trusted Contact appointee has 7 days to respond. After this period, the request expires and the member must submit a new request.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Mei Ling",
      "age": 41,
      "bg": "Teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "Which service is specifically NOT available at CPF Service Centres and must be handled via digital services or hotline?",
    "choices": [
      {
        "text": "Retirement payout inquiries.",
        "correct": false
      },
      {
        "text": "Healthcare claim assistance.",
        "correct": false
      },
      {
        "text": "Employer or self-employed matters.",
        "correct": true
      },
      {
        "text": "Singpass password resets.",
        "correct": false
      }
    ],
    "explanation": "Services for employer or self-employed matters are only available through digital services, the hotline, or 'Write to Us', not at Service Centres.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Kenji Wong",
      "age": 35,
      "bg": "Freelance Consultant",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "How long does it generally take for an Interbank GIRO bank account update to be activated after the bank confirms ownership?",
    "choices": [
      {
        "text": "12 hours.",
        "correct": false
      },
      {
        "text": "1 working day.",
        "correct": false
      },
      {
        "text": "Up to two working days.",
        "correct": true
      },
      {
        "text": "5 working days.",
        "correct": false
      }
    ],
    "explanation": "Interbank GIRO account updates generally take up to two working days to be activated after the bank confirms the account belongs to the member.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Catherine Low",
      "age": 58,
      "bg": "Retired Nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Mdm",
      "lastname": "Low"
    }
  },
  {
    "q": "What is the maximum period CPF Board provides for the retrieval of past CPF statements?",
    "choices": [
      {
        "text": "5 years.",
        "correct": false
      },
      {
        "text": "10 years.",
        "correct": true
      },
      {
        "text": "15 years.",
        "correct": false
      },
      {
        "text": "The entire history of the account.",
        "correct": false
      }
    ],
    "explanation": "CPF Board does not provide retrieval services for statements beyond the past 10 years. Members are encouraged to download them annually.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Samuel Seah",
      "age": 22,
      "bg": "University Student",
      "emoji": "👨‍🎓",
      "salutation": "Mr",
      "lastname": "Seah"
    }
  },
  {
    "q": "Why is the Trusted Contact notified when a member updates their bank account or daily withdrawal limit?",
    "choices": [
      {
        "text": "To allow the Trusted Contact to approve the change for it to take effect.",
        "correct": false
      },
      {
        "text": "Because scammers may try to update this info if they obtain unauthorized access.",
        "correct": true
      },
      {
        "text": "To keep the Trusted Contact informed about the member's financial status.",
        "correct": false
      },
      {
        "text": "It is a legal requirement for all CPF members over age 55.",
        "correct": false
      }
    ],
    "explanation": "Trusted Contacts are alerted because scammers often target these settings. The notification allows the Trusted Contact to spot unusual activity early.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lim Boon Hock",
      "age": 68,
      "bg": "Retired Taxi Driver",
      "emoji": "🚖",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "A member wants to change their bank account for payouts. What should they do if they have a pending withdrawal application?",
    "choices": [
      {
        "text": "Update the bank account immediately to ensure the payout goes to the new bank.",
        "correct": false
      },
      {
        "text": "Wait until the pending withdrawal is complete before updating the bank account.",
        "correct": true
      },
      {
        "text": "Cancel the withdrawal, change the bank, and then re-apply.",
        "correct": false
      },
      {
        "text": "Contact the bank to reroute the CPF payment.",
        "correct": false
      }
    ],
    "explanation": "Members should consider updating their bank account after a pending withdrawal is complete to ensure successful processing of the current application.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Wong Siew Lan",
      "age": 56,
      "bg": "Part-time Admin",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Wong"
    }
  },
  {
    "q": "What is the consequence if a Trusted Contact is suspected of being a scammer or acting in bad faith?",
    "choices": [
      {
        "text": "CPF Board will automatically remove them from the service.",
        "correct": false
      },
      {
        "text": "The member should remove them immediately via the 'Add or remove Trusted Contact' e-form.",
        "correct": true
      },
      {
        "text": "The Trusted Contact's own CPF account will be frozen.",
        "correct": false
      },
      {
        "text": "Nothing can be done once the appointment is accepted.",
        "correct": false
      }
    ],
    "explanation": "If a member suspects their Trusted Contact, they should remove them immediately using the digital service e-form.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Kevin Koh",
      "age": 33,
      "bg": "Software Engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "In cases where a company is in financial difficulty, what does CPF Board state regarding unpaid contributions?",
    "choices": [
      {
        "text": "The government will pay the contributions on behalf of the company.",
        "correct": false
      },
      {
        "text": "CPF arrears may not always be recoverable despite enforcement efforts.",
        "correct": true
      },
      {
        "text": "The company directors are personally liable to pay from their own CPF accounts.",
        "correct": false
      },
      {
        "text": "The member's retirement age will be extended to compensate for the loss.",
        "correct": false
      }
    ],
    "explanation": "If a company is in financial difficulty, CPF arrears may not always be recoverable, although the Board takes enforcement action.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Suresh Mani",
      "age": 44,
      "bg": "Warehouse Supervisor",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Mani"
    }
  },
  {
    "q": "Which of these is a requirement before a member can appoint a Trusted Contact?",
    "choices": [
      {
        "text": "The member must be at least 55 years old.",
        "correct": false
      },
      {
        "text": "The member must verify that their own contact details registered with CPF are correct.",
        "correct": true
      },
      {
        "text": "The member must have at least $50,000 in their Ordinary Account.",
        "correct": false
      },
      {
        "text": "The appointee must be a next-of-kin.",
        "correct": false
      }
    ],
    "explanation": "Before proceeding with an appointment, the member must verify that their own contact details are correct so they can receive notifications and manage the service.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Michelle Goh",
      "age": 29,
      "bg": "Graphic Designer",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Goh"
    }
  },
  {
    "q": "If an employer pays CPF contributions on the 16th of the following month, on which day does the late payment interest begin to accrue?",
    "choices": [
      {
        "text": "From the 1st of that month.",
        "correct": false
      },
      {
        "text": "From the first day after the due date (the 1st of the following month).",
        "correct": true
      },
      {
        "text": "From the 15th of the following month.",
        "correct": false
      },
      {
        "text": "Only after a 30-day grace period.",
        "correct": false
      }
    ],
    "explanation": "Late payment interest is charged commencing from the first day after the due date (which is the last day of the calendar month). Enforcement starts after the 14th.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Wei Kiat",
      "age": 31,
      "bg": "Accountant",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member wants to see contributions from 3 years ago. Which document should they access?",
    "choices": [
      {
        "text": "CPF Transaction History.",
        "correct": false
      },
      {
        "text": "Yearly Statement of Account.",
        "correct": true
      },
      {
        "text": "Healthcare Payments and Claims Statement.",
        "correct": false
      },
      {
        "text": "The Child Dashboard.",
        "correct": false
      }
    ],
    "explanation": "Transaction History only shows the last 15 months. For records beyond that (up to 10 years), the Yearly Statement of Account is required.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Elizabeth Low",
      "age": 48,
      "bg": "Home Maker",
      "emoji": "👩‍🍳",
      "salutation": "Mdm",
      "lastname": "Low"
    }
  },
  {
    "q": "What detail is NOT required when submitting the e-form to add a Trusted Contact?",
    "choices": [
      {
        "text": "Full name as per NRIC.",
        "correct": false
      },
      {
        "text": "NRIC number.",
        "correct": false
      },
      {
        "text": "Relationship to the member.",
        "correct": false
      },
      {
        "text": "Monthly income of the appointee.",
        "correct": true
      }
    ],
    "explanation": "To add a Trusted Contact, you need their full name, NRIC number, and relationship. Income details are not required.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Daniel Foo",
      "age": 36,
      "bg": "Insurance Agent",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Foo"
    }
  },
  {
    "q": "How can a member inform CPF Board of a potential scam after spotting unusual activity with their Trusted Contact?",
    "choices": [
      {
        "text": "Update their address with ICA.",
        "correct": false
      },
      {
        "text": "Lodge a police report and inform CPF Board.",
        "correct": true
      },
      {
        "text": "Call their bank to freeze their CPF account.",
        "correct": false
      },
      {
        "text": "Post a warning on social media.",
        "correct": false
      }
    ],
    "explanation": "If scams are suspected, the member should lodge a police report and immediately inform CPF Board.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Noor Aisha",
      "age": 50,
      "bg": "Social Worker",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Aisha"
    }
  },
  {
    "q": "Can a Trusted Contact view a member's CPF account balance?",
    "choices": [
      {
        "text": "Yes, they have full viewing access.",
        "correct": false
      },
      {
        "text": "Only if the member is above age 70.",
        "correct": false
      },
      {
        "text": "No, they can only view the information included in the transaction notifications.",
        "correct": true
      },
      {
        "text": "Yes, but they cannot make any transactions.",
        "correct": false
      }
    ],
    "explanation": "Trusted Contacts cannot view account details beyond what is provided in the specific notifications they are copied on.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Viknesh Raja",
      "age": 27,
      "bg": "Legal Associate",
      "emoji": "👨‍⚖️",
      "salutation": "Mr",
      "lastname": "Raja"
    }
  },
  {
    "q": "What should a member do if they cannot find a suitable Service Centre appointment within the next 2 weeks?",
    "choices": [
      {
        "text": "Wait for 2 weeks to book a slot for the following month.",
        "correct": false
      },
      {
        "text": "Use digital services, the hotline, or 'Write to Us' for assistance.",
        "correct": true
      },
      {
        "text": "Walk in to a Service Centre without an appointment.",
        "correct": false
      },
      {
        "text": "Email the CEO of CPF Board.",
        "correct": false
      }
    ],
    "explanation": "Members are encouraged to use digital services or the hotline if they need immediate assistance or cannot find a suitable appointment.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Peggy Lim",
      "age": 62,
      "bg": "Store Assistant",
      "emoji": "👩‍🏪",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "Once CPF Board receives a contribution from an employer, how long does it take to credit it to the member's account?",
    "choices": [
      {
        "text": "Immediately.",
        "correct": false
      },
      {
        "text": "Within 24 hours.",
        "correct": false
      },
      {
        "text": "Within three working days.",
        "correct": true
      },
      {
        "text": "7 working days.",
        "correct": false
      }
    ],
    "explanation": "Once payment is received, contributions are credited to the member's account within three working days.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Chong Wei Ming",
      "age": 30,
      "bg": "Logistics Coordinator",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Chong"
    }
  },
  {
    "q": "What is the reason CPF Board gives for not allowing bookings more than 2 weeks in advance?",
    "choices": [
      {
        "text": "System limitations on the website.",
        "correct": false
      },
      {
        "text": "To prevent missed appointments due to changing circumstances.",
        "correct": true
      },
      {
        "text": "Because they only release schedules on a fortnightly basis.",
        "correct": false
      },
      {
        "text": "To prioritize urgent cases over routine inquiries.",
        "correct": false
      }
    ],
    "explanation": "Booking too far in advance often leads to missed appointments when members' plans change, so the window is kept to 2 weeks.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Jessica Oh",
      "age": 34,
      "bg": "Event Planner",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Oh"
    }
  },
  {
    "q": "Can a foreign CPF member holding a FIN use the OneKey Token to log in to CPF digital services?",
    "choices": [
      {
        "text": "Yes, as long as it is still working.",
        "correct": false
      },
      {
        "text": "No, OneKey Token was discontinued on 1 April 2021.",
        "correct": true
      },
      {
        "text": "Only for viewing balances, not for transactions.",
        "correct": false
      },
      {
        "text": "Only if they are residing overseas.",
        "correct": false
      }
    ],
    "explanation": "OneKey Token was discontinued in April 2021. Foreign members with a FIN should use Singpass registered under their FIN.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Hans Muller",
      "age": 47,
      "bg": "Technical Engineer",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Muller"
    }
  },
  {
    "q": "Why must a member register contact details before they can update their bank account details?",
    "choices": [
      {
        "text": "To verify the member's residential address.",
        "correct": false
      },
      {
        "text": "To receive notifications that help prevent unauthorized bank updates.",
        "correct": true
      },
      {
        "text": "It is a requirement for the bank's KYC process.",
        "correct": false
      },
      {
        "text": "To allow the bank to contact the member for marketing purposes.",
        "correct": false
      }
    ],
    "explanation": "SMS or email notifications are sent for bank updates; registered contact details ensure the member is alerted to prevent unauthorized changes.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Patricia Koh",
      "age": 53,
      "bg": "Customer Service lead",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Koh"
    }
  },
  {
    "q": "A member's employer is in arrears but provides an explanation. What is the member's next recommended step if the response is unsatisfactory?",
    "choices": [
      {
        "text": "Stop going to work.",
        "correct": false
      },
      {
        "text": "Lodge a report with CPF Board.",
        "correct": true
      },
      {
        "text": "Deduct the amount from the company's petty cash.",
        "correct": false
      },
      {
        "text": "Sue the employer in the High Court immediately.",
        "correct": false
      }
    ],
    "explanation": "If an employer's response regarding late CPF contributions is unsatisfactory, the member should lodge a report with CPF Board.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Zulkifli Amin",
      "age": 26,
      "bg": "Technician",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Amin"
    }
  },
  {
    "q": "Where can a member find the instructional video on how to update bank account details?",
    "choices": [
      {
        "text": "On YouTube only.",
        "correct": false
      },
      {
        "text": "At the CPF Service Centre reception.",
        "correct": false
      },
      {
        "text": "Via my cpf digital services - Account settings.",
        "correct": true
      },
      {
        "text": "By calling the CPF hotline.",
        "correct": false
      }
    ],
    "explanation": "Instructional videos for updating bank details are available via the 'my cpf' digital services portal under Account settings.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Florence Ng",
      "age": 44,
      "bg": "Admin Assistant",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Ng"
    }
  },
  {
    "q": "Which of these allows a member to customize their view of contributions to specifically show 'Self-Employed Contributions'?",
    "choices": [
      {
        "text": "Yearly Statement of Account.",
        "correct": false
      },
      {
        "text": "CPF Transaction History filter.",
        "correct": true
      },
      {
        "text": "MediSave Claim History.",
        "correct": false
      },
      {
        "text": "Personal Particulars page.",
        "correct": false
      }
    ],
    "explanation": "The CPF Transaction History has a filter option that allows members to specifically view Employment, Platform, or Self-Employed contributions.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Steven Tiong",
      "age": 39,
      "bg": "Freelance Photographer",
      "emoji": "📸",
      "salutation": "Mr",
      "lastname": "Tiong"
    }
  },
  {
    "q": "Does a Trusted Contact receive a copy of a member's monthly contribution notifications?",
    "choices": [
      {
        "text": "Yes, every transaction is copied.",
        "correct": false
      },
      {
        "text": "No, only critical transactions or updates with high scam risk are copied.",
        "correct": true
      },
      {
        "text": "Only if the contribution is above $5,000.",
        "correct": false
      },
      {
        "text": "Yes, but only for members aged 65 and above.",
        "correct": false
      }
    ],
    "explanation": "Only critical transactions (withdrawals, bank updates) are copied to avoid overwhelming Trusted Contacts with routine notifications.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lily Chen",
      "age": 33,
      "bg": "Data Analyst",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Chen"
    }
  },
  {
    "q": "How can a member rescedule an appointment with a Customer Service Executive?",
    "choices": [
      {
        "text": "Call the hotline and wait for an operator.",
        "correct": false
      },
      {
        "text": "Go to 'Book an appointment' on the CPF website.",
        "correct": true
      },
      {
        "text": "Email the Service Centre manager.",
        "correct": false
      },
      {
        "text": "Book a new appointment; the old one will auto-cancel.",
        "correct": false
      }
    ],
    "explanation": "Members can check, reschedule, or cancel their sessions at the 'Book an appointment' section on the CPF website.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Bryan Heng",
      "age": 25,
      "bg": "Retail Associate",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Heng"
    }
  },
  {
    "q": "What identification is used for a foreign member's CPF issued account number if they do not have an NRIC?",
    "choices": [
      {
        "text": "Their Passport Number.",
        "correct": false
      },
      {
        "text": "A number starting with 'S' or 'T' followed by letters like 'A', 'B', or 'C'.",
        "correct": true
      },
      {
        "text": "Their Foreign Identification Number (FIN).",
        "correct": false
      },
      {
        "text": "A randomly generated 12-digit code.",
        "correct": false
      }
    ],
    "explanation": "Non-SC/PR members' account numbers often start with 'S' or 'T', followed by letters like 'A', 'B', 'C', 'D', or 'F'.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Rajesh Gupta",
      "age": 42,
      "bg": "IT Architect",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Gupta"
    }
  },
  {
    "q": "Under what circumstance will CPF Board notify a member to update their contact details specifically for bank updates?",
    "choices": [
      {
        "text": "Every 6 months as part of routine maintenance.",
        "correct": false
      },
      {
        "text": "When the member tries to update their bank account without having registered contact info.",
        "correct": true
      },
      {
        "text": "When the bank reports that the member's phone number is disconnected.",
        "correct": false
      },
      {
        "text": "When the member's Singpass password expires.",
        "correct": false
      }
    ],
    "explanation": "Members must have registered contact details to receive security notifications before they can successfully update bank account details.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Kimberly Tan",
      "age": 23,
      "bg": "Intern",
      "emoji": "👩‍🎓",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "Which platform can be used to view the Healthcare Payments and Claims statement for a child?",
    "choices": [
      {
        "text": "The parent's CPF Transaction History.",
        "correct": false
      },
      {
        "text": "The Child Dashboard.",
        "correct": true
      },
      {
        "text": "The HealthHub App only.",
        "correct": false
      },
      {
        "text": "A physical statement sent to the parent's address.",
        "correct": false
      }
    ],
    "explanation": "Parents can view their child's transaction and healthcare statements via the Child Dashboard on the CPF website.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Melissa Liew",
      "age": 35,
      "bg": "Staff Nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Liew"
    }
  },
  {
    "q": "What should a member do if they suspect their Singpass has been compromised?",
    "choices": [
      {
        "text": "Contact CPF Board to reset the Singpass.",
        "correct": false
      },
      {
        "text": "Contact the Singpass Helpdesk directly.",
        "correct": true
      },
      {
        "text": "Change their registered address with ICA.",
        "correct": false
      },
      {
        "text": "Delete the CPF Mobile app.",
        "correct": false
      }
    ],
    "explanation": "Singpass is managed by GovTech. Any issues, including suspected compromise, should be handled by the Singpass Helpdesk.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Ivan Seah",
      "age": 40,
      "bg": "Project Manager",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Seah"
    }
  },
  {
    "q": "How long is a Yearly Statement of Account (YSOA) available for download before it is removed from the portal?",
    "choices": [
      {
        "text": "5 years.",
        "correct": false
      },
      {
        "text": "10 years.",
        "correct": true
      },
      {
        "text": "2 years.",
        "correct": false
      },
      {
        "text": "Indefinitely.",
        "correct": false
      }
    ],
    "explanation": "CPF Board provides the Yearly Statement of Account for the past 10 years only.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Lim Hwee Hua",
      "age": 55,
      "bg": "Civil Servant",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "A member wants to add a Trusted Contact but their appointee is not a Singapore Citizen. Can they proceed?",
    "choices": [
      {
        "text": "No, both must be Singapore Citizens.",
        "correct": false
      },
      {
        "text": "Yes, as long as the appointee has an NRIC or FIN.",
        "correct": true
      },
      {
        "text": "Only if the appointee is a Permanent Resident.",
        "correct": false
      },
      {
        "text": "Yes, but they must visit a Service Centre in person to verify.",
        "correct": false
      }
    ],
    "explanation": "The form requires the appointee's NRIC/FIN, so as long as they have one, the appointment can be made.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Sarah Jenkins",
      "age": 43,
      "bg": "Expat Spouse",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Jenkins"
    }
  },
  {
    "q": "What happens if a member needs help with a HDB loan due to their employer defaulting on CPF contributions?",
    "choices": [
      {
        "text": "CPF Board will pay the HDB loan for them.",
        "correct": false
      },
      {
        "text": "They should contact HDB to explore alternative repayment options.",
        "correct": true
      },
      {
        "text": "The employer will be forced to sell the company to pay the loan.",
        "correct": false
      },
      {
        "text": "The member's Ordinary Account interest rate will be doubled.",
        "correct": false
      }
    ],
    "explanation": "If employer defaults affect loan repayments, members should contact HDB for alternative options.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Lee Wei Lung",
      "age": 37,
      "bg": "Production Worker",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "If a member selects 'PayNow NRIC-linked bank account' to update their details, what is the next step?",
    "choices": [
      {
        "text": "Visit an ATM to link the NRIC.",
        "correct": false
      },
      {
        "text": "Submit the form and wait 12 hours for the update.",
        "correct": true
      },
      {
        "text": "Call the bank to authorize the CPF Board.",
        "correct": false
      },
      {
        "text": "Mail a hardcopy form to CPF Board.",
        "correct": false
      }
    ],
    "explanation": "For PayNow NRIC-linked accounts, the member just needs to select the option and submit the form via 'my cpf' digital services.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Gloria Teo",
      "age": 29,
      "bg": "Public Relations",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Teo"
    }
  },
  {
    "q": "Can a Trusted Contact initiate a withdrawal on behalf of the member if the member is overseas?",
    "choices": [
      {
        "text": "Yes, if they have been appointed for more than 1 year.",
        "correct": false
      },
      {
        "text": "No, they cannot make transactions or change account settings.",
        "correct": true
      },
      {
        "text": "Only if the member provides a written authorization letter.",
        "correct": false
      },
      {
        "text": "Yes, but the withdrawal is capped at $5,000.",
        "correct": false
      }
    ],
    "explanation": "A Trusted Contact's role is strictly notification-based; they have no power to transact or change settings.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "James Tan",
      "age": 49,
      "bg": "Business Traveller",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "What is the primary way a member is notified when an appointment is successfully rescheduled?",
    "choices": [
      {
        "text": "A phone call from the Customer Service Executive.",
        "correct": false
      },
      {
        "text": "Via the 'Book an appointment' portal.",
        "correct": true
      },
      {
        "text": "A physical letter sent to the registered address.",
        "correct": false
      },
      {
        "text": "A newspaper announcement.",
        "correct": false
      }
    ],
    "explanation": "Members can check and confirm their appointment status directly through the online booking portal.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Shirley Koh",
      "age": 51,
      "bg": "Housewife",
      "emoji": "👩‍🍳",
      "salutation": "Mdm",
      "lastname": "Koh"
    }
  },
  {
    "q": "If an employer's contribution is delayed, where can a member find their CPF transaction history to check if it's been credited?",
    "choices": [
      {
        "text": "HealthHub App.",
        "correct": false
      },
      {
        "text": "CPF Mobile app or my cpf digital services.",
        "correct": true
      },
      {
        "text": "Any AXS machine.",
        "correct": false
      },
      {
        "text": "Their personal bank statement.",
        "correct": false
      }
    ],
    "explanation": "Members can check their transaction history via the CPF Mobile app or the CPF website.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Gary Lim",
      "age": 32,
      "bg": "Retail Supervisor",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Lim"
    }
  },
  {
    "q": "What authentication is required to update bank account details online?",
    "choices": [
      {
        "text": "Singpass login only.",
        "correct": false
      },
      {
        "text": "Singpass login and potentially enhanced authentication measures.",
        "correct": true
      },
      {
        "text": "An SMS OTP sent to the bank's registered number.",
        "correct": false
      },
      {
        "text": "A physical thumbprint scan at a Service Centre.",
        "correct": false
      }
    ],
    "explanation": "Updating bank details requires Singpass and may involve enhanced authentication (like face verification) for security.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Vivian Ong",
      "age": 46,
      "bg": "Financial Analyst",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Ong"
    }
  },
  {
    "q": "Why does CPF Board suggest that members should 'personally inform' their appointee about a Trusted Contact request?",
    "choices": [
      {
        "text": "Because the appointee must sign a physical consent form.",
        "correct": false
      },
      {
        "text": "To ensure they are aware of the role and respond before the request expires.",
        "correct": true
      },
      {
        "text": "It is a requirement for the police to verify the relationship.",
        "correct": false
      },
      {
        "text": "So that the appointee can prepare for a background check.",
        "correct": false
      }
    ],
    "explanation": "Personal communication ensures the appointee understands their role and accepts the request within the 7-day window.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Lawrence Ng",
      "age": 59,
      "bg": "Operations Manager",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Ng"
    }
  },
  {
    "q": "Which of these is NOT an example of a contribution record viewable in CPF Transaction History?",
    "choices": [
      {
        "text": "Platform Contributions.",
        "correct": false
      },
      {
        "text": "Self-Employed Contributions.",
        "correct": false
      },
      {
        "text": "Employment Contributions.",
        "correct": false
      },
      {
        "text": "Overseas Bank Interest.",
        "correct": true
      }
    ],
    "explanation": "CPF Transaction History covers CPF-related transactions; it does not track personal bank interest.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Nadia Zakaria",
      "age": 28,
      "bg": "Creative Director",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Zakaria"
    }
  },
  {
    "q": "What happens after the bank confirms that a new GIRO account belongs to the member during an update?",
    "choices": [
      {
        "text": "The account is activated immediately.",
        "correct": false
      },
      {
        "text": "It takes up to two working days for the account to be activated.",
        "correct": true
      },
      {
        "text": "The member must log in again to finalize the activation.",
        "correct": false
      },
      {
        "text": "A test deposit of $0.01 is made.",
        "correct": false
      }
    ],
    "explanation": "Once bank verification is complete, it takes up to two working days for the GIRO account to be fully activated in the CPF system.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Benjamin Koh",
      "age": 63,
      "bg": "Retired Teacher",
      "emoji": "👨‍🏫",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "How can a member verify their appointee has accepted a Trusted Contact request?",
    "choices": [
      {
        "text": "Check the appointee's phone for an SMS.",
        "correct": false
      },
      {
        "text": "Both the member and the appointee will be notified upon successful acceptance.",
        "correct": true
      },
      {
        "text": "Visit a CPF Service Centre to confirm.",
        "correct": false
      },
      {
        "text": "Call the Singpass helpdesk.",
        "correct": false
      }
    ],
    "explanation": "Both parties are notified once the appointee accepts the request, making the appointment official.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Rachel Liew",
      "age": 31,
      "bg": "Content Creator",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Liew"
    }
  },
  {
    "q": "If a member wants to download their contribution history for the last 5 years, which statement should they use?",
    "choices": [
      {
        "text": "Transaction History.",
        "correct": false
      },
      {
        "text": "Yearly Statement of Account.",
        "correct": true
      },
      {
        "text": "MediSave Statement.",
        "correct": false
      },
      {
        "text": "Investment History.",
        "correct": false
      }
    ],
    "explanation": "The Yearly Statement of Account covers the past 10 years, making it suitable for a 5-year history search.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Boon Heong",
      "age": 42,
      "bg": "Technician",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Can a Trusted Contact view critical notifications via the CPF Mobile app?",
    "choices": [
      {
        "text": "No, they only receive notifications via their own registered email and mobile number.",
        "correct": true
      },
      {
        "text": "Yes, they can log in to the member's profile on the app.",
        "correct": false
      },
      {
        "text": "Only if they have the member's Singpass password.",
        "correct": false
      },
      {
        "text": "Yes, there is a 'Trusted Contact' tab in the app.",
        "correct": false
      }
    ],
    "explanation": "Trusted Contacts receive a copy of the member's notifications via email/SMS; they do not get access to the member's app profile.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Lim Siew Hoon",
      "age": 57,
      "bg": "Admin Manager",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "What is the consequence for an employer who fails to pay CPF contributions by the 14th of the following month?",
    "choices": [
      {
        "text": "A warning letter for the first offense.",
        "correct": false
      },
      {
        "text": "Enforcement action, including late payment interest of 1.5% per month.",
        "correct": true
      },
      {
        "text": "Suspension of their business license.",
        "correct": false
      },
      {
        "text": "Mandatory community service for the business owner.",
        "correct": false
      }
    ],
    "explanation": "Late payment beyond the 14th triggers enforcement actions and a 1.5% monthly interest charge.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Derrick Wong",
      "age": 27,
      "bg": "Account Executive",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Wong"
    }
  },
  {
    "q": "By what date must an employer pay CPF contributions for wages earned in a given month?",
    "choices": [
      { "text": "By the last day of that same month.", "correct": false },
      { "text": "By the 7th of the following month.", "correct": false },
      { "text": "By the 14th of the following month (or next working day if it falls on a weekend or public holiday).", "correct": true },
      { "text": "By the 21st of the following month.", "correct": false }
    ],
    "explanation": "Employers must pay CPF contributions by the 14th of the following month (or next working day if that falls on a Saturday, Sunday or Public Holiday). Late payment incurs interest at 1.5% per month.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Rajan Pillai",
      "age": 34,
      "bg": "warehouse supervisor",
      "emoji": "👨‍🏭",
      "salutation": "Mr",
      "lastname": "Pillai"
    }
  },
  {
    "q": "After CPF Board receives an employer's contribution payment, how soon will the funds appear in a member's CPF accounts?",
    "choices": [
      { "text": "Immediately upon receipt.", "correct": false },
      { "text": "Within one working day.", "correct": false },
      { "text": "Within three working days.", "correct": true },
      { "text": "Within five working days.", "correct": false }
    ],
    "explanation": "Once CPF Board receives the employer's payment, contributions are credited to the member's CPF accounts within three working days, after which the amounts can be viewed via CPF transaction history using Singpass.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Lim Bee Hoon",
      "age": 29,
      "bg": "customer service associate",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Lim"
    }
  },
  {
    "q": "A member suspects her employer has not paid CPF contributions. She has already asked her employer for an explanation but received no satisfactory response. What is the correct next step?",
    "choices": [
      { "text": "Contact the Ministry of Manpower directly to file a salary dispute.", "correct": false },
      { "text": "Lodge a report with CPF Board.", "correct": true },
      { "text": "Wait another month before taking action.", "correct": false },
      { "text": "Engage a lawyer to send a formal demand letter to the employer.", "correct": false }
    ],
    "explanation": "If your employer does not provide a satisfactory response about unpaid CPF contributions, the next step is to lodge a report with CPF Board. The Board takes a serious view of employers who default on contributions.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Nurul Ain",
      "age": 27,
      "bg": "retail assistant",
      "emoji": "👩‍🦱",
      "salutation": "Ms",
      "lastname": "Ain"
    }
  },
  {
    "q": "What is the late payment interest rate charged to employers who pay CPF contributions after the due date?",
    "choices": [
      { "text": "0.5% per month", "correct": false },
      { "text": "1.0% per month", "correct": false },
      { "text": "1.5% per month", "correct": true },
      { "text": "2.0% per month", "correct": false }
    ],
    "explanation": "Employers who pay CPF contributions after the 14th of the following month may incur late payment interest charged at 1.5% per month, commencing from the first day after the due date.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "David Ong",
      "age": 41,
      "bg": "small business owner",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Ong"
    }
  },
  {
    "q": "How many months of CPF transaction history can a member access in real time through CPF Transaction History?",
    "choices": [
      { "text": "6 months", "correct": false },
      { "text": "12 months", "correct": false },
      { "text": "15 months", "correct": true },
      { "text": "24 months", "correct": false }
    ],
    "explanation": "CPF Transaction History provides a record of transactions — including contributions, withdrawals, and transfers — for the latest 15 months. For records beyond 15 months, members can refer to their Yearly Statement of Account.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Suresh Nair",
      "age": 52,
      "bg": "secondary school teacher",
      "emoji": "👨‍🏫",
      "salutation": "Mr",
      "lastname": "Nair"
    }
  },
  {
    "q": "A member wants CPF transaction records going back 8 years. Which source should they consult?",
    "choices": [
      { "text": "CPF Transaction History on the Mobile app, which stores unlimited history.", "correct": false },
      { "text": "The Yearly Statement of Account, which covers up to the past 10 years.", "correct": true },
      { "text": "Write to CPF Board to request a special historical report.", "correct": false },
      { "text": "Visit a CPF Service Centre to obtain a printed record.", "correct": false }
    ],
    "explanation": "For records beyond 15 months, members should refer to their Yearly Statement of Account, which covers up to the past 10 years. CPF Board does not provide records beyond 10 years.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Chan Wai Keng",
      "age": 58,
      "bg": "logistics manager",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Chan"
    }
  },
  {
    "q": "A member notices a discrepancy in her CPF statement. What should she do?",
    "choices": [
      { "text": "Wait for the next monthly statement to see if it corrects itself.", "correct": false },
      { "text": "Call her employer to demand a correction.", "correct": false },
      { "text": "Notify CPF Board immediately via Write to Us.", "correct": true },
      { "text": "Visit a Service Centre with her payslips within 30 days.", "correct": false }
    ],
    "explanation": "Members who believe their CPF statement information is incorrect should notify CPF Board immediately via Write to Us. Members are also responsible for carefully reviewing their statements and downloading them in a timely manner.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Patricia Fernandez",
      "age": 38,
      "bg": "accountant",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Fernandez"
    }
  },
  {
    "q": "A member receives an email from CPF Board asking them to view their transactions. How should they verify the email is legitimate?",
    "choices": [
      { "text": "Click the link in the email and proceed if the CPF logo is shown.", "correct": false },
      { "text": "Check that the sender's email domain is from a recognised CPF Board address and do not click any links if unsure.", "correct": true },
      { "text": "Forward the email to a friend to check its legitimacy.", "correct": false },
      { "text": "Reply to the email to request confirmation from CPF Board.", "correct": false }
    ],
    "explanation": "To verify legitimacy, members should ensure the sender's email address is from a recognised CPF Board domain. Monthly notifications are sent to members with registered email addresses to remind them to review transactions. Members should not click links if they are unsure.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Goh Ah Mui",
      "age": 63,
      "bg": "retired hawker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Goh"
    }
  },
  {
    "q": "Who can view a child's CPF Transaction History statement online?",
    "choices": [
      { "text": "Any adult relative with Singpass access.", "correct": false },
      { "text": "A Singapore Citizen or PR parent whose child is below 21 and has received CPF contributions.", "correct": true },
      { "text": "Any parent, regardless of citizenship, if the child has a CPF account.", "correct": false },
      { "text": "Only the child themselves once they turn 18.", "correct": false }
    ],
    "explanation": "A parent can view their child's Transaction History (and Healthcare Payments statement if applicable) for the last 15 months if both parent and child are Singapore Citizens or PRs, and the child is below 21 and has received CPF contributions.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Mei Ling",
      "age": 44,
      "bg": "nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member updates their mobile number with Singpass. Will CPF Board automatically reflect this new number?",
    "choices": [
      { "text": "Yes, Singpass and CPF Board contact details are automatically synced.", "correct": false },
      { "text": "Yes, but only after a 12-hour cooling period.", "correct": false },
      { "text": "No, the member must separately update their contact details via CPF's Account settings.", "correct": true },
      { "text": "No, the member must visit a Service Centre to update their CPF contact details.", "correct": false }
    ],
    "explanation": "Updates to Singpass mobile number and email address are NOT automatically updated with CPF Board. Members must separately update their mobile number and/or email address via my cpf digital services – Account settings with their Singpass.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Kevin Lee",
      "age": 23,
      "bg": "fresh graduate, junior analyst",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Lee"
    }
  },
  {
    "q": "After a member submits a change to their contact details, they want to make another change while the first is still in the 12-hour cooling period. Is this possible?",
    "choices": [
      { "text": "No, they must wait for the 12-hour cooling period to end before submitting new changes.", "correct": false },
      { "text": "Yes, and the most recent request will supersede the previous submission.", "correct": true },
      { "text": "Yes, but both changes will be processed simultaneously after the original cooling period.", "correct": false },
      { "text": "No, only one contact detail change is allowed per day.", "correct": false }
    ],
    "explanation": "Members can submit further changes to their contact details via Account settings even during the 12-hour cooling period. The most recent request will supersede the previous submission and take effect after the cooling period.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Sharifah Zahra",
      "age": 31,
      "bg": "marketing executive",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Zahra"
    }
  },
  {
    "q": "How should a member update their registered bank account with CPF Board to receive CPF payouts?",
    "choices": [
      { "text": "Call the CPF hotline and provide bank details verbally.", "correct": false },
      { "text": "Mail a completed form to CPF Board with a bank statement.", "correct": false },
      { "text": "Update via my cpf digital services – Account settings with Singpass.", "correct": true },
      { "text": "Visit a Service Centre with their bank passbook and NRIC.", "correct": false }
    ],
    "explanation": "Members can update their registered bank account details via my cpf digital services – Account settings with their Singpass, to receive payments such as CPF savings withdrawals and monthly payouts.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Ismail Hussain",
      "age": 60,
      "bg": "retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Hussain"
    }
  },
  {
    "q": "A member has a pending withdrawal and wants to update their bank account at the same time. What is the recommended approach?",
    "choices": [
      { "text": "Update the bank account first, then submit the withdrawal application.", "correct": false },
      { "text": "Update the bank account and submit the withdrawal simultaneously.", "correct": false },
      { "text": "Submit the withdrawal first and update the bank account after the withdrawal is complete.", "correct": true },
      { "text": "Contact CPF Board to process both changes at the same time.", "correct": false }
    ],
    "explanation": "If a member has a pending withdrawal, they should update their bank account after the withdrawal is complete, to enable successful processing of the withdrawal application and avoid disruption.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Ho Siew Cheng",
      "age": 55,
      "bg": "semi-retired seamstress",
      "emoji": "👩‍🦳",
      "salutation": "Mdm",
      "lastname": "Ho"
    }
  },
  {
    "q": "Why must a member update their contact details before updating their bank account with CPF Board?",
    "choices": [
      { "text": "CPF Board uses contact details to verify your employment status.", "correct": false },
      { "text": "Notifications are sent via SMS or email whenever bank account details are updated, so contact details must be on record.", "correct": true },
      { "text": "Contact details are needed to generate a new bank account verification code.", "correct": false },
      { "text": "It is required for identity verification when visiting the Service Centre.", "correct": false }
    ],
    "explanation": "Notifications via SMS or email are sent whenever bank account details are updated. Members must have registered contact details to receive these notifications, which help prevent unauthorised updates.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Vijayalakshmi Menon",
      "age": 47,
      "bg": "financial analyst",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Menon"
    }
  },
  {
    "q": "How far in advance can a member book an appointment at a CPF Service Centre?",
    "choices": [
      { "text": "1 week in advance", "correct": false },
      { "text": "2 weeks in advance", "correct": true },
      { "text": "1 month in advance", "correct": false },
      { "text": "3 months in advance", "correct": false }
    ],
    "explanation": "Service Centre appointment bookings are opened 2 weeks in advance. This window is designed to meet the needs of most members while ensuring Customer Service Officers remain accessible.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Muhammad Hafiz",
      "age": 35,
      "bg": "IT technician",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Hafiz"
    }
  },
  {
    "q": "A member wants to handle employer-related CPF matters. Which channels are available to them?",
    "choices": [
      { "text": "They may visit any CPF Service Centre in person.", "correct": false },
      { "text": "They can use digital services, the CPF hotline, or Write to Us.", "correct": true },
      { "text": "They can only use digital services.", "correct": false },
      { "text": "They must write a letter to CPF Board headquarters.", "correct": false }
    ],
    "explanation": "Services for employer or self-employed matters are only available through CPF's digital services, the hotline, or Write to Us. These matters cannot be handled by visiting a Service Centre in person.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Agnes Toh",
      "age": 39,
      "bg": "HR manager, small company",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Toh"
    }
  },
  {
    "q": "A member has renounced her Singapore Citizenship and can no longer use Singpass. How does she access her CPF statement?",
    "choices": [
      { "text": "She can still log in using her old NRIC number and password.", "correct": false },
      { "text": "She must visit a CPF Service Centre with her foreign passport.", "correct": false },
      { "text": "She should write to CPF Board for CPF-related assistance and contact the Singpass Helpdesk for eligibility.", "correct": true },
      { "text": "She should contact the Immigration and Checkpoints Authority to restore Singpass access.", "correct": false }
    ],
    "explanation": "Members who have renounced citizenship should write to CPF Board for CPF-related assistance. They should also contact the Singpass Helpdesk directly to find out which groups of users are eligible to apply for Singpass.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Chua Li Fen",
      "age": 42,
      "bg": "former Singapore citizen living abroad",
      "emoji": "✈️",
      "salutation": "Ms",
      "lastname": "Chua"
    }
  },
  {
    "q": "A foreign CPF member holds a CPF-issued account number (e.g. SA987654C). Can they still log in to CPF digital services using their old Singpass registered under this number?",
    "choices": [
      { "text": "Yes, the old Singpass login with the CPF-issued account number is still fully valid.", "correct": false },
      { "text": "No, since the OneKey Token was discontinued, they must use a Singpass registered under their FIN instead.", "correct": true },
      { "text": "Yes, but only for read-only access to statements.", "correct": false },
      { "text": "No, foreign CPF members are no longer allowed to access digital services at all.", "correct": false }
    ],
    "explanation": "With the discontinuation of the OneKey Token from 1 April 2021, foreign CPF members can no longer access CPF digital services using Singpass registered under their CPF-issued account numbers. They must use a Singpass registered under their FIN.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Wang Jianming",
      "age": 48,
      "bg": "foreign national working in Singapore",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Wang"
    }
  },
  {
    "q": "What is the primary purpose of the Trusted Contact notification service?",
    "choices": [
      { "text": "To allow a trusted person to manage your CPF account on your behalf.", "correct": false },
      { "text": "To appoint someone to receive copies of your notifications when important CPF transactions occur, as an extra layer of security.", "correct": true },
      { "text": "To give a family member full view of your CPF account balances and statements.", "correct": false },
      { "text": "To nominate someone to receive your CPF savings upon your death.", "correct": false }
    ],
    "explanation": "The Trusted Contact notification service lets you appoint a trusted individual to receive copies of your notifications whenever important transactions or updates occur in your CPF account — providing an extra layer of scrutiny against scams.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Ng Swee Lan",
      "age": 66,
      "bg": "retiree, former cleaner",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Ng"
    }
  },
  {
    "q": "What can a Trusted Contact do with a CPF member's account?",
    "choices": [
      { "text": "View balances, make withdrawals, and update bank account details on the member's behalf.", "correct": false },
      { "text": "View balances only, but cannot make transactions.", "correct": false },
      { "text": "Receive copies of the member's transaction notifications and alert the member to unusual activity.", "correct": true },
      { "text": "Override suspicious transactions to protect the member's savings.", "correct": false }
    ],
    "explanation": "A Trusted Contact's role is strictly limited to receiving copies of the member's transaction notifications and alerting the member when they notice unusual or unexpected activities. They cannot view balances, make transactions, or change account settings.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Alan Koh",
      "age": 30,
      "bg": "software engineer",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "Which CPF transactions trigger a notification that is copied to the Trusted Contact?",
    "choices": [
      { "text": "All CPF transactions including interest crediting and Medisave usage.", "correct": false },
      { "text": "CPF lump sum withdrawals, contact details updates, bank account updates, and daily withdrawal limit updates.", "correct": true },
      { "text": "Only CPF investment transactions and housing withdrawals.", "correct": false },
      { "text": "Only bank account updates and daily withdrawal limit changes.", "correct": false }
    ],
    "explanation": "The Trusted Contact service copies notifications for four specific transactions: CPF lump sum withdrawals for immediate retirement needs, contact details updates, bank account updates, and daily withdrawal limit updates. Only these critical transactions are covered.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Priya Devi",
      "age": 62,
      "bg": "homemaker",
      "emoji": "👩‍🦳",
      "salutation": "Mdm",
      "lastname": "Devi"
    }
  },
  {
    "q": "How long does a Trusted Contact appointment remain valid?",
    "choices": [
      { "text": "One year, after which it must be renewed.", "correct": false },
      { "text": "Until the CPF member turns 65.", "correct": false },
      { "text": "Indefinitely, until either party terminates it or can no longer use the service (e.g. upon demise).", "correct": true },
      { "text": "Five years, after which the member must resubmit an appointment.", "correct": false }
    ],
    "explanation": "Trusted Contact appointments remain valid until either the member or the Trusted Contact terminates the arrangement. CPF Board will also remove the appointment when either party can no longer use the service, such as upon demise.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Tan Boon Huat",
      "age": 56,
      "bg": "property agent",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Can a Trusted Contact be held accountable if they fail to alert the member to suspicious CPF transactions?",
    "choices": [
      { "text": "Yes, the Trusted Contact is legally obligated to act and can be fined for negligence.", "correct": false },
      { "text": "Yes, if they acknowledged the notification but did not respond within 24 hours.", "correct": false },
      { "text": "No, the role is voluntary and they cannot be held accountable for inaction.", "correct": true },
      { "text": "No, but CPF Board will remove them as Trusted Contact after a missed alert.", "correct": false }
    ],
    "explanation": "Although Trusted Contacts receive copies of transaction notifications, the role is voluntary. They cannot be held accountable if they do not alert the member to unusual activities. The member remains responsible for all activities on their CPF account.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Soh Wee Teck",
      "age": 49,
      "bg": "compliance officer",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Soh"
    }
  },
  {
    "q": "What happens to a member's Trusted Contact appointment if the member loses mental capacity?",
    "choices": [
      { "text": "The appointment is automatically revoked and the Deputy must reappoint.", "correct": false },
      { "text": "The appointment remains valid; CPF Board upholds decisions made before the loss of capacity.", "correct": true },
      { "text": "The appointment is suspended until a Court order is obtained.", "correct": false },
      { "text": "The Trusted Contact assumes full management of the CPF account.", "correct": false }
    ],
    "explanation": "A Trusted Contact appointment is not affected when a member loses mental capacity. CPF Board upholds decisions made by members prior to their loss of mental capacity. A Deputy or Donee may apply to remove the Trusted Contact on the member's behalf if necessary.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Lena Wijaya",
      "age": 53,
      "bg": "social worker",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Wijaya"
    }
  },
  {
    "q": "A member wants to appoint a new Trusted Contact but has already reached the limit. What must they do first?",
    "choices": [
      { "text": "Write to CPF Board requesting an exception to the limit.", "correct": false },
      { "text": "Remove one of their existing Trusted Contacts before appointing a new one.", "correct": true },
      { "text": "Wait for one of the existing Trusted Contact appointments to expire.", "correct": false },
      { "text": "Submit an appeal at a CPF Service Centre with valid reasons.", "correct": false }
    ],
    "explanation": "Members may appoint up to two Trusted Contacts. To appoint a new one after reaching the limit, a member must first remove one of their existing Trusted Contacts before submitting a new appointment request.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Raymond Seah",
      "age": 45,
      "bg": "operations manager",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Seah"
    }
  },
  {
    "q": "Can a CPF member appoint someone who lives overseas as their Trusted Contact?",
    "choices": [
      { "text": "No, the Trusted Contact must be based in Singapore.", "correct": false },
      { "text": "Yes, as long as the appointee meets the eligibility criteria including being a Singapore Citizen or PR with a Singpass account.", "correct": true },
      { "text": "Yes, but only if the member visits a CPF Service Centre to complete the appointment in person.", "correct": false },
      { "text": "No, the Trusted Contact must have a Singapore-registered address.", "correct": false }
    ],
    "explanation": "A member may appoint a Trusted Contact who is not based in Singapore, as long as they meet the eligibility criteria: being a CPF member aged 21 or above, a Singapore Citizen or PR with Singpass, and having both a Singapore-registered mobile number and email address registered with CPF Board.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Grace Quek",
      "age": 37,
      "bg": "banker",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Quek"
    }
  },
  {
    "q": "How long does an appointee have to accept a Trusted Contact appointment request before it expires?",
    "choices": [
      { "text": "3 days", "correct": false },
      { "text": "7 days", "correct": true },
      { "text": "14 days", "correct": false },
      { "text": "30 days", "correct": false }
    ],
    "explanation": "The appointee has seven days to respond to the Trusted Contact appointment request. After seven days, the request automatically expires and the member must submit a new appointment request.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Faridah Osman",
      "age": 58,
      "bg": "former nurse, semi-retired",
      "emoji": "👩‍⚕️",
      "salutation": "Mdm",
      "lastname": "Osman"
    }
  },
  {
    "q": "How can a member differentiate a Trusted Contact notification from a personal CPF account notification?",
    "choices": [
      { "text": "Trusted Contact notifications are only delivered via postal mail.", "correct": false },
      { "text": "Trusted Contact SMS notifications begin with '(To Trusted Contact)' and emails state 'You are receiving this as an appointed Trusted Contact'.", "correct": true },
      { "text": "Trusted Contact notifications are delivered from a separate CPF email address.", "correct": false },
      { "text": "There is no difference; the member must check account settings to determine which notifications they are receiving.", "correct": false }
    ],
    "explanation": "Trusted Contact SMS notifications begin with '(To Trusted Contact)'. Emails contain the phrase 'You are receiving this notification as an appointed Trusted Contact'. Push notifications via the CPF Mobile app also contain the appointer's name to make the distinction clear.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Bernard Yap",
      "age": 43,
      "bg": "accountant",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Yap"
    }
  },
  {
    "q": "A member wants to remove an existing Trusted Contact but the removal fails because the Trusted Contact's contact details are incomplete. What should the member do?",
    "choices": [
      { "text": "Contact CPF Board by phone and request a forced removal.", "correct": false },
      { "text": "Inform the Trusted Contact to update their contact details with CPF Board, then try removing again.", "correct": true },
      { "text": "Submit a police report to force the removal.", "correct": false },
      { "text": "Wait 30 days; the appointment will automatically expire.", "correct": false }
    ],
    "explanation": "If removal fails because the Trusted Contact's contact details are incomplete, the member should inform the Trusted Contact to update both a Singapore-registered mobile number and email address with CPF Board. Once updated, the member can proceed to remove via the e-form. If not possible, the member can write to CPF Board via Singpass.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Zainudin Rashid",
      "age": 50,
      "bg": "retired army officer",
      "emoji": "👨‍🦳",
      "salutation": "Mr",
      "lastname": "Rashid"
    }
  },
  {
    "q": "Why does CPF Board only notify Trusted Contacts about critical transactions like withdrawals and bank account changes, and not all CPF transactions?",
    "choices": [
      { "text": "Because the Trusted Contact system only processes text messages and has limited storage capacity.", "correct": false },
      { "text": "To avoid overwhelming Trusted Contacts with less critical notifications, while still alerting them to transactions that pose higher scam risk.", "correct": true },
      { "text": "Because most CPF transactions are confidential and cannot be shared with third parties.", "correct": false },
      { "text": "To comply with data protection laws that restrict sharing transaction data.", "correct": false }
    ],
    "explanation": "Only critical transactions or updates that expose an account to higher scam risk — such as withdrawals or bank account changes — are copied to Trusted Contacts. This prevents overwhelming them with less critical notifications while ensuring they are alerted when it matters most.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Sylvia Chong",
      "age": 36,
      "bg": "cybersecurity analyst",
      "emoji": "👩‍💻",
      "salutation": "Ms",
      "lastname": "Chong"
    }
  },
  {
    "q": "How does the Trusted Contact notification service differ from CPF Nomination?",
    "choices": [
      { "text": "They are the same service with different names.", "correct": false },
      { "text": "Trusted Contact is for monitoring transactions during your lifetime; CPF Nomination distributes your CPF savings after your death.", "correct": true },
      { "text": "CPF Nomination allows a contact to manage your account; Trusted Contact only receives notifications.", "correct": false },
      { "text": "Trusted Contact is only for members above 55; CPF Nomination is for all ages.", "correct": false }
    ],
    "explanation": "These are two separate services. The Trusted Contact service lets a trusted individual receive transaction notifications to help protect your account during your lifetime. CPF Nomination allows you to specify who will receive your CPF savings after your death.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Hartono Susanto",
      "age": 61,
      "bg": "retired engineer",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Susanto"
    }
  },
  {
    "q": "A member has submitted a Trusted Contact appointment request. How will the appointee be notified?",
    "choices": [
      { "text": "The member must personally inform the appointee; CPF Board does not send any notification.", "correct": false },
      { "text": "CPF Board will send a notification via email, SMS, and push notification via the CPF Mobile app (if enabled).", "correct": true },
      { "text": "A physical letter will be mailed to the appointee's registered address.", "correct": false },
      { "text": "The appointee will only be informed after they log in to CPF digital services.", "correct": false }
    ],
    "explanation": "CPF Board will notify the appointee via email, SMS, and push notifications via the CPF Mobile app (if enabled). However, members are strongly encouraged to also personally inform their appointee beforehand to ensure they are aware and understand their role.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Nur Hidayah",
      "age": 25,
      "bg": "fresh graduate, administrative executive",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Hidayah"
    }
  },
  {
    "q": "A member's employer consistently pays CPF contributions on the 20th of the following month. What consequence does the employer face?",
    "choices": [
      { "text": "The employer faces no consequence as long as contributions are paid within the same calendar month.", "correct": false },
      { "text": "The employer may incur late payment interest charged at 1.5% per month from the first day after the due date.", "correct": true },
      { "text": "The employer receives a written warning only on the first offence.", "correct": false },
      { "text": "CPF Board will automatically deduct the contributions directly from the employer's bank account.", "correct": false }
    ],
    "explanation": "The due date for CPF contributions is the 14th of the following month (or next working day if it falls on a weekend or public holiday). Employers who pay after this incur late payment interest at 1.5% per month, commencing from the first day after the due date.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Derek Phua",
      "age": 43,
      "bg": "payroll executive",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Phua"
    }
  },
  {
    "q": "Through which platforms can a CPF member access their Transaction History?",
    "choices": [
      { "text": "Only through the CPF Mobile app.", "correct": false },
      { "text": "Only through my cpf digital services on a web browser.", "correct": false },
      { "text": "Through either the CPF Mobile app or my cpf digital services.", "correct": true },
      { "text": "Through any Singapore government digital service portal.", "correct": false }
    ],
    "explanation": "Members can access their CPF Transaction History through either the CPF Mobile app or my cpf digital services. Both platforms allow members to view and filter contributions and other transactions.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Jasmine Kwa",
      "age": 26,
      "bg": "junior graphic designer",
      "emoji": "👩‍🎨",
      "salutation": "Ms",
      "lastname": "Kwa"
    }
  },
  {
    "q": "How does a member generate a monthly CPF transaction statement for January 2026 specifically?",
    "choices": [
      { "text": "Select 'January 2026' as the start month and 'December 2026' as the end month.", "correct": false },
      { "text": "Enter 'January 2026' for both the start and end month in Transaction History.", "correct": true },
      { "text": "Click the 'Monthly Statement' button and select January from a dropdown.", "correct": false },
      { "text": "Download the full yearly statement and filter by month.", "correct": false }
    ],
    "explanation": "To obtain a statement for a specific month, members enter the same month for both the start and end month in Transaction History. For example, to get January 2026, they select 'Jan 2026' for both start and end month.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Tan Chee Wah",
      "age": 33,
      "bg": "financial planner",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member wants to save or download their CPF Transaction History statement. What should they click?",
    "choices": [
      { "text": "The 'Export' button at the bottom of the page.", "correct": false },
      { "text": "The PDF icon on the top right corner of the Transaction History page.", "correct": true },
      { "text": "The 'Share' button and select 'Save to Files'.", "correct": false },
      { "text": "Right-click the page and select 'Save as PDF'.", "correct": false }
    ],
    "explanation": "To save or download their monthly transaction statement, members click the PDF icon on the top right corner of the Transaction History page.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Siti Noraini",
      "age": 39,
      "bg": "kindergarten teacher",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Noraini"
    }
  },
  {
    "q": "What is the maximum number of years of CPF records that a member can retrieve via the Yearly Statement of Account?",
    "choices": [
      { "text": "5 years", "correct": false },
      { "text": "7 years", "correct": false },
      { "text": "10 years", "correct": true },
      { "text": "15 years", "correct": false }
    ],
    "explanation": "The Yearly Statement of Account covers up to the past 10 years. CPF Board does not provide the service of retrieving CPF statements beyond the past 10 years, so members are responsible for downloading their statements in a timely manner.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Ho Kin Fatt",
      "age": 57,
      "bg": "retired technician",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Ho"
    }
  },
  {
    "q": "A parent wants to view their child's CPF Transaction History but the child has never received CPF contributions. Can the parent access the statement?",
    "choices": [
      { "text": "Yes, the parent can access it as long as the child is below 21.", "correct": false },
      { "text": "Yes, any parent with Singpass can access their child's statement.", "correct": false },
      { "text": "No, the child must have received CPF contributions for the statement to be accessible.", "correct": true },
      { "text": "No, children below 18 have no accessible CPF records.", "correct": false }
    ],
    "explanation": "A parent can only view their child's Transaction History if the child is below 21 AND has received CPF contributions. If the child has never received contributions, there is no transaction history to access.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Rachel Sim",
      "age": 40,
      "bg": "paediatrician",
      "emoji": "👩‍⚕️",
      "salutation": "Dr",
      "lastname": "Sim"
    }
  },
  {
    "q": "A member is granted sole custody of her child after a divorce and wants to remove her ex-spouse's access to the child's CPF statement. What must she provide?",
    "choices": [
      { "text": "A statutory declaration signed by a notary public.", "correct": false },
      { "text": "A written request via Write to Us along with the Court Order as a supporting document.", "correct": true },
      { "text": "A letter from her lawyer confirming the custody arrangement.", "correct": false },
      { "text": "She cannot remove ex-spouse access; both parents retain access automatically.", "correct": false }
    ],
    "explanation": "A member with sole custody can write to CPF Board via Singpass using Write to Us and attach the Court Order as a supporting document to request removal of the ex-spouse's access to the child's CPF statement.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Lim Siew Hua",
      "age": 37,
      "bg": "legal secretary",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "Why is it important for a CPF member to keep their contact details updated with CPF Board?",
    "choices": [
      { "text": "So that CPF Board can send promotional newsletters about new schemes.", "correct": false },
      { "text": "Because notifications are sent for transactions and CPF Board may contact the member for additional verification checks.", "correct": true },
      { "text": "To ensure the member can receive physical letters about yearly interest.", "correct": false },
      { "text": "It is optional and only required if the member is above 55.", "correct": false }
    ],
    "explanation": "Notifications are sent whenever a member makes a transaction. CPF Board may also contact the member to perform verification checks on transactions for added security. Keeping contact details updated ensures the member receives these important communications.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Muhd Ariffin",
      "age": 28,
      "bg": "operations executive",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Ariffin"
    }
  },
  {
    "q": "How long does it typically take for a bank account update via Interbank GIRO to be activated after submission?",
    "choices": [
      { "text": "Immediately upon submission.", "correct": false },
      { "text": "After 12 hours.", "correct": false },
      { "text": "Up to two working days after the bank confirms account ownership.", "correct": true },
      { "text": "Between 5 and 7 working days.", "correct": false }
    ],
    "explanation": "For Interbank GIRO, the bank account update generally takes up to two working days to be activated after the bank confirms that the bank account belongs to the member. PayNow updates take effect after 12 hours.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Ganesan Pillai",
      "age": 51,
      "bg": "senior accountant",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Pillai"
    }
  },
  {
    "q": "A member links her bank account via PayNow NRIC. When will the update take effect?",
    "choices": [
      { "text": "Immediately upon clicking submit.", "correct": false },
      { "text": "After 12 hours.", "correct": true },
      { "text": "After the bank confirms account ownership, usually 2 working days.", "correct": false },
      { "text": "After a 24-hour cooling period.", "correct": false }
    ],
    "explanation": "For PayNow NRIC-linked bank accounts, the update takes effect after 12 hours. This is different from Interbank GIRO which takes up to two working days.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Cheryl Foo",
      "age": 31,
      "bg": "marketing manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Foo"
    }
  },
  {
    "q": "Where does a member navigate to update their bank account details on the CPF website?",
    "choices": [
      { "text": "'My Dashboard' > 'Financial Settings' > 'Bank Account'.", "correct": false },
      { "text": "'Account services' > 'Your account information' > 'Update account settings', then click the 'Bank account' tab.", "correct": true },
      { "text": "'My Profile' > 'Payment Details' > 'Edit'.", "correct": false },
      { "text": "'Transactions' > 'Withdrawal Settings' > 'Bank Account'.", "correct": false }
    ],
    "explanation": "On the CPF website, members navigate to 'Account services' > 'Your account information' > 'Update account settings', then click the 'Bank account' tab and click 'Update'.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Andy Leong",
      "age": 44,
      "bg": "IT manager",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Leong"
    }
  },
  {
    "q": "Why does CPF Board limit Service Centre appointment bookings to a 2-week window?",
    "choices": [
      { "text": "Because the Service Centre system can only store two weeks of bookings at a time.", "correct": false },
      { "text": "To prevent members from booking multiple appointments simultaneously.", "correct": false },
      { "text": "To reduce missed appointments from changing circumstances and to ensure Customer Service Officers remain accessible.", "correct": true },
      { "text": "To comply with government regulations on public service capacity.", "correct": false }
    ],
    "explanation": "The 2-week booking window is based on CPF Board's experience that it meets the needs of most members. Booking too far in advance can lead to missed appointments when circumstances change. It also ensures Customer Service Officers remain accessible to members needing assistance.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Wong Mei Fong",
      "age": 48,
      "bg": "administrator",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Wong"
    }
  },
  {
    "q": "What is the primary function of the CPF website (cpf.gov.sg)?",
    "choices": [
      { "text": "To allow members to invest their CPF savings in stocks and unit trusts.", "correct": false },
      { "text": "To provide information on CPF schemes and services, latest news, and access to my cpf digital services for transactions.", "correct": true },
      { "text": "To process employer CPF contribution submissions only.", "correct": false },
      { "text": "To display a member's Central Provident Fund balance in real time.", "correct": false }
    ],
    "explanation": "The CPF website (cpf.gov.sg) gives quick access to information on CPF schemes and services, and the latest CPF news. Members can also perform CPF transactions such as accessing their account information and transacting online through my cpf digital services.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Poh Ah Seng",
      "age": 70,
      "bg": "retired coffeeshop owner",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Poh"
    }
  },
  {
    "q": "A member needs to check or reschedule an existing CPF appointment. How do they do this?",
    "choices": [
      { "text": "Call the CPF hotline and request the officer to check the appointment.", "correct": false },
      { "text": "Visit Book an Appointment on the CPF website.", "correct": true },
      { "text": "Email CPF Board with their NRIC and appointment details.", "correct": false },
      { "text": "Log in to Singpass and check the inbox for appointment confirmation.", "correct": false }
    ],
    "explanation": "Members who need to check, reschedule, or cancel an appointment with a Customer Service Executive can do so at 'Book an appointment' on the CPF website.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Norhaslinda Karim",
      "age": 36,
      "bg": "customer relations officer",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Karim"
    }
  },
  {
    "q": "How does a member set up their Singpass Two-Factor Authentication (2FA)?",
    "choices": [
      { "text": "Visit a CPF Service Centre with their NRIC and request 2FA setup.", "correct": false },
      { "text": "Follow the steps in the instructional guide on the Singpass website.", "correct": true },
      { "text": "Call the CPF hotline to activate 2FA over the phone.", "correct": false },
      { "text": "Download the CPF Mobile app and complete identity verification within the app.", "correct": false }
    ],
    "explanation": "To set up Singpass 2FA, members should follow the steps in the instructional guide on the Singpass website. For further assistance, members should contact the Singpass Helpdesk directly.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Tan Wei Jie",
      "age": 22,
      "bg": "polytechnic student on internship",
      "emoji": "🧑‍💼",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "Where can a member go to reset their Singpass password online?",
    "choices": [
      { "text": "Log in to my cpf digital services and navigate to 'Security Settings'.", "correct": false },
      { "text": "Visit the Singpass website, select 'Log in', then select 'Reset password' under the 'Services' tab.", "correct": true },
      { "text": "Visit a CPF Service Centre with their NRIC for a password reset.", "correct": false },
      { "text": "Call the CPF hotline and request a temporary password.", "correct": false }
    ],
    "explanation": "To change or reset a Singpass password online, members visit the Singpass website, select 'Log in', then select 'Reset password' under the 'Services' tab and follow the instructions provided.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Ling Hui Min",
      "age": 30,
      "bg": "pharmacy assistant",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Ling"
    }
  },
  {
    "q": "A FIN holder wants to access CPF digital services. How do they log in?",
    "choices": [
      { "text": "They cannot access CPF digital services as they hold a FIN and not an NRIC.", "correct": false },
      { "text": "They log in using their Singpass registered under their FIN.", "correct": true },
      { "text": "They must visit a CPF Service Centre for in-person access only.", "correct": false },
      { "text": "They use a special employer-issued token to log in.", "correct": false }
    ],
    "explanation": "FIN holders may log in to CPF digital services using their Singpass registered under their FIN. If they also have a CPF-issued account, they will be prompted to select their transaction profile after logging in.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Liu Mingzhi",
      "age": 35,
      "bg": "permanent resident, engineer",
      "emoji": "👨‍🔧",
      "salutation": "Mr",
      "lastname": "Liu"
    }
  },
  {
    "q": "What is Singpass Face Verification?",
    "choices": [
      { "text": "A CPF Board feature to verify identity during CPF withdrawals.", "correct": false },
      { "text": "A method of verifying your identity using a face scan compared against the government's records.", "correct": true },
      { "text": "A biometric login feature exclusive to the CPF Mobile app.", "correct": false },
      { "text": "A video call verification service offered at CPF Service Centres.", "correct": false }
    ],
    "explanation": "Singpass Face Verification is a method of verifying your identity using a face scan compared against the government's records. Members should contact the Singpass Helpdesk for more information on this feature.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Zulaikha Hassan",
      "age": 29,
      "bg": "bank officer",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Hassan"
    }
  },
  {
    "q": "What is the minimum age requirement for a CPF member to appoint a Trusted Contact?",
    "choices": [
      { "text": "18 years old", "correct": false },
      { "text": "21 years old", "correct": true },
      { "text": "55 years old", "correct": false },
      { "text": "There is no minimum age requirement.", "correct": false }
    ],
    "explanation": "To appoint a Trusted Contact, you must be a CPF member aged 21 and above, a Singapore Citizen or PR with a Singpass account, and have at least a Singapore-registered mobile number or email address registered with CPF Board.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Faris Hakim",
      "age": 21,
      "bg": "national serviceman",
      "emoji": "🪖",
      "salutation": "Mr",
      "lastname": "Hakim"
    }
  },
  {
    "q": "A member's Trusted Contact is a non-next-of-kin friend. Is this allowed?",
    "choices": [
      { "text": "No, only immediate family members (spouse, parents, children) can be Trusted Contacts.", "correct": false },
      { "text": "Yes, any person who meets the eligibility criteria can be appointed, regardless of relationship.", "correct": true },
      { "text": "Yes, but only if approved by CPF Board after a background check.", "correct": false },
      { "text": "No, the Trusted Contact must be a blood relative.", "correct": false }
    ],
    "explanation": "A member can appoint any person who meets the eligibility criteria as their Trusted Contact, including someone who is not their next-of-kin. CPF Board strongly recommends choosing someone you trust to help monitor your CPF transactions.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Beatrice Chua",
      "age": 45,
      "bg": "social worker",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Chua"
    }
  },
  {
    "q": "What contact details must a Trusted Contact have registered with CPF Board?",
    "choices": [
      { "text": "Either a Singapore-registered mobile number or an email address.", "correct": false },
      { "text": "Both a Singapore-registered mobile number and an email address.", "correct": true },
      { "text": "A Singapore-registered mobile number only.", "correct": false },
      { "text": "A residential address and an email address.", "correct": false }
    ],
    "explanation": "A Trusted Contact must have both a Singapore-registered mobile number and an email address registered with CPF Board, as they will receive copies of transaction notifications through both channels.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Karthigeyan Rajan",
      "age": 38,
      "bg": "data analyst",
      "emoji": "👨‍💻",
      "salutation": "Mr",
      "lastname": "Rajan"
    }
  },
  {
    "q": "A member wants to appoint their elderly parent who lives overseas as a Trusted Contact. The parent has a Singpass and both a Singapore mobile number and email registered with CPF Board. Can the appointment proceed?",
    "choices": [
      { "text": "No, the Trusted Contact must reside in Singapore.", "correct": false },
      { "text": "No, the parent is too elderly to be a Trusted Contact.", "correct": false },
      { "text": "Yes, the parent meets all eligibility criteria and may be appointed.", "correct": true },
      { "text": "Yes, but only after a video verification call at a CPF Service Centre.", "correct": false }
    ],
    "explanation": "A member may appoint someone who is not based in Singapore as a Trusted Contact. The parent meets all criteria: CPF member aged 21+, Singapore Citizen or PR with Singpass, and both contact details registered. Overseas residence is not a disqualifying factor.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Edwin Chew",
      "age": 46,
      "bg": "project manager based in Singapore",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Chew"
    }
  },
  {
    "q": "Two Trusted Contacts are appointed for the same member. Which one has the higher authority over the other?",
    "choices": [
      { "text": "The first Trusted Contact appointed, as they are the 'primary' contact.", "correct": false },
      { "text": "The younger of the two, as they are considered more able.", "correct": false },
      { "text": "Neither — both have equal roles with no primary or secondary designation.", "correct": true },
      { "text": "The one with a closer family relationship to the member.", "correct": false }
    ],
    "explanation": "Both Trusted Contacts have the same role and responsibilities with no primary or secondary designation. They each independently receive copies of the member's transaction notifications.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Rohani Binte Yusof",
      "age": 60,
      "bg": "homemaker",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Rohani"
    }
  },
  {
    "q": "What should a member do if they receive a Trusted Contact appointment request from someone they do not know?",
    "choices": [
      { "text": "Accept the request and report the suspicious person to the police.", "correct": false },
      { "text": "Ignore the notification; it will expire automatically.", "correct": false },
      { "text": "Decline the request via the 'Trusted Contacts' section under Account settings.", "correct": true },
      { "text": "Contact CPF Board immediately to report fraud.", "correct": false }
    ],
    "explanation": "If a member receives a Trusted Contact appointment request from an unknown party, they should decline the request at the 'Trusted Contacts' section under their Account settings. No further action is required after declining.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Josephine Tay",
      "age": 54,
      "bg": "bookkeeper",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Tay"
    }
  },
  {
    "q": "What happens to a member's Trusted Contact appointments when they pass away?",
    "choices": [
      { "text": "The appointments transfer to the deceased member's next-of-kin.", "correct": false },
      { "text": "CPF Board revokes all the member's Trusted Contact appointments and their appointments as a Trusted Contact for others.", "correct": true },
      { "text": "The appointments remain active until the Trusted Contact manually removes them.", "correct": false },
      { "text": "The appointments are suspended for one year pending estate settlement.", "correct": false }
    ],
    "explanation": "Upon a member's demise, CPF Board revokes both the member's appointed Trusted Contacts and the member's own appointment as a Trusted Contact for others.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Loh Ah Mooi",
      "age": 72,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Loh"
    }
  },
  {
    "q": "A deputy appointed by a Singapore court wants to remove the Trusted Contacts of a CPF member who has lost mental capacity. What must the deputy provide when writing to CPF Board?",
    "choices": [
      { "text": "A statutory declaration and a letter from the member's family.", "correct": false },
      { "text": "The Deputyship court order.", "correct": true },
      { "text": "The LPA document and a medical report certifying loss of mental capacity.", "correct": false },
      { "text": "A certified true copy of the member's NRIC and a doctor's letter.", "correct": false }
    ],
    "explanation": "A Court-appointed Deputy must submit the Deputyship court order when writing to CPF Board to request removal of Trusted Contacts on the member's behalf. A Donee under an LPA must provide the LPA document and a medical report instead.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Nicholas Ang",
      "age": 49,
      "bg": "lawyer",
      "emoji": "⚖️",
      "salutation": "Mr",
      "lastname": "Ang"
    }
  },
  {
    "q": "A Trusted Contact suspects their appointer may have fallen for a scam after receiving a withdrawal notification. What should they do?",
    "choices": [
      { "text": "Log in to the appointer's CPF account to reverse the transaction.", "correct": false },
      { "text": "Wait for the appointer to contact them first before taking any action.", "correct": false },
      { "text": "Check with the appointer to confirm the transaction and contact the 24/7 ScamShield anti-scam helpline (1799) if unsure.", "correct": true },
      { "text": "File a police report on behalf of the appointer immediately.", "correct": false }
    ],
    "explanation": "When a Trusted Contact receives a notification and is unsure if the appointer has been scammed, they should first check with the appointer to confirm the transaction. If still unsure, they should STOP and CHECK with the 24/7 ScamShield anti-scam helpline via 1799.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Cheong Beng Kwang",
      "age": 33,
      "bg": "police officer",
      "emoji": "👮",
      "salutation": "Mr",
      "lastname": "Cheong"
    }
  },
  {
    "q": "Why is a Trusted Contact specifically notified when the appointer changes their daily withdrawal limit?",
    "choices": [
      { "text": "Because daily withdrawal limit changes require two-person authorisation under CPF rules.", "correct": false },
      { "text": "Because scammers may deceive victims or gain unauthorised access to raise the limit and facilitate larger withdrawals.", "correct": true },
      { "text": "Because CPF Board requires all financial limit changes to be verified by a third party.", "correct": false },
      { "text": "Because the Trusted Contact must approve any limit changes before they take effect.", "correct": false }
    ],
    "explanation": "Scammers may deceive victims into updating their daily withdrawal limit or attempt to do so through unauthorised account access. Notifying the Trusted Contact ensures they can detect and alert the member to such suspicious changes promptly.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Yong Swee Kim",
      "age": 64,
      "bg": "retired bank manager",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Yong"
    }
  },
  {
    "q": "How is the Trusted Contact service different from a Lasting Power of Attorney (LPA)?",
    "choices": [
      { "text": "They are essentially the same; both allow someone to act on your behalf.", "correct": false },
      { "text": "An LPA allows a Donee to make decisions on your behalf if you lose mental capacity; a Trusted Contact can only receive transaction notifications.", "correct": true },
      { "text": "A Trusted Contact has more powers than an LPA Donee as they can manage CPF transactions.", "correct": false },
      { "text": "An LPA is for financial matters; the Trusted Contact is for medical decisions.", "correct": false }
    ],
    "explanation": "An LPA allows a person to appoint a Donee to make decisions on their behalf if they lose mental capacity, covering personal welfare and/or property and affairs. In contrast, a Trusted Contact can only receive copies of transaction notifications — they cannot make decisions or transact on the member's behalf.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Margaret Lau",
      "age": 55,
      "bg": "estate planner",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Lau"
    }
  },
  {
    "q": "A member tries to make a Trusted Contact appointment but fails the enhanced authentication. What are their options?",
    "choices": [
      { "text": "The appointment cannot be made; they must wait 6 months before trying again.", "correct": false },
      { "text": "Try again later, or visit a CPF Service Centre with their intended appointee for assistance.", "correct": true },
      { "text": "Submit the appointment by post with notarised documents.", "correct": false },
      { "text": "Ask the intended appointee to submit the appointment on their behalf.", "correct": false }
    ],
    "explanation": "If a member fails enhanced authentication when submitting a Trusted Contact appointment request, they should try again later. Alternatively, they may visit a CPF Service Centre with their intended appointee for assistance. Appointments at Service Centres are by booking only.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Abdul Rahim",
      "age": 67,
      "bg": "retired bus driver",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Rahim"
    }
  },
  {
    "q": "An employer pays CPF contributions on the 14th of the following month, but the 14th falls on a Sunday. When is the actual due date?",
    "choices": [
      { "text": "The Friday before, i.e. the 12th.", "correct": false },
      { "text": "The Monday after, i.e. the 15th.", "correct": true },
      { "text": "The 14th itself — the date does not shift for weekends.", "correct": false },
      { "text": "The last working day of the following month.", "correct": false }
    ],
    "explanation": "When the 14th falls on a Saturday, Sunday, or Public Holiday, the due date shifts to the next working day. If the 14th is a Sunday, the next working day is Monday the 15th.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Tan Ah Leng",
      "age": 46,
      "bg": "small business owner, bakery",
      "emoji": "🧑‍🍳",
      "salutation": "Mr",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member lodges a report with CPF Board about unpaid contributions. However, the employer's company is in severe financial difficulty. What does CPF Board caution about such cases?",
    "choices": [
      { "text": "CPF Board guarantees full recovery of all unpaid contributions regardless of the employer's financial state.", "correct": false },
      { "text": "CPF arrears may not always be recoverable despite enforcement efforts if the company is in financial difficulty.", "correct": true },
      { "text": "CPF Board will advance the unpaid contributions to the member from a reserve fund.", "correct": false },
      { "text": "The member must take the employer to the Employment Claims Tribunal before CPF Board can act.", "correct": false }
    ],
    "explanation": "In cases where the company is in financial difficulty, CPF arrears may not always be recoverable despite CPF Board's enforcement efforts. Members facing difficulty servicing HDB loans due to this may contact HDB for alternative repayment options.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Sandra Chia",
      "age": 39,
      "bg": "accounts clerk",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Chia"
    }
  },
  {
    "q": "A member receives her monthly CPF email notification but is unsure if it is legitimate. What is one way to verify the email is authentic?",
    "choices": [
      { "text": "Check that the email contains her full name and NRIC number.", "correct": false },
      { "text": "Verify that the sender's email address is from a recognised CPF Board domain.", "correct": true },
      { "text": "Check that the email contains a QR code that links to the CPF website.", "correct": false },
      { "text": "Confirm the email is legitimate by replying and waiting for CPF Board to respond.", "correct": false }
    ],
    "explanation": "To verify legitimacy, members should ensure the sender's email address is from a recognised CPF Board domain. Members should not click any links if they are unsure, and should access their CPF account directly via cpf.gov.sg instead.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Mavis Loh",
      "age": 61,
      "bg": "part-time cleaner",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Loh"
    }
  },
  {
    "q": "A member needs transaction records from 12 years ago. Can CPF Board retrieve these?",
    "choices": [
      { "text": "Yes, CPF Board keeps all transaction records and can retrieve them upon written request.", "correct": false },
      { "text": "Yes, but only for members above 55 who are approaching retirement.", "correct": false },
      { "text": "No, CPF Board does not provide the service of retrieving records beyond the past 10 years.", "correct": true },
      { "text": "Yes, but a retrieval fee applies for records older than 10 years.", "correct": false }
    ],
    "explanation": "CPF Board does not provide the service of retrieving CPF statements beyond the past 10 years. It is the member's responsibility to carefully review and download their statements in a timely manner to maintain their own records.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Goh Teck Soon",
      "age": 65,
      "bg": "retired civil servant",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Goh"
    }
  },
  {
    "q": "Which of the following CPF transaction types can a member filter for in their Transaction History?",
    "choices": [
      { "text": "Only CPF investment transactions.", "correct": false },
      { "text": "Employment and Platform Contributions, and Self-Employed Contributions, among others.", "correct": true },
      { "text": "Only withdrawal transactions.", "correct": false },
      { "text": "Only Medisave-related transactions.", "correct": false }
    ],
    "explanation": "Members can customise their Transaction History view using filters, including Employment and Platform Contributions as well as Self-Employed Contributions. The history covers all CPF transactions including contributions, withdrawals, and transfers.",
    "category": "Accounts Management",
    "difficulty": "medium",
    "persona": {
      "name": "Parveen Kaur",
      "age": 32,
      "bg": "self-employed freelance photographer",
      "emoji": "📸",
      "salutation": "Ms",
      "lastname": "Kaur"
    }
  },
  {
    "q": "A member does not have a Singpass or 2FA. What should they do to gain access to CPF digital services?",
    "choices": [
      { "text": "Submit a hardcopy request form to CPF Board by post.", "correct": false },
      { "text": "Visit the Singpass website to obtain a Singpass account and set up 2FA.", "correct": true },
      { "text": "Contact CPF Board to be issued a temporary one-time login code.", "correct": false },
      { "text": "Ask a family member with Singpass to access the account on their behalf.", "correct": false }
    ],
    "explanation": "Members who do not have a Singpass and/or 2FA should visit the Singpass website to obtain one. Singpass is required to access CPF digital services.",
    "category": "Accounts Management",
    "difficulty": "easy",
    "persona": {
      "name": "Muthu Krishnan",
      "age": 68,
      "bg": "retired factory worker",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Krishnan"
    }
  },
  {
    "q": "A member's child is 19, a Singapore PR, and has received CPF contributions from a part-time job. Can the parent view the child's CPF transaction history online?",
    "choices": [
      { "text": "No, only Singapore Citizens' children are eligible.", "correct": false },
      { "text": "No, the parent must be a Singapore Citizen to access the child's statement.", "correct": false },
      { "text": "Yes, as long as both parent and child are Singapore Citizens or PRs and the child is below 21 with CPF contributions.", "correct": true },
      { "text": "No, once the child turns 18 they manage their own CPF account independently.", "correct": false }
    ],
    "explanation": "The parent can view their child's Transaction History if both parent and child are Singapore Citizens or Permanent Residents, the child is below 21, and the child has received CPF contributions. A 19-year-old PR child with contributions qualifies.",
    "category": "Accounts Management",
    "difficulty": "hard",
    "persona": {
      "name": "Lim Peck Hiang",
      "age": 48,
      "bg": "nurse manager",
      "emoji": "👩‍⚕️",
      "salutation": "Mdm",
      "lastname": "Lim"
    }
  },
  {
    "q": "A member has a pending CPF withdrawal. Their bank account has just been closed and they need to update it. What is the recommended approach?",
    "choices": [
      { "text": "Update the bank account immediately to ensure the withdrawal is credited to the new account.", "correct": false },
      { "text": "Cancel the withdrawal, update the bank account, then resubmit the withdrawal application.", "correct": false },
      { "text": "Allow the withdrawal to complete first before updating the bank account details.", "correct": true },
      { "text": "Contact CPF Board to place the withdrawal on hold while updating the bank account.", "correct": false }
    ],
    "explanation": "If a member has a pending withdrawal, they should consider updating their bank account after the withdrawal is complete to enable successful processing of their withdrawal application. Updating mid-process could disrupt the withdrawal.",
    "category": "Member Particulars",
    "difficulty": "hard",
    "persona": {
      "name": "Stanley Foo",
      "age": 56,
      "bg": "semi-retired contractor",
      "emoji": "👷",
      "salutation": "Mr",
      "lastname": "Foo"
    }
  },
  {
    "q": "A member updates her bank account with CPF Board using Interbank GIRO. She submits the form on Monday. From which day is the account expected to be fully active?",
    "choices": [
      { "text": "Monday itself — immediately upon submission.", "correct": false },
      { "text": "Tuesday — the next working day.", "correct": false },
      { "text": "By Wednesday at the latest — up to two working days after bank confirmation.", "correct": true },
      { "text": "By the following Monday — up to five working days.", "correct": false }
    ],
    "explanation": "For Interbank GIRO, the bank account update generally takes up to two working days to be activated after the bank confirms that the bank account belongs to the member. Submitting on Monday would mean activation by Wednesday at the latest.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Alice Yeo",
      "age": 52,
      "bg": "office administrator",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Yeo"
    }
  },
  {
    "q": "Which of the following payments will be credited to the bank account registered under a member's CPF Account settings?",
    "choices": [
      { "text": "Only CPF investment dividends.", "correct": false },
      { "text": "Monthly payouts and CPF savings withdrawals.", "correct": true },
      { "text": "Only Medisave reimbursements.", "correct": false },
      { "text": "All government cash payouts including GST vouchers.", "correct": false }
    ],
    "explanation": "Monthly payouts and CPF savings withdrawals will be paid to the bank account registered under the member's Account settings with CPF Board. Members should keep this updated to avoid delays in receiving payments.",
    "category": "Member Particulars",
    "difficulty": "easy",
    "persona": {
      "name": "Ramesh Gopal",
      "age": 62,
      "bg": "retired taxi driver",
      "emoji": "🚕",
      "salutation": "Mr",
      "lastname": "Gopal"
    }
  },
  {
    "q": "A member may need to verify their identity using enhanced authentication measures when doing what?",
    "choices": [
      { "text": "Logging in to my cpf digital services for the first time.", "correct": false },
      { "text": "Updating their registered bank account details with CPF Board.", "correct": true },
      { "text": "Viewing their CPF account balance.", "correct": false },
      { "text": "Downloading their Yearly Statement of Account.", "correct": false }
    ],
    "explanation": "When updating registered bank account details with CPF Board, members may need to verify their identity using enhanced authentication measures, as this is a sensitive change that could affect how their CPF payments are received.",
    "category": "Member Particulars",
    "difficulty": "medium",
    "persona": {
      "name": "Josephine Chan",
      "age": 41,
      "bg": "finance executive",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Chan"
    }
  },
  {
    "q": "For which types of CPF matters are visits to a Service Centre NOT available?",
    "choices": [
      { "text": "Retirement withdrawal matters.", "correct": false },
      { "text": "Employer and self-employed CPF matters.", "correct": true },
      { "text": "Singpass account issues.", "correct": false },
      { "text": "Nomination queries.", "correct": false }
    ],
    "explanation": "Services for employer or self-employed matters are only available through CPF's digital services, hotline, or Write to Us. Members cannot handle these matters at a Service Centre in person.",
    "category": "Digital Services",
    "difficulty": "medium",
    "persona": {
      "name": "Ben Tay",
      "age": 37,
      "bg": "self-employed plumber",
      "emoji": "🔧",
      "salutation": "Mr",
      "lastname": "Tay"
    }
  },
  {
    "q": "A member wants to speak with a CPF Customer Service Executive over the phone. How do they arrange this?",
    "choices": [
      { "text": "Call the CPF hotline directly and a Customer Service Executive will answer.", "correct": false },
      { "text": "Make an appointment via the CPF website to speak with a Customer Service Executive over the phone.", "correct": true },
      { "text": "Submit a callback request through the CPF Mobile app.", "correct": false },
      { "text": "Email CPF Board and a Customer Service Executive will call back within 3 working days.", "correct": false }
    ],
    "explanation": "Members can make an appointment to speak with a Customer Service Executive over the phone via the CPF website. In-person visits to Service Centres are also available by appointment.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Helen Ng",
      "age": 70,
      "bg": "retiree, former seamstress",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Ng"
    }
  },
  {
    "q": "What does Singpass Face Verification compare a member's face scan against?",
    "choices": [
      { "text": "The photo on the member's CPF account profile.", "correct": false },
      { "text": "The government's records.", "correct": true },
      { "text": "The member's most recently uploaded Singpass profile photo.", "correct": false },
      { "text": "The photo on the member's bank account records.", "correct": false }
    ],
    "explanation": "Singpass Face Verification verifies identity using a face scan compared against the government's records. For more information, members should contact the Singpass Helpdesk directly.",
    "category": "Digital Services",
    "difficulty": "easy",
    "persona": {
      "name": "Darren Koh",
      "age": 24,
      "bg": "university student",
      "emoji": "🧑‍🎓",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "A foreign CPF member has both a CPF-issued account (e.g. SA987654C) and a FIN. After logging in with their FIN-registered Singpass, what happens?",
    "choices": [
      { "text": "They are automatically directed to their CPF-issued account.", "correct": false },
      { "text": "They will be prompted to select their transaction profile — either their CPF-issued account or FIN.", "correct": true },
      { "text": "Access to the CPF-issued account is permanently blocked.", "correct": false },
      { "text": "They can only access the FIN profile and must contact CPF Board to merge accounts.", "correct": false }
    ],
    "explanation": "If a foreign CPF member has a CPF-issued account and their FIN is updated with CPF Board, they will be prompted after login to select their transaction profile — either the CPF-issued account or the FIN — before proceeding.",
    "category": "Digital Services",
    "difficulty": "hard",
    "persona": {
      "name": "Pradeep Nair",
      "age": 40,
      "bg": "foreign national, senior engineer",
      "emoji": "👨‍🔬",
      "salutation": "Mr",
      "lastname": "Nair"
    }
  },
  {
    "q": "Which of the following is NOT a requirement for a CPF member to appoint a Trusted Contact?",
    "choices": [
      { "text": "Being a Singapore Citizen or Permanent Resident.", "correct": false },
      { "text": "Being aged 21 and above.", "correct": false },
      { "text": "Having at least a Singapore-registered mobile number or email address registered with CPF Board.", "correct": false },
      { "text": "Having a minimum CPF balance of $5,000.", "correct": true }
    ],
    "explanation": "To appoint a Trusted Contact, the member must be 21 or above, a Singapore Citizen or PR with a Singpass account, and have at least a Singapore-registered mobile number or email registered with CPF Board. There is no minimum CPF balance requirement.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Nur Syafiqah",
      "age": 21,
      "bg": "part-time barista",
      "emoji": "☕",
      "salutation": "Ms",
      "lastname": "Syafiqah"
    }
  },
  {
    "q": "What is the maximum number of Trusted Contacts a CPF member can appoint?",
    "choices": [
      { "text": "One", "correct": false },
      { "text": "Two", "correct": true },
      { "text": "Three", "correct": false },
      { "text": "There is no limit.", "correct": false }
    ],
    "explanation": "A member may appoint up to two Trusted Contacts. Both have the same role with no primary or secondary designation. To appoint a new one when the limit is reached, the member must first remove an existing Trusted Contact.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Victor Seow",
      "age": 55,
      "bg": "property developer",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Seow"
    }
  },
  {
    "q": "How does CPF Board's limit of two Trusted Contacts protect a member?",
    "choices": [
      { "text": "It reduces the administrative load on CPF Board's notification system.", "correct": false },
      { "text": "It provides optimal protection from scams while keeping CPF information within a close, trusted circle.", "correct": true },
      { "text": "It prevents family disputes over CPF account information.", "correct": false },
      { "text": "It is required by the Personal Data Protection Act (PDPA).", "correct": false }
    ],
    "explanation": "The two-person limit is designed to provide optimal protection from potential scams while keeping the member's CPF information within a close, trusted circle. Members are encouraged to carefully consider who they appoint.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Lee Siew Buay",
      "age": 58,
      "bg": "insurance agent",
      "emoji": "👩‍💼",
      "salutation": "Mdm",
      "lastname": "Lee"
    }
  },
  {
    "q": "A member submits two Trusted Contact appointment requests on the same day. Is this allowed?",
    "choices": [
      { "text": "No, only one appointment request can be submitted per day.", "correct": false },
      { "text": "Yes, up to two requests can be submitted on the same day, matching the maximum number of Trusted Contacts.", "correct": true },
      { "text": "No, there must be a 24-hour gap between appointment requests.", "correct": false },
      { "text": "Yes, unlimited requests can be submitted but only two will be accepted.", "correct": false }
    ],
    "explanation": "A member can submit up to two Trusted Contact appointment requests within the same day, which corresponds to the maximum number of Trusted Contacts they can appoint. If the maximum is already reached, an existing one must be removed first.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Marcus Wee",
      "age": 34,
      "bg": "risk analyst",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Wee"
    }
  },
  {
    "q": "Why must an appointee actively accept a Trusted Contact appointment request rather than being automatically enrolled?",
    "choices": [
      { "text": "To allow CPF Board to verify the identity of the appointee.", "correct": false },
      { "text": "Because the role is voluntary and the appointee must understand their responsibilities before accepting.", "correct": true },
      { "text": "To comply with the Electronic Transactions Act requirements.", "correct": false },
      { "text": "So that CPF Board can conduct a background check on the appointee.", "correct": false }
    ],
    "explanation": "The Trusted Contact role is a voluntary one. The appointee will receive copies of notifications when important CPF transactions occur, so they must understand their role before accepting. This ensures the appointee is genuinely willing and able to help.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Wendy Tan",
      "age": 44,
      "bg": "compliance manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Tan"
    }
  },
  {
    "q": "A member submitted a Trusted Contact appointment request but wants to change the appointee before they have accepted. What is the correct process?",
    "choices": [
      { "text": "Submit a new request with the new appointee's details; the old request is automatically cancelled.", "correct": false },
      { "text": "Withdraw the pending request via the Activities page and submit a new appointment request.", "correct": true },
      { "text": "Contact CPF Board by phone to request an amendment to the existing request.", "correct": false },
      { "text": "Wait for the request to expire after 7 days, then submit a new one.", "correct": false }
    ],
    "explanation": "To change an appointee before they have accepted, the member should go to their Activities page, locate the in-progress request, and withdraw it. They can then submit a new appointment request with the preferred appointee.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Koh Beng Huat",
      "age": 47,
      "bg": "logistics supervisor",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Koh"
    }
  },
  {
    "q": "A member receives a notification that their Trusted Contact appointment request has been declined. What should they do next?",
    "choices": [
      { "text": "File a complaint with CPF Board about the declined appointment.", "correct": false },
      { "text": "Contact the appointee to explain the role and resubmit, or consider appointing a different person.", "correct": true },
      { "text": "The appointment is automatically escalated to a CPF Board officer for review.", "correct": false },
      { "text": "Wait 30 days before submitting a new request to the same person.", "correct": false }
    ],
    "explanation": "If the appointee declines, the member should contact them to explain their request and help them understand the Trusted Contact role before submitting a new appointment request. Alternatively, the member may consider appointing a different person.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Amy Tan",
      "age": 63,
      "bg": "retiree",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Tan"
    }
  },
  {
    "q": "Where can a member check the status of a pending Trusted Contact appointment request?",
    "choices": [
      { "text": "Under 'Your Trusted Contacts' in Account settings.", "correct": false },
      { "text": "Via the Activities page using their Singpass.", "correct": true },
      { "text": "In the CPF inbox under 'Notifications'.", "correct": false },
      { "text": "By calling the CPF hotline for a status update.", "correct": false }
    ],
    "explanation": "Members can check the status of their Trusted Contact appointment via their Activities page using Singpass. Pending requests will show the 'In-Progress' transaction status. Only accepted appointments appear under 'Your Trusted Contacts' in Account settings.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "James Ong",
      "age": 29,
      "bg": "graduate student",
      "emoji": "🧑‍🎓",
      "salutation": "Mr",
      "lastname": "Ong"
    }
  },
  {
    "q": "A member attempts to appoint someone as a Trusted Contact but gets an error saying the person has reached their appointment limit. What does this mean?",
    "choices": [
      { "text": "The person already has two CPF accounts and cannot be a Trusted Contact.", "correct": false },
      { "text": "The person is already a Trusted Contact for several other individuals and has reached the limit.", "correct": true },
      { "text": "The person has submitted too many requests in a single day.", "correct": false },
      { "text": "The person's Singpass account has been suspended.", "correct": false }
    ],
    "explanation": "This error means the person you are trying to appoint is already a Trusted Contact for the maximum number of other individuals. CPF Board recommends appointing someone else, or asking this person to remove one of their existing appointments before proceeding.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Suriani Binte Ahmad",
      "age": 52,
      "bg": "community volunteer",
      "emoji": "🤝",
      "salutation": "Mdm",
      "lastname": "Suriani"
    }
  },
  {
    "q": "When a person accepts or declines a Trusted Contact appointment request, who is notified?",
    "choices": [
      { "text": "Only CPF Board is notified internally.", "correct": false },
      { "text": "The appointer is notified via email, SMS and push notifications (if enabled).", "correct": true },
      { "text": "No one is notified; the member must check their Activities page manually.", "correct": false },
      { "text": "The appointee's family members are notified as a transparency measure.", "correct": false }
    ],
    "explanation": "The person who submitted the appointment request (the appointer) will be notified via email, SMS, and push notifications (if enabled) when their appointee accepts or declines the Trusted Contact appointment request.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Leong Mei Yee",
      "age": 36,
      "bg": "HR executive",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Leong"
    }
  },
  {
    "q": "How can a Trusted Contact remove themselves from their role?",
    "choices": [
      { "text": "Ask the appointer to remove them via the Add or remove Trusted Contact e-form.", "correct": false },
      { "text": "Submit the Remove yourself from your loved ones' Trusted Contact list e-form with Singpass.", "correct": true },
      { "text": "Call the CPF hotline to request self-removal.", "correct": false },
      { "text": "Send a written request by post to CPF Board.", "correct": false }
    ],
    "explanation": "A Trusted Contact who no longer wishes to be appointed can remove themselves by submitting the 'Remove yourself from your loved ones' Trusted Contact list' e-form with their Singpass. Removal takes effect immediately upon successful submission.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Huang Wei Liang",
      "age": 42,
      "bg": "logistics coordinator",
      "emoji": "👨‍💼",
      "salutation": "Mr",
      "lastname": "Huang"
    }
  },
  {
    "q": "How quickly does the removal of a Trusted Contact take effect after the e-form is successfully submitted?",
    "choices": [
      { "text": "After a 12-hour cooling period.", "correct": false },
      { "text": "Within two working days.", "correct": false },
      { "text": "Immediately upon successful submission.", "correct": true },
      { "text": "After the removed Trusted Contact acknowledges the removal.", "correct": false }
    ],
    "explanation": "The removal of a Trusted Contact takes immediate effect upon the successful submission of the Add or remove Trusted Contact e-form. The removed contact will no longer appear under 'Your Trusted Contacts' in Account settings.",
    "category": "SSS",
    "difficulty": "easy",
    "persona": {
      "name": "Fauziah Binte Hamid",
      "age": 49,
      "bg": "primary school principal",
      "emoji": "👩‍🏫",
      "salutation": "Mdm",
      "lastname": "Fauziah"
    }
  },
  {
    "q": "CPF Board removes a member's Trusted Contact appointment without the member initiating it. What is a likely reason for this?",
    "choices": [
      { "text": "The Trusted Contact missed alerting the member about a transaction.", "correct": false },
      { "text": "The Trusted Contact or the member is no longer eligible to use the service, such as upon demise.", "correct": true },
      { "text": "The Trusted Contact appointment has exceeded the annual renewal date.", "correct": false },
      { "text": "CPF Board randomly audits and removes inactive Trusted Contact appointments.", "correct": false }
    ],
    "explanation": "CPF Board may remove a Trusted Contact appointment when either the member or the Trusted Contact can no longer use the service — for example, upon the demise of either party or a change in eligibility status.",
    "category": "SSS",
    "difficulty": "medium",
    "persona": {
      "name": "Teo Suan Choo",
      "age": 66,
      "bg": "retiree, former nurse",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Teo"
    }
  },
  {
    "q": "A Trusted Contact is appointed by someone who subsequently loses mental capacity. What is the Trusted Contact's appointment status?",
    "choices": [
      { "text": "The appointment is automatically revoked once mental capacity is lost.", "correct": false },
      { "text": "The appointment remains valid; a Deputy or Donee may remove it if they deem it necessary.", "correct": true },
      { "text": "The appointment is suspended until the appointer recovers mental capacity.", "correct": false },
      { "text": "The Trusted Contact automatically gains power to manage the appointer's CPF account.", "correct": false }
    ],
    "explanation": "If an appointer loses mental capacity, the Trusted Contact's appointment remains valid. A Court-appointed Deputy or Donee under an LPA may remove the Trusted Contact if they deem it necessary.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Valerie Seah",
      "age": 41,
      "bg": "occupational therapist",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Seah"
    }
  },
  {
    "q": "A Donee appointed under an LPA wants to remove a Trusted Contact for a member who has lost mental capacity. What documents must be provided to CPF Board?",
    "choices": [
      { "text": "The Deputyship court order only.", "correct": false },
      { "text": "The LPA document and a medical report certifying the donor's loss of mental capacity.", "correct": true },
      { "text": "A statutory declaration from the Donee and a letter from the appointer's doctor.", "correct": false },
      { "text": "The LPA document only.", "correct": false }
    ],
    "explanation": "A Donee appointed under an LPA must submit the LPA document together with a medical report certifying the donor's loss of mental capacity when writing to CPF Board to request removal of the Trusted Contact on the member's behalf.",
    "category": "SSS",
    "difficulty": "hard",
    "persona": {
      "name": "Tan Hwee Leng",
      "age": 53,
      "bg": "elder care lawyer",
      "emoji": "⚖️",
      "salutation": "Ms",
      "lastname": "Tan"
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
  },
  {
    "persona": {
      "name": "Mdm Rosnah",
      "age": 70,
      "bg": "living in a 3-room flat",
      "emoji": "👵",
      "salutation": "Mdm",
      "lastname": "Rosnah"
    },
    "subject": "Do I need to apply for Silver Support?",
    "enquiry": "Dear CPF Board, I am 70 years old and live in a 3-room HDB flat. I didn't earn much when I was younger. My friend told me about the Silver Support Scheme. How do I apply for this money? Do I need to go to your office?",
    "date": "10 March 2026",
    "correct": "There is no need to apply for the Silver Support (SS) Scheme. CPF Board automatically reviews your eligibility every year based on your lifetime wages, housing type, and household support. If you qualify, you will receive a notification in December of the preceding year, and payouts will be made automatically every quarter.",
    "wrong1": "You must submit an application form via the 'my cpf' digital services to be considered for Silver Support. Once your application is approved, you will begin receiving payouts from the next quarter. Please visit a CPF Service Centre if you need help with the form.",
    "wrong2": "The Silver Support Scheme is only for those who have at least $60,000 in their Retirement Account. Since you live in a 3-room flat, you must first top up your account to meet this requirement before you can apply for the quarterly supplement.",
    "wrong3": "To receive Silver Support, you must first be a recipient of the Workfare Income Supplement. If you are not currently working, you are unfortunately not eligible for this specific scheme, as it is designed for active workers over 65.",
    "added": "You can check your eligibility status by logging in to our e-services with your Singpass.",
    "explain": "Silver Support eligibility is automatically assessed; no application is required.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "David",
      "age": 52,
      "bg": "former PR living abroad",
      "emoji": "📉",
      "salutation": "Mr",
      "lastname": "David"
    },
    "subject": "Interest on my closed CPF account",
    "enquiry": "Hi, I renounced my PR status last year. I understand my CPF account was automatically closed in April 2024. What happens to the interest on the money I haven't withdrawn yet? Does it still earn 2.5% or 4%?",
    "date": "12 March 2026",
    "correct": "Upon the automatic closure of your account in April 2024, your savings stopped earning the prevailing CPF interest. As a concession, these savings will earn interest similar to commercial bank interest rates until 31 March 2027. After that date, no further interest will be paid.",
    "wrong1": "Your savings will continue to earn the prevailing CPF interest rates of 2.5% for the Ordinary Account and 4% for the Special Account for a period of 10 years from the date of your PR renunciation, after which the account must be fully liquidated.",
    "wrong2": "Once your account is closed, all interest accrual stops immediately. The balance is held in a non-interest-bearing escrow account. You are encouraged to transfer the remaining savings to your personal bank account as soon as possible.",
    "wrong3": "As a former PR, your savings are moved to a Special Overseas Fund. This fund earns a fixed interest rate of 1% per annum, which is higher than the standard commercial rates, to assist with your transition abroad.",
    "added": "We encourage you to transfer your remaining savings to your bank account as soon as possible via our digital services.",
    "explain": "Non-citizen/PR accounts closed in April 2024 earn commercial-linked rates until March 2027 only.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Hassan",
      "age": 38,
      "bg": "father of two",
      "emoji": "👨‍👦",
      "salutation": "Mr",
      "lastname": "Hassan"
    },
    "subject": "Missing child on Child Dashboard",
    "enquiry": "Hello, I am trying to check my son's MediSave balance on the Child Dashboard, but only my daughter's name appears. My son was born overseas but is now a Singapore Citizen. How can I get him added to my dashboard?",
    "date": "14 March 2026",
    "correct": "If your child's name is not listed, please write to us and provide a copy of your child's birth certificate and their citizenship certificate (since they were a foreigner at birth). This will allow us to verify the relationship and link the records to your dashboard.",
    "wrong1": "The Child Dashboard only displays children born in Singapore. For children born overseas, you must wait until they turn 21 to view their records. Alternatively, your son can log in with his own Singpass to show you the details.",
    "wrong2": "You can manually add your child by entering their NRIC number in the 'Account Settings' section of 'my cpf'. Once you enter the number, the system will verify the relationship with ICA within 14 working days and update the dashboard.",
    "wrong3": "Only the mother is granted access to the Child Dashboard by default. If you wish to see the records, your spouse must log in and 'delegate' access to you through the Singpass Multi-User function.",
    "added": "Note that you can view your child's transaction history for the last 15 months once they are successfully linked.",
    "explain": "Manual intervention with supporting documents (Birth/Citizenship Certs) is needed if a child isn't automatically linked.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Uncle Ahmad",
      "age": 60,
      "bg": "tech beginner",
      "emoji": "🖱️",
      "salutation": "Mr",
      "lastname": "Ahmad"
    },
    "subject": "Cannot login to CPF website",
    "enquiry": "Every time I try to log in to see my statement, the screen just spins or shows an error. I am using my home computer. My Singpass is working for other websites. What is wrong with the CPF site?",
    "date": "15 March 2026",
    "correct": "We suggest clearing your browser cache and relaunching the website. Also, please ensure your browser is updated to one of the two most recent versions and that your device's date-time setting is set to 'Automatic', as this is required for secure authentication.",
    "wrong1": "The CPF website undergoes maintenance every day from 8 AM to 10 AM. Please try logging in during the afternoon or evening. If the problem persists, it may be because your NRIC needs to be re-verified at a Service Centre.",
    "wrong2": "To protect your security, the CPF portal only allows one login per household per day. If a family member has already checked their account today, you will need to wait 24 hours before you can access your own records.",
    "wrong3": "The CPF website requires a high-speed fiber connection. If you are using a wireless or mobile data connection, the security protocols will automatically block the login attempt to prevent data leakage. Please use a wired connection.",
    "added": "If the issue persists, please try logging in via the CPF Mobile app on your smartphone instead.",
    "explain": "Standard troubleshooting (cache, browser updates, automatic time) fixes most login errors.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Mdm Tan",
      "age": 64,
      "bg": "approaching retirement",
      "emoji": "🎂",
      "salutation": "Mdm",
      "lastname": "Tan"
    },
    "subject": "Basic Healthcare Sum for my age",
    "enquiry": "I am turning 65 in 2024. I read that there is a limit to how much I can have in my MediSave called the BHS. What is my limit, and what happens if I don't have enough money to meet it?",
    "date": "16 March 2026",
    "correct": "For members turning 65 in 2024, your Basic Healthcare Sum (BHS) is $71,500 and will remain fixed for the rest of your life. If your balance is below this amount, you are not required to top it up, though you may choose to do so voluntarily.",
    "wrong1": "Your BHS is $68,500. If your MediSave balance is below this amount when you turn 65, the Board will automatically transfer funds from your Ordinary Account to your MediSave to make up the difference to ensure you have enough for medical needs.",
    "wrong2": "The BHS for everyone is currently $94,000. If you do not meet this sum by age 65, you will not be allowed to withdraw any cash from your CPF accounts until the MediSave requirement is fully satisfied through future contributions.",
    "wrong3": "Since you are turning 65, your BHS is no longer fixed. It will continue to increase every year until you reach age 75 to keep up with inflation. There is a mandatory minimum top-up of $500 per year if you are below the limit.",
    "added": "Any amounts in your MediSave above the BHS will be automatically flowed to your other CPF accounts.",
    "explain": "BHS is fixed at age 65 for life ($71,500 for the 2024 cohort); top-ups are not mandatory.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Sarah",
      "age": 45,
      "bg": "returning citizen",
      "emoji": "🇸🇬",
      "salutation": "Ms",
      "lastname": "Sarah"
    },
    "subject": "Returning to Singapore and CPF",
    "enquiry": "I renounced my citizenship 10 years ago and took all my CPF money out. I am now planning to move back and reinstate my citizenship. Do I need to pay back the money I withdrew back then?",
    "date": "18 March 2026",
    "correct": "Yes, to reinstate your Singapore Citizenship, you are required to refund all CPF savings withdrawn, including accrued interest. This includes money transferred to your bank account, savings used for investments, and any amounts used to clear past debts like tax arrears or education loans.",
    "wrong1": "You only need to refund the principal amount you withdrew. The interest is waived as a gesture of goodwill for returning citizens. You can pay this back in installments over the first five years of your return.",
    "wrong2": "Refunds are only required if you are over the age of 55. Since you are 45, you can start a fresh CPF account with a zero balance. However, your previous years of contribution will not count toward your retirement sum.",
    "wrong3": "No, once an account is closed and the money is withdrawn, it cannot be 're-opened'. You will be issued a new CPF account number and will start contributing as if you are a first-time worker in Singapore.",
    "added": "Please contact ICA for the specific requirements regarding the reinstatement of your citizenship status.",
    "explain": "Reinstating status requires a full refund of all withdrawn/used CPF savings plus accrued interest.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Ben",
      "age": 31,
      "bg": "recently moved",
      "emoji": "📬",
      "salutation": "Mr",
      "lastname": "Ben"
    },
    "subject": "Updating my mailing address",
    "enquiry": "I recently moved to a new rental apartment. I want to make sure my CPF letters come to my new home. Can I update my address on your website? I don't want the letters going to my old house.",
    "date": "20 March 2026",
    "correct": "CPF letters are sent to the residential address registered on your Singapore Identity Card. To update your address, please use ICA's e-Services. CPF Board and other government agencies will be automatically notified of the change within one day through the OSCARS system.",
    "wrong1": "You can update your mailing address directly in the 'Account Settings' of the 'my cpf' portal. You can maintain a separate mailing address and residential address if you prefer to receive mail at your office or a P.O. Box.",
    "wrong2": "You must visit a CPF Service Centre in person with your new tenancy agreement or a utility bill as proof of residence. Once verified, our officers will manually update your address in the system while you wait.",
    "wrong3": "Address updates must be done via your employer's HR portal. They will then submit the change to the CPF Board along with your monthly contributions. It usually takes 3-4 weeks for the new address to be reflected.",
    "added": "You will not receive a separate acknowledgement from CPF Board when your address is updated via ICA.",
    "explain": "CPF uses the ICA-registered address; updates are handled via ICA e-Services and synced via OSCARS.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Mr. Schmidt",
      "age": 40,
      "bg": "foreigner needing proof",
      "emoji": "📄",
      "salutation": "Mr",
      "lastname": "Schmidt"
    },
    "subject": "Proof of no CPF account",
    "enquiry": "I am applying for a visa in another country and they require a document proving that I do not have a CPF account in Singapore. Since I never worked here as a PR, I don't have a statement. How can I get this proof?",
    "date": "22 March 2026",
    "correct": "You can log in to 'my cpf' digital services using your Singpass. You will see a message stating 'No information can be displayed here as you do not have a CPF account.' You can save or print this page as official proof.",
    "wrong1": "You need to apply for a 'Certificate of Non-Contribution' at the CPF Service Centre. This requires a processing fee of $20 and takes about 5 working days to be mailed to your registered address.",
    "wrong2": "We do not provide documents for non-existent accounts. You should instead provide your NRIC and a letter from your employer stating that they did not make CPF contributions for you.",
    "wrong3": "You must go to the Ministry of Manpower (MOM) to get a 'Work History Report'. If the report is empty, that serves as proof that you do not have a CPF account.",
    "added": "Ensure you have an active Singpass account to access this digital service.",
    "explain": "The 'no account' message on the portal is the standard way to provide proof of non-membership.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Nurse Jane",
      "age": 30,
      "bg": "helping a family member",
      "emoji": "🏥",
      "salutation": "Ms",
      "lastname": "Jane"
    },
    "subject": "Deceased relative's GovCash",
    "enquiry": "My uncle was receiving Silver Support through GovCash because he had no bank account. He passed away last month with $500 still in his GovCash balance. How can I withdraw this money to pay for his funeral?",
    "date": "25 March 2026",
    "correct": "If a beneficiary passes away before using their GovCash, the remaining balance is credited to their CPF Ordinary Account. These funds will then form part of their CPF estate and be distributed according to their CPF Nomination.",
    "wrong1": "You can bring your uncle's death certificate to an OCBC ATM and use the 'Legacy Withdrawal' option to get the cash. You will need your own NRIC and the deceased's NRIC number to complete the transaction.",
    "wrong2": "GovCash is a personal gift from the government and is not transferable. Upon the death of the recipient, any unused balance is forfeited and returned to the Silver Support Fund to help other seniors.",
    "wrong3": "As the next-of-kin, you can write to the CPF Board with the funeral bills. We will then issue a cheque for the remaining GovCash balance directly to the funeral director to settle the outstanding costs.",
    "added": "If there is no nomination, the funds will be distributed by the Public Trustee's Office according to intestacy laws.",
    "explain": "Unused GovCash returns to the CPF account and is distributed via the nomination process.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Wei Kiat",
      "age": 22,
      "bg": "tech enthusiast",
      "emoji": "📱",
      "salutation": "Mr",
      "lastname": "Wei Kiat"
    },
    "subject": "App not working on my phone",
    "enquiry": "I just downloaded the CPF Mobile app, but when I try to open it, it says 'Security Violation' and closes. My phone is 'rooted' because I like to customize the software. Why is your app blocking me?",
    "date": "27 March 2026",
    "correct": "For security reasons, the CPF Mobile app is not supported on rooted or jailbroken devices. These modifications compromise the device's built-in security features, making it easier for malware to steal your sensitive financial information.",
    "wrong1": "Our app requires at least 10GB of free storage space to run its security scans. Please delete some large files or videos and try opening the app again. Rooting should not affect the app's performance.",
    "wrong2": "You need to enable 'Developer Options' and 'USB Debugging' in your phone settings to allow the CPF Mobile app to run on a custom operating system. This will bypass the security violation message.",
    "wrong3": "The app is currently only compatible with official factory versions of Android 14. If your custom software is based on an older version, the app will automatically shut down to protect your data.",
    "added": "We recommend using a non-modified device or the web browser on your computer to access 'my cpf' digital services.",
    "explain": "Rooted/jailbroken phones are blocked to ensure data security and prevent unauthorized access.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Paul",
      "age": 45,
      "bg": "checking history",
      "emoji": "📅",
      "salutation": "Mr",
      "lastname": "Paul"
    },
    "subject": "Requesting statements from 20 years ago",
    "enquiry": "I am doing some personal financial planning and I need my CPF Yearly Statements from 2000 to 2010. I can only find the last 10 years on the website. How can I get the older ones?",
    "date": "28 March 2026",
    "correct": "CPF Board provides online access to the Yearly Statement of Account for the past 10 years only. We do not provide the service of retrieving CPF statements beyond this 10-year period. You are encouraged to download and save your statements annually for your records.",
    "wrong1": "You can request older statements by paying a retrieval fee of $15 per year. Please submit a 'Record Retrieval' form at any CPF Service Centre, and the hardcopies will be mailed to you within 21 days.",
    "wrong2": "Statements older than 10 years are archived at the National Archives of Singapore. You will need to contact them directly with your NRIC to request a digital scan of your historical CPF records.",
    "wrong3": "Historical statements are only available for Singapore Citizens who are currently over the age of 55. Since you are 45, these records are hidden for privacy reasons and will only be unlocked once you reach retirement age.",
    "added": "We recommend checking your personal records or tax filings for information related to those years.",
    "explain": "CPF Board has a strict 10-year limit on statement retrieval; members must save their own copies for longer periods.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Elena",
      "age": 42,
      "bg": "ex-citizen",
      "emoji": "🏥",
      "salutation": "Ms",
      "lastname": "Elena"
    },
    "subject": "MediShield Life after renunciation",
    "enquiry": "I have renounced my citizenship and moved to Europe. I noticed my CPF account is now closed. Does this mean my MediShield Life coverage is gone? Can I still pay for it with my credit card to keep the insurance?",
    "date": "30 March 2026",
    "correct": "MediShield Life is a scheme for Singapore Citizens and Permanent Residents. Once your CPF account is closed due to renunciation of your status, your MediShield Life coverage will be terminated. It cannot be maintained via cash or credit card payments.",
    "wrong1": "Your MediShield Life coverage will remain active as long as you continue to pay the premiums in cash. You can set up a recurring credit card payment via the CPF portal to ensure your coverage does not lapse while you are abroad.",
    "wrong2": "Your coverage is automatically converted to 'MediShield International'. This allows you to claim for medical expenses incurred in Europe, though the premiums are 20% higher than the local rates in Singapore.",
    "wrong3": "You are covered for a grace period of 24 months after renunciation. If you do not return to Singapore and reinstate your status within that time, the policy will be permanently cancelled and any accumulated bonuses will be lost.",
    "added": "Please ensure you have alternative health insurance coverage in your new country of residence.",
    "explain": "MediShield Life is strictly for SCs and PRs; coverage ends upon loss of status and account closure.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Lily",
      "age": 29,
      "bg": "newly married",
      "emoji": "💍",
      "salutation": "Ms",
      "lastname": "Lily"
    },
    "subject": "Changing name on CPF records",
    "enquiry": "I recently got married and updated my NRIC to include my husband's surname. Do I need to send you a copy of my marriage certificate or my new NRIC so that my CPF account reflects my new name?",
    "date": "01 April 2026",
    "correct": "For Singapore Citizens and PRs, you do not need to inform us separately. Once you have updated your particulars with ICA, your latest name will be automatically updated in our records. We use the principal name registered on your NRIC.",
    "wrong1": "Yes, you must upload a scanned copy of your marriage certificate and your new NRIC through the 'Document Upload' service on our website. Name changes take approximately 7-10 working days to process.",
    "wrong2": "Name changes can only be updated during the annual 'Particulars Verification' window in January. Please wait until next year to update your details, or visit a CPF Service Centre if the change is urgent for a housing loan.",
    "wrong3": "Your CPF account must always remain in your 'maiden' name for legal consistency with your birth records. However, you can add your married name as an 'alias' by filling out Form CPFB-7 and mailing it to us.",
    "added": "Note that 'variants' like hanyu pinyin or married names are generally excluded unless they are part of your principal name.",
    "explain": "SC/PR particulars (name, address) sync automatically from ICA records.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Ken",
      "age": 40,
      "bg": "self-employed",
      "emoji": "📉",
      "salutation": "Mr",
      "lastname": "Ken"
    },
    "subject": "Tax relief for top-ups",
    "enquiry": "I made a top-up to my Special Account on 2nd January 2024. Can I claim tax relief for this in the tax assessment I am doing now for the 2023 work year?",
    "date": "05 April 2026",
    "correct": "To qualify for tax relief for a specific year, top-ups must be received by the Board by 31 December of that year. Since your top-up was made in January 2024, it will only be eligible for tax relief in the Year of Assessment 2025.",
    "wrong1": "Yes, there is a 'grace period' until the tax filing deadline in April. As long as the top-up is made before you file your taxes, it can be backdated to the previous calendar year for relief purposes.",
    "wrong2": "Self-employed persons have a different deadline of 31 March. Since you made your top-up on 2nd January, you are well within the window to claim relief for the 2023 assessment year.",
    "wrong3": "Tax relief for Special Account top-ups is only available for contributions made during the first six months of the year (January to June). Contributions made later in the year are carried forward to the next cycle.",
    "added": "Please plan your top-ups early to ensure they are processed before the end-of-year deadline.",
    "explain": "Tax relief deadlines are strictly Dec 31st of the calendar year the contribution is made.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Auntie Sim",
      "age": 73,
      "bg": "using GovCash",
      "emoji": "🏧",
      "salutation": "Mdm",
      "lastname": "Sim"
    },
    "subject": "Help with GovCash at ATM",
    "enquiry": "I received a message saying my Silver Support is ready via GovCash. I went to the ATM but I don't have a bank card. How can I get my money? The machine asked for a pin number but I don't have one.",
    "date": "07 April 2026",
    "correct": "You do not need a bank card or PIN. At an OCBC ATM, select 'GovCash', enter your NRIC number, and follow the instructions for face verification. Once your identity is verified, the cash will be dispensed directly.",
    "wrong1": "You must first visit a Community Club to collect a one-time 'GovCash Voucher'. This voucher has a 6-digit PIN that you must enter into the ATM to withdraw your quarterly supplement.",
    "wrong2": "GovCash can only be withdrawn if you have a family member with an OCBC account. They must log in with their card and then select the 'Third Party Government Payment' option to verify your identity.",
    "wrong3": "If you do not have a card, you must go to the post office. The ATM is only for those who have already linked their GovCash to a digital wallet on their smartphone.",
    "added": "There is no need to have an OCBC bank account to use this service at their ATMs.",
    "explain": "GovCash uses NRIC and Face Verification at OCBC ATMs; no card or PIN is required.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mei Ling",
      "age": 32,
      "bg": "new mother",
      "emoji": "👶",
      "salutation": "Ms",
      "lastname": "Mei Ling"
    },
    "subject": "Sole custody and Child Dashboard",
    "enquiry": "I was recently granted sole custody of my daughter after a divorce. I do not want my ex-husband to be able to see her MediSave balance or healthcare claims on his dashboard anymore. How can I stop his access?",
    "date": "10 April 2026",
    "correct": "You can write to us using your Singpass and provide the Court Order stating that you have been granted sole custody. Once we verify the document, we can remove your ex-spouse's access to your child's CPF information.",
    "wrong1": "Access to the Child Dashboard is tied to parental rights, which cannot be revoked by the CPF Board regardless of custody. You would need to ask your ex-husband to voluntarily 'Unsubscribe' from the dashboard via his own settings.",
    "wrong2": "You must wait until the child's MediSave account is empty. As long as there are funds in the account, both biological parents have a legal right to view the balance under the Singapore Children's Act.",
    "wrong3": "You can block his access by changing your daughter's 'Privacy Settings' in the Child Dashboard. Toggle the 'Dual Parent Access' switch to 'Off'. This will immediately lock the dashboard for everyone except the primary caregiver.",
    "added": "We will notify you once the request has been processed and the access has been restricted.",
    "explain": "Custody changes can be reflected on the Child Dashboard upon submission of a Court Order.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Mr. Gupta",
      "age": 71,
      "bg": "living in a 5-room flat",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Gupta"
    },
    "subject": "Silver Support amount for 5-room flat",
    "enquiry": "I am eligible for Silver Support, but I only received $430 this quarter. My friend who lives in a 3-room flat received $720. We both have the same income. Why am I getting less than him?",
    "date": "12 April 2026",
    "correct": "The Silver Support payout amount depends on your HDB flat type. Seniors living in 1-room to 4-room flats receive a higher tier ($720 from 2025), while those in 5-room flats receive a lower tier ($430 from 2025) to account for the difference in housing wealth.",
    "wrong1": "The difference is likely due to your age. Payouts are reduced once you pass the age of 70 as the government expects you to have more savings in your Retirement Account by that stage of life.",
    "wrong2": "The 3-room flat payout includes a 'Small Home Bonus' which is not available to those in larger flats. This bonus is meant to encourage seniors to downsize to more manageable living spaces.",
    "wrong3": "You may have outstanding MediSave liabilities. If you have not fully paid your MediShield Life premiums, the Board deducts the difference from your Silver Support payout before it is sent to you.",
    "added": "These amounts were recently enhanced as part of the 2025 scheme updates to provide better support.",
    "explain": "SSS payouts are tiered by HDB flat type; 5-room residents receive the lowest tier.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Paul",
      "age": 39,
      "bg": "former PR",
      "emoji": "🏠",
      "salutation": "Mr",
      "lastname": "Paul"
    },
    "subject": "Using CPF for housing after leaving",
    "enquiry": "I renounced my PR and my CPF account is now closed. I still own an HDB flat in Singapore which I am planning to sell next year. Can I still use my CPF savings to pay the monthly mortgage until the sale is finished?",
    "date": "15 April 2026",
    "correct": "No, once your CPF account is closed, your participation in all CPF schemes, including housing schemes, ceases. You will no longer be able to use CPF savings for your mortgage and must find alternative ways to pay, such as cash.",
    "wrong1": "Yes, you can continue to use your remaining balance for housing for up to 24 months after your account is closed, provided the property was purchased before you renounced your PR status.",
    "wrong2": "You can only use the 'transitory' interest earned on your closed account to pay the mortgage. The principal amount is frozen and cannot be used for any monthly payments until the property is sold.",
    "wrong3": "You must apply for a 'Housing Extension' from the CPF Board. If approved, you can continue using your OA savings, but you will be charged a 1% admin fee on every monthly installment paid after renunciation.",
    "added": "Please contact your bank or HDB to arrange for an alternative payment method for your loan.",
    "explain": "Participation in CPF schemes (Housing, Insurance, etc.) ends immediately when the account is closed.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Chloe",
      "age": 21,
      "bg": "new worker",
      "emoji": "🆔",
      "salutation": "Ms",
      "lastname": "Chloe"
    },
    "subject": "What is my CPF account number?",
    "enquiry": "I just started my first job and my HR is asking for my CPF account number so they can pay my salary. I haven't received any letter from CPF yet. Where can I find this number?",
    "date": "18 April 2026",
    "correct": "For Singapore Citizens and Permanent Residents, your CPF account number is the same as the Unique Identification Number (UIN) on your NRIC (e.g., S1234567A). You can provide this number to your employer.",
    "wrong1": "Your CPF account number is a unique 10-digit code that is generated only after your first contribution is received. You should ask your HR to leave that field blank for the first month.",
    "wrong2": "You can find your account number on the back of your Singpass token or by calling the CPF hotline. It is separate from your NRIC for security reasons and always starts with the letters 'CPF'.",
    "wrong3": "You must visit a CPF Service Centre to 'activate' your account first. They will then issue you a membership card which contains your 12-digit CPF account number and a temporary password.",
    "added": "Your account is automatically created once the first contribution or top-up is received.",
    "explain": "For SC/PRs, the CPF account number is simply their NRIC number.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Siti",
      "age": 34,
      "bg": "checking for parents",
      "emoji": "👨‍👩‍👧‍👦",
      "salutation": "Ms",
      "lastname": "Siti"
    },
    "subject": "Silver Support and Household Income",
    "enquiry": "I want to know if my father qualifies for Silver Support. I live with him and I earn a good salary. Does my income affect his eligibility? How do you calculate the household support?",
    "date": "20 April 2026",
    "correct": "Yes, household support is one of the criteria. It is measured by the average monthly income per person in the household. From 2025, the threshold is $2,300. If the total household income divided by the number of members exceeds this, he may not qualify.",
    "wrong1": "Household support only considers the income of the senior and their spouse. Children's incomes are excluded from the calculation to ensure that seniors are not penalized for living with their working children.",
    "wrong2": "We calculate household support based on the total value of all assets owned by everyone in the house, including cars, jewelry, and investments. If the total asset value is over $500,000, the senior is ineligible.",
    "wrong3": "Household support is determined by the number of working adults in the house. If there are more than two people with full-time jobs, the senior is automatically disqualified as they are assumed to have sufficient support.",
    "added": "This ensures the scheme is targeted towards those who need the most help.",
    "explain": "Household support is assessed via 'Average Monthly Household Income Per Person'.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Ahmad Razif",
      "age": 34,
      "bg": "warehouse supervisor",
      "emoji": "🏭",
      "salutation": "Mr",
      "lastname": "Razif"
    },
    "subject": "Employer did not pay CPF on time",
    "enquiry": "Dear CPF Board,\n\nI am writing because I noticed that my CPF contributions for last month have still not appeared in my account. My payslip shows the deduction was made but when I check online there are no new contributions.\n\nI have already asked my HR and they said the company is having some cash flow issues and they will pay soon. They did not give me a date.\n\nWhat can I do? Will I lose any interest because of this? I am also worried because I use my CPF OA to service my HDB loan.\n\nThank you,\nAhmad",
    "date": "12 March 2026",
    "correct": "We understand your concern. CPF contributions are due by the last day of each calendar month and employers who pay after the 14th of the following month (or the next working day if it falls on a weekend or Public Holiday) will incur late payment interest at 1.5% per month from the first day after the due date. As your employer has not provided a satisfactory response, you may lodge a report with CPF Board and we will follow up with your employer. If you are facing difficulty servicing your HDB loan, you may also contact HDB to explore alternative housing repayment options.",
    "wrong1": "We are sorry to hear about this situation. Please note that as long as your employer has deducted CPF contributions from your salary, the amount is considered paid. The 3 working day processing time may explain the delay. There is nothing further to do on your end — your contributions will appear shortly.",
    "wrong2": "Employers are given up to 30 days after the end of the month to remit CPF contributions. Your HR's response that they will pay soon is within the allowed timeframe. No late payment interest applies and your HDB loan will not be affected during this period.",
    "wrong3": "If your employer has indicated they are facing cash flow issues, CPF Board is unable to intervene as this is a private employment matter. You should seek advice from the Ministry of Manpower or a lawyer regarding any salary and CPF disputes.",
    "added": "Please do not hesitate to reach out if you need further assistance in resolving this matter.",
    "explain": "The correct response accurately states the due date, enforcement timeline (after the 14th), late interest rate (1.5% per month), the option to lodge a report with CPF Board, and the correct referral to HDB for housing loan difficulties.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Grace Tan",
      "age": 29,
      "bg": "accountant",
      "emoji": "💼",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "Viewing CPF transaction history beyond 15 months",
    "enquiry": "Hi CPF Board,\n\nI need to retrieve my CPF contribution records going back to 2020 for a housing loan application. When I check my Transaction History on the CPF app it only shows 15 months.\n\nCan I get records beyond 15 months? If yes, how far back can I go and how do I access them?\n\nThank you,\nGrace",
    "date": "14 March 2026",
    "correct": "You can access records beyond 15 months via your Yearly Statement of Account, which covers up to the past 10 years. This is available through my cpf digital services or the CPF Mobile app. Please note that CPF Board does not provide retrieval services for records beyond the past 10 years, so we encourage you to download and save your statements regularly for your own records.",
    "wrong1": "The CPF Transaction History on the app and website only stores the most recent 15 months of records. For records beyond this, you will need to visit a CPF Service Centre in person with your NRIC to request a printed statement. A fee of $5 per year of records applies.",
    "wrong2": "You can request records beyond 15 months by writing to us via the CPF website. Please provide your NRIC, date of birth, and the specific period you require. Our team will process the request within 10 working days.",
    "wrong3": "Transaction records are only available for 15 months online. For longer periods, please check with your previous employers as they are required to keep CPF contribution records for a minimum of 5 years and can provide you with official copies.",
    "added": "We recommend downloading your statements periodically to ensure you always have your records on hand.",
    "explain": "The correct response accurately states that the Yearly Statement of Account covers up to 10 years and that CPF Board does not retrieve records beyond 10 years.",
    "categories": [
      "Accounts Management",
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "David Lim",
      "age": 42,
      "bg": "secondary school vice-principal",
      "emoji": "🏫",
      "salutation": "Mr",
      "lastname": "Lim"
    },
    "subject": "Suspicious CPF notification in my email",
    "enquiry": "Good morning,\n\nI received an email last night saying there was a transaction in my CPF account. I do not recall doing anything and I am worried it might be a scam email. The email is asking me to click a link to review the transaction.\n\nHow do I know if the notification is a real one from CPF Board? Is CPF Board sending out monthly reminders? I did not sign up for anything like this.\n\nBest regards,\nDavid",
    "date": "16 March 2026",
    "correct": "CPF Board does send out monthly notifications to members with registered email addresses to remind them to review their transactions. To verify that a notification is legitimate, please check that the sender's email address ends with '@cpf.gov.sg', that the link in the email directs to the official CPF website (cpf.gov.sg), and that the content does not ask for your personal or financial information. If you are still unsure, please do not click any links and contact us directly.",
    "wrong1": "CPF Board does not proactively send transaction emails unless you have subscribed to our e-statements service. This email is very likely a phishing attempt. Please delete it immediately and do not click any links. You should also change your Singpass and CPF passwords immediately.",
    "wrong2": "All CPF transaction emails are sent from our official address noreply@cpfboard.gov.sg. If the email is not from this address it is a scam. CPF Board will never send monthly reminders — we only send emails when a specific transaction is triggered by the member.",
    "wrong3": "This sounds like a phishing email. Please forward it to our cybersecurity team at scam@cpf.gov.sg and we will investigate. In the meantime please avoid logging in to your CPF account until we confirm whether your account has been compromised.",
    "added": "When in doubt, always access your CPF account directly by typing cpf.gov.sg into your browser rather than clicking any link in an email.",
    "explain": "The correct response accurately explains that CPF Board does send monthly email reminders to registered members, and provides the correct verification steps (check sender domain @cpf.gov.sg, check link goes to cpf.gov.sg, no requests for personal data).",
    "categories": [
      "Accounts Management",
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Priya Nair",
      "age": 36,
      "bg": "marketing manager",
      "emoji": "📊",
      "salutation": "Ms",
      "lastname": "Nair"
    },
    "subject": "Updating bank account and contact details with CPF",
    "enquiry": "Hi,\n\nI recently switched banks and want to update my bank account with CPF Board so that my monthly payouts are sent to the right account. I also moved last month and have a new mobile number.\n\nCan I update both at the same time? And is there a waiting period before the new bank account becomes active?\n\nRegards,\nPriya",
    "date": "18 March 2026",
    "correct": "You can update both your bank account and contact details via my cpf digital services — Account settings using your Singpass. For bank account updates, if you choose PayNow (NRIC-linked), the account will be updated after 12 hours. If you choose Interbank GIRO, it generally takes up to two working days after your bank confirms that the account belongs to you. Please note that notifications will be sent to your registered contact details whenever changes are made, so it is important to ensure your contact details are also kept current.",
    "wrong1": "You can update your bank account and mobile number, but please note that both updates must be done separately on different days due to our security cooling-off period policy. Each update triggers a 24-hour lock on account settings to protect members from unauthorised changes.",
    "wrong2": "To update your bank account, please visit a CPF Service Centre with your new bank passbook or a bank statement showing your account number. Mobile number updates can be done online via my cpf digital services. Bank account changes take 5 working days to be verified and activated.",
    "wrong3": "Your bank account details are automatically synced from PayNow if you have updated your PayNow number with your new bank. There is no need to separately update CPF Board. For your mobile number, please update via my cpf digital services.",
    "added": "We recommend having your account details ready before starting the update process for a smoother experience.",
    "explain": "The correct response accurately states: updates via Account settings on my cpf digital services; PayNow takes 12 hours; Interbank GIRO takes up to two working days; and that contact details must be kept current to receive update notifications.",
    "categories": [
      "Accounts Management",
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Kevin Ong",
      "age": 51,
      "bg": "self-employed electrician",
      "emoji": "🔌",
      "salutation": "Mr",
      "lastname": "Ong"
    },
    "subject": "Singpass contact details vs CPF contact details",
    "enquiry": "Dear CPF Board,\n\nI updated my mobile number on my Singpass app last week. But I still receive OTPs from CPF on my old number. Is there a delay in syncing between Singpass and CPF?\n\nI am worried because scam calls have been increasing and I want my new number on all government records. Do I need to update separately with CPF?\n\nThank you.",
    "date": "20 March 2026",
    "correct": "Updates to your Singpass mobile number will not be automatically updated with CPF Board. You will need to separately update your mobile number via my cpf digital services — Account settings using your Singpass. An SMS One-Time PIN will be sent to your new number to verify the update. Once completed, all CPF notifications and OTPs will be sent to your newly registered number.",
    "wrong1": "Singpass and CPF Board share a common database for contact details. Updates made on Singpass are reflected in CPF records within 3 working days. Please wait until the end of this period before checking again. If the update has not synced after 5 days, please call our hotline.",
    "wrong2": "Your Singpass and CPF contact details are linked. When you update your Singpass mobile number, it is automatically reflected in CPF Board's records within 24 hours. The OTPs you received on your old number may have been triggered before the update was fully processed.",
    "wrong3": "CPF Board uses your NRIC number, not your mobile number, to send OTPs. The mobile number on your Singpass is used only for Singpass 2FA. There is no need to separately update CPF Board unless you want to receive marketing SMS messages.",
    "added": "Please ensure your contact details are always current with CPF Board to receive important account notifications promptly.",
    "explain": "The correct response accurately states that Singpass contact detail updates do NOT automatically update CPF Board records, and that members must separately update via my cpf digital services — Account settings.",
    "categories": [
      "Member Particulars",
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Linda Chow",
      "age": 47,
      "bg": "nurse",
      "emoji": "👩‍⚕️",
      "salutation": "Ms",
      "lastname": "Chow"
    },
    "subject": "Appointing a Trusted Contact for my CPF account",
    "enquiry": "Hi CPF Board,\n\nMy daughter recently warned me about CPF scams targeting older members. She suggested I add her as a Trusted Contact on my CPF account so she can help monitor for suspicious transactions.\n\nHow do I go about doing this? Can I also add my husband at the same time? And will my daughter be able to see my CPF balance or make any changes on my behalf?\n\nThank you,\nLinda",
    "date": "22 March 2026",
    "correct": "You can appoint your daughter and husband as Trusted Contacts via the Add or Remove Trusted Contact e-form, which requires you to log in with your Singpass. You may appoint up to two Trusted Contacts at the same time. Please note that your Trusted Contacts will only receive copies of your transaction notifications for specific CPF services — they cannot view your CPF account balances, access your statements, or make any transactions or changes on your behalf. You remain in full control of your account at all times.",
    "wrong1": "To add a Trusted Contact, please visit a CPF Service Centre with your NRIC and your daughter's NRIC. You may add up to three Trusted Contacts. Your Trusted Contact will be able to view your balance and help with transactions if you provide them with written authorisation.",
    "wrong2": "The Trusted Contact service is only available to members aged 55 and above. As you are 47, you are currently ineligible. We recommend exploring the CPF nomination service, which allows you to appoint someone to manage your CPF savings in the event of your passing.",
    "wrong3": "You can add your daughter as a Trusted Contact via the CPF website. You are limited to one Trusted Contact per account. Your daughter will receive copies of all your CPF statements and notifications and can call us on your behalf to make enquiries, though she cannot make transactions.",
    "added": "Having a Trusted Contact is a simple and effective way to add an extra layer of protection to your CPF account.",
    "explain": "The correct response accurately states: appoint via the Add or Remove Trusted Contact e-form with Singpass; up to two Trusted Contacts allowed; and that Trusted Contacts can only receive copies of transaction notifications — no access to balances, statements or the ability to transact.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Bernard Goh",
      "age": 63,
      "bg": "retired civil servant",
      "emoji": "🏛️",
      "salutation": "Mr",
      "lastname": "Goh"
    },
    "subject": "Trusted Contact and mental capacity concerns",
    "enquiry": "Dear CPF Board,\n\nI have been recently diagnosed with early-stage dementia. I want to set up arrangements for my CPF account while I still have the mental capacity to do so.\n\nI have already appointed a Trusted Contact (my son). I also have a Lasting Power of Attorney in place naming my son as my Donee.\n\nIf I lose mental capacity in the future, what happens to my Trusted Contact arrangement? Can my son make changes to it under the LPA?\n\nThank you,\nBernard",
    "date": "24 March 2026",
    "correct": "Your existing Trusted Contact appointment will remain valid even if you lose mental capacity — CPF Board upholds arrangements made by members prior to loss of capacity. However, your son as a Donee under your LPA does not automatically have authority to modify your Trusted Contact arrangements. Trusted Contact appointments can only be made or removed by you personally while you have capacity. Should the need arise, a Court-appointed Deputy (not a Donee) may apply to remove an existing Trusted Contact on your behalf. We encourage you to ensure your current arrangements are in order while you are still able to do so.",
    "wrong1": "Once you lose mental capacity, your Trusted Contact appointment will be automatically reviewed by CPF Board. Your son, as both Trusted Contact and LPA Donee, will be given expanded powers to manage your CPF account including making changes to your Trusted Contact list and withdrawals on your behalf.",
    "wrong2": "Your Trusted Contact arrangement will be suspended once CPF Board receives notification of your loss of mental capacity, to protect your account. Your son will need to apply to reactivate the service through the LPA framework with the Office of the Public Guardian.",
    "wrong3": "A Lasting Power of Attorney grants your son full authority to manage all your financial affairs including CPF account settings. He can remove or change your Trusted Contact arrangement at any time by presenting the LPA document at a CPF Service Centre.",
    "added": "We commend you for planning ahead. Please ensure your loved ones are aware of the arrangements you have put in place.",
    "explain": "The correct response accurately states: Trusted Contact appointment remains valid after loss of mental capacity; a Donee under an LPA does NOT automatically have authority to modify Trusted Contact arrangements; only a Court-appointed Deputy may apply to remove a Trusted Contact on the member's behalf.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Jessica Foo",
      "age": 31,
      "bg": "Malaysian ex-PR",
      "emoji": "🌐",
      "salutation": "Ms",
      "lastname": "Foo"
    },
    "subject": "Foreigner unable to log in to CPF digital services",
    "enquiry": "Hi,\n\nI am a Malaysian PR and I worked in Singapore for 8 years before returning to Malaysia last year. I still have CPF savings and want to check my balance online.\n\nI am trying to log in to my cpf digital services but my Singpass (registered under my old FIN number) does not seem to work anymore. I also tried using my CPF-issued account number which starts with SA but the Singpass login does not seem to accept it.\n\nHow can I access my account?\n\nThank you,\nJessica",
    "date": "26 March 2026",
    "correct": "We understand your difficulty. With the discontinuation of the OneKey Token from 1 April 2021, foreign CPF members are no longer able to access CPF digital services using Singpass registered under CPF-issued account numbers (e.g., SA987654C). If you have a FIN-linked Singpass with 2FA, you may use it to access CPF digital services. If you are unable to access your account digitally, you may write to us for CPF-related assistance. For Singpass access issues, please contact the Singpass Helpdesk directly as Singpass is governed by GovTech.",
    "wrong1": "As a non-resident who has left Singapore, your Singpass account has been deactivated as a standard security measure. You will need to apply for a new Singpass when you next visit Singapore in person at a Singpass counter. Once reactivated, you can log in to CPF digital services as usual.",
    "wrong2": "Foreign members who have left Singapore can access CPF digital services using the SingPass Foreign User mode at singpass.gov.sg/foreign. You will need your passport number and date of birth to log in. This service is available to all ex-PR holders for up to 10 years after leaving Singapore.",
    "wrong3": "Your CPF-issued account number (SA prefix) is your login ID for CPF digital services. Please visit cpf.gov.sg and select 'Log in with CPF account number' and enter your SA number with your CPF PIN. If you have forgotten your PIN please contact our hotline.",
    "added": "Please write to us if you require any assistance with your CPF account that cannot be done digitally.",
    "explain": "The correct response accurately states: OneKey Token was discontinued from 1 April 2021; FIN-linked Singpass with 2FA can be used; members may write in for assistance; Singpass issues should be directed to the Singpass Helpdesk (GovTech), not CPF Board.",
    "categories": [
      "Digital Services",
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Thomas Ng",
      "age": 55,
      "bg": "small business owner",
      "emoji": "🏪",
      "salutation": "Mr",
      "lastname": "Ng"
    },
    "subject": "CPF Service Centre appointment and employer matters",
    "enquiry": "Dear CPF Board,\n\nI want to make an appointment to visit a CPF Service Centre. I have two matters to discuss:\n\n1. A personal CPF query about my retirement account.\n2. A CPF contribution query relating to my employees.\n\nCan I handle both matters in a single visit? Also, how far in advance can I book an appointment?\n\nThank you,\nThomas",
    "date": "28 March 2026",
    "correct": "For your personal CPF retirement account query, you are welcome to visit any of our Service Centres by making an appointment up to 2 weeks in advance at our booking portal. However, please note that services for employer matters are only available through our digital services, hotline, or the Write to Us form — they cannot be handled at our Service Centres. We recommend resolving your employer-related CPF contribution query through one of those channels.",
    "wrong1": "You can handle both personal and employer CPF matters at any Service Centre. Please make an appointment via our website at least 3 working days in advance. Our officers can assist with both types of queries in a single visit, though you may be served by different counters.",
    "wrong2": "Appointments can be made up to 4 weeks in advance to give members more planning flexibility. Both personal and employer matters can be discussed during your visit. Please bring along your NRIC and relevant business documents.",
    "wrong3": "Service Centres handle all CPF-related matters including employer queries. You can walk in without an appointment for most services, though appointments are preferred. Appointment bookings open 1 month in advance to allow for planning.",
    "added": "You may access employer digital services via the CPF Employer Portal at cpf.gov.sg.",
    "explain": "The correct response accurately states: appointment booking window is 2 weeks; employer or self-employed matters are only available via digital services, hotline, or Write to Us — not at Service Centres. Personal matters can be handled at Service Centres.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Nancy Wee",
      "age": 58,
      "bg": "homemaker",
      "emoji": "🏠",
      "salutation": "Mdm",
      "lastname": "Wee"
    },
    "subject": "Incorrect information on CPF statement",
    "enquiry": "Dear Sir/Madam,\n\nI have been reviewing my CPF Yearly Statement and I noticed that one of the contribution entries from my previous employer looks incorrect. The amount shown is much lower than what was deducted from my salary based on my payslips.\n\nWhat should I do? Is there a deadline to report this?\n\nThank you,\nNancy Wee",
    "date": "30 March 2026",
    "correct": "Please notify us immediately via the Write to Us service on the CPF website if you believe information in your CPF statement is incorrect. It is your responsibility to carefully review your CPF statements and to report any discrepancies promptly. We recommend having your payslips or other supporting documents ready when you write to us so that we can investigate the matter efficiently.",
    "wrong1": "Discrepancies in CPF statements can sometimes occur due to processing delays. Please wait for the following month's statement to see if the figures are corrected before writing in. If the error is still present after two statements, you may contact us via the CPF hotline.",
    "wrong2": "CPF statement errors must be reported within 6 months of the statement date, after which we are unable to make retrospective amendments. Please visit a CPF Service Centre with your payslips within this window to raise a formal dispute with our staff.",
    "wrong3": "As the statement reflects contribution records submitted by your employer, any discrepancies must be taken up directly with your previous employer. CPF Board is unable to amend the figures without a formal correction submission from the employer, which can take 4 to 6 weeks.",
    "added": "We encourage all members to review their statements regularly and report any discrepancies as soon as possible.",
    "explain": "The correct response accurately states: report immediately via Write to Us; it is the member's responsibility to review statements and report discrepancies; no specific deadline is given in the FAQs — the instruction is to notify immediately.",
    "categories": [
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Wei Liang",
      "age": 41,
      "bg": "software engineer returning to China",
      "emoji": "✈️",
      "salutation": "Mr",
      "lastname": "Wei"
    },
    "subject": "Downloading CPF statements before Singpass expires",
    "enquiry": "Hi CPF Board,\n\nI am renouncing my Singapore PR next month and returning to China permanently. My colleague told me that once I renounce, my Singpass will stop working and I will not be able to access my CPF account online.\n\nIs this true? What information should I download before I renounce? Can I still call or email CPF to get my account details after?\n\nThank you,\nWei Liang",
    "date": "02 April 2026",
    "correct": "We strongly advise you to download all CPF information you require — such as your statements, transaction history, and account balances — via my cpf digital services or the CPF Mobile app while you still have access to your Singpass account. Once your Singpass access is affected, it will be difficult to retrieve this information remotely. Please note that for your protection, CPF Board is unable to disclose specific account information over phone or email due to identity authentication difficulties. Your full CPF savings will be transferred to your bank account upon your request after account closure.",
    "wrong1": "You can continue to access your CPF account online for up to 12 months after renunciation using your existing Singpass. CPF Board has a grace period to allow members to settle their affairs. After 12 months, you may call our hotline with your NRIC and date of birth to get your account details.",
    "wrong2": "After renunciation, you can still access your CPF account by logging in with your old FIN number and a one-time password sent to your registered mobile number. There is no rush to download your statements before renouncing.",
    "wrong3": "CPF Board will automatically mail a final account statement to your registered overseas address within 4 weeks of your renunciation. You do not need to download anything beforehand.",
    "added": "Please ensure your bank account details are also registered with CPF Board before renouncing to facilitate a smooth transfer of your savings.",
    "explain": "The correct response accurately advises downloading all required information while Singpass is still active, and correctly states that CPF Board cannot disclose account details over phone or email for security reasons.",
    "categories": [
      "Account Closure",
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Suresh Pillai",
      "age": 48,
      "bg": "Indian national, ex-PR",
      "emoji": "🌏",
      "salutation": "Mr",
      "lastname": "Pillai"
    },
    "subject": "CPF savings balance showing zero after account closure",
    "enquiry": "Dear CPF Board,\n\nI renounced my PR in February this year. I had not yet submitted my withdrawal form. I just checked my CPF account and the balance is showing $0. I did not authorise any transfer.\n\nWhere has my money gone? I am very worried.\n\nRegards,\nSuresh",
    "date": "04 April 2026",
    "correct": "Please do not be alarmed. As you are no longer a Singapore Citizen or Permanent Resident, your CPF account was automatically closed in the month following your renunciation, and your remaining savings were transferred out of your CPF account into the General Moneys of the Fund (GMF) — an account where CPF Board holds unclaimed monies on your behalf. Your savings are still earning a concession interest rate until 31 March 2027. You can transfer your savings to your bank account at any time by submitting an account closure application.",
    "wrong1": "A zero balance indicates your account was successfully closed and all funds have been transferred to the bank account registered with CPF Board. Please check your bank statement for the incoming transfer, which may take up to 5 working days to appear.",
    "wrong2": "Your balance may be showing zero due to a system update. Please check again after 3 working days. If it still shows zero, please call our hotline immediately with your NRIC to report a possible unauthorised transaction.",
    "wrong3": "Once your PR was renounced, your CPF savings are forfeited under the CPF Act as they can only be held by Singapore Citizens and PRs. You will need to consult a lawyer if you wish to contest this.",
    "added": "Please submit your withdrawal application as soon as possible to have your savings transferred to your bank account.",
    "explain": "The correct response accurately explains that savings are moved to the General Moneys of the Fund (GMF) upon automatic closure — not lost — and that the member can still claim them by submitting an application.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Nurul Aisyah",
      "age": 35,
      "bg": "Malaysian, working in Singapore",
      "emoji": "🇲🇾",
      "salutation": "Ms",
      "lastname": "Aisyah"
    },
    "subject": "How to close CPF account as a Malaysian",
    "enquiry": "Dear CPF Board,\n\nI am Malaysian and I have decided not to renew my Singapore Employment Pass. I am returning to Malaysia permanently next month.\n\nHow do I close my CPF account and withdraw my savings? I still have my Singpass. Is there a faster way for Malaysians?\n\nThank you,\nNurul",
    "date": "06 April 2026",
    "correct": "As a Malaysian, you have the option of completing an online form to close your CPF account, which is the fastest method — you will need your CPF Account Number to do so. Alternatively, you may submit your application via Write to Us with your Singpass, or visit a CPF Service Centre by appointment before you leave Singapore for faster processing. Online applications typically take about six weeks from submission, while other modes take about 12 weeks from receipt of all documents. We recommend applying before leaving Singapore as additional certification requirements apply for overseas applications.",
    "wrong1": "All non-PR account closures must be done in person at a CPF Service Centre regardless of nationality. Please make an appointment before your departure. Bring your original passport, employment pass, and bank account details.",
    "wrong2": "As a Malaysian, you can simply call our hotline with your CPF account number and NRIC to initiate the closure and request a telegraphic transfer to your Malaysian bank account. Processing takes 2 to 3 weeks.",
    "wrong3": "You do not need to actively close your account. Your CPF account will be automatically closed 3 months after your Employment Pass expires and the balance transferred to the bank account on file. No action is required.",
    "added": "We recommend applying before you leave Singapore as overseas applications require additional document certification which may take longer.",
    "explain": "The correct response accurately describes the Malaysian-specific online form option, the Write to Us option with Singpass, and the Service Centre option; and correctly states the processing times (6 weeks online, 12 weeks other modes).",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Tan Boon Kiat",
      "age": 52,
      "bg": "ex-PR, recently re-obtained PR",
      "emoji": "🔄",
      "salutation": "Mr",
      "lastname": "Tan"
    },
    "subject": "Re-obtained PR — do I need to refund my CPF savings?",
    "enquiry": "Dear CPF Board,\n\nI renounced my Singapore PR three years ago and withdrew all my CPF savings at that time. I have recently been granted Singapore PR again.\n\nDo I need to refund any of my previously withdrawn CPF savings now that I am a PR again? If yes, how much do I need to refund?\n\nThank you,\nBoon Kiat",
    "date": "08 April 2026",
    "correct": "Yes, upon reinstating your Singapore Permanent Residency, you are required to refund your CPF savings with accrued interest. The amount to be refunded includes the savings that were transferred to your bank account upon account closure, savings used for CPF scheme participation such as investments, any contributions that should have been paid prior to account closure such as outstanding MediSave liabilities, and any savings used to clear past debts such as tax arrears or education loans. Please contact us via Write to Us or visit a CPF Service Centre for assistance in calculating the exact amount.",
    "wrong1": "There is no requirement to refund previously withdrawn CPF savings when re-obtaining PR. Your new CPF account will start fresh and contributions will accrue from the date of your new PR status onwards. The previously withdrawn savings are considered settled.",
    "wrong2": "You will only need to refund the amount that was in your Medisave Account at the time of closure, as this is a compulsory health savings scheme. Ordinary Account and Special Account savings that were withdrawn do not need to be refunded.",
    "wrong3": "Whether you need to refund depends on how long ago you withdrew your savings. If it has been more than 2 years, CPF Board will waive the refund requirement. As it has been 3 years in your case, you are not required to refund anything.",
    "added": "Please contact us to find out the exact amount you are required to refund so that you can plan accordingly.",
    "explain": "The correct response accurately states that refund is required upon reinstatement of citizenship or PR, and lists all four categories of amounts to be refunded, consistent with the FAQ.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Hwang Ji Yeon",
      "age": 39,
      "bg": "Korean national, ex-PR",
      "emoji": "🇰🇷",
      "salutation": "Ms",
      "lastname": "Hwang"
    },
    "subject": "How long will it take to receive my CPF savings?",
    "enquiry": "Hello,\n\nI renounced my Singapore PR last month and I have submitted my CPF account closure form by post with all the required documents certified by the Singapore Overseas Mission in Seoul.\n\nHow long will it take to receive my CPF savings? I opted for telegraphic transfer to my Korean bank account.\n\nThank you,\nJi Yeon",
    "date": "10 April 2026",
    "correct": "As your application was submitted by post, the processing time is approximately 12 weeks from the date CPF Board receives all your documents. On top of this, please allow an additional 5 to 12 working days for the telegraphic transfer to reach your overseas bank account. We kindly ask that you wait at least three months from your application date before following up with us, as this helps us focus on processing applications. Please also ensure your bank accepts payment in Singapore dollars, as CPF Board will convert to US dollars if not.",
    "wrong1": "Postal applications are processed within 4 weeks of receipt. Telegraphic transfers to Korean bank accounts take 2 to 3 working days. You should receive your funds within 5 to 6 weeks of submission.",
    "wrong2": "As your documents were certified by a Singapore Overseas Mission, your application is treated as an in-person application and will be processed within 3 weeks. Telegraphic transfers take 1 to 2 working days to a Korean bank.",
    "wrong3": "International postal applications take 6 months to process due to additional verification requirements for overseas applicants. If you want to receive your savings faster, you should return to Singapore to submit your application at a CPF Service Centre.",
    "added": "Please check with your bank on any applicable charges for receiving telegraphic transfers in foreign currencies.",
    "explain": "The correct response accurately states: 12 weeks for non-online applications; 5–12 working days for telegraphic transfer; wait at least 3 months before following up; and the bank currency requirement.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Ravi Chandran",
      "age": 57,
      "bg": "former PR, recently widowed",
      "emoji": "👨‍👧",
      "salutation": "Mr",
      "lastname": "Chandran"
    },
    "subject": "CPF savings of deceased non-PR spouse",
    "enquiry": "Dear CPF Board,\n\nMy wife passed away recently. She had renounced her Singapore PR two years ago but had not yet withdrawn her CPF savings before she passed.\n\nAs her next of kin and legal spouse, how do I go about claiming her remaining CPF savings?\n\nPlease advise. Thank you,\nRavi",
    "date": "14 April 2026",
    "correct": "We are sorry for your loss. As the next of kin, you will need to inform CPF Board of your wife's passing by submitting the original death certificate. Once notified, her remaining savings will be distributed to her beneficiaries based on whether she had made a valid CPF nomination before her passing. If a valid nomination exists, the savings will be paid to her nominated beneficiaries. If no nomination was made, the savings will be distributed in accordance with the Intestate Succession Act or her will if one exists. Please contact us via Write to Us or visit a CPF Service Centre for further assistance.",
    "wrong1": "As the legal spouse, you are automatically entitled to your wife's remaining CPF savings. Please visit a CPF Service Centre with the original death certificate and your marriage certificate to initiate the claim. Processing takes 4 to 6 weeks.",
    "wrong2": "Since your wife's CPF account was already closed upon her renunciation, there are no CPF savings to claim. The savings would have been forfeited upon account closure if not withdrawn within the stipulated period.",
    "wrong3": "For deceased non-PR members, unclaimed CPF savings are transferred to the Public Trustee's Office automatically after 12 months. You will need to contact the Public Trustee's Office directly to make a claim as CPF Board no longer holds the funds.",
    "added": "Please do not hesitate to contact us and we will assist you through the process during this difficult time.",
    "explain": "The correct response accurately states: submit the original death certificate to CPF Board; distribution depends on whether a valid CPF nomination was made; and that the Intestate Succession Act applies if no nomination exists.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Mei Fong",
      "age": 44,
      "bg": "HR manager",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Mei Fong"
    },
    "subject": "DPS coverage after renouncing PR",
    "enquiry": "Dear CPF Board,\n\nI am in the process of renouncing my Singapore PR. I currently have Dependants' Protection Scheme (DPS) coverage.\n\nWhat happens to my DPS when I renounce? Will I get any refund of premiums I have already paid?\n\nThank you,\nMei Fong",
    "date": "16 April 2026",
    "correct": "Your Dependants' Protection Scheme (DPS) coverage will be terminated on the date of your renunciation, as the scheme is only available to Singapore Citizens and Permanent Residents. Your DPS insurer, Great Eastern Life, will refund any unused DPS premiums for the current policy year to your CPF account on a pro-rated basis — covering the remaining months of your policy year after your termination date. These unused premiums will be paid to you together with your CPF savings when you transfer your savings to your bank account. For specific questions about your refund amount, please contact Great Eastern Life directly.",
    "wrong1": "Your DPS coverage will continue until the end of your current policy year regardless of your renunciation. Premiums paid are non-refundable. You should consider whether you want to purchase an equivalent private life insurance policy before your DPS expires.",
    "wrong2": "DPS coverage ends immediately upon renunciation and no refund of premiums is given, as the premiums cover the risk that has already been provided during the time of coverage. Any outstanding DPS claims made before renunciation will still be honoured.",
    "wrong3": "DPS premiums are held in your MediSave Account. Upon renunciation, you can choose to transfer the full remaining DPS premium balance to your bank account directly. No pro-ration applies as the premiums are treated as savings.",
    "added": "For any questions about your specific DPS refund amount or calculation, please contact Great Eastern Life directly.",
    "explain": "The correct response accurately states: DPS terminates on renunciation date; pro-rated refund of unused premiums goes to CPF account; paid out with CPF savings; contact Great Eastern Life for specifics.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Aaron Lim",
      "age": 31,
      "bg": "fresh graduate, first job",
      "emoji": "🎓",
      "salutation": "Mr",
      "lastname": "Lim"
    },
    "subject": "Appointing my mum as Trusted Contact — overseas concern",
    "enquiry": "Hi CPF Board,\n\nI want to appoint my mother as my Trusted Contact. She is a Singapore Citizen but currently lives in Perth, Australia with my sister. She still has a Singpass account and a Singapore SIM card.\n\nIs she eligible to be my Trusted Contact even though she is not based in Singapore?\n\nThank you,\nAaron",
    "date": "17 April 2026",
    "correct": "Yes, your mother can be appointed as your Trusted Contact even though she is not based in Singapore, as long as she meets the eligibility criteria. She must be a CPF member aged 21 and above, a Singapore Citizen or Permanent Resident with a Singpass account, and have both a Singapore-registered mobile number and an email address registered with CPF Board. Based on what you have described, she appears to meet these requirements. You can appoint her via the Add or Remove Trusted Contact e-form using your Singpass.",
    "wrong1": "Trusted Contacts must be Singapore-based as CPF Board may need to contact them urgently in the event of suspicious transactions. Your mother would need to return to Singapore and register a local address before she can be appointed.",
    "wrong2": "Your mother can be appointed as a Trusted Contact but with limited functions. Overseas-based Trusted Contacts can only receive email notifications — SMS notifications will not be sent to foreign numbers. Please confirm her email address is registered with CPF Board.",
    "wrong3": "The Trusted Contact service is only available for members aged 55 and above as it is designed for seniors who may be more vulnerable to scams. As you are 31, you are currently not eligible to appoint a Trusted Contact.",
    "added": "Please remind your mother to check that her Singapore-registered mobile number and email address are up to date with CPF Board before you submit the appointment request.",
    "explain": "The correct response accurately states that overseas-based Trusted Contacts are permitted as long as eligibility criteria are met (CPF member 21+, SC/PR, Singpass, Singapore mobile and email registered with CPF Board).",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Cynthia Ho",
      "age": 56,
      "bg": "retail business owner",
      "emoji": "🛍️",
      "salutation": "Ms",
      "lastname": "Ho"
    },
    "subject": "Trusted Contact appointment request expired",
    "enquiry": "Hi,\n\nI submitted a Trusted Contact appointment request for my husband last week. I just received a notification saying the request has expired. He says he never received anything from CPF.\n\nWhat happened and what should I do now?\n\nThanks,\nCynthia",
    "date": "19 April 2026",
    "correct": "Your appointment request expired because your husband did not respond within seven days of the submission. CPF Board sends notifications via email, SMS, and CPF Mobile app push notifications to inform the appointee of the request. We strongly encourage you to personally inform your husband about the appointment request beforehand so he knows to look out for it. To proceed, you will need to submit a new Trusted Contact appointment request. Please also ask your husband to ensure his contact details — including email address and mobile number — are registered and up to date with CPF Board so he receives the notifications.",
    "wrong1": "The request likely failed because your husband is not eligible to be a Trusted Contact. Please check that he is a CPF member, has Singpass, and has a Singapore-registered mobile number and email address with CPF Board before resubmitting.",
    "wrong2": "Appointment requests expire after 3 days if not acted upon. CPF Board only sends one notification — if your husband missed it, there is nothing we can do to resend it. Please submit a new request and make sure he accepts it on the same day.",
    "wrong3": "A request expiry usually means your husband has already reached the maximum limit of two Trusted Contact appointments as an appointee for other members. He will need to remove one of his existing appointments before he can accept yours.",
    "added": "We strongly encourage you to let your husband know about the new request so he can accept it promptly within the 7-day window.",
    "explain": "The correct response accurately states that the request expired after 7 days; CPF Board notifies via email, SMS and push notifications; the member should personally inform the appointee; and a new request must be submitted.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "James Koh",
      "age": 60,
      "bg": "retired teacher",
      "emoji": "📚",
      "salutation": "Mr",
      "lastname": "Koh"
    },
    "subject": "Difference between Trusted Contact and CPF nomination",
    "enquiry": "Dear CPF Board,\n\nI am trying to understand the difference between the Trusted Contact service and a CPF nomination. My friend said they are the same thing. Is that correct?\n\nAlso, I have an existing CPF nomination. Do I still need to set up a Trusted Contact?\n\nThank you,\nJames",
    "date": "21 April 2026",
    "correct": "The Trusted Contact service and CPF nomination are two completely separate services. The Trusted Contact service allows you to appoint a trusted individual to receive copies of your transaction notifications, so they can help monitor for unusual CPF account activity and alert you to potential scams — they have no power to transact on your behalf. A CPF nomination, on the other hand, specifies who will receive your CPF savings after your passing. Having a CPF nomination does not replace the need for a Trusted Contact, and vice versa. Both serve different purposes and we encourage you to consider both.",
    "wrong1": "Your friend is correct — a CPF nomination automatically covers the Trusted Contact function. When you nominate someone, they are also granted the ability to monitor your account transactions. There is no need to set up a separate Trusted Contact.",
    "wrong2": "A Trusted Contact is an upgraded version of a CPF nomination. When you set up a Trusted Contact, they are also registered as your CPF nominee for a portion of your savings. You should only set up one or the other, not both.",
    "wrong3": "The Trusted Contact service and CPF nomination are similar but the Trusted Contact is for members aged 55 and above while CPF nomination is for all ages. Since you already have a nomination, you may want to wait until you are older before setting up a Trusted Contact.",
    "added": "We encourage you to consider setting up both a CPF nomination and a Trusted Contact, as they each serve a distinct and important purpose.",
    "explain": "The correct response accurately distinguishes the two services: Trusted Contact = scam monitoring via notifications only, no transactional power; CPF nomination = distribution of savings upon death. They are separate services.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Sally Teo",
      "age": 38,
      "bg": "full-time caregiver",
      "emoji": "🤝",
      "salutation": "Ms",
      "lastname": "Teo"
    },
    "subject": "Removing Trusted Contact on behalf of elderly parent",
    "enquiry": "Dear CPF Board,\n\nMy 80-year-old mother has a Trusted Contact who is her neighbour. We have recently found out that the neighbour has been taking advantage of her. We want to remove this person as her Trusted Contact immediately.\n\nMy mother has an LPA that names me as her Donee. Can I remove the Trusted Contact using the LPA? She does not have mental capacity anymore.\n\nUrgently,\nSally",
    "date": "23 April 2026",
    "correct": "We understand the urgency of your situation. As a Donee under a Lasting Power of Attorney (LPA), you can write to CPF Board via Singpass to request the removal of the Trusted Contact on your mother's behalf. To do so, you will need to submit the LPA document along with a medical report certifying your mother's loss of mental capacity. Please contact us via Write to Us as soon as possible and we will assist you.",
    "wrong1": "Only the CPF member personally can remove a Trusted Contact. Since your mother no longer has mental capacity, the Trusted Contact arrangement is frozen and cannot be changed until she regains capacity. We recommend seeking a court injunction to restrict the neighbour's access.",
    "wrong2": "As a Donee under an LPA, you have full authority to remove Trusted Contacts without any additional documents. Simply log in to my cpf digital services with your Singpass and navigate to your mother's Account settings to remove the Trusted Contact.",
    "wrong3": "The fastest way to remove a Trusted Contact for a member who has lost mental capacity is to call our hotline and provide the member's NRIC and your own NRIC. We can deactivate the Trusted Contact arrangement immediately over the phone.",
    "added": "Please contact us via Write to Us with the required documents and we will prioritise your request.",
    "explain": "The correct response accurately states that a Donee under an LPA can write to CPF Board via Singpass to request removal, providing the LPA document and a medical report certifying loss of mental capacity.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Henry Yap",
      "age": 45,
      "bg": "accountant",
      "emoji": "🧮",
      "salutation": "Mr",
      "lastname": "Yap"
    },
    "subject": "Why Trusted Contact cannot see CPF balance",
    "enquiry": "Hi CPF Board,\n\nI have appointed my wife as my Trusted Contact. She says she can receive notifications when I make transactions but she cannot see my CPF account balance or full statement.\n\nWhat is the point of a Trusted Contact if she cannot see my full account? Can I grant her more access?\n\nThank you,\nHenry",
    "date": "25 April 2026",
    "correct": "The Trusted Contact service is intentionally designed to be limited to receiving copies of transaction notifications for specific CPF services, rather than full account access. This design preserves your privacy and ensures you retain complete control over your retirement savings at all times. The purpose of the Trusted Contact is to provide an additional layer of scam protection — your wife can spot unusual or unexpected transactions and alert you promptly. If you would like your wife to be involved in managing your CPF account more broadly, you may wish to explore other legal arrangements such as a Lasting Power of Attorney.",
    "wrong1": "You can grant your wife expanded access by submitting a Third Party Access form via my cpf digital services. This allows her to view your balance and statements. However, she still cannot make transactions on your behalf.",
    "wrong2": "Full account access for Trusted Contacts is being rolled out in phases. Currently only transaction notifications are available but CPF Board plans to enable balance and statement viewing for Trusted Contacts by end of this year.",
    "wrong3": "To grant your wife access to your full account, both of you must visit a CPF Service Centre together with your NRICs. She can be granted a 'Trusted Viewer' status which is a higher tier than a standard Trusted Contact.",
    "added": "The Trusted Contact service provides meaningful protection against scams without compromising your account privacy or security.",
    "explain": "The correct response accurately explains that limited access is intentional — to balance scam protection with account privacy — and that the Trusted Contact cannot view balances or statements. An LPA is suggested as an alternative for broader access.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Olivia Tan",
      "age": 27,
      "bg": "young professional",
      "emoji": "💻",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "I received a Trusted Contact appointment request from a stranger",
    "enquiry": "Hello CPF Board,\n\nI received a notification saying someone has requested me to be their Trusted Contact. I do not recognise the name at all. I have never met this person.\n\nIs this a scam? What should I do?\n\nThank you,\nOlivia",
    "date": "27 April 2026",
    "correct": "You should decline the appointment request. The notification you received is a legitimate CPF Board notification, but the request itself may have been made in error or by someone you do not know. As the Trusted Contact role involves monitoring another person's CPF transaction notifications, you should only accept requests from people you know and trust. You can decline the request at the Trusted Contacts section under your Account settings. No further action is needed after declining.",
    "wrong1": "This is definitely a scam. You should not click on any links in the notification. Please report the incident to the police and call CPF Board's anti-fraud hotline immediately. Change your Singpass password and do not log in to any CPF services until the matter is investigated.",
    "wrong2": "You must accept the request as declining it may flag your account for review. The person who sent the request may simply be a distant relative who did not inform you beforehand. Please accept first and you can always remove yourself later.",
    "wrong3": "If you do not recognise the person, please call our hotline immediately as this could indicate your NRIC number has been compromised. We will freeze your account temporarily while we investigate how a third party obtained your details.",
    "added": "You can accept or decline appointment requests at any time via the Trusted Contacts section under your Account settings.",
    "explain": "The correct response accurately advises declining the request via Account settings; the notification is legitimate but the request should only be accepted from trusted persons; no further action needed after declining.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Raymond Chng",
      "age": 49,
      "bg": "logistics manager",
      "emoji": "🚛",
      "salutation": "Mr",
      "lastname": "Chng"
    },
    "subject": "How to distinguish Trusted Contact notifications from my own",
    "enquiry": "Hi CPF Board,\n\nI have agreed to be a Trusted Contact for my elderly father. I am now receiving notifications from CPF Board on my email and phone.\n\nHow do I know which notifications are for my own CPF account and which are for my father's account? The emails look similar and I am getting confused.\n\nThanks,\nRaymond",
    "date": "29 April 2026",
    "correct": "CPF Board clearly labels notifications that are sent to you in your capacity as a Trusted Contact. For SMS notifications, they begin with the prefix '(To Trusted Contact)'. For email notifications, they contain the text 'You are receiving this notification as an appointed Trusted Contact'. For push notifications via the CPF Mobile app (if enabled), they contain 'You are receiving this notification as an appointed Trusted Contact of [your father's name]'. Any notification without these labels is for your own CPF account.",
    "wrong1": "Trusted Contact notifications are sent from a different email address — noreply-trustedcontact@cpf.gov.sg — while your own notifications come from noreply@cpf.gov.sg. You can set up an email filter to sort them automatically.",
    "wrong2": "All CPF notifications go to the same inbox and are not labelled differently. You will need to check the account number mentioned in the notification to determine whether it relates to your account or your father's. Your NRIC starts with S or T while your father's will be different.",
    "wrong3": "Trusted Contact notifications are only sent via push notifications on the CPF Mobile app. You would not receive them via SMS or email unless you have specifically opted in. Please check your notification settings in the app.",
    "added": "We recommend checking the notification labels carefully so you can promptly identify and act on any unusual transactions in your father's account.",
    "explain": "The correct response accurately describes all three notification labels: SMS begins with '(To Trusted Contact)'; email contains 'You are receiving this notification as an appointed Trusted Contact'; push notification contains the appointer's name.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Poh Bee Lian",
      "age": 66,
      "bg": "retiree",
      "emoji": "🌸",
      "salutation": "Mdm",
      "lastname": "Poh"
    },
    "subject": "Why did CPF remove my Trusted Contact without my request?",
    "enquiry": "Dear CPF Board,\n\nI received a notification saying my Trusted Contact appointment has been removed by CPF Board. I did not request this removal.\n\nMy Trusted Contact is my daughter. Has anything happened to her account? I am very worried.\n\nThank you,\nBee Lian",
    "date": "01 May 2026",
    "correct": "CPF Board may remove a Trusted Contact appointment when either the appointer or the appointed Trusted Contact is no longer eligible to use the service — for example, if the Trusted Contact's Singpass account has been deactivated, they have renounced their citizenship or PR, or there has been a change in other eligibility criteria. We recommend checking with your daughter directly to find out if there has been a change in her circumstances. If her eligibility has been restored, you are welcome to submit a new Trusted Contact appointment request.",
    "wrong1": "This is unusual and should not happen without your authorisation. Please call our fraud hotline immediately as this may indicate your account has been compromised. We will investigate and reinstate your Trusted Contact arrangement.",
    "wrong2": "CPF Board removes all Trusted Contact arrangements at the end of each calendar year as part of our annual refresh process. You will need to re-submit appointment requests in January to re-establish your Trusted Contact arrangements.",
    "wrong3": "Your daughter may have voluntarily removed herself as your Trusted Contact via the self-removal e-form. Please check with her directly. If she confirms she did not do this, please write to us immediately.",
    "added": "Please contact us if you need any assistance re-establishing your Trusted Contact arrangement.",
    "explain": "The correct response accurately states that CPF Board removes Trusted Contact appointments when either party is no longer eligible to use the service, and advises checking with the daughter about changes in her circumstances.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Steven Loh",
      "age": 34,
      "bg": "IT consultant",
      "emoji": "💡",
      "salutation": "Mr",
      "lastname": "Loh"
    },
    "subject": "NRIC name mismatch error when appointing Trusted Contact",
    "enquiry": "Hi CPF Board,\n\nI am trying to appoint my wife as my Trusted Contact. I keep getting an error saying her name does not match her NRIC/CPF account number. I have checked her NRIC and typed the name exactly as shown.\n\nHer NRIC shows her name as 'TAN, SIEW LING @ LINDA'. I typed 'TAN SIEW LING LINDA' but it says wrong. What am I doing wrong?\n\nThanks,\nSteven",
    "date": "03 May 2026",
    "correct": "You need to enter your wife's full name exactly as shown on her NRIC, including any punctuation such as commas, hyphens, or slashes. In her case, the name should be entered as 'TAN, SIEW LING @ LINDA' — including the comma after TAN and the @ symbol. However, you should exclude the Hanyu Pinyin name, Alias, and Married name if they are listed separately. Please try entering the name with the punctuation and see if the error is resolved.",
    "wrong1": "The system only accepts the primary name on the NRIC and does not support special characters like commas or @ symbols. Please enter only 'TAN SIEW LING' without the alias. The @ symbol portion is an alias and should be excluded.",
    "wrong2": "Please try using your wife's full name in lowercase as the system is case-sensitive. Type 'Tan, Siew Ling @ Linda' with proper capitalisation. If the error persists, please call our hotline for manual verification.",
    "wrong3": "This error typically means your wife's name has not been updated in CPF Board's system. She will need to visit a CPF Service Centre with her NRIC to update her name before you can proceed with the Trusted Contact appointment.",
    "added": "If you continue to face difficulties after entering the correct name with punctuation, please do not hesitate to contact us for further assistance.",
    "explain": "The correct response accurately states to include all punctuation (commas, hyphens, slashes) as shown on the NRIC, but to exclude Hanyu Pinyin, Alias, and Married names.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Diana Ng",
      "age": 52,
      "bg": "teacher",
      "emoji": "📖",
      "salutation": "Ms",
      "lastname": "Ng"
    },
    "subject": "Trusted Contact not receiving my notifications",
    "enquiry": "Dear CPF Board,\n\nI have an appointed Trusted Contact — my brother. I recently updated my bank account with CPF Board but my brother says he did not receive any notification about this transaction.\n\nIs the Trusted Contact service not working? Should I remove and re-add him?\n\nThank you,\nDiana",
    "date": "05 May 2026",
    "correct": "The Trusted Contact service only sends notifications for a specific set of transactions: CPF lump sum withdrawals for immediate retirement needs, contact details updates, bank account updates, and daily withdrawal limit updates. A bank account update should have triggered a notification to your brother. If he did not receive it, please ask him to check his registered email address and mobile number, and also his CPF Mobile app push notification settings. It is also possible the notification went to his spam or junk folder. If the issue persists, please contact us.",
    "wrong1": "The Trusted Contact service is designed to notify only for large transactions above $10,000. Routine updates such as bank account changes do not trigger notifications. Only significant CPF withdrawals will alert your Trusted Contact.",
    "wrong2": "Notifications to Trusted Contacts are sent only on weekdays during business hours (9am to 5pm). If your bank account update was made on a weekend or public holiday, the notification to your brother would have been sent the next working day.",
    "wrong3": "Since you recently updated your bank account, CPF Board's system may have flagged your account for a security review. During this review, Trusted Contact notifications are temporarily paused. The notifications will resume once the review is completed, usually within 3 working days.",
    "added": "Please ask your brother to check his spam or junk mail folder and ensure his notification settings are active on the CPF Mobile app.",
    "explain": "The correct response accurately lists the four transaction types covered by the Trusted Contact notification service, confirms bank account updates are covered, and suggests checking spam folders and contact detail registration.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Marcus Chia",
      "age": 29,
      "bg": "fresh graduate, just started work",
      "emoji": "👔",
      "salutation": "Mr",
      "lastname": "Chia"
    },
    "subject": "How to become a Trusted Contact for my parents",
    "enquiry": "Hi CPF Board,\n\nBoth my parents want to add me as their Trusted Contact. I am 29 years old and a Singapore Citizen. I have Singpass and my mobile and email are registered with CPF Board.\n\nCan I be a Trusted Contact for both of them at the same time? Is there a limit to how many people I can be a Trusted Contact for?\n\nThank you,\nMarcus",
    "date": "07 May 2026",
    "correct": "You are eligible to be a Trusted Contact as you meet all the criteria — you are a CPF member aged 21 and above, a Singapore Citizen with a Singpass account, and have both a Singapore-registered mobile number and email address registered with CPF Board. However, please note there is a limit on how many individuals you can serve as a Trusted Contact for. If you have already reached this limit when your parents submit their requests, you will need to remove one of your existing appointments before you can accept new ones. Your parents can each initiate the appointment via the Add or Remove Trusted Contact e-form.",
    "wrong1": "You can be a Trusted Contact for an unlimited number of people. Since you meet all eligibility criteria, please ask both parents to submit their appointment requests and you can accept both without any restrictions.",
    "wrong2": "You can only be a Trusted Contact for one person at a time. If your father appoints you first, you will need to remove that appointment before your mother can appoint you as well.",
    "wrong3": "Children can only be Trusted Contacts for direct parents or grandparents. Since both of your parents are direct relatives, you are eligible to be a Trusted Contact for both simultaneously. There is no upper limit for immediate family members.",
    "added": "We encourage you to accept the appointment requests from both parents as this will provide them with an extra layer of protection for their CPF accounts.",
    "explain": "The correct response acknowledges eligibility and correctly states that there is a limit to the number of people one person can serve as a Trusted Contact for — if the limit is reached, an existing appointment must be removed first.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Zainab Hassan",
      "age": 33,
      "bg": "stay-at-home mum",
      "emoji": "👨‍👩‍👦",
      "salutation": "Mdm",
      "lastname": "Hassan"
    },
    "subject": "Trusted Contact appointment requires both mobile and email — what if I only have one?",
    "enquiry": "Dear CPF Board,\n\nMy mother wants to appoint my aunt as her Trusted Contact. My aunt is 65 years old, a Singapore Citizen with Singpass. However, she does not have an email address — she only has a Singapore mobile number registered with CPF Board.\n\nIs my aunt still eligible to be appointed as a Trusted Contact?\n\nThank you,\nZainab",
    "date": "09 May 2026",
    "correct": "Unfortunately, your aunt is currently not eligible to be appointed as a Trusted Contact as she does not have an email address registered with CPF Board. A Trusted Contact must have both a Singapore-registered mobile number and an email address registered with CPF Board, so she can receive copies of transaction notifications through both channels. Your mother may encounter an error stating the intended appointee's contact details are incomplete. We recommend that your aunt registers an email address with CPF Board via my cpf digital services — Account settings — after which your mother can proceed with the appointment.",
    "wrong1": "Your aunt is eligible as long as she has at least one contact channel registered — either mobile or email. Having a Singapore mobile number is sufficient for Trusted Contact appointments. Please proceed with submitting the appointment request.",
    "wrong2": "Your aunt can still be appointed as a Trusted Contact with just a mobile number. However, she will only receive SMS notifications and will not receive email notifications. This is a reduced but valid form of the Trusted Contact service.",
    "wrong3": "Your aunt will need to visit a CPF Service Centre to register her email address in person as she is above 60 and may qualify for assisted digital services. Once registered, she will become eligible to be a Trusted Contact.",
    "added": "Your aunt can update her email address easily via my cpf digital services — Account settings — using her Singpass.",
    "explain": "The correct response accurately states that BOTH a Singapore-registered mobile number AND an email address must be registered with CPF Board for Trusted Contact eligibility — one channel alone is insufficient.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Felix Tan",
      "age": 58,
      "bg": "business director",
      "emoji": "🏢",
      "salutation": "Mr",
      "lastname": "Tan"
    },
    "subject": "Investments when closing CPF account after renouncing PR",
    "enquiry": "Dear CPF Board,\n\nI am renouncing my Singapore PR next month. I currently have investments under the CPF Investment Scheme — both OA and SA investments including unit trusts and shares.\n\nWhat happens to my investments when my CPF account is closed? Will they be liquidated?\n\nBest regards,\nFelix",
    "date": "11 May 2026",
    "correct": "For your CPFIS-OA investments, CPF Board will inform the agent bank to close your CPF Investment Account. The agent bank will contact you directly to arrange the transfer of your investments and any cash balance to your personal name. A transfer fee of $10 (excluding GST) per share counter applies for transfers to your CDP account. For CPFIS-SA investments, CPF Board will inform your product providers to transfer the investments to your own name — you may then liquidate them and receive the proceeds directly. Please note that once transferred, your investments will no longer be protected from creditor claims. If you hold Singtel discounted shares under the Special Discounted Shares scheme, these will be automatically liquidated in the month following your account closure.",
    "wrong1": "All CPF investments are automatically liquidated when your account is closed. The cash proceeds from all liquidations will be added to your CPF savings and transferred to your bank account together. No action is required from you.",
    "wrong2": "Your investments will be frozen for 6 months after your account closure to allow creditors to make claims. After 6 months, unclaimed investments will be liquidated and proceeds transferred to the bank account registered with CPF Board.",
    "wrong3": "You must liquidate all CPFIS investments yourself before your account is closed. CPF Board does not manage the transfer of investments and any uninstructed investments will be forfeited upon account closure.",
    "added": "Please take note of the CDP transfer fee and contact your product providers for SA investments to coordinate the transfer to your own name.",
    "explain": "The correct response accurately describes treatment for CPFIS-OA (agent bank contacts member, CDP $10 transfer fee), CPFIS-SA (product provider transfers), and SDS Singtel shares (auto-liquidated the month after closure).",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Patricia Yeo",
      "age": 44,
      "bg": "financial planner",
      "emoji": "📈",
      "salutation": "Ms",
      "lastname": "Yeo"
    },
    "subject": "HPS cover after renouncing citizenship",
    "enquiry": "Dear CPF Board,\n\nI am in the process of renouncing my Singapore Citizenship. I still own an HDB flat and have an outstanding housing loan covered under the Home Protection Scheme (HPS).\n\nWill my HPS cover stop immediately when I renounce? I am still trying to sell my flat which may take a few more months.\n\nThank you,\nPatricia",
    "date": "13 May 2026",
    "correct": "Your Home Protection Scheme (HPS) cover will not stop immediately upon renunciation. It will continue until either the sale of your HDB flat is completed or the end of your current HPS policy year, whichever is earlier. However, there will be no further renewal of your HPS cover after this point, even if your flat has not yet been sold, as the scheme is only available to Singapore Citizens and Permanent Residents. We recommend completing the sale of your flat before the end of your policy year if possible.",
    "wrong1": "Your HPS cover will terminate immediately on the date of renunciation. Any outstanding housing loan will be uninsured from that date. You should arrange for alternative mortgage insurance coverage immediately to protect yourself and your family.",
    "wrong2": "HPS cover continues for 12 months after renunciation to allow members time to sell their property. After 12 months, the cover lapses and no refund of premiums is given for the remaining period.",
    "wrong3": "HPS cover is tied to the HDB flat, not your citizenship status. As long as you own the flat and have an outstanding loan, your HPS cover will continue regardless of your renunciation. Cover only ends when the flat is sold or the loan is fully paid.",
    "added": "Please plan your property sale timeline with your HPS policy year in mind to avoid gaps in coverage.",
    "explain": "The correct response accurately states: HPS cover ceases at the earlier of (a) sale of HDB flat or (b) end of current HPS policy year; no further renewal after renunciation.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Brandon Seah",
      "age": 36,
      "bg": "finance professional",
      "emoji": "💰",
      "salutation": "Mr",
      "lastname": "Seah"
    },
    "subject": "Receiving CPF savings — payment options overseas",
    "enquiry": "Dear CPF Board,\n\nI have renounced my PR and want to withdraw my CPF savings. I no longer have a Singapore bank account. I am currently living in Australia.\n\nHow can I receive my CPF savings? Can it be sent directly to my Australian bank account in AUD?\n\nThank you,\nBrandon",
    "date": "15 May 2026",
    "correct": "You can receive your CPF savings via telegraphic transfer to your overseas bank account in Australia. Your savings will be paid in Singapore dollars — please ensure your Australian bank accepts payment in Singapore dollars. If your bank does not accept Singapore dollars, CPF Board will convert the payment to US dollars. Please be aware that you will need to bear all bank charges including foreign exchange conversion charges and any fees resulting from insufficient bank account details causing an unsuccessful transfer. If you have a remaining single-name POSB, DBS, OCBC, or UOB bank account in Singapore, you may also choose to receive payment via Interbank GIRO.",
    "wrong1": "CPF Board can only transfer savings to a Singapore bank account. You will need to open or maintain a Singapore bank account to receive your funds, after which you can transfer to your Australian account at your own arrangement.",
    "wrong2": "Overseas transfers are available in AUD, USD, or SGD. Please specify your preferred currency when submitting your application. CPF Board will apply the prevailing exchange rate on the day of transfer and all conversion fees will be borne by CPF Board.",
    "wrong3": "For amounts above $50,000, telegraphic transfers are not available and you must receive a cashier's order which will be mailed to your overseas address. For amounts below $50,000, telegraphic transfer to any country is available free of charge.",
    "added": "Please check with your Australian bank on whether they accept Singapore dollar payments and any applicable receiving fees before submitting your application.",
    "explain": "The correct response accurately states: telegraphic transfer to overseas accounts is available; payment is in SGD by default; CPF Board converts to USD if SGD is not accepted; bank charges are borne by the member.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Chen Wei Ming",
      "age": 55,
      "bg": "engineer, planning retirement",
      "emoji": "🔧",
      "salutation": "Mr",
      "lastname": "Chen"
    },
    "subject": "Unpaid taxes affecting CPF withdrawal",
    "enquiry": "Dear CPF Board,\n\nI am about to renounce my Singapore PR and close my CPF account. I recently received a letter from IRAS saying I have outstanding income tax for last year.\n\nWill my outstanding tax affect my CPF withdrawal? Will CPF Board deduct it from my savings automatically?\n\nThank you,\nWei Ming",
    "date": "17 May 2026",
    "correct": "Yes, CPF Board may recover unpaid taxes from your CPF savings when your account is closed, if you have unpaid taxes at the time of closure. This also applies to unpaid MediShield Life premiums, CareShield Life premiums, and outstanding education loans owed to another CPF member. We strongly encourage you to settle all outstanding liabilities — including your tax arrears — before your CPF account is closed to avoid any deductions from your savings. Please contact IRAS directly to arrange payment of your outstanding tax.",
    "wrong1": "Outstanding income tax is a matter between you and IRAS and does not affect your CPF savings. CPF Board does not have authority to deduct tax arrears from your CPF account. Please settle your tax separately with IRAS after you receive your CPF savings.",
    "wrong2": "IRAS will place a hold on your CPF account until your tax arrears are cleared. During this period, you will not be able to close your CPF account or transfer any savings. Once your tax is paid, the hold will be lifted automatically within 5 working days.",
    "wrong3": "Only MediShield Life premium arrears can be deducted from CPF savings. Income tax is a separate government debt and CPF Board is not empowered to deduct it from your CPF account.",
    "added": "We recommend settling all outstanding liabilities before closing your CPF account to ensure you receive your full savings.",
    "explain": "The correct response accurately states that CPF Board may recover unpaid taxes, MediShield Life premiums, CareShield Life premiums, and outstanding education loans from CPF savings upon account closure, and advises settling before closure.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Nina Bte Halim",
      "age": 38,
      "bg": "part-time tutor",
      "emoji": "✏️",
      "salutation": "Mdm",
      "lastname": "Halim"
    },
    "subject": "Can I receive CPF savings in partial payments?",
    "enquiry": "Dear CPF Board,\n\nI am closing my CPF account after renouncing my PR. My total savings is quite a large sum and I was wondering if I can request to receive it in installments — for example, half now and half in six months.\n\nIs this possible?\n\nThank you,\nNina",
    "date": "19 May 2026",
    "correct": "We regret to inform you that partial payments are not available. Your CPF savings will be paid to you in full when your account is closed. There is no option to receive your savings in installments. If you have concerns about receiving a large lump sum, we recommend speaking with a financial adviser about how to manage your savings after the transfer.",
    "wrong1": "Yes, you can request to receive your CPF savings in up to three installments over a 12-month period. Please indicate your preferred payment schedule on the account closure form. Each installment must be at least $10,000.",
    "wrong2": "Partial withdrawals are available for members with savings above $50,000. You may request up to two partial payments before the remaining balance is transferred. Please visit a CPF Service Centre for assistance.",
    "wrong3": "You can defer the transfer of your savings by up to 24 months from the date of account closure while your funds remain in the General Moneys of the Fund. This is not a partial payment but gives you flexibility on timing.",
    "added": "If you would like guidance on how to manage a lump sum payment, consider consulting a financial adviser.",
    "explain": "The correct response accurately states that partial payments are not possible — CPF savings are paid in full upon account closure.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Jacky Woo",
      "age": 47,
      "bg": "operations manager",
      "emoji": "⚙️",
      "salutation": "Mr",
      "lastname": "Woo"
    },
    "subject": "Trusted Contact — can I appoint someone not on my CPF account?",
    "enquiry": "Dear CPF Board,\n\nI want to appoint a close family friend as my Trusted Contact. He is a Singapore Citizen with a CPF account but he is not related to me and not named in my CPF nomination.\n\nIs this allowed? Does my Trusted Contact need to be related to me?\n\nThank you,\nJacky",
    "date": "21 May 2026",
    "correct": "Yes, you can appoint a person who is not your next-of-kin or related to you as your Trusted Contact, provided they meet the eligibility criteria. They must be a CPF member aged 21 and above, a Singapore Citizen or Permanent Resident with a Singpass account, and have both a Singapore-registered mobile number and an email address registered with CPF Board. There is no requirement for the Trusted Contact to be named in your CPF nomination. We do recommend appointing someone you genuinely trust, as they will receive copies of your transaction notifications.",
    "wrong1": "Trusted Contacts must be immediate family members such as a spouse, parent, child, or sibling. Appointing a non-related person is not permitted as CPF Board cannot verify the nature of your relationship with them.",
    "wrong2": "You can appoint a non-relative but you must provide a statutory declaration confirming the nature of your relationship and that you trust this person. This is to protect members from appointing individuals who may misuse access to their transaction notifications.",
    "wrong3": "A Trusted Contact must be an existing CPF nominee. This ensures accountability and traceability. If you wish to appoint your friend, please add him as a CPF nominee first before submitting the Trusted Contact appointment.",
    "added": "We strongly encourage you to carefully consider who you appoint, as this person will receive copies of your important CPF transaction notifications.",
    "explain": "The correct response accurately states that Trusted Contacts do not need to be next-of-kin or related — any eligible person (CPF member 21+, SC/PR, Singpass, both mobile and email registered) can be appointed.",
    "categories": [
      "Trusted Contacts"
    ]
  },
  {
    "persona": {
      "name": "Grace Lim",
      "age": 72,
      "bg": "retiree, receiving CPF LIFE payouts",
      "emoji": "🌺",
      "salutation": "Mdm",
      "lastname": "Lim"
    },
    "subject": "CPF LIFE plan termination after renouncing citizenship",
    "enquiry": "Dear CPF Board,\n\nI am a 72-year-old Singapore Citizen but I am considering renouncing my citizenship to join my children overseas.\n\nI am currently receiving monthly CPF LIFE payouts. What will happen to my CPF LIFE plan if I renounce? Will I lose all my money?\n\nThank you,\nGrace",
    "date": "23 May 2026",
    "correct": "If you renounce your Singapore Citizenship and close your CPF account, your CPF LIFE plan will be terminated. You will receive your CPF LIFE premium balance, if any, together with your remaining CPF savings when you transfer your savings to your bank account. Please be aware that once your CPF account is closed, your monthly CPF LIFE payouts will also stop. We strongly encourage you to consider this carefully and seek financial advice before making a decision, as it will permanently affect your retirement income arrangements.",
    "wrong1": "Your CPF LIFE plan is a guaranteed annuity and cannot be terminated even if you renounce citizenship. Your monthly payouts will continue to be paid to your registered bank account for life, regardless of your citizenship status.",
    "wrong2": "You can keep your CPF LIFE plan active after renouncing citizenship by making a one-time election to convert it to a private annuity plan. CPF Board will facilitate the transfer to a private insurer of your choice and your monthly payouts will continue uninterrupted.",
    "wrong3": "Your CPF LIFE plan will be suspended for 12 months after renunciation. If you decide to reinstate your citizenship within this period, the plan will be reinstated with no penalty. After 12 months, the plan is permanently terminated and the premium balance is forfeited.",
    "added": "We strongly encourage you to carefully consider the impact on your retirement income before making a decision to renounce your citizenship.",
    "explain": "The correct response accurately states: CPF LIFE plan is terminated upon account closure; the CPF LIFE premium balance (if any) is returned with CPF savings; monthly payouts stop.",
    "categories": [
      "Account Closure"
    ]
  },
  {
    "persona": {
      "name": "Mdm Rohani",
      "age": 68,
      "bg": "retired seamstress",
      "emoji": "🧵",
      "salutation": "Mdm",
      "lastname": "Rohani"
    },
    "subject": "Do I need to apply for Silver Support every year?",
    "enquiry": "Assalamualaikum,\n\nI am 68 years old and I received Silver Support last year. My neighbour told me I need to reapply every year to keep receiving the money. Is this true?\n\nAlso, how will I know if I am still eligible next year?\n\nThank you,\nRohani",
    "date": "02 May 2026",
    "correct": "There is no need to apply or reapply for Silver Support. CPF Board automatically reviews your eligibility every year. If you remain eligible, you will continue to receive your quarterly payments. You will also receive a notification letter from CPF Board in December of the preceding year to inform you of your eligibility for the coming year. If you would like to check your eligibility status at any time, you may log in to the Silver Support e-services using your Singpass.",
    "wrong1": "Your neighbour is correct. You must submit a reapplication form every year before 31 October to continue receiving Silver Support for the following year. Forms are available at any CPF Service Centre or community centre.",
    "wrong2": "Silver Support eligibility is confirmed once at age 65 and does not require annual renewal. As long as your circumstances do not change significantly, your payments will continue automatically for life without any further review.",
    "wrong3": "You need to reapply if your household composition or income has changed since your last application. CPF Board will send you a reminder SMS in September each year. If you do not receive an SMS, no action is needed.",
    "added": "CPF Board will notify you in December if you are eligible for the following year. No action is required on your part.",
    "explain": "The correct response accurately states: no application or reapplication needed; CPF Board automatically reviews eligibility annually; notification letter is sent in December; eligibility can be checked via SS e-services with Singpass.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Choo",
      "age": 66,
      "bg": "Pioneer Generation member",
      "emoji": "🏅",
      "salutation": "Mr",
      "lastname": "Choo"
    },
    "subject": "Pioneer Generation and Silver Support eligibility",
    "enquiry": "Dear CPF Board,\n\nI am a Pioneer Generation member. My friend who is also a Pioneer told me that all Pioneers automatically qualify for Silver Support. Is this true?\n\nI have not received any Silver Support payments and I am wondering if I have been missed out.\n\nThank you,\nMr Choo",
    "date": "04 May 2026",
    "correct": "Pioneer Generation members do not automatically qualify for Silver Support. The Silver Support Scheme is meant for seniors who had low incomes during their working years and now have less in retirement, and all seniors including Pioneer and Merdeka Generation members are assessed against the same three criteria: total CPF contributions by age 55, housing type, and household monthly income per person. The Pioneer Generation and Merdeka Generation Packages are separate one-off schemes to honour these seniors for their contributions to nation-building and are distinct from Silver Support. If you believe you may be eligible for Silver Support, you may check your status by logging in to the Silver Support e-services using your Singpass.",
    "wrong1": "All Pioneer Generation members aged 65 and above automatically qualify for Silver Support as a recognition of their contributions to Singapore. Please call our hotline with your NRIC to check why your payments have not been credited.",
    "wrong2": "Pioneer Generation members receive a higher tier of Silver Support compared to non-Pioneer members of the same age. If you have not received payments, it is likely because your PayNow or bank details are not registered with the Government. Please update your bank details via the SSS e-services.",
    "wrong3": "Pioneer Generation members are exempt from the household income means test for Silver Support. Only the CPF contribution threshold and housing type criteria apply to you. Please write to us if you believe you meet these two criteria.",
    "added": "If you would like to check your Silver Support eligibility, please log in to the Silver Support e-services using your Singpass.",
    "explain": "The correct response accurately states that Pioneer Generation members do NOT automatically qualify for Silver Support — they are assessed against the same three criteria as all other seniors, and the PG Package is a separate scheme.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mdm Tan Ah Moi",
      "age": 71,
      "bg": "retiree, living in 3-room HDB",
      "emoji": "🏠",
      "salutation": "Mdm",
      "lastname": "Tan"
    },
    "subject": "Silver Support payment schedule",
    "enquiry": "Dear CPF Board,\n\nI recently turned 65 and I have been told I qualify for Silver Support starting this quarter (April to June).\n\nWhen exactly will I receive my first payment? And will it go to my bank account automatically?\n\nThank you,\nAh Moi",
    "date": "06 May 2026",
    "correct": "As you are eligible for the April to June quarter, your Silver Support payment will be made on 31 March. Payments are made at the start of each quarter — specifically on 31 December for the January to March quarter, 31 March for April to June, 30 June for July to September, and 30 September for October to December. Your payment will go to your PayNow-NRIC linked bank account if you have set one up. If not, it will be sent to your registered DBS/POSB, OCBC, or UOB bank account. If you have no bank account registered, you will receive it via GovCash at OCBC ATMs.",
    "wrong1": "Silver Support payments are made on the last day of each month within the eligibility quarter. For April to June, you will receive three monthly payments on 30 April, 31 May, and 30 June respectively.",
    "wrong2": "Your first Silver Support payment will be made within 30 days of CPF Board confirming your eligibility. As this is your first payment, it may take slightly longer than subsequent quarters. You will receive an SMS notification when the payment is processed.",
    "wrong3": "Silver Support is paid in arrears at the end of each quarter. For April to June, your payment will be made on 30 June. It will be credited to the bank account you have registered with the Government.",
    "added": "To receive your Silver Support faster, we encourage you to link your NRIC to PayNow with a participating bank.",
    "explain": "The correct response accurately states the payment schedule — payments are made at the START of the quarter (31 Dec, 31 Mar, 30 Jun, 30 Sep) — and correctly describes the three payment modes (PayNow-NRIC, bank transfer, GovCash).",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Balakrishnan",
      "age": 70,
      "bg": "retired taxi driver",
      "emoji": "🚕",
      "salutation": "Mr",
      "lastname": "Balakrishnan"
    },
    "subject": "Silver Support eligibility for self-employed persons",
    "enquiry": "Dear CPF Board,\n\nI was a self-employed taxi driver for most of my working life. I know that self-employed people do not have to contribute to their OA and SA. Does this mean my CPF contributions will look very low and affect my Silver Support eligibility?\n\nI am now 70 and I am worried I might not qualify even though I was not a high earner.\n\nThank you,\nBalakrishnan",
    "date": "08 May 2026",
    "correct": "CPF Board recognises that self-employed persons and platform workers have fewer mandatory CPF contributions to their OA and SA. For this reason, if you were self-employed during your working years, the assessment of your lifetime wages for Silver Support also considers your average annual net trade income between the ages of 45 and 54. To qualify, this average must be not more than $27,600 per year. Net trade income refers to gross trade income minus allowable business expenses, capital allowances and trade losses as determined by IRAS. If you meet all three eligibility criteria — lifetime wages, housing type, and household support — you will qualify for Silver Support.",
    "wrong1": "As a self-employed person, your CPF contributions are automatically adjusted upward in CPF Board's assessment to account for the fact that self-employed persons do not make OA and SA contributions. This ensures you are not disadvantaged compared to salaried employees.",
    "wrong2": "Self-employed persons with very low CPF contributions will automatically qualify for Silver Support as CPF Board assumes low lifetime wages. No further assessment of your trade income is needed.",
    "wrong3": "Unfortunately, self-employed persons who did not voluntarily contribute to their OA and SA are not eligible for Silver Support, as CPF Board is unable to verify their lifetime earnings without CPF records. You may be eligible for other ComCare assistance schemes instead.",
    "added": "If you believe you meet the eligibility criteria, you may check your Silver Support eligibility by logging in to the e-services with your Singpass.",
    "explain": "The correct response accurately describes the special assessment for self-employed persons and platform workers: average annual net trade income at ages 45-54 must be not more than $27,600; net trade income is defined as gross trade income minus allowable deductions per IRAS.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mdm Leong",
      "age": 67,
      "bg": "retiree, recently moved in with son",
      "emoji": "👨‍👩‍👦",
      "salutation": "Mdm",
      "lastname": "Leong"
    },
    "subject": "Moving in with working son — effect on Silver Support",
    "enquiry": "Dear CPF Board,\n\nI have been receiving Silver Support for 2 years. I recently moved into my son's flat as he needs me to look after his children. My son works as an engineer and earns quite a good salary.\n\nWill this affect my Silver Support payments? He is the only other person in the household.\n\nThank you,\nMdm Leong",
    "date": "10 May 2026",
    "correct": "Moving in with your son may affect your Silver Support eligibility. Household support is assessed by calculating the average monthly household income per person in your household. If the total household income divided by the number of members exceeds $2,300 per person per month (threshold from 2025), you may no longer qualify. In your case, with just the two of you, if your son earns more than $4,600 per month, the household income per person would exceed the threshold. CPF Board will automatically reassess your eligibility each year. If you become ineligible, you will be notified in December.",
    "wrong1": "Moving in with a family member does not affect your Silver Support as the assessment only looks at your own income and savings. Your son's income is not considered in your eligibility assessment.",
    "wrong2": "You should inform CPF Board of the change of address as this may affect your eligibility. CPF Board will then conduct a manual reassessment. If your son earns above the median income, your Silver Support may be suspended pending review.",
    "wrong3": "Your Silver Support will be suspended immediately upon your change of address to your son's flat. You will need to reapply for Silver Support and declare your new household composition. CPF Board will review within 3 months.",
    "added": "CPF Board automatically reviews your eligibility every year. You will be notified in December if there is any change to your eligibility status.",
    "explain": "The correct response accurately describes the household income per person threshold ($2,300 from 2025), how it is calculated (total household income divided by number of members), and that reassessment is automatic and annual.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Kwan",
      "age": 72,
      "bg": "ComCare LTA recipient",
      "emoji": "🏥",
      "salutation": "Mr",
      "lastname": "Kwan"
    },
    "subject": "Silver Support amount as a ComCare LTA recipient",
    "enquiry": "Dear CPF Board,\n\nI am 72 years old and I am on the ComCare Long Term Assistance scheme. I live in a 2-room HDB flat. My neighbour also receives Silver Support and lives in a 2-room flat but she gets more than me.\n\nWhy is my amount lower than hers if we are both in the same flat type?\n\nThank you,\nMr Kwan",
    "date": "12 May 2026",
    "correct": "As a ComCare Long Term Assistance (LTA) recipient, you receive a flat Silver Support amount of $430 per quarter regardless of your HDB flat type. This is different from other seniors who are not on ComCare LTA, where the Silver Support amount varies based on their flat type and household income per person. Your neighbour who is not a ComCare LTA recipient living in a 2-room flat may receive up to $1,080 per quarter depending on her household income level, which is higher than the flat rate you receive. The $430 you receive under Silver Support supplements the broader assistance you already receive under ComCare LTA.",
    "wrong1": "This appears to be an error in our system. Both of you should be receiving the same amount as you live in the same flat type. Please call our hotline with your NRIC number and we will investigate the discrepancy.",
    "wrong2": "Your Silver Support amount may be lower because your total CPF contributions by age 55 exceeded the threshold. Even if you are on ComCare LTA, the CPF contribution criterion still affects the tier of Silver Support you receive.",
    "wrong3": "ComCare LTA recipients receive Silver Support at a reduced rate because ComCare already provides monthly cash assistance. The combined amount from both schemes is calibrated to prevent over-assistance. Your neighbour is not on ComCare LTA and thus receives the full flat-type rate.",
    "added": "The Silver Support supplement is designed to complement the broader assistance you receive under the ComCare Long Term Assistance scheme.",
    "explain": "The correct response accurately states that ComCare LTA recipients receive a flat $430 per quarter regardless of flat type, which differs from the regular tiered amounts that other eligible seniors receive based on flat type and household income.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mdm Fatimah",
      "age": 69,
      "bg": "retiree, no bank account",
      "emoji": "💵",
      "salutation": "Mdm",
      "lastname": "Fatimah"
    },
    "subject": "Receiving Silver Support via GovCash — what do I need?",
    "enquiry": "Dear CPF Board,\n\nMy daughter told me I will receive my Silver Support through something called GovCash. I do not have a bank account. I have never used an ATM before.\n\nHow do I collect my money? Do I need a card or a PIN number?\n\nThank you,\nFatimah",
    "date": "14 May 2026",
    "correct": "You do not need a bank card or a PIN to collect your Silver Support via GovCash. You can withdraw your money at any OCBC ATM that has the GovCash function. At the ATM, select GovCash, enter your NRIC number, and complete a face verification using Singpass Face Verification. Once your identity is verified, the cash will be dispensed. If you need help with the ATM, OCBC Digital Ambassadors are available at selected OCBC branch ATMs during branch operating hours to guide you through the process.",
    "wrong1": "To collect your GovCash, you will need to visit your nearest CPF Service Centre with your NRIC. A staff member will verify your identity and issue your Silver Support payment in cash or by cheque on the same day.",
    "wrong2": "You will receive a letter with a 6-digit PIN and a payment voucher. Bring these to any POSB or DBS ATM, enter your PIN, and the cash will be dispensed. If you lose the letter, please call our hotline for a replacement.",
    "wrong3": "GovCash can only be used by people who have a smartphone with the LifeSG app installed. If you do not have a smartphone, you will need to ask a family member to help you transfer the money to their bank account on your behalf.",
    "added": "If you need help with your GovCash withdrawal, please visit an OCBC branch ATM where Digital Ambassadors can provide in-person assistance.",
    "explain": "The correct response accurately states: no bank card or PIN needed; use OCBC ATMs with GovCash function; enter NRIC and complete Singpass Face Verification; Digital Ambassadors available at OCBC branch ATMs.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Lim Cheng Hock",
      "age": 74,
      "bg": "retiree, lost Silver Support PRN letter",
      "emoji": "📨",
      "salutation": "Mr",
      "lastname": "Lim"
    },
    "subject": "Lost my GovCash Payment Reference Number",
    "enquiry": "Dear CPF Board,\n\nI lost the letter that had my Payment Reference Number (PRN) for GovCash. I am worried that someone else can use it to take my money.\n\nCan someone else access my money with just the PRN? And how can I get my PRN again?\n\nThank you,\nCheng Hock",
    "date": "16 May 2026",
    "correct": "Please do not worry. Even if someone else has your Payment Reference Number, they cannot withdraw your money. GovCash uses Singpass Face Verification at OCBC ATMs, which requires a live face scan matched against government records. This liveness detection technology prevents the use of photographs, videos or masks, so only you can withdraw your funds. To retrieve your PRN again, you can log in to the Silver Support e-services with your Singpass and select 'GovCash PRN' from the menu. Your PRN will be available after the payment has been processed.",
    "wrong1": "You should report the lost letter to CPF Board immediately as the PRN alone is sufficient to initiate a GovCash withdrawal at OCBC ATMs. We will cancel your current PRN and issue a new one within 5 working days.",
    "wrong2": "Anyone with your PRN and your NRIC number can withdraw your GovCash. Please call our hotline immediately to freeze your GovCash payment while we issue a new PRN. This will take up to 10 working days.",
    "wrong3": "The PRN is mailed only once and cannot be reissued digitally. You will need to visit a CPF Service Centre in person with your NRIC to request a replacement letter. Processing takes up to 7 working days.",
    "added": "You can view your PRN anytime by logging in to the Silver Support e-services using your Singpass.",
    "explain": "The correct response accurately states: PRN alone is not sufficient to withdraw — GovCash uses Singpass Face Verification with liveness detection; PRN can be retrieved by logging in to SSS e-services and selecting 'GovCash PRN'.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mrs Chan",
      "age": 73,
      "bg": "retiree, recently widowed",
      "emoji": "💐",
      "salutation": "Mrs",
      "lastname": "Chan"
    },
    "subject": "Effect on Silver Support after husband passed away",
    "enquiry": "Dear CPF Board,\n\nMy husband passed away last month. We used to live together and our combined income was used to assess my Silver Support. Now I am living alone.\n\nWill my Silver Support eligibility change now that it is just me in the household?\n\nThank you,\nMrs Chan",
    "date": "18 May 2026",
    "correct": "We are sorry for your loss. For the purposes of Silver Support, household members are defined as family members related by blood, marriage, or legal adoption who live at the same address. With your husband's passing, your household composition has changed. CPF Board automatically reviews eligibility every year, and the reassessment will take into account your new household circumstances. As you are now living alone, only your own income will be considered in calculating the household monthly income per person. If your income is within the threshold, this change may actually improve your eligibility or payout tier. You will receive a notification in December about your eligibility for the following year.",
    "wrong1": "Your Silver Support will be suspended for 6 months following your husband's passing as CPF Board conducts an automatic household reassessment. During this period, please do not contact us as the review is in progress. You will be notified of the outcome by letter.",
    "wrong2": "As a widowed senior living alone, you will automatically qualify for the highest tier of Silver Support regardless of your income. CPF Board has a special provision for recently bereaved seniors. No action is required.",
    "wrong3": "You will need to inform CPF Board of your husband's passing and change in household composition by writing to us with his death certificate. CPF Board will then manually reassess your Silver Support eligibility.",
    "added": "CPF Board will automatically review your eligibility at the end of the year. You do not need to inform us of the change in household composition.",
    "explain": "The correct response accurately explains household definition (family related by blood/marriage/adoption at same address), that CPF Board auto-reviews annually, and that living alone means only the member's own income is counted.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Ho Weng Fatt",
      "age": 67,
      "bg": "retiree, wants SMS notifications",
      "emoji": "📱",
      "salutation": "Mr",
      "lastname": "Ho"
    },
    "subject": "How to get SMS notifications for Silver Support payments",
    "enquiry": "Dear CPF Board,\n\nI recently received my Silver Support payment but I did not get any SMS notification beforehand. My friend always gets an SMS before his payment arrives.\n\nHow do I sign up for SMS notifications for Silver Support?\n\nThank you,\nWeng Fatt",
    "date": "20 May 2026",
    "correct": "SMS notifications for Silver Support payments are sent to the mobile number you have registered with CPF Board. To receive these notifications, please ensure that your mobile number is updated in your CPF account via my cpf digital services — Account settings — using your Singpass. If your mobile number is already registered and you are still not receiving notifications, please check that it is a Singapore-registered number, as only Singapore mobile numbers are supported for CPF SMS notifications.",
    "wrong1": "You need to opt in to SMS notifications separately via the Silver Support e-services portal. Log in with your Singpass, go to 'My Preferences', and toggle on 'Payment Notifications'. This is turned off by default.",
    "wrong2": "SMS notifications for Silver Support are only sent to members who have a Singapore mobile number registered directly with CPF Board through a paper form. Digital registrations via Singpass do not automatically enable payment SMS alerts.",
    "wrong3": "CPF Board does not send SMS notifications for Silver Support payments. The notifications your friend receives are likely from his bank informing him of incoming credits. Please check with your bank to enable incoming payment alerts.",
    "added": "Please ensure your Singapore mobile number is kept up to date with CPF Board via my cpf digital services to receive timely payment notifications.",
    "explain": "The correct response accurately states that SMS notifications go to the mobile number registered with CPF Board, and that this can be updated via my cpf digital services Account settings with Singpass.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mdm Yong",
      "age": 65,
      "bg": "daughter checking for mother in nursing home",
      "emoji": "🏥",
      "salutation": "Mdm",
      "lastname": "Yong"
    },
    "subject": "Silver Support eligibility for senior in nursing home",
    "enquiry": "Dear CPF Board,\n\nMy mother is 65 years old and has been living in a nursing home for the past 3 years. Her NRIC address still shows the nursing home address.\n\nIs she eligible for Silver Support? And which flat type will be used to assess her since she does not live in an HDB flat?\n\nThank you,\nYong",
    "date": "22 May 2026",
    "correct": "Seniors aged 65 and above living in residential facilities such as nursing homes are included in the Silver Support assessment. If her NRIC address reflects the nursing home, she will be assessed based on the address shown on her NRIC, and the housing type criteria will be applied accordingly for residential facilities. She will be eligible for Silver Support if she meets all the other criteria — lifetime wages and household support. Eligibility is assessed automatically by CPF Board and no application is needed.",
    "wrong1": "Seniors in nursing homes are not eligible for Silver Support as they do not have a fixed HDB address. The scheme is only applicable to seniors residing independently in HDB flats.",
    "wrong2": "Your mother will be assessed as if she lives in a 1-room flat, which is the default category applied to all seniors in institutional care. This means she may qualify for the highest tier of Silver Support.",
    "wrong3": "Your mother must update her NRIC address back to her previous HDB flat address to qualify for Silver Support, as the scheme requires the senior to live in an HDB flat. Nursing home addresses are not accepted for Silver Support assessment.",
    "added": "CPF Board automatically assesses all eligible seniors including those in residential facilities. No application is required.",
    "explain": "The correct response accurately states that seniors in residential facilities (nursing homes, welfare homes, etc.) are eligible for Silver Support assessment, with the NRIC address used as the basis for the housing type criterion.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Jason Teo",
      "age": 40,
      "bg": "son helping elderly parent",
      "emoji": "👨‍👦",
      "salutation": "Mr",
      "lastname": "Teo"
    },
    "subject": "Helping elderly parent check Silver Support eligibility",
    "enquiry": "Dear CPF Board,\n\nMy mother is 67 years old and cannot use a smartphone or computer. She does not have Singpass. I want to help her check if she qualifies for Silver Support.\n\nCan I check on her behalf? She has no medical conditions — she is just not tech-savvy.\n\nThank you,\nJason",
    "date": "24 May 2026",
    "correct": "To protect beneficiaries' privacy and confidentiality, members must generally check their own eligibility using their own Singpass on the government benefits website. However, since your mother cannot do this herself, she can seek assistance at any ServiceSG centre or community centre where staff can help her. As your mother does not have a medical condition, you as a family member cannot check on her behalf digitally — the assisted access is available at ServiceSG and community centres to ensure proper identity verification and privacy safeguards.",
    "wrong1": "You can check your mother's Silver Support eligibility by logging in to the government benefits website using your own Singpass and entering her NRIC number. The system allows next-of-kin to view benefits information on behalf of family members.",
    "wrong2": "You can check on her behalf by visiting a CPF Service Centre together. Bring her NRIC and your own NRIC. A staff member will allow you to access her account information after identity verification.",
    "wrong3": "As a family member, you can register for a Proxy Singpass on your mother's behalf at any ICA counter. This allows you to log in to the benefits portal using the proxy account and check her Silver Support eligibility.",
    "added": "We encourage your mother to visit a ServiceSG or community centre where trained staff can assist her in checking her eligibility securely.",
    "explain": "The correct response accurately states: members must check their own benefits via Singpass; those who are illiterate or unable to use the website may seek in-person assistance at ServiceSG centres or community centres. Third-party digital access for non-medical reasons is not permitted.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Sarah Png",
      "age": 34,
      "bg": "new Singapore Citizen, previously held CPF-issued account",
      "emoji": "🎉",
      "salutation": "Ms",
      "lastname": "Png"
    },
    "subject": "Merging CPF accounts after obtaining citizenship",
    "enquiry": "Dear CPF Board,\n\nI recently obtained Singapore Citizenship. I previously had a CPF account under a CPF-issued account number starting with SA. Now I understand I should have a new account under my NRIC number.\n\nDo I need to do anything to merge the two accounts? Or is it done automatically?\n\nThank you,\nSarah",
    "date": "26 May 2026",
    "correct": "Congratulations on your citizenship. CPF Board does not automatically merge your accounts when you obtain Singapore Citizenship. You will need to inform us so that we can combine your CPF-issued account with your new NRIC-based account. Please submit the relevant form to notify CPF Board of your new citizenship, and we will process the merger of your CPF accounts within 7 working days. Please also ensure you use your NRIC number for all future CPF-related matters.",
    "wrong1": "Your CPF accounts are automatically merged within 3 working days of your NRIC being issued. No action is required on your part. You may check that the merger has been completed by logging in to my cpf digital services using your Singpass.",
    "wrong2": "You do not need to merge your accounts. Both accounts will remain separate, and your employer will continue contributing to your old SA-prefixed account. Your new NRIC account will only receive new government grants. After 5 years both accounts are automatically combined.",
    "wrong3": "To merge your CPF accounts, please visit a CPF Service Centre in person with your old CPF-issued account details and your new NRIC. Account mergers cannot be done online and must be processed in person.",
    "added": "Please note that the processing time for merging CPF accounts is 7 working days after we receive your notification.",
    "explain": "The correct response accurately states: merging is NOT automatic — the member must inform CPF Board; processing takes 7 working days.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Mr Ng Boon Huat",
      "age": 55,
      "bg": "retiree, received unfamiliar CPF mail",
      "emoji": "📬",
      "salutation": "Mr",
      "lastname": "Ng"
    },
    "subject": "Received CPF mail that does not belong to me",
    "enquiry": "Dear CPF Board,\n\nI have been receiving CPF letters addressed to someone else at my address for the past few months. I do not know this person.\n\nWhat should I do with these letters? Should I open them or return them?\n\nThank you,\nBoon Huat",
    "date": "28 May 2026",
    "correct": "Please do not open the letters. Write the reason for return on the envelope — for example, 'no such person at this address' or 'change of owner' — and drop them into any SingPost 'Return Mail Here' mailbox. SingPost will return the undelivered mail to CPF Board. You do not need to contact CPF Board separately.",
    "wrong1": "Please open the letters and check the sender's details. If the letters contain sensitive information about another person, please shred them and inform CPF Board via Write to Us with the name and NRIC of the individual, so we can update their address.",
    "wrong2": "Please bring the letters to your nearest CPF Service Centre so that our officers can securely dispose of them. Do not drop them into a public postbox as this is not a secure method of returning government mail.",
    "wrong3": "Please leave the letters at your letterbox for the postal officer to collect. Write 'Return to Sender' on the envelopes. SingPost will automatically return any uncollected mail to the sender after 7 days.",
    "added": "Simply write the reason for return on the envelope and drop it into any SingPost 'Return Mail Here' mailbox.",
    "explain": "The correct response accurately states: do not open the letters; write the reason for return; drop into SingPost 'Return Mail Here' mailbox; SingPost returns it to CPF Board.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Hui Ling",
      "age": 28,
      "bg": "young professional, getting married",
      "emoji": "💍",
      "salutation": "Ms",
      "lastname": "Hui Ling"
    },
    "subject": "Do I need to update CPF after changing my name from marriage?",
    "enquiry": "Hi CPF Board,\n\nI am getting married next month and will be taking my husband's surname. I will update my NRIC with ICA.\n\nDo I need to separately update my name with CPF Board after the NRIC change?\n\nThank you,\nHui Ling",
    "date": "30 May 2026",
    "correct": "You do not need to separately inform CPF Board about your name change. CPF Board uses the principal name registered on your NRIC. Once you have updated your principal name with ICA and it is reflected on your NRIC, CPF Board's records will be automatically updated. Please note that the principal name on your NRIC typically excludes variants such as Hanyu Pinyin, married name, and other aliases — so if your married name is recorded as an alias and not your principal name on the NRIC, it may not be reflected in CPF records.",
    "wrong1": "Yes, you will need to update your name with CPF Board separately. Please log in to my cpf digital services and submit a name change request with a copy of your new NRIC and marriage certificate. Processing takes 5 working days.",
    "wrong2": "Your name will be automatically updated within 24 hours once ICA processes your NRIC change. However, please call the CPF hotline to confirm after 3 working days as occasional sync delays can occur.",
    "wrong3": "CPF Board uses the name you registered when you first opened your CPF account. To update it, you need to visit a CPF Service Centre in person with your marriage certificate and new NRIC.",
    "added": "CPF Board uses your principal name as registered on your NRIC. No separate notification to CPF Board is required.",
    "explain": "The correct response accurately states: no separate update to CPF needed; CPF uses the principal NRIC name which auto-updates; married name as an alias may not be reflected if it is not the principal name on the NRIC.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Mr Tan Wei Jie",
      "age": 32,
      "bg": "IT professional",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Tan"
    },
    "subject": "Prompted for Singpass Face Verification on CPF transaction",
    "enquiry": "Hi CPF Board,\n\nI was trying to update my bank account details on my CPF account and was suddenly asked to do a face scan (Singpass Face Verification). This has not happened to me before and I found it a bit unexpected.\n\nIs this normal? Should I be worried?\n\nThank you,\nWei Jie",
    "date": "01 June 2026",
    "correct": "There is nothing to worry about. Singpass Face Verification is an additional safeguard used for potentially suspicious or higher-risk transactions requiring Singpass, such as updating bank account details. It is automatically triggered by the system and does not require any prior setup — it uses a face scan compared against government records to verify your identity. For more information about Singpass Face Verification, please contact the Singpass Helpdesk directly as Singpass is governed by GovTech.",
    "wrong1": "This is unusual and suggests that CPF Board's system has flagged your account for a security review. Please call our hotline immediately to confirm whether any unauthorised access has occurred. Do not proceed with your transaction until the review is completed.",
    "wrong2": "Singpass Face Verification is only triggered if you have failed your Singpass password 3 or more times. It is a penalty step and will be required for all future logins for the next 30 days. Please contact GovTech to have this requirement removed.",
    "wrong3": "You will be prompted for face verification every time you transact because your account was flagged when you changed your mobile device recently. To remove this requirement, please visit a CPF Service Centre with your NRIC to complete an in-person identity re-verification.",
    "added": "Singpass Face Verification is a normal security measure for higher-risk transactions. Please contact the Singpass Helpdesk if you require further assistance.",
    "explain": "The correct response accurately states: Singpass Face Verification is normal and automatically triggered for higher-risk or potentially suspicious transactions; it requires no setup; GovTech/Singpass Helpdesk handles queries about SFV.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Mr Abdul Rahman",
      "age": 50,
      "bg": "professional, having CPF login issues",
      "emoji": "🔐",
      "salutation": "Mr",
      "lastname": "Abdul Rahman"
    },
    "subject": "Unable to log in to CPF digital services",
    "enquiry": "Dear CPF Board,\n\nI have been trying to log in to my CPF account online for the past two days. I keep getting an error message after entering my Singpass details. I have already reset my Singpass password but the problem persists.\n\nWhat else can I do?\n\nThank you,\nAbdul Rahman",
    "date": "03 June 2026",
    "correct": "We are sorry to hear you are facing difficulties. Please try the following steps: first, check your internet connection to ensure it is stable. Next, clear your browser cache and try again. Then relaunch the CPF website and attempt to log in again. Please also check that your browser is updated, as my cpf digital services works best on updated browsers. If you are using a mobile device, please ensure you are using a compatible browser such as Safari 12.1 and above or Chrome 78 and above. If the issue persists after these steps, please contact us via Write to Us and we will assist you.",
    "wrong1": "Your account has likely been locked after too many failed login attempts. Please call our hotline with your NRIC and date of birth to unlock it. Processing takes up to 2 working days.",
    "wrong2": "Login issues are usually caused by Singpass maintenance. Please check the Singpass app for any announcements about scheduled downtime. CPF Board's services are unavailable during these maintenance windows. Please try again after 24 hours.",
    "wrong3": "Please uninstall and reinstall the CPF Mobile app, and ensure you are using the latest version. Login issues on the website cannot be resolved remotely — you will need to visit a CPF Service Centre to reset your digital access.",
    "added": "If the issue persists after trying the troubleshooting steps, please contact us via Write to Us for further assistance.",
    "explain": "The correct response accurately describes the four official troubleshooting steps: check internet connection, clear browser cache, relaunch website, check browser compatibility (Safari 12.1+ or Chrome 78+).",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Ms Priscilla Wong",
      "age": 44,
      "bg": "HR executive",
      "emoji": "👩‍💼",
      "salutation": "Ms",
      "lastname": "Wong"
    },
    "subject": "Viewing child CPF statement online",
    "enquiry": "Dear CPF Board,\n\nI have a 10-year-old son who received a MediSave Grant for Newborns and has had some medical claims. Can I view his CPF transaction history and healthcare payments online?\n\nWhat do I need to do to access this?\n\nThank you,\nPriscilla",
    "date": "05 June 2026",
    "correct": "Yes, you can view your son's CPF Transaction History and Healthcare Payments and Claims statement online for the last 15 months, provided both you and your son are Singapore Citizens or Permanent Residents, your son is below the age of 21, and he has received CPF contributions or government grants such as the MediSave Grant for Newborns. Simply log in to my cpf digital services using your Singpass and navigate to the child statements section to access his records.",
    "wrong1": "Children's CPF statements are private and cannot be accessed by parents online. You will need to visit a CPF Service Centre with your son's birth certificate and your own NRIC to request a printed statement. Processing takes 5 working days.",
    "wrong2": "You can view your son's records but only after he reaches age 7. The MediSave Grant statement is accessible, but Transaction History is only available once CPF contributions have been received from employment.",
    "wrong3": "To view your child's CPF records, you need to register as an authorised parent through the CPF Parent Portal. Submit the registration form with a copy of your son's birth certificate. Access is granted within 3 working days.",
    "added": "Simply log in to my cpf digital services with your Singpass to access your child's statements.",
    "explain": "The correct response accurately states the three conditions for viewing child CPF statements online: both SC/PR, child below 21, child has received CPF contributions or government grants; access via my cpf digital services with Singpass.",
    "categories": [
      "Member Particulars",
      "Accounts Management"
    ]
  },
  {
    "persona": {
      "name": "Mr Lee Kok Wai",
      "age": 62,
      "bg": "retiree, sharing mobile number with wife",
      "emoji": "📞",
      "salutation": "Mr",
      "lastname": "Lee"
    },
    "subject": "Receiving CPF notifications meant for my wife",
    "enquiry": "Dear CPF Board,\n\nI keep receiving SMS notifications from CPF Board that seem to be for my wife's account, not mine. We share the same mobile number as we are both retired and just use one phone.\n\nIs this a problem? Do we need to change anything?\n\nThank you,\nKok Wai",
    "date": "07 June 2026",
    "correct": "This is happening because you and your wife share the same mobile number registered with CPF Board. When CPF Board sends notifications, they are sent to the registered mobile number, so both of your notifications will go to that number. This is permitted — CPF Board understands that some members share contact details with family members for assistance with CPF matters. No further action is required as long as your shared mobile number is still valid. If you wish to have separate notifications in future, you may each update to individual mobile numbers via my cpf digital services — Account settings.",
    "wrong1": "This is a system error. Please call our hotline immediately so we can separate the notifications for your two accounts. Sharing a mobile number is not permitted under CPF's contact registration policy.",
    "wrong2": "You should not be receiving your wife's notifications as CPF Board only sends notifications to the account holder's registered number. Please check if someone has added your number to her account without your knowledge and report it to CPF Board.",
    "wrong3": "To stop receiving your wife's notifications, you must deregister your shared mobile number from her account. She must register her own separate number. Having the same number on two accounts will cause both accounts to be flagged for a security review.",
    "added": "If you would prefer to receive notifications separately, each of you may update to your own individual mobile number via my cpf digital services.",
    "explain": "The correct response accurately states: sharing contact details with family members is permitted; CPF Board acknowledges this practice; no action required if the number is still valid; optional — each can update to their own number.",
    "categories": [
      "Member Particulars"
    ]
  },
  {
    "persona": {
      "name": "Ms Alicia Koh",
      "age": 29,
      "bg": "young professional, first CPF mobile login",
      "emoji": "📱",
      "salutation": "Ms",
      "lastname": "Koh"
    },
    "subject": "Unable to log in to CPF Mobile via Singpass QR code",
    "enquiry": "Hi CPF Board,\n\nI downloaded the CPF Mobile app and I am trying to log in using the Singpass QR code. But I keep getting an error after I scan the QR code. I am using my phone's default browser which is Firefox.\n\nWhat should I do?\n\nThank you,\nAlicia",
    "date": "09 June 2026",
    "correct": "The Singpass app requires a compatible browser to log in via QR code. CPF Mobile works best with Safari version 12.1 and above, or Chrome version 78 and above. Firefox is not listed as a compatible browser, which may be causing the login error. Please set either Safari or Chrome as your mobile device's default browser and try logging in again. If the issue persists, please ensure the Singpass app is installed on your device as it is required for QR code login.",
    "wrong1": "The QR code login method has been temporarily disabled due to a security update. Please use your Singpass username and password to log in instead. QR code login will be restored within the next few weeks.",
    "wrong2": "The error is likely because you need to update your CPF Mobile app to the latest version. Please uninstall and reinstall the app from the App Store or Google Play Store and try again.",
    "wrong3": "Singpass QR code login is only available for members who have set up Singpass 2FA using the Singpass app. If you are using an SMS OTP for your 2FA, you will need to switch to the Singpass app before QR code login becomes available.",
    "added": "Please use Safari 12.1 and above or Chrome 78 and above for the best login experience with CPF Mobile.",
    "explain": "The correct response accurately states that the Singpass app requires Safari 12.1+ or Chrome 78+ — Firefox is not compatible — and advises setting a compatible browser as the default.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Mr Yusoff",
      "age": 48,
      "bg": "FIN holder, foreign worker",
      "emoji": "🪪",
      "salutation": "Mr",
      "lastname": "Yusoff"
    },
    "subject": "FIN holder — profile selection when logging in to CPF digital services",
    "enquiry": "Dear CPF Board,\n\nI am a foreign national with an Employment Pass and a FIN number. I also have a CPF account from my previous work pass. I have Singpass registered under my FIN.\n\nI tried to log in to CPF digital services and was asked to choose a profile. I was confused. Can you explain?\n\nThank you,\nYusoff",
    "date": "11 June 2026",
    "correct": "As you have both a CPF-issued account number (from your previous work pass) and a current FIN with Singpass, when you log in to CPF digital services using your FIN-linked Singpass, you may be prompted to select a transaction profile. This is because CPF Board needs to know which account you wish to transact under — your CPF-issued account, or your FIN-linked account. Please select the appropriate profile based on the transaction you wish to perform. Both profiles give you access to your CPF services.",
    "wrong1": "This prompt means your two CPF accounts have been merged into one. You should select 'Primary Account' to access your combined CPF balance. The 'Secondary' option refers to archived records from your old account.",
    "wrong2": "The profile selection screen appears because your Singpass has not been fully verified. Please complete your Singpass 2FA setup first by visiting the Singpass website. Once 2FA is set up, you will no longer see this screen.",
    "wrong3": "You should only have one CPF account. The fact that you are seeing two profiles indicates a possible account duplication error. Please call our hotline immediately so we can investigate and merge the duplicate accounts.",
    "added": "Please select the appropriate profile to access your CPF services when prompted.",
    "explain": "The correct response accurately describes the FIN profile selection: when a foreign member has both a CPF-issued account and a FIN-linked account, they are prompted to choose which profile to transact under after logging in.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Ms Rachel Goh",
      "age": 31,
      "bg": "event planner",
      "emoji": "📅",
      "salutation": "Ms",
      "lastname": "Goh"
    },
    "subject": "Rescheduling a CPF appointment",
    "enquiry": "Hi CPF Board,\n\nI made an appointment to speak with a Customer Service Executive last week. Something has come up and I need to reschedule to a different date.\n\nHow do I change my appointment? Can I do it online?\n\nThank you,\nRachel",
    "date": "13 June 2026",
    "correct": "Yes, you can check, reschedule, or cancel your appointment online. Please visit the Book an Appointment page on the CPF website to manage your appointment. You will be able to view your existing appointment details and select a new date and time that is convenient for you. Appointment bookings can be made up to 2 weeks in advance.",
    "wrong1": "Appointments cannot be changed online once confirmed. Please call our hotline at least 24 hours before your appointment to reschedule. Walk-in rescheduling at the Service Centre on the day of your appointment is not permitted.",
    "wrong2": "To reschedule, please email our appointments team at appointments@cpf.gov.sg with your full name, NRIC, original appointment date, and your preferred new date. We will confirm your new appointment within 3 working days.",
    "wrong3": "Appointment changes must be made in person at the CPF Service Centre. Please come to the Service Centre at least 30 minutes before your original appointment time and our staff will assist you with rescheduling.",
    "added": "Appointment bookings are available up to 2 weeks in advance via the Book an Appointment page on the CPF website.",
    "explain": "The correct response accurately states that appointments can be checked, rescheduled, or cancelled via the 'Book an Appointment' page on the CPF website.",
    "categories": [
      "Digital Services"
    ]
  },
  {
    "persona": {
      "name": "Mr Francis Lim",
      "age": 58,
      "bg": "business owner, received HOMES call",
      "emoji": "🏡",
      "salutation": "Mr",
      "lastname": "Lim"
    },
    "subject": "Received a suspicious call claiming to be from HOMES",
    "enquiry": "Dear CPF Board,\n\nI received a call from someone claiming to be from the Household Means Eligibility System (HOMES). They asked me for my income details and bank account information to process my Silver Support reassessment.\n\nI am not sure if this is legitimate. Should I provide my information?\n\nThank you,\nFrancis",
    "date": "15 June 2026",
    "correct": "HOMES is a legitimate Government system that supports the Silver Support Scheme in conducting household means-tests. If you or a family member had requested a reassessment of Silver Support eligibility, the HOMES team may contact you by phone, email, or letter to clarify household information. To verify the authenticity of the call, please check the caller's mobile number against the list of HOMES contact numbers published on official government channels. However, please note that HOMES will never ask for your bank account details or passwords. If the caller requested such information, please do not provide it and report it as a potential scam.",
    "wrong1": "HOMES is not a real government agency. This call is almost certainly a scam. Please hang up immediately and report the number to the police. CPF Board never calls members to collect income details over the phone.",
    "wrong2": "HOMES is a legitimate agency and this call is likely genuine. Please provide your income details as requested to avoid delays in your Silver Support reassessment. Bank account details may be needed to update your payment preferences.",
    "wrong3": "HOMES only contacts beneficiaries by post, never by phone or email. Any call claiming to be from HOMES is a scam. Please report the caller's number to ScamShield immediately.",
    "added": "HOMES will never request your bank account details or passwords. If in doubt, do not provide any information and verify through official government channels.",
    "explain": "The correct response accurately states: HOMES is a legitimate Government system; it may contact members by phone/email/letter for SS reassessments; members should verify the contact number against official sources; HOMES will never ask for bank account details.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mdm Soo",
      "age": 76,
      "bg": "daughter helping bedridden mother",
      "emoji": "♿",
      "salutation": "Mdm",
      "lastname": "Soo"
    },
    "subject": "Helping bedridden mother withdraw GovCash",
    "enquiry": "Dear CPF Board,\n\nMy mother is 76 years old and is bedridden at home. She receives Silver Support via GovCash. She is physically unable to go to the ATM herself.\n\nAs her daughter and next-of-kin, can I withdraw her GovCash on her behalf?\n\nThank you,\nSoo",
    "date": "17 June 2026",
    "correct": "Yes, as her next-of-kin, you can help your mother withdraw her GovCash if she is physically unable to do so due to a medical condition. You will need to visit an OCBC New ATM at a branch during operating hours, where OCBC Digital Ambassadors are available to provide assistance. As a next-of-kin, you will need to bring the required supporting documents to verify your relationship and her medical condition. Please check with OCBC or CPF Board directly for the specific documents required before visiting.",
    "wrong1": "GovCash withdrawals can only be performed by the beneficiary themselves due to the face verification requirement. There is no provision for proxy withdrawals by family members regardless of medical condition.",
    "wrong2": "You can withdraw on her behalf by calling OCBC's customer service line to request a home delivery of the GovCash amount. This service is available for homebound seniors and requires a medical certificate from her doctor.",
    "wrong3": "As her next-of-kin, you can use the LifeSG app on your own smartphone to transfer her GovCash balance to your bank account. Simply log in with your own Singpass and select 'Transfer GovCash for family member'.",
    "added": "Please visit an OCBC New ATM with the necessary supporting documents. OCBC Digital Ambassadors will be on hand to assist you.",
    "explain": "The correct response accurately states that next-of-kin can assist a physically incapacitated beneficiary in withdrawing GovCash at an OCBC New ATM during branch hours with the help of Digital Ambassadors and supporting documents.",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Dennis Tan",
      "age": 67,
      "bg": "retiree, wants monthly Silver Support payments",
      "emoji": "📆",
      "salutation": "Mr",
      "lastname": "Tan"
    },
    "subject": "Can Silver Support be paid monthly instead of quarterly?",
    "enquiry": "Dear CPF Board,\n\nI find it difficult to manage my expenses because Silver Support comes in a lump sum every quarter. I would prefer to receive the money monthly so I can budget better.\n\nIs it possible to change to monthly payments?\n\nThank you,\nDennis",
    "date": "19 June 2026",
    "correct": "We understand your preference. However, Silver Support is designed to be paid on a quarterly basis and there is currently no option to receive monthly payments. Payments are made ahead of each quarter — on 31 December for the January to March quarter, 31 March for April to June, 30 June for July to September, and 30 September for October to December. CPF Board made this design choice deliberately, as paying in quarterly tranches gives recipients greater flexibility to manage larger expenses. We regret that monthly payments are not available at this time.",
    "wrong1": "You can opt for monthly payments by submitting a request through the Silver Support e-services portal using your Singpass. Navigate to 'Payment Preferences' and select 'Monthly'. This option is available for seniors who prefer more frequent disbursement.",
    "wrong2": "Monthly payments are available for seniors aged 70 and above. As you are 67, please check back when you turn 70 to see if you qualify for the monthly payment option.",
    "wrong3": "You can effectively receive your Silver Support monthly by setting up a standing instruction at your bank to transfer one-third of each quarterly payment to a separate savings account each month. CPF Board is unable to change the quarterly payment schedule.",
    "added": "We hope the quarterly payment schedule, which is paid at the start of each quarter, helps you in planning ahead for your expenses.",
    "explain": "The correct response accurately states that Silver Support is quarterly only — no monthly option exists — and correctly gives the advance payment dates (31 Dec, 31 Mar, 30 Jun, 30 Sep) and the rationale (greater flexibility for managing larger expenses).",
    "categories": [
      "SSS"
    ]
  },
  {
    "persona": {
      "name": "Mr Lim Teck Seng",
      "age": 45,
      "bg": "mid-career professional",
      "emoji": "💼",
      "salutation": "Mr",
      "lastname": "Lim"
    },
    "subject": "How CPF interest is calculated and when it is credited",
    "enquiry": "Dear CPF Board,\n\nI have been trying to understand how my CPF interest works. I made a contribution in April and I expected to see more interest at the end of April. But it did not seem to increase.\n\nCan you explain how interest is computed and when I will see it in my account?\n\nThank you,\nTeck Seng",
    "date": "02 July 2026",
    "correct": "CPF interest is computed monthly but credited to your accounts by the following year and compounded annually. Importantly, contributions received in a particular month only start earning interest from the following month. So a contribution made in April will begin earning interest from May onwards. You will see the accumulated interest credited to your account in January of the following year. Withdrawals made in a given month will also stop earning interest from that month. This is why your balance may not appear to increase month by month even though interest is accruing.",
    "wrong1": "CPF interest is credited daily. You should be able to see your interest accruing every day in your transaction history. If your interest did not increase after your April contribution, please check whether the contribution was successfully processed by CPF Board.",
    "wrong2": "CPF interest is computed and credited at the end of each month. Your April contribution should have earned interest and been reflected in your balance by 30 April. If it was not, please contact us as there may be a processing error.",
    "wrong3": "CPF interest is calculated once a year and credited in December. Contributions made throughout the year all earn interest from the date they are received, and the total interest for the year is paid out together in December.",
    "added": "Your CPF interest accumulates throughout the year and will be credited to your account in January of the following year.",
    "explain": "The correct response accurately states: interest is computed monthly but credited annually in January of following year; contributions start earning interest the month after they are received; withdrawals stop earning from the month they are made.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Tan Siew Bee",
      "age": 38,
      "bg": "accountant, comparing CPF rates",
      "emoji": "📊",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "Current CPF interest rates and extra interest explained",
    "enquiry": "Dear CPF Board,\n\nI am trying to understand my CPF better. I know the OA and SA earn different rates but I am not sure exactly how much.\n\nCan you tell me the current interest rates for each account? And is there any extra interest I can earn?\n\nThank you,\nSiew Bee",
    "date": "04 July 2026",
    "correct": "The current CPF interest rates (1 January to 31 March 2026) are 2.5% per annum for the Ordinary Account, and 4% per annum for the Special, MediSave, and Retirement Accounts. In addition, the Government pays extra interest of 1% per annum on the first $60,000 of your combined CPF balances (capped at $20,000 for the OA) if you are below age 55. Once you turn 55, you earn an additional 1% extra interest on the first $30,000 of your combined balances, on top of the existing 1% on the first $60,000. This extra interest is designed to help members with lower balances benefit more.",
    "wrong1": "The current CPF interest rate is 2.5% for all accounts — OA, SA, MA, and RA. There is no extra interest available. The 4% rate you may have read about is only for voluntary top-ups to the SA or RA under the Retirement Sum Topping-Up Scheme.",
    "wrong2": "The OA earns 3.5% and the SA earns 5%. Extra interest of 0.5% is available on balances above $20,000 if you are aged 40 and above. Please log in to your CPF account to see your personalised interest breakdown.",
    "wrong3": "CPF interest rates change every month in line with market rates. The current rate can only be confirmed by logging in to your CPF account. General rates on the website may not reflect your individual rate.",
    "added": "The extra interest is automatically applied — you do not need to take any action to receive it.",
    "explain": "The correct response accurately states: OA = 2.5%; SMRA = 4%; extra interest = 1% on first $60,000 combined (capped at $20,000 OA) for members below 55; additional 1% on first $30,000 for members 55 and above.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Mr Gary Phua",
      "age": 52,
      "bg": "senior manager, wants hardcopy statement",
      "emoji": "📄",
      "salutation": "Mr",
      "lastname": "Phua"
    },
    "subject": "Can I get a hardcopy of my CPF Yearly Statement?",
    "enquiry": "Dear CPF Board,\n\nI prefer receiving a physical copy of my CPF Yearly Statement of Account every year. I used to get one by post but I have not received one recently.\n\nCan I request for a hardcopy to be mailed to me?\n\nThank you,\nGary",
    "date": "06 July 2026",
    "correct": "CPF Board has moved the Yearly Statement of Account (YSOA) to a fully digital format as part of our green efforts. Hardcopy YSOAs are no longer mailed by default. However, you can easily view, download, and save or print your YSOA for the past 10 years by logging in to my cpf digital services and clicking the PDF icon on the YSOA page. We strongly encourage you to download and save your statements regularly as CPF Board does not retrieve statements beyond the past 10 years.",
    "wrong1": "You can request a hardcopy YSOA by calling our hotline. There is a processing fee of $5 per statement and it will be mailed to your registered address within 10 working days.",
    "wrong2": "Hardcopy statements are still available on request at any CPF Service Centre. Please bring your NRIC and make an appointment. There is no charge for the first copy per year.",
    "wrong3": "Hardcopy YSOAs are sent automatically every January to members above the age of 55. If you are below 55, you will need to opt in by submitting a form on the CPF website. A $2 printing and postage fee applies.",
    "added": "You can log in to my cpf digital services to view and download your YSOA in PDF format at any time.",
    "explain": "The correct response accurately states that CPF has moved to digital-only YSOA; hardcopy is no longer provided by default; members can view, download and print via my cpf digital services for the past 10 years.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Michelle Ong",
      "age": 31,
      "bg": "new permanent resident",
      "emoji": "🪪",
      "salutation": "Ms",
      "lastname": "Ong"
    },
    "subject": "New PR — when do CPF contributions start and at what rates?",
    "enquiry": "Dear CPF Board,\n\nI just received my Singapore Permanent Residency last week. My employer asked me about CPF contributions.\n\nWhen do CPF contributions start? And will the rates be the same as for Singapore Citizens?\n\nThank you,\nMichelle",
    "date": "08 July 2026",
    "correct": "Congratulations on your PR status. CPF contributions are payable from the very first day you obtain your Singapore Permanent Resident status. However, for the first two years of PR, both you and your employer will contribute at graduated (lower) rates to help you adjust to the reduced take-home pay. From the third year onwards, full CPF contribution rates apply — the same as for Singapore Citizens. You and your employer also have the option to jointly apply to CPF Board to contribute at the higher (full) rates from your first year of PR if you prefer.",
    "wrong1": "CPF contributions for new PRs start only after 6 months of obtaining PR status, as CPF Board needs time to process your new account. Your employer does not need to make contributions during this period.",
    "wrong2": "New PRs contribute at the same full rate as Singapore Citizens from day one. There is no graduated rate for PRs. The graduated rate only applies to foreign domestic workers and part-time employees.",
    "wrong3": "CPF contributions start from your first full calendar month as a PR. If you obtained PR in the middle of a month, contributions begin the following month. Rates are the same as Citizens throughout.",
    "added": "You and your employer may jointly apply to contribute at full rates from your first year of PR if you wish to build up your CPF savings faster.",
    "explain": "The correct response accurately states: contributions start from day 1 of PR; graduated rates apply in years 1 and 2; full rates from year 3; joint application to pay full rates earlier is available.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Mr Chen Jia Wei",
      "age": 28,
      "bg": "newly converted Singapore Citizen",
      "emoji": "🎉",
      "salutation": "Mr",
      "lastname": "Chen"
    },
    "subject": "CPF contribution rates after converting from PR to SC",
    "enquiry": "Dear CPF Board,\n\nI just converted from Singapore Permanent Resident to Singapore Citizen this month. When do the Singapore Citizen CPF contribution rates apply?\n\nMy conversion happened mid-month on 15 July. Does the rate change immediately on that day?\n\nThank you,\nJia Wei",
    "date": "10 July 2026",
    "correct": "Congratulations on your citizenship. The CPF contribution rates for Singapore Citizens apply from the date you converted — in your case, from 15 July onwards. For Ordinary Wages (OW) in the month of conversion, your employer will need to pro-rate your OW and apply the appropriate rates for the portion before and after your conversion date. For Additional Wages (AW), your employer will also need to apply the applicable contribution rates proportionately. Your employer may write to CPF Board for assistance on the computation if needed.",
    "wrong1": "The Singapore Citizen contribution rates apply from the first day of the following month. As your conversion was on 15 July, Citizen rates will apply from 1 August onwards. Your July wages will be processed entirely at PR rates.",
    "wrong2": "The Singapore Citizen rates apply from the start of the year in which you converted. As you converted in July 2026, Citizen rates will be backdated to 1 January 2026 and any shortfall will be credited to your account.",
    "wrong3": "Citizen rates apply only when CPF Board updates your account status, which takes 2 to 4 weeks after conversion. Your employer should continue deducting at PR rates and the difference will be credited automatically.",
    "added": "Your employer may contact CPF Board for assistance with the pro-ration computation if needed.",
    "explain": "The correct response accurately states: Citizen rates apply from the date of conversion; OW must be pro-rated for the month of conversion; AW must also be proportionately assessed; employer can write to CPF Board for assistance.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Mr Raj Nair",
      "age": 55,
      "bg": "recently turned 55",
      "emoji": "🎂",
      "salutation": "Mr",
      "lastname": "Nair"
    },
    "subject": "Extra CPF interest after turning 55",
    "enquiry": "Dear CPF Board,\n\nI just turned 55 last month. I heard that I can earn more extra interest now. Can you explain what extra interest I am eligible for and how it works?\n\nThank you,\nRaj",
    "date": "12 July 2026",
    "correct": "Happy belated birthday! Now that you are 55 and above, you are eligible for an additional 1% extra interest on the first $30,000 of your combined CPF balances, on top of the existing 1% extra interest on the first $60,000 (capped at $20,000 for the Ordinary Account) that all members earn. This means the first $30,000 of your combined CPF balances effectively earns an extra 2% interest, while the next $30,000 earns an extra 1%. This extra interest is automatically applied and you do not need to take any action.",
    "wrong1": "Members aged 55 and above earn a flat extra 2% on all CPF balances regardless of the amount. There is no cap on the extra interest for seniors. This is credited to your account annually in January.",
    "wrong2": "The extra interest for members above 55 only applies to the Retirement Account. Your OA and SA balances do not qualify for extra interest. Please transfer savings to your RA to maximise your extra interest earnings.",
    "wrong3": "Extra interest for members 55 and above is 1.5% on the first $100,000 of combined CPF balances. This replaces the earlier 1% rate that applied when you were below 55. No action is required.",
    "added": "The extra interest is automatically computed and credited to your account — no action is needed on your part.",
    "explain": "The correct response accurately states: members 55+ get an additional 1% on the first $30,000 combined balances ON TOP OF the existing 1% on the first $60,000 (capped at $20,000 for OA) — so first $30,000 earns 2% extra, next $30,000 earns 1% extra.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Adeline Koh",
      "age": 40,
      "bg": "mother, wants to top up child's MediSave",
      "emoji": "👶",
      "salutation": "Ms",
      "lastname": "Koh"
    },
    "subject": "Topping up my child's MediSave Account — limit and tax relief",
    "enquiry": "Dear CPF Board,\n\nI want to top up my 8-year-old daughter's MediSave Account. She received a MediSave Grant for Newborns but I want to add more.\n\nHow do I do this? Is there a limit? And can I claim tax relief for this?\n\nThank you,\nAdeline",
    "date": "14 July 2026",
    "correct": "You can top up your daughter's MediSave Account using the Top up MediSave Account form on the CPF website and complete the payment via PayNow QR. You will be prompted to key in her NRIC or CPF Account Number as the recipient. The maximum you can save in her MediSave Account is the Basic Healthcare Sum (BHS), which is $79,000 from 1 January 2026 for members aged 65 and below, and is adjusted annually until she turns 65. Please note that there is no tax relief available for top-ups to another person's MediSave Account — tax relief only applies to self-employed persons topping up their own MediSave.",
    "wrong1": "You can top up your daughter's MediSave Account by visiting any CPF Service Centre with cash or a bank cheque. Online top-ups for a child's account are not available. There is a maximum top-up of $5,000 per year per child. Tax relief of up to $7,000 is available.",
    "wrong2": "MediSave top-ups for children can only be made by the child's biological parents and require uploading a birth certificate. Tax relief of up to $8,000 is claimable for each MediSave top-up to an immediate family member.",
    "wrong3": "To top up your daughter's MediSave, you need to obtain a CPF-issued top-up form from the Service Centre and submit it by post with a NETS or cheque payment. Online PayNow payments for children's MediSave are not available.",
    "added": "Please make the top-up by 31 December to have it count towards the current calendar year.",
    "explain": "The correct response accurately states: top up via Top up MediSave Account form with PayNow QR; BHS is the maximum ($79,000 from Jan 2026); no tax relief for topping up another person's MediSave.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Mr Vincent Ng",
      "age": 48,
      "bg": "employee, MediSave balance above BHS",
      "emoji": "🏥",
      "salutation": "Mr",
      "lastname": "Ng"
    },
    "subject": "What happens when MediSave exceeds the Basic Healthcare Sum?",
    "enquiry": "Dear CPF Board,\n\nI recently noticed that my MediSave Account balance has exceeded the Basic Healthcare Sum. My employer continues to make monthly contributions.\n\nWhat happens to the contributions above the BHS? Will they be lost?\n\nThank you,\nVincent",
    "date": "16 July 2026",
    "correct": "Your contributions will not be lost. Any savings in your MediSave Account above the Basic Healthcare Sum (BHS) will automatically be channelled to your Special Account or Retirement Account, depending on your age. This overflow arrangement is designed to prevent excessive accumulation in your MediSave Account while helping to supplement your retirement savings. The excess is automatically redirected — you do not need to take any action.",
    "wrong1": "Contributions above the Basic Healthcare Sum are returned directly to you as cash within 3 working days. You can then use this money for any purpose. CPF Board will notify you via SMS each time an overflow refund is processed.",
    "wrong2": "If your MediSave balance exceeds the BHS, your employer's contributions to MediSave will stop automatically. The contributions will instead be split between your OA and SA. Please inform your employer's HR department to update their CPF submission.",
    "wrong3": "Excess savings above the BHS are forfeited as they cannot be transferred between CPF accounts. To avoid losing contributions, you should apply for a voluntary reduction in your MediSave contribution rate via the CPF website.",
    "added": "The overflow from your MediSave Account will be automatically channelled to your Special or Retirement Account — no action is required.",
    "explain": "The correct response accurately states that MediSave savings above the BHS are automatically channelled to the SA or RA (depending on age) — they are not lost. No action needed.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Joanne Tan",
      "age": 62,
      "bg": "pre-retirement planning",
      "emoji": "🌅",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "Do I need to top up MediSave to BHS before receiving retirement payouts?",
    "enquiry": "Dear CPF Board,\n\nI am 62 and planning for retirement. My MediSave balance is about $55,000 but the Basic Healthcare Sum is around $79,000.\n\nDo I need to top up my MediSave to reach the BHS before I can start receiving payouts? Or can I start payouts even if my MediSave is below the BHS?\n\nThank you,\nJoanne",
    "date": "18 July 2026",
    "correct": "You do not need to top up your MediSave Account to the Basic Healthcare Sum in order to receive your retirement payouts at your Payout Eligibility Age. The BHS is the estimated savings you need in your MediSave to cover your basic subsidised healthcare needs in old age, and it is the maximum amount you can hold in your MediSave Account. If your balance is below the BHS at age 65, you are simply not required to top up — though you may choose to do so voluntarily if you wish to build up your healthcare savings.",
    "wrong1": "Yes, you must have the full Basic Healthcare Sum in your MediSave Account before CPF Board will release your retirement payouts. If your MediSave balance is below the BHS at age 65, your Retirement Account funds will be used to top it up first.",
    "wrong2": "You need to reach at least 50% of the BHS before your payouts can begin. As your current balance is about $55,000 and the BHS is $79,000, you already meet this requirement. No top-up is needed.",
    "wrong3": "Members must top up their MediSave to the BHS as a condition of receiving CPF LIFE payouts. However, if you cannot afford to do so, you may apply for a hardship exemption from CPF Board, reviewed every 3 years.",
    "added": "While topping up your MediSave is not compulsory, doing so voluntarily is one way to build up your healthcare savings for retirement.",
    "explain": "The correct response accurately states that topping up MediSave to the BHS is NOT required to start retirement payouts. The BHS is a maximum cap, not a condition for withdrawal.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Mr Poh Beng Chuan",
      "age": 36,
      "bg": "self-employed freelancer",
      "emoji": "🎨",
      "salutation": "Mr",
      "lastname": "Poh"
    },
    "subject": "Deadline and tax relief for voluntary CPF top-up",
    "enquiry": "Dear CPF Board,\n\nI am self-employed and I want to make a voluntary top-up to my own CPF OA, SA, and MA. I heard there is a deadline and I can claim tax relief.\n\nCan you tell me the deadline and how tax relief works for this?\n\nThank you,\nBeng Chuan",
    "date": "20 July 2026",
    "correct": "All applications and payments for topping up your three CPF accounts must reach CPF Board by the last day of the calendar year — 31 December — to be counted towards that year's CPF Annual Limit. Backdating of top-ups to previous years is not allowed. Regarding tax relief, it is only applicable if you are a self-employed person with assessable net trade income and are topping up your own CPF accounts. There is no tax relief for top-ups made to another person's CPF accounts. You can make the top-up via the Top up 3 CPF accounts using PayNow QR on the CPF website.",
    "wrong1": "The deadline for CPF voluntary top-ups is 31 March of the following year, coinciding with the income tax filing deadline. Tax relief is available for top-ups to your own or immediate family members' accounts.",
    "wrong2": "There is no specific deadline for voluntary top-ups. You can top up at any time and the contribution will be applied to the most recent calendar year. Tax relief is available for all voluntary top-ups regardless of employment status.",
    "wrong3": "The deadline is the last working day of each year. Tax relief is automatically applied for all CPF top-ups regardless of whether you are employed or self-employed. You do not need to declare it in your income tax filing.",
    "added": "Please make your top-up well before 31 December to ensure it is successfully processed before the year-end deadline.",
    "explain": "The correct response accurately states: deadline is 31 December; backdating not allowed; tax relief only for self-employed persons topping up their own CPF accounts; no tax relief for top-ups to others; PayNow QR is the payment method.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Nadia Rahman",
      "age": 29,
      "bg": "government employee, checking notification legitimacy",
      "emoji": "📩",
      "salutation": "Ms",
      "lastname": "Rahman"
    },
    "subject": "Is the CPF Yearly Statement notification email legitimate?",
    "enquiry": "Dear CPF Board,\n\nI received an email saying my CPF Yearly Statement is ready to view. The sender address ended with @e.cpf.gov.sg. I am not sure if this is real as I have heard about phishing scams.\n\nIs this a legitimate email from CPF Board? How can I verify?\n\nThank you,\nNadia",
    "date": "22 July 2026",
    "correct": "The email you received is legitimate. CPF Board sends notifications to members who have registered their contact details with us. For email notifications, the sender address will end with '@e.cpf.gov.sg'. For SMS notifications, they are sent via 'gov.sg' and will begin with 'Central Provident Fund Board'. For push notifications through the CPF Mobile app, they will come from CPF Mobile. As the sender address you saw ends with '@e.cpf.gov.sg', this matches our official sender details and the notification is genuine.",
    "wrong1": "CPF Board only sends YSOA notifications from noreply@cpf.gov.sg. An email from @e.cpf.gov.sg is not from CPF Board and may be a phishing attempt. Please do not click any links and report it to the Cyber Security Agency.",
    "wrong2": "CPF Board does not send email notifications for the Yearly Statement of Account — only SMS. An email about your YSOA is likely a phishing scam. Please delete it and do not click any links.",
    "wrong3": "While @e.cpf.gov.sg looks official, phishing emails can spoof sender addresses. The only safe approach is to ignore all email notifications and always log in to my cpf digital services directly.",
    "added": "When in doubt, go directly to cpf.gov.sg by typing the address into your browser rather than clicking any links in the email.",
    "explain": "The correct response accurately states the three legitimate sender details: email ends with @e.cpf.gov.sg; SMS via gov.sg beginning with 'Central Provident Fund Board'; push notification from CPF Mobile. The received email is legitimate.",
    "categories": ["Accounts Management", "Digital Services"]
  },
  {
    "persona": {
      "name": "Mr Kenneth Wee",
      "age": 57,
      "bg": "donee for ageing parent with dementia",
      "emoji": "👴",
      "salutation": "Mr",
      "lastname": "Wee"
    },
    "subject": "Accessing parent's YSOA as appointed LPA donee",
    "enquiry": "Dear CPF Board,\n\nMy father is 85 years old and I am his appointed donee under a Lasting Power of Attorney. He has dementia and cannot manage his own affairs.\n\nHow can I access his CPF Yearly Statement of Account on his behalf?\n\nThank you,\nKenneth",
    "date": "24 July 2026",
    "correct": "As an appointed donee under a Lasting Power of Attorney, you can access your father's CPF Yearly Statement of Account by setting up Singpass Multi-User SMS 2FA. This is a one-time setup that allows you to conveniently access your next-of-kin's YSOA without repeatedly submitting supporting documents. You will need to apply through the designated link for Donees with LPA and provide the necessary supporting documents for the one-time setup. Once set up, you can log in using the Singpass Multi-User SMS 2FA to view his YSOA.",
    "wrong1": "Donees under an LPA can view a next-of-kin's YSOA by simply logging in to my cpf digital services with their own Singpass and entering the next-of-kin's NRIC number. No additional setup is required.",
    "wrong2": "To access your father's YSOA on his behalf, please visit a CPF Service Centre with the original LPA document and your father's NRIC. Our staff will print a copy of the statement for you. This service is by appointment only.",
    "wrong3": "Donees under an LPA are not permitted to access CPF digital services on behalf of the donor as this could compromise account security. Please write to us via Write to Us and attach the LPA document. We will mail a printed YSOA to the donor's registered address within 10 working days.",
    "added": "The Singpass Multi-User SMS 2FA is a one-time setup that makes it convenient to access your father's CPF information going forward.",
    "explain": "The correct response accurately states: donees can set up Singpass Multi-User SMS 2FA via the designated LPA donee application link; one-time setup with supporting documents allows ongoing access to the YSOA.",
    "categories": ["Accounts Management", "Digital Services"]
  },
  {
    "persona": {
      "name": "Ms Irene Goh",
      "age": 66,
      "bg": "retiree, cash grants missing from YSOA",
      "emoji": "💰",
      "salutation": "Ms",
      "lastname": "Goh"
    },
    "subject": "Cash grants missing from CPF Yearly Statement",
    "enquiry": "Dear CPF Board,\n\nI used to see my cash grants listed on my CPF Yearly Statement of Account but this year they are missing. I received GST Vouchers and other government benefits last year.\n\nWhere can I find records of these payments?\n\nThank you,\nIrene",
    "date": "26 July 2026",
    "correct": "CPF Board has moved records of CPF-administered cash grants from the Yearly Statement of Account to YourBenefits@LifeSG. This platform provides a more comprehensive view of common Government-provided benefits you have received, covering schemes from multiple agencies including CPF Board. You will need to log in using your Singpass to access YourBenefits@LifeSG. Your cash grant records are still accessible — they have simply been consolidated into this dedicated benefits platform.",
    "wrong1": "Cash grants are no longer recorded anywhere as CPF Board does not retain records of one-off government payments. For proof of past payments, please contact the relevant government agencies such as IRAS or MSF directly.",
    "wrong2": "Your cash grants should still appear on your YSOA. If they are missing, there may have been an error. Please write to CPF Board via Write to Us and provide the types of grants and approximate amounts you expected to see.",
    "wrong3": "Cash grants have been removed from the YSOA as they are now handled directly by the relevant ministries. You will receive a separate annual statement from each ministry detailing your benefits.",
    "added": "Log in to YourBenefits@LifeSG with your Singpass to view a consolidated record of all your Government-provided benefits.",
    "explain": "The correct response accurately states that cash grant records were moved from the YSOA to YourBenefits@LifeSG, which requires Singpass login and shows benefits across multiple agencies.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Mr Alan Tay",
      "age": 34,
      "bg": "employee with foreign colleague",
      "emoji": "🤔",
      "salutation": "Mr",
      "lastname": "Tay"
    },
    "subject": "Who is exempted from CPF contributions?",
    "enquiry": "Dear CPF Board,\n\nI am a Singapore Citizen working part-time. My employer told me that some employees do not need to receive CPF contributions. Who is exempted?\n\nAlso, I have a foreign colleague who wants to know if she has to pay CPF.\n\nThank you,\nAlan",
    "date": "28 July 2026",
    "correct": "As a Singapore Citizen, you are generally entitled to receive CPF contributions from your employer as long as you are employed under a contract of service. The main categories exempted from CPF contributions are: students who fulfil specific exemption criteria, foreigners (persons who are neither Singapore Citizens nor Permanent Residents), and domestic employees such as cooks, maids, and gardeners whose employment does not exceed 14 hours per week. Your foreign colleague, not being a Singapore Citizen or Permanent Resident, does not receive CPF contributions.",
    "wrong1": "Part-time employees who work fewer than 20 hours per week are exempt from CPF contributions. As a part-time employee, you may not be entitled to CPF contributions depending on your working hours. Please check with your employer.",
    "wrong2": "All employees earning below $500 per month are exempt from CPF contributions, regardless of citizenship. If your monthly salary is above $500, CPF contributions are compulsory for all.",
    "wrong3": "Foreigners on Employment Passes contribute to a Foreign Worker Levy instead of CPF. Work Permit holders pay a different rate. Only Singaporeans and PRs pay into CPF, and all of them must do so without exception.",
    "added": "Your foreign colleague, as a non-Citizen and non-PR, is not entitled to CPF contributions.",
    "explain": "The correct response accurately lists the three exempted categories: qualifying students, foreigners, and domestic employees working not more than 14 hours per week.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Hwang Min Ji",
      "age": 43,
      "bg": "Korean PR, renewed Re-Entry Permit",
      "emoji": "🔄",
      "salutation": "Ms",
      "lastname": "Hwang"
    },
    "subject": "CPF contributions after renewing Re-Entry Permit",
    "enquiry": "Dear CPF Board,\n\nI am a Singapore Permanent Resident from Korea and I recently renewed my Re-Entry Permit to maintain my PR status.\n\nDoes renewing my Re-Entry Permit affect my CPF contribution rates? Do I go back to the graduated rates?\n\nThank you,\nMin Ji",
    "date": "01 August 2026",
    "correct": "Renewing your Re-Entry Permit maintains your existing Singapore Permanent Resident status — it does not restart your PR year count for CPF purposes. As a PR, you are still required to make CPF contributions on wages earned in Singapore. Your CPF contribution rates depend on how long you have held PR status continuously. Since you are renewing and not starting fresh PR status, your contribution rates remain as per your current year of PR status and are not reset to the graduated first-year rates.",
    "wrong1": "Renewing your Re-Entry Permit resets your PR year count for CPF contribution purposes. You will be treated as a first-year PR again and pay the graduated lower rates for 2 years before returning to full rates.",
    "wrong2": "Re-Entry Permit renewal has no impact on CPF contributions as the Re-Entry Permit is an immigration document only. Your CPF rates are based solely on your age and salary band, not your PR year count.",
    "wrong3": "Once you have held PR status for more than 3 years, your CPF contribution rates are permanently fixed at the full rate regardless of Re-Entry Permit renewals.",
    "added": "Your CPF obligations as a PR remain unchanged upon Re-Entry Permit renewal.",
    "explain": "The correct response accurately states that Re-Entry Permit renewal maintains existing PR status and does NOT restart the PR year count for CPF contribution rate purposes.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Lily Chua",
      "age": 35,
      "bg": "appointed as Trusted Contact, wants to withdraw",
      "emoji": "🔔",
      "salutation": "Ms",
      "lastname": "Chua"
    },
    "subject": "How to remove myself as someone's Trusted Contact",
    "enquiry": "Dear CPF Board,\n\nI was appointed as a Trusted Contact by my uncle about a year ago. I am now very busy and feel I cannot monitor his notifications properly anymore.\n\nHow do I remove myself as his Trusted Contact?\n\nThank you,\nLily",
    "date": "03 August 2026",
    "correct": "You can remove yourself as a Trusted Contact at any time by submitting the 'Remove yourself from your loved ones' Trusted Contact list' e-form on the CPF website, using your Singpass. The removal takes immediate effect upon a successful submission. We also recommend informing your uncle so that he can consider appointing someone else to help monitor his CPF account.",
    "wrong1": "You cannot remove yourself as a Trusted Contact. Only the CPF account holder (your uncle) can remove an appointed Trusted Contact. Please ask him to submit the removal request via his Account settings.",
    "wrong2": "To remove yourself, please write to CPF Board via Write to Us and explain the reason for removal. Include both your NRIC and your uncle's NRIC. CPF Board will process the removal within 5 working days.",
    "wrong3": "Trusted Contact appointments automatically expire after 12 months if not renewed. As it has been about a year since your appointment, your role may already have lapsed. Please log in to Account settings to check if the appointment is still active.",
    "added": "Your removal will take immediate effect once you have successfully submitted the e-form.",
    "explain": "The correct response accurately states: the Trusted Contact can remove themselves via the Remove yourself e-form with Singpass; removal takes immediate effect.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Desmond Foo",
      "age": 55,
      "bg": "retiree, Trusted Contact passed away",
      "emoji": "🕊️",
      "salutation": "Mr",
      "lastname": "Foo"
    },
    "subject": "My Trusted Contact has passed away — what happens?",
    "enquiry": "Dear CPF Board,\n\nMy appointed Trusted Contact, my wife, passed away last month. I only have one Trusted Contact.\n\nWhat happens to the Trusted Contact arrangement? Do I need to do anything?\n\nThank you,\nDesmond",
    "date": "05 August 2026",
    "correct": "We are sorry for your loss. CPF Board will revoke your Trusted Contact appointment upon the passing of your appointed Trusted Contact, as part of the process of updating CPF records when a member passes away. You do not need to take immediate action, though you may wish to appoint a new Trusted Contact in due course to continue having an additional layer of protection for your CPF account. You can do so via the Add or Remove Trusted Contact e-form on the CPF website.",
    "wrong1": "The Trusted Contact arrangement remains active until you manually remove it, even after the Trusted Contact passes away. Please log in to your Account settings and remove your wife's appointment to avoid any complications.",
    "wrong2": "You will need to inform CPF Board of your wife's passing by writing to us with her death certificate before we can update the Trusted Contact records. Without this notification, the arrangement will remain on our system.",
    "wrong3": "When a Trusted Contact passes away, the arrangement is automatically transferred to the next-of-kin of the deceased Trusted Contact. Your wife's appointment would pass to her nominated next-of-kin. You will receive a notification about this change.",
    "added": "When you are ready, you can appoint a new Trusted Contact via the Add or Remove Trusted Contact e-form on the CPF website.",
    "explain": "The correct response accurately states that CPF Board will revoke the Trusted Contact appointment upon the passing of either the appointer or the Trusted Contact, and that the member can appoint a new Trusted Contact via the e-form.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Eddy Lim",
      "age": 47,
      "bg": "business owner, noticing limited TC alerts",
      "emoji": "🛡️",
      "salutation": "Mr",
      "lastname": "Lim"
    },
    "subject": "Why does my Trusted Contact only get notified for certain transactions?",
    "enquiry": "Dear CPF Board,\n\nI have a Trusted Contact set up. I recently transferred funds between my CPF accounts and checked my investment portfolio. My Trusted Contact did not receive any notification for these.\n\nI thought he would be notified for all transactions. Is the service not working?\n\nThank you,\nEddy",
    "date": "07 August 2026",
    "correct": "The Trusted Contact service is working correctly. Notifications are only sent to your Trusted Contact for a specific set of higher-risk transactions: CPF lump sum withdrawals for immediate retirement needs, contact details updates, bank account updates, and daily withdrawal limit updates. Transfers between CPF accounts and investment-related transactions are not included because these do not carry the same external scam risk. CPF Board intentionally limits notifications to the highest-risk transactions to avoid overwhelming your Trusted Contact with less critical alerts.",
    "wrong1": "All CPF transactions should trigger a notification to your Trusted Contact. If he did not receive notifications for your transfers and investment checks, there may be a technical issue. Please ask him to check his spam folder and ensure his contact details are up to date.",
    "wrong2": "Notifications to Trusted Contacts are limited to transactions above $10,000. As internal transfers between accounts and investment viewing do not involve disbursements above this threshold, they do not trigger notifications.",
    "wrong3": "Your Trusted Contact receives a weekly summary of all your CPF activities rather than individual transaction notifications. He should check for a weekly digest email every Monday.",
    "added": "The Trusted Contact notification service covers only the four highest-risk transaction types to ensure your Trusted Contact can focus on what matters most.",
    "explain": "The correct response accurately states: only four transaction types trigger Trusted Contact notifications (CPF lump sum withdrawal, contact details update, bank account update, daily withdrawal limit update); internal transfers and investments are excluded by design.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Clement Chia",
      "age": 62,
      "bg": "retiree, received scam withdrawal alert via TC",
      "emoji": "🚨",
      "salutation": "Mr",
      "lastname": "Chia"
    },
    "subject": "My Trusted Contact received a withdrawal alert I did not make",
    "enquiry": "Dear CPF Board,\n\nMy son, who is my Trusted Contact, just called me saying he received a notification that I made a CPF withdrawal. I did not make any withdrawal.\n\nWhat should I do? I am very worried.\n\nThank you,\nClement",
    "date": "09 August 2026",
    "correct": "Please act immediately. This is exactly the situation the Trusted Contact service is designed to detect. Your son should call the 24/7 ScamShield anti-scam helpline at 1799 as a first step. You should also contact CPF Board as soon as possible via our official channels to report the potentially unauthorised transaction. Do not share your Singpass credentials or OTPs with anyone. If you believe your Singpass has been compromised, please contact the Singpass Helpdesk immediately as well.",
    "wrong1": "Please do not be alarmed. The notification may have been delayed and could relate to a legitimate old transaction. Please wait 24 hours and contact us only if the issue persists.",
    "wrong2": "This may be a test notification sent by CPF Board as part of our anti-scam awareness campaign. We periodically send simulated alerts to Trusted Contacts. Please log in to your CPF account to verify your transaction history before taking any action.",
    "wrong3": "As this appears to be a fraudulent withdrawal, please file a police report first before contacting CPF Board. CPF Board requires a police report number before we can investigate or freeze your account.",
    "added": "Please call the ScamShield hotline at 1799 immediately if you suspect you have been scammed.",
    "explain": "The correct response accurately states the recommended action: call ScamShield at 1799; contact CPF Board via official channels; do not share Singpass credentials or OTPs; contact Singpass Helpdesk if Singpass may be compromised.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Eunice Tan",
      "age": 31,
      "bg": "declined a Trusted Contact request",
      "emoji": "✉️",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "I declined a Trusted Contact request — will my aunt be notified?",
    "enquiry": "Hi CPF Board,\n\nMy aunt asked me to be her Trusted Contact. I received the request but I declined it as I travel a lot and felt I could not take on the responsibility.\n\nWill my aunt be notified that I declined? And what should she do next?\n\nThank you,\nEunice",
    "date": "11 August 2026",
    "correct": "Yes, your aunt will be notified via email, SMS, and CPF Mobile app push notifications (if enabled) that her appointment request was declined. She should speak with you to understand your decision and may explain the role of a Trusted Contact if helpful. Alternatively, she can consider appointing a different trusted person. She can submit a new appointment request at any time via the Add or Remove Trusted Contact e-form using her Singpass.",
    "wrong1": "No, the appointer is not notified when a request is declined. The appointment simply expires silently. Your aunt will only know if she checks her Account settings and sees that you are not listed as her Trusted Contact.",
    "wrong2": "Declining a Trusted Contact request will result in your aunt's account being flagged for a security review. CPF Board will contact her within 5 working days to verify her account details and suggest alternative protection options.",
    "wrong3": "When you decline a request, you are automatically unable to be appointed as a Trusted Contact by anyone for 12 months. Your aunt will be informed of this restriction and advised to choose a different person.",
    "added": "Your aunt can submit a new appointment request to a different person via the Add or Remove Trusted Contact e-form at any time.",
    "explain": "The correct response accurately states: the appointer IS notified of a declined request via email, SMS and push notifications; the appointer can consider a different person and submit a new request.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Harry Ng",
      "age": 50,
      "bg": "CPF member, wants to appoint a third Trusted Contact",
      "emoji": "👥",
      "salutation": "Mr",
      "lastname": "Ng"
    },
    "subject": "Can I appoint more than two Trusted Contacts?",
    "enquiry": "Dear CPF Board,\n\nI currently have two Trusted Contacts — my wife and my son. I would also like to add my daughter as a third Trusted Contact as she is very tech-savvy.\n\nIs it possible to have three Trusted Contacts?\n\nThank you,\nHarry",
    "date": "13 August 2026",
    "correct": "The maximum number of Trusted Contacts you can appoint is two. To add your daughter, you would first need to remove one of your existing Trusted Contacts — either your wife or your son. The two-person limit is designed to provide optimal protection against scams while keeping your CPF transaction information within a close, trusted circle. We encourage you to carefully consider who is best placed to help monitor your account before making any changes.",
    "wrong1": "You can appoint up to three Trusted Contacts. Please go to your Account settings and select 'Add Trusted Contact' to add your daughter. The system will allow you to add a third contact as long as all three meet the eligibility criteria.",
    "wrong2": "You can apply for an exception to the two-Trusted-Contact limit if you have a valid reason. Please write to CPF Board via Write to Us explaining your circumstances. Exceptions are reviewed on a case-by-case basis.",
    "wrong3": "There is no fixed limit on the number of Trusted Contacts. The two-contact display in your Account settings is just the default view. You can appoint additional contacts by submitting the Add Trusted Contact e-form for each person.",
    "added": "Please consider carefully which two people are best placed to help protect your CPF account before making any changes.",
    "explain": "The correct response accurately states: maximum of two Trusted Contacts; to add a new one when at the limit, an existing one must be removed first.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Sandra Lim",
      "age": 40,
      "bg": "CPF member, wants to change pending TC request",
      "emoji": "🔄",
      "salutation": "Ms",
      "lastname": "Lim"
    },
    "subject": "How to change a pending Trusted Contact appointment request",
    "enquiry": "Dear CPF Board,\n\nI submitted a Trusted Contact appointment request for my neighbour but I have changed my mind and want to appoint my sister instead. The request has not been accepted yet.\n\nHow do I change the request?\n\nThank you,\nSandra",
    "date": "15 August 2026",
    "correct": "As your neighbour has not yet accepted the request, you can withdraw the pending appointment request and submit a new one for your sister. To withdraw the request, go to your Activities page, locate the pending 'Add or remove Trusted Contact' transaction with the 'In-Progress' status, and click into it to withdraw. Once withdrawn, you can submit a new appointment request for your sister via the Add or Remove Trusted Contact e-form.",
    "wrong1": "You cannot change a pending appointment request once submitted. You will need to wait for your neighbour to either accept or decline the request. If they decline, you can then submit a new request for your sister.",
    "wrong2": "To change the appointee, please call our hotline with your NRIC and the NRIC of both the original and new appointee. Our staff can update the request on your behalf within 3 working days.",
    "wrong3": "Pending requests can be changed by logging in to your Account settings and selecting 'Edit Pending Request'. Enter your sister's details and the system will automatically cancel the previous request and send a new one to your sister.",
    "added": "Once you have withdrawn the original request, you can immediately submit a new one for your sister via the Add or Remove Trusted Contact e-form.",
    "explain": "The correct response accurately states: withdraw via the Activities page by locating the 'In-Progress' transaction; then submit a new request for the preferred appointee.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Ang Bee Hoon",
      "age": 69,
      "bg": "retiree, newly opened bank account",
      "emoji": "🏦",
      "salutation": "Mdm",
      "lastname": "Ang"
    },
    "subject": "Switching Silver Support payment from GovCash to bank account",
    "enquiry": "Dear CPF Board,\n\nI have just opened a DBS bank account. I prefer to receive my Silver Support directly into my bank account instead of having to go to the ATM to collect GovCash.\n\nHow do I switch from GovCash to bank transfer?\n\nThank you,\nBee Hoon",
    "date": "19 August 2026",
    "correct": "Congratulations on opening your bank account. The best way to receive your Silver Support directly into your bank account is to link your NRIC to PayNow with your DBS account. Once you have done this, your Silver Support will be credited directly to your PayNow-NRIC-linked bank account. You can also update your bank account details directly via the Silver Support e-services with your Singpass. Please note that any update will take effect from the next quarter of Silver Support, if you continue to be eligible.",
    "wrong1": "To switch from GovCash to bank transfer, please visit any CPF Service Centre with your DBS bank passbook and NRIC. Our staff will update your payment method on the spot and the change will take effect immediately.",
    "wrong2": "You can only switch payment modes by writing to CPF Board via Write to Us. Please include your NRIC, bank account number, and bank name. The change will be processed within 5 working days.",
    "wrong3": "GovCash is the default payment mode for all Silver Support recipients and cannot be changed unless you own a POSB, OCBC, or UOB account. DBS accounts are not linked to the government payment system.",
    "added": "We encourage you to register for PayNow-NRIC with your DBS account to receive your Silver Support faster and more conveniently.",
    "explain": "The correct response accurately states: link NRIC to PayNow via DBS to receive Silver Support by bank credit; can also update bank details via SSS e-services with Singpass; change takes effect from the next quarter.",
    "categories": ["SSS"]
  },
  {
    "persona": {
      "name": "Mr Freddy Koh",
      "age": 68,
      "bg": "retiree, wants to pay at shops using GovCash",
      "emoji": "📲",
      "salutation": "Mr",
      "lastname": "Koh"
    },
    "subject": "Using GovCash to pay for purchases at shops",
    "enquiry": "Dear CPF Board,\n\nI have some GovCash balance on my LifeSG app. Can I use it to pay for groceries at the supermarket?\n\nHow do I know which shops I can use it at?\n\nThank you,\nFreddy",
    "date": "21 August 2026",
    "correct": "Yes, you can use your GovCash balance to make purchases at merchants that accept PayNow or NETS QR code payments via the LifeSG app. When paying, open the LifeSG app and use the Scan and Pay function to scan the merchant's SG QR label. You can identify eligible merchants by looking for the PayNow or NETS logo on the SG QR label displayed at the shop. Please note that once you confirm a payment, it cannot be cancelled — your GovCash balance will be deducted immediately upon successful payment.",
    "wrong1": "GovCash can only be withdrawn as physical cash at OCBC ATMs. It cannot be used directly for purchases at shops. If you wish to pay at merchants, please withdraw the cash from the ATM first.",
    "wrong2": "You can use GovCash at all merchants in Singapore that display the GovCash logo. Simply open the LifeSG app, select 'Pay with GovCash', and scan the cashier's QR code.",
    "wrong3": "GovCash can be used at any shop that accepts NETS payments at the payment terminal. You will need your 8-digit Payment Reference Number from your GovCash notification letter to complete the payment.",
    "added": "Look out for the PayNow or NETS logo on the SG QR label displayed by merchants to know where you can use your GovCash via the LifeSG app.",
    "explain": "The correct response accurately states: GovCash can be used at merchants accepting PayNow/NETS QR via LifeSG Scan and Pay; look for PayNow/NETS logo on SG QR label; payments are immediate and cannot be cancelled.",
    "categories": ["SSS"]
  },
  {
    "persona": {
      "name": "Mr Jason Yeo",
      "age": 33,
      "bg": "software engineer",
      "emoji": "💻",
      "salutation": "Mr",
      "lastname": "Yeo"
    },
    "subject": "CPF contributions not received on time — what to do",
    "enquiry": "Dear CPF Board,\n\nI noticed that my CPF contributions for last month have not appeared in my account even though it is already the 20th of this month. My salary was paid on the last day of last month.\n\nWhen should I expect the contributions and what should I do?\n\nThank you,\nJason",
    "date": "02 September 2026",
    "correct": "Your employer is required to pay CPF contributions for each month's wages by the 14th of the following month (or the next working day if the 14th falls on a Saturday, Sunday or Public Holiday). Employers who pay after the 14th may incur late payment interest of 1.5% per month. Once CPF Board receives the payment, contributions are credited to your CPF accounts within three working days. As today is the 20th, the contribution should have already been received by CPF Board. You should first check directly with your employer to ask when they made the payment. If you do not receive a satisfactory response, you can lodge a report with CPF Board.",
    "wrong1": "CPF contributions from your employer take up to 30 days to be credited after your salary is paid. It is normal not to see contributions by the 20th. No action is required at this stage — please check again at the end of the month.",
    "wrong2": "CPF Board processes contributions in batches at the end of each month. Your employer's contribution would have been submitted on time but will only be visible in your account from the 1st of next month.",
    "wrong3": "If your employer has not made the contribution by the 20th, CPF Board would already have taken enforcement action and the contribution will be credited automatically. You do not need to do anything.",
    "added": "If your employer does not provide a satisfactory explanation, you may lodge a report with CPF Board.",
    "explain": "The correct response accurately states: employer due date is 14th of following month; late payment interest is 1.5% per month; CPF credits within 3 working days of receipt; member should check with employer first, then lodge a report if needed.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Goh Lay Teng",
      "age": 42,
      "bg": "executive, needs CPF records for bank loan",
      "emoji": "📋",
      "salutation": "Ms",
      "lastname": "Goh"
    },
    "subject": "How to access CPF transaction history beyond 15 months",
    "enquiry": "Dear CPF Board,\n\nI need to check my CPF contribution records going back 3 years for a bank loan application. I can only see 15 months of records in my transaction history.\n\nHow can I access records older than 15 months?\n\nThank you,\nLay Teng",
    "date": "04 September 2026",
    "correct": "You can access your CPF Transaction History for the latest 15 months via CPF Mobile or my cpf digital services. For records beyond 15 months, you can view your CPF Yearly Statement of Account (YSOA), which is available for the past 10 years via my cpf digital services. Log in with your Singpass and navigate to the YSOA section to view, download, and save the PDF for past years. We strongly encourage you to download and save your statements regularly as CPF Board does not retrieve statements beyond 10 years.",
    "wrong1": "CPF records beyond 15 months are archived and are not accessible online. To request older records, please write to CPF Board via Write to Us specifying the years required. There is a $10 administrative fee per year of records requested, payable at any CPF Service Centre.",
    "wrong2": "Records beyond 15 months can only be accessed by visiting a CPF Service Centre in person with your NRIC. Our staff will print the required statements for you. Please make an appointment in advance as there is no online option for records older than 15 months.",
    "wrong3": "All CPF transaction records are only retained for 15 months before being permanently deleted. For your bank loan application, please ask the bank to accept your 15-month transaction history as an alternative.",
    "added": "We recommend downloading and saving your YSOA each year to always have a copy for your own records.",
    "explain": "The correct response accurately states: 15 months available in Transaction History; Yearly Statement of Account available for up to 10 years via my cpf digital services; download recommended as statements beyond 10 years cannot be retrieved.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Priya Govindasamy",
      "age": 29,
      "bg": "HR officer, received suspicious CPF email",
      "emoji": "📧",
      "salutation": "Ms",
      "lastname": "Priya"
    },
    "subject": "Received monthly CPF transaction notification email — is it legitimate?",
    "enquiry": "Dear CPF Board,\n\nI received an email with the subject 'Your CPF transactions for August 2026'. The email has a link for me to view my transactions. The sender ends with @e.cpf.gov.sg.\n\nIs this a legitimate email? Should I click the link?\n\nThank you,\nPriya",
    "date": "06 September 2026",
    "correct": "This is a legitimate email from CPF Board. CPF Board sends monthly notifications to members with registered email addresses, reminding them to review their transactions. To verify: check that the sender's email address ends with @e.cpf.gov.sg (which yours does), and that any hyperlinks end with a domain ending in 'gov.sg'. As both checks pass, the email is genuine. As a general online security best practice, we also recommend typing cpf.gov.sg directly into your browser to log in and review your transactions, rather than clicking the email link.",
    "wrong1": "CPF Board does not send monthly transaction notifications by email. This email is likely a phishing scam. Please do not click any links, delete the email immediately, and report the sender to the Cyber Security Agency.",
    "wrong2": "Monthly transaction notifications are only sent via SMS, not email. If you receive an email claiming to be from CPF Board about transactions, it is not genuine. Please forward it to our anti-scam team via Write to Us.",
    "wrong3": "While the sender address looks legitimate, phishing emails can easily spoof .gov.sg domains. CPF Board recommends never clicking any links in emails. You should call our hotline to confirm this email was sent before doing anything.",
    "added": "As a best practice, always log in to my cpf digital services directly by typing the URL into your browser rather than clicking email links.",
    "explain": "The correct response accurately states: monthly email notifications are legitimate and sent to registered members; verify by checking sender ends with @e.cpf.gov.sg and links end with gov.sg; logging in directly is good practice.",
    "categories": ["Accounts Management", "Digital Services"]
  },
  {
    "persona": {
      "name": "Mr Bernard Ng",
      "age": 38,
      "bg": "employee, noticed wrong CPF contribution",
      "emoji": "🔍",
      "salutation": "Mr",
      "lastname": "Ng"
    },
    "subject": "I think my CPF statement has an error",
    "enquiry": "Dear CPF Board,\n\nI reviewed my CPF transaction history and noticed that the employer contribution amount last month seems lower than it should be based on my salary.\n\nWhat should I do?\n\nThank you,\nBernard",
    "date": "08 September 2026",
    "correct": "Please notify CPF Board immediately via Write to Us if you believe the information in your CPF statement is incorrect. It is your responsibility to carefully review your CPF statements. Please provide as much detail as possible, including the specific month in question, the contribution amount shown, and the expected amount based on your salary. CPF Board will investigate the discrepancy. In the meantime, you may also wish to check with your employer's HR or payroll department to verify what was submitted.",
    "wrong1": "CPF Board's records are system-generated and highly accurate. A discrepancy is most likely due to a misunderstanding of the contribution rates or salary components. Please review the CPF contribution rate table and recalculate before raising a concern.",
    "wrong2": "If the contribution amount is wrong, your employer's HR department is solely responsible for rectifying this. CPF Board does not accept individual member enquiries about contribution accuracy — please escalate internally with your company first.",
    "wrong3": "Any errors in CPF contributions are automatically flagged by our system within 30 days. If an error was present, you would have received a correction notice already. As you have not received such a notice, the contribution amount is likely correct.",
    "added": "Please notify us via Write to Us as soon as possible if you believe your CPF statement is incorrect.",
    "explain": "The correct response accurately states: notify CPF Board via Write to Us immediately; it is the member's responsibility to review statements; member can also verify with employer payroll.",
    "categories": ["Accounts Management"]
  },
  {
    "persona": {
      "name": "Ms Audrey Lim",
      "age": 51,
      "bg": "finance manager, Singpass contact update",
      "emoji": "🏢",
      "salutation": "Ms",
      "lastname": "Lim"
    },
    "subject": "Updated mobile number on Singpass but CPF still shows old number",
    "enquiry": "Dear CPF Board,\n\nI updated my mobile number on my Singpass account last week. However, I notice my CPF account still shows my old mobile number.\n\nDoes updating Singpass automatically update CPF too?\n\nThank you,\nAudrey",
    "date": "10 September 2026",
    "correct": "Updating your contact details on Singpass does not automatically update them with CPF Board. You need to separately update your mobile number and/or email address via my cpf digital services — Account settings — using your Singpass. An SMS or email One-Time Password (OTP) will be sent to your new mobile or email address for verification before the changes can be submitted. Please note that any changes to your contact details are subject to a 12-hour cooling period and you may also be required to complete enhanced authentication as an added security measure.",
    "wrong1": "Your Singpass and CPF contact details are linked and should sync automatically within 48 hours of updating Singpass. If it has been more than 48 hours and your CPF account still shows the old number, please contact our technical helpdesk.",
    "wrong2": "CPF Board uses your Singpass contact details for all notifications. Since you have already updated your mobile number on Singpass, your CPF notifications will automatically be sent to your new number without any further action.",
    "wrong3": "To update your mobile number with CPF Board, you must visit a CPF Service Centre in person with your NRIC and new mobile number. Online updates are not available for mobile number changes due to security reasons.",
    "added": "Please update your contact details via my cpf digital services — Account settings — to ensure you continue to receive timely notifications.",
    "explain": "The correct response accurately states: Singpass contact updates do NOT auto-sync to CPF Board; member must separately update via my cpf digital services Account settings; OTP verification required; 12-hour cooling period and possible enhanced authentication.",
    "categories": ["Accounts Management", "Member Particulars"]
  },
  {
    "persona": {
      "name": "Mr Thomas Chua",
      "age": 45,
      "bg": "professional, wants to know TC validity",
      "emoji": "📅",
      "salutation": "Mr",
      "lastname": "Chua"
    },
    "subject": "How long does a Trusted Contact appointment last?",
    "enquiry": "Dear CPF Board,\n\nI appointed my daughter as my Trusted Contact about 2 years ago. Does this appointment expire? Do I need to renew it periodically?\n\nAlso, what happens to the arrangement if my daughter passes away before me?\n\nThank you,\nThomas",
    "date": "12 September 2026",
    "correct": "A Trusted Contact appointment does not expire and there is no need to renew it periodically. The appointment remains valid indefinitely until either you or your appointed Trusted Contact terminates the arrangement. CPF Board will also remove Trusted Contact appointments when either party can no longer use the service — for example, upon the demise of either party. If your daughter were to pass away before you, CPF Board would revoke her appointment. You may then appoint a new Trusted Contact if you wish. Your appointment also remains valid even if you lose mental capacity — CPF Board upholds decisions made prior to any loss of mental capacity.",
    "wrong1": "Trusted Contact appointments expire after 3 years and must be renewed. You will receive a reminder email from CPF Board 30 days before the expiry date. If you do not renew, the arrangement will lapse.",
    "wrong2": "Trusted Contact appointments are reviewed annually by CPF Board. As long as your daughter continues to meet the eligibility criteria, the appointment will be automatically renewed and you will receive a confirmation email each year.",
    "wrong3": "Trusted Contact appointments last for the life of the CPF member. However, if the Trusted Contact passes away, the appointment automatically transfers to the next-of-kin of the deceased Trusted Contact.",
    "added": "There is no need to renew your Trusted Contact appointment — it remains valid until either party terminates it or can no longer use the service.",
    "explain": "The correct response accurately states: TC appointments do not expire; valid until terminated by either party or when either party can no longer use the service (e.g. demise); appointment remains valid even if member loses mental capacity.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Joyce Tan",
      "age": 60,
      "bg": "pre-retiree, worried about TC accountability",
      "emoji": "🤝",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "Is my Trusted Contact responsible if they miss a suspicious transaction?",
    "enquiry": "Dear CPF Board,\n\nI have appointed my son as my Trusted Contact. He is quite busy with work.\n\nIf a scammer makes a withdrawal from my account and my son does not notice the notification in time, can he be held responsible?\n\nThank you,\nJoyce",
    "date": "14 September 2026",
    "correct": "Your son cannot be held accountable if he does not alert you to unusual activities in your CPF account. Although he will receive copies of your transaction notifications as your Trusted Contact, you remain responsible for all activities that take place through the use of your Singpass and for managing your CPF account. The Trusted Contact service is an additional layer of protection — it does not transfer responsibility. CPF Board also strongly encourages you to keep your own contact details updated so you receive timely transaction notifications yourself, and to turn on push notifications via CPF Mobile for faster alerts.",
    "wrong1": "Yes, your Trusted Contact can be held legally responsible if they receive a scam notification and fail to act within 24 hours. If you suffer financial loss as a result, you may file a civil claim against your Trusted Contact as outlined in the Trusted Contact Terms and Conditions.",
    "wrong2": "Your Trusted Contact is jointly responsible for monitoring your account. If a scam occurs and your son did not act on the notification, CPF Board will conduct a review and may hold him partially liable for the losses.",
    "wrong3": "CPF Board's position is that Trusted Contacts are volunteers and cannot be held liable. However, you should obtain a written agreement from your son confirming his monitoring responsibilities before appointing him.",
    "added": "You should also keep your own contact details updated and turn on CPF Mobile push notifications to receive your own transaction alerts promptly.",
    "explain": "The correct response accurately states: Trusted Contact cannot be held accountable for failing to alert appointer; the CPF member remains responsible for their own account; TC is an additional layer of protection only.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Paul Seah",
      "age": 55,
      "bg": "senior, comparing TC vs LPA",
      "emoji": "📜",
      "salutation": "Mr",
      "lastname": "Seah"
    },
    "subject": "Difference between Trusted Contact and Lasting Power of Attorney",
    "enquiry": "Dear CPF Board,\n\nI have heard about both the Trusted Contact service and Lasting Power of Attorney. I am not sure how they differ.\n\nCan you explain the key differences so I know which one I should set up?\n\nThank you,\nPaul",
    "date": "16 September 2026",
    "correct": "These are quite different arrangements. A Lasting Power of Attorney (LPA) allows you to appoint a Donee to make decisions on your behalf across personal welfare and/or property and financial matters, should you lose mental capacity in future. A Donee has legal authority to act and decide on your behalf. In contrast, a Trusted Contact is appointed to receive copies of your CPF transaction notifications to help monitor for suspicious activity — they have no legal authority to transact or make decisions on your behalf. They can only observe and alert you. You can set up both: an LPA for decision-making authority if you lose capacity, and a Trusted Contact for day-to-day scam protection while you still have full capacity.",
    "wrong1": "An LPA and a Trusted Contact serve the same purpose and there is no need to set up both. The main difference is that an LPA covers all personal and financial matters, while a Trusted Contact covers only CPF. If you set up an LPA, your Donee automatically has Trusted Contact capabilities for your CPF account.",
    "wrong2": "A Trusted Contact is the CPF equivalent of an LPA. While an LPA covers general assets, a Trusted Contact covers your CPF savings specifically. Your Trusted Contact can transact on your CPF account on your behalf if you are incapacitated.",
    "wrong3": "An LPA is only relevant after you lose mental capacity. A Trusted Contact only applies while you have capacity. Once you lose mental capacity, your Trusted Contact arrangement is automatically converted to a type of limited LPA covering your CPF account.",
    "added": "We recommend setting up both an LPA (through the Office of Public Guardian) and appointing a Trusted Contact for comprehensive protection.",
    "explain": "The correct response accurately distinguishes: LPA gives the Donee legal authority to make decisions; Trusted Contact has NO legal authority — only receives notification copies and can alert the member. Both can be set up concurrently.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Carolyn Wee",
      "age": 62,
      "bg": "caregiver, managing parent with dementia",
      "emoji": "🧑‍🦳",
      "salutation": "Ms",
      "lastname": "Wee"
    },
    "subject": "Does Trusted Contact appointment continue after losing mental capacity?",
    "enquiry": "Dear CPF Board,\n\nMy mother has dementia. Before she lost mental capacity, she had appointed my brother as her Trusted Contact.\n\nNow that she has lost mental capacity, does the Trusted Contact arrangement still apply?\n\nThank you,\nCarolyn",
    "date": "18 September 2026",
    "correct": "Your mother's Trusted Contact appointment remains valid even after she has lost mental capacity. CPF Board upholds decisions made by members prior to any loss of mental capacity, so your brother will continue to receive copies of CPF transaction notifications for your mother's account. If you are her Court-appointed Deputy or Donee under a Lasting Power of Attorney, you may apply to remove existing Trusted Contacts on her behalf if necessary, by writing to CPF Board via Singpass with the relevant supporting documents.",
    "wrong1": "When a CPF member loses mental capacity, all Trusted Contact arrangements are automatically terminated for security reasons. Your brother's appointment would have been revoked when your mother's mental incapacity was recorded.",
    "wrong2": "The Trusted Contact arrangement is suspended when the appointer loses mental capacity. It can be reactivated by a next-of-kin submitting a request to CPF Board with a medical report confirming the member's condition.",
    "wrong3": "When a member loses mental capacity, the Trusted Contact's role is automatically expanded to allow them to view CPF account balances and make withdrawal requests on the member's behalf, subject to CPF Board approval.",
    "added": "If you are a Deputy or Donee for your mother, you may apply to remove existing Trusted Contacts on her behalf if necessary.",
    "explain": "The correct response accurately states: TC appointment remains valid after appointer loses mental capacity; CPF Board upholds pre-incapacity decisions; Deputy or Donee can apply to remove TC on the member's behalf.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Dickson Ong",
      "age": 48,
      "bg": "HR professional, wants to appoint wife as TC",
      "emoji": "✅",
      "salutation": "Mr",
      "lastname": "Ong"
    },
    "subject": "TC eligibility — does my wife need both email and mobile registered?",
    "enquiry": "Dear CPF Board,\n\nI want to appoint my Trusted Contact. My wife is a Singapore Citizen but only has a mobile number registered with CPF Board — not an email address.\n\nCan I appoint her?\n\nThank you,\nDickson",
    "date": "20 September 2026",
    "correct": "Unfortunately, your wife cannot be appointed as your Trusted Contact at this time. A Trusted Contact must: be a CPF member aged 21 and above; be a Singapore Citizen or Permanent Resident with a Singpass account; and have BOTH a Singapore-registered mobile number AND an email address registered with CPF Board. As your wife only has a mobile number registered and not an email address, she does not yet meet the requirements. Please ask her to update her email address with CPF Board via my cpf digital services — Account settings, after which you can proceed to appoint her.",
    "wrong1": "Anyone you trust can be appointed as your Trusted Contact, including foreigners and non-CPF members, as long as they have a valid Singapore mobile number. There are no citizenship or email requirements.",
    "wrong2": "Your wife can be appointed as a Trusted Contact as long as she is a Singapore Citizen with a Singpass account. Only a mobile number is required — an email address is optional for the Trusted Contact notification service.",
    "wrong3": "Your Trusted Contact must be a Singapore Citizen or PR, aged 21 and above, with a Singpass account. A mobile number OR email address with CPF Board is sufficient — both are not required. Your wife can be appointed with just her mobile number.",
    "added": "Please ask your wife to register an email address with CPF Board via Account settings before you submit your Trusted Contact appointment request.",
    "explain": "The correct response accurately states the three TC eligibility criteria: CPF member aged 21+; SC or PR with Singpass; BOTH Singapore-registered mobile number AND email address registered with CPF Board.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Irfanah Jamil",
      "age": 35,
      "bg": "nurse, received TC request from stranger",
      "emoji": "🏥",
      "salutation": "Ms",
      "lastname": "Irfanah"
    },
    "subject": "Received Trusted Contact appointment request from someone I do not know",
    "enquiry": "Dear CPF Board,\n\nI received a notification that someone has submitted a Trusted Contact appointment request asking me to be their Trusted Contact. I have no idea who this person is.\n\nWhat should I do? Should I accept or decline?\n\nThank you,\nIrfanah",
    "date": "22 September 2026",
    "correct": "You should decline the appointment request. The Trusted Contact service is designed to be used by people who genuinely trust each other, such as close family members. As a Trusted Contact, you would receive copies of their CPF transaction notifications whenever they make important account changes. Accepting a request from someone you do not know could lead to privacy and security risks. We recommend declining the request and reporting the suspicious appointment attempt to CPF Board via Write to Us. You have seven days from the date of the notification to respond before the request expires automatically.",
    "wrong1": "You should accept the request as CPF Board has verified the identity of all individuals who submit Trusted Contact requests. There is no risk involved as you can only view notifications — you cannot access or transact on their account.",
    "wrong2": "Please ignore the notification. Trusted Contact appointment requests from unknown parties will be automatically rejected by CPF Board's system after 24 hours. No action is required on your part.",
    "wrong3": "Call the person using the contact details provided in the notification to verify their identity before deciding. If their explanation is reasonable — for example, they are a social worker or caregiver — you may consider accepting.",
    "added": "If you receive a suspicious appointment request from an unknown party, please decline and report it to CPF Board via Write to Us.",
    "explain": "The correct response accurately states: decline the request from an unknown party; TC is intended for trusted persons such as family; report suspicious requests to CPF Board; 7-day window to respond before request expires.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Raymond Foo",
      "age": 52,
      "bg": "retiree, TC not receiving notifications",
      "emoji": "🔕",
      "salutation": "Mr",
      "lastname": "Foo"
    },
    "subject": "My Trusted Contact is not receiving my bank account update notification",
    "enquiry": "Dear CPF Board,\n\nI made a bank account update recently and my son, who is my Trusted Contact, told me he never received any notification.\n\nI checked and he has both a mobile number and email registered with CPF Board.\n\nWhat could be the issue?\n\nThank you,\nRaymond",
    "date": "24 September 2026",
    "correct": "Bank account updates are one of the four transaction types that should trigger a notification to your Trusted Contact. As your son has both a mobile number and email registered with CPF Board and he still did not receive a notification, there may be a technical issue. Please write to CPF Board via Write to Us (using your Singpass) with the following details: your son's name as your Trusted Contact, and the specific type of transaction that did not generate a notification (bank account update) and the date. We will investigate and follow up with you.",
    "wrong1": "Trusted Contact notifications are sent in batches every 24 hours, not in real-time. Your son may receive the notification with a slight delay. Please wait one full business day and check again before raising a concern.",
    "wrong2": "The Trusted Contact service does not cover bank account updates. Notifications are only sent for CPF lump sum withdrawals and contact detail changes. It is therefore expected that your son did not receive a notification for your bank account update.",
    "wrong3": "Your son's email or mobile may have spam filters blocking the notification. Please ask him to check his junk or spam folder. If not found there, he should contact his mobile network provider to check if SMS messages from gov.sg are being blocked.",
    "added": "Please write to CPF Board via Write to Us with the relevant details if your Trusted Contact is not receiving notifications for qualifying transactions.",
    "explain": "The correct response accurately states: bank account update IS one of the four qualifying TC notification types; if TC is still not receiving notifications despite meeting requirements, write to CPF Board via Singpass with TC's name and transaction details.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Lena Koh",
      "age": 40,
      "bg": "accountant, TC removal blocked by error",
      "emoji": "🚫",
      "salutation": "Ms",
      "lastname": "Koh"
    },
    "subject": "Cannot remove Trusted Contact — incomplete contact details error",
    "enquiry": "Dear CPF Board,\n\nI am trying to remove my ex-colleague as my Trusted Contact but I keep getting an error message saying their contact details are incomplete.\n\nI cannot contact my ex-colleague as we have lost touch. What can I do?\n\nThank you,\nLena",
    "date": "26 September 2026",
    "correct": "The error occurs because your ex-colleague does not have both a Singapore-registered mobile number and an email address registered with CPF Board, which is required to process the Trusted Contact removal online. If you cannot reach your ex-colleague to ask them to update their contact details, you may write to CPF Board via Singpass with a screenshot of the error page and your ex-colleague's name and NRIC number, and we will assist with the removal. Alternatively, you can visit any CPF Service Centre in person (by appointment) to have the Trusted Contact appointment removed.",
    "wrong1": "This error indicates that CPF Board has suspended your ex-colleague's account due to inactivity. You will need to wait until the suspension is lifted before you can remove them. This typically takes 3 to 5 working days.",
    "wrong2": "You cannot remove a Trusted Contact online if their contact details are incomplete. Please call our hotline with your NRIC and your ex-colleague's NRIC and we can process the removal on your behalf within 2 working days.",
    "wrong3": "The error is a known technical issue with the removal form. Please clear your browser cache and try again. If the issue persists, uninstall and reinstall the CPF Mobile app and attempt the removal from there.",
    "added": "Please write to CPF Board via Singpass or visit a CPF Service Centre (by appointment) to complete the removal if your ex-colleague cannot update their contact details.",
    "explain": "The correct response accurately states: error occurs when TC's contact details are incomplete; ask TC to update contact details; if not possible, write to CPF Board via Singpass with screenshot and TC details, or visit Service Centre (by appointment).",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Eric Tham",
      "age": 55,
      "bg": "retiree, Trusted Contact has dementia",
      "emoji": "🧠",
      "salutation": "Mr",
      "lastname": "Tham"
    },
    "subject": "My Trusted Contact has lost mental capacity — should I remove them?",
    "enquiry": "Dear CPF Board,\n\nMy brother, who is my Trusted Contact, has recently been diagnosed with dementia and certified to have lost mental capacity.\n\nShould I remove him as my Trusted Contact? How do I do this?\n\nThank you,\nEric",
    "date": "28 September 2026",
    "correct": "Yes, you should remove your brother as your Trusted Contact now that he has lost mental capacity, as he would no longer be able to effectively monitor your CPF transactions. You can remove him via the Add or Remove Trusted Contact e-form on the CPF website, using your Singpass. The removal will take immediate effect upon successful submission. You may then appoint a new Trusted Contact to continue having an additional layer of protection for your CPF account.",
    "wrong1": "When a Trusted Contact loses mental capacity, CPF Board's system automatically detects this and revokes the appointment. You do not need to take any action — a notification will be sent to you confirming the removal.",
    "wrong2": "You cannot remove a Trusted Contact who has lost mental capacity via the standard online form. You will need to visit a CPF Service Centre with a copy of your brother's medical report and your NRIC to process the removal in person.",
    "wrong3": "Your brother's role as your Trusted Contact is not affected by his loss of mental capacity. His legal guardian or next-of-kin can continue to receive the notifications on his behalf and perform the monitoring role for you.",
    "added": "You may submit a new Trusted Contact appointment request via the e-form to appoint someone new to help monitor your CPF account.",
    "explain": "The correct response accurately states: member should revoke TC appointment via the Add or Remove TC e-form when TC loses mental capacity; removal takes immediate effect; member can then appoint a new TC.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Stanley Yap",
      "age": 44,
      "bg": "IT professional, TC of elderly parent with dementia",
      "emoji": "📲",
      "salutation": "Mr",
      "lastname": "Yap"
    },
    "subject": "I am Trusted Contact for my father who has lost mental capacity — does my role continue?",
    "enquiry": "Dear CPF Board,\n\nMy father appointed me as his Trusted Contact before he was diagnosed with dementia. He has since lost mental capacity.\n\nDoes my Trusted Contact role still apply? Can I still receive notifications for his account?\n\nThank you,\nStanley",
    "date": "30 September 2026",
    "correct": "Yes, your Trusted Contact appointment remains valid even though your father has lost mental capacity. CPF Board upholds decisions made by members prior to any loss of mental capacity, so you will continue to receive copies of his CPF transaction notifications. However, if your father has a Court-appointed Deputy or a Donee under a Lasting Power of Attorney, they are legally empowered to manage his affairs and may choose to remove you as his Trusted Contact if they deem it necessary. You will be informed if this happens. If you no longer wish to continue as his Trusted Contact, you can also remove yourself via the relevant e-form.",
    "wrong1": "Your Trusted Contact appointment is automatically cancelled when the appointer loses mental capacity. CPF Board will send you a notification confirming that your role has ended and that you will no longer receive copies of his notifications.",
    "wrong2": "Your appointment continues but in a modified capacity. Once your father loses mental capacity, you are automatically upgraded from Trusted Contact to a limited Power of Attorney holder for CPF matters, allowing you to make withdrawal requests on his behalf.",
    "wrong3": "Your appointment is paused while your father has no mental capacity and will resume if he regains mental capacity. During this period, a CPF-appointed guardian will handle his account monitoring.",
    "added": "If you no longer wish to continue in this role, you may remove yourself via the Remove yourself from your loved ones' Trusted Contact list e-form.",
    "explain": "The correct response accurately states: TC appointment remains valid after appointer loses mental capacity; Deputy or Donee may remove TC if they deem necessary; TC can also remove themselves voluntarily.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Wei Xin",
      "age": 30,
      "bg": "young professional, TC removed without her action",
      "emoji": "📬",
      "salutation": "Ms",
      "lastname": "Wei Xin"
    },
    "subject": "Why was I removed as a Trusted Contact without my action?",
    "enquiry": "Dear CPF Board,\n\nI received a notification saying I have been removed as a Trusted Contact by CPF Board, even though I did not do anything and the person who appointed me did not tell me about this.\n\nWhy was I removed?\n\nThank you,\nWei Xin",
    "date": "02 October 2026",
    "correct": "There are a few reasons CPF Board may revoke a Trusted Contact appointment without the parties initiating it. These include the appointer or the Trusted Contact passing away, or either party becoming ineligible to use the Trusted Contact service (for example, if a CPF account is closed). CPF Board will always notify you when such a removal occurs. If you are concerned and believe the removal may have occurred in error, please write to CPF Board via Write to Us for clarification.",
    "wrong1": "This removal is likely a system error. CPF Board does not proactively remove Trusted Contact appointments without the request of the account holder. Please call our hotline to reinstate your appointment as soon as possible.",
    "wrong2": "You were likely removed because you missed responding to a renewal request within 7 days. Trusted Contact appointments require annual renewal from the Trusted Contact's side. As you did not renew, the appointment was automatically removed.",
    "wrong3": "Your removal may have been triggered by a failed eligibility check. If your mobile number or email address became invalid or unverifiable, CPF Board may have removed your appointment to protect the appointer's account security.",
    "added": "If you believe the removal was in error, please write to CPF Board via Write to Us for clarification.",
    "explain": "The correct response accurately states that CPF Board removes TC appointments when either party can no longer use the service (e.g. upon demise or account closure), and that CPF Board always notifies the affected party.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Calvin Pang",
      "age": 50,
      "bg": "deputy for incapacitated father, wants to remove TC",
      "emoji": "⚖️",
      "salutation": "Mr",
      "lastname": "Pang"
    },
    "subject": "How to remove Trusted Contact on behalf of incapacitated parent",
    "enquiry": "Dear CPF Board,\n\nI am the Court-appointed Deputy for my father who has lost mental capacity. I want to remove an individual as my father's Trusted Contact as I do not trust them.\n\nHow do I do this on his behalf?\n\nThank you,\nCalvin",
    "date": "04 October 2026",
    "correct": "As a Court-appointed Deputy, you can apply to remove an existing Trusted Contact on your father's behalf by writing to CPF Board via Singpass and providing your Deputyship court order as a supporting document. For Donees appointed under a Lasting Power of Attorney, the required documents are the LPA document and a medical report certifying the donor's loss of mental capacity. Please write to us with these documents and we will assist you with the removal.",
    "wrong1": "Deputies and Donees are not permitted to modify Trusted Contact arrangements on behalf of a member, as this is a personal CPF security decision that only the member can make. Please contact the Office of Public Guardian for guidance.",
    "wrong2": "As a Court-appointed Deputy, you can remove your father's Trusted Contact by calling our hotline. Please have your Deputyship court order and NRIC ready. The removal will be processed within 5 working days.",
    "wrong3": "You can remove your father's Trusted Contact by visiting a CPF Service Centre with your Deputyship court order. No prior appointment is needed for deputies. The removal will take effect the same day.",
    "added": "Please write to CPF Board via Singpass with your Deputyship court order to initiate the removal on your father's behalf.",
    "explain": "The correct response accurately states: Court-appointed Deputy needs Deputyship court order; LPA Donee needs LPA document + medical report certifying mental incapacity; both write to CPF Board via Singpass.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Ben Lau",
      "age": 37,
      "bg": "Trusted Contact, worried about suspicious withdrawal",
      "emoji": "🔔",
      "salutation": "Mr",
      "lastname": "Lau"
    },
    "subject": "As a Trusted Contact, what should I do when I receive a withdrawal alert?",
    "enquiry": "Dear CPF Board,\n\nI am my mother's Trusted Contact. I just received a notification that she made a large CPF withdrawal. She is elderly and I am worried she may have been scammed.\n\nWhat should I do right now?\n\nThank you,\nBen",
    "date": "08 October 2026",
    "correct": "Please act immediately. First, contact your mother to confirm whether she made the withdrawal herself. If you are unsure whether she may have fallen for a scam, STOP and CHECK with the 24/7 ScamShield anti-scam helpline at 1799. If your mother has fallen victim to a scam, guide her to take these steps immediately: alert her bank, report to the police at 999 or online at police.gov.sg/iwitness, and contact CPF Board via our official channels. Scammers act quickly — the sooner you intervene, the better the chance of limiting losses.",
    "wrong1": "As a Trusted Contact, your role is only to observe and record suspicious transactions. You should not contact your mother or intervene directly. Send a written report to CPF Board via Write to Us and CPF Board will follow up.",
    "wrong2": "Please wait 24 hours before taking any action, as notifications are sometimes sent for legitimate planned withdrawals. If your mother confirms she did not make the withdrawal after you speak with her, then call the CPF hotline.",
    "wrong3": "You should log in to my cpf digital services using your own Singpass and flag the transaction as suspicious. CPF Board's fraud team will freeze your mother's account within 2 hours of receiving the flag.",
    "added": "Please call the ScamShield anti-scam helpline at 1799 immediately if you suspect your mother has fallen for a scam.",
    "explain": "The correct response accurately states: check with appointer first; if uncertain, STOP and CHECK with ScamShield at 1799; if scam confirmed — alert bank, report to police at 999 or police.gov.sg/iwitness, contact CPF Board.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Grace Loh",
      "age": 35,
      "bg": "Trusted Contact, wants wider notification scope",
      "emoji": "🔍",
      "salutation": "Ms",
      "lastname": "Loh"
    },
    "subject": "Can my Trusted Contact be notified about more types of transactions?",
    "enquiry": "Dear CPF Board,\n\nI am appointed as my mother's Trusted Contact. Currently I only receive notifications for withdrawals, bank account changes, contact details changes, and daily withdrawal limit changes.\n\nCan CPF Board extend the notification service to cover more types of transactions, such as CPF LIFE payouts and investment transactions?\n\nThank you,\nGrace",
    "date": "14 October 2026",
    "correct": "CPF Board has carefully selected the four transaction types for Trusted Contact notifications based on their higher scam risk — CPF lump sum withdrawals for immediate retirement needs, contact details updates, bank account updates, and daily withdrawal limit updates. Extending notifications to all transaction types would risk overwhelming Trusted Contacts with alerts for routine or low-risk transactions, potentially making it harder to spot genuinely suspicious activity. The notification scope is intentionally limited to transactions that directly expose accounts to scam risk. There are no plans at this time to expand the scope to cover other transaction types.",
    "wrong1": "You can customise which transactions trigger notifications to your Trusted Contact via your Account settings. Log in with your Singpass and go to the Trusted Contact section to select additional notification types including CPF LIFE payout updates and investment transactions.",
    "wrong2": "CPF Board is reviewing the scope of Trusted Contact notifications as part of an upcoming enhancement. Additional transaction types including CPF LIFE payouts will be added to the notification list in the next system update.",
    "wrong3": "CPF LIFE payouts and investment transactions are covered by a separate notification service called the Investment Watch Alert. You can enable this via CPF Mobile app settings. Both services can be used together for comprehensive monitoring.",
    "added": "The four covered transaction types represent the highest scam risk — keeping the scope focused helps Trusted Contacts concentrate on what matters most.",
    "explain": "The correct response accurately states: only critical high-risk transactions are covered to avoid overwhelming TCs; no customisation of notification types available; no plans to expand scope.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Mr Fabian Quek",
      "age": 48,
      "bg": "CPF member, TC appointment request was withdrawn",
      "emoji": "↩️",
      "salutation": "Mr",
      "lastname": "Quek"
    },
    "subject": "Received notification that my Trusted Contact appointment request was withdrawn",
    "enquiry": "Dear CPF Board,\n\nI received a notification that my pending Trusted Contact appointment request has been withdrawn. I did not withdraw it myself.\n\nWhy did this happen and what should I do?\n\nThank you,\nFabian",
    "date": "16 October 2026",
    "correct": "The notification means that the person you submitted a Trusted Contact appointment request to has withdrawn from the appointment process before accepting. This can happen if the appointee chose to withdraw the pending request from their end. There is nothing wrong with your CPF account. If you would still like this person to be your Trusted Contact, we suggest reaching out to them personally to discuss the role. You may then submit a new appointment request when you are both ready. If you wish to appoint a different person instead, you can also do so via the Add or Remove Trusted Contact e-form.",
    "wrong1": "A withdrawal notification indicates a system error. CPF Board may have automatically withdrawn the request due to a security flag on the appointee's account. Please call our hotline to check if any issues have been flagged.",
    "wrong2": "This notification means the person you appointed has declined your request. You should note that declined requests stay on CPF's record. If you resubmit a request for the same person three times, they will be permanently blocked from being your Trusted Contact.",
    "wrong3": "The request was likely withdrawn because the appointee's contact details became incomplete after you submitted the request. CPF Board automatically withdraws requests when the appointee's contact details cannot be verified.",
    "added": "If you still wish to appoint this person, please discuss the role with them personally before resubmitting the appointment request.",
    "explain": "The correct response accurately states: the appointee withdrew the request; nothing wrong with the appointer's account; appointer can discuss with the person and resubmit, or appoint someone else.",
    "categories": ["Trusted Contacts"]
  },
  {
    "persona": {
      "name": "Ms Joanna Ng",
      "age": 52,
      "bg": "CPF member, wants to book Service Centre appointment in advance",
      "emoji": "📆",
      "salutation": "Ms",
      "lastname": "Ng"
    },
    "subject": "Why can I only book a Service Centre appointment 2 weeks ahead?",
    "enquiry": "Dear CPF Board,\n\nI tried to book an appointment to visit the CPF Service Centre but I can only book up to 2 weeks in advance. I need an appointment in about 3 weeks' time.\n\nWhy is there a 2-week limit?\n\nThank you,\nJoanna",
    "date": "18 October 2026",
    "correct": "CPF Board limits appointment bookings to 2 weeks in advance based on our experience that this window meets the needs of most members. Allowing bookings too far in advance has been found to lead to more missed appointments when members' circumstances or needs change. A 2-week window also helps ensure our Customer Service Officers are more accessible to members who need timely assistance. As your appointment is approximately 3 weeks away, you may wish to check back in about a week's time to book your appointment once it falls within the 2-week window.",
    "wrong1": "You can request an exception to the 2-week booking limit by calling the CPF hotline. Exceptions are approved for medical or urgent financial matters. Please have your NRIC and reason for the appointment ready.",
    "wrong2": "The 2-week limit is a technical constraint on our booking system and will be extended in a future update. Currently, if you need an appointment beyond 2 weeks, please visit us on a walk-in basis at any Service Centre.",
    "wrong3": "You can book appointments up to 4 weeks in advance if you are a member aged 55 and above, or if you have a disability. Please indicate your eligibility when making the booking and the extended window will be available.",
    "added": "Please check back in about a week's time to book your appointment once it falls within the 2-week booking window.",
    "explain": "The correct response accurately states: 2-week limit is based on experience reducing missed appointments and improving officer accessibility; no exception available; member should check back when appointment date falls within the 2-week window.",
    "categories": ["Digital Services"]
  },
  {
    "persona": {
      "name": "Mr Edmund Kwan",
      "age": 57,
      "bg": "renounced Singapore citizen",
      "emoji": "🌏",
      "salutation": "Mr",
      "lastname": "Kwan"
    },
    "subject": "How to access CPF statement after renouncing Singapore citizenship",
    "enquiry": "Dear CPF Board,\n\nI recently renounced my Singapore Citizenship and have returned my NRIC. I now understand I can no longer use Singpass.\n\nHow can I access my CPF statement and check my remaining CPF balance?\n\nThank you,\nEdmund",
    "date": "20 October 2026",
    "correct": "As you have renounced your Singapore Citizenship and can no longer use Singpass, you may write to CPF Board for CPF-related assistance including access to your CPF statement. Please contact the Singpass Helpdesk directly to find out which groups of users remain eligible to apply for a Singpass account, as the eligibility criteria may allow some former citizens to retain access under certain conditions.",
    "wrong1": "You can continue to access your CPF statement using your old NRIC number on the CPF website, even after renouncing citizenship. Your Singpass account remains active for 1 year after renunciation as a transition period.",
    "wrong2": "After renouncing citizenship, CPF Board will automatically send you an annual printed statement to your overseas address. There is no need to contact us — the statement will arrive within 6 months of the end of each calendar year.",
    "wrong3": "You can access your CPF statement by applying for a Foreign Individual Access Pass at the Singapore Embassy in your country. This pass allows former Singapore Citizens to access selected government digital services for up to 5 years after renunciation.",
    "added": "Please write to CPF Board for CPF-related assistance, and contact the Singpass Helpdesk to find out if you may still be eligible for a Singpass account.",
    "explain": "The correct response accurately states: former citizens who cannot use Singpass can write to CPF Board for assistance; contact Singpass Helpdesk to check eligibility for Singpass under their circumstances.",
    "categories": ["Digital Services"]
  },
  {
    "persona": {
      "name": "Ms Hazel Tan",
      "age": 38,
      "bg": "employer, employee told employer matters not handled at Service Centre",
      "emoji": "🗺️",
      "salutation": "Ms",
      "lastname": "Tan"
    },
    "subject": "Can employer CPF matters be handled at a Service Centre?",
    "enquiry": "Dear CPF Board,\n\nI sent one of my employees to the CPF Service Centre to help resolve a CPF contribution issue for our company. They were told employer matters cannot be handled at the Service Centre.\n\nIs this correct? Where should employer matters be handled?\n\nThank you,\nHazel",
    "date": "22 October 2026",
    "correct": "Yes, that is correct. Services for employer or self-employed matters are not available at CPF Service Centres in person. These matters must be handled through CPF Board's digital services, the CPF hotline, or via Write to Us. CPF Service Centres handle CPF-related assistance for individual members by appointment only. For your company's CPF contribution issue, please use the relevant digital service on the CPF website, call the employer hotline, or submit an enquiry via Write to Us.",
    "wrong1": "CPF Service Centres can handle all employer matters. Your employee may have visited during peak hours when the employer service counter was closed. Please make an appointment specifically for employer matters when visiting.",
    "wrong2": "Employer matters can only be handled at the Jurong East CPF Service Centre, which has a dedicated employer services counter. Other Service Centres serve individual members only. Please direct your employee to the Jurong East branch.",
    "wrong3": "Employer matters are handled at Service Centres by appointment only. Your employee was likely turned away because they arrived without an appointment. Please book an appointment via the CPF website under 'Employer Services'.",
    "added": "For employer matters, please use CPF Board's digital services, the hotline, or Write to Us.",
    "explain": "The correct response accurately states: employer and self-employed matters are NOT handled at CPF Service Centres in person; these must go through digital services, hotline, or Write to Us. Service Centres handle individual member matters only.",
    "categories": ["Digital Services"]
  }

];
