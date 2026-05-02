import add_icon from "./add_icon.svg";
import admin_logo from "./admin_logo.svg";
import appointment_icon from "./appointment_icon.svg";
import cancel_icon from "./cancel_icon.svg";
import doctor_icon from "./doctor_icon.svg";
import home_icon from "./home_icon.svg";
import people_icon from "./people_icon.svg";
import upload_area from "./upload_area.svg";
import list_icon from "./list_icon.svg";
import tick_icon from "./tick_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import patients_icon from "./patients_icon.svg";

export const assets = {
  add_icon,
  admin_logo,
  appointment_icon,
  cancel_icon,
  doctor_icon,
  upload_area,
  home_icon,
  patients_icon,
  people_icon,
  list_icon,
  tick_icon,
  appointments_icon,
  earning_icon,
};

export const specialityData = [
  {
    speciality: "Gynecologist",
    image: "gyno",
  },
  {
    speciality: "Cardiologist",
    image: "cardiologist",
  },
  {
    speciality: "Dermatologist",
    image: "dermatologist",
  },
  {
    speciality: "Pediatrician",
    image: "pediatrician",
  },
  {
    speciality: "Orthopedic Surgeon",
    image: "orthopedic",
  },
  {
    speciality: "Neurologist",
    image: "neurologist",
  },
  {
    speciality: "Psychiatrist",
    image: "psychiatrist",
  },
  {
    speciality: "Ophthalmologist",
    image: "ophthalmologist",
  },
  {
    speciality: "ENT Specialist",
    image: "ent",
  },
  {
    speciality: "Dentist",
    image: "dentist",
  },
  {
    speciality: "Oncologist",
    image: "oncologist",
  },
  {
    speciality: "Endocrinologist",
    image: "endocrinologist",
  },
  {
    speciality: "Pulmonologist",
    image: "pulmonologist",
  },
  {
    speciality: "Nephrologist",
    image: "nephrologist",
  },
  {
    speciality: "General Physician",
    image: "general_physician",
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr Sumon Shoou",
    image: doc1,
    speciality: "general_physician",
    degree: "MBBS",
    experience: "4 years",
    about:
      "Dr Shoou has a strong commitment to delivering comprehensive medical care.",
    fees: "50",
    adress: {
      line1: "Kolkata 700124",
      line2: "Circle Road WB",
    },
  },
  {
    _id: "doc2",
    name: "Dr Priya Sen",
    image: doc2,
    speciality: "gyno",
    degree: "MD (Gynecology)",
    experience: "7 years",
    about: "Expert in women's health and gynecological care.",
    fees: "60",
    adress: {
      line1: "Delhi 110001",
      line2: "MG Road",
    },
  },
  {
    _id: "doc3",
    name: "Dr Arjun Patel",
    image: doc3,
    speciality: "cardiologist",
    degree: "DM (Cardiology)",
    experience: "10 years",
    about: "Specialist in heart diseases and cardiac care.",
    fees: "100",
    adress: {
      line1: "Mumbai 400001",
      line2: "Marine Drive",
    },
  },
  {
    _id: "doc4",
    name: "Dr Neha Sharma",
    image: doc4,
    speciality: "dermatologist",
    degree: "MD (Dermatology)",
    experience: "5 years",
    about: "Skin specialist with expertise in cosmetic dermatology.",
    fees: "70",
    adress: {
      line1: "Bangalore 560001",
      line2: "Brigade Road",
    },
  },
  {
    _id: "doc5",
    name: "Dr Rakesh Gupta",
    image: doc5,
    speciality: "pediatrician",
    degree: "MD (Pediatrics)",
    experience: "8 years",
    about: "Child specialist with a focus on preventive care.",
    fees: "80",
    adress: {
      line1: "Chennai 600001",
      line2: "Anna Salai",
    },
  },
  {
    _id: "doc6",
    name: "Dr Sneha Roy",
    image: doc6,
    speciality: "orthopedic",
    degree: "MS (Orthopedics)",
    experience: "6 years",
    about: "Expert in bone and joint disorders.",
    fees: "90",
    adress: {
      line1: "Hyderabad 500001",
      line2: "Banjara Hills",
    },
  },
  {
    _id: "doc7",
    name: "Dr Amit Verma",
    image: doc7,
    speciality: "neurologist",
    degree: "DM (Neurology)",
    experience: "12 years",
    about: "Specialist in brain and nervous system disorders.",
    fees: "120",
    adress: {
      line1: "Pune 411001",
      line2: "FC Road",
    },
  },
  {
    _id: "doc8",
    name: "Dr Kavita Joshi",
    image: doc8,
    speciality: "psychiatrist",
    degree: "MD (Psychiatry)",
    experience: "9 years",
    about: "Mental health expert and counselor.",
    fees: "85",
    adress: {
      line1: "Ahmedabad 380001",
      line2: "CG Road",
    },
  },
  {
    _id: "doc9",
    name: "Dr Rajesh Nair",
    image: doc9,
    speciality: "ophthalmologist",
    degree: "MS (Ophthalmology)",
    experience: "11 years",
    about: "Eye specialist with experience in cataract surgery.",
    fees: "95",
    adress: {
      line1: "Kochi 682001",
      line2: "MG Road",
    },
  },
  {
    _id: "doc10",
    name: "Dr Meera Singh",
    image: doc10,
    speciality: "ent",
    degree: "MS (ENT)",
    experience: "7 years",
    about: "ENT specialist for ear, nose, and throat disorders.",
    fees: "75",
    adress: {
      line1: "Lucknow 226001",
      line2: "Hazratganj",
    },
  },
  {
    _id: "doc11",
    name: "Dr Suresh Kumar",
    image: doc11,
    speciality: "dentist",
    degree: "BDS, MDS",
    experience: "6 years",
    about: "Dental surgeon with expertise in cosmetic dentistry.",
    fees: "65",
    adress: {
      line1: "Patna 800001",
      line2: "Bailey Road",
    },
  },
  {
    _id: "doc12",
    name: "Dr Anjali Desai",
    image: doc12,
    speciality: "oncologist",
    degree: "DM (Oncology)",
    experience: "13 years",
    about: "Cancer specialist with a focus on chemotherapy.",
    fees: "150",
    adress: {
      line1: "Indore 452001",
      line2: "MG Road",
    },
  },
  {
    _id: "doc13",
    name: "Dr Manoj Das",
    image: doc13,
    speciality: "endocrinologist",
    degree: "DM (Endocrinology)",
    experience: "8 years",
    about: "Expert in hormone-related disorders.",
    fees: "110",
    adress: {
      line1: "Bhubaneswar 751001",
      line2: "Janpath",
    },
  },
  {
    _id: "doc14",
    name: "Dr Pooja Reddy",
    image: doc14,
    speciality: "pulmonologist",
    degree: "MD (Pulmonology)",
    experience: "7 years",
    about: "Specialist in lung and respiratory diseases.",
    fees: "90",
    adress: {
      line1: "Jaipur 302001",
      line2: "MI Road",
    },
  },
  {
    _id: "doc15",
    name: "Dr Vikram Singh",
    image: doc15,
    speciality: "nephrologist",
    degree: "DM (Nephrology)",
    experience: "10 years",
    about: "Kidney specialist with expertise in dialysis.",
    fees: "130",
    adress: {
      line1: "Surat 395003",
      line2: "Ring Road",
    },
  },
];
