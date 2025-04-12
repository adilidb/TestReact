import React from "react";
import ReactDOM from "react-dom/client";

// নিউজ লিস্ট ডাটা
const newsList = [
  {
    id: 1,
    title: "প্রধানমন্ত্রীর সফর শুরু আজ",
    summary: "প্রধানমন্ত্রী আজ সকালে একটি গুরুত্বপূর্ণ সফরে যাচ্ছেন। সফরকালে কয়েকটি চুক্তি স্বাক্ষরিত হবে।",
    image: "https://via.placeholder.com/600x300?text=Top+News"
  },
  {
    id: 2,
    title: "বাংলাদেশ দল বিশ্বকাপে প্রস্তুত",
    summary: "বিশ্বকাপে অংশ নিতে প্রস্তুতি নিচ্ছে বাংলাদেশ জাতীয় ক্রিকেট দল।",
    image: "https://via.placeholder.com/300x200?text=Sports"
  },
  {
    id: 3,
    title: "বন্যায় বিপর্যস্ত উত্তরাঞ্চল",
    summary: "টানা বৃষ্টিপাতে দেশের উত্তরাঞ্চলে বন্যা পরিস্থিতির অবনতি হয়েছে।",
    image: "https://via.placeholder.com/300x200?text=Flood"
  }
];

// অ্যাপ ফাংশন
function App() {
  return (
    <div style={{ fontFamily: "SolaimanLipi, sans-serif", maxWidth: "960px", margin: "auto", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#D42027" }}>চট্টলার সংলাপ</h1>
        <p style={{ color: "#555" }}>বাংলা নিউজ পোর্টাল</p>
        <hr />
      </header>

      <main>
        <section>
          <img
            src={newsList[0].image}
            alt="Main News"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h2 style={{ marginTop: "15px", color: "#D42027" }}>{newsList[0].title}</h2>
          <p>{newsList[0].summary}</p>
        </section>

        <section style={{ display: "flex", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
          {newsList.slice(1).map((news) => (
            <div key={news.id} style={{ flex: "1 1 45%", background: "#f9f9f9", padding: "10px", borderRadius: "8px" }}>
              <img src={news.image} alt="News" style={{ width: "100%", borderRadius: "5px" }} />
              <h4 style={{ color: "#D42027", marginTop: "10px" }}>{news.title}</h4>
              <p>{news.summary}</p>
            </div>
          ))}
        </section>
      </main>

      <footer style={{ marginTop: "40px", textAlign: "center", color: "#999" }}>
        <hr />
        <p>© 2025 চট্টলার সংলাপ। সর্বস্বত্ব সংরক্ষিত।</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
