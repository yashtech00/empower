"use client"

import { useState } from "react";

export function StartupInfo() {
    const [companyName, setCompany] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [companyUrl, setCompanyUrl] = useState("")
    const [companyDes, setCompanyDes] = useState("")
    const [financialStage, setFinancialStage] = useState("")
    const [fundRequest, setFundRequest] = useState("")
    const [previousFund, setPreviousFund] = useState("")
    const [industry, setIndustry] = useState("")
    
    const [newStartupInfo, setNewStartupInfo] = useState([]);

    const handleStartupInfo = () => {
        
    }
    return (
        <div>
            <div>
                <div>
                    <label>Company Name</label>
                    <input
                        placeholder="Enter your company name"
                        className="px-6 py-4"
                        type="company_name"
                        value={companyName}
                    
                    />
                    <label>Contact Name</label>
                    <label>Phone Number</label>
                    <label>email</label>
                    <label>Company Url</label>
                    <label>Company Description</label>
                    <label>Financial Stage</label>
                    <label>How much are u requesting? </label>
                    <label>Previous Funding</label>
                    <label>Industry</label>
                </div>
            </div>
        </div>
    )
}