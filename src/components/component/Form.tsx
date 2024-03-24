import { useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Form() {
  const AddMarketerForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      Name: '',
      Phone: '',
      NationalId: '',
      Email: '',
      Joined: '',
      ActiveProject: '',
      PassportImage: '',
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
      setFormData({
        Name: '',
        Phone: '',
        NationalId: '',
        Email: '',
        Joined: '',
        ActiveProject: '',
        PassportImage: '',
      });
    };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-300 to-pink-500">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Add personal information</CardTitle>
          <CardDescription>Fill in the form below to add your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="name">
                Name
              </Label>
              <Input 
                 className="input-field"
                 type="text"
                 value={formData.Name}
                 onChange={handleChange}
                 placeholder="Name"
                 required id="name" 
                 placeholder="Enter your name" 
                 required 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="phone">
                Phone number
              </Label>
              <Input 
                 className="input-field" 
                 id="phone" 
                 type="text"
                 value={formData.Phone}
                 onChange={handleChange}
                 placeholder="Enter your phone number" 
                 required type="tel" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="national-id">
                National ID
              </Label>
              <Input 
                 className="input-field" 
                 id="national-id" 
                 value={formData.NationalId}
                 onChange={handleChange}
                 placeholder="Enter your national ID" 
                 required 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="email">
                Email
              </Label>
              <Input 
                 className="input-field" 
                 id="email" 
                 value={formData.Email}
                 onChange={handleChange}
                 placeholder="Enter your email" 
                 required type="email" 
                 />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="date">
                Date
              </Label>
              <Input className="input-field" id="date" required type="date" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="active-projects">
                Active projects
              </Label>
              <Textarea
                className="input-field"
                id="active-projects"
                placeholder="Enter your active projects"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="image">
                Passport image
              </Label>
              <Input accept="image/*" className="input-field" id="image" required type="file" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center">
          <Button variant="outline">Cancel</Button>
          <Button className="ml-auto">Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
};
}