// RESPONSIBILITY: Renders the floating WhatsApp action button with a quick-contact form modal.
"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/components/layout/layout_constants";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const GlobalWhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "Hi, I'm interested in your construction services. Please provide more details."
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm ${formData.name}.\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setFormData({ name: "", phone: "", message: "Hi, I'm interested in your construction services. Please provide more details." });
  };

  const quickMessage = () => {
    const message = "Hi! I'm interested in your construction services. Please provide more details about your projects and pricing.";
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-brand-whatsapp-light hover:bg-brand-whatsapp text-white rounded-full w-12 h-12 md:w-14 md:h-14 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all duration-300 hover:scale-110 p-0"
          size="icon"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
        </Button>
      </div>

      {/* WhatsApp Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-brand-whatsapp-light text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">WhatsApp Chat</h3>
                  <p className="text-sm opacity-90">Rajnandini Construction</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Get instant support! Send us a message on WhatsApp.
                </p>
                <Button
                  onClick={quickMessage}
                  className="w-full bg-brand-whatsapp-light hover:bg-brand-whatsapp text-white mb-4"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Quick Message
                </Button>
                <div className="text-center text-gray-500 text-sm mb-4">or fill the form below</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full bg-brand-whatsapp-light hover:bg-brand-whatsapp text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send WhatsApp Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalWhatsAppButton;