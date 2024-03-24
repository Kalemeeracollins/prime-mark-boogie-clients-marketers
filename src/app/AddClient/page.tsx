'use client'
import { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const AddMarketer = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    NationalId: '',
    Email: '',
    Joined: '',
    ActiveProject: '',
    PassportImage: '',
    uid: '',
    ProjectName: '',
    Description: '',
    ProjectStatus: '', 
    ProjectMarketting: '',
    ProjectPrice: '',
    ProjectStart: '',
    ProjectDueDate: '',
    ProjectTM: '', 
    MarketerId: '',
    MarketerUname: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear form data after submission
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      Name: '',
      Phone: '',
      NationalId: '',
      Email: '',
      Joined: '',
      ActiveProject: '',
      PassportImage: '',
      uid: '',
      ProjectName: '',
      Description: '',
      ProjectStatus: '', 
      ProjectMarketting: '',
      ProjectPrice: '',
      ProjectStart: '',
      ProjectDueDate: '',
      ProjectTM: '', 
      MarketerId: '',
      MarketerUname: '',
    });
  };

  const handleAddMarketer = (formData) => {
    setMarketers((prevMarketers) => [...prevMarketers, formData]);
  };

  return (
    <div className="flex  justify-center  bg-gradient-to-br from-yellow-300 to-pink-500">
      <Card className="w-full max-w-4xl shadow-lg rounded-lg">
        <CardHeader >
          <CardTitle>Add Client Information</CardTitle>
          <CardDescription>Fill in the form below to add your client information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <form onSubmit={handleSubmit}>
            
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="name">Name</Label>
                <Input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Enter your name..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="phone">Phone number</Label>
                <Input type="text" name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Phone..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="email">Email</Label>
                <Input type="text" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="joined-date">Joined Date</Label>
                <Input type="date" name="Joined" value={formData.Joined} onChange={handleChange} placeholder="Date Joined" required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="description">Description</Label>
                <Textarea name="Description" value={formData.Description} onChange={handleChange} placeholder="Description..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="uid">Uid</Label>
                <Input type="number" name="uid" value={formData.uid} onChange={handleChange} placeholder="Uid..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-name">Project Name</Label>
                <Input type="text" name="ProjectName" value={formData.ProjectName} onChange={handleChange} placeholder="Project Name..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-status">Project Status</Label>
                <Input type="text" name="ProjectStatus" value={formData.ProjectStatus} onChange={handleChange} placeholder="Project Status..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-marketing">Project Marketing</Label>
                <Input type="text" name="ProjectMarketting" value={formData.ProjectMarketting} onChange={handleChange} placeholder="Project Marketing..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-price">Project Price</Label>
                <Input type="text" name="ProjectPrice" value={formData.ProjectPrice} onChange={handleChange} placeholder="Project Price..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-start">Project Start</Label>
                <Input type="date" name="ProjectStart" value={formData.ProjectStart} onChange={handleChange} placeholder="Project Start..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-due-date">Project Due Date</Label>
                <Input type="date" name="ProjectDueDate" value={formData.ProjectDueDate} onChange={handleChange} placeholder="Project Due Date..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="project-tm">Project TM</Label>
                <Input type="text" name="ProjectTM" value={formData.ProjectTM} onChange={handleChange} placeholder="Project TM..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="marketer-id">Market Id</Label>
                <Input type="text" name="MarketerId" value={formData.MarketerId} onChange={handleChange} placeholder="Market Id..." required />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold" htmlFor="marketer-name">Marketer Name</Label>
                <Input type="text" name="MarketerUname" value={formData.MarketerUname} onChange={handleChange} placeholder="Marketer Name..." required />
              </div>
            </div>
            <CardFooter className="flex items-center mt-8">
              <Button variant="outline" onClick={clearForm}>Cancel</Button>
              <Button className="ml-auto bg-blue-500 " onSubmit={handleAddMarketer} type='submit'>
              <Link href="/Clients">
                Add Client
                </Link>
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddMarketer;
