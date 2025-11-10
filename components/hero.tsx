"use client"

export function Hero() {
  return (
    <main style={{ 
        padding: "9% 5% 3%",
        width: "90%",
        margin: "0 auto"
      }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
        {/* Greeting */}
        <div className="flex items-center" style={{ gap: "2%" }}>
          <p className="font-mono" style={{ 
            color: "#64ffda",
            fontSize: "0.9vw"
          }}>
            Hi, my name is
          </p>
        </div>

        {/* Name */}
        <div>
          <h1 className="font-bold" style={{ 
            color: "#ccd6f6",
            fontSize: "5vw",
            marginBottom: "2%"
          }}>
            Alejandro Heras Espinosa.
          </h1>
          <h2 className="font-bold" style={{ 
            color: "#8892b0",
            fontSize: "3vw"
          }}>
            Driven by curiosity, powered by data.
          </h2>
        </div>

        {/* Description */}
        <p style={{ 
          color: "#a8b2d1",
          fontSize: "1vw",
          width: "80%",
          lineHeight: "1.6"
        }}>
          Passionate about data and AI, I'm looking for opportunities as a {" "}
          <span className="font-semibold" style={{ color: "#64ffda" }}> Data Analyst, Data Scientist or AI Engineer</span>.
          <br /> I bring one year of hands-on experience in Data engineering and AI analysis.
          <br /> I am trilingual, speaking Spanish, French, and English.
        </p>

        {/* CTA Button */}
        <div style={{ paddingTop: "2%" }}>
          <a
            href="#about"
            className="inline-block border rounded font-mono hover:bg-opacity-10 transition-all"
            style={{
              borderColor: "#64ffda",
              color: "#64ffda",
              backgroundColor: "transparent",
              padding: "1.5% 3%",
              fontSize: "0.9vw"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(100, 255, 218, 0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            Learn more about my journey !
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center" style={{ 
        marginTop: "4%",
        gap: "0.5vh"
      }}>
        <p className="font-mono" style={{ 
          color: "#8892b0",
          fontSize: "0.6vw"
        }}>
          Scroll to explore
        </p>
        <div
          className="border-2 rounded-full flex items-start justify-center"
          style={{ 
            borderColor: "#64ffda",
            width: "3%",
            height: "7vh",
            padding: "0.5%"
          }}
        >
          <div className="rounded-full animate-bounce" style={{ 
            backgroundColor: "#64ffda",
            width: "15%",
            height: "30%"
          }} />
        </div>
      </div>
    </main>
  )
}
