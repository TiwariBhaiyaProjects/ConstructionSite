"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { companyInfo } from "@/data/companyData";

interface EstimateFormProps {
  source?: string;
  buttonText?: string;
  compact?: boolean;
  className?: string;
}

const initialForm = {
  name: "",
  mobile: "",
  city: "",
  plotSize: "",
  floors: "",
  budget: "",
  requirement: "",
  company: "",
};

const EstimateForm = ({
  source = "Website enquiry",
  buttonText = "Get Free Estimate",
  compact = false,
  className,
}: EstimateFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.company) {
      return;
    }

    setIsSubmitting(true);

    const message = [
      "New construction estimate request",
      `Source: ${source}`,
      `Name: ${formData.name}`,
      `Mobile: ${formData.mobile}`,
      `City: ${formData.city}`,
      `Plot size: ${formData.plotSize}`,
      `Floors: ${formData.floors}`,
      `Budget: ${formData.budget}`,
      `Requirement: ${formData.requirement || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    await new Promise((resolve) => setTimeout(resolve, 300));
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Estimate request prepared",
      description: "Your enquiry has been opened in WhatsApp for quick follow-up.",
    });

    setFormData(initialForm);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className || ''}`}>
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        value={formData.company}
        onChange={(e) => updateField("company", e.target.value)}
        aria-hidden="true"
      />

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div className="space-y-2">
          <Label htmlFor={`${source}-name`}>Name</Label>
          <Input
            id={`${source}-name`}
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${source}-mobile`}>Mobile Number</Label>
          <Input
            id={`${source}-mobile`}
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={formData.mobile}
            onChange={(e) => updateField("mobile", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${source}-city`}>City</Label>
          <Input
            id={`${source}-city`}
            placeholder="Patna, Ranchi, Gaya..."
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${source}-plot`}>Plot Size</Label>
          <Input
            id={`${source}-plot`}
            placeholder="Example: 1200 sq ft"
            value={formData.plotSize}
            onChange={(e) => updateField("plotSize", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Floors</Label>
          <Select
            value={formData.floors}
            onValueChange={(value) => updateField("floors", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select floors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ground Floor">Ground Floor</SelectItem>
              <SelectItem value="G+1">G+1</SelectItem>
              <SelectItem value="G+2">G+2</SelectItem>
              <SelectItem value="Duplex">Duplex</SelectItem>
              <SelectItem value="Renovation">Renovation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Budget</Label>
          <Select
            value={formData.budget}
            onValueChange={(value) => updateField("budget", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Below Rs. 15 Lakh">Below Rs. 15 Lakh</SelectItem>
              <SelectItem value="Rs. 15-30 Lakh">Rs. 15-30 Lakh</SelectItem>
              <SelectItem value="Rs. 30-50 Lakh">Rs. 30-50 Lakh</SelectItem>
              <SelectItem value="Rs. 50 Lakh+">Rs. 50 Lakh+</SelectItem>
              <SelectItem value="Need guidance">Need guidance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${source}-requirement`}>Requirement Message</Label>
        <Textarea
          id={`${source}-requirement`}
          placeholder="Tell us about construction, renovation, interiors or planning..."
          rows={compact ? 3 : 4}
          value={formData.requirement}
          onChange={(e) => updateField("requirement", e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          "Preparing..."
        ) : (
          <>
            {buttonText}
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default EstimateForm;
