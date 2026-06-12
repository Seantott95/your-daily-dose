import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

// 👇 1. IMPORT YOUR IMAGES HERE! 
// Replace 'cert1.png', etc., with the exact names of the files in your assets folder.
import dataAnalystCert from "@/assets/Networking_Basics_certificate_seanclarence-igual-olivarezcollege-edu-ph_4aa31c5a-9dd3-4d0e-91e6-dee4620eb812.jpg"; 
import sqlCert from "@/assets/E-Cert-Igual.png";
import promptEngCert from "@/assets/Slide27.PNG";
import deanslist from "@/assets/deanslist.jpeg";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Sean Igual" },
      { name: "description", content: "Professional credentials and specialized training." },
      { property: "og:title", content: "Certifications — Sean Igual" },
      { property: "og:description", content: "Professional credentials and specialized training." },
    ],
  }),
  component: Certifications,
});

// 👇 2. Use the imported variables (without quotes!) in your array
const certs = [
  { 
    name: "Networking Certificate", 
    org: "Issuer", 
    year: "2026", 
    img: dataAnalystCert // 👈 Notice there are NO quotes around it here!
  },
  { 
    name: "Data Guardians Certificate", 
    org: "Issuer", 
    year: "2026", 
    img: sqlCert 
  },
  { 
    name: "Dean's List Certificate", 
    org: "Issuer", 
    year: "2025", 
    img: deanslist,
  },
  { 
    name: "Research Certificate", 
    org: "Issuer", 
    year: "2025", 
    img: promptEngCert 
  },
];

function Certifications() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        
        <button 
          onClick={() => router.history.back()} 
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground bg-transparent border-none p-0 cursor-pointer"
        >
          ← Go Back
        </button>
        
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Certifications</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Professional credentials and specialized training in Data, SQL, and AI.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {certs.map((c) => (
            <article key={c.name} className="overflow-hidden rounded-xl border border-border bg-card">
              
              {/* 👇 3. Render the image if it exists */}
              {c.img ? (
                <img 
                  src={c.img} 
                  alt={`${c.name} Certificate`} 
                  loading="lazy"
                  className="h-56 w-full object-contain bg-muted border-b border-border" 
                />
              ) : (
                <div
                  className="flex h-56 items-center justify-center text-sm font-semibold tracking-wider text-white text-center px-4"
                  style={{ background: "linear-gradient(135deg, oklch(0.22 0.02 260), oklch(0.32 0.05 165))" }}
                >
                  STATEMENT OF ACCOMPLISHMENT
                </div>
              )}

              <div className="p-4">
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.org} · {c.year}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}