import roofingImg from "./images/roofing.png";
import windowsImg from "./images/windows.png";
import solarsImg from "./images/solar.png";
import HVACsImg from "./images/Hvacs.png";
import bathroomsImg from "./images/bathroom.png";
import guttersImg from "./images/gutters.png";
import paintingImg from "./images/painting.png";
import plumbingImg from "./images/plumbing.png";
import kitchenImg from "./images/kitchen.png";

export const ourServices = [
  {
    label: "Roofings",
    subText:
      "Get quotes for roof repairs, replacements, or new installations tailored to your home's requirements. Our contractors are ready to assist.",
    img: roofingImg,
  },
  {
    label: "Windows",
    subText:
      "Receive competitive quotes for window replacements or installations based on your preferred materials and specifications.",
    img: windowsImg,
  },
  {
    label: "Solars",
    subText:
      "Whether you're seeking eco-friendly solutions or looking to cut down on energy costs, we offer tailored options to suit your home and budget.",
    img: solarsImg,
  },
  {
    label: "HVACs",
    subText:
      "Find out the cost of HVAC installations or repairs to keep your home comfortable. Get quotes for central air conditioning units and more.",
    img: HVACsImg,
  },
  {
    label: "Bathrooms",
    subText:
      "Whether you're looking to update the aesthetics, improve functionality, or enhance accessibility, we have the expertise to bring your vision to life.",
    img: bathroomsImg,
  },
  {
    label: "Gutters",
    subText:
      "Receive quotes for gutter installations, repairs, or replacements to effectively manage rainwater and protect your home's foundation.",
    img: guttersImg,
  },
  {
    label: "Painting",
    subText:
      "Obtain aedquate quote pricing for interior or exterior painting services to refresh and beautify your living space.",
    img: paintingImg,
  },
  {
    label: "Plumbing",
    subText:
      "Get estimates for plumbing services, whether it's fixing leaks, installing new, or full plumbing. Contact us today to discuss your requirements.",
    img: plumbingImg,
  },
  {
    label: "Kitchen",
    subText:
      "Get detailed quotes for kitchen remodeling projects, including cabinetry, countertops, backsplashes, and appliance installations.",
    img: kitchenImg,
  },
];

export const offersData = [
  {
    title: "Complete Our Survey",
    subTitle:
      "Complete the survey by answering a few questions about your project. We'll match you with the best-fitting services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6667 1.66663C18.4325 1.66663 15 5.09911 15 9.33329C15 13.5674 18.4325 17 22.6667 17C26.9008 17 30.3333 13.5674 30.3333 9.33329C30.3333 5.09911 26.9008 1.66663 22.6667 1.66663ZM25.6672 8.27619C26.1877 8.09181 26.4604 7.52032 26.276 6.99972C26.0916 6.47912 25.5201 6.20656 24.9995 6.39093C24.3567 6.61861 23.7599 7.04508 23.2548 7.48797C22.7395 7.93996 22.2617 8.46095 21.8596 8.94297C21.6647 9.17657 21.4847 9.40451 21.3237 9.61585C21.2061 9.50576 21.0883 9.41281 20.9713 9.33485L20.9644 9.33024C20.7533 9.18941 20.4696 9.00023 20 9.00023C19.4477 9.00023 19 9.44795 19 10.0002C19 10.4999 19.3664 10.9139 19.8452 10.9883C19.85 10.9912 19.8556 10.9947 19.862 10.9989C19.9363 11.0485 20.1649 11.2327 20.4389 11.7808C20.6001 12.1031 20.9223 12.3138 21.2821 12.3323C21.642 12.3507 21.9843 12.1735 22.1776 11.8695C22.3947 11.5619 23.0347 10.6565 23.3953 10.2242C23.7579 9.78952 24.1625 9.35217 24.5736 8.99165C24.9951 8.62205 25.3688 8.38185 25.6672 8.27619Z"
          fill="#1E1C1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7766 1.66775C14.48 3.43507 13 6.21135 13 9.33329C13 14.6721 17.3279 19 22.6667 19C24.4967 19 26.2079 18.4914 27.6667 17.6081V18.7457C27.6667 21.1928 27.6667 23.1369 27.45 24.6597C27.2259 26.2337 26.753 27.5032 25.6994 28.4982C24.6539 29.4856 23.3335 29.922 21.695 30.1301C20.0942 30.3333 18.0455 30.3333 15.4444 30.3333H13.889C11.2878 30.3333 9.23923 30.3333 7.63849 30.1301C5.99985 29.922 4.67955 29.4856 3.63405 28.4982C2.58047 27.5032 2.10749 26.2337 1.88342 24.6597C1.66665 23.1369 1.66666 21.1928 1.66669 18.7457V13.2542C1.66666 10.8072 1.66665 8.86301 1.88342 7.34024C2.10749 5.7662 2.58047 4.49675 3.63405 3.50171C4.67955 2.51429 5.99985 2.07792 7.63849 1.86985C9.23923 1.6666 11.2878 1.66661 13.889 1.66663H15.4444C15.9056 1.66663 16.3496 1.66663 16.7766 1.66775ZM6.66669 17.3333C6.66669 16.5969 7.26365 16 8.00002 16H12.1444C12.8807 16 13.4778 16.5969 13.4778 17.3333C13.4778 18.0697 12.8807 18.6666 12.1444 18.6666H8.00002C7.26365 18.6666 6.66669 18.0697 6.66669 17.3333ZM8.00002 21.3333C7.26365 21.3333 6.66669 21.9302 6.66669 22.6666C6.66669 23.403 7.26365 24 8.00002 24H18.6667C19.4031 24 20 23.403 20 22.6666C20 21.9302 19.4031 21.3333 18.6667 21.3333H8.00002Z"
          fill="#1E1C1C"
        />
      </svg>
    ),
  },

  {
    title: "Discover Skilled Professionals for Your Home Project",
    subTitle: "Receive a competitive estimate from a local contractor and the one out there.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3333 8.33325C11.8856 8.33325 12.3333 8.78097 12.3333 9.33325V11.9999C12.3333 14.025 13.9749 15.6666 16 15.6666C18.025 15.6666 19.6666 14.025 19.6666 11.9999V9.33325C19.6666 8.78097 20.1144 8.33325 20.6666 8.33325C21.2189 8.33325 21.6666 8.78097 21.6666 9.33325V11.9999C21.6666 15.1295 19.1296 17.6666 16 17.6666C12.8704 17.6666 10.3333 15.1295 10.3333 11.9999V9.33325C10.3333 8.78097 10.781 8.33325 11.3333 8.33325Z"
          fill="#1E1C1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 1.66675C16.5523 1.66675 17 2.11447 17 2.66675V6.66675C17 7.21903 16.5523 7.66675 16 7.66675C15.4477 7.66675 15 7.21903 15 6.66675V2.66675C15 2.11447 15.4477 1.66675 16 1.66675Z"
          fill="#1E1C1C"
        />
        <path
          d="M15 3.75471C12.4538 4.20805 10.496 6.36195 10.343 9.00008H10C9.44772 9.00007 9 9.44779 9 10.0001C9 10.5524 9.44771 11.0001 10 11.0001H22C22.5523 11.0001 23 10.5524 23 10.0001C23 9.44779 22.5523 9.00008 22 9.00008H21.6571C21.504 6.36195 19.5463 4.20807 17 3.75471V2.66675C17 2.11447 16.5523 1.66675 16 1.66675C15.4477 1.66675 15 2.11447 15 2.66675V3.75471Z"
          fill="#1E1C1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3333 19H13.3333C13.5985 19 13.8529 19.1053 14.0404 19.2929L16 21.2524L17.9596 19.2929C18.147 19.1053 18.4014 19 18.6666 19H21.6666V30.3333H10.3333V19ZM8.33331 30.3141V19.0192C8.11011 19.0283 7.90174 19.0416 7.70801 19.0613C7.07671 19.1255 6.49089 19.2652 5.96289 19.618C5.56253 19.8855 5.21878 20.2292 4.95126 20.6296C4.59846 21.1576 4.45885 21.7433 4.39463 22.3747C4.33327 22.9779 4.33329 23.8251 4.33331 24.7177C4.33329 25.6104 4.33327 26.3556 4.39463 26.9587C4.45885 27.59 4.59846 28.1757 4.95126 28.7037C5.21878 29.1041 5.56253 29.4479 5.96289 29.7153C6.49089 30.0681 7.07671 30.2079 7.70801 30.272C7.90174 30.2917 8.11011 30.3051 8.33331 30.3141ZM23.6666 30.3141V19.0192C23.8898 19.0283 24.0982 19.0416 24.292 19.0613C24.9233 19.1255 25.509 19.2652 26.037 19.618C26.4374 19.8855 26.7812 20.2292 27.0486 20.6296C27.4014 21.1576 27.5412 21.7433 27.6053 22.3747C27.6666 22.9779 27.6666 23.8249 27.6666 24.7177C27.6666 25.6105 27.6666 26.3555 27.6053 26.9587C27.5412 27.59 27.4014 28.1757 27.0486 28.7037C26.7812 29.1041 26.4374 29.4479 26.037 29.7153C25.509 30.0681 24.9233 30.2079 24.292 30.272C24.0982 30.2917 23.8898 30.3051 23.6666 30.3141Z"
          fill="#1E1C1C"
        />
      </svg>
    ),
  },
  {
    title: "Local Professional in Your Area",
    subTitle:
      "Simply provide your project details, and we'll connect you with top-rated local contractors tailored to your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 1.66675C10.0297 1.66675 5 6.69151 5 12.7826C5 19.0229 10.1434 23.1927 14.4361 25.9031L14.4533 25.9141L14.4711 25.9242C14.9363 26.1921 15.4632 26.3334 16 26.3334C16.5368 26.3334 17.0637 26.1921 17.5289 25.9242L17.5444 25.9154L17.5595 25.9059C21.8691 23.2162 27 19.0018 27 12.7826C27 6.69151 21.9704 1.66675 16 1.66675ZM16 8.00008C13.4227 8.00008 11.3333 10.0894 11.3333 12.6667C11.3333 15.2441 13.4227 17.3334 16 17.3334C18.5773 17.3334 20.6667 15.2441 20.6667 12.6667C20.6667 10.0894 18.5773 8.00008 16 8.00008Z"
          fill="#1E1C1C"
        />
        <path
          d="M7.64059 23.656C8.01476 24.2903 7.80393 25.1077 7.16971 25.4819C6.96063 25.6053 6.82572 25.7115 6.7432 25.7908C6.78813 25.8335 6.85271 25.8879 6.94456 25.9532C7.31857 26.2193 7.94619 26.5137 8.84176 26.7832C10.616 27.3172 13.1472 27.6669 16 27.6669C18.8528 27.6669 21.384 27.3172 23.1583 26.7832C24.0539 26.5137 24.6815 26.2193 25.0555 25.9532C25.1473 25.8879 25.2119 25.8335 25.2568 25.7908C25.1743 25.7115 25.0393 25.6053 24.8303 25.4819C24.196 25.1077 23.9852 24.2903 24.3595 23.656C24.7336 23.0219 25.5511 22.8109 26.1853 23.1852C27.0109 23.6723 28 24.5125 28 25.7901C28 26.8779 27.2729 27.6483 26.6015 28.1261C25.8959 28.628 24.9615 29.0253 23.9267 29.3368C21.8404 29.9647 19.0383 30.3336 16 30.3336C12.9618 30.3336 10.1596 29.9647 8.07329 29.3368C7.03859 29.0253 6.10409 28.628 5.39859 28.1261C4.72701 27.6483 4 26.8779 4 25.7901C4 24.5125 4.98907 23.6723 5.81471 23.1852C6.44893 22.8109 7.26641 23.0219 7.64059 23.656Z"
          fill="#1E1C1C"
        />
      </svg>
    ),
  },
];

export const faqData = [
  {
    id: 2,
    question: "How does the quotation process work?",
    answer: `Our quotation process is simple! Just fill out our online form with details about your project and requirements. We'll connect you with trusted contractors who will provide personalized quotes based on your needs.`,
  },
  {
    id: 3,
    question: "How long does it take to receive quotes?",
    answer: `The time to receive quotes can vary depending on the complexity of your project and the contractors' availability. Generally, you can expect to receive quotes within a few days after submitting your request.`,
  },
  {
    id: 4,
    question: "Are your contractors licensed and insured?",
    answer: `Yes, all contractors in our network are fully licensed and insured to ensure that your project is completed safely and professionally.`,
  },
  {
    id: 5,
    question: "What sets your contractors apart from others in the industry?",
    answer: `Our contractors are carefully vetted to ensure they meet our high standards of professionalism, reliability, and quality workmanship. They are dedicated to providing exceptional service and exceeding your expectations.`,
  },
];

export const privacyData = [
  {
    title: "Information Collection",
    subTitle: `Our service collects both "personally identifiable information" and "non-personally identifiable information" from users.`,
  },
  {
    title: "Personally Identifiable Information",
    subTitle: `When users engage with our service, they may provide personal details such as name, contact information, and financial data. This information is crucial for providing services, facilitating communication, and connecting users with potential Service Providers. Additionally, it may be used for verification and fraud prevention purposes.`,
  },
  {
    title: "Non-Personally Identifiable Information",
    subTitle: `To enhance user experience, our service gathers anonymous data like IP addresses and browsing behavior through cookies or third-party tracking systems. This information is used for statistical analysis and does not link to personally identifiable information.`,
  },
  {
    title: "Sharing of Information",
    subTitle: `Under specific circumstances such as legal obligations or business transactions, the company may share collected information. Users provide consent for communication about products or services, and information may be shared with affiliates or third parties as permitted by law.`,
  },
  {
    title: "Information Security",
    subTitle: `We prioritize the security of user information through various measures to prevent unauthorized access or disclosure. While we take precautions, users are encouraged to take personal data protection measures.`,
  },
  {
    title: "Access to User Information",
    subTitle: `Users can correct or delete inaccuracies in their personal information by contacting the company. Information is retained as necessary for our services and legal obligations.`,
  },
  {
    title: "Third-Party Links",
    subTitle: `Our service may provide links to third-party websites, and users are advised to review their privacy policies. These websites may independently collect data.`,
  },
  {
    title: "Children's Privacy",
    subTitle: `Our service is not intended for children under 13 years old, and we do not knowingly collect personally identifiable information from them.`,
  },
  {
    title: "California Residents",
    subTitle: `Residents of California have specific rights regarding their personal information under the California Consumer Privacy Act (CCPA). These rights include knowing what personal information is collected, opting out of data sales, and requesting deletion of personal information.`,
  },
  {
    title: "Non-Discrimination",
    subTitle: `We do not discriminate against users for exercising their CCPA rights, though financial incentives may be offered to those who opt in.`,
  },
  {
    title: "Additional Information",
    subTitle: `Our service does not respond to "do not track" signals. Personally identifiable information is collected voluntarily, and users can contact the company for privacy-related concerns.`,
  },

  {
    title: "Opt-Out",
    subTitle: `You have the option to opt-out of the arbitration and class action waiver provisions by providing written notice within thirty days of registering on this Service.
    `,
  },
];

export const useOfTermsData = [
  {
    title: "Terms of Service",
    subTitle: `By accessing or using the Homerevampexpert.com website or connection service ("Service"), you agree to abide by the following terms and conditions. Please read these carefully. If you do not agree to these terms and conditions, please refrain from accessing or using this Service. Homerevampexpert.com operates this Service.`,
  },
  {
    title: "Services and Products Offered",
    subTitle: `You acknowledge that Homerevampexpert.com is not a Home contractor and does not issue the products featured on this Service. Any additional services or products displayed on this Service after receiving a quote are the responsibility of the respective vendors and service providers.`,
  },
  {
    title: "Credit Authorization",
    subTitle: `You consent to Homerevampexpert.com obtaining consumer information from reporting agencies to connect you with lenders or service providers. Your information may be shared with them for various purposes, including verification and credit decisions.`,
  },
  {
    title: "Security",
    subTitle: `While we make efforts to protect your personal information, we cannot guarantee against interception or decryption by others. We are not liable for any interception or decryption of personal information.`,
  },
  {
    title: "Cookies",
    subTitle: `This Service uses "cookies" and web server logs to gather information on usage patterns. Cookies store data on user preferences and simplify interactions with the website. None of this information is personally identifiable.`,
  },
  {
    title: "Service Use",
    subTitle: `Our Service is free to use, and we may receive compensation from suppliers for services provided to them. Such compensation may or may not relate to your use of our Service.`,
  },
  {
    title: "Limitation of Liability and Warranties",
    subTitle: `Homerevampexpert.com and its partners disclaim all warranties related to this Service and any associated information, products, or services. Use of this Service is at your own risk, and we are not liable for any damages arising from its use.
    `,
  },
  {
    title: "Indemnity",
    subTitle: `By using this Service, you agree to indemnify Homerevampexpert.com and related companies from any damages or expenses resulting from your use or attempted use of the Service.
    `,
  },
  {
    title: "SMS Marketing",
    subTitle: `By opting into mobile marketing on this Service, you authorize the sending of SMS messages to your mobile device. You may incur message and data rates, and you waive your right to file a claim against us for such contact.
    `,
  },
  {
    title: "Disputes and Resolution",
    subTitle: `Any disputes regarding these Terms of Service or the Service itself will be resolved through arbitration. By using this Service, you waive your right to a jury trial and to participate in class action lawsuits against us.
    `,
  },
  {
    title: "Opt-Out",
    subTitle: `You have the option to opt-out of the arbitration and class action waiver provisions by providing written notice within thirty days of registering on this Service.
    `,
  },
  {
    title: "Acknowledgement",
    subTitle: `By accepting these Terms of Service, you acknowledge and agree to the arbitration process and waiver of certain rights.
    `,
  },
];

export const statesNames = [
  { name: "Alabama", code: "AL" },
  { name: "Alaska", code: "AK" },
  { name: "Arizona", code: "AZ" },
  { name: "Arkansas", code: "AR" },
  { name: "California", code: "CA" },
  { name: "Colorado", code: "CO" },
  { name: "Connecticut", code: "CT" },
  { name: "Delaware", code: "DE" },
  { name: "Florida", code: "FL" },
  { name: "Georgia", code: "GA" },
  { name: "Hawaii", code: "HI" },
  { name: "Idaho", code: "ID" },
  { name: "Illinois", code: "IL" },
  { name: "Indiana", code: "IN" },
  { name: "Iowa", code: "IA" },
  { name: "Kansas", code: "KS" },
  { name: "Kentucky", code: "KY" },
  { name: "Louisiana", code: "LA" },
  { name: "Maine", code: "ME" },
  { name: "Maryland", code: "MD" },
  { name: "Massachusetts", code: "MA" },
  { name: "Michigan", code: "MI" },
  { name: "Minnesota", code: "MN" },
  { name: "Mississippi", code: "MS" },
  { name: "Missouri", code: "MO" },
  { name: "Montana", code: "MT" },
  { name: "Nebraska", code: "NE" },
  { name: "Nevada", code: "NV" },
  { name: "New Hampshire", code: "NH" },
  { name: "New Jersey", code: "NJ" },
  { name: "New Mexico", code: "NM" },
  { name: "New York", code: "NY" },
  { name: "North Carolina", code: "NC" },
  { name: "North Dakota", code: "ND" },
  { name: "Ohio", code: "OH" },
  { name: "Oklahoma", code: "OK" },
  { name: "Oregon", code: "OR" },
  { name: "Pennsylvania", code: "PA" },
  { name: "Rhode Island", code: "RI" },
  { name: "South Carolina", code: "SC" },
  { name: "South Dakota", code: "SD" },
  { name: "Tennessee", code: "TN" },
  { name: "Texas", code: "TX" },
  { name: "Utah", code: "UT" },
  { name: "Vermont", code: "VT" },
  { name: "Virginia", code: "VA" },
  { name: "Washington", code: "WA" },
  { name: "West Virginia", code: "WV" },
  { name: "Wisconsin", code: "WI" },
  { name: "Wyoming", code: "WY" }
];

export const CCPAData = [
  {
    title: "California Privacy Notice",
    subTitle: `Effective Date: May 1, 2024`,
  },
  {
    title: "Your Rights Under the CCPA",
    subTitle: `As a resident of California, you are entitled to additional rights regarding your personal information under the California Consumer Privacy Act of 2018 (CCPA) and other relevant privacy and data protection laws. This notice outlines the categories of personal information we collect about you, the purposes for which the information is collected, the entities with whom we share your information, and the reasons for sharing it.`,
  },
  {
    title: "Categories of Personal Information We Collect",
    subTitle: `We collect information that can identify you, your household, or your device, or that can be reasonably linked to you, your household, or your device ("Personal Information"). Personal Information does not include publicly available information from government records, de-identified or aggregated data, or information protected under laws such as HIPAA and the Gramm-Leach Bliley Act (GLBA).`,
  },
  {
    title: "The categories of Personal Information we collect include:",
    subCat: [
      "- Identifiers: Name, mailing address, telephone number, email address, birthdate, military affiliation, Social Security Number, ZIP code, driver's license, IP address.",
      "- Personal Information Listed in the California Customer Records Statute: Employment details, financial information, and protected classification characteristics.",
      "- Employment Information: Employment status, employer, job title, monthly income, pay period, paycheck type, work phone number, illness/disability.",
      "- Financial Information: Auto status, car/home ownership, bank details, loan amounts and purposes, debt amounts, primary income source.",
      "- Characteristics of Protected Classifications: Age, military affiliation.",
      "- Commercial Information: Debt history, asset information.",
      "- Internet or Other Electronic Network Activity Information: Cookies, domain name, browser type, operating system, usage data, visit frequency, referring affiliate information, referring ad campaign, time on site, source URL, redirect URL.",
      "- Geolocation Data: Information about your location when accessing our website.",
      "- Non-public Education Information: Degree attained, education level, graduation year.",
      "- Inferences Drawn from Other Personal Information: Potential preferences for financial services.",
    ],
  },
  {
    title: "Sources of Personal Information",
    subTitle: `We collect information from:`,
    subCat: [
      "- Directly from you: Through online forms or when accessing our website.",
      "- Third Parties: From aggregators, marketers, lead generators, referring websites, or advertising campaigns.",
    ],
  },
  {
    title: "How We Share Your Personal Information",
    subTitle: `We share information in the above categories as follows:`,
    subCat: [
      "- All Categories: With potential buyers in case of a company sale or merger, or in response to lawful requests by law enforcement.",
      "- Identifiers: With service providers for shipping, name and address verification, email distribution, and promotions management; and with lenders, financial service providers, debt relief providers, aggregators, and marketers (you can opt-out of this sharing).",
      "- Other Personal Information Listed: With service providers as described above (you can opt-out).",
      "- Internet or Other Electronic Network Activity Information: With data analytics providers and service providers for tracking referrals and ad campaigns.",
      "- Professional or Employment-Related Information: With service providers as described above (you can opt-out).",
      "- Non-public Education Information: With service providers as described above (you can opt-out).",
      "- Inferences Drawn from Other Personal Information: With service providers as described above (you can opt-out).",
    ],
  },
  {
    title: "How We Use Your Information",
    subTitle: `For details on how we use your information, refer to "What We Do with the Information We Collect" above. We will not collect additional categories of personal information or use your personal information for significantly different, unrelated, or incompatible purposes without notifying you.`,
  },
  {
    title: "How We Retain and Store Your Personal Information",
    subTitle: `We retain your personal information for as long as necessary to fulfill the purposes for which it was collected and to comply with applicable laws. We employ reasonable security measures to protect your information while it is stored.`,
  },
];

export const CpaRightsData = [
  {
    title: "Requests to Know",
    subTitle: `You have the right to request information about our collection and use of your personal information over the past 12 months. This includes:`,
    subCat: [
      "- Categories of personal information collected about you.",
      "- Sources of the personal information.",
      "- Business or commercial purposes for collecting or selling the personal information.",
      "- Categories of third parties with whom we share the personal information.",
      "- Specific pieces of personal information collected about you.",
      "- If your personal information was sold or disclosed for a business purpose, information on the categories of personal information sold and to whom.",
    ],
  },
  {
    title: "Requests to Delete",
    subTitle: `You have the right to request the deletion of your personal information that we collected and retained, subject to certain exceptions. We may deny your deletion request if retaining the information is necessary to:`,
    subCat: [
      "- Complete the transaction for which it was collected.",
      "- Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity.",
      "- Debug products to identify and repair errors.",
      "- Comply with legal obligations.",
      "- Make other lawful uses of the information compatible with the context in which you provided it.",
    ],
  },
  {
    title: "Non-Discrimination",
    subTitle: `We will not discriminate against you for exercising your CCPA rights. This means we will not:`,
    subCat: [
      "- Deny you goods or services.",
      "- Charge you different prices or rates.",
      "- Provide a different level or quality of goods or services.",
      "- Suggest that you may receive different prices or a different level or quality of goods or services.",
    ],
  },

  {
    title: "Authorized Agent",
    subTitle: `California residents can empower an "authorized agent" to submit requests on their behalf. The agent must have written authorization confirming their authority.`,
  },

  {
    title: "How to Submit Your Request for Information",
    subTitle: `To request access to specific information we have about you, email us with the subject line "CCPA Right to Know" at help@homerevampexpert.com. Provide sufficient information to identify you, including:`,
    subCat: [
      "- Full name",
      "- Physical address",
      "- Phone number",
      "- Email address",
      "- Proof of identity (e.g., driver's license or passport)",
      "- Description of the right you wish to exercise",

      "We will verify your identity and respond within the timeframe required by law.",
    ],
  },

  {
    title: "How to Exercise Your Right to Delete Information",
    subTitle: `To request deletion of your information, email us with the subject line "CCPA Right to Request or Delete Information" at info@homerevampexpert.com. Include:`,
    subCat: [
      "- Full name",
      "- Physical address",
      "- Phone number",
      "- Email address",
      "- Proof of identity (e.g., driver's license or passport)",
      "- Description of the right you wish to exercise",

      "We will verify your identity and respond within the timeframe required by law.",
    ],
  },

  {
    title: "How to Exercise Your Right to Opt-Out of Sale of Your Information",
    subTitle: `If you are 16 years or older, you can opt-out of the sale of your personal information. Email us with the subject line "CCPA Do Not Sell My Information" at info@homerevampexpert.com. Include:`,
    subCat: [
      "- Full name",
      "- Physical address",
      "- Phone number",
      "- Email address",
      "- Proof of identity (e.g., driver's license or passport)",
      "- Description of the right you wish to exercise",

      "We will verify your identity and respond within the timeframe required by law. Note that opting out may affect our ability to provide certain services.",
    ],
  },
  {
    title: "DO NOT SELL MY PERSONAL INFORMATION",
    subTitle: `If you opt-out, we may not be able to help you find a quote or other products or services through our Network Partners. To opt-in, submit the completed form or resubmit your request indicating you want to sell your information to receive the products and services requested`,
  },
];

export const partnerList = [
  "1-800-HANSONS",
  "5 Mile Media",
  "Ad Heavens",
  "Airo Marketing",
  "ALLIED DIGITAL MEDIA INC",
  "Alphatech Resource Holdings s.r.o.",
  "ArcadeYum LLC",
  "BenefitLogix",
  "Canopy Roofing & Restoration, LLC",
  "Claim Your Benefits",
  "Clickport",
  "DaBella",
  "Direct Agents Inc",
  "Drobu Media LLC",
  "DSC Service and Solutions",
  "Dvinci",
  "Educa Products",
  "eLocal",
  "Epic Energy",
  "Global Digital Revenue",
  "Home Improvement Leads",
  "HomeAdvisor",
  "HomeExpert",
  "iLegacy Insurance",
  "Insurance Guide",
  "Ion Solar LLC",
  "Kairos",
  "Laser Marketing",
  "Lead Cactus LLC",
  "Lead Realm LLC",
  "Legacy Residential Solutions LLC",
  "Lets Make a Lead LLC",
  "LL Media, LLC",
  "Localrity",
  "Long Fence and Home",
  "MediaMix 365",
  "Medicare Benefits Review Hotline",
  "Momentum Solar",
  "MV Realty PBC, LLC",
  "My Home Design",
  "NationalHomeProject",
  "perfectalerts",
  "Power Home Remodeling",
  "Premier Home Pros",
  "Purple Dog Marketing LLC",
  "Qualify Medicare",
  "Quebec Inc",
  "QuoteMe Network",
  "Rainmaker Marketing",
  "Rayosun LLC",
  "Renew Home Services, LLC",
  "Reply",
  "Risen Solutions LLC",
  "ROI Direct Marketing",
  "RVNU",
  "Sales Hammer Inc",
  "Sears - Transform Home Pro",
  "Smart Energy Direct",
  "SmartHome Solutions",
  "StoneTapert Insurance Services Inc",
  "SunPro",
  "The Lead House",
  "Transform Home Improvements",
  "Trusted Consumer",
  "US Marketing Group",
  "Windows Plus",
  "WinTek USA, LLC",
  "Wizco Media",
  "Xsqrd",

  "0Titan Solar & Remodeling",
  "1 Solar Solutions",
  "1st US Energy LLC",
  "21st Century Power Solutions",
  "2Four6 Solar",
  "2K Solar",
  "310 Solar LLC",
  "Advanced Solar Power Inc.",
  "Advanced Solar Tech",
  "Advanced Solar Technologies LLC",
  "Advanced Solarone Products",
  "Advancing Solar",
  "Aegis Solar Energy",
  "Aerobine",
  "Aerosun Electric",
  "AET Solar",
  "AFC Comfort Company",
  "AFC Solar",
  "Affordable Energy Concepts",
  "Affordable Energy Solutions",
  "Affordable Solar",
  "Plasmid Media",
  "Plymouth Area Renewable Energy Initiative",
  "Poco Solar",
  "Polar Wire & Renewable Energy Systems",
  "Poncho’s Solar Service",
  "Solar Source of Georgia LLC",
  "Solar Sun World",
  "Solar Systems Design",
  "Solar Systems of Indiana Inc.",
  "Solar Team USA",
  "Terrestrial Solar Survey LLC",
  "Tesla Electrical Solutions",
  "Texas Solar Juice",
  "Texas Solar Outfitters LLC",
  "Texas Wind and Solar Power",
  "TG Electric LLC",
  "Thames Solar Electric",
  "That Solar Guy",
  "The Cortese Energy Company LLC",
  "The energy Mill or new: 4 peaks solar.",
  "Yuma Solar",
  "Zach Sahker and Associates",
  "Zen Electric",
  "Zero Cost Solar",
  "Zigg Electric and Solar",
  "Zip Electric",
  "Zircon Solar",
];
