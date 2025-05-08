"use client";

import { useState } from "react";
import SecuritySettings from "./_components/SecuritySettings";
import { ISecuritySettings } from "@/app/types/account";
import PasswordRules from "./_components/PasswordRules";
import Card from "@/app/components/ui/Card";
import Devices from "./_components/Devices";
import { connectedDevicesData } from "@/app/mock/security/securityData";
import { IConnectedDevice } from "@/app/types/security";

const SecuritySeen = () => {
  const [securitySettings, setSecuritySettings] = useState<ISecuritySettings>({
    confirmPassword: "",
    currnetPassword: "",
    newPassword: "",
  });

  const [connectedDevices, setConnectedDevices] =
    useState<IConnectedDevice[]>(connectedDevicesData);

  return (
    <div className="space-y-5 pb-5">
      <h1 className="text-2xl font-bold">Security Settings</h1>

      <div className="flex gap-5 flex-col xl:flex-row">
        <Card className="p-5 w-full xl:max-w-[70%]">
          <div className="space-y-5">
            <SecuritySettings
              securitySettings={securitySettings}
              setSecuritySettings={setSecuritySettings}
            />
            <PasswordRules />
          </div>
        </Card>
        <Devices
          connectedDevices={connectedDevices}
          setConnectedDevices={setConnectedDevices}
        />
      </div>
    </div>
  );
};

export default SecuritySeen;
