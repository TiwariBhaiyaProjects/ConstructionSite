"use client";

import { useState } from "react";
import { completeFleet } from "../machinery_constants";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Settings2 } from "lucide-react";

const ITEMS_PER_PAGE = 15;

export default function MachineryList() {
  const [activeTab, setActiveTab] = useState<'Self' | 'Hired'>('Self');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredFleet = completeFleet.filter(item => item.owner === activeTab);
  const totalPages = Math.ceil(filteredFleet.length / ITEMS_PER_PAGE);
  
  const currentItems = filteredFleet.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  const handleTabChange = (tab: 'Self' | 'Hired') => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset pagination on tab change
  };

  return (
    <section className="py-24 bg-background">
      <div className="container-custom max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Settings2 className="w-4 h-4" />
            Complete Fleet Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our Equipment Roster
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive, categorized list of our 90+ heavy machinery, transport vehicles, and construction equipment.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          
          {/* Custom Tabs */}
          <div className="flex border-b border-border/50">
            <button
              onClick={() => handleTabChange('Self')}
              className={`flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider transition-all ${
                activeTab === 'Self' 
                  ? 'bg-brand-primary/10 text-brand-primary border-b-2 border-brand-primary' 
                  : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
              }`}
            >
              Self Owned ({completeFleet.filter(i => i.owner === 'Self').length})
            </button>
            <button
              onClick={() => handleTabChange('Hired')}
              className={`flex-1 py-4 text-center font-bold text-sm uppercase tracking-wider transition-all ${
                activeTab === 'Hired' 
                  ? 'bg-brand-primary/10 text-brand-primary border-b-2 border-brand-primary' 
                  : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
              }`}
            >
              Hired Equipment ({completeFleet.filter(i => i.owner === 'Hired').length})
            </button>
          </div>

          <div className="overflow-x-auto min-h-[500px]">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/30 border-b">
                <tr>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Sr No</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap">Category</th>
                  <th className="px-6 py-4 font-semibold whitespace-nowrap w-full">Machine Details (Make / Model)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {currentItems.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className="hover:bg-muted/30 transition-colors group"
                  >
                    <td className="px-6 py-5 font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {((currentPage - 1) * ITEMS_PER_PAGE) + index + 1}
                    </td>
                    <td className="px-6 py-5 font-bold text-foreground whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-6 py-5 text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Custom Pagination Controls */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-border/50 bg-muted/10 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{((currentPage - 1) * ITEMS_PER_PAGE) + 1}</span> to <span className="font-medium text-foreground">{Math.min(currentPage * ITEMS_PER_PAGE, filteredFleet.length)}</span> of <span className="font-medium text-foreground">{filteredFleet.length}</span> items
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-border/50 text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-1">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                        currentPage === i + 1
                          ? 'bg-brand-primary text-brand-dark'
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-border/50 text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
