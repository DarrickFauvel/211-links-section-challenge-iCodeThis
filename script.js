const Link = ({ link }) => (
  <a href="#" class="block text-delftBlue normal-case hover:font-medium">
    {link}
  </a>
)

const Links = ({ links }) => (
  <ul class="mt-1 mb-4">
    {links.map((link, index) => {
      return (
        <li key={index}>
          <Link link={link} />
        </li>
      )
    })}
  </ul>
)

const Services = ({ currentTab }) => {
  const data = [
    {
      title: "Financing",
      links: [
        "Loans",
        "Overdraft facilities",
        "Bank guaranties",
        "Leasing",
        "Factoring",
        "Trade Solutions",
      ],
    },
    {
      title: "Savings and Investment",
      links: [
        "Savings accounts",
        "Asset Management",
        "Commercial paper",
        "Equities",
        "Invest Products",
        "Cash Management",
      ],
    },
    {
      title: "Transaction Banking",
      links: [
        "Coporate app",
        "Internet banking",
        "Mbile banking",
        "Alert services",
        "Accounts",
        "Cards",
      ],
    },
    {
      title: "Markets",
      links: [
        "Market Reports",
        "Equity rates",
        "Commodities",
        "Equities",
        "Foreign Exchange",
        "Investment products",
      ],
    },
  ]

  if (currentTab.title === "Personal") {
    data.reverse()
  }

  return (
    <ul
      class={`px-4 py-3 rounded grid gap-3 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-28 bg-${currentTab.color}/20 transition`}>
      {data.map((service, index) => {
        return (
          <li>
            <span class="text-cadetGray uppercase">{service.title}</span>
            <Links links={service.links} />
          </li>
        )
      })}
    </ul>
  )
}

const BankingTabs = () => {
  const [currentTabTitle, setCurrentTabTitle] = React.useState("Business")
  const tabs = [
    { title: "Personal", color: "calPolyGreen" },
    { title: "Business", color: "persianBlue" },
  ]

  const currentTab = tabs.filter((tab) => tab.title === currentTabTitle)

  return (
    <>
      <ul class="bg-seasalt p-2 rounded flex gap-2 w-fit">
        {tabs.map((tab) => {
          return (
            <li
              class={`px-4 py-1 rounded cursor-pointer ${
                currentTabTitle === tab.title &&
                `bg-${tab.color} text-white shadow transition`
              }`}
              key={tab.title}
              onClick={() => setCurrentTabTitle(tab.title)}>
              {tab.title}
            </li>
          )
        })}
      </ul>

      <Services currentTab={currentTab[0]} />
    </>
  )
}

const Tools = () => {
  const data = {
    title: "Calculators and Tools",
    links: [
      {
        name: "Currency converter",
        icon: "bitcoin",
      },
      {
        name: "Hourly Rate Converter",
        icon: "money-bills",
      },
      {
        name: "International trade",
        icon: "basket-shopping",
      },
      {
        name: "IBAN calculator",
        icon: "calculator",
      },
    ],
  }

  return <h1>Calculators & Tools</h1>
}

const App = () => (
  <div class="container mx-24 my-44 px-24 py-16 bg-white border rounded-lg">
    <BankingTabs />
    <Tools />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))
