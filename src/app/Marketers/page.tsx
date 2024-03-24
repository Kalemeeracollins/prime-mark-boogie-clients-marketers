'use client'
import React, { useState, useEffect } from 'react';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
// import MarketerData from './data';
// import AddMarketerForm from "./form";

const Marketers = () => {
  const [marketers, setMarketers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMarketers = marketers.filter(marketer => {
    return marketer.Name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/marketers.json');
      const data = await response.json();
      setMarketers(data);
    };
    fetchData();
  }, []);

  const toggleDetails = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mt-5">Marketers</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table className="w-full">
        <TableHeader className='bg-gray-200'>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>National ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead>More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMarketers.map((marketer, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell className="flex items-center">
                  <Avatar className="mr-2">
                    <AvatarImage alt="Jane Cooper" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JC</AvatarFallback>
                  </Avatar>
                  <span>{marketer.Name}</span>
                </TableCell>
                <TableCell>{marketer.Status}</TableCell>
                <TableCell>{marketer.Phone}</TableCell>
                <TableCell>{marketer.NationalId}</TableCell>
                <TableCell>{marketer.Email}</TableCell>
                <TableCell>{marketer.Joined}</TableCell>
                <TableCell>
                  <button
                    className="focus:outline-none"
                    onClick={() => toggleDetails(index)}
                  >
                    {expandedIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                </TableCell>
              </TableRow>
              {expandedIndex === index && (
                <TableRow>
                  <TableCell colSpan="7" className="border-t">
                    <div className="p-4">
                      More details here for {marketer.Name}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Marketers;
