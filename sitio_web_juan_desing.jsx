import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function JuanDesingWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Juan Desing
        </motion.h1>
        <p className="text-xl text-gray-300 mb-8">
          Diseño gráfico con criterio, estrategia y carácter.
        </p>
        <Button className="rounded-2xl px-8 py-6 text-lg">Solicitar cotización</Button>
      </section>

      {/* SERVICIOS */}
      <section className="px-6 py-20 bg-neutral-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Diseño de logotipos",
            "Identidad visual",
            "Diseño para redes sociales",
            "Branding corporativo",
            "Diseño publicitario",
            "Vectorización profesional",
          ].map((service, i) => (
            <Card key={i} className="bg-black border-neutral-800 rounded-2xl">
              <CardContent className="p-6 text-center">
                <p className="text-lg">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
        <p className="text-gray-300 text-lg">
          Soy diseñador gráfico enfocado en crear marcas sólidas, claras y
          funcionales. Diseño con intención: menos adorno, más mensaje.
        </p>
      </section>

      {/* CONTACTO */}
      <section className="px-6 py-20 bg-neutral-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
        <p className="text-gray-300 mb-8">
          ¿Listo para llevar tu marca al siguiente nivel?
        </p>
        <Button className="rounded-2xl px-10 py-6 text-lg">Escríbeme por WhatsApp</Button>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Juan Desing. Diseño con valores.
      </footer>
    </div>
  );
}
