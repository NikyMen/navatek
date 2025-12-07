import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../lib/whatsapp';

const Footer: React.FC = () => {
  return (
    <footer className="mt-0">
      <div className="bg-[#0d2742] text-white text-center py-3 text-sm">
        Conectate con nuestro equipo y obtené asesoramiento técnico personalizado
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-100 p-8 md:p-10">
          <div className="max-w-md">
            <div className="mb-6">
              <img src="/logo-lcimports.svg" alt="Novatek" className="h-10" />
            </div>
            <div className="text-orange-600 font-extrabold tracking-wide">LUNES A VIERNES</div>
            <div className="mt-1 text-2xl md:text-3xl font-light text-gray-900">
              08:00 AM - 17:00 PM
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-md bg-white shadow flex items-center justify-center hover:opacity-90 transition" aria-label="Facebook">
                <Facebook size={18} className="text-gray-700" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white shadow flex items-center justify-center hover:opacity-90 transition" aria-label="Instagram">
                <Instagram size={18} className="text-gray-700" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_CONFIG.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white shadow flex items-center justify-center hover:opacity-90 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-orange-600 text-white p-8 md:p-10">
          <div className="max-w-md ml-auto">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-7 h-7 rounded-full bg-[#0d2742] flex items-center justify-center">
                <MapPin size={16} />
              </div>
              <div>
                <div className="font-semibold">Provincia de Buenos Aires</div>
              </div>
            </div>

            <div className="my-4 h-px bg-white/40" />
            <div className="flex items-start gap-3">
              <div className="mt-1 w-7 h-7 rounded-full bg-[#0d2742] flex items-center justify-center">
                <Phone size={16} />
              </div>
              <div>
                <div className="font-semibold">+54 11 7940 2001</div>
              </div>
            </div>

            <div className="my-4 h-px bg-white/40" />
            <div className="flex items-start gap-3">
              <div className="mt-1 w-7 h-7 rounded-full bg-[#0d2742] flex items-center justify-center">
                <Mail size={16} />
              </div>
              <div>
                <a href="mailto:administracion@novatekargentina.com.ar" className="font-semibold hover:underline">
                  administracion@novatekargentina.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0d2742] text-white text-center py-3 text-xs">
        © {new Date().getFullYear()} Novatek. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
