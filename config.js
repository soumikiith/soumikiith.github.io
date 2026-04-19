/**
 * ============================================================
 *  PORTFOLIO CONFIG — edit this file to update the entire site
 *  Last updated: 2026-04-19T07:42:10.120Z
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
    "linkedin": "https://www.linkedin.com/in/soumik-kumar-basu-31b008194/",
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
      "I am a PhD student at IIT Hyderabad working in the area of Programming Languages and Compilers. My research focuses on developing compile-time optimization techniques that improve the performance of GPU programs.",
      "I am advised by Dr. Jyothi Vedurada. I am also grateful to Prof. Surojit Bhattacharyya and Prof. Sumit Majumdar from MCKVIE, who first sparked my interest in Programming Languages and C++.",
      "I am always happy to discuss research ideas, collaborations, or interesting problems in compilers and systems. Feel free to reach out."
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
      "date": "March 2026",
      "text": "Our Paper, StreamAlloc accepted to be presented in PLDI 2026",
      "link": null,
      "linkText": ""
    },
    {
      "date": "January 2026",
      "text": "Our Paper, StreamAlloc accpeted in ACM TOPLAS.",
      "link": null,
      "linkText": ""
    },
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
      "venue": "ACM Transactions on Programming Languages and Systems (TOPLAS)",
      "venueShort": "ACM TOPLAS",
      "year": 2026,
      "type": "Journal Article",
      "featured": true,
      "awards": [],
      "detail": true,
      "abstract": "In the CUDA programming model, data transfers on the default stream are synchronous, and, similarly, device kernels launched on the default stream cannot overlap with other kernel computations and data transfers. Overlapping execution can be enabled using asynchronous APIs and streams in CUDA. Using them, however, requires careful handling of data dependencies across multiple data-transfer calls, host operations, and kernel computations to ensure program correctness. Moreover, numerous data transfer calls and kernel calls in a program make it even more challenging to manually assign the appropriate stream identifier for each such call. This challenge remains daunting for non-expert programmers because they lack the right tools and expertise.\n\nTo address this, we propose sync2async, a novel optimization technique that transforms synchronous data transfers and kernel launches into non-default-stream asynchronous calls by allocating stream identifiers (and adding stream synchronizations at appropriate places) to maximize parallelizability while preserving dependencies. To identify sync2async opportunities and apply transformations, we introduce StreamAlloc, a data-flow-analysis-based framework with four components: (1) inter-procedural compositional read-write analysis to identify variables read and written at call sites, (2) intra-procedural flow-sensitive Can-Run-Asynchronously (CRA) analysis to detect data-transfer and kernel calls that can run asynchronously, (3) Data Flow Stream Assignment (DFSA) algorithm to schedule such asynchronous calls to different non-default streams, and (4) a transformation framework to apply sync2async and automatically optimize the input program. We have implemented StreamAlloc using LLVM/Clang. On P100, A4000, and A100 GPUs, sync2async achieves geomean speedups of 1.49x, 1.63x, and 2.02x over the baseline, respectively",
      "citation": "Soumik Kumar Basu and Jyothi Vedurada. 2026. StreamAlloc: A Framework for Analyzing and Transforming CUDA Code to Enable Asynchronous Execution. ACM Trans. Program. Lang. Syst. Just Accepted (March 2026). https://doi.org/10.1145/3799893"
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
  "teaching": [
    {
      "course": "Computer Architecture (CS2323)",
      "role": "Teaching Assistant",
      "term": "October 2021 - December 2021",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Operating Systems (CS3523)",
      "role": "Teaching Assistant",
      "term": "January 2022 - June 2022",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Software Engineering (CS4443)",
      "role": "Teaching Assistant",
      "term": "January 2023 - June 2023",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Compilers II (CS3423)",
      "role": "Teaching Assistant",
      "term": "August 2023 - December 2023",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Introduction to Program Analysis and Optimization (CS5863)",
      "role": "Teaching Assistant",
      "term": "January 2024 - June 2024",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Introduction to Program Analysis and Optimization (CS5863):",
      "role": "Teaching Assistant",
      "term": "January 2025 - June 2025",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Introduction to Program Analysis and Optimization (CS5863):",
      "role": "Teaching Assistant",
      "term": "January 2026 - June 2026",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "Introduction to Programming (ID1063)",
      "role": "Teaching Assistant",
      "term": "August 2024 - Decemeber 2024",
      "institution": "IIT Hyderabad"
    },
    {
      "course": "GPU Programming (CS5013)",
      "role": "Teaching Assistant",
      "term": "August 2025 - December 2025",
      "institution": "IIT Hyderabad"
    }
  ],
  "services": [
    {
      "role": "Artifact Evaluation Committee Member",
      "type": "Review",
      "venue": "PPoPP",
      "venueFull": "ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming",
      "year": 2023,
      "description": null
    },
    {
      "role": "Moderator",
      "type": "Volunteer",
      "venue": "ACM IITH Student Chapter",
      "venueFull": null,
      "year": 2023,
      "description": null
    },
    {
      "role": "Organizing Committee Member",
      "type": "Volunteer",
      "venue": "CSI Regional Chapter Convention",
      "venueFull": null,
      "year": 2019,
      "description": null
    },
    {
      "role": "",
      "type": "Review",
      "venue": "",
      "venueFull": null,
      "year": 2026,
      "description": null
    }
  ],
  "cv": {
    "pdfPath": "Documents/My_Resume.pdf",
    "embedPdf": false,
    "education": [
      {
        "degree": "PhD",
        "institution": "IIT Hyderabad",
        "period": "Jul 2021 - ",
        "details": "Computer Science and Engineering"
      },
      {
        "degree": "BTech",
        "institution": "MCKV Institute of Engineering",
        "period": "Jul 2017 - Jul 2021",
        "details": "Computer Science and Engineering"
      }
    ],
    "experience": [],
    "awards": []
  },
  "footer": {
    "text": "© Soumik Kumar Basu. All rights reserved.",
    "year": null
  },
  "newsLimit": 2
};
