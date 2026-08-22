export const defaultSiteContent = {
  gallery: {
    title: "Our Mission in Action",
    intro: "Witness the moments of connection, creativity, and care that define our journey. From local workshops to memory book sessions, every image tells a story of dignity restored.",
    sections: [
      {
        id: "restaurant-fundraisers",
        label: "Restaurant Fundraisers",
        intro: "Fundraising events where MMI partners with local restaurants to support memory-care programs.",
        items: [
          { src: "/chipotle1.png", alt: "Restaurant fundraiser event", caption: "Community supporters gathered for a fun evening of giving and connection." },
          { src: "/chipotle2.png", alt: "Restaurant fundraiser table", caption: "MMI volunteers welcomed guests and shared the mission behind the event." },
          { src: "/chipotle3.png", alt: "Restaurant fundraiser setup", caption: "The event brought together families, friends, and local supporters." },
          { src: "/chipotle4.png", alt: "Restaurant fundraiser outreach", caption: "Every donation helped expand the reach of memory-care support." },
          { src: "/chipotle5.png", alt: "Restaurant fundraiser celebration", caption: "The partnership helped raise funds for MMI's work." }
        ]
      },
      {
        id: "neighborhood-walk",
        label: "Neighborhood Walk",
        intro: "A neighborhood walk in which members distributed over 120 flyers to expand MMI's outreach and introduce our mission to more local families.",
        items: [
          { src: "/walk1.jpeg", alt: "Neighborhood walk outreach", caption: "MMI members spread awareness while connecting with neighbors in the community." },
          { src: "/walk2.jpeg", alt: "Neighborhood walk flyers", caption: "Flyers were shared door to door to help more people learn about our work." },
          { src: "/walk3.jpeg", alt: "Neighborhood walk team", caption: "The walk helped grow outreach and strengthen local support for MMI." }
        ]
      },
      {
        id: "memory-book-sessions",
        label: "Memory Book Sessions",
        intro: "Warm and meaningful sessions where families and volunteers create personalized memory books that celebrate a loved one's life story.",
        items: [
          { src: "/house.jpeg", alt: "Memory book session at home", caption: "Families gathered in a comfortable setting to share stories and memories." },
          { src: "/house2.jpeg", alt: "Memory book session in a home environment", caption: "The process made it easy to capture special moments with care." },
          { src: "/present1.png", alt: "Memory book presentation", caption: "A completed book was presented as a meaningful gift to a family." },
          { src: "/book1.jpeg", alt: "Memory book page", caption: "Each page brought together photos, stories, and cherished memories." },
          { src: "/book2.jpeg", alt: "Memory book spread", caption: "The finished book became a lasting keepsake for years to come." },
          { src: "/book3.jpg", alt: "Additional memory book page", caption: "Another page preserving meaningful family milestones." },
          { src: "/board.jpeg", alt: "Memory board activity", caption: "Founders Disha and Anish in San Antonio, TX for a city council meeting to expand MMI's impact." },
          { src: "/house3.jpg", alt: "Home memory session three", caption: "Capturing stories in a calm and familiar home setting." },
          { src: "/house4.jpg", alt: "Home memory session four", caption: "Families and volunteers working together to preserve memories." }
        ]
      },
      {
        id: "chapters-and-kits",
        label: "Chapters and Kits",
        intro: "A growing network of support through local chapters and thoughtfully prepared kits that bring comfort, engagement, and joy to families.",
        items: [
          { src: "/package1.jpeg", alt: "Care package kit", caption: "Each package was assembled with kindness and care for those who need it most." },
          { src: "/package2.jpeg", alt: "Prepared activity kit", caption: "The kits include meaningful materials to spark conversation and connection." },
          { src: "/package3.jpeg", alt: "Community support package", caption: "These resources help support both caregivers and loved ones in everyday moments." }
        ]
      }
    ]
  },
  calendar: {
    title: "Community Calendar",
    intro: "Upcoming workshops, outreach moments, and memory-care events that invite families and volunteers to stay connected.",
    events: [
      { id: "story-circle-2026-08-25", title: "Community Story Circle", date: "2026-08-25", time: "4:00 PM", location: "Virtual", description: "A relaxed session to share memories, stories, and ideas for new memory-book pages.", category: "Workshop" },
      { id: "memory-book-2026-09-02", title: "Memory Book Workshop", date: "2026-09-02", time: "3:30 PM", location: "Local Community Center", description: "Volunteers and families will build personalized memory books together.", category: "Workshop" },
      { id: "volunteer-2026-09-14", title: "Volunteer Training", date: "2026-09-14", time: "5:00 PM", location: "Virtual", description: "Learn how to support outreach, memory books, and family engagement.", category: "Volunteer" },
      { id: "fundraiser-2026-10-03", title: "Restaurant Fundraiser Night", date: "2026-10-03", time: "6:00 PM", location: "Partner Restaurant", description: "An evening of food, community, and fundraising for memory-care support.", category: "Fundraiser" },
      { id: "outreach-2026-10-18", title: "Neighborhood Outreach Walk", date: "2026-10-18", time: "10:00 AM", location: "Neighborhood meeting point", description: "Help distribute flyers and connect more families with the MMI mission.", category: "Outreach" }
    ]
  }
};

export function cloneDefaultSiteContent() {
  return JSON.parse(JSON.stringify(defaultSiteContent));
}