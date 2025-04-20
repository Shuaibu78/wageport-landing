import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="WagePort Logo" className="h-18 w-auto" />
        </div>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">
          Cross-border Payroll, Simplified
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
          Send crypto-based salaries instantly and securely to your global team
          with USDT or stablecoins. Trusted. Transparent. Easy.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why WagePort?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Global Payments</h3>
            <p className="text-gray-600">
              Pay team members anywhere in the world without delays or
              conversion issues.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Stablecoin Powered</h3>
            <p className="text-gray-600">
              Use stablecoins like USDT to avoid volatility and ensure salary
              value remains stable.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Employer Friendly</h3>
            <p className="text-gray-600">
              Manage your payroll, add employees, and send payouts—all from one
              clean dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-100">
        <h2 className="text-3xl font-semibold mb-4">
          Start paying globally with ease
        </h2>
        <p className="mb-6 text-gray-700">
          Join other forward-thinking companies simplifying their payroll with
          crypto.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out">
          Launch Dashboard
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WagePort. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
