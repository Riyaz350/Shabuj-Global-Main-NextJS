"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiXMark } from "react-icons/hi2";
import { useCountries } from "use-react-countries";

export default function EnquireModal() {
  const [open, setOpen] = useState(false);
  const { countries } = useCountries();
  const handleOpen = () => setOpen(!open);
  const [value, setValue] = useState("");
  console.log(value);

  const HandleEnquies = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const form = e.target; // Get the form element

    // Gather all form data
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      country: value,
      question: form.question.value,
    };

    console.log(data);
    setValue("");
  };

  return (
    <>
      <Link href={"/"} className="flex justify-between" onClick={handleOpen}>
        Enquire
      </Link>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="!w-[400px] !max-h-[600px] p-5 overflow-y-scroll"
      >
        <DialogHeader className="relative m-0 block">
          <div className="w-4/5">
            <Typography variant="h4" color="blue-gray">
              Enquire About Your Future Study Plan
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600">
              Have questions? Reach out to us with your queries, and we'll
              assist you in your journey to studying abroad.
            </Typography>
          </div>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3 top-3.5"
            onClick={handleOpen}
          >
            <HiXMark className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={(e) => HandleEnquies(e)}>
          <DialogBody className="space-y-4 pb-0">
            {/* Full Name */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Full Name
              </Typography>
              <Input
                required
                type="text"
                color="gray"
                size="lg"
                placeholder="eg. John Doe"
                name="name"
                className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Email */}
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Email
                </Typography>
                <Input
                  required
                  color="gray"
                  size="lg"
                  type="email"
                  placeholder="eg. john@example.com"
                  name="email"
                  className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Phone Number
                </Typography>
                <Input
                  required
                  type="number" // Changed to text for better flexibility with different phone formats
                  color="gray"
                  size="lg"
                  placeholder="eg. 01700000000"
                  name="phone"
                  className="placeholder:opacity-100 !border-gray-400 focus:!border-gray-400"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            {/* Your Country */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Your Country
              </Typography>
              <select
                required
                className={`w-full  outline-0 focus:outline-none  px-5 py-3 rounded-md  !border-gray-400  border placeholder:opacity-100 focus:!border-2`}
                name="country"
                defaultValue={""}
              >
                <option value={""} disabled>
                  <p>Select Your Country</p>
                </option>
                {countries.map(({ name, flags }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            {/* Your Question */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Your Question
              </Typography>
              <Textarea
                rows={4}
                required
                placeholder="eg. Start Your Path to Global Education"
                name="question" // Added name attribute for question
                className="placeholder:opacity-100 focus:!border-gray-400 !border-gray-400"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button type="submit" className="ml-auto bg-[#00399F]">
              Submit Enquiry
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
