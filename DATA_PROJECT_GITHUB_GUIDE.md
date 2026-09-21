# How to Share Data Analytics Projects on GitHub

Data analytics project repositories normally do **not** need an `index.html`. GitHub displays the project through `README.md`; `index.html` is required only when you are hosting a website with GitHub Pages.

## Recommended repository structure

```text
ecommerce-sales-analysis/
├── README.md
├── data/
│   └── sample-sales-data.csv
├── sql/
│   └── analysis.sql
├── notebook/
│   └── analysis.ipynb
├── powerbi/
│   └── ecommerce-dashboard.pbix
├── images/
│   └── dashboard-preview.png
└── insights/
    └── business-insights.md
```

Only include folders that match the tools actually used.

## What the README should explain

1. Project objective and business questions
2. Dataset source and column summary
3. Data cleaning and transformation steps
4. SQL, Excel, Python, or Power BI workflow
5. Dashboard screenshots
6. Key findings and business recommendations
7. Tools used and how to open the files

## Safe sharing rules

- Never upload private company, customer, employee, phone, email, salary, or confidential business data.
- Use an open dataset, anonymized sample data, or a small synthetic sample.
- Add dashboard screenshots so recruiters can review the result without installing Power BI.
- Keep `.sql`, `.py`, `.ipynb`, and documentation files readable and well named.
- A public repository lets people view and fork the code, but they cannot change your original repository unless you give them write access.

## File-size limits to remember

- GitHub browser upload accepts a maximum of 25 MiB per file.
- Git shows a warning above 50 MiB and GitHub blocks normal repository files above 100 MiB.
- For a large `.pbix`, `.xlsx`, or dataset, use Git LFS or keep the large source file in approved cloud storage and publish screenshots plus documentation in GitHub.
- Keep the repository small and never upload a full private database.

## Connect a project to the portfolio

After creating the GitHub repository, copy its URL into the matching project object inside `script.js`:

```js
repoUrl: "https://github.com/USERNAME/ecommerce-sales-analysis"
```

For a public Power BI report, place its approved public link in `liveUrl`. Power BI's **Publish to web** makes the report and its underlying model data accessible to anyone on the internet without sign-in. Use it only for non-confidential portfolio data. If the dataset is private, do not publish it publicly; use screenshots and a PDF summary instead.

## Portfolio website versus analytics project

- The portfolio website needs an entry file such as `index.html` at the top level of the selected GitHub Pages source.
- A normal analytics repository does not need `index.html`; its `README.md` is the main presentation page.
