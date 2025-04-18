

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aiExperience: "",
    futureInterest: "",
    feedback: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const cardRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate card in
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0, rotate: -2 },
        { y: 0, opacity: 1, rotate: 0, duration: 1.2, ease: "power3.out" }
      );

      // Yo-yo gentle float
      gsap.to(cardRef.current, {
        y: "+=10",
        rotate: "+=1",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3,
      });
    }

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.2 }
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Rotate + fade out before showing thank you
    gsap.to(cardRef.current, {
      rotateY: 180,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setShowThankYou(true);
        gsap.fromTo(
          cardRef.current,
          { rotateY: -180, opacity: 0 },
          { rotateY: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      },
    });

    console.log("Submitted:", formData);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      aiExperience: "",
      futureInterest: "",
      feedback: "",
    });
    setShowThankYou(false);
    setFocusedField(null);
  };

  return (
    <div className="min-h-screen mb-10 w-full flex flex-col items-center justify-center px-4 space-y-8">
    
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold text-white font-[Orbitron] tracking-wide text-center"
      >
        Give Us Your Feedback 🤖
      </h1>

    
      <div
        ref={cardRef}
        className="w-full max-w-2xl p-8 rounded-xl shadow-xl backdrop-blur-lg border border-white/10"
      >
        {!showThankYou ? (
          <form onSubmit={handleSubmit} className="space-y-6">
          
            <InputField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              type="text"
            />

           
            <InputField
              label="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              type="email"
            />

         
            <SelectField
              name="aiExperience"
              value={formData.aiExperience}
              onChange={handleChange}
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              options={[
                "Beginner - Just exploring",
                "Intermediate - Using regularly",
                "Advanced - Building with AI",
              ]}
              placeholder="Your AI Experience"
            />

           
            <SelectField
              name="futureInterest"
              value={formData.futureInterest}
              onChange={handleChange}
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              options={[
                "Text and language models",
                "Image generation",
                "Audio and voice synthesis",
                "Coding assistance",
                "Multimodal systems",
              ]}
              placeholder="AI Areas of Interest"
            />

           
            <div className={`relative transition-all duration-300 ${focusedField === "feedback" ? "scale-105" : ""}`}>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                onFocus={() => setFocusedField("feedback")}
                onBlur={() => setFocusedField(null)}
                placeholder="Share your thoughts on AI's future..."
                rows={4}
                className="w-full p-3 pl-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-400 focus:outline-none resize-none transition-all"
                required
              ></textarea>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${focusedField === "feedback" ? "w-full" : "w-0"}`}></div>
            </div>

          
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="text-white text-center space-y-4">
            <h2 className="text-3xl font-bold">Thank You! 🙌</h2>
            <p className="text-white/70">Your feedback has been received. We appreciate your time!</p>
            <button
              onClick={resetForm}
              className="mt-4 px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const InputField = ({ label, name, value, onChange, focusedField, setFocusedField, type }) => (
  <div className={`relative transition-all duration-300 ${focusedField === name ? "scale-105" : ""}`}>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={() => setFocusedField(name)}
      onBlur={() => setFocusedField(null)}
      placeholder={label}
      className="w-full p-3 pl-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-400 focus:outline-none transition-all"
      required
    />
    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${focusedField === name ? "w-full" : "w-0"}`}></div>
  </div>
);


const SelectField = ({ name, value, onChange, focusedField, setFocusedField, options, placeholder }) => (
  <div className={`relative transition-all duration-300 ${focusedField === name ? "scale-105" : ""}`}>
    <select
      name={name}
      value={value}
      onChange={onChange}
      onFocus={() => setFocusedField(name)}
      onBlur={() => setFocusedField(null)}
      className="w-full p-3 pl-4 rounded-lg bg-white/5 border border-white/10 text-white focus:border-purple-400 focus:outline-none appearance-none transition-all"
      required
    >
      <option value="" disabled className="text-black">{placeholder}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.toLowerCase().split(" ")[0]} className="text-black">
          {opt}
        </option>
      ))}
    </select>
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none">▼</div>
    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${focusedField === name ? "w-full" : "w-0"}`}></div>
  </div>
);

export default Feedback;
