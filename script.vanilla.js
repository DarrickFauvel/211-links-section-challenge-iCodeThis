const linksData = [
  {
    title: "Financing",
    links: [
      {
        name: "Loans",
        url: "#",
      },
      {
        name: "Overdraft facilities",
        url: "#",
      },
      {
        name: "Bank guaranties",
        url: "#",
      },
      {
        name: "Leasing",
        url: "#",
      },
      {
        name: "Factoring",
        url: "#",
      },
      {
        name: "Trade Solutions",
        url: "#",
      },
    ],
  },
  {
    title: "Savings and Investment",
    links: [
      {
        name: "Savings accounts",
        url: "#",
      },
      {
        name: "Asset Management",
        url: "#",
      },
      {
        name: "Commercial paper",
        url: "#",
      },
      {
        name: "Equities",
        url: "#",
      },
      {
        name: "Invest Products",
        url: "#",
      },
      {
        name: "Cash Management",
        url: "#",
      },
    ],
  },
  {
    title: "Transaction Banking",
    links: [
      {
        name: "Coporate app",
        url: "#",
      },
      {
        name: "Internet banking",
        url: "#",
      },
      {
        name: "Mbile banking",
        url: "#",
      },
      {
        name: "Alert services",
        url: "#",
      },
      {
        name: "Accounts",
        url: "#",
      },
      {
        name: "Cards",
        url: "#",
      },
    ],
  },
  {
    title: "Markets",
    links: [
      {
        name: "Market Reports",
        url: "#",
      },
      {
        name: "Equity rates",
        url: "#",
      },
      {
        name: "Commodities",
        url: "#",
      },
      {
        name: "Equities",
        url: "#",
      },
      {
        name: "Foreign Exchange",
        url: "#",
      },
      {
        name: "Investment products",
        url: "#",
      },
    ],
  },
  {
    title: "Calculators and Tools",
    links: [
      {
        name: "Currency converter",
        url: "#",
        icon: "",
      },
      {
        name: "Hourly Rate Converter",
        url: "#",
        icon: "",
      },
      {
        name: "International trade",
        url: "#",
        icon: "",
      },
      {
        name: "IBAN calculator",
        url: "#",
        icon: "",
      },
    ],
  },
]

const linksLists = linksData.filter(
  (linksList) => linksList.title !== "Calculators and Tools"
)

const tabLinksSection = document.getElementById("tab-links")

const generateListLinks = (links) => {
  let htmlContent = ""
  links.forEach(({ name, url }) => {
    htmlContent += `<li><a href=${url}>${name}</a></li>`
  })
  return htmlContent
}

const generateListTitles = (list) => {
  let htmlContent = `<ul>`
  list.forEach(({ title, links }) => {
    htmlContent += `<li class="title">${title}</li>`
    htmlContent += generateListLinks(links)
  })
  htmlContent += `</ul>`
  tabLinksSection.innerHTML = htmlContent
}

generateListTitles(linksLists)
