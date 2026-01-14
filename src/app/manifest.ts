import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "São Luis Garagem - Oficina Mecânica",
        short_name: "São Luis Garagem",
        description: "Mecânica de confiança em Oliveira de Azeméis. Serviços multimarca, diagnóstico e reparação.",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a",
        theme_color: "#0f172a",
        icons: [
            {
                src: "/icon",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
}
