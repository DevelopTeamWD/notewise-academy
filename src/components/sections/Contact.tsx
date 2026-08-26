"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Button } from "@/components/ui";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Custom validation via toast only
    if (!form.firstName.trim()) {
      toast.error("First name is required.");
      return;
    }
    if (!form.lastName.trim()) {
      toast.error("Last name is required.");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Email is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!form.phone.trim()) {
      toast.error("Phone number is required.");
      return;
    }
    if (!form.message.trim()) {
      toast.error("Message is required.");
      return;
    }

    // Submit to Netlify via fetch
    const formData = new URLSearchParams();
    formData.append("form-name", "contact");
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then(() => {
        toast.success("Message sent successfully! We'll be in touch soon.");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="bg-white px-5 lg:px-20 py-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form side */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[480px] flex flex-col gap-8 py-7">
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-[40px] leading-[1.2] text-[#18181b]">
                  Get in touch
                </h2>
                <p className="text-lg leading-[1.5] text-[#3f3f46]">
                  We&#39;d love to hear from you. Fill out the form below.
                </p>
              </div>

              <form
                name="contact"
                method="POST"
                noValidate
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstName" className="text-sm font-medium text-[#18181b]">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={handleChange}
                      className="h-12 px-4 rounded-lg border border-[#d4d4d8] text-base text-[#18181b] placeholder:text-[#71717a] focus:outline-none focus:border-[#8c00ff] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastName" className="text-sm font-medium text-[#18181b]">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={handleChange}
                      className="h-12 px-4 rounded-lg border border-[#d4d4d8] text-base text-[#18181b] placeholder:text-[#71717a] focus:outline-none focus:border-[#8c00ff] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-[#18181b]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="h-12 px-4 rounded-lg border border-[#d4d4d8] text-base text-[#18181b] placeholder:text-[#71717a] focus:outline-none focus:border-[#8c00ff] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-[#18181b]">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="h-12 px-4 rounded-lg border border-[#d4d4d8] text-base text-[#18181b] placeholder:text-[#71717a] focus:outline-none focus:border-[#8c00ff] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-[#18181b]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your musical goals..."
                    value={form.message}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg border border-[#d4d4d8] text-base text-[#18181b] placeholder:text-[#71717a] focus:outline-none focus:border-[#8c00ff] transition-colors resize-none"
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-[#d4d4d8] text-[#8c00ff] focus:ring-[#8c00ff]"
                  />
                  <span className="text-sm leading-[1.5] text-[#3f3f46]">
                    You agree to our friendly privacy policy.
                  </span>
                </label>

                <Button variant="primary" size="full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Image side */}
          <div className="flex-1 hidden lg:block relative overflow-hidden min-h-[800px]">
            <Image
              src="/images/contact/contact.png"
              alt="Music academy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
