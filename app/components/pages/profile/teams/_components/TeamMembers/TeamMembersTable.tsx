"use client";

import Input from "@/app/components/ui/Input";
import { ITeamMember, teamMembersData } from "@/app/mock/profile/teamsData";
import TeamMemberCard from "./TeamMemberCard";
import { useEffect, useState } from "react";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
// import { useRouter } from "next/navigation";

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

  // const router = useRouter();

  // const handleEditMember = (memberId: number) {
  //  router.push("/profile")
  // }

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
        <div>
          <p>Are you suer that you want to delete this user?</p>

          <div className="flex items-center justify-between">
            <button
              onClick={() => handleDeleteMember(selectedMember?.id as number)}
            >
              Accept
            </button>
            <Button
              background="primaryPurple"
              border="none"
              textColor="white"
              title="Accept"
              type="button"
              icon={<CheckRoundedIcon />}
              rounded="medium"
              onClick={() => handleDeleteMember(selectedMember?.id as number)}
            />
            <Button
              background="red"
              border="none"
              textColor="white"
              title="Decline"
              type="button"
              icon={<DeleteForeverRoundedIcon />}
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
