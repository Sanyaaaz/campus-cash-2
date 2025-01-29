import { UserButton } from '@clerk/nextjs';
import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between">
      <div>
        {/* Add your content here */}
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default DashboardHeader;
