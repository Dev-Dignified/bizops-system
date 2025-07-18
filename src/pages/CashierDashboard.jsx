import React from "react";
// Change the import paths if components are in src/components, not src/pages/components
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
// Change the CSS import path if dash.css is in src/style/
import "../style/dash.css";

const CashierDashboard = () => {
    const transactions = [
        {id: "#12345", time: "10:30 AM", customer: "Sarah Johnson", amount: "₦120", status: "Completed"},
        {id: "#12346", time: "11:15 AM", customer: "Michael Brown", amount: "₦50", status: "Completed"},
        {id: "#12347", time: "12:00 PM", customer: "Emily Davis", amount: "₦300", status: "Completed"},
        {id: "#12348", time: "12:45 PM", customer: "David Wilson", amount: "₦80", status: "Completed"},
        {id: "#12349", time: "1:30 PM", customer: "Olivia Green", amount: "₦900", status: "Completed"},
    ];

    return (
        <div className="app-container">
            <Header showNav={false} />
            <div className="dashboard-container">
                <SideNav userType="cashier" />
                <div className="layout-container">
                    <main className="main-content">
                        {/*  */}
                        <div className="dashboard-header">
                            <div>
                                <h2 className="dashboard-title">Cashier Dashboard</h2>
                                <p className="dashboard-subtitle">Overview of today's sales and recent transactions.</p>
                            </div>
                        </div>
                        <div className="stats-container">
                            <div className="stat-card">
                                <p className="stat-label">Total Sales Today</p>
                                <p className="stat-value">₦2,450</p>
                            </div>
                            <div className="stat-card">
                                <p className="stat-label">Average Transaction Value</p>
                                <p className="stat-value">₦75</p>
                            </div>
                        </div>
                        <h2 className="transactions-header">Recent Transactions</h2>
                        <div className="transactions-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Time</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction, index) => (
                                        <tr key={index}>
                                            <td>{transaction.id}</td>
                                            <td>{transaction.time}</td>
                                            <td>{transaction.customer}</td>
                                            <td>{transaction.amount}</td>
                                            <td>
                                                <button className="status-btn">{transaction.status}</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CashierDashboard;
