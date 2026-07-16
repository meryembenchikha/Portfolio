import type { Certificate } from "@/types/certificate";

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Artificial Intelligence Certification",
    issuer: "Gate training",
    date: "2026",
    image: "/images/certificates/cert-1.jpg",
    credentialUrl: "https://example.com/verify/cert-1",
  },
  {
    id: "cert-2",
    title: "Certificate of Competency in Fundamentals of Accelerated Data Science",
    issuer: "NVIDIA",
    date: "2025",
    image: "/images/certificates/cert-2.jpg",
    credentialUrl: "https://example.com/verify/cert-2",
  },
  {
    id: "cert-3",
    title: "CCNA1 Certification",
    issuer: "Cisco",
    date: "2024",
    image: "/images/certificates/cert-3.jpg",
  },
];