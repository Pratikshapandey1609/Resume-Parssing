# 🔍 AI Resume Scorer for Company-Specific Optimization

This project is an AI-powered resume scoring application that evaluates resumes against specific company requirements (e.g., Microsoft, Google, etc.). Users can upload a PDF resume, select a company, and instantly receive a compatibility score using Natural Language Processing (NLP) and AI-based matching logic.

---

## 🚀 Features

- ✅ Upload your resume in PDF format
- 🏢 Select the target company (e.g., Microsoft)
- 🤖 AI-based resume parsing and scoring
- 📊 Get real-time feedback and matching percentage
- 💡 Suggestions to improve resume for higher chances

---

## 🛠️ Tech Stack

| Layer         | Technology                     |
|---------------|--------------------------------|
| Frontend      | React.js                       |
| Backend       | Node.js, Express.js            |
| Resume Parser | Python (using `PyPDF2`, `nltk`)|
| AI/Scoring    | Python (custom ML/NLP logic)   |
| Communication | `child_process` (Node <-> Python) |
| File Handling | `multer` for uploads           |
| Styling       | Tailwind CSS / Bootstrap       |

---

## 🧠 How It Works

1. User selects a company and uploads their resume.
2. Resume is sent to the backend using `Express.js` API.
3. The backend stores the PDF and calls a Python script to:
   - Extract text using `PyPDF2`
   - Clean and tokenize text using `nltk`
   - Compare keywords with company-specific JD (pre-defined)
   - Return a match score (in %)
4. Score is sent back and shown in a clean UI.
   

Have questions or suggestions? Reach out via [LinkedIn](https://www.linkedin.com/in/pratiksha-pandey-147770276) or raise an issue!



Thank you for checking out our project!  
We’re constantly working to improve it — your feedback is always welcome.
