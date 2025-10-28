// Simulated hospital emergency availability data 
const hospitalData = [
  {
    name: "City Care Hospital",
    location: "Jabalpur, MP",
    beds: 5,
    blood: "A+, O+, B- available",
    ambulance: "9823456789",
    doctor: "Yes – Dr. Meena (Emergency Duty)"
  },
  {
    name: "Global Health Clinic",
    location: "Bhopal, MP",
    beds: 2,
    blood: "O+, AB+ available",
    ambulance: "9812233445",
    doctor: "Yes – Dr. Rajesh (Trauma Specialist)"
  },
  {
    name: "Sanjeevani Hospital",
    location: "Indore, MP",
    beds: 8,
    blood: "All types available",
    ambulance: "9876543210",
    doctor: "Yes – Dr. Kavita (24x7)"
  },
  {
    name: "Apollo Multispeciality",
    location: "Gwalior, MP",
    beds: 0,
    blood: "Limited stock (A+ only)",
    ambulance: "9998887770",
    doctor: "Yes – On-call team available"
  },
  {
    name: "Divine Heart Care Centre",
    location: "Sagar, MP",
    beds: 3,
    blood: "A-, B+, O+ available",
    ambulance: "9867543212",
    doctor: "Yes – Cardiologist on duty"
  },
  {
    name: "LifeLine Hospital",
    location: "Ujjain, MP",
    beds: 10,
    blood: "All groups available",
    ambulance: "9845678901",
    doctor: "Yes – Dr. Sharma (Emergency Medicine)"
  },
  {
    name: "Sunrise Medical Centre",
    location: "Rewa, MP",
    beds: 4,
    blood: "O+, B+ available",
    ambulance: "9822003344",
    doctor: "Yes – Dr. Reena (Night Duty)"
  },
  {
    name: "Jeevan Jyoti Hospital",
    location: "Katni, MP",
    beds: 1,
    blood: "A+, O- available",
    ambulance: "9810098765",
    doctor: "Yes – Dr. Sameer (Trauma)"
  },
  {
    name: "Prime Care Hospital",
    location: "Bhopal, MP",
    beds: 6,
    blood: "AB-, B+, O+ available",
    ambulance: "9992233445",
    doctor: "Yes – Dr. Priya (Neurosurgeon)"
  },
  {
    name: "Anand Hospital & Research Centre",
    location: "Jabalpur, MP",
    beds: 9,
    blood: "All major types available",
    ambulance: "9887766554",
    doctor: "Yes – ICU & Emergency Staff Ready"
  },
  {
    name: "Rainbow Children Hospital",
    location: "Indore, MP",
    beds: 7,
    blood: "O+, A+ available",
    ambulance: "9834567890",
    doctor: "Yes – Pediatric Emergency Open"
  },
  {
    name: "Holy Cross Medical College",
    location: "Rewa, MP",
    beds: 15,
    blood: "All types available",
    ambulance: "9812310022",
    doctor: "Yes – 24x7 Casualty Team"
  }
];

// Display hospital data dynamically
const hospitalList = document.getElementById("hospitalList");

function displayHospitals() {
  hospitalList.innerHTML = "";
  hospitalData.forEach((hosp) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${hosp.name}</h3>
      <p>📍 <strong>Location:</strong> ${hosp.location}</p>
      <p>🛏️ <strong>Available Beds:</strong> ${hosp.beds}</p>
      <p>🩸 <strong>Blood Availability:</strong> ${hosp.blood}</p>
      <p>🚑 <strong>Ambulance:</strong> ${hosp.ambulance}</p>
      <p>👨‍⚕️ <strong>Doctor on Duty:</strong> ${hosp.doctor}</p>
    `;
    hospitalList.appendChild(card);
  });
}

displayHospitals();

