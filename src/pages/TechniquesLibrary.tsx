import React, { useState } from "react";

interface Technique {
  id: string; // Unique YouTube video ID
  title: string; // Title of the technique
  category: string; // Category (e.g., "Submissions", "Guard")
}

const techniques: Technique[] = [
  { id: "dQw4w9WgXcQ", title: "Armbar from Guard", category: "Submissions" },
  { id: "3JZ_D3ELwOQ", title: "Triangle Choke", category: "Submissions" },
  { id: "kJQP7kiw5Fk", title: "Passing the Guard", category: "Guard" },
  { id: "fJ9rUzIMcZQ", title: "Butterfly Sweep", category: "Sweeps" },
];

const TechniquesLibrary: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTechniques = techniques.filter(
    (technique) =>
      (selectedCategory ? technique.category === selectedCategory : true) &&
      technique.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-light min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Techniques Library
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search techniques..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow px-6 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <select
          onChange={(e) => setSelectedCategory(e.target.value || null)}
          className="w-1/3 md:w-48 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="">All Categories</option>
          <option value="Submissions">Submissions</option>
          <option value="Guard">Guard</option>
          <option value="Sweeps">Sweeps</option>
        </select>
      </div>

      {/* Techniques List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTechniques.map((technique) => (
          <div
            key={technique.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <iframe
              src={`https://www.youtube.com/embed/${technique.id}`}
              title={technique.title}
              allowFullScreen
              className="w-full h-48"
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-bold text-primary">
                {technique.title}
              </h3>
              <p className="text-sm text-dark">
                Category: {technique.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredTechniques.length === 0 && (
        <p className="text-center text-dark mt-4">No techniques found.</p>
      )}
    </div>
  );
};

export default TechniquesLibrary;
