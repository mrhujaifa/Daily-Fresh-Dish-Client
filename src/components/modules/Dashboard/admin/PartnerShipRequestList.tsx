"use client";

import React, { useEffect, useState } from "react";
import { providerServices } from "@/services/provider.services";
import { IProviderProfile } from "@/types/provider/providerProfile";

export default function PartnerShipRequestList() {
  const [requests, setRequests] = useState<IProviderProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await providerServices.getProviderPartnerShipRequest();
        if (response.success && response.data) {
          const dataToSet = Array.isArray(response.data)
            ? response.data
            : [response.data];
          setRequests(dataToSet);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleVerify = async (id: string) => {
    alert(`Verifying provider ID: ${id}`);
    // এখানে providerServices.updateStatus(id) কল করতে পারেন
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="text-gray-500 text-sm font-medium">
            Loading requests...
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 italic">
              Partnership Requests
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Review and approve business partnership applications.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">
              Total: {requests.length}
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Business Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                    Logistics
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {requests.length > 0 ? (
                  requests.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      {/* Business Column */}
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0 shadow-indigo-100 shadow-lg">
                            {item.businessName[0]}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-bold text-slate-900 truncate uppercase tracking-tight">
                              {item.businessName}
                            </h3>
                            <p className="text-xs text-slate-500 truncate max-w-[180px] md:max-w-xs">
                              {item.address}
                            </p>
                            <span className="mt-1 inline-flex items-center text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded uppercase">
                              {item.cuisineType}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Logistics Column (Hidden on mobile) */}
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-slate-700 font-medium">
                            <span className="text-slate-400 mr-2">Fee:</span> ৳
                            {item.deliveryFee}
                          </div>
                          <div className="flex items-center text-xs text-slate-500">
                            <span className="text-slate-400 mr-2">Time:</span>{" "}
                            {item.estimatedDeliveryTime}
                          </div>
                        </div>
                      </td>

                      {/* Status Column */}
                      <td className="px-6 py-4">
                        <div
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold shadow-sm border ${
                            item.isVerified
                              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                              : "bg-orange-50 text-orange-700 border-orange-100"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full mr-2 ${item.isVerified ? "bg-emerald-500" : "bg-orange-500"}`}
                          ></span>
                          {item.isVerified
                            ? "Active Provider"
                            : "Awaiting Review"}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 ml-1 font-medium">
                          Joined {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      </td>

                      {/* Action Column */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {!item.isVerified && (
                            <button
                              onClick={() => handleVerify(item.id)}
                              className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-600 transition-all shadow-md active:scale-95"
                            >
                              Approve
                            </button>
                          )}
                          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-20 text-center text-slate-400 font-medium italic"
                    >
                      No new partnership requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
