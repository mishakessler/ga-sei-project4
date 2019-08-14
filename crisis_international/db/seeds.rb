sponsor1 = Sponsor.create({
    sponsor_name: "National Suicide Prevention Lifeline", 
    sponsor_email: "founder@example.com",
    password_digest: "thisismypassworddigest",
    sponsor_tagline: "The premier lifeline in the United States.",
    sponsor_website: "www.example.com",
    sponsor_phone: "1-555-555-5555",
    sponsor_address: "4000 Maple Drive",
    sponsor_city: "New York",
    sponsor_region: "NY",
    sponsor_country: "United States of America",
  })

sponsor2 = Sponsor.create({
    sponsor_name: "Crisis Text Line", 
    sponsor_email: "staff@example.com",
    password_digest: "thisismypassworddigest",
    sponsor_tagline: "The premier textline in the United States.",
    sponsor_website: "www.example.com",
    sponsor_phone: "1-555-555-5555",
    sponsor_address: "4000 Maple Drive",
    sponsor_city: "New York",
    sponsor_region: "NY",
    sponsor_country: "United States of America",
  })

sponsor3 = Sponsor.create({
    sponsor_name: "The Trevor Project", 
    sponsor_email: "hey@example.com",
    password_digest: "thisismypassworddigest",
    sponsor_tagline: "A crisis intervention nonprofit for LGBTQ youth.",
    sponsor_website: "www.example.com",
    sponsor_phone: "1-555-555-5555",
    sponsor_address: "4000 Maple Drive",
    sponsor_city: "New York",
    sponsor_region: "NY",
    sponsor_country: "United States of America",
  })

listing1 = Listing.create({
  listing_name: "National Suicide Prevention Lifeline", 
  listing_tagline: "The premier lifeline in the United States.",
  listing_desc: "The national suicide prevention lifeline is the premier lifeline in the United States, welcoming calls 24/7 for anyone in need.",
  listing_industry: "Suicide Prevention",
  listing_category: "Hotline",
  listing_url_to_img: "https://imgur.com/KwVcfVE.png",
  listing_medium: "Phone",
  listing_language: "English",
  listing_hours: "Open 24/7",
  listing_email: "info@example.com",
  listing_phone: "1-555-555-5555",
  listing_coverage: "United States of America",
})

listing2 = Listing.create({
  listing_name: "The Veterans' Crisis Line", 
  listing_tagline: "The premier lifeline for veterans and active duty military members in the United States.",
  listing_desc: "The Veterans Crisis Line is a hotline provided by the National Suicide Prevention Lifeline with trained military and military family counselors.",
  listing_industry: "Suicide Prevention",
  listing_category: "Hotline",
  listing_url_to_img: "https://imgur.com/KwVcfVE.png",
  listing_population: "Veterans",
  listing_medium: "Phone",
  listing_language: "English",
  listing_hours: "Open 24/7",
  listing_email: "info@example.com",
  listing_phone: "1-555-555-5555p1",
  listing_coverage: "United States of America",
})

listing3 = Listing.create({
  listing_name: "The Crisis Text Line", 
  listing_tagline: "The premier lifeline in the United States.",
  listing_desc: "The national suicide prevention lifeline is the premier lifeline in the United States, welcoming calls 24/7 for anyone in need.",
  listing_industry: "Suicide Prevention",
  listing_category: "Textline",
  listing_url_to_img: "https://imgur.com/M3VqjRZ.png",
  listing_medium: "SMS",
  listing_language: "English",
  listing_hours: "Open 24/7",
  listing_email: "info@example.com",
  listing_sms: "741-741",
  listing_coverage: "United States of America",
})

listing4 = Listing.create({
  listing_name: "The Trevor Lifeline", 
  listing_tagline: "The premier lifeline for LGBTQ youth in the USA.",
  listing_desc: "The trevor project is a crisis hotline for .",
  listing_industry: "Suicide Prevention",
  listing_category: "Hotline",
  listing_url_to_img: "https://imgur.com/KwVcfVE.png",
  listing_medium: "Phone",
  listing_language: "English",
  listing_hours: "Open 24/7",
  listing_email: "info@example.com",
  listing_phone: "855-555-5555",
  listing_coverage: "United States of America",
})

sponsor1.listings.push(listing1, listing2)
sponsor2.listings.push(listing3)
sponsor3.listings.push(listing4)