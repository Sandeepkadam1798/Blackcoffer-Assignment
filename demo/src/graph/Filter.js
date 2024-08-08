// src/components/Filter.js
import React, { useMemo } from 'react';

const Filter = ({ data, setFilteredData }) => {
    const topics = useMemo(() => [...new Set(data.map(item => item.topic))], [data]);
    const sectors = useMemo(() => [...new Set(data.map(item => item.sector))], [data]);
    const regions = useMemo(() => [...new Set(data.map(item => item.region))], [data]);
    const pestles = useMemo(() => [...new Set(data.map(item => item.pestle))], [data]);
    const sources = useMemo(() => [...new Set(data.map(item => item.source))], [data]);
    const swots = useMemo(() => [...new Set(data.map(item => item.impact))], [data]);
    const countries = useMemo(() => [...new Set(data.map(item => item.country))], [data]);
    const cities = useMemo(() => [...new Set(data.map(item => item.region))], [data]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const filtered = data.filter(item => item[name] === value || value === '');
        setFilteredData(filtered);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by Topic:</label>
                <select name="topic" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {topics.map((topic, index) => (
                        <option key={index} value={topic}>{topic}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by Sector:</label>
                <select name="sector" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {sectors.map((sector, index) => (
                        <option key={index} value={sector}>{sector}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by Region:</label>
                <select name="region" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by PEST:</label>
                <select name="pestle" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {pestles.map((pestle, index) => (
                        <option key={index} value={pestle}>{pestle}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by Source:</label>
                <select name="source" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {sources.map((source, index) => (
                        <option key={index} value={source}>{source}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by SWOT:</label>
                <select name="impact" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {swots.map((swot, index) => (
                        <option key={index} value={swot}>{swot}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by Country:</label>
                <select name="country" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-dark">Filter by City:</label>
                <select name="city" onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm">
                    <option value="">All</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
