"use client";
import { useState } from "react";
type ToastType = "success" | "error" | null;

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
  } | null>(null);

  const [errors, setErrors] = useState({
    fullName: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000); // Auto-dismiss after 4 seconds
  };

  const validate = () => {
    let valid = true;
    let newErrors = { fullName: "", message: "" };

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    return valid;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        showToast("success", result.message);
        new FormData();
        setFullName("");
        setMessage("");
        setErrors({ fullName: "", message: "" });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        showToast("error", result.message);
      }
    } catch (error) {
      showToast("error", error as string);
      console.log("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4 md:p-8 shadow-[0_0_20px_1px_#ffffff] rounded-3xl">
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-lg text-white text-lg shadow-lg transition-all duration-300 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="w-full">
        <h2 className="text-4xl font-semibold text-green-500 mb-4">
          Get in touch
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Let's build something great
            </h2>
            <p className="text-gray-400 mt-2 text-lg">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>
          </div>

          <div>
            <p className="text-green-500 text-lg">● Available for freelance</p>
          </div>

          <div>
            <p className="text-gray-400 text-md">Prefer email?</p>
            <p className="text-green-500 text-lg cursor-pointer">
              prasankc2000@gmail.com
            </p>
          </div>
        </div>
        {/* LEAVE A MESSAGE FOR ME */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-2 "
        >
          <div className="flex flex-col">
            <label className="text-white text-xl">
              Full Name<span className="text-red-500"> *</span>
            </label>
            <input
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`bg-white py-2 px-3 rounded-sm outline-none text-xl shadow-inner focus:ring-2 focus:ring-green-500 transition ${
                errors.fullName ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-white text-xl">
              Message<span className="text-red-500"> *</span>
            </label>
            <textarea
              name="message"
              value={message}
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
              className={`bg-white py-2 px-3 rounded-sm outline-none text-xl shadow-inner focus:ring-2 focus:ring-green-500 transition ${
                errors.message ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="w-full flex md:justify-end mt-2">
            <button
              type="submit"
              disabled={loading}
              className="group bg-transparent rounded-sm border-green-600 border-2 text-2xl text-green-600 hover:bg-green-600 hover:text-white px-3 py-1 transition flex items-center gap-2"
            >
              {loading ? "Sending..." : success ? "✓ Sent" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
