'use client'
import React, { useState, useEffect } from 'react';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {clientsData} from '@/constants';

const Clients = () => {
  const [Clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = Clients.filter(clients => {
    return clients.Name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/clients.json');
      const data = await response.json();
      setClients(data);
    };
    fetchData();
  }, []);

  const toggleDetails = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mt-5">Clients</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search for Client..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table className="w-full">
        <TableHeader className='bg-gray-200'>
          <TableRow>
          <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Project Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClients.map((clients, index) => (
            <React.Fragment key={index}>
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
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
                <TableCell className="flex items-center">
                  <Avatar className="mr-2">
                    <AvatarImage alt="Jane Cooper" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>ck</AvatarFallback>
                  </Avatar>
                  <span>{clients.Name}</span>
                </TableCell>
                <TableCell>{clients.status}</TableCell>
                <TableCell>{clients.Phone}</TableCell>
                <TableCell>{clients.ProjectName}</TableCell>
                <TableCell>{clients.Email}</TableCell>
                <TableCell>{clients.Joined}</TableCell>
                
              </TableRow>
              {expandedIndex === index && (
                <TableRow>
                  <TableCell colSpan="7" className="border-t">
                    <div className="p-4">
                      More details here for {clients.Name}
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

export default Clients;
