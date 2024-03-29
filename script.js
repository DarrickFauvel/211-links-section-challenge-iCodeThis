const handleVoidClick = (e) => e.preventDefault()

const Link = ({ link }) => (
  <a
    onClick={handleVoidClick}
    href="#"
    class="block text-delftBlue normal-case hover:font-medium hover:translate-x-0.5 transition">
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
        "Mobile banking",
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
      role="tabpanel"
      class={`px-4 py-3 rounded grid gap-3 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-28 bg-${currentTab.color}/5 transition`}>
      {data.map((service, index) => (
        <li>
          <h2 class="text-cadetGray uppercase">{service.title}</h2>
          <Links links={service.links} />
        </li>
      ))}
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
      <ul role="tablist" class={`bg-seasalt p-2 rounded flex gap-2 w-fit`}>
        {tabs.map((tab) => (
          <li role="tab" key={tab.title}>
            <button
              onClick={() => setCurrentTabTitle(tab.title)}
              class={`px-4 py-1 rounded cursor-pointer ${
                currentTabTitle === tab.title &&
                `bg-${tab.color} text-white shadow transition hover:bg-${tab.color}/80`
              }`}>
              {tab.title}
            </button>
          </li>
        ))}
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
        icon: "bitcoin-sign",
        color: "neonBlue",
      },
      {
        name: "Hourly Rate Converter",
        icon: "money-bills",
        color: "heliotrope",
      },
      {
        name: "International trade",
        icon: "basket-shopping",
        color: "frenchRose",
      },
      {
        name: "IBAN calculator",
        icon: "calculator",
        color: "appleGreen",
      },
    ],
  }

  return (
    <ul class="bg-seasalt px-10 py-8 rounded mt-10 lg:mt-28">
      <li>
        <h2 class="text-cadetGray uppercase">{data.title}</h2>
        <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.links.map((tool, index) => (
            <li
              class={`group bg-white rounded shadow hover:bg-${tool.color}/10 hover:shadow-md hover:-translate-y-1 transition`}>
              <a onClick={handleVoidClick} href="#" class="block p-4">
                <div
                  class={`bg-${tool.color}/5 w-11 -ml-4 pl-4 pr-2 py-1 rounded-r-md group-hover:bg-${tool.color}/20`}>
                  <i class={`fa-solid fa-${tool.icon} text-${tool.color}`}></i>
                </div>
                <span class="block mt-3">{tool.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

const Close = () => {
  return (
    <button class="absolute top-5 right-5 bg-seasalt h-10 w-10 rounded-full shadow hover:shadow-md hover:bg-red-100 hover:-translate-y-0.5 transition">
      <i class="fa-solid fa-xmark"></i>
    </button>
  )
}

const App = () => (
  <div class="container mx-auto my-44 px-24 py-16 bg-white rounded-lg relative">
    <Close />
    <BankingTabs />
    <Tools />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"))
