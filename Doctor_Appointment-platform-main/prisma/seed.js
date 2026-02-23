const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const SAMPLE_DOCTORS = [
  // General Medicine
  {
    clerkUserId: "doctor_general_1",
    email: "dr.sharma@medcare.com",
    name: "Dr. Rajesh Sharma",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RajeshSharma",
    role: "DOCTOR",
    specialty: "General Medicine",
    experience: 15,
    description: "Experienced general physician with expertise in preventive care and chronic disease management. Committed to providing comprehensive healthcare services.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_general_2",
    email: "dr.priya.patel@medcare.com",
    name: "Dr. Priya Patel",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaPatel",
    role: "DOCTOR",
    specialty: "General Medicine",
    experience: 10,
    description: "Dedicated to patient-centered care with focus on family medicine and wellness programs. Fluent in multiple languages.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_general_3",
    email: "dr.kumar@medcare.com",
    name: "Dr. Amit Kumar",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AmitKumar",
    role: "DOCTOR",
    specialty: "General Medicine",
    experience: 12,
    description: "Specializes in adult medicine, health screenings, and preventive care. Known for thorough examinations and patient education.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Cardiology
  {
    clerkUserId: "doctor_cardio_1",
    email: "dr.singh.cardio@medcare.com",
    name: "Dr. Vikram Singh",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=VikramSingh",
    role: "DOCTOR",
    specialty: "Cardiology",
    experience: 18,
    description: "Board-certified cardiologist specializing in interventional cardiology and heart failure management. Published researcher in cardiovascular medicine.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_cardio_2",
    email: "dr.reddy@medcare.com",
    name: "Dr. Anjali Reddy",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnjaliReddy",
    role: "DOCTOR",
    specialty: "Cardiology",
    experience: 14,
    description: "Expert in non-invasive cardiology, echocardiography, and cardiac rehabilitation. Focus on preventive cardiology and lifestyle modifications.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Dermatology
  {
    clerkUserId: "doctor_derm_1",
    email: "dr.mehta@medcare.com",
    name: "Dr. Neha Mehta",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=NehaMehta",
    role: "DOCTOR",
    specialty: "Dermatology",
    experience: 11,
    description: "Specialist in medical and cosmetic dermatology. Expertise in acne treatment, skin cancer screening, and anti-aging procedures.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_derm_2",
    email: "dr.joshi@medcare.com",
    name: "Dr. Rahul Joshi",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RahulJoshi",
    role: "DOCTOR",
    specialty: "Dermatology",
    experience: 9,
    description: "Focus on treating complex skin conditions, eczema, psoriasis, and hair disorders. Uses latest dermatological treatments and therapies.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_derm_3",
    email: "dr.kapoor.derm@medcare.com",
    name: "Dr. Kavita Kapoor",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=KavitaKapoor",
    role: "DOCTOR",
    specialty: "Dermatology",
    experience: 13,
    description: "Experienced in pediatric and adult dermatology. Specializes in allergic skin conditions and cosmetic dermatology procedures.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Endocrinology
  {
    clerkUserId: "doctor_endo_1",
    email: "dr.gupta.endo@medcare.com",
    name: "Dr. Suresh Gupta",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=SureshGupta",
    role: "DOCTOR",
    specialty: "Endocrinology",
    experience: 16,
    description: "Expert in diabetes management, thyroid disorders, and hormonal imbalances. Focuses on comprehensive metabolic health.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_endo_2",
    email: "dr.malhotra@medcare.com",
    name: "Dr. Pooja Malhotra",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=PoojaMalhotra",
    role: "DOCTOR",
    specialty: "Endocrinology",
    experience: 12,
    description: "Specializes in diabetes care, obesity management, and osteoporosis. Advocates for lifestyle medicine and patient empowerment.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Gastroenterology
  {
    clerkUserId: "doctor_gastro_1",
    email: "dr.verma@medcare.com",
    name: "Dr. Arun Verma",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArunVerma",
    role: "DOCTOR",
    specialty: "Gastroenterology",
    experience: 17,
    description: "Expert in digestive disorders, liver diseases, and endoscopic procedures. Specialized in inflammatory bowel disease management.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_gastro_2",
    email: "dr.rao@medcare.com",
    name: "Dr. Lakshmi Rao",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=LakshmiRao",
    role: "DOCTOR",
    specialty: "Gastroenterology",
    experience: 13,
    description: "Focus on gastrointestinal motility disorders, acid reflux, and functional GI disorders. Experienced in therapeutic endoscopy.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Neurology
  {
    clerkUserId: "doctor_neuro_1",
    email: "dr.desai@medcare.com",
    name: "Dr. Karan Desai",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=KaranDesai",
    role: "DOCTOR",
    specialty: "Neurology",
    experience: 15,
    description: "Specialist in treating migraines, epilepsy, and movement disorders. Focus on neurological rehabilitation and patient quality of life.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_neuro_2",
    email: "dr.bose@medcare.com",
    name: "Dr. Sanjana Bose",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=SanjanaBose",
    role: "DOCTOR",
    specialty: "Neurology",
    experience: 11,
    description: "Expert in stroke care, dementia, and neuromuscular disorders. Uses advanced diagnostic techniques for accurate treatment.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Obstetrics & Gynecology
  {
    clerkUserId: "doctor_obgyn_1",
    email: "dr.iyer@medcare.com",
    name: "Dr. Meera Iyer",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=MeeraIyer",
    role: "DOCTOR",
    specialty: "Obstetrics & Gynecology",
    experience: 14,
    description: "Experienced in high-risk pregnancies, gynecological surgeries, and women's health. Compassionate care for all stages of women's lives.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_obgyn_2",
    email: "dr.nair@medcare.com",
    name: "Dr. Deepa Nair",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DeepaNair",
    role: "DOCTOR",
    specialty: "Obstetrics & Gynecology",
    experience: 16,
    description: "Specialist in prenatal care, fertility treatments, and minimally invasive gynecologic surgery. Focus on holistic women's health.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },

  // Oncology
  {
    clerkUserId: "doctor_onco_1",
    email: "dr.banerjee@medcare.com",
    name: "Dr. Arjun Banerjee",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunBanerjee",
    role: "DOCTOR",
    specialty: "Oncology",
    experience: 19,
    description: "Medical oncologist specializing in targeted therapy and immunotherapy. Dedicated to personalized cancer treatment and research.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
  {
    clerkUserId: "doctor_onco_2",
    email: "dr.shah@medcare.com",
    name: "Dr. Ritu Shah",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RituShah",
    role: "DOCTOR",
    specialty: "Oncology",
    experience: 15,
    description: "Expert in breast and gynecologic cancers. Focus on comprehensive cancer care and survivorship programs.",
    verificationStatus: "VERIFIED",
    credits: 0,
  },
];

async function main() {
  console.log("🌱 Starting database seeding...");

  try {
    // Clear existing doctors (optional - comment out if you want to keep existing data)
    console.log("🗑️  Clearing existing doctor data...");
    await prisma.user.deleteMany({
      where: {
        role: "DOCTOR",
        clerkUserId: {
          startsWith: "doctor_",
        },
      },
    });

    // Insert sample doctors
    console.log("👨‍⚕️  Creating sample doctors...");
    for (const doctor of SAMPLE_DOCTORS) {
      await prisma.user.create({
        data: doctor,
      });
      console.log(`✅ Created: ${doctor.name} - ${doctor.specialty}`);
    }

    console.log("\n✨ Database seeding completed successfully!");
    console.log(`📊 Total doctors created: ${SAMPLE_DOCTORS.length}`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
