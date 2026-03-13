import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

function ExpenseCharts({ expenses }) {

    const categories = {};

    expenses.forEach((expense) => {
        const category = expense.category || "Other";

        if (!categories[category]) {
            categories[category] = 0;
        }

        categories[category] += Number(expense.amount);
    });

    const pieData = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: [
                    "#4CAF50", // Food
                    "#2196F3", // Groceries
                    "#FF5722", // Gas
                    "#9C27B0", // Entertainment
                    "#FFC107", // Bills
                    "#607D8B"  // Misc
                ]
            }
        ]
    };

    const monthlyTotals = {};

    expenses.forEach((expense) => {
        const month = new Date(expense.id).toLocaleString("default", { month: "short" });

        if (!monthlyTotals[month]) {
            monthlyTotals[month] = 0;
        }

        monthlyTotals[month] += Number(expense.amount);
    });

    const barData = {
        labels: Object.keys(monthlyTotals),
        datasets: [
            {
                label: "Monthly Spending",
                data: Object.values(monthlyTotals),
            }
        ]
    };

    return (
        <div style={{ width: "400px" }}>
            <h3>Category Breakdown</h3>
            <Pie data={pieData} />

            <h3 style={{ marginTop: "40px" }}>Monthly Spending</h3>
            <Bar data={barData} />
        </div>
    );
}

export default ExpenseCharts;