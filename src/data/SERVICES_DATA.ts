type ServiceData = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pages?: number;
  languages?: number;
};

const SERVICES_DATA: ServiceData[] = [
  { id: 'seo', name: 'Seo', description: "Hacer una campaña SEO", basePrice: 300 },
  { id: 'ads', name: 'Ads', description: "Hacer una campaña de publicidad", basePrice: 400 },
  { id: 'web', name: 'Web', description: "Hacer una página web", basePrice: 500, pages: 1, languages: 1 },
];

export default SERVICES_DATA