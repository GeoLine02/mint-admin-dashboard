"use client";

import Input from "@/app/components/ui/Input";
import { ITeamMember, teamMembersData } from "@/app/mock/profile/teamsData";
import TeamMemberCard from "./TeamMemberCard";
import { useEffect, useState } from "react";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const TeamMembersTable = () => {
  const [teamMembers, setTeamMembers] =
    useState<ITeamMember[]>(teamMembersData);

  const [areAllMembersChecked, setAreAllMembersChecked] =
    useState<boolean>(false);

  const [isConfirmationModalOpne, setIsConfirmationModalOpen] =
    useState<boolean>(false);

  const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(
    null
  );

  const handleCheckMember = (memberId: number) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === memberId
          ? { ...member, checked: !member.checked }
          : member
      )
    );
  };

  useEffect(() => {
    if (teamMembers.every((member) => member.checked === true)) {
      setAreAllMembersChecked(true);
    } else {
      setAreAllMembersChecked(false);
    }
  }, [teamMembers]);

  const handleCheckAllMembers = () => {
    setAreAllMembersChecked(!areAllMembersChecked);
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) => ({
        ...member,
        checked: !areAllMembersChecked,
      }))
    );
  };

  const handleDeleteMember = (memberId: number) => {
    const filteredMembers = teamMembers.filter(
      (member) => member.id !== memberId
    );
    setTeamMembers(filteredMembers);
    setIsConfirmationModalOpen(false);
  };

  const handleOpenConfirmationModal = (memberId: number) => {
    const selectedMember = teamMembers.find((member) => member.id === memberId);
    setSelectedMember(selectedMember as ITeamMember);
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="px-6 py-4 text-left">
                <div className="flex items-center gap-2">
                  <Input
                    onChange={handleCheckAllMembers}
                    name="selectAll"
                    type="checkbox"
                    checked={areAllMembersChecked}
                  />
                  <span className="font-medium">Name</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left font-medium">Role</th>
              <th className="px-6 py-4 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {teamMembers.map((member) => (
              <tr key={member.id} className="border-t border-light-gray">
                {/* ✨ Each td made flex-center */}
                <td className="px-6 py-6">
                  <div className="flex items-center">
                    <TeamMemberCard
                      checked={member.checked}
                      handleCheck={handleCheckMember}
                      id={member.id}
                      memberEmail={member.memberEmail}
                      memberImage={member.memberImage}
                      memberName={member.memberName}
                    />
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center">
                    <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      {member.memberRole}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-4">
                    <button className="text-sm text-[#89868D] hover:text-primary-purple cursor-pointer">
                      Edit
                    </button>
                    <button
                      onClick={() => handleOpenConfirmationModal(member.id)}
                      className="text-sm text-[#89868D] hover:text-red-500 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isConfirmationModalOpne}
        onClose={handleCloseConfirmationModal}
      >
        <div className="flex flex-col gap-11 p-3">
          <p className="max-w-[300px]">
            Are you sure that you want to delete this user? User will be deleted
            permamently
          </p>

          <div className="flex items-center justify-between">
            <Button
              className="p-1 px-2"
              background="primaryPurple"
              border="none"
              textColor="white"
              title="Accept"
              type="button"
              icon={
                <CheckRoundedIcon
                  sx={{
                    color: "white",
                  }}
                />
              }
              rounded="medium"
              onClick={() => handleDeleteMember(selectedMember?.id as number)}
            />
            <Button
              className="p-1 px-2"
              background="red"
              border="none"
              textColor="white"
              title="Decline"
              type="button"
              icon={
                <CloseRoundedIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              }
              rounded="medium"
              onClick={handleCloseConfirmationModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TeamMembersTable;
