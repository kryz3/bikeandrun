"use client";

const AnimatedText = ({ text }) => {
  const words = text.split(" "); // Split text into words

  return (
    <p className="text-lg md:text-xl font-semibold leading-relaxed">
      {words.map((word, index) => (
        <span
          key={index}
          className="animated-word"
          style={{ animationDelay: `${index * 0.1}s` }} // Delay per word
        >
          {word}
          <span>&nbsp;</span> {/* Preserve spaces */}
        </span>
      ))}
      <style jsx>{`
        @keyframes wordFade {
          0% { color: #fdb515; } /* Yellow */
          50% { color: #fea0a1; } /* Soft Red */
          100% { color: #76ccee; } /* Light Blue */
        }

        .animated-word {
          display: inline-block;
          animation: wordFade 2s infinite alternate;
          animation-fill-mode: both; /* Ensures the first frame applies immediately */
        }
      `}</style>
    </p>
  );
};

export default AnimatedText;
