import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator as CalculatorIcon, Home, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { companyInfo, packages } from "@/data/companyData";
import { motion } from "framer-motion";

const floorMultipliers: Record<string, number> = {
  "Ground Floor": 1,
  "G+1": 2,
  "G+2": 3,
  Duplex: 2,
};

const timelineByFloors: Record<string, string> = {
  "Ground Floor": "90-120 days",
  "G+1": "4-6 months",
  "G+2": "6-10 months",
  Duplex: "5-8 months",
};

const formatRs = (value: number) => `Rs. ${Math.round(value).toLocaleString("en-IN")}`;

const Calculator = () => {
  const { toast } = useToast();
  const [plotSize, setPlotSize] = useState("1000");
  const [floors, setFloors] = useState("G+1");
  const [packageId, setPackageId] = useState("standard");
  const [lead, setLead] = useState({
    name: "",
    mobile: "",
    city: "",
    requirement: "",
    company: "",
  });

  const selectedPackage =
    packages.find((pkg) => pkg.id === packageId) || packages[1];

  const result = useMemo(() => {
    const size = Number(plotSize) || 0;
    const multiplier = floorMultipliers[floors] || 1;
    const builtUpArea = size * multiplier;
    const baseCost = builtUpArea * selectedPackage.price;
    const lower = baseCost * 0.95;
    const upper = baseCost * 1.12;

    return {
      builtUpArea,
      lower,
      upper,
      timeline: timelineByFloors[floors] || "Site-specific",
    };
  }, [plotSize, floors, selectedPackage.price]);

  const updateLead = (field: keyof typeof lead, value: string) => {
    setLead((prev) => ({ ...prev, [field]: value }));
  };

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();

    if (lead.company) {
      return;
    }

    const message = [
      "Detailed quote request from construction calculator",
      `Name: ${lead.name}`,
      `Mobile: ${lead.mobile}`,
      `City: ${lead.city}`,
      `Plot size: ${plotSize} sq ft`,
      `Floors: ${floors}`,
      `Package: ${selectedPackage.name}`,
      `Estimated built-up area: ${result.builtUpArea.toLocaleString("en-IN")} sq ft`,
      `Rough range: ${formatRs(result.lower)} - ${formatRs(result.upper)}`,
      `Requirement: ${lead.requirement || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    toast({
      title: "Detailed quote request ready",
      description: "Your calculator details have been opened in WhatsApp.",
    });
    setLead({ name: "", mobile: "", city: "", requirement: "", company: "" });
  };

  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-[#0A1428] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/modi-bridge-walk.jpeg')] bg-cover bg-center opacity-30 mix-blend-overlay scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent" />
        
        <div className="container-custom relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center gap-2 text-white/60 mb-8 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-[#E8B923] flex items-center gap-1 transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <span>/</span>
              <span className="text-[#E8B923]">Calculator</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <CalculatorIcon className="w-4 h-4 text-[#E8B923]" />
              <span className="text-white text-sm font-semibold tracking-widest uppercase">Smart Estimator</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
              Cost <span className="text-[#E8B923]">Calculator</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              Enter plot size, floors and package to get a rough construction
              estimate instantly. Submit your details for a detailed BOQ.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1428] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bridge.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8B923]/20 flex items-center justify-center border border-[#E8B923]/30">
                      <CalculatorIcon className="w-7 h-7 text-[#E8B923]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-white">Calculate Estimate</h2>
                      <p className="text-sm text-white/60">
                        This is an indicative range, not a final quotation.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="plot-size" className="text-white/80 font-bold uppercase tracking-wider text-xs">Plot Size</Label>
                      <Input
                        id="plot-size"
                        type="number"
                        min="100"
                        value={plotSize}
                        onChange={(e) => setPlotSize(e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923]"
                      />
                      <p className="text-xs text-[#E8B923] font-medium">In sq ft</p>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-white/80 font-bold uppercase tracking-wider text-xs">Floors</Label>
                      <Select value={floors} onValueChange={setFloors}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white h-12 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A1428] border-white/20 text-white">
                          <SelectItem value="Ground Floor" className="focus:bg-[#E8B923] focus:text-[#0A1428]">Ground Floor</SelectItem>
                          <SelectItem value="G+1" className="focus:bg-[#E8B923] focus:text-[#0A1428]">G+1</SelectItem>
                          <SelectItem value="G+2" className="focus:bg-[#E8B923] focus:text-[#0A1428]">G+2</SelectItem>
                          <SelectItem value="Duplex" className="focus:bg-[#E8B923] focus:text-[#0A1428]">Duplex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-white/80 font-bold uppercase tracking-wider text-xs">Package</Label>
                      <Select value={packageId} onValueChange={setPackageId}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white h-12 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A1428] border-white/20 text-white">
                          {packages.map((pkg) => (
                            <SelectItem key={pkg.id} value={pkg.id} className="focus:bg-[#E8B923] focus:text-[#0A1428]">
                              {pkg.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-10">
                    <div className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:border-[#E8B923]/50 transition-colors">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                        Built-up Area
                      </p>
                      <p className="text-2xl font-black text-white">
                        {result.builtUpArea.toLocaleString("en-IN")} sq ft
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#E8B923] p-6 border border-[#E8B923] shadow-[0_10px_30px_rgba(232,185,35,0.3)]">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#0A1428]/60 mb-2">
                        Rough Range
                      </p>
                      <p className="text-xl font-black text-[#0A1428]">
                        {formatRs(result.lower)}
                      </p>
                      <p className="text-sm font-bold text-[#0A1428]/70">
                        to {formatRs(result.upper)}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:border-[#E8B923]/50 transition-colors">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/50 mb-2">
                        Timeline
                      </p>
                      <p className="text-xl font-black text-white">
                        {result.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B923]/10 blur-3xl rounded-full" />
                    <h3 className="font-extrabold text-[#E8B923] mb-4 text-lg">{selectedPackage.name} Specs</h3>
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-white/80 font-medium">
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8B923]" /> Cement: {selectedPackage.materials.cement}</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8B923]" /> Steel: {selectedPackage.materials.steel}</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8B923]" /> Wiring: {selectedPackage.materials.wiring}</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8B923]" /> Plumbing: {selectedPackage.materials.plumbing}</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8B923]" /> Flooring: {selectedPackage.materials.flooring}</p>
                      <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E8B923]" /> Paint: {selectedPackage.materials.paint}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="rounded-3xl bg-white p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#E8B923]" />
                <h2 className="text-3xl font-extrabold text-[#0A1428] mb-3">Get detailed quote</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Share your mobile number and city. We will review site-specific
                  conditions and send a more accurate estimate.
                </p>
                <form onSubmit={handleQuote} className="space-y-5">
                  <input
                    className="hidden"
                    tabIndex={-1}
                    value={lead.company}
                    onChange={(e) => updateLead("company", e.target.value)}
                    aria-hidden="true"
                  />
                  <div className="space-y-2">
                    <Label htmlFor="lead-name" className="text-xs font-bold uppercase tracking-wider text-gray-500">Name</Label>
                    <Input
                      id="lead-name"
                      value={lead.name}
                      onChange={(e) => updateLead("name", e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-mobile" className="text-xs font-bold uppercase tracking-wider text-gray-500">Mobile Number</Label>
                    <Input
                      id="lead-mobile"
                      inputMode="tel"
                      value={lead.mobile}
                      onChange={(e) => updateLead("mobile", e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-city" className="text-xs font-bold uppercase tracking-wider text-gray-500">City</Label>
                    <Input
                      id="lead-city"
                      value={lead.city}
                      onChange={(e) => updateLead("city", e.target.value)}
                      required
                      className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-requirement" className="text-xs font-bold uppercase tracking-wider text-gray-500">Requirement</Label>
                    <Textarea
                      id="lead-requirement"
                      rows={4}
                      placeholder="Example: G+1 home, 2 bedrooms, parking, basic package"
                      value={lead.requirement}
                      onChange={(e) => updateLead("requirement", e.target.value)}
                      className="bg-gray-50 border-gray-200 rounded-xl focus:border-[#E8B923] focus:ring-[#E8B923] resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 rounded-xl bg-[#0A1428] hover:bg-[#1a2a4a] text-white font-bold text-lg hover:scale-[1.02] transition-all shadow-xl mt-4">
                    Get Detailed Quote
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculator;
