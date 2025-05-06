import Card from "@/app/components/ui/Card";
import React from "react";

const BillingHistory = () => {
  return (
    <Card>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Billing History</h1>
        <p className="text-medium-gray">
          Download your previous plan receipts and usage details.
        </p>
      </div>
      <table>
        <tr>
          <th>Billing</th>
          <th>Billing Date</th>
          <th>Amount</th>
          <th>Plan</th>
          <th>Users</th>
        </tr>
      </table>
    </Card>
  );
};

export default BillingHistory;
