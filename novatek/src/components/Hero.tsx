import React from 'react';
import { ShoppingBag, MessageCircle, ChevronDown, Package, Headphones, Medal, Truck } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../lib/whatsapp';

export const Hero: React.FC = () => {
  return (
    <>
      <div
        className="relative text-white min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(/backgroundLcimports.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Botones centrados en medio de la imagen */}
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-12 md:pb-32 pointer-events-none">
          <div className="flex gap-4 pointer-events-auto">
            <a
              href="/catalogo"
              className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-orange-600 px-6 py-3 rounded-md font-semibold transition-colors shadow-lg"
            >
              <ShoppingBag size={20} />
              <span>Ver Catálogo</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Contactanos</span>
            </a>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl mb-4 leading-tight drop-shadow-lg font-light">
              Piezas <span className="font-extrabold">claves</span> para <span className="font-extrabold">grandes proyectos.</span>
            </h1>
            <div className="mt-2">
              <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-md text-sm md:text-base drop-shadow">
                Accesorios y herrajes para aluminio.
              </span>
            </div>
            
          </div>
        </div>
      </div>

      <section id="nosotros" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Sobre Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="/imgnosotros.png"
                alt="Sobre Nosotros"
                className="w-full rounded-2xl shadow-md"
              />
            </div>
            <div className="text-gray-800">
              <p className="mb-4">
                En NOVATEK ofrecemos soluciones integrales en herrajes y accesorios para carpinterías de aluminio.
              </p>
              <p className="mb-6">
                Trabajamos con marcas de alta calidad, stock real y procesos ágiles para acompañar cada proyecto.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                <span>Contactanos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="categorias" className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-10">Categorías Destacadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/categoriaEscuadras.png" alt="Escuadras" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <div className="font-semibold tracking-wide">ESCUADRAS</div>
                <ChevronDown className="mx-auto mt-1 text-gray-400" size={16} />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/categoriaManijas.png" alt="Manijas" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <div className="font-semibold tracking-wide">MANIJAS</div>
                <ChevronDown className="mx-auto mt-1 text-gray-400" size={16} />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/categoriaBisagras.png" alt="Bisagras" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <div className="font-semibold tracking-wide">BISAGRAS</div>
                <ChevronDown className="mx-auto mt-1 text-gray-400" size={16} />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/categoriaCierresLaterales.png" alt="Cierres Laterales" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <div className="font-semibold tracking-wide">CIERRES LATERALES</div>
                <ChevronDown className="mx-auto mt-1 text-gray-400" size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="relative">
        <div className="relative">
          <img
            src="/background1.png"
            alt="Valores"
            loading="lazy"
            decoding="async"
            className="w-full h-56 sm:h-72 md:h-auto object-cover object-center"
          />
          <div className="md:absolute md:inset-0 md:flex md:items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0d2742] shadow-md ring-2 ring-white">
                    <Package size={34} className="text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-orange-600">STOCK</div>
                  <p className="mt-7 text-sm font-semibold text-gray-900">Evita esperas y retrasos en obra.</p>
                </div>
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0d2742] shadow-md ring-2 ring-white">
                    <Headphones size={34} className="text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-orange-600">SOPORTE</div>
                  <p className="mt-7 text-sm font-semibold text-gray-900">Acompañamiento técnico especializado.</p>
                </div>
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0d2742] shadow-md ring-2 ring-white">
                    <Medal size={34} className="text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-orange-600">CALIDAD</div>
                  <p className="mt-2 text-sm font-semibold text-gray-900">Catálogo nacional e importado.</p>
                </div>
                <div>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0d2742] shadow-md ring-2 ring-white">
                    <Truck size={34} className="text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-orange-600">LOGÍSTICA</div>
                  <p className="mt-7 text-sm font-semibold text-gray-900">Proceso comercial ágil y cotizaciones rápidas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
