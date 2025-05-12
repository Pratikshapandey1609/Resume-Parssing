import sys
import fitz  # PyMuPDF
import re
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load job description
with open("sample_data/job_description.txt", "r") as f:
    job_description = f.read()

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def extract_email(text):
    match = re.search(r'\S+@\S+', text)
    return match.group() if match else ""

def extract_phone(text):
    match = re.search(r'\+?\d[\d\s-]{8,15}', text)
    return match.group() if match else ""

def calculate_similarity(text1, text2):
    vectorizer = TfidfVectorizer(stop_words='english')
    vectors = vectorizer.fit_transform([text1, text2])
    score = cosine_similarity(vectors[0:1], vectors[1:2])[0][0]
    return round(score * 100, 2)  # Convert to 0–100

if __name__ == "__main__":
    resume_path = sys.argv[1]
    resume_text = extract_text_from_pdf(resume_path)

    email = extract_email(resume_text)
    phone = extract_phone(resume_text)
    score = calculate_similarity(resume_text, job_description)

    result = {
        "email": email,
        "phone": phone,
        "score": score,
        "message": "Resume analyzed successfully"
    }

    print(json.dumps(result))
