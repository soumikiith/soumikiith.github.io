/**
 * ============================================================
 *  PORTFOLIO CONFIG — edit this file to update the entire site
 *  Last updated: 2026-03-13T16:45:41.318Z
 * ============================================================
 */

const CONFIG = {
  "personal": {
    "name": "Soumik Kumar Basu",
    "nameLocal": "সৌমিক কুমার বসু",
    "title": "PhD Student",
    "institution": "IIT Hyderabad",
    "department": "Department of Computer Science & Engineering",
    "email": "cs21resch11004@iith.ac.in",
    "photo": "Documents/profile.jpg",
    "photoAlt": "Soumik Kumar Basu"
  },
  "social": {
    "github": null,
    "scholar": null,
    "linkedin": null,
    "twitter": null,
    "dblp": null,
    "orcid": null
  },
  "nav": [
    {
      "label": "Home",
      "href": "index.html"
    },
    {
      "label": "Publications",
      "href": "publications.html"
    },
    {
      "label": "Teaching",
      "href": "teaching.html"
    },
    {
      "label": "Services",
      "href": "services.html"
    },
    {
      "label": "CV",
      "href": "cv.html"
    }
  ],
  "about": {
    "bio": [
      "I'm a PhD student at IIT Hyderabad working in the exciting world of Programming Languages. My research focuses on compile-time optimization techniques to make GPU programs significantly faster.",
      "I'm fortunate to be advised by <strong>Dr. Jyothi Vedurada</strong>. A big shoutout to <strong>Prof. Surojit Bhattacharyya</strong> and <strong>Prof. Sumit Majumdar</strong> from MCKVIE, who ignited my passion for PL and C++.",
      "Always up for interesting collaborations or brainstorming over chai — whether you're working on something revolutionary or just want to chat about research, drop me a message."
    ],
    "interests": [
      "Compiler Optimizations",
      "Program Analysis",
      "CPU-GPU Systems"
    ],
    "hobbies": [
      "Reading books (fighting my tendency toward tsundoku)",
      "Heart-to-heart conversations with my favourite person(s)",
      "Exploring Hyderabad with friends",
      "Culinary adventures around campus — I eat anything 🍔"
    ]
  },
  "news": [
    {
      "date": "July 2025",
      "text": "ECOOP Distinguished Artifact Award for GSOHC",
      "link": null,
      "linkText": "Read more →"
    },
    {
      "date": "April 2025",
      "text": "Paper accepted at ECOOP 2025.",
      "link": "publication.html?id=gsohc",
      "linkText": "Read more →"
    }
  ],
  "publications": [
    {
      "id": "streamalloc",
      "title": "StreamAlloc: A Framework for Analyzing and Transforming CUDA Code to Enable Asynchronous Execution",
      "authors": [
        {
          "name": "Soumik Kumar Basu",
          "self": true
        },
        {
          "name": "Jyothi Vedurada"
        }
      ],
      "venue": "ACM Transactions on Programming Languages and Systems",
      "venueShort": "ACM TOPLAS",
      "year": 2026,
      "type": "Journal Article",
      "featured": true,
      "awards": [],
      "detail": false
    },
    {
      "id": "gsohc",
      "title": "GSOHC: Global Synchronization Optimization in Heterogeneous Computing",
      "authors": [
        {
          "name": "Soumik Kumar Basu",
          "self": true
        },
        {
          "name": "Jyothi Vedurada"
        }
      ],
      "venue": "European Conference on Object-Oriented Programming (ECOOP)",
      "venueShort": "ECOOP 2025",
      "dates": "30 Jun – 4 Jul, 2025",
      "year": 2025,
      "type": "Conference Paper",
      "coreRank": "A",
      "featured": true,
      "awards": [
        {
          "title": "Distinguished Artifact Award",
          "body": "ECOOP",
          "year": 2025
        },
        {
          "title": "Best Presentation Award",
          "body": "IndoSys",
          "year": 2025
        }
      ],
      "abstract": "The use of heterogeneous systems has become widespread and popular in the past decade with more than one type of processor, such as CPUs, GPUs, and FPGAs. A wide range of applications use both CPU and GPU to leverage the benefits of their unique features and strengths. Therefore, collaborative computation between CPU and GPU is essential to achieve high program performance. However, poorly placed global synchronization barriers and synchronous memory transfers are the main bottlenecks to enhanced program performance, preventing CPU and GPU computations from overlapping.\n\nBased on this observation, we propose a new optimization technique called hetero-sync motion that can relocate such barrier instructions to new locations, resulting in improved performance in CPU-GPU heterogeneous programs. Further, we propose GSOHC, a compiler analysis and optimization framework that automatically finds opportunities for hetero-sync motion in the input program and then performs code transformation to apply the optimization. Our static analysis is a context-sensitive, flow-sensitive inter-procedural data-flow analysis with three phases to identify the optimization opportunities precisely. We have implemented GSOHC using LLVM/Clang infrastructure. On A4000, P100 and A100 GPUs, our optimization achieves up to 1.8x, up to 1.9x and up to 1.9x speedups over baseline, respectively.",
      "resources": {
        "pdf": "Publications/gsohc/GSOHC_ECOOP_2025.pdf",
        "artifact": {
          "url": "https://doi.org/10.5281/zenodo.15302892",
          "badge": "Functional / Reusable",
          "available": true
        },
        "audio": "Publications/gsohc/gsohc-summary.wav",
        "video": null,
        "slides": null,
        "code": null
      },
      "citation": "Basu, S.K., Vedurada, J. (2025). GSOHC: Global Synchronization Optimization in Heterogeneous Computing. Proceedings of the European Conference on Object-Oriented Programming (ECOOP 2025), pp. 45-62.",
      "detail": true
    },
    {
      "id": "patent-streamalloc",
      "title": "Method and System for Automatic CUDA Stream Allocation using Static Analysis",
      "authors": [
        {
          "name": "Soumik Kumar Basu",
          "self": true
        },
        {
          "name": "Jyothi Vedurada"
        }
      ],
      "venue": "Patent (IN)",
      "venueShort": "Patent",
      "year": 2025,
      "type": "Patent",
      "awards": [],
      "detail": false
    }
  ],
  "teaching": [],
  "services": [],
  "cv": {
    "pdfPath": "Documents/My_Resume.pdf",
    "embedPdf": false,
    "education": [],
    "experience": [],
    "awards": []
  },
  "footer": {
    "text": "© Soumik Kumar Basu. All rights reserved.",
    "year": null
  }
};
