import applicationsData from "@/data/applications.json";
import brandData from "@/data/brand.json";
import companyData from "@/data/company.json";
import productsData from "@/data/products.json";

export type SpecRow = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  code: string;
  summary: string;
  uses: string[];
  specs: SpecRow[];
};

export type Category = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  lead: string;
  standards: string[];
  heroStat: { value: string; unit: string; label: string };
  products: Product[];
};

export type Application = {
  id: string;
  sector: string;
  title: string;
  location: string;
  system: string;
  summary: string;
  stats: SpecRow[];
};

export const company = companyData;
export const brand = brandData;
export const applications = applicationsData.items as Application[];
export const applicationsIntro = applicationsData.intro;
export const categories = productsData.categories as Category[];

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About" },
  { href: "/brand", label: "Brand" },
] as const;

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function whatsappHref(text?: string): string {
  const message =
    text ??
    "Hello ESTEIO — I need a quotation for scaffolding / structures / modular buildings.";
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
