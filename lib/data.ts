export const nav = [
  ["Search", "/search"], ["Neighborhoods", "/neighborhoods"], ["Agents", "/agents"],
  ["Join", "/join"], ["Paperwork", "/paperwork"], ["Resources", "/blog"], ["About", "/about"],
] as const;

export const hoods: Record<string, string[]> = {
  "New York": ["Williamsburg", "Astoria", "Chelsea", "Upper West Side"],
  "New Jersey": ["Hoboken", "Downtown Jersey City", "Weehawken"],
  Connecticut: ["West Hartford", "Hartford's West End", "Glastonbury"],
};

export const posts = [
  { title: "FIND Real Estate Featured in Redfin: What It Really Costs to Live in Harry Styles' Neighborhood", date: "2026-09-02" },
  { title: "Philly Real Estate: A Winter Chill or a Spring Opportunity?", date: "2026-04-01" },
  { title: "The New Year's Key: Why January is a Smart Time to Buy", date: "2025-12-25" },
];

export const testimonials = [
  { name: "Bernadette Hogan", text: "Michael was responsive and patient the whole way through our search." },
  { name: "Tyleen", text: "Shirin knew the neighborhood inside out and made buying as a first-timer feel easy." },
  { name: "Johanna Nieto", text: "Shirin went above and beyond to find us the right place." },
  { name: "mattmpowers", text: "Mathew was incredibly helpful and always available." },
  { name: "Giavridis Theodore", text: "Fay Blau guided us with expertise and care." },
];

export const team = [
  ["Adam Mahfouda", "Founder and CEO"], ["Jules Borbely", "COO"], ["Dina Tango", "CFO"],
  ["Molly Concannon", "Chief of Staff"], ["Edon Mustafa", "CTO"], ["Dimitar Nikolov", "Founding Partner"],
];
