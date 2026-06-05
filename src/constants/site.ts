export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Saffron Table",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+1 (555) 014-2786",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF ?? "tel:+15550142786",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@saffrontable.com",
  emailHref:
    process.env.NEXT_PUBLIC_EMAIL_HREF ?? "mailto:hello@saffrontable.com",
  addressLineOne:
    process.env.NEXT_PUBLIC_ADDRESS_LINE_ONE ?? "128 Ember Street",
  addressLineTwo:
    process.env.NEXT_PUBLIC_ADDRESS_LINE_TWO ?? "Downtown District",
  city: process.env.NEXT_PUBLIC_CITY ?? "New York, NY 10013",
  socialLinks: [
    {
      key: "instagram",
      href:
        process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/",
    },
    {
      key: "maps",
      href: process.env.NEXT_PUBLIC_MAPS_URL ?? "https://maps.google.com/",
    },
  ],
};

export const OPENING_HOURS = [
  { key: "tueThu", hours: "17:30 - 22:30" },
  { key: "friSat", hours: "17:30 - 23:30" },
  { key: "sun", hours: "17:00 - 21:30" },
] as const;

export const GALLERY_IMAGES = [
  { id: "plating", src: "/images/gallery-plating.jpg" },
  { id: "interior", src: "/images/gallery-interior.jpeg" },
  { id: "dessert", src: "/images/gallery-dessert.jpg" },
] as const;
