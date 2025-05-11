import axios from "axios";
import { useState } from "react";

export function StartupInfo() {
    const [company_name, setCompanyName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [company_url, setCompanyUrl] = useState("")
    const [company_do, setCompanyDes] = useState("")
    const [financial_stage, setFinancialStage] = useState("")
    const [financial_request, setFundRequest] = useState("")
    const [previous_funding, setPreviousFund] = useState("")
    const [industry, setIndustry] = useState("")
    
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            company_name, phone_number, email, company_url, company_do, financial_stage, financial_request, previous_funding, industry
        };
        console.log('Form submitted:', formData);
        try {
            const res = await axios.post("/api/startupInfo",{formData})
            console.log(res,"startup infos");
            
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-10 bg-orange-50">
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-8 py-6">
                    <h2 className="text-2xl font-bold text-white">Startup Information</h2>
                    <p className="text-blue-100 mt-2">Please fill in your startup details below</p>
                </div>
                
                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="companyName">
                                Company Name
                            </label>
                            <input
                                id="companyName"
                                placeholder="Enter your company name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="text"
                                required
                                value={company_name}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="tel"
                                required
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="companyUrl">
                                Company URL
                            </label>
                            <input
                                id="companyUrl"
                                placeholder="Enter your company URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="url"
                                value={company_url}
                                onChange={(e) => setCompanyUrl(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="companyDes">
                            Company Description
                        </label>
                        <textarea
                            id="companyDes"
                            placeholder="Enter your company description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                            required
                            value={company_do}
                            onChange={(e) => setCompanyDes(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="financialStage">
                                Financial Stage
                            </label>
                            <select
                                id="financialStage"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={financial_stage}
                                onChange={(e) => setFinancialStage(e.target.value)}
                                required
                            >
                                <option value="">Select stage</option>
                                <option value="STARTUP">STARTUP</option>
                                <option value="EARLY">EARLY</option>
                                <option value="EXPANSION">EXPANSION</option>
                                <option value="LATER">LATER</option>
                                
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="industry">
                                Industry
                            </label>
                            <select
                                id="industry"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                required
                            >
                                <option value="">Select industry</option>
                                <option value="technology">Technology</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="finance">Finance</option>
                                <option value="education">Education</option>
                                <option value="retail">Retail</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="fundRequest">
                                Funding Request (USD)
                            </label>
                            <input
                                id="fundRequest"
                                placeholder="Enter the amount"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="number"
                                min="0"
                                required
                                value={financial_request}
                                onChange={(e) => setFundRequest(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="previousFund">
                                Previous Funding (USD)
                            </label>
                            <input
                                id="previousFund"
                                placeholder="Enter previous funding amount"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="number"
                                min="0"
                                value={previous_funding}
                                onChange={(e) => setPreviousFund(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
}