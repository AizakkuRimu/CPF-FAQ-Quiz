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
  }
];
