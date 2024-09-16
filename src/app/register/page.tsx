import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-4 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Бүртгүүлэх</h2>

        {/* Email */}
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>

        {/* Name */}
        <div className="grid gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" />
        </div>

        {/* Password */}
        <div className="grid gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </div>

        {/* Repeat Password */}
        <div className="grid gap-1.5">
          <Label htmlFor="repeat-password">Repeat Password</Label>
          <Input
            type="password"
            id="repeat-password"
            placeholder="Confirm your password"
          />
        </div>

        <p className="text-sm text-gray-600">Password must contain a capital letter.</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Button className="bg-blue-600 text-white w-full">Register</Button>
          <Button className="border border-gray-300 w-full">Нэвтрэх</Button>
        </div>
      </div>
    </div>
  );
}
