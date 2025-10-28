// Example Business Alerts / Opportunities
const businessData = [
  {
    title: "Local Grocery Supply Tender",
    location: "Jabalpur, MP",
    type: "Wholesale Contract",
    contact: "9822012345",
    description: "Tender open for monthly grocery supply to local hostel. Requires GST registration."
  },
  {
    title: "Small Cafe Franchise Opportunity",
    location: "Bhopal, MP",
    type: "Franchise Offer",
    contact: "9898012345",
    description: "Fast-growing cafe brand inviting small investors. Low investment, high returns."
  },
  {
    title: "Courier Partner – Logistics Expansion",
    location: "Indore, MP",
    type: "Business Partnership",
    contact: "9812345678",
    description: "Looking for delivery partners in Indore region. Vehicle & license required."
  },
  {
    title: "Construction Material Supplier Needed",
    location: "Gwalior, MP",
    type: "B2B Contract",
    contact: "9754321980",
    description: "Building contractor seeking regular cement and sand supplier for 6-month project."
  },
  {
    title: "Stationery Dealer Collaboration",
    location: "Sagar, MP",
    type: "Business Collaboration",
    contact: "9998877665",
    description: "School supplier wants local partners for stationery and printing items."
  },
  {
    title: "Organic Products Retail Partnership",
    location: "Ujjain, MP",
    type: "Franchise / Reseller",
    contact: "9876677889",
    description: "Distributors needed for organic grocery items. Minimum investment ₹50,000."
  },
  {
    title: "Restaurant Equipment Supplier",
    location: "Bhopal, MP",
    type: "Supply Contract",
    contact: "9823445566",
    description: "Kitchen equipment vendor required for new food outlets opening in MP region."
  },
  {
    title: "Event Management Collaboration",
    location: "Rewa, MP",
    type: "Partnership Opportunity",
    contact: "9912345678",
    description: "Seeking decorators, caterers, and vendors for upcoming wedding events."
  },
  {
    title: "Hardware Tools Distribution Deal",
    location: "Katni, MP",
    type: "Distributor Required",
    contact: "9810022334",
    description: "Join as distributor for reputed hardware brand. Training and marketing support provided."
  },
  {
    title: "Printing Press Tie-Up Offer",
    location: "Jabalpur, MP",
    type: "Joint Venture",
    contact: "9876543221",
    description: "Local press inviting tie-ups for bulk order printing. Profit-sharing basis."
  }
];

// Load business opportunities dynamically
const businessList = document.getElementById("businessList");

function displayBusiness() {
  businessList.innerHTML = "";
  businessData.forEach((biz) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${biz.title}</h3>
      <p>📍 <strong>Location:</strong> ${biz.location}</p>
      <p>🏷️ <strong>Type:</strong> ${biz.type}</p>
      <p>📞 <strong>Contact:</strong> ${biz.contact}</p>
      <p>${biz.description}</p>
    `;
    businessList.appendChild(card);
  });
}

displayBusiness();
