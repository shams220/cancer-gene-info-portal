import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import cancersData from "./data/cancers.json";
import genesData from "./data/genes.json";
import './CancerDataPortal.css'
import Footer from './footer.jsx'
import Navbar from "./navbar.jsx";
export default function CancerDataPortal() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selectedCancer, setSelectedCancer] = useState(null);



  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const cancerMatch = Object.keys(cancersData).filter((key) =>
      key.toLowerCase().includes(value)
    );

    const geneMatch = Object.keys(genesData).filter((key) =>
      key.toLowerCase().includes(value)
    );

    const combinedResults = [
      ...cancerMatch.map((c) => ({ type: "cancer", label: c })),
      ...geneMatch.map((g) => ({ type: "gene", label: g })),
    ];

    setResults(combinedResults.slice(0, 20));
  };

  const popularCancers = Object.keys(cancersData).slice(0, 9);
const navigate = useNavigate()
  return (
    <div>
      <div>

        <Navbar />
      </div>
      <div className="min-h-screen w-full bg-gray-100 text-gray-900">
      <header className="w-full p-6 shadow-md bg-white text-center">
        <h1 className="text-3xl font-extrabold text-blue-700">
          Cancer Gene Information Portal
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Explore cancer types and their associated gene mutations.
        </p>
      </header>

      <main className="w-full flex flex-col items-center mt-10 px-10">
        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="🔍 Search gene or cancer type..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-2xl px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 mb-10"
        />

        {/* SEARCH RESULTS */}
        {results.length > 0 && (
          <div className="w-full max-w-4xl">
            <h3 className="text-lg font-bold mb-3">Search Results</h3>
            {results.map((item, idx) => (
              <p
                key={idx}
                onClick={() =>
                  item.type === "cancer"
                    ? setSelectedCancer(item.label)
                    : setResults(
                        genesData[item.label].map((g) => ({
                          type: "cancer",
                          label: g.cancer_type,
                        }))
                      )
                }
                className="cursor-pointer text-blue-700 hover:underline"
              >
                {item.label} ({item.type})
              </p>
            ))}
          </div>
        )}

        {/* CANCER CARDS ON HOMEPAGE */}
        {!selectedCancer && !search && (
          <>
            <h3 className="text-xl font-bold text-blue-700 mb-6">
              Popular Cancers
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCancers.map((cancer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCancer(cancer)}
                  className="bg-white cursor-pointer p-6 rounded-xl shadow-xl hover:shadow-blue-200"
                >
                  <h2 className="text-2xl font-bold text-blue-700">{cancer}</h2>
                  <p className="text-gray-700 mt-2">
                    {cancersData[cancer].length}+ associated genes
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* SELECTED CANCER DETAIL PAGE */}
        {selectedCancer && (
          <div className="max-w-4xl w-full mt-10">
            <button
              className="text-blue-700 underline mb-4"
              onClick={() => setSelectedCancer(null)}
            >
              ← Back to Home
            </button>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              {selectedCancer}
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cancersData[selectedCancer].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <p className="font-bold">{item.gene}</p>
                  <p className="text-xs text-gray-600">
                    {item.pubmed_id && `PMID: ${item.pubmed_id}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

<Footer/>
  

    </div>
    </div>
  );
}
