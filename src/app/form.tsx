// 'use client'
// // components/AddMarketerForm.js
// import { useState } from 'react';
// import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

// const AddMarketerForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Phone: '',
//     NationalId: '',
//     Email: '',
//     Joined: '',
//     ActiveProject: '',
//     PassportImage: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     // Clear form data after submission
//     setFormData({
//       Name: '',
//       Phone: '',
//       NationalId: '',
//       Email: '',
//       Joined: '',
//       ActiveProject: '',
//       PassportImage: '',
//     });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-300 to-pink-500">
//       <Card className="w-full max-w-3xl">
//         <CardHeader>
//           <CardTitle>Add personal information</CardTitle>
//           <CardDescription>Fill in the form below to add your personal information.</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
//     <form onSubmit={handleSubmit}>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label className="text-sm font-semibold" htmlFor="name">
//                 Name
//               </Label>
//       <Input
//         type="text"
//         name="Name"
//         value={formData.Name}
//         onChange={handleChange}
//         placeholder="Enter your name" 
//         required
//       /></div>
//       <div className="space-y-2">
//               <Label className="text-sm font-semibold" htmlFor="phone">
//                 Phone number
//               </Label>
//               <Input
//         type="text"
//         name="Phone"
//         value={formData.Phone}
//         onChange={handleChange}
//         placeholder="Phone"
//         required
//       /></div>
//       <div className="space-y-2">
//               <Label className="text-sm font-semibold" htmlFor="national-id">
//                 National ID
//               </Label>
//               <Input 
//         type="text"
//         name="NationalId"
//         value={formData.NationalId}
//         onChange={handleChange}
//         placeholder="National ID"
//         required
//       /></div>
//       <div className="space-y-2">
//               <Label className="text-sm font-semibold" htmlFor="email">
//                 Email
//               </Label>
//               <Input 
//         type="email"
//         name="Email"
//         value={formData.Email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       /></div>
//       <div className="space-y-2">
//               <Label className="text-sm font-semibold" htmlFor="date">
//                 Date
//               </Label>
//               <Input className="input-field" 
//               id="date" 
//               required 
//               type="date" 
//               name="Joined"
//               value={formData.Joined}
//               onChange={handleChange}
//               placeholder="Date Joined" />
//       </div>
//       <div className="space-y-2">
//               <Label className="text-sm font-semibold" htmlFor="active-projects">
//                 Active projects
//               </Label>
//               <Textarea
//                 className="input-field"
//         name="ActiveProject"
//         value={formData.ActiveProject}
//         onChange={handleChange}
//         placeholder="Active Project"
//         required
//       />
//       <input
//         type="text"
//         name="PassportImage"
//         value={formData.PassportImage}
//         onChange={handleChange}
//         placeholder="Passport Image URL"
//         required
//       />
//       </div>
//       </div>
//       </form>
//       </CardContent>
//       <CardFooter className="flex items-center">
//           <Button variant="outline">Cancel</Button>
//           <Button className="ml-auto bg-blue-500" type='submit'>Add</Button>
//         </CardFooter>
//       </Card>
//       </div>
//   );
// };

// export default AddMarketerForm;
