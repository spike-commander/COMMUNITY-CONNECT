// Simulated real job alerts
const jobData = [
  {
    title: "Construction Site Helper",
    location: "Jabalpur, MP",
    wage: "₹500/day",
    contact: "9876543210",
    description: "Assist in lifting, carrying materials, and basic site work. Meals provided."
  },
  {
    title: "Electrician Assistant",
    location: "Bhopal, MP",
    wage: "₹700/day",
    contact: "9823456789",
    description: "Help senior electrician in wiring, repairing lights and fans. Experience preferred."
  },
  {
    title: "House Painter",
    location: "Indore, MP",
    wage: "₹650/day",
    contact: "9789054321",
    description: "Painting work for residential flats. Paint and tools will be provided."
  },
  {
    title: "Plumber Helper",
    location: "Gwalior, MP",
    wage: "₹550/day",
    contact: "9990012345",
    description: "Assist in pipeline fitting, leakage fixing, and bathroom installation tasks."
  },
  {
    title: "Delivery Partner – Grocery",
    location: "Sagar, MP",
    wage: "₹800/day + incentives",
    contact: "9998887771",
    description: "Deliver grocery items within 3km radius. Must have own two-wheeler and license."
  },
  {
    title: "Warehouse Packer",
    location: "Jabalpur, MP",
    wage: "₹600/day",
    contact: "9922110033",
    description: "Pack and label products in warehouse. Light work, no heavy lifting."
  },
  {
    title: "Security Guard – Night Shift",
    location: "Katni, MP",
    wage: "₹900/day",
    contact: "9876677885",
    description: "Guard duty at residential apartment complex. Must have valid ID proof."
  },
  {
    title: "Cleaner – Office Building",
    location: "Rewa, MP",
    wage: "₹450/day",
    contact: "9812311234",
    description: "Daily cleaning of office area and restrooms. Timing: 8AM – 5PM."
  },
  {
    title: "Factory Worker (Garments)",
    location: "Bhopal, MP",
    wage: "₹700/day",
    contact: "9845237890",
    description: "Operate basic stitching machines. Training available for beginners."
  },
  {
    title: "Carpenter Assistant",
    location: "Ujjain, MP",
    wage: "₹600/day",
    contact: "9988776655",
    description: "Help in furniture assembling and polishing work. Basic experience preferred."
  }
];

// Load jobs dynamically
const jobList = document.getElementById("jobList");

function displayJobs() {
  jobList.innerHTML = "";
  jobData.forEach((job) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>📍 <strong>Location:</strong> ${job.location}</p>
      <p>💰 <strong>Wage:</strong> ${job.wage}</p>
      <p>📞 <strong>Contact:</strong> ${job.contact}</p>
      <p>${job.description}</p>
    `;
    jobList.appendChild(card);
  });
}

displayJobs();
